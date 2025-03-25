import { TestBed } from '@angular/core/testing';

import { RecurtionService } from './recurtion.service';

describe('RecurtionService', () => {
  let service: RecurtionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecurtionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Сума ряду значення x=0.1 n=2 (y=1.21)', () =>{
    const result = service.getTab(0.1, 0.1, 0.1, 2);
        expect(result.get(0.1)).toBeCloseTo(1.21, 4); // (1 + 0.1)^2 = 1.21
  });
});
