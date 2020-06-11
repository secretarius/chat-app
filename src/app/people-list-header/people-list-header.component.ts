import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-people-list-header',
  templateUrl: './people-list-header.component.html',
  styleUrls: ['./people-list-header.component.scss']
})
export class PeopleListHeaderComponent implements OnInit {

  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  search($event) {
    if($event.target.value.length > 2 || $event.target.value.length === 0) {
      this.searchEvent.emit($event.target.value);
    }
  }
}
