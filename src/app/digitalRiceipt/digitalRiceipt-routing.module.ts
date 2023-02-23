import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitalRiceiptComponent } from './digital-riceipt/digital-riceipt.component';
const routes: Routes = [
  { path: 'digital', component: DigitalRiceiptComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitalRiceiptRoutingModule { }
