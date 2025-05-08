import { Product } from "./Product";
export class Book extends Product{
    private author: string = '';
    private page: number = 0;
    private year: number;
    constructor(
        id:string,
        name:string,
        author:string,
        year:number,
        page:number,
        price:number
    ) {
        super(id, name, price);
        if (year < 0) throw new Error('year < 0');
        this.year = year;
        if (page < 5) throw new Error('page < 5');
        this.author = author;
        this.page = page;
    }
    override getDetails(): string[]{
        let details = [];
        details.push('Автор:' + this.author);
        details.push('Рік видання:' + this.year);
        details.push('Кількість сторінок:' + this.page);
        return details;
    }
    getAuthor(): string {
        return this.author
    }
    getYear(): number {
        return this.year
    }
    getPage(): number {
        return this.page
    }
    override getType(): string {
        return 'Book'
    }

}