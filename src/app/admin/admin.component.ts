import { Component, OnInit, Inject } from '@angular/core';
import { StorageService } from '../core/services/storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  upload(evt) {
    const files = Object.create(evt);
    console.log(files);
    this.storageSvc.upload(files);
  }

  constructor(
    @Inject(StorageService) public storageSvc: StorageService
  ) { }

  ngOnInit() {
  }

}
