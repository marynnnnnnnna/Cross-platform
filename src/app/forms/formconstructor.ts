import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ProductType} from "../Class/ProductType";
import { ageValidator } from "../Validators/ageValidator";
import { heightValidator } from "../Validators/heightValidator";

export function formConstructor(
    type: string,
    productForm: FormGroup,
    fb: FormBuilder
){
    //Очистити специфічні поля
    const controlsToRemove = [
        'author',
        'page',
        'year',
        'age',
        'category1',
        'category2',
        'season',
        'height',
    ];
    controlsToRemove.forEach((control)=>{
        if (productForm.contains(control)){
            productForm.removeControl(control);
        }
    });
    //Додати специфічні поля обраного типу
    if (type == ProductType[0]) {
        productForm.addControl('author', fb.control('', Validators.required));
        productForm.addControl('year', fb.control('', [Validators.min(1000)]));
        productForm.addControl('page', fb.control('', [Validators.min(5)]));
    }
    else if (type == ProductType[1]) {
        productForm.addControl('category1', fb.control('', Validators.required));
        productForm.addControl('year', fb.control('', [Validators.min(1)]));
        productForm.addControl('age', fb.control('', [Validators.required, ageValidator]));
    }
    else if (type == ProductType[2]) {
        productForm.addControl('category2', fb.control('', Validators.required));
        productForm.addControl('season', fb.control('', Validators.required));
        productForm.addControl('height', fb.control('', [Validators.required, heightValidator]));
    }
}