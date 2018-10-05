import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean
  constructor(private route: Router, private eventService: EventService) { }

  ngOnInit() {
    this.isDirty = true
  }

  saveEvent(newEventValue) {
    console.log(newEventValue)
    this.eventService.createEvent(newEventValue).subscribe(event => {
      this.isDirty = false
      this.route.navigate(['/events'])
    })

  }

  cancel() {
    console.log('I am in cancel()')
    this.route.navigate(['/events'])
  }



}
