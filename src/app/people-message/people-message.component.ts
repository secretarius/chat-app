import { User } from './../user';
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
  selectedUser: User;

  constructor() {}

  ngOnInit(): void {
    this.isUsersMessage = this.message.senderId === this.currentUserId ? false : true;
    // this.curTime = `${this.now} ${this.clock}`;
    //const a = sessionStorage.getItem('selectedUser')
    this.selectedUser = JSON.parse(sessionStorage.selectedUser);
  }
}
