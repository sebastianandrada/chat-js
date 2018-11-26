import { Component } from "@angular/core";
import { NbSidebarService } from "@nebular/theme";
import { Message } from "./chat/shared/model/message";
import { User } from "./chat/shared/model/user";

@Component({
  selector: "cc-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "chat-client";
  users: User[] = [
    { id: "1", name: "nico", avatar: "cat" },
    {
      id: "2",
      name: "seb",
      avatar: "erre"
    }
  ];
  public messages: Message[] = [{ from: this.users[0]}];

  constructor(private sideBarService: NbSidebarService) {}

  public toggle(): boolean {
    this.sideBarService.toggle(true);
    return false;
  }

  public sendMessage(event: any) {
    console.log("working !");
  }
}
