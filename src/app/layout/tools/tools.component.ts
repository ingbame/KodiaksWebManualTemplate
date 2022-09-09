import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  @Input() sidenav2?: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

}
