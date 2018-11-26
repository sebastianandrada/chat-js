import { User } from "./user";
import { Action } from "./action.enum";


export class Message {
  from?: User;
  content?: any;
  action?: Action;
  type?: string;
  reply?: string;
  files?: File;
  date?: Date;
  quote?: Message;
  avatar?: string;
}
