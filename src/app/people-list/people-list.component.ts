import { Message } from './../message';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as moment from 'moment';
import { User } from './../user';
import { HttpService} from './../http.service';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  currentDate: string = "";
  date: string = moment().format('LL');
  @Output() selectedUser = new EventEmitter<number>();

  @Input() users: User[]=[];
  messages: Message[]=[];

    constructor(private httpService: HttpService){}


  ngOnInit(): void {
    this.currentDate = this.date;

    this.httpService.getMessages().subscribe(data => this.messages=data["messagesList"]);
  }

  selectUser(user) {
    sessionStorage.selectedUser = JSON.stringify(user);
    this.selectedUser.emit(user);
  }

  getLastMessage(user:User): string {
    const chat = this.messages.filter(mess => mess.senderId === user.id || mess.resssiverId === user.id);
    return chat.length > 0 ? chat[chat.length - 1].text : '';
  }


}
