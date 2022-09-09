import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  disableSelect = new FormControl(false);

  constructor() { }

}
