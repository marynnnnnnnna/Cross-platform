import { TestBed } from '@angular/core/testing';

import { ProductReadService } from './product-read.service';

describe('ProductReadServiceService', () => {
  let service: ProductReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
