
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReconSummaryComponent } from './recon-summary/recon-summary.component';
const routes: Routes = [
  { path: 'reconSummary', component: ReconSummaryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReconSummaryRoutingModule { }
