import { Message } from './../message';
import { Component, OnInit, Input } from '@angular/core';
// import * as moment from 'moment';

@Component({
  selector: 'app-people-message',
  templateUrl: './people-message.component.html',
  styleUrls: ['./people-message.component.scss']
})
export class PeopleMessageComponent implements OnInit {
  curTime: string = '';
  isUsersMessage: boolean;
  // now: string = moment().format('L');
  // clock: string = moment().format('LT');

  @Input() message: Message;
  @Input() currentUserId: number;


  constructor() {}

  ngOnInit(): void {
    this.isUsersMessage = this.message.userId === this.currentUserId ? false : true;
    // this.curTime = `${this.now} ${this.clock}`;
  }
}
