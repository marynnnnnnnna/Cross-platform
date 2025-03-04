import { ArchiStructure } from './ArchiStructure';

export class Building extends ArchiStructure {
  constructor(
    name: string,
    height: number,
    yearBuilt: number,
    public numberOfFloors: number  //Додаткове поле: Кількість поверхів
  ) {
    super(name, height, yearBuilt);
  }

  displayInfo(): void {
    console.log(
      `Будинок: ${this.name}, Висота: ${this.height} м, Рік будівництва: ${this.yearBuilt}, Поверхів: ${this.numberOfFloors}`
    );
  }
}