import { Message } from './../message';
import { Component, OnInit, Input } from '@angular/core';
// import * as moment from 'moment';

@Component({
  selector: 'app-my-message',
  templateUrl: './my-message.component.html',
  styleUrls: ['./my-message.component.scss'],
})
export class MyMessageComponent implements OnInit {
  curTime: string = '';
  // now: string = moment().format('L');
  // clock: string = moment().format('LT');

  @Input() message: Message;

  constructor() {}

  ngOnInit(): void {
    // this.curTime = `${this.now} ${this.clock}`;
  }
}
