import { Message } from './../message';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() messages:Message;
  @Input() currentUserId: number;
  @Input() selectedUser: number;

  constructor() { }

  ngOnInit(): void {
  }
}
