import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ViewProductComponent } from './Component/view-product/view-product.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule, ViewProductComponent], // Додаємо IonicModule
})
export class AppComponent {
  constructor() {}
}