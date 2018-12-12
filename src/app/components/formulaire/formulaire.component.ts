import { Component, OnInit } from '@angular/core';
import {Product} from '../../class/product';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  // Comment typer un tableau ?
  // 1ère manière ===> products: Product[];
  // 2ème manière
  products: Array<Product> = [];
  product: Product = new Product();

  index = -1;
  btn = 'Ajouter';

  constructor() { }

  ngOnInit() {
  }

  public addProduct(): void {
    console.log(this.index);
    if (this.index === -1) {
      this.products.push( this.product );
    } else {
      this.products[this.index] = this.product;
      this.index = -1;
      this.btn = 'Ajouter';
    }
    // à chaque submit, le reset de form va effacer name et price. on l'effectue donc sur un nouveau produit
    // et pas sur l'objet qu'on a ajouté au tableau
    // En plus, l'objet ajouté doit êtr eun noueau objet et pas le même, d'ou le New Product
    this.product = new Product();
  }

  public productToFillForm(prd: Product, index: number): void {
    // Je lui envoie la référence de l'objet, et du coup je modifiera toujours le même objet
    //  this.product = prd;

    // Je lui envoie le numéro de l'index et j'utilise le constructeur
        console.log (index);
    //  Si je créer un nouveau produit, je ne manipule pas l'objet du tableau
        this.product = new Product(this.products[index].name, this.products[index].price);
    //  Si j'affecte avec le product du tableau que je renvoi, le [(ngModel)] ca directement modifier !
    //  this.product = prd;
        this.index = index;
        this.btn = 'Modifier';
    //  Permet d'ajouter depuis un modèle
    //  this.product.name = prd.name;
    //  this.product.price = prd.price;
    //  this.products.splice(i, 1);
  }
}
