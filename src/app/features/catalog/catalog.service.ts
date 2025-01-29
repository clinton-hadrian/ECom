import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  constructor(private http: HttpClient) {}

  get baseUrl() {
    return environment.API_URL;
  }

  getProducts() {
    return this.http.get<any>(`${this.baseUrl}products`);
  }

  termsAccept(formVal: any) {
    return this.http.post<any>(`${this.baseUrl}Client/termsAccept`, formVal);
  }
}
