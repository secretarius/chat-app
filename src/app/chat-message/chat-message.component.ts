import { Message } from './../message';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
// import * as moment from 'moment';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  str: string;

  @Output() messageEvent = new EventEmitter<Message>();
  @Input() currentUserId: number;

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
  let message: Message = new Message();
    message.text = this.str;
    message.date = "10.06.2020"
    message.userId = this.currentUserId;
    this.messageEvent.emit(message);
  }
}

