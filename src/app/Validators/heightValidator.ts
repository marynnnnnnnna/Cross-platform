import { AbstractControl, ValidatorFn } from "@angular/forms";
export function isValidHeight(value:number): boolean{
    if (value <= 160 && value >=50) return true;
    else return false;
}
//Функція яка повертає валідатор форми
export function heightValidator(): ValidatorFn{
    return (
        //Створює контрол
        control: AbstractControl
    ): {[key: string]: boolean} | null => {
        let valid = !control.value || isValidHeight(control.value);
        return valid ? null : {date: true};
    };
}