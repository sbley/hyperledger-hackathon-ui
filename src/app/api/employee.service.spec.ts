import {inject, TestBed} from '@angular/core/testing';

import {EmployeeService} from './employee.service';
import {HttpClientModule} from '@angular/common/http';

describe('EmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EmployeeService]
    });
  });

  it('should be created', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
