import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  addToCart(product: Product) {
    this.items.push(product);
  }

  getCart() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingRates(){
    return this.httpClient.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
