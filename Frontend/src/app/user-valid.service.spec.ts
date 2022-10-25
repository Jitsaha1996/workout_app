import { TestBed } from '@angular/core/testing';

import { UserValidService } from './user-valid.service';

describe('UserValidService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserValidService = TestBed.get(UserValidService);
    expect(service).toBeTruthy();
  });
});
