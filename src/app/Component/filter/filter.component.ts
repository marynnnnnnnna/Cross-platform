import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/Class/ProductType';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConfigService } from 'src/app/Service/config.service';
import { Subscription } from 'rxjs';
import { ProductReadService } from 'src/app/Service/product-read.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  imports: [IonicModule, CommonModule, 
      FormsModule      
    ], // Додаємо IonicModule
})
export class FilterComponent  implements OnInit {
  //сервіс для спостерігача 
  private ConfigService=new ConfigService();
  //масив спостерігачів
  private subscriptions: Subscription[] = [];
  //список продуктів
  productService = new ProductReadService(this.ConfigService);
  //поточний тип
  type: ProductType = ProductType[0];
  //лічільник
  count = 0;
  //об'єкт для очікування
  constructor(){
    this.productService.load();
  }
  
  ngOnInit() {
    //оголошуємо спостерігача
    const typeSub = this.ConfigService.type$
      //підписуємося на зміни та отримуємо поточне значення
      .subscribe(() => {
        this.type = this.ConfigService.type$.value; 
      });
    //додаємо цього спостерігача до нашого масиву
    this.subscriptions.push(typeSub);
  }
  //вивід наступного типу
  nextType(){
    //якщо в спискі типів є наступна мова
    if (this.count< ProductType.length-1){
      this.count++;
    }
    //інакше обнуляємо його
    else this.count=0;
    //змінюємо мову у сервісі
    this.ConfigService.setType(ProductType[this.count]);
  }
  ngOnDestroy(){
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

}
