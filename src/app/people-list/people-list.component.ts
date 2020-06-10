import { Message } from './../message';
import { Component, OnInit } from '@angular/core';
// import * as moment from 'moment';
import { User } from './../user';
import { HttpService} from './../http.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  currentDate: string = "";
  // date: string = moment().format('LL');

  users: User[]=[];
  messages: Message[]=[];

    constructor(private httpService: HttpService){}


  ngOnInit(): void {
    // this.currentDate = this.date;
    this.httpService.getData().subscribe(data => this.users=data["userList"]);
    this.httpService.getValue().subscribe((ata: any[])=>{
      console.log(ata);
      this.messages = ata['value'];
      console.log(this.messages);
    })
  }

}
