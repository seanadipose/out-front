import { AdminComponent } from './admin.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
  import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
  },
  {  path: 'add', component: AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdminRoutingModule { }
