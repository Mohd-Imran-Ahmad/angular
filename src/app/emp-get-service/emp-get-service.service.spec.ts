import { TestBed } from '@angular/core/testing';

import { EmpGetServiceService } from './emp-get-service.service';

describe('EmpGetServiceService', () => {
  let service: EmpGetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpGetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
