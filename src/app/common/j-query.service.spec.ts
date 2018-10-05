import { TestBed, inject } from '@angular/core/testing';

import { JQueryService } from './j-query.service';

describe('JQueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JQueryService]
    });
  });

  it('should be created', inject([JQueryService], (service: JQueryService) => {
    expect(service).toBeTruthy();
  }));
});
