import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  constructor(
    private _router: Router
  ) {
  }

  ngOnInit(): void { }


  searchCharacter(value: string) {

    if (value && value.length > 3) {
      this._router.navigate(['/list'], {
        queryParams: {
          q: value
        }
      })
    }
  }


}
