import {inject, TestBed} from '@angular/core/testing';

import {SystemService} from './system.service';
import {HttpClientModule} from '@angular/common/http';

describe('SystemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SystemService]
    });
  });

  it('should be created', inject([SystemService], (service: SystemService) => {
    expect(service).toBeTruthy();
  }));
});
