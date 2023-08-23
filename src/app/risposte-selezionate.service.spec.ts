import { TestBed } from '@angular/core/testing';

import { RisposteSelezionateService } from './risposte-selezionate.service';

describe('RisposteSelezionateService', () => {
  let service: RisposteSelezionateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RisposteSelezionateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
