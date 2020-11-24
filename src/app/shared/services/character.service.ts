import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Character } from '../interface/Character.interface';
import { environment } from "../../../environments/environment";
import { Characters } from '../interface/Characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private _http: HttpClient
  ) { }

  getCharacters(query = '', page = 1) {
    const filter = ` ${environment.baseURL}/character/?name=${query}&page=${page} `
    return this._http.get<Characters>(filter)
  }
  getDetails(id: number) {
    return this._http.get<Character>(
      ` ${environment.baseURL}/character/${id}`
    )
  }
}
