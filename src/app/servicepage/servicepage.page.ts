import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; 
import { MyHeaderComponent } from '../my-header/my-header.component';
import { HttpClientModule } from '@angular/common/http';
import { Chart, registerables } from 'chart.js/auto';
import { TabService } from '../service/tab/tab.service';
import { SeriesService } from '../service/series/series.service';
import { RecurtionService } from '../service/recurtion/recurtion.service';



@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
  standalone: true,
  imports: [IonicModule,  
    CommonModule, 
    MyHeaderComponent, 
    HttpClientModule,
  ]
})
export class ServicepagePage implements OnInit {
  xyTab = new Map();
  xySeries = new Map();
  xyRecurtion = new Map();
  xyInput: string[] = [];

  constructor(
    private tabService: TabService,
    private seriesService: SeriesService,
    private recurtionService: RecurtionService
  ) {
    Chart.register(...registerables);
  }
  // Змінні для графіку
  xx: string[] = [];
  yySer: number[] = [];
  yyRec: number[] = [];
  yyTab: number[] = [];
  // Поле для створення графіку
  // Позначаємо змінну як додаткову
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;

  lineChart: any;

// Метод створення графіку
lineChartMake() {

  if (!this.lineCanvas?.nativeElement) {
    console.error('lineCanvas не знайдено!');
    return;
  }
  
  if (this.lineChart instanceof Chart) {
    this.lineChart.destroy();
  }

  this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
    type: 'line',
    data: {
      labels: this.xx,
      datasets: [
        {
          label: 'Табулювання',
          data: this.yyTab,
          fill: false,
          borderColor: 'salmon',
          borderWidth: 1,
          borderDashOffset: 0.0,
          pointRadius: 2,
          spanGaps: false,
        },
        {
          label: 'Рекурсія',
          data: this.yyRec,
          fill: false,
          borderColor: '#123456',
          borderWidth: 1,
          borderDashOffset: 0.0,
          pointRadius: 4,
          spanGaps: false,
        },
        {
          label: 'Ряд',
          data: this.yySer,
          fill: false,
          borderColor: 'aqua',
          borderWidth: 1,
          borderDashOffset: 0.0,
          pointRadius: 6,
          spanGaps: false,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          suggestedMin: 0,
          title: {
            display: true, text: 'X',},
              ticks: {
                stepSize: 0.01,
              },
            },
            y: {
              title: {
                display: true, text: 'Y',},
              ticks: {
                stepSize: 0.01,
              },
            },
          },
        },
      });
    }
  ras(xn:any, xk:any, n:any, h:any){
    try{
      let xn1 = parseFloat(xn),
        xk1 = parseFloat(xk),
        h1 = parseFloat(h),
        n1 = parseFloat(n);
        this.xx = [];
        this.yyTab = [];
        console.log('Табулювання');
        let obj = this.tabService.getTab(xn1, xk1, h1, n1);
        this.xx = obj.x;
        this.yyTab = obj.y;
        console.log('Ряд');
        this.xySeries = this.seriesService.getTab(xn1, xk1, h1, n1);
        console.log('Рекурсія');
        this.xyRecurtion = this.recurtionService.getTab(xn1, xk1, h1, n1);

        this.input();
        this.lineChartMake();
      } catch{}
    }
    input() {
      this.yySer = [];
      this.yyRec = [];
      this.xyInput = [];
      this.xx.forEach((value, index) => {
        let s = '';
        let y: number = this.yyTab[index]; // Беремо табульоване значення
        s = y.toFixed(4) + '';
      
        let xNum = Number(value); // Перетворюємо value у число
      
        if (this.xySeries.has(xNum)) { // Використовуємо число як ключ
          let ySer = this.xySeries.get(xNum);
          this.yySer.push(ySer);
          s += ' ' + ySer.toFixed(4);
        } else {
          console.warn(`xySeries не містить значення для X=${xNum}`);
        }
      
        if (this.xyRecurtion.has(xNum)) {
          let yRec = this.xyRecurtion.get(xNum);
          this.yyRec.push(yRec);
          s += ' ' + yRec.toFixed(4);
        } else {
          console.warn(`xyRecurtion не містить значення для X=${xNum}`);
        }
      
        console.log(s);
        this.xyInput.push(s);
      });
    }
  
  ngOnInit() {}

}
