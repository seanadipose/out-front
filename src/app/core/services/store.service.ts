import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(
    @Inject(AngularFirestore) private angularFS: AngularFirestore,
  ) {
  }
}
