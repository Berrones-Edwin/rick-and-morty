// Modulos
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from "./components/header/header.component";
import { FormSearchComponent } from "./components/form-search/form-search.component";


const COMPONENTS = [
  HeaderComponent,
  FormSearchComponent
]

@NgModule({
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
