import { TestBed, inject } from '@angular/core/testing';

import { EventListResolverService } from './event-list-resolver.service';

describe('EventListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventListResolverService]
    });
  });

  it('should be created', inject([EventListResolverService], (service: EventListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
