import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<any>([]);
  constructor() { }

  addToCart(product: any) {
    this.cartItems.set([...this.cartItems(), product]);
  }

  removeFromCart(product: any) {
    const cartItems = this.cartItems().filter((item: any) => item.id !== product.id);
    this.cartItems.set(cartItems);
  }

}
