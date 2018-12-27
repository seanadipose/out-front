import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private afStorage: AngularFireStorage
  ) { }
  upload(files) {
    console.log(event);
    // files.forEach(file => this.afStorage.upload('', file));
  }
}
