import { ArchiStructure } from './ArchiStructure';

export class Bridge extends ArchiStructure {
  constructor(
    name: string,
    height: number,
    yearBuilt: number,
    public length: number //Додаткове поле: Довжина
  ) {
    super(name, height, yearBuilt);
  }

  displayInfo(): void {
    console.log(
      `Міст: ${this.name}, Висота: ${this.height} м, Рік будівництва: ${this.yearBuilt}, Довжина: ${this.length} м`
    );
  }
}