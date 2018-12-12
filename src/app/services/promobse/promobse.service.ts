import { Injectable } from '@angular/core';
import {Observable, Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromobseService {

  numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { }

  public getPromisedNumber(): Promise<[number[], number]> {

    const randError = Math.floor( Math.random() * 3 + 1);
    const randTime = Math.floor( Math.random() * 5000 + 1000);
                         // La callback, qui est une fonction, et écrit ici () => {}
    return new Promise( (resolve, reject) => {

      setTimeout( () => {
        if (randError >1 ) {
          resolve([this.numbers, randTime]);
        } else {
          reject( 'Serveur Indisponible');
        }
      }, randTime);
    } );
  }

  public getObservableNumber(): Observable<Number[]> {

    // next(), error(), complete()
    return Observable.create( (subscriber: Subscriber<number[]>) => {
      subscriber.next(this.numbers);

      setTimeout( () => {
        subscriber.next(this.numbers.map( number => number + 10));
      }, 2000);

      setTimeout( () => {
        subscriber.next(this.numbers.map( number => (number + 10) * 10));
        subscriber.complete();
      }, 4000);

    });
  }
}
