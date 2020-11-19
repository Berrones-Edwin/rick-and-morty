import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormSearchComponent } from './components/form-search/form-search.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FormSearchComponent
  ],
  exports: [
    HeaderComponent,
    FormSearchComponent

  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
