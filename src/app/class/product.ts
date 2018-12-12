export class Product {
    /*
    private name: string;
    private price: number;
    constructor(name?: string, price?: number) {
      this.name = name;
      this.price = price;
    }
    */

  constructor(private _name?: string, private _price?: number) {  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  public toString() {
    return ` Product: [name = ${this.name}; price = ${this.price}]`;
  }
}

