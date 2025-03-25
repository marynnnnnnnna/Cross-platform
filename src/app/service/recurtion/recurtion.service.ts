import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecurtionService {
  yy: number = 0;
  private xy = new Map();

  constructor(@Optional() private logService: LogService) { }

  getRecurtion(x: number, n: number, term: number, k: number, sum: number) {
      let min = 1E-12;

      sum += term;
      k++;
      term *= (n - (k - 1)) * x / k; 

      if (Math.abs(term) > min) 
          this.getRecurtion(x, n, term, k, sum);
      else 
          this.yy = sum;
  }

  getTab(xn: number = 0.1, xk: number = 1.0, h: number = 0.1, n: number = 2) {
    let x = xn;
  
    while (x <= xk) {
      this.getRecurtion(x, n, 1, 0, 0); // Початковий член ряду = 1, k = 0
      this.xy.set(x, this.yy);
      if (this.logService) {
        this.logService.write('x=' + x.toFixed(2) + ' y=' + this.yy.toFixed(4));
      }
      x = x + h;
    }
    return this.xy;
  }
}
