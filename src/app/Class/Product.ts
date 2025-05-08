import { IProduct } from "../interface/iproduct";

export abstract class Product implements IProduct{
    private id: string = '';
    private name: string = '';
    private price: number = 1;
    constructor(id: string, name: string, price: number){
        if (price < 1) throw new Error('price < 1')
        this.name = name;
        this.price = price;
    }
    getPrice(): number {
        return this.price;
    }
    getName(): string {
        return this.name;
    }
    getDetails(): string[] {
        return [];
    }
    getType(): string {
        return 'Product';
    }
    getID(): string {
        return this.id;
    }
}