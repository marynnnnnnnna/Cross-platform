import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IProduct } from '../interface/iproduct';
import { ProductFactory } from '../Class/ProductFactory';
const API_KEY_MASTER = 
'$2a$10$yIR782N4rPPjD/d.fcH9nOVcKj3Jkny2jZyw/Qgs0692r7lNPXkv6';
const API_KEY_ACCESS = 
'$2a$10$t.jPwQ8W51muaRV9KGxQw.pTNBbKThnjwmUCW6sO//b8LJj4Ss5M.';
const API_URL = 'https://api.jsonbin.io/v3/b/67fe8c128561e97a50003970';

@Injectable({
  providedIn: 'root'
})
export class ProductReadService {
  public products: IProduct[] = [];
  addProduct(product: IProduct){
    this.products.push(product);
  }
  constructor() { }
  public async load() {
    try {
      const res = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'X-Master-Key': API_KEY_MASTER,
          'X-Access-Key': API_KEY_ACCESS,
          'Content-Type': 'application/json',
        },
      });
      const json = await res.json();
      let data = json.record;
  
      console.log(data); // Перевірка отриманих даних
      let products = data.map((item: any) => ProductFactory.createProduct(item));
      this.products = [];
      products.forEach((product: any) => this.addProduct(product));
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }
}
