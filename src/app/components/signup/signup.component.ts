import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../../validators/custom-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: FormControl;
  password: FormControl;
  confirm: FormControl;
  term: FormControl;

  form: FormGroup;

  passwordMinLength = 8;

  // pour déclarer les injections
  constructor(private fb: FormBuilder) { }

  // gnOnInit : pour initialiser les var
  ngOnInit() {
    // FormControl(default value, [Validators], [asynchronous] Validators]). Un validator, c'est une classe
    this.email = new FormControl(null, [
      Validators.required,
      CustomValidators.email()
      ]);
    this.password = new FormControl(null, [
      Validators.required,
      Validators.minLength(this.passwordMinLength)
      ]);
    this.confirm = new FormControl(null, [
      Validators.required,
      CustomValidators.samesame(this.password)
      ]);
    this.term = new FormControl(false, [Validators.requiredTrue]);

    // Builder : permet de construire des trucs
    this.form = this.fb.group( {
      // email:     ---> c'est depuis l'attribut formControlName mis dans la balise dans la vue
      // this.email ---> depuis le composant
      email: this.email,
      password: this.password,
      confirm: this.confirm,
      term: this.term
    });
  }

  // control<T>
  public controlEmail(): string|boolean {
    if (this.email.touched) {
      if (this.email.hasError('required')) {
        return `L'email est obligatoire`;
      }
       if (this.email.hasError('error_email')) {
        return `L'email contient une erreur`;
      }
    }
    return false;
  }

  public controlPassword(): string|boolean {
    if (this.password.touched) {
      if (this.password.hasError('required')) {
        return `Le password est obligatoire`;
      }
      if (this.password.hasError('minlength')) {
        return `Le password doit contenir ${this.passwordMinLength} caractères (actuellement, le password contient
        ${this.password.value.length} caractères)`;
      }
    }
    return false;
  }

  public controlConfirm(): string|boolean {
    if (this.confirm.touched) {
      if (this.confirm.hasError('required')) {
        return `La confirmation est obligatoire`;
      }
      if (this.confirm.hasError('error_samesame')) {
        return `La confirmation de password n'est pas égale au paswword `;
      }
    }
    return false;
  }

  public controlTerm(): string|boolean {
    if (this.term.dirty) {
      if (this.term.hasError('required')) {
        return `Le cochage des CGU est obligatoire`;
      }
    }
    return false;
  }

  public signup(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.form.reset();
    }
  }

}
