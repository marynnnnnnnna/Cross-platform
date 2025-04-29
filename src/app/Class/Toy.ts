import { Product } from "./Product";
export class Toy extends Product{
    private category1: string = '';
    private age: number = 0;
    private year: number;
    constructor(
        id:number,
        name:string,
        category1:string,
        year:number,
        age:number,
        price:number
    ) {
        super(id, name, price);
        if (year <= 0) throw new Error('year <= 0');
        this.year = year;
        if (age < 0) throw new Error('age < 0');
        this.category1 = category1;
        this.age = age;
    }
    override getDetails(): string[]{
        let details = [];
        details.push('Категорія:' + this.category1);
        details.push('Рік випуску:' + this.year);
        details.push('Вік:' + this.age);
        return details;
    }
    getCategory(): string {
        return this.category1
    }
    getYear(): number {
        return this.year
    }
    getAge(): number {
        return this.age
    }
    override getType(): string {
        return 'Toy'
    }

}