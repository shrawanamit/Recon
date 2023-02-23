import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedAlertComponent } from '@src/app/alert/red-alert/red-alert.component';


const routes: Routes = [
  { path: 'alert', component: RedAlertComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RedAlertRoutingModule { }
