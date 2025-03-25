import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Сума ряду значення x=2 n=2 (y=9)', () =>{
    let x = 2;
    let n = 2;
    let y = 9;
    let y1 = service.getSeries(x, n);
    expect(y.toFixed(2)).toBe(y1.toFixed(2));
  });
});
