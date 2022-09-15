import { TestBed } from '@angular/core/testing';

import { WebRequeestService } from './web-requeest.service';

describe('WebRequeestService', () => {
  let service: WebRequeestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebRequeestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
