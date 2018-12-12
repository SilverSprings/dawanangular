import { Component, OnInit } from '@angular/core';
import {PromobseService} from '../../services/promobse/promobse.service';

@Component({
  selector: 'app-promobse',
  templateUrl: './promobse.component.html',
  styleUrls: ['./promobse.component.css']
})
export class PromobseComponent implements OnInit {

  numbers: Array<number>;
  error: string;
  wait: string;
  duration: number;
  progress: string;

  obsNumber: number[];
  message: string;
  resultat: number;

  timeElapsed: number;
  num1: number;
  num2: number;

  constructor(private service:  PromobseService) { }

  ngOnInit() {
    this.timeElapsed = 0;
  }

  public getAsyncNumber(): void {
    this.numbers = [];
    this.error = null;
    this.duration = null;
    this.wait = 'Synchro en cours';
    this.progress = '0%';
    this.service.getPromisedNumber().then( (data: [number[], number]) => {
      this.numbers = data[0];
      this.duration = data[1];
      this.wait = null;
      this.progress = '100%';
    } ).catch((erro: string) => {
      this.error = erro;
      this.wait = null;
    });

    setTimeout(() => {this.progress = '25%'; }, 1000);
    setTimeout(() => {this.progress = '50%'; }, 2000);
    setTimeout(() => {this.progress = '75%'; }, 3000);
  }

  public getMultiNumber(): void {
    this.obsNumber = [];
    this.message = null;

    this.service.getObservableNumber().subscribe(
      (numbers: number[]) => {this.obsNumber = numbers; },
      () => {},
      () => {this.message = 'Synchro terminée !'; } );
  }

  // Lorsqu'on utilise async, j'envoie une promise
  private async monPremierAsync() {
    return 'résultat';
  }

  private async monDeuxiemeAsync() {
    throw new Error('superErreur');
  }

  private addition(a: number, b: number): Promise<number> {
    this.timeElapsed += 2500;
    return new Promise((resolve) => {
      setTimeout( () => { resolve ( a + b ); }, 2500);
    });
  }

  public getAsyncFunctionOK() {
    console.log(this.monPremierAsync());
  }

  public getAsyncFunctionKO() {
    console.log(this.monDeuxiemeAsync());
  }

  public async somme() {
    // this.addition(1, 2 ).then((num: number) => {this.num1 = num; })
    // await ne peut être utilisé que dans dans une méthode qui est async
    // 
    this.num1 = await this.addition(1, 2 );
    this.num2 = await this.addition(5, 6 );
    this.resultat = this.num1 + this.num2 ;
    this.timeElapsed = 0;
  }
}
