import { TestBed } from '@angular/core/testing';

import { NumberTableService } from './number-table.service';

describe('NumberTableService', () => {
  let service: NumberTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
