import { ProductType } from './../../Class/ProductType';
import { ProductReadService } from './../../Service/product-read.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormArray, FormsModule, ReactiveFormsModule, FormBuilder,
  FormControl, FormGroup, Validators} from '@angular/forms';
import { ProductFactory } from 'src/app/Class/ProductFactory';
import { IProduct } from 'src/app/interface/iproduct';
import { formConstructor } from 'src/app/forms/formconstructor';

@Component({
  selector: 'app-add-product-component',
  templateUrl: './add-product-component.component.html',
  styleUrls: ['./add-product-component.component.scss'],
  imports: [IonicModule, CommonModule, 
     
     FormsModule, ReactiveFormsModule, 
    
  ], // Додаємо IonicModule
})
export class AddProductComponentComponent  implements OnInit {
  productForm!:FormGroup;
  currentType: ProductType = 'Book';
  types = ProductType;

  @Output() productAdd: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  constructor(private fb: FormBuilder){
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.min(0)]],
      category1: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  onTypeChange(type:any):void{
    this.currentType = type as ProductType;
    formConstructor(type, this.productForm, this.fb);
  }
  onSubmit(): void {
    if (this.productForm.valid){
      const formData = this.productForm.value;
      formData.type = this.currentType;
      //Виклик фабрики для створення об'єкта 
      const product = ProductFactory.createProduct(formData);
      this.productAdd.emit(product);
    } else{
      console.error('Form is invalid');
    }
  }
  ngOnInit() {
    this.onTypeChange(this.currentType);
  }
}
