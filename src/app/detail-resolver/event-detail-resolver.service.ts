import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from '../shared/event.service';
// import { IEvent } from '../shared/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventDetailResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve(route:ActivatedRouteSnapshot) {
    return this.eventService.getEvent(+route.params['id'])
  }
}