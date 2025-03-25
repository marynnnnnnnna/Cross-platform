import { Injectable, Optional } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private xx: string[] = [];
  private yy: number[] = [];
  constructor(@Optional() private LogService: LogService) { }
  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1, n: number = 2) {
    let x = xn, y = 0.0;
    this.xx = [];
    this.yy = [];
    while (x <= xk) {
      y = Math.pow(1 + x , n);
      this.xx.push(x.toFixed(2));
      this.yy.push(y);
      if (this.LogService) {
        this.LogService.write('x=' + x.toFixed(2) + ' y=' + y.toFixed(4));
      }
      x = x + h;
    }
    return {x: this.xx, y: this.yy};
  }
}
