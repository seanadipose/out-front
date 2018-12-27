import { AppContainerComponent } from './app-container.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: AppContainerComponent},
  { path: 'admin', redirectTo: '/admin' },
  // {
    // path: 'admin',
    // loadChildren: './admin/admin.module#AdminModule'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }

