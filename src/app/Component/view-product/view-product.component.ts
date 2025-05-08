import { ProductBDReadService } from './../../Service/product-bread.service';
import { ProductReadService } from './../../Service/product-read.service';
import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AddProductComponentComponent } from "../add-product-component/add-product-component.component";
import { EditProductComponent } from "../edit-product/edit-product.component";
import { ProductType } from 'src/app/Class/ProductType';
import { FilterComponent } from '../filter/filter.component';
import { IProduct } from 'src/app/interface/iproduct';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
  imports: [IonicModule, CommonModule, AddProductComponentComponent, EditProductComponent, FilterComponent], // Додаємо IonicModule
})
export class ViewProductComponent  implements OnInit {
  products: IProduct[]=[];
  showAddForm=false;
    
  addFormShow(){
    this.showAddForm = true;
  }
  addProduct($event: any){
    this.productService.addProduct($event);
    this.showAddForm=false;
  }
  showEditForm = false;
  editFormnumber = 0;
  editFormShow(i:number){
    this.showEditForm = true;
    this.editFormnumber = i;
  }
  editProduct($event: any, i:number){
    this.productService.editProduct($event);
    this.showEditForm = false;
  }
  constructor(private productService: ProductBDReadService) {}
  
  ngOnInit(): void {
    this.productService.products$.subscribe((products)=> {
      this.products = products;
    });

    this.productService.fetchProducts(); 
  }
}
