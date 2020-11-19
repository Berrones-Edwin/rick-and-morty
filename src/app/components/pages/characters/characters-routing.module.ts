import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CharactersDetailsComponent } from './characters-details/characters-details.component';
import { CharactersListComponent } from './characters-list/characters-list.component';



const routes: Routes = [
    // { path: '', redirectTo: 'list/:id', pathMatch: 'full' },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    // { path: 'list/:id', component: CharactersListComponent },
    { path: 'list', component: CharactersListComponent },
    { path: 'details/:id', component: CharactersDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CharacterRoutingModule { }
