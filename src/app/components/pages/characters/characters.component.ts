import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Character } from 'src/app/shared/interface/Character.interface';

@Component({
  selector: 'app-characters',
  template: `
    <a
      [routerLink]="['/details/', character.id]"
      style="width: 18rem;"
      class="card"
    >
      <img
        [src]="character.image"
        [alt]="character.name"
        class="card-img-top"
      />
      <div class="card-body">
        <div class="card-title">
          <h5>{{ character.name | slice: 0:15 }}</h5>
          <p
            class="badge"
            [ngClass]="{
              ' badge-primary ': character.gender === 'Male',
              ' badge-warning ': character.gender === 'Female'
            }"
          >
            {{ character.gender }}
          </p>
          <p class="card-text"><b>Specie:</b> {{ character.species }}</p>
          <p
            class="badge"
            [ngClass]="{
              ' badge-danger ': character.status === 'Dead',
              ' badge-success ': character.status === 'Alive'
            }"
          >
            <b>Status:</b> {{ character.status }}
          </p>
        </div>
      </div>
      <div class="card-footer">
        <button class="btn btn-outline-danger">Add To favorites</button>
      </div>
    </a>
  `,
  styles: [
    `
      a {
        text-decoration: none;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent implements OnInit {
  @Input() character: Character;

  constructor() {}

  ngOnInit(): void {}
}
