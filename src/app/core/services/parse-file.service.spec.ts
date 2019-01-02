/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParseFileService } from './parse-file.service';

describe('Service: ParseFile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParseFileService]
    });
  });

  it('should ...', inject([ParseFileService], (service: ParseFileService) => {
    expect(service).toBeTruthy();
  }));
});
