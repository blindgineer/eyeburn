import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss'],
})
export class SettingsMenuComponent implements OnInit {
  alerts: boolean = true;

  constructor() {}

  toggleAlerts() {
      this.alerts = !this.alerts;
  }

  ngOnInit() {}
}
