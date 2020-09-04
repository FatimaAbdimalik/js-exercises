/*

Complete the rest of this code to create an online shopping cart.

The output of running your code should be:

    Your shopping cart has 3 items: Toilet Roll, Pasta, Eggs

    
*/

class ShoppingCart {
  // Add your code here

  // constructor(_item1, _item2, _item3) {
  constructor() {
    // this.item1 = _item1;
    // this.item2 = _item2;
    // this.item3 = _item3;
    this.ShoppingCart = [];
  }

  addItem(item) {
    this.ShoppingCart.push(item);
  }
  cartContains() {
    // console.log(`My cart has ${this.item1}, ${this.item2} and ${this.item3}`);
    // to output everything contained in your cart
    console.log(`The shopping cart has ${this.ShoppingCart}`);
  }
}

let myCart = new ShoppingCart("Toilet Roll", "Pasta", "Eggs"); // Creates an empty shopping cart

myCart.addItem("Toilet Roll");
myCart.addItem("Pasta");
myCart.addItem("Eggs");

myCart.cartContains();
