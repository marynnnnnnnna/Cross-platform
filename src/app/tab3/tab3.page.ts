import { Component } from '@angular/core';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [MyHeaderComponent, IonicModule, CommonModule]
})

export class Tab3Page {

  constructor() { }

  a: number[][] = [];
  n: number = 0;
  positiveEvenCount: number = 0; 
  message: string = '';  

  calculate(n: any) {
    this.a = [];
    this.positiveEvenCount = 0; 
    this.message = ''; 
    try {
      this.n = parseInt(n);

      if (isNaN(this.n) == true) {
        throw new Error('Parameter is not a number!')
      }

      if (n<=0){
        throw new Error('Parameter less than zero!')
      }
      let i: number = 0, j:number = 0;

      this.a = Array(this.n);
      console.log("Array created");
      for(i = 0;i<this.n;i++){
        this.a[i] = Array(this.n);

        for(j=0;j<this.n;j++){
          this.a[i][j] = Math.floor(Math.random() * 201) - 100;

          // Підраховуємо кількість парних додатних елементів
          if (this.a[i][j] > 0 && this.a[i][j] % 2 === 0) {
            this.positiveEvenCount++;}
        }
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  getColor(b: number) {
    // Якщо кількість парних додатних елементів менша за 10
    if (this.positiveEvenCount < 10) {
      this.message = 'Кількість парних додатних елементів менша за 10.';
      return "white"; 
    }
    // Якщо елемент парний додатний
    if ((b > 0) && b % 2 === 0) {
      return "green"; 
    }
    // Для всіх інших елементів
    return "red";  
  }

}
