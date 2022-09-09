import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home.component';
import { NewsComponent } from './components/news/news.component';
import { HomeMaterialModule } from './home-material.module';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './routes/home-routes.routing';



@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    HomeMaterialModule,
    LayoutModule,
    RouterModule.forChild(HomeRoutes)
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
