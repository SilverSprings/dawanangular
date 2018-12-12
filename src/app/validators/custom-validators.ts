import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class CustomValidators {
  // ValidatorFn => (c: AbstractControl): ValidationErrors | null;
  // ValidationErrors => { [key: string]: any }

  // static : méthde de classe, pas d'instance
  public static email(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      if ( control.value != null || control.value !== '') {

        const regexp = new RegExp('^[0-9a-z._-]+@[0-9a-z.-]{2,}\\.[a-z]{2,5}', 'i');
        return ( !regexp.test(control.value)) ? {error_email: control.value } : null;
      }
    };
  }

  public static samesame(toBecompared: AbstractControl ): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // console.log(toBecompared);
      // console.log(control.value);
      if ( control.value != null || control.value !== '') {
        /*if ( toBecompared.value === control.value ) {
          return null;
        } else {
          return {error_samesame: control.value};
        }*/
        return (toBecompared.value === control.value) ? null : {error_samesame: control.value};
      }
    };
  }
}
