import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';
import { User, auth } from 'firebase/app';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState$ = new BehaviorSubject<auth.IdTokenResult>(null);
  private isAuth$ = new BehaviorSubject<boolean>(false);

  async logout() {
    await this.afAuth.auth.signOut();
    this.authResult();
    this.authState$.next(null);
  }

  authResult() {
    const sub = this.afAuth.idTokenResult;
    sub.pipe(takeUntil(this.isAuth$)).subscribe((obs: auth.IdTokenResult) => this.authState$.next(obs));
  }


  get isAuth() {
    return (this.afAuth.auth.currentUser) ? true : false;
  }

  get uuid() {
    return this.afAuth.auth.currentUser.uid;
  }

  constructor(private afAuth: AngularFireAuth) {
    this.authResult();
    // this.authState$.subscribe(obs => console.log(obs));
    // setInterval(() => console.log(this.isAuth), 1000);

   }
}
