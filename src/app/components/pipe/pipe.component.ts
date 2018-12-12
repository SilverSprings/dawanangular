import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  deviseCAD = 'CAD';
  date = new Date();

  object = {nom: 'Doe', prenom: 'John', age: 30, profession: 'Patissier'};

  user = null;

  users = ['Antoine', 'Damien', 'Gael', 'Yohann', 'Severine',
           'Audrey', 'Alexis', 'Tristan', 'Lam', 'Jean Marc', 'Jean', 'Marie', 'Sophie', 'Michel', 'Eleonore'];

  NumPage = 1;
  CurrentUser = 0;
  options = [3, 5, 10];
  NbDisp = 3;
  MaxPage = Math.ceil( this.users.length / this.NbDisp  ); // arrondi


  nbElt = 5;
  index = 1;
  pages = Math.ceil( this.users.length  / this.nbElt );
  start = 0;
  end = this.nbElt;

  constructor() { }

  ngOnInit() {
  }

  /*public fctPrev(): void {
    if (this.CurrentUser !== 0) {
      this.CurrentUser = this.CurrentUser - 5;
      this.NumPage = this.NumPage - 1;
    }
  }*/

  /*public fctNext(): void {
    const Lg = this.users.length;
    if (this.CurrentUser +5 !== Lg) {
      this.CurrentUser = this.CurrentUser + this.NbDisp;
      this.NumPage = this.NumPage + 1;
    }
  }*/
  public fctPrev(): void {
    if (this.CurrentUser > 0) {
      this.CurrentUser = this.CurrentUser - this.NbDisp;
      this.NumPage = this.NumPage - 1;
    }
  }

  public fctNext(): void {
    const Lg = this.users.length;
    // console.log(Lg);
    if (this.CurrentUser + this.NbDisp < Lg) {
      this.CurrentUser = this.CurrentUser + this.NbDisp;
      this.NumPage = this.NumPage + 1;
      console.log(this.CurrentUser);
    }
  }

  public getNbDisp(): void {
    // Parsing
    this.NbDisp = +this.NbDisp;
    this.MaxPage = Math.ceil( this.users.length / this.NbDisp  );
    console.log(this.NbDisp);
    console.log(this.MaxPage);
    this.NumPage = 1;
    this.CurrentUser = 0;
  }

  /*----------------------------------------------------*/
  /*        Solution Prof                               */
  /*        '1' ==  1  fait true   (valeur)             */
  /*        '1' === 1  fait false  (valeur ET type      */
  /*----------------------------------------------------*/

  public next(): void  {
    if (this.index < this.pages ) {
      this.index++;
      this.start += this.nbElt;
      this.end += this.nbElt;
    }
  }

  public prev(): void  {
    if (this.index > 1 ) {
      this.index--;
      this.start -= this.nbElt;
      this.end -= this.nbElt;
    }
  }

  public changeNbElt(): void {
    this.nbElt = +this.nbElt;
    this.index = 1;
    this.pages = Math.ceil( this.users.length  / this.nbElt );
    this.start = 0;
    this.end = this.nbElt;
  }
}
