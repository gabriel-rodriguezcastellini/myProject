abstract class Product {
  productName: string = "Default";
  price: number = 1000;
  abstract changeName(name: string): void;

  calcPrice() {
    return this.price;
  }
}

class Mobile extends Product {
  changeName(name: string): void {
    this.productName = name;
  }
}

let mobProduct = new Mobile();
console.log(mobProduct);
mobProduct.changeName("Super It Product");
console.log(mobProduct);
