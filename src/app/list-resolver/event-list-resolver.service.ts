import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from '../shared/event.service';
// import { IEvent } from '../shared/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve() {
    return this.eventService.getEvents()
  }
}
