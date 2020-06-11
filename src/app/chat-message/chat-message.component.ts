import { User } from './../user';
import { Message } from './../message';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  str: string;
  curTime: string = '';
  now: string = moment().format('L');
  clock: string = moment().format('LT');

  @Output() messageEvent = new EventEmitter<Message>();
  @Input() currentUserId: number;
  @Input() selectedUser: User;

  constructor() { }

  ngOnInit(): void {
    this.curTime = `${this.now} ${this.clock}`;
  }

  sendMessage() {
  let message: Message = new Message();
    message.text = this.str;
    message.date = this.curTime;
    message.senderId = this.currentUserId;
    message.resssiverId = this.selectedUser.id;
    this.messageEvent.emit(message);
  }
}

