import {
  AngularFirestore,
  DocumentChangeAction
} from '@angular/fire/firestore';
import {
  Injectable,
  Inject
} from '@angular/core';
import {
  IFileTypes
} from '../interfaces/files';
import {
  Observable
} from 'rxjs';
import {
  map
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  getCollection<T>(module: IFileTypes): Observable<T[]> {
    const collection = this.db.collection(module);
    return collection.snapshotChanges()
      .pipe(
        map((arr: DocumentChangeAction<T>[]) => arr.map(
          (snap: any) => {
            const val = snap.payload.doc.data();
            let data = {};
            data = { ...val, id: snap.payload.doc.id } as T;
            // data.id = snap.payload.doc.id;
            return data as T;
          }
        )));
}

updateDocument(id: string) {
  console.log('not init');
}

constructor(
  private db: AngularFirestore,
) {}


}
