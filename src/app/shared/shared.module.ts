import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  imports: [
    CommonModule,
    PrimengModule,
  ],
  declarations: [TopNavComponent],
  exports: [TopNavComponent]
})
export class SharedModule { }
