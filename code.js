class product{
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price;
    }



}
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product; 
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
class ShoppingCart {
    constructor() {
        this.items = []; 
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity; 
        } else {
            const newItem = new ShoppingCartItem(product, quantity);
            this.items.push(newItem); 
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId); 
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0); 
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0); 
    }

    displayItems() {
        this.items.forEach(item => {
            console.log(`${item.product.name} - Quantité: ${item.quantity}, Prix Total: $${item.getTotalPrice().toFixed(2)}`);
        });
    }
}

const product1 = new Product(1, "T-shirt", 19);
const product2 = new Product(2, "Jean", 39);
const product3 = new Product(3, "Casquette", 15);


const cart = new ShoppingCart();
cart.addItem(product1, 2); 
cart.addItem(product2, 1); 
cart.addItem(product3, 3); 
console.log("Éléments du panier :");
cart.displayItems();

console.log(`Total des éléments dans le panier : ${cart.getTotalItems()}`);


console.log(`Prix total du panier : $${cart.getTotalPrice().toFixed(2)}`);

cart.removeItem(1); 

console.log("Éléments du panier après suppression :");
cart.displayItems();


console.log(`Total des éléments dans le panier : ${cart.getTotalItems()}`);

console.log(`Prix total du panier : $${cart.getTotalPrice().toFixed(2)}`);

