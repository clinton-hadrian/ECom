import { Component } from '@angular/core';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { Routes } from '@angular/router';

export const productDetailRoutes: Routes = [
  {
    path: 'product-details/:productId',
    component: ProductDetailsComponent,
    title: 'Product Details',
  },
];
