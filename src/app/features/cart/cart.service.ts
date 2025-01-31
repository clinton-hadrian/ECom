import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<any>([]);
  constructor() {}

  addToCart(product: any) {
    const cartItems = this.cartItems();
    const existingProduct = cartItems.find(
      (cartProduct: any) => cartProduct.id === product.id
    );

    if (existingProduct) {
      // Update the quantity of the existing product
      this.cartItems.set(
        cartItems.map((cartProduct: any) =>
          cartProduct.id === product.id
            ? { ...cartProduct, quantity: (cartProduct.quantity || 1) + 1 }
            : cartProduct
        )
      );
    } else {
      // Add the new product with quantity 1
      this.cartItems.set([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  removeFromCart(product: any) {
    const cartItems = this.cartItems().filter(
      (item: any) => item.id !== product.id
    );
    this.cartItems.set(cartItems);
  }

  totalAmount() {
    return this.cartItems()
      .reduce((sum: number, item: any) => {
        return sum + item.price * (item.quantity || 1);
      }, 0)
      .toFixed(2);
  }
}
