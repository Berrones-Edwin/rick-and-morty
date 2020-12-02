import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { CharacterService } from 'src/app/shared/services/character.service';

import { TrackHttpError } from '@app/shared/models/TrackHttpError';
import { Character } from 'src/app/shared/interface/Character.interface';


@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {

  character$: Observable<Character | TrackHttpError>
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
