import { isValidHeight } from "./heightValidator";

describe('ValidatorHeight', () => {
    it('Перевіряємо для 30 результат false', () => {
        let s = isValidHeight(30);
        expect(s).toBe(false);
    });
    it('Перевіряємо для 170 результат false', () => {
        let s = isValidHeight(170);
        expect(s).toBe(false);
    });
    it('Перевіряємо для 120 результат true', () => {
        let s = isValidHeight(120);
        expect(s).toBe(true);
    });
});