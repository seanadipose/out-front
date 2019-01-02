import { Component, OnInit, Inject, Input } from '@angular/core';
import { IFileTypes, IFileUploads } from 'src/app/core/interfaces/files';
import { StoreService } from 'src/app/core/services/store.service';
import { Observable } from 'rxjs';
import { IAdserving } from 'src/app/core/interfaces/adserving';
import { tap } from 'rxjs/operators';
import { ParseFileService } from 'src/app/core/services/parse-file.service';

const keys = ['processed', 'id', 'customer', 'module', 'delete' ];

@Component({
  selector: 'app-uploads-list',
  templateUrl: './uploads-list.component.html',
  styleUrls: ['./uploads-list.component.css']
})

export class UploadsListComponent implements OnInit {
  @Input() module: IFileTypes;

  data: Observable<any>;
  load = true;
  cols = keys;

  id(data: any) {
    return `<a href="${data.link}">${data.id}</a>`;
  }

  parse(link: string) {
    console.log(link);
    this.parseFileSvc.parse(link);
  }

  delete(event: MouseEvent) {
    console.log(event);
  }
  constructor(
    @Inject(StoreService) private storeSvc: StoreService,
    @Inject(ParseFileService) private parseFileSvc: ParseFileService,
  ) { }

  ngOnInit() {
    this.data = this.storeSvc.getCollection<IFileUploads>(this.module).pipe(tap(obs => this.load = false));
    this.data.subscribe(obs => console.log(obs));
  }

}
