import { Component, OnInit, Input } from '@angular/core';
import { IFileUploads } from 'src/app/core/interfaces/files';

@Component({
  selector: 'app-uploads-list-item',
  templateUrl: './uploads-list-item.component.html',
  styleUrls: ['./uploads-list-item.component.css']
})
export class UploadsListItemComponent implements OnInit {
  @Input() data: IFileUploads;
  constructor() { }

  ngOnInit() {
  }

}
