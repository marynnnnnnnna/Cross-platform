import { Product } from "../Product";

// Створюємо тимчасовий клас для тестування
class TestProduct extends Product {
    constructor(id: number, name: string, price: number) {
      super(id, name, price);
    }
  
    override getDetails(): string[] {
      return ['test detail'];
    }
  
    override getType(): string {
      return 'TestProduct';
    }
  }
  
  describe('Product (abstract class)', () => {
    let product: TestProduct;
  
    beforeEach(() => {
      product = new TestProduct(1, 'Тестовий продукт', 100);
    });
  
    it('створюється без помилок', () => {
      expect(product).toBeTruthy();
    });
  
    it('повертає перевизначені методи', () => {
      expect(product.getDetails()).toEqual(['test detail']);
      expect(product.getType()).toBe('TestProduct');
    });
  
    it('кидає помилку, якщо id < 0', () => {
      expect(() => new TestProduct(-5, 'Поганий', 100)).toThrowError('id < 0');
    });
  
    it('кидає помилку, якщо price < 1', () => {
      expect(() => new TestProduct(1, 'Дешевий', 0)).toThrowError('price < 1');
    });
  });