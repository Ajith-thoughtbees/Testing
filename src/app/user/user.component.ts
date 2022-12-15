import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() inputValue = '';

  @Output() msg: EventEmitter<string> = new EventEmitter<string>();

  text : string = 'User Page';
  constructor() { }

  ngOnInit() {
  }

  emitMessage() {
    this.msg.emit('This is emitted message');
   }

}

