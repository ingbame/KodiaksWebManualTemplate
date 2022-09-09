import { Routes } from '@angular/router';
import { NewsComponent } from '../components/news/news.component';
import { HomeComponent } from '../pages/home.component';

export const HomeRoutes: Routes = [
  {
    path: '', component:HomeComponent,
    children: [
      { path: 'news', component: NewsComponent },
      { path: '**', redirectTo: 'news' }
    ]
  },
  { path: '**', redirectTo: 'news' }
];
