import { Clothes } from '../Clothes';

describe('Clothes class', () => {
    let clothes: Clothes;
    beforeEach (() => 
    {
        clothes = new Clothes (1, 'Куртка', 'Верхній одяг', 'Зима', 170, 1500);
    });

    //створення екземпляру класу
    it('Створення екземпляру класу', () =>{
        expect(clothes).toBeTruthy();
    })

    it('Повертає правильні значення через гетери', () => {
        expect(clothes.getCategory()).toBe('Верхній одяг');
        expect(clothes.getSeason()).toBe('Зима');
        expect(clothes.getHeight()).toBe(170);
    });
    it('Повертає правильний тип', () => {
        expect(clothes.getType()).toBe('Clothes');
    });
    it('Повертає правильні деталі', () => {
        const details = clothes.getDetails();
        expect(details).toContain('Пора року:Зима');
        expect(details).toContain('Тип одягу:Верхній одяг');
        expect(details).toContain('Зріст:170');
    });
    it('Кидає помилку, якщо height < 0', () => {
        expect(() => {
          new Clothes(2, 'Футболка', 'Літній одяг', 'Літо', -5, 500);
        }).toThrowError('height < 0');
    });

    it('Успадковані методи працюють коректно', () => {
        expect(clothes.getName()).toBe('Куртка');
        expect(clothes.getPrice()).toBe(1500);
    });

});