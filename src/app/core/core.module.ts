import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PapaParseModule } from 'ngx-papaparse';


@NgModule({
  imports: [
    CommonModule,
    PapaParseModule,

  ],
  exports: [PapaParseModule],
  declarations: []
})
export class CoreModule { }
