class Product {
    constructor() {
        this.productName = "Default";
        this.price = 1000;
    }
    calcPrice() {
        return this.price;
    }
}
class Mobile extends Product {
    changeName(name) {
        this.productName = name;
    }
}
let mobProduct = new Mobile();
console.log(mobProduct);
mobProduct.changeName("Super It Product");
console.log(mobProduct);
