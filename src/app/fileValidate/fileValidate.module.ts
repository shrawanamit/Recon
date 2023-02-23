import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileValidateComponent } from './file-validate/file-validate.component';
import { FileValidateRoutingModule } from './fileValidate-routing.module';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
    declarations: [FileValidateComponent],
    imports: [
      CommonModule,
      FileValidateRoutingModule,
      MatTooltipModule,
      FormsModule,
      DataTablesModule
    ],
    exports: [FileValidateComponent],
    entryComponents: [
  
    ],
  })
  export class FileValidateModule { }
  