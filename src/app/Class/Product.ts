import { IProduct } from "../interface/iproduct";

export abstract class Product implements IProduct{
    private id: number = 0;
    private name: string = '';
    private price: number = 1;
    constructor(id: number, name: string, price: number){
        if (id < 0) throw new Error('id < 0')
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
    getID(): number {
        return this.id;
    }
}