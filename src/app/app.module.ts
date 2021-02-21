import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";



import { AppComponent } from './app.component';

import { CharactersModule } from './components/pages/characters/characters.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from "./shared/shared.module";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CharactersModule,
    AuthModule,
    SharedModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
