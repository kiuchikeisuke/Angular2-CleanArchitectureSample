import { TestBed, inject } from '@angular/core/testing';

import { SomePresenterService } from './some-presenter.service';

describe('SomePresenterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SomePresenterService]
    });
  });

  it('should be created', inject([SomePresenterService], (service: SomePresenterService) => {
    expect(service).toBeTruthy();
  }));
});
