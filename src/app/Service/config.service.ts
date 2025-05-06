import { Injectable } from '@angular/core';
import { ProductType } from '../Class/ProductType';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  //визначаченння поточного типу
  currentType = DEFAULT_TYPE;
  type$: BehaviorSubject<ProductType> = new BehaviorSubject<ProductType>(
    DEFAULT_TYPE
  );
  //Змінюємо поточний тип на новий
  setType(type: ProductType){
    console.log('Є зміни!');
    //генеруємо наступне значення
    this.type$.next(type);
  }

  constructor() { }
}
//Початкове значення
const DEFAULT_TYPE = ProductType[0];