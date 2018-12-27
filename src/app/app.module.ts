import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminModule } from './admin/admin.module';
import { CoreModule } from './core/core.module';
import { AdminComponent } from './admin/admin.component';
// @ts-ignore
import {FirebaseUIModule} from 'firebaseui-angular';
// @ts-ignore
import { FirebaseUIModule, firebase, firebaseui } from 'firebaseui-angular';
// @ts-ignore
import * as firebase from 'firebase/app';
// @ts-ignore
import * as firebaseui from 'firebaseui';
import { SharedModule } from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthService } from './core/services/auth.service';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppContainerComponent } from './app-container.component';

const settings = environment;

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(settings.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireStorageModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    DashboardModule,
    AdminModule,
    CoreModule,
    SharedModule,
  ],
  exports: [
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(AuthService) private authSvc: AuthService,
  ) {

  }
 }
