import { Component, OnInit, Inject } from '@angular/core';
import { StorageService } from '../core/services/storage.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  upload(evt) {
    const files = Object.create(evt);
    console.log(files);
    files.forEach(file => this.afStorage.upload('', file));

  }

  constructor(
    private afStorage: AngularFireStorage
  ) { }

  ngOnInit() {
  }

}
