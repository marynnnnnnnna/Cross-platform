import { Product } from "./Product";
export class Clothes extends Product{
    private category2: string = '';
    private season: string = '';
    private height: number;
    constructor(
        id:string,
        name:string,
        category2:string,
        season:string,
        height:number,
        price:number
    ) {
        super(id, name, price);
        if (height < 0) throw new Error('height < 0');
        this.height = height;
        this.category2 = category2;
        this.season = season;
    }
    override getDetails(): string[]{
        let details = [];
        details.push('Пора року:' + this.season);
        details.push('Тип одягу:' + this.category2);
        details.push('Зріст:' + this.height);
        return details;
    }
    getCategory(): string {
        return this.category2
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