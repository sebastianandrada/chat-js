import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { UserComponent } from './shared/model/user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatComponent, UserComponent]
})
export class ChatModule { }
