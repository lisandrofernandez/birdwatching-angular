import { TestBed } from '@angular/core/testing';

import { NaturalReserveService } from './natural-reserve.service';

describe('NaturalReserveService', () => {
  let service: NaturalReserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaturalReserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
