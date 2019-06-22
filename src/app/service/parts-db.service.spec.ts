import { TestBed } from '@angular/core/testing';

import { PartsDbService } from './parts-db.service';

describe('PartsDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartsDbService = TestBed.get(PartsDbService);
    expect(service).toBeTruthy();
  });
});
