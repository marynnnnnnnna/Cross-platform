import { Injectable } from '@angular/core';
import { Database, ref, set, push, update, remove, onValue } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../interface/iproduct';
import { ProductFactory } from '../Class/ProductFactory';

@Injectable({
  providedIn: 'root'
})
export class ProductBDReadService {
  // Повідомляючий об'єкт для відтеження продуктів
  private productsSubject = new BehaviorSubject<IProduct[]>([]);
  products$ = this.productsSubject.asObservable(); // Публічний потік продуктів

  constructor(private db: Database) {}

  // Метод для завантаження продуктів з Firebase
  fetchProducts(): void {
    // Створюємо посилання на дані продуктів у Firebase
    const productsRef = ref(this.db, 'products');
    console.log(productsRef);

    onValue(productsRef, (snapshot) => {
      // Отримуємо дані з Firebase
      // Якщо `snapshot.val()` повертає об'єкт або null, якщо даних немає
      const data = snapshot.val();
      // Перевіряємо, чи є дані у відповідь. Якщо дані присутні
      //('data' не дорінює null), виконуємо обробку
      const products = data
        ? // Перетворюємо об'єкт 'data'на масив пар [ключ, значення],
          // де ключ - це ідентифікатор продукту.
          Object.entries(data).map(([key, value]: [string, any]) => 
            // Використовуємо фабрику для створення продуктів
            // Передаємо об'єкт value, додаючи до нього id (ключ з Firebase)
            ProductFactory.createProduct({ ...value, id: key })
          )
        : [];

      // Оновлюємо список продуктів
      this.productsSubject.next(products);
    });
  }

  // Метод для додавання продукту
  addProduct(product: IProduct): void {
    const productsRef = ref(this.db, 'products'); // Посилання на продукти в Firebase
    const newProductRef = push(productsRef); // Додаємо новий продукт

    set(newProductRef, {
      ...product,
      id: newProductRef.key,
      type: product.getType(),
    }); // Записуємо новий продукт в Firebase
  }

  // Метод для редагування продукту
  editProduct(updatedProduct: IProduct): void {
    console.log(updatedProduct);
    // Посилання на продукт за його id
const productRef = ref(this.db, `products/${updatedProduct.getID()}`);
    update(productRef, updatedProduct); // Оновлюємо дані продукту в Firebase
  }

  // Метод для видалення продукту
  deleteProduct(productId: string): void {
    // Посилання на продукт за його id
    const productRef = ref(this.db, `products/${productId}`);
    remove(productRef); // Видаляємо продукт з Firebase
  }
}
