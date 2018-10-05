import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute, Params} from '@angular/router';
import {IEvent, ISession} from '../shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:IEvent
  addMode:boolean=false
  filterBy:string="all"
  sortedBy:string="votes"
  constructor(private eventService:EventService, private route:ActivatedRoute) {
   }

  ngOnInit() {
    // this.eventService.getEvent(+this.route.snapshot.params['id']).subscribe((event:IEvent)=>{this.event=event
    //                                                                                 this.addMode=false})
    this.route.data.forEach((data)=>{
      this.event=data['event']
      console.log(this.event)
      this.addMode=false  
    })
  }

  addSession(){
    this.addMode=true
  }

  createNewSession(session:ISession){
    const nextId=Math.max.apply(null,this.event.sessions.map(s=>s.id));
    session.id=nextId+1
    this.event.sessions.push(session)
    this.eventService.updateEvent(this.event).subscribe()
    this.addMode=false
  }

  cancel(){
    this.addMode=false
  }

}
