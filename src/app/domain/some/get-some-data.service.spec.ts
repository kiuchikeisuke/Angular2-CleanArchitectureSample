import { TestBed, inject } from '@angular/core/testing';

import { GetSomeDataService } from './get-some-data.service';

describe('GetSomeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSomeDataService]
    });
  });

  it('should be created', inject([GetSomeDataService], (service: GetSomeDataService) => {
    expect(service).toBeTruthy();
  }));
});
