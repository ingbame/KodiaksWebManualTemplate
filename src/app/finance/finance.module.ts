import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovementComponent } from './pages/movement/movement.component';
import { MovementTypesComponent } from './pages/movement-types/movement-types.component';
import { RouterModule } from '@angular/router';
import { FinanceRoutes } from './routes/finance.routing';



@NgModule({
  declarations: [
    MovementComponent,
    MovementTypesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FinanceRoutes)
  ],
  exports:[
    MovementComponent,
    MovementTypesComponent
  ]
})
export class FinanceModule { }
