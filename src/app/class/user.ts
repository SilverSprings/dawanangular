export class User {

  address: {
    city: string,
    street: string,
    suite: string,
    zipcode: string,
  };

  constructor(user: Object) {
    Object.assign(this, user);
  }

  public getAddress(): string {
    return `${this.address.suite} - ${this.address.city} - ${this.address.zipcode} - ${this.address.street}`;
  }

}
