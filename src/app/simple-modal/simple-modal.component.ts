import { Component, OnInit, Input, ViewChild,Inject, ElementRef } from '@angular/core';
import {JQ_TOKEN} from '../common/j-query.service';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
@Input() title:string
@Input() elementId:string
@Input() closeClickOnBody:string
@ViewChild('simpleModal') modal:ElementRef
  constructor(@Inject(JQ_TOKEN) private $:any) { }

  ngOnInit() {
  }

  closeModal(){
    if(this.closeClickOnBody.toLocaleLowerCase()==="true"){
      this.$(this.modal.nativeElement).modal('hide')
    }
  }

}
