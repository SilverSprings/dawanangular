import { Injectable } from '@angular/core';
import {Product} from '../../class/product';
import {isUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Clé/Identifiant dans le locale Storage
  static KEY = 'products';

  products: Array<Product> = [];

  constructor() { }

  public findAll(): Array<Product> {
    const data = localStorage.getItem(ProductService.KEY);
    this.products = [];

    if ( data != null && !isUndefined(data)) { // data !== undefined
      for ( const item of JSON.parse(data) ) { // contraire de parse = stringify
        this.products.push( new Product(item._name, item._price));
        // this.products.push( item as Product);
      }
    }
    return this.products;
  }

  public add(product: Product): void {
    this.products.push(product);
    this.save();
  }

  public delete(ind: number): void {
    this.products.splice(ind, 1);
    this.save();
  }

  public update(product: Product, ind: number): void {
    this.products[ind] = product;
    this.save();
  }

  private save(): void {
    localStorage.setItem(ProductService.KEY, JSON.stringify(this.products));
  }
}
