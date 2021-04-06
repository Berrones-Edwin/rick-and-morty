import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Character } from 'src/app/shared/interface/Character.interface';

@Component({
  selector: 'app-characters',
  template: `
    <a style="width: 16rem;" class="card">
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
          <div class="card-text">
            Location
            <p class="location">{{ character.location.name }}</p>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button
          *ngIf="showHideButton"
          (click)="addToFavorite(character.id)"
          class="btn btn-outline-danger"
        >
          Add To favorites
        </button>
      </div>
    </a>
  `,
  styles: [
    `
      a {
        text-decoration: none;
      }
      p.text-muted.location {
        width: 100%;
        word-break: break-all;
        border: 1px solid red;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent implements OnInit {
  @Input() character: Character;
  @Input() showHideButton: boolean = true;
  @Output() favorite: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addToFavorite(id) {
    this.favorite.emit(id);
  }
}
