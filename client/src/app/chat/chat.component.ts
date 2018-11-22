import { Component, OnInit } from '@angular/core';
import { User } from './shared/model/user';
import { Action } from './shared/model/action.enum';

@Component({
  selector: 'cc-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  action = Action;
  user: User

  constructor() { }

  ngOnInit() {
  }

}
