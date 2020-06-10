import { User } from './user';
import { Component } from '@angular/core';
import { HttpService} from './http.service';
import { Message } from './message';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})
export class AppComponent {
  title = 'chatapp';
  currentUserId = 0; //get this by backend duering login
  activeUserId = 1;

  users: User[]=[];
  messages: Message[]=[{ text: "hellowe!", date: "05.03.12", userId: 1 }];

    constructor(private httpService: HttpService){}

    ngOnInit() {
      this.httpService.getData().subscribe(data => this.users=data["userList"]);
      
    }

    messageEvent(message) {
      this.messages.push(message);
      console.log(this.messages.length);
      this.getRespon();
    }

    getRespon() {
      let message: Message = new Message();
      message.text = "srgaerherhththtrhjtrjsrj";
      message.date = "10.06.2020"
      message.userId = this.activeUserId;
      this.messages.push(message);
    }
}



