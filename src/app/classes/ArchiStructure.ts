export abstract class ArchiStructure {
    constructor(
      public name: string,
      public height: number,
      public yearBuilt: number
    ) {}
  
    getHeight(): number {
      return this.height;
    }
  
    abstract displayInfo(): void;
  }