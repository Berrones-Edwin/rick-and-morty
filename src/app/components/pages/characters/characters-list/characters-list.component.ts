import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';

import { filter, map, take, tap } from "rxjs/operators";
import { Observable } from 'rxjs';

import { CharacterService } from "../../../../shared/services/character.service";

import { Character } from "../../../../shared/interface/Character.interface";


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  characters$: Observable<Character[]>;
  private pageNum = 1;
  private query = "";
  private hideScrollHeight = 200
  private showScrollHeight = 500

  constructor(
    // private characterSvc: CharacterService
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
        this.getDataFromService()
      })
  }

  getDataFromService(): void {

    this.characters$ = this.characterSvc.getCharacters(this.query, this.pageNum)
      .pipe(
        take(1),
        map(res => res.results)
      )
  }

}
