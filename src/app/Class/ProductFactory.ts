import { ProductType } from "./ProductType";
import { Toy } from "./Toy";
import { Book } from "./Воок";
import { Clothes } from "./Clothes";
import { IProduct } from "../interface/iproduct";
import { Gigiena } from "./Gigiena";
export class ProductFactory {
    static createProduct(data: any): IProduct{
        switch (data.type){
            case ProductType[0]:
                return new Book(
                    data.id,
                    data.name,
                    data.author,
                    data.year,
                    data.page,
                    data.price
                );
            case ProductType[1]:
                return new Toy(
                    data.id,
                    data.name,
                    data.category1,
                    data.year,
                    data.age,
                    data.price
                );
            case ProductType[2]:
                return new Clothes(
                    data.id,
                    data.name,
                    data.category2,
                    data.season,
                    data.height,
                    data.price
                );
            case ProductType[3]:
                return new Gigiena(
                    data.id,
                    data.name,
                    data.country,
                    data.zone,
                    data.age1,
                    data.price
                );
            default:
                throw new Error("Невідомий тип продукту: " + data.type);
            
        }

    }
}