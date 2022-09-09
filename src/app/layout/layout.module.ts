import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotificationComponent } from './notification/notification.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolsComponent } from './tools/tools.component';
import { RouterModule } from '@angular/router';
import { LayoutMaterialModule } from './layout-material.module';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    NotificationComponent,
    SidebarComponent,
    ToolsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutMaterialModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    NotificationComponent,
    SidebarComponent,
    ToolsComponent
  ]
})
export class LayoutModule { }
