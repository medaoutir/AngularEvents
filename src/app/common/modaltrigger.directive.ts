import { Directive, OnInit,Inject,ElementRef, Input } from '@angular/core';
import {JQ_TOKEN} from './j-query.service'

@Directive({
  selector: '[appModaltrigger]'
})
export class ModaltriggerDirective implements OnInit {
  private el:HTMLElement
  @Input('appModaltrigger') modalId:string
  constructor(@Inject(JQ_TOKEN) private $:any,ref:ElementRef) {
    this.el=ref.nativeElement
   }

  ngOnInit(){
    this.el.addEventListener('click',e=>this.$(`#${this.modalId}`).modal({}))
  }

}
