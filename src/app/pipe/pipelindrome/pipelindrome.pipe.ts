import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipelindrome'
})
export class PipelindromePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    console.log('appel Pipelindorm');
    return value.split('').reverse().join('');
    // split --> créer un tableau de caractère, en précisant un séparateur
    // reverse --> inverse le tableau (premier --> dernier, deuxieme --> avant dernier , etc.)
    // join --> concatène un tableau de chaîne de caractère en une string
  }

}
