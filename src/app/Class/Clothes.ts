import { Product } from "./Product";
export class Clothes extends Product{
    private category: string = '';
    private season: string = '';
    private height: number;
    constructor(
        id:number,
        name:string,
        category:string,
        season:string,
        height:number,
        price:number
    ) {
        super(id, name, price);
        if (height < 0) throw new Error('height < 0');
        this.height = height;
        this.category = category;
        this.season = season;
    }
    override getDetails(): string[]{
        let details = [];
        details.push('Пора року:' + this.season);
        details.push('Тип одягу:' + this.category);
        details.push('Зріст:' + this.height);
        return details;
    }
    getCategory(): string {
        return this.category
    }
    getHeight(): number {
        return this.height
    }
    getSeason(): string {
        return this.season
    }
    override getType(): string {
        return 'Clothes'
    }

}