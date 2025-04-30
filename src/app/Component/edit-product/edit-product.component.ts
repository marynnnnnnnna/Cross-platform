import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ageValidator } from 'src/app/Validators/ageValidator';
import { heightValidator } from 'src/app/Validators/heightValidator';
import { formConstructor } from 'src/app/forms/formconstructor';
import { ProductType } from 'src/app/Class/ProductType';
import { Component, OnInit, ElementRef, EventEmitter, Input,
  Output, ViewChild} from '@angular/core';
import { IProduct } from 'src/app/interface/iproduct';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProductFactory } from 'src/app/Class/ProductFactory';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  imports: [IonicModule, CommonModule, 
    FormsModule, ReactiveFormsModule, 
    
  ], // Додаємо IonicModule
})
export class EditProductComponent implements OnInit {
  @Input() product!: IProduct;
  @Output() productEdit: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  productForm!: FormGroup;
  types = ProductType;

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    if (this.productForm.valid) {
      const formData = this.productForm.value;
      formData.type = this.product.getType();
      // Виклик фабрики для створення об'єкта
      const product = ProductFactory.createProduct(formData);
      this.productEdit.emit(product);
    } else {
      console.error('Form is invalid');
    }
  }
  ngOnInit() {
    this.productForm = this.fb.group({
      name: [
        this.product.getName(),
        [Validators.required, Validators.minLength(3)],
      ],
      price: [
        this.product.getPrice(),
        [Validators.required, Validators.min(0)],
      ],
    });

    formConstructor(this.product.getType(), this.productForm, this.fb);
  }
}