import { TestBed } from '@angular/core/testing';

import { SafeAreaInsetService } from './safe-area-inset.service';

describe('SafeAreaInsetService', () => {
  let service: SafeAreaInsetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SafeAreaInsetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
