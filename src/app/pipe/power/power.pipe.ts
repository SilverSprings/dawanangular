import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
  // transform est la méthode qui sera appliqué
  // value : valeur reçue
  // args? : premier argument facultatif
  /*transform(value: any, args?: any): any {
    return null;
  }*/

  transform(value: number, exposant: number, multi?: number): number {
    if (multi != null)  {
      return Math.pow(value, exposant) * multi;
    }
    return Math.pow(value, exposant);
  }
}
