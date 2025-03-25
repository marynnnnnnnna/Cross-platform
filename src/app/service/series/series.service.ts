import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();
  constructor(@Optional() private LogService: LogService){}
  getSeries(x: number, n: number){
    let sum: number = 1, // Початковий член ряду
        term: number = n * x, // Перший доданок після 1
        k: number = 1; // Лічильник факторіалу

    while (Math.abs(term) > 1e-12) { // Умова зупинки
      sum += term;
      k++; // Збільшуємо індекс факторіалу
      term *= (n - (k - 1)) * x / k; // Оновлюємо член ряду
    }

    return sum;
  }

  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1, n: number = 2) {
    let x = Number(xn),
        maxX = Number(xk),
        step = Number(h),
        power = Number(n);
    
    this.xy = new Map();
  
    while (x <= maxX) {
      let y = this.getSeries(x, power);
      this.xy.set(x, y);
  
      if (this.LogService) {
        this.LogService.write(`x=${x.toFixed(2)} , y=${y.toFixed(4)}`);
      }
  
      x += step;
    }
  
    return this.xy;
  }
}
