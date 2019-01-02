import { Component, OnInit, Input, Inject } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap } from 'rxjs/operators';
import { IFileUploads, IFileTypes } from 'src/app/core/interfaces/files';
import { AppMessagesService } from 'src/app/core/services/messages.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Input() module: IFileTypes;
  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    @Inject(AppMessagesService) private appMssgSvc: AppMessagesService,

  ) { }

  ngOnInit() {
  }

  upload(event: any) {
    event.files.forEach(itm => this.startUpload(itm));
  }


  startUpload(itm: any) {
    const file = itm;
    // TODO: add customer handling to the path
    const path = `${this.module}/${itm.name}`;

    // TODO: add metadata;
    const customMetadata = { processed: false };

    // upload task is entered as a reference
    // there are other observables we can reference from the task
    this.task = this.storage.upload(path, file);

    // progress changes
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    // the file's download url
    // this.downloadURL =
    this.task.then(xfer => {
      // Add this line to get the path as a ref
      const module = this.module;
      this.downloadURL = this.storage.ref(path).getDownloadURL();
      if (!module) return console.log('no m odule found');
      this.downloadURL.subscribe(obs => {
        console.log(obs);
        const update = {
          created: new Date(),
          customer: 'abc',
          module: module,
          path: path,
          link: obs,
          processed: false,
        } as IFileUploads;
        this.db.collection('Uploads').add(update);
        this.appMssgSvc.addMessage({ severity: 'success', summary: 'file uploaded', detail: `<a href ="${obs}">${path}</a>` });
      });

    }); // And this one to actually grab the URL from the Ref
    // this.downloadURL.subscribe(obs => console.log(obs));

  }


}
