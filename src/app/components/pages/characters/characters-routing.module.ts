import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CharactersListComponent } from './characters-list/characters-list.component';



const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: CharactersListComponent },
    { path:'favorites',component:CharactersDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharacterRoutingModule { }
