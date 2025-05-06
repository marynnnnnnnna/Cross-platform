import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IProduct } from '../interface/iproduct';
import { ProductFactory } from '../Class/ProductFactory';
import { ProductType } from '../Class/ProductType';
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
  public async load() {
    fetch(API_URL, {
      method: 'GET',
      headers: {
        'X-Master-Key': API_KEY_MASTER,
        'X-Access-Key': API_KEY_ACCESS,
        'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((json)=> {
          let data;
          data = json;
          data = data.record;
          console.log(data);
          //створення продуктів
          let products = data.map((item: any) => 
            ProductFactory.createProduct(item)
          );
          this.products = [];
          //додавання товарів до масиву
          products.forEach((product: any) => this.addProduct(product));
          //отримуємо нове значення типу
          let type = this.ConfigService.type$.value;
          ////якщо зміни відбулись шукаємо усі продукти даного типу
          this.search(type);
        });
  }
  //масив з результатами пошуку
  searchProducts: IProduct[] = [];
  //пошук товару
  search(type:ProductType) {
    //фільтруємо
    this.searchProducts = this.products.filter((product) => {
      return product.getType() == type;
    });
    console.log(this.searchProducts);
  }
  constructor (private ConfigService: ConfigService) {}
  //сервіс для спостереження за змінами типу
  typeSub = this.ConfigService.type$
    //підписуємось на зміни
    .subscribe(() => {
      //отримуємо нове значення типу
      let type = this.ConfigService.type$.value;
      //якщо зміни відбулись шукаємо усі продукти даного типу
      this.search(type);
    });
}

