import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  Character,
  LocationCharacter,
  OriginCharacter,
} from '../interface/Character.interface';
import { environment } from '../../../environments/environment';
import { Characters } from '../interface/Characters.interface';
import { TrackHttpError } from '../models/TrackHttpError';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private _http: HttpClient) {}

  getCharacters(query = '', page = 1): Observable<Characters | TrackHttpError> {
    const filter = ` ${environment.baseURL}character/?name=${query}&page=${page} `;

    // filter = ` ${environment.baseURL}character/?page=${page} `;
    return this._http
      .get<Characters>(filter)
      .pipe(catchError((err) => this.handleHttpError(err)));
  }

  getDetails(id: number): Observable<Character | TrackHttpError> {
    return this._http
      .get<Character>(` ${environment.baseURL}/character/${id}`)
      .pipe(catchError((err) => this.handleHttpError(err)));
  }
  getLocation(url: string): Observable<LocationCharacter | TrackHttpError> {
    return this._http
      .get<LocationCharacter>(url)
      .pipe(catchError((err) => this.handleHttpError(err)));
  }
  getOrigin(url: string): Observable<OriginCharacter | TrackHttpError> {
    return this._http
      .get<OriginCharacter>(url)
      .pipe(catchError((err) => this.handleHttpError(err)));
  }

  private handleHttpError(
    error: HttpErrorResponse
  ): Observable<TrackHttpError> {
    let data = new TrackHttpError();
    data.errorNumber = error.status;
    data.message = error.statusText;
    data.messageFriendly = 'An error on occured retrienving data.';

    return throwError(data);
  }
}
