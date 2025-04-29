import { isValidAge } from "./ageValidator";

describe('ValidatorAge', () => {
    it('Перевіряємо для -1 результат false', () => {
        let s = isValidAge(-1);
        expect(s).toBe(false);
    });
    it('Перевіряємо для 15 результат false', () => {
        let s = isValidAge(15);
        expect(s).toBe(false);
    });
    it('Перевіряємо для 10 результат true', () => {
        let s = isValidAge(10);
        expect(s).toBe(true);
    });
});