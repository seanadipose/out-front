import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import {ConfirmationService} from 'primeng/api';


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
      }
  });
  }

  constructor(
    private confirmSvc: ConfirmationService
  ) { }

  ngOnInit() {
    console.log(this);
    this.checkFormControl = new FormControl(this.checked);
    this.checkFormControl.valueChanges.subscribe(obs => this.changed(obs));
    if (this.checked) this.checkFormControl.disable();
  }

}
