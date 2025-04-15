import { Product } from "./Product";
export class Toy extends Product{
    private category: string = '';
    private age: number = 0;
    private year: number;
    constructor(
        id:number,
        name:string,
        category:string,
        year:number,
        age:number,
        price:number
    ) {
        super(id, name, price);
        if (year <= 0) throw new Error('year <= 0');
        this.year = year;
        if (age < 0) throw new Error('age < 0');
        this.category = category;
        this.age = age;
    }
    override getDetails(): string[]{
        let details = [];
        details.push('Категорія:' + this.category);
        details.push('Рік випуску:' + this.year);
        details.push('Вік:' + this.age);
        return details;
    }
    getCategory(): string {
        return this.category
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