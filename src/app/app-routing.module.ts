import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login.component';

const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path:'movement', loadChildren: () => import('./finance/finance.module').then(m => m.FinanceModule)},
  {path:'**', redirectTo: 'login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
