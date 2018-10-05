import { TestBed, inject } from '@angular/core/testing';

import { EventDetailResolverService } from './event-detail-resolver.service';

describe('EventDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventDetailResolverService]
    });
  });

  it('should be created', inject([EventDetailResolverService], (service: EventDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
