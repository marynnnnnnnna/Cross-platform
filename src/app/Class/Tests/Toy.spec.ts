import { Toy } from "../Toy";

describe('Toy class', () => {
  let toy: Toy;

  beforeEach(() => {
    toy = new Toy(1, 'LEGO City', 'Конструктор', 2020, 5, 499);
  });

  it('створюється без помилок', () => {
    expect(toy).toBeTruthy();
  });

  it('повертає правильні гетери', () => {
    expect(toy.getCategory()).toBe('Конструктор');
    expect(toy.getYear()).toBe(2020);
    expect(toy.getAge()).toBe(5);
    expect(toy.getName()).toBe('LEGO City');
    expect(toy.getPrice()).toBe(499);
  });

  it('повертає правильний тип', () => {
    expect(toy.getType()).toBe('Toy');
  });

  it('повертає коректні деталі', () => {
    const details = toy.getDetails();
    expect(details).toContain('Категорія:Конструктор');
    expect(details).toContain('Рік випуску:2020');
    expect(details).toContain('Вік:5');
  });

  it('кидає помилку, якщо рік <= 0', () => {
    expect(() => {
      new Toy(2, 'Стара іграшка', 'Класика', 0, 4, 150);
    }).toThrowError('year <= 0');
  });

  it('кидає помилку, якщо вік < 0', () => {
    expect(() => {
      new Toy(3, 'Небезпечна', 'Електроніка', 2023, -1, 200);
    }).toThrowError('age < 0');
  });
});