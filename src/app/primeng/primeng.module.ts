import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import {CalendarModule} from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import {ProgressBarModule} from 'primeng/progressbar';
import {MessagesModule} from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import {DataViewModule} from 'primeng/dataview';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MegaMenuModule,
    ButtonModule,
    CalendarModule,
    DialogModule,
    TableModule,
    FileUploadModule,
    ProgressBarModule,
    MessagesModule,
    MessageModule,
    DataViewModule,
  ],
  exports: [
    MegaMenuModule,
    ButtonModule,
    CalendarModule,
    DialogModule,
    TableModule,
    FileUploadModule,
    ProgressBarModule,
    MessagesModule,
    MessageModule,
    DataViewModule,

  ]
})
export class PrimengModule { }
