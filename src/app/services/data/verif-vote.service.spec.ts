import { TestBed } from '@angular/core/testing';

import { VerifVoteService } from './verif-vote.service';

describe('VerifVoteService', () => {
  let service: VerifVoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifVoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
