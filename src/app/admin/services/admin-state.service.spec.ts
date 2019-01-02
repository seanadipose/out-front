import { TestBed } from '@angular/core/testing';

import { AdminStateService } from './admin-state.service';

describe('AdminStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminStateService = TestBed.get(AdminStateService);
    expect(service).toBeTruthy();
  });
});
