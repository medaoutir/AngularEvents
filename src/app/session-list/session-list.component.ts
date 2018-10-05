import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/event.model';
import {VoterService} from './voter.service';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions:ISession[]
  @Input() filterBy:string
  @Input() eventId:number
  @Input() sortedBy:string
  visibleSessions:ISession[]=[]
  constructor(private voterService:VoterService,private auth:AuthService) { }

  ngOnChanges() {
    this.filterSessions(this.filterBy)
    this.sortedBy==='name' ? this.visibleSessions.sort(sortByNameAsc):this.visibleSessions.sort(sortByVotesDesc)
  }

  filterSessions(filter){
    if(filter==='all'){
      this.visibleSessions=this.sessions.slice(0)
    }
    else{
      this.visibleSessions=this.sessions.filter(session => {
        return session.level.toLocaleLowerCase()===filter
      })
    }
  }

  toggleVote(session:ISession){
   if (this.userHasVoted(session)){
      this.voterService.deleteVoter(this.eventId,session,this.auth.currentUser.userName)
    }
    else{
      this.voterService.addVoter(this.eventId,session,this.auth.currentUser.userName)
    }
    if(this.sortedBy==='votes'){
      this.visibleSessions.sort(sortByVotesDesc)
    }
  }

  userHasVoted(session:ISession){
   return this.voterService.hasVoted(session,this.auth.currentUser.userName)
  }

}

function sortByNameAsc(s1:ISession,s2:ISession){
  if(s1.name>s2.name) return 1
  else if(s1.name===s2.name) return 0
  else return -1
}

function sortByVotesDesc(s1:ISession,s2:ISession){
  return s2.voters.length-s1.voters.length
}


