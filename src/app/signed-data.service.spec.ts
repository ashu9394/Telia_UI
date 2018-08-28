import { TestBed, inject } from '@angular/core/testing';

import { SignedDataService } from './signed-data.service';

describe('SignedDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignedDataService]
    });
  });

  it('should be created', inject([SignedDataService], (service: SignedDataService) => {
    expect(service).toBeTruthy();
  }));
});
