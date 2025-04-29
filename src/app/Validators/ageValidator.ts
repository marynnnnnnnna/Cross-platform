import { AbstractControl, ValidatorFn } from "@angular/forms";
export function isValidAge(value:number): boolean{
    if (value <= 14 && value >=0) return true;
    else return false;
}
//Функція яка повертає валідатор форми
export function ageValidator(): ValidatorFn{
    return (
        //Створює контрол
        control: AbstractControl
    ): {[key: string]: boolean} | null => {
        let valid = !control.value || isValidAge(control.value);
        return valid ? null : {date: true};
    };
}