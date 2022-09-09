import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule
  ]
})
export class HomeMaterialModule { }
