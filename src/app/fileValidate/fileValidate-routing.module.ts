import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileValidateComponent } from './file-validate/file-validate.component';
const routes: Routes = [
  { path: 'validate', component: FileValidateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileValidateRoutingModule { }
