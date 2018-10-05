import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote-up',
  templateUrl: './vote-up.component.html',
  styleUrls: ['./vote-up.component.css']
})
export class VoteUpComponent implements OnInit {
  @Input() count: number;
  inputColor: string;
  @Input() set voted(val) {
    this.inputColor = val ? 'red' : 'white'
  }
  @Output() vote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.vote.emit({});
  }


}
