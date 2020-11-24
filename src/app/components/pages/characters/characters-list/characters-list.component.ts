import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { DOCUMENT } from "@angular/common";

import { filter, map, take, tap } from "rxjs/operators";
import { Observable } from 'rxjs';

import { CharacterService } from "@shared/services/character.service";

import { Character } from "@shared/interface/Character.interface";
import { Info } from "@shared/interface/Characters.interface";


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  characters: Character[] = [];
  showGoUpButton = false;
  private pageNum = 1;
  private query = "";
  private hideScrollHeight = 200
  private showScrollHeight = 500
  info: Info = {
    count: null,
    pages: null,
    next: null,
    prev: null
  };

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private characterSvc: CharacterService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.onURLChanged();
  }

  ngOnInit(): void {
    this.getCharactersByQuery()
  }

  private onURLChanged() {
    this.router.events
      .pipe(
        filter((events) => events instanceof NavigationEnd)
      )
      .subscribe(() => {
        this.pageNum = 1;
        this.getCharactersByQuery();
      })
  }

  getCharactersByQuery(): void {
    this.activatedRoute.queryParams
      .pipe(
        take(1)
      )
      .subscribe((params: ParamMap) => {
        this.query = params['q']
        this.characters = [];
        this.getDataFromService()
      })
  }

  getDataFromService(): void {

    // this.characters$ = this.characterSvc.getCharacters(this.query, this.pageNum)
    //   .pipe(
    //     take(1),
    //     map(res => {
    //       this.info = res.info
    //       console.log(this.info);
    //       return res.results
    //     })
    //   )

    this.characterSvc.getCharacters(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((resp) => {
        const { info, results } = resp;
        this.characters = [...this.characters, ...results]
        this.info = info

      })
  }
  @HostListener('window:scroll', [])
  onWindowScroll(): void {

    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

  onScrollDown(): void {
    // console.log('scroll');

    if (this.info.next) {
      console.log('next');
      this.pageNum++;
      this.getDataFromService();
    }
  }
  onScrollTop(): void {
    this.document.body.scrollTop = 0; //safari
    this.document.documentElement.scrollTop = 0; //others 
  }

}
