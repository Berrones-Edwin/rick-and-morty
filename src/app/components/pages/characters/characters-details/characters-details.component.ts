import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Character } from 'src/app/shared/interface/Character.interface';

import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  character$: Observable<Character>
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private characterSvc: CharacterService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        take(1)
      )
      .subscribe((params) => {
        const { id } = params
        this.character$ = this.characterSvc.getDetails(id)
      })
  }
  onGoBack() {
    this.location.back();
  }

}
