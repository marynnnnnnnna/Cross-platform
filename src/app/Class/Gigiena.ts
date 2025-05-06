import { Product } from "./Product";
export class Gigiena extends Product{
    private country: string = '';
    private zone: string = '';
    private age1: number;
    constructor(
        id:number,
        name:string,
        country:string,
        zone:string,
        age1:number,
        price:number
    ) {
        super(id, name, price);
        if (age1 < 0) throw new Error('age1 < 0');
        this.age1 = age1;
        this.country = country;
        this.zone = zone;
    }
    override getDetails(): string[]{
        let details = [];
        details.push('Зона нанесення:' + this.zone);
        details.push('Країна походження:' + this.country);
        details.push('Вік:' + this.age1);
        return details;
    }
    getCategory(): string {
        return this.country
    }
    getHeight(): number {
        return this.age1
    }
    getSeason(): string {
        return this.zone
    }
    override getType(): string {
        return 'Gigiena'
    }

}