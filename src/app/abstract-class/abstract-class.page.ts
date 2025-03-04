import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; 
import { MyHeaderComponent } from '../my-header/my-header.component';
import { HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js/auto';
import { Building } from '../classes/building';
import { Bridge } from '../classes/bridge';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [IonicModule,  
    CommonModule, 
    MyHeaderComponent, 
    HttpClientModule,
  ]
})
export class AbstractClassPage implements OnInit {

  structures: (Building | Bridge)[] = [];
  tallestStructure: any = null;
  shortestStructure: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadStructures();
  }

  loadStructures() {
    this.http.get<any>('https://api.jsonbin.io/v3/b/67c7692ee41b4d34e4a0d28b').subscribe((data) => {
      console.log('Отримані дані:', data); 
  
      if (data && data.record && data.record.structures) {
        this.structures = data.record.structures.map((item: any) => {
          if (item.type === 'building') {
            return new Building(item.name, item.height, item.yearBuilt, item.numberOfFloors ||0);
          } else {
            return new Bridge(item.name, item.height, item.yearBuilt, item.length || 0);
          }
        });

        this.tallestStructure = this.getTallestStructure();
        this.shortestStructure = this.getShortestStructure();
      } else {
        console.error(' JSON не містить "structures" або структура неправильна!');
      }
    }, error => {
      console.error('Помилка завантаження JSON:', error);
    });
  }
  isBuilding(structure: Building | Bridge): structure is Building {
    return (structure as Building).numberOfFloors !== undefined;
  }
  
  isBridge(structure: Building | Bridge): structure is Bridge {
    return (structure as Bridge).length !== undefined;
  }
  getBuildingFloors(structure: Building | Bridge): number {
    return this.isBuilding(structure) ? structure.numberOfFloors : 0;
  }

  getBridgeLength(structure: Building | Bridge): number {
    return this.isBridge(structure) ? structure.length : 0;
  }
  getTallestStructure() {
    return this.structures.length > 0
      ? this.structures.reduce((prev, current) => (prev.height > current.height ? prev : current))
      : { name: 'Немає даних', height: 0 };
  }
  
  getShortestStructure() {
    return this.structures.length > 0
      ? this.structures.reduce((prev, current) => (prev.height < current.height ? prev : current))
      : { name: 'Немає даних', height: 0 };
  }

}

