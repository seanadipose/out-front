import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavComponent implements OnInit {
  items: MenuItem[];
  logout() {
    console.log('logged out')
  }
  constructor() { }

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
      }]

  }
}
