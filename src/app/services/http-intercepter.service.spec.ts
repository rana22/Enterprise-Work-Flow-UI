import { TestBed, inject } from '@angular/core/testing';

import { HttpIntercepterService } from './http-intercepter.service';

describe('HttpIntercepterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpIntercepterService]
    });
  });

  it('should be created', inject([HttpIntercepterService], (service: HttpIntercepterService) => {
    expect(service).toBeTruthy();
  }));
});
