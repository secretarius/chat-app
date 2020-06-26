import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';


@Component({
  selector: 'app-chat-history-header',
  templateUrl: './chat-history-header.component.html',
  styleUrls: ['./chat-history-header.component.scss']
})
export class ChatHistoryHeaderComponent implements OnInit {

  @Input() selectedUser: User;
  @Input() isMobile: true;
  @Output() backHomeEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {

  }

  backHomePage(backArrow:any) {
    this.backHomeEvent.emit(backArrow)
  }
}
