import { ProductReadService } from './../../Service/product-read.service';
import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AddProductComponentComponent } from "../add-product-component/add-product-component.component";
import { EditProductComponent } from "../edit-product/edit-product.component";
import { ProductType } from 'src/app/Class/ProductType';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
  imports: [IonicModule, CommonModule, AddProductComponentComponent, EditProductComponent], // Додаємо IonicModule
})
export class ViewProductComponent  implements OnInit {
  constructor(public ProductReadService: ProductReadService){}

  ngOnInit() {
    this.ProductReadService.load();
  }
  showAddForm=false;
  addFormShow(){
    this.showAddForm = true;
  }
  addProduct($event: any){
    this.ProductReadService.addProduct($event);
    this.showAddForm=false;
  }
  showEditForm = false;
  editFormnumber = 0;
  editFormShow(i:number){
    this.showEditForm = true;
    this.editFormnumber = i;
  }
  editProduct($event: any, i:number){
    this.ProductReadService.products[i] = $event;
    console.log($event);
    this.showEditForm = false;
  }

}
