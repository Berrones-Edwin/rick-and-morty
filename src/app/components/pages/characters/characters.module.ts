import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from "./characters-routing.module";

import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CharactersComponent } from './characters.component';



@NgModule({
  exports: [
    CharactersListComponent
  ],
  declarations: [CharactersListComponent, CharactersDetailsComponent, CharactersComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    InfiniteScrollModule
  ]
})
export class CharactersModule { }
