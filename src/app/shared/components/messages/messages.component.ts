import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import {MessageService} from 'primeng/components/common/messageservice';
import { AppMessagesService } from './../../../core/services/messages.service';

export type ISeverity = 'success' | 'info' | 'warn' | 'error';

export interface IMessage {
  severity: ISeverity;
  summary: string;
  detail: string;
}

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styles: [`
      :host ::ng-deep button {
          margin-right: .25em;
      }

      :host ::ng-deep .ui-message,
      :host ::ng-deep .ui-inputtext {
          margin-right: .25em;
      }
  `],
  providers: [MessageService]
})
export class MessagesComponent implements OnInit {



  constructor(private messageService: MessageService, @Inject(AppMessagesService) public appMssgSvc: AppMessagesService) {}
  ngOnInit(): void {
    const clear = () => this.messageService.clear();
    const addMssgs = (mssg: IMessage | IMessage[]) => {
      if (Array.isArray(mssg)) return this.messageService.addAll(mssg);
      return this.messageService.add(mssg);
    };
    this.appMssgSvc.clearObs.subscribe(() => clear());

    this.appMssgSvc.messagesObs.subscribe(obs => addMssgs(obs));
  }
  addMssgs(mssg: IMessage | IMessage[]) {
    if (Array.isArray(mssg)) return this.messageService.addAll(mssg);
    return this.messageService.add(mssg);
  }

  // addMultiple(mssgs: IMessage[]) {
  //   this.messageService.addAll(mssgs);
  // }

  clear() {
    this.messageService.clear();
  }
}
