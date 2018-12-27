import { CoreModule } from './../core/core.module';
import { PrimengModule } from './../primeng/primeng.module';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    PrimengModule,
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
