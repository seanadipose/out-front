import { Injectable } from '@angular/core';
import { IMessage } from '../../shared/components/messages/messages.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppMessagesService {
  private _messages$ = new Subject<IMessage[]>();
  private _clear$ = new Subject<boolean>();


  get messagesObs() {
    return this._messages$.asObservable();
  }

  get clearObs() {
    return this._clear$.asObservable();
  }
  constructor() {}



  addMessage(mssgs: IMessage | IMessage[]) {
    if (Array.isArray(mssgs)) return this._messages$.next(mssgs);
    return this._messages$.next([mssgs]);
  }

  clear() {
    this._clear$.next(true);
  }

}
