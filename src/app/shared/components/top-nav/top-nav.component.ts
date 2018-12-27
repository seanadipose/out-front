import { Component, OnInit, Inject } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  items: MenuItem[];

  get label() {
    return (this.authSvc.isAuth) ? 'Logout' : 'Login';
  }
  logout() {
    this.authSvc.logout();
  }
  constructor(
    @Inject(AuthService) public authSvc: AuthService,
  ) { }

  ngOnInit() {

    this.items = [
      {
        label: 'Out-front', icon: 'fa fa-fw fa-check',
        items: [
          [
            {
              label: 'My Dashboard',
              items: [{ label: 'Dashboard' }]
            },
            {
              label: 'My Account',
              items: [{ label: 'Account' }]
            }
          ]
        ]

      },
      {
        label: 'Admin', icon: 'fa fa-fw fa-gears',
        items: [
          [
            {
              label: 'Manage Users',
              items: [{ label: 'Add Campaign' }, { label: 'Add User' }]
            }
          ]

        ]
      }];

  }
}
