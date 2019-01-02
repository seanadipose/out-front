import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import {ConfirmationService} from 'primeng/api';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-uploads-checkbox',
  templateUrl: './uploads-checkbox.component.html',
  styleUrls: ['./uploads-checkbox.component.css'],
  providers: [ConfirmationService]
})
export class UploadsCheckboxComponent implements OnInit {
  @Input() checked: boolean;
  @Output() process = new EventEmitter<boolean>();

  checkFormControl = new FormControl({ value: this.checked, disabled: this.checked} );
  checkSub: Subscription;

  get label() {
    return (this.checked) ?  'complete' : 'process';
  }

  changed(event) {
    console.log(event);
    if (!event) return;
    this.confirmSvc.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.checked = true;
        this.checkFormControl.disable();
        this.process.emit(true);
        this.checkSub.unsubscribe();
      },
      reject: () => {
        this.checked = false;
        this.checkFormControl.setValue(false);
      }
  });
  }

  constructor(
    private confirmSvc: ConfirmationService
  ) { }

  ngOnInit() {
    console.log(this);
    const checked = this.checked;
    this.checkFormControl = new FormControl(checked);
    if (checked) this.checkFormControl.disable();
    if (!this.checked) this.checkSub = this.checkFormControl.valueChanges.subscribe(obs => this.changed(obs));
  }


}
