import { TestBed, async, inject } from '@angular/core/testing';

import { SecureRouteGuard } from './secure-route.guard';

describe('SecureRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecureRouteGuard]
    });
  });

  it('should ...', inject([SecureRouteGuard], (guard: SecureRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
