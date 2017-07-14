import { TestBed, inject } from '@angular/core/testing';

import { WearService } from './wear.service';

describe('WearService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WearService]
    });
  });

  it('should be created', inject([WearService], (service: WearService) => {
    expect(service).toBeTruthy();
  }));
});
