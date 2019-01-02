import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParseFileService {

  parse(link: string) {
    console.log(link);
  }

  constructor() { }

}
