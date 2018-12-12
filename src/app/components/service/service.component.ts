import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../class/product';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  name: FormControl;
  price: FormControl;
  form: FormGroup;

  btn: string;
  selected: boolean;
  index: number;

  products: Array<Product>;

  constructor(private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
    console.log( this.productService.findAll() );
    this.name = new FormControl(null, [Validators.required]);
    this.price = new FormControl(null, [Validators.required]);
    //       Validators.pattern('[0-9]')
    this.form = this.fb.group({
      name: this.name,
      price: this.price
    });
    this.init();
    this.products = this.productService.findAll();
  }

  private init() {
    this.btn = 'Ajouter';
    this.selected = false;
    this.index = 1;
  }
  public resetForm() {
    this.form.reset();
    this.init();
  }

  public addProduct(): void {
    if (this.form.valid) {
      if (this.selected) { // Ancien Produit
        this.productService.update(new Product(this.name.value, this.price.value) , this.index);
      } else { // Nouveau produit
        this.productService.add(new Product(this.name.value, this.price.value));
      }
      console.log('vouvou');
    }
  }

  public updProduct(prd: Product, ind: number): void {
    this.name.setValue(prd.name);
    this.price.setValue(prd.price);

    this.index = ind;
    this.selected = true;
    this.btn = 'Confirmation modification';
    console.log('vouvou3');
  }
}
