import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettlementComponent } from './settlement/settlement.component';


const routes: Routes = [
  { path: 'settlement', component: SettlementComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DqrRoutingModule { }
