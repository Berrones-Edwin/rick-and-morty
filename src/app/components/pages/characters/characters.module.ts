import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterRoutingModule } from "./characters-routing.module";
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharactersDetailsComponent } from './characters-details/characters-details.component';



@NgModule({
  declarations: [CharactersListComponent, CharactersDetailsComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule
  ]
})
export class CharactersModule { }
