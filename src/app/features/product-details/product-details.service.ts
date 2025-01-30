import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  constructor(private http: HttpClient) {}

  get baseUrl() {
    return environment.API_URL;
  }

  getProductById(productId: number) {
    return this.http.get<any>(`${this.baseUrl}products/${productId}`);
  }
}
