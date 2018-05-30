import {inject, TestBed} from '@angular/core/testing';

import {ApplicationService} from './application.service';
import {HttpClientModule} from '@angular/common/http';

describe('ApplicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ApplicationService]
    });
  });

  it('should be created', inject([ApplicationService], (service: ApplicationService) => {
    expect(service).toBeTruthy();
  }));
});
