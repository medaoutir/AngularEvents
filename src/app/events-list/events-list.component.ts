import { Component, OnInit,Inject } from '@angular/core';
import {EventService} from '../shared/event.service'
import {TOASTR_TOKEN,Toastr} from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router';
import {IEvent} from '../shared/event.model';
@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:IEvent[]
 constructor(private eventService:EventService,@Inject(TOASTR_TOKEN) private toastr:Toastr, private route:ActivatedRoute) { }

  ngOnInit() {
    this.events=this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }

}
