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

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss'],
})
export class CharactersDetailsComponent implements OnInit {
  character: Character;

  locationCharacter: LocationCharacter;
  origin: OriginCharacter;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private characterSvc: CharacterService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        take(1),
        switchMap((params) => this.characterSvc.getDetails(params.id))
      )
      .subscribe((data: Character) => {
        if (data) {
          this.character = data;
        
          this.getOrigin();
          this.getlocation();
        }
      });
  }

  getlocation() {
    this.characterSvc
      .getLocation(this.character.location.url)
      .subscribe((data: LocationCharacter) => {
        this.locationCharacter = data;
      });
  }

  getOrigin() {
    this.characterSvc
      .getOrigin(this.character.origin.url)
      .subscribe((data: OriginCharacter) => {
        this.origin = data;
      });
  }
  onGoBack() {
    this.location.back();
  }
}
