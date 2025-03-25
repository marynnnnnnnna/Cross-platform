import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Табулювання значення x=2 n=2 (y=9)', () =>{
    let x = 2;
    let n = 2;
    let y = 9;
    let xy = service.getTab(x, n);
    let y1: number | undefined = 5;
    y1 = xy.y[xy.x.indexOf(x.toFixed(2))];
    if (y1 !== undefined){
      expect(y.toFixed(4)).toBe(y1.toFixed(4));
    }
  });
});
