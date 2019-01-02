import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { PrimengModule } from '../primeng/primeng.module';
import { MessagesComponent } from './components/messages/messages.component';


@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
  ],
  declarations: [TopNavComponent, MessagesComponent],
  exports: [TopNavComponent, MessagesComponent]
})
export class SharedModule { }
