import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { switchMap, take } from 'rxjs/operators';

import { CharacterService } from 'src/app/shared/services/character.service';
import {
  Character,
  LocationCharacter,
  OriginCharacter,
} from 'src/app/shared/interface/Character.interface';
import { Characters } from '@app/shared/interface/Characters.interface';
import { JsonpClientBackend } from '@angular/common/http';
import { isSyntheticPropertyOrListener } from '@angular/compiler/src/render3/util';
import { Observable } from 'rxjs';
import { TrackHttpError } from '@app/shared/models/TrackHttpError';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss'],
})
export class CharactersDetailsComponent implements OnInit {
  characters$: Observable<Characters | TrackHttpError>;
  id: Array<string>;

  constructor(
    private location: Location,
    private characterSvc: CharacterService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params
    //   .pipe(
    //     take(1),
    //     switchMap((params) => this.characterSvc.getDetails(params.id))
    //   )

    if (localStorage.getItem('favorites')) {
      this.id = JSON.parse(localStorage.getItem('favorites')).join(',');
      this.characters$ = this.characterSvc.getMultipleChatacters(this.id+"");
    }
  }

  onGoBack() {
    this.location.back();
  }
}
