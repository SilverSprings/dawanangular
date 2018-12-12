import { TestBed } from '@angular/core/testing';

import { PromobseService } from './promobse.service';

describe('PromobseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromobseService = TestBed.get(PromobseService);
    expect(service).toBeTruthy();
  });
});
