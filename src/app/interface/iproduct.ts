export interface IProduct {
    getID(): string;
    getName(): string;
    getPrice(): number;
    getDetails(): string[];
    getType(): string;
}
