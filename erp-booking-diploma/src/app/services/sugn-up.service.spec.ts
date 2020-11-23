import { TestBed } from '@angular/core/testing';

import { SugnUpService } from './sugn-up.service';

describe('SugnUpService', () => {
  let service: SugnUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SugnUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
