import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { BehaviorSubject, observable, of, Observable } from 'rxjs';
import { auth } from 'firebase/app';
import { takeUntil, switchMap, tap, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { IUser } from '../models/user';

export interface IAuthResult {
  uid: string;
  email: string;
  roles: string[];
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState$ = new BehaviorSubject<auth.IdTokenResult>(null);
  private isAuth$ = new BehaviorSubject<boolean>(false);
  private userCollection = this.db.collection('users');
  user$: Observable<IUser>;
  userObs: Observable<IAuthResult> = new Observable<IAuthResult>();
  async logout() {
    await this.afAuth.auth.signOut();
    this.authResult();
    this.authState$.next(null);
  }

  authResult() {
    const sub = this.afAuth.idTokenResult;
    // sub.pipe(takeUntil(this.isAuth$))

    sub.subscribe((obs: auth.IdTokenResult) => {
        this.authState$.next(obs);
      });

  }
  canRead(user: IUser): boolean {
    const allowed = ['admin', 'editor', 'subscriber'];
    return this.checkAuthorization(user, allowed);
  }

  canEdit(user: IUser): boolean {
    const allowed = ['admin', 'editor'];
    return this.checkAuthorization(user, allowed);
  }

  canDelete(user: IUser): boolean {
    const allowed = ['admin'];
    return this.checkAuthorization(user, allowed);
  }

  private checkAuthorization(user: IUser, allowedRoles: string[]): boolean {
    if (!user) return false;
    for (const role of allowedRoles) {
      if (user.roles[role]) return true;
      return false;
    }
  }

  get isAuth() {
    return (this.afAuth.auth.currentUser) ? true : false;
  }

  get uuid() {
    return this.afAuth.auth.currentUser.uid;
  }

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
  ) {
    this.authResult();
    this.user$ = this.afAuth.authState
      .pipe(
        switchMap(user => {
          if (user) {
        console.log(user);
        return this.db.doc<IUser>(`User/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
        }
        )
    );

    this.authState$.subscribe(obs => {
      if (!obs) return;
      console.log(obs.claims);
      const { claims: { email : email } } = obs;
      const user = {
        email: email,
        uid: '',
        roles: ['admin'],
      } as IUser;
      this.addUser(user);
    });

    // this.user.subscribe();
    // this.authState$.subscribe(obs => console.log(obs));
    // setInterval(() => console.log(this.isAuth), 1000);

  }

  async addUser(user: IUser) {
    const emailRef = this.db.collection('User', ref => ref.where('email', '==', user.email));
    const checked = await emailRef.get();
    if (checked) return 'user exists';
    const added = await this.userCollection.add(user);
    if (added) return 'user added';
    else return 'something went wrong';
  }


}
