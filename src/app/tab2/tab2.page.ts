import { Component } from '@angular/core';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [MyHeaderComponent, IonicModule] 
})
export class Tab2Page {

  constructor() {}

  a: number = 0;
  b: number = 0;
  d: number = 0;
  divisibleBySix: number[] = []; // Масив для чисел, кратних 6

  calculate(a: any, b: any) {
    try {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.d = 1;
      this.divisibleBySix = []; 

      if ((isNaN(this.a) == true) || (isNaN(this.b) == true)) {
        throw new Error('Parameter is not a number!')
      }

      for (let i = this.a; i <= this.b; i++) {
        if ((i % 6 == 0 ) && (i != 0)) {
          this.d = this.d * i;
          this.divisibleBySix.push(i); // Додаємо число до масиву
        }
      }
      if ((this.d == 1) || (this.d == 6)){
        this.d = 0;
      }
    }
    catch (error) {
      console.log(error)
    }
  }

}
