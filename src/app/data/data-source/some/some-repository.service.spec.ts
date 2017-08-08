import { TestBed, inject } from '@angular/core/testing';

import { SomeRepositoryService } from './some-repository.service';

describe('SomeRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SomeRepositoryService]
    });
  });

  it('should be created', inject([SomeRepositoryService], (service: SomeRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
