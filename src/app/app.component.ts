import { User } from './user';
import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Message } from './message';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService],
})
export class AppComponent {
  title = 'chatapp';

  curTime: string = '';
  now: string = moment().format('L');
  clock: string = moment().format('LT');

  currentUserId = 0; //get this by backend duering login

  users: User[] = [];
  messages: Message[];
  currentUserMessages: Message[];
  responsMessage: string;
  selectedUser: User;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService
      .getData()
      .subscribe((data) => (this.users = data['userList']));

    this.httpService.getValue().subscribe((data: any[]) => {
      this.responsMessage = data['value'];
    });

    this.httpService
      .getMessages()
      .subscribe((data) => (this.currentUserMessages = data['messagesList']));
    this.selectUser(this.users[0]);
  }

  messageEvent(message) {
    this.messages.push(message);
    this.currentUserMessages.push(message);
    this.getRespon();
  }

  getRespon() {
    this.httpService.getValue().subscribe((ata: any[]) => {
      this.responsMessage = ata['value'];
    });
    let message: Message = new Message();
    message.text = this.responsMessage;
    message.date = this.curTime = `${this.now} ${this.clock}`;
    message.resssiverId = this.currentUserId;
    message.senderId = this.selectedUser.id;
    this.messages.push(message);
    this.currentUserMessages.push(message);
  }

  selectUser(user) {
    if (user) {
      this.selectedUser = user;
      this.messages = this.getChat(this.currentUserId, user.id);
    }
  }

  getChat(currentUserId: number, selectedUserId: number): Message[] {
    const currentChat = this.currentUserMessages.filter(
      (mess) =>
        (mess.senderId === currentUserId &&
          mess.resssiverId === selectedUserId) ||
        (mess.senderId === selectedUserId && mess.resssiverId === currentUserId)
    );
    return currentChat;
  }
}
