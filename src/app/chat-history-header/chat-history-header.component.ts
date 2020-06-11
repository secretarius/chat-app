import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-chat-history-header',
  templateUrl: './chat-history-header.component.html',
  styleUrls: ['./chat-history-header.component.scss']
})
export class ChatHistoryHeaderComponent implements OnInit {

  @Input() selectedUser: User;

  constructor() { }

  ngOnInit(): void {
  }

}
