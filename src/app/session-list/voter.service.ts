import { Injectable } from '@angular/core';
import { ISession,IEvent } from '../shared/event.model';
import { throwError } from 'rxjs';
import {catchError, filter,map} from 'rxjs/operators';
import {Http,Response,RequestOptions,Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  url:string="http://localhost:3000/data";
  

  constructor(private http:Http) { }

  deleteVoter(eventId:number,deletedSession:ISession,voterName:string){
    let headers=new Headers({'Content-Type':'application/json'})
    let requestOptions=new RequestOptions({headers:headers})
    let uri=`${this.url}/${eventId}/sessions/${deletedSession.id}/voters/${voterName}`
    this.http.delete(uri,requestOptions)
                    .pipe(catchError((err:Response)=>{return throwError(err.statusText)}))
                    .subscribe()
    //session.voters=session.voters.filter(voter=>voter!==voterName);
  }

  addVoter(eventId:number,addedSession:ISession,voterName:string){
    let headers=new Headers({'Content-Type':'application/json'})
    let requestOptions=new RequestOptions({headers:headers})
    let uri=`${this.url}/${eventId}/sessions/${addedSession.id}/voters/${voterName}`
    this.http.post(uri,voterName,requestOptions)
                    .pipe(catchError((err:Response)=>{return throwError(err.statusText)}))
                    .subscribe()
  }

  hasVoted(session:ISession,voterName:string):boolean{
    return session.voters.some(voter=>voter===voterName)
  }
}
