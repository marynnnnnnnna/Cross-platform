import { Book } from './../Воок';

describe('Book class', () => {
  let book: Book;

  beforeEach(() => {
    book = new Book(1, 'Володар Перснів', 'Дж. Р. Р. Толкін', 1954, 423, 299);
  });

  it('створюється без помилок', () => {
    expect(book).toBeTruthy();
  });

  it('повертає правильні значення через гетери', () => {
    expect(book.getAuthor()).toBe('Дж. Р. Р. Толкін');
    expect(book.getYear()).toBe(1954);
    expect(book.getPage()).toBe(423);
  });

  it('повертає правильний тип', () => {
    expect(book.getType()).toBe('Book');
  });

  it('повертає правильні деталі', () => {
    const details = book.getDetails();
    expect(details).toContain('Автор:Дж. Р. Р. Толкін');
    expect(details).toContain('Рік видання:1954');
    expect(details).toContain('Кількість сторінок:423');
  });

  it('кидає помилку, якщо рік < 0', () => {
    expect(() => {
      new Book(2, 'Test Book', 'Автор', -100, 200, 100);
    }).toThrowError('year < 0');
  });

  it('кидає помилку, якщо кількість сторінок < 5', () => {
    expect(() => {
      new Book(3, 'Міні-книжка', 'Автор', 2020, 3, 50);
    }).toThrowError('page < 5');
  });

  it('успадковані методи працюють коректно', () => {
    expect(book.getName()).toBe('Володар Перснів');
    expect(book.getPrice()).toBe(299);
  });
});