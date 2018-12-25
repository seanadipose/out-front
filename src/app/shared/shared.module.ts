import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import {MegaMenuModule} from 'primeng/megamenu';


@NgModule({
  imports: [
    CommonModule,
    MegaMenuModule,
  ],
  declarations: [TopNavComponent],
  exports: [TopNavComponent]
})
export class SharedModule { }
