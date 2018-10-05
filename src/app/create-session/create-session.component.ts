import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import {ISession} from '../shared/event.model';
import {restrictWords} from '../shared/restricted.validators';
@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  @Output() createNewSession=new EventEmitter()
  @Output() cancelAddSession=new EventEmitter()
  sessionName:FormControl
  presenter:FormControl
  duration:FormControl
  level:FormControl
  abstract:FormControl
  newFormSession:FormGroup
  constructor() {
   }

  ngOnInit() {
    this.sessionName=new FormControl('',Validators.required)
    this.presenter=new FormControl('',Validators.required)
    this.duration=new FormControl('',Validators.required)
    this.level=new FormControl('',Validators.required)
    this.abstract=new FormControl('',[Validators.required,Validators.maxLength(400),restrictWords(['bar','foo'])])
    this.newFormSession=new FormGroup({
      sessionName:this.sessionName,
      presenter:this.presenter,
      duration:this.duration,
      level:this.level,
      abstract:this.abstract,
    })
  }

  saveSession(newFormSession){
    let session:ISession={
      id:undefined,
      name:newFormSession.sessionName,
      presenter:newFormSession.presenter,
      duration:+newFormSession.duration,
      level:newFormSession.level,
      abstract:newFormSession.abstract,
      voters:[]
    }

    this.createNewSession.emit(session)
   
  }

  cancel(){
    this.cancelAddSession.emit()
  }

}
