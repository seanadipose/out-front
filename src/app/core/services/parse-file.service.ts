import { Injectable } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { StoreService } from './store.service';


// Campaign Avg. Views Before Click: 0
// Campaign CTR: "0.000%"
// Campaign Clicks: 0
// Campaign Conversions: 1
// Campaign Impressions: 0
// Campaign Interaction Rate: "0.000%"
// Campaign Reach: 0
// Date: "2018-11-05"


// avgViewsBeforeClick: number;
// campaign_id: number;
// clicks: number;
// conversions: number;
// ctr: number;
// date: Date;
// interactions: number;
// impressions: number;
// reach: number;
// fileType: IFileTypes;
// }
const enum adservingHeaders {
  avgViewsBeforeClick,
  ctr,
  clicks,
  conversions,
  date,
  interactions,
  reach,
}
// const fields = {
//   'Campaign Avg. Views Before Click' : 'avgViewsBeforeClick',
//   'Campaign CTR' : 'ctr',
//   'Campaign Clicks': 'clicks',
//   'Campaign Conversions',
//   'Campaign Impressions',
//   'Campaign Reach',
//   'Date'}

// const set = {
//
//
// }


@Injectable({
  providedIn: 'root'
})
export class ParseFileService {

  async parse(link: string) {
    console.log(link);

    const options = {

      complete: (results, file) => {
        console.log('Parsed: ', results, file);
        const data = [...results.data];
        this.store.insertDocument(data, 'Adserving');
        // data.forEach(arr => {
        //   console.log(arr);
        //   this.store.insertDocument(arr, 'Adserving');
        // });
      },
      header: true,
      dynamicTyping: true,
      download: true
      // Add your options here
    };
    const parse = await this.papa.parse(link, options);
    // console.log(parse.data);
  }

  constructor(
    private papa: Papa,
    // private store: AngularFirestore,
    private store: StoreService
  ) {

  }

}
