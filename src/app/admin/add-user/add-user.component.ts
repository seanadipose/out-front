import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  roles: SelectItem[] = [
    { value: 'customer', label: 'Customer' },
    { value: 'guest', label: 'Guest' },
    { value: 'admin', label: 'Admin' }];
  userform: FormGroup;



  constructor(
    @Inject(AuthService) private authSvc: AuthService,
    @Inject(StoreService) private storeSvc: StoreService,
    private fb: FormBuilder,
  ) {

  }

  ngOnInit(
  ) {

    this.userform = this.fb.group({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'email': new FormControl(''),
      'roles': new FormControl('', Validators.required)
  });

  }
  submit() {
    const fields = { ...this.userform.value };
    this.storeSvc.insertDocument([fields], 'User', 1);
  }
  cancel() {
    console.log('cancel');
  }

}
