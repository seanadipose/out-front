import { Component, OnInit, Inject, Input } from '@angular/core';
import { IFileTypes, IFileUploads } from 'src/app/core/interfaces/files';
import { StoreService } from 'src/app/core/services/store.service';
import { Observable } from 'rxjs';
import { IAdserving } from 'src/app/core/interfaces/adserving';

@Component({
  selector: 'app-uploads-list',
  templateUrl: './uploads-list.component.html',
  styleUrls: ['./uploads-list.component.css']
})
export class UploadsListComponent implements OnInit {
  @Input() module: IFileTypes;

  data: Observable<any>;

  constructor(
    @Inject(StoreService) private storeSvc: StoreService,
  ) { }

  ngOnInit() {
    this.data = this.storeSvc.getCollection<IFileUploads>(this.module);
    this.data.subscribe(obs => console.log(obs));
  }

}
