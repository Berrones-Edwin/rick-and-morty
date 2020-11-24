import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit {

  form: FormGroup

  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.createForm();
  }

  ngOnInit(): void { }

  createForm() {
    this.form = this._formBuilder.group({
      search: ['', [Validators.minLength(3), Validators.required]]
    })
  }

  searchCharacter(event: Event) {
    event.preventDefault();

    if (this.form.invalid) return;

    const { search } = this.form.value

    this._router.navigate(['/list'], {
      queryParams: {
        q: search
      }
    }).then((res) => console.log('search'))
  }

  get searchField() {
    return this.form.get('search')
  }

  get searchIsValid() {
    return this.searchField.valid && this.searchField.touched
  }
  get searchIsInvalid() {
    return this.searchField.invalid && this.searchField.touched
  }

}
