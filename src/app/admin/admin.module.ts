import { CoreModule } from './../core/core.module';
import { PrimengModule } from './../primeng/primeng.module';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { SharedModule } from 'primeng/components/common/shared';
import { UploadsListComponent } from './uploads-list/uploads-list.component';
import { UploadsListItemComponent } from './uploads-list-item/uploads-list-item.component';
import { UploadsCheckboxComponent } from './uploads-list/uploads-checkbox/uploads-checkbox.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  imports: [
CommonModule,
    AdminRoutingModule,
    PrimengModule,
    SharedModule,
  ],
  declarations: [AdminComponent,
    FileUploadComponent, UploadsListComponent,
    UploadsListItemComponent, UploadsCheckboxComponent, AddUserComponent, UserListComponent]
})
export class AdminModule { }
