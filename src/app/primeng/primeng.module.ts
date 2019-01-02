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
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    DropdownModule,
    CheckboxModule,
    ConfirmDialogModule,

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
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
    DropdownModule,
    CheckboxModule,
    ConfirmDialogModule,


  ]
})
export class PrimengModule { }
