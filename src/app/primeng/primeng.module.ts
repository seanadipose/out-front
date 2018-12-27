import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MegaMenuModule } from 'primeng/megamenu';
import {CalendarModule} from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';

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
  ],
  exports: [
    MegaMenuModule,
    ButtonModule,
    CalendarModule,
    DialogModule,
    TableModule,
    FileUploadModule,
  ]
})
export class PrimengModule { }
