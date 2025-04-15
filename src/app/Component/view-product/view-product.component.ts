import { ProductReadService } from './../../Service/product-read.service';
import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
  imports: [IonicModule, CommonModule], // Додаємо IonicModule
})
export class ViewProductComponent  implements OnInit {
  constructor(public ProductReadService: ProductReadService){}

  ngOnInit() {
    this.ProductReadService.load();
  }

}
