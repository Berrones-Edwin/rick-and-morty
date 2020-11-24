import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from 'src/app/shared/interface/Character.interface';

@Component({
  selector: 'app-characters',
  template: `
      <div class="card">
        <div class="image">
          <a [routerLink]="['/details',character.id]">
              <img 
                  [src]="character.image" 
                  [alt]="character.name"
                  class="card-image-top"
              >
          </a>
      </div>
      <div class="card-inner">
          <div class="header">
              <a [routerLink]="['/details',1]">
                  <h2> {{character.name | slice:0:15 }}</h2>
              </a>
              <h4 class="text-muted">{{character.gender}}</h4>
              <small class="text-muted">{{character.created | date}}</small>
          </div>
        </div>
    </div>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CharactersComponent implements OnInit {

  @Input() character: Character;

  constructor() { }

  ngOnInit(): void {
  }

}
