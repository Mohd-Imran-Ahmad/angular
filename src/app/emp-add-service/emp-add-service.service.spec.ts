import { TestBed } from '@angular/core/testing';

import { EmpAddServiceService } from './emp-add-service.service';

describe('EmpAddServiceService', () => {
  let service: EmpAddServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpAddServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
