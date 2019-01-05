import { Component, OnInit, Inject } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  constructor(
    @Inject(StoreService) private storeSvc: StoreService,
  ) { }

  ngOnInit() {
    // this.storeSvc.getCollection('User');
  }

}
