import { Component } from '@angular/core';
import { CartListComponent } from '../../components/cart-list/cart-list.component';
import { CartSummaryComponent } from '../../components/cart-summary/cart-summary.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartListComponent, CartSummaryComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {}
