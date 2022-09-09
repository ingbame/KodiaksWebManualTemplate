import { Routes } from '@angular/router';
import { MovementTypesComponent } from '../pages/movement-types/movement-types.component';
import { MovementComponent } from '../pages/movement/movement.component';
export const FinanceRoutes: Routes = [
  { path: '', component: MovementComponent, },
  { path: 'movementtypes', component: MovementTypesComponent },
  { path: '**', redirectTo: 'movement' }
];
