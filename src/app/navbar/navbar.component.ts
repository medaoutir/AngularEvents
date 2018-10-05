import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {EventService} from '../shared/event.service';
import { ISession } from '../shared/event.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sessionKeyWord:string
  foundSessions:ISession[]
  constructor(private auth:AuthService,private eventService: EventService) { }

  ngOnInit() {
  }

  searchSession(sessionKeyWord){
     this.eventService.searchSession(sessionKeyWord).subscribe(sessions=>this.foundSessions=sessions)
    console.log(this.foundSessions)
  }


}
