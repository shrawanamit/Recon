import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigitalRiceiptComponent } from './digital-riceipt/digital-riceipt.component';
import { DigitalRiceiptRoutingModule } from './digitalRiceipt-routing.module';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
    declarations: [DigitalRiceiptComponent],
    imports: [
      CommonModule,
      DigitalRiceiptRoutingModule,
      MatTooltipModule,
      FormsModule,
      DataTablesModule
    ],
    exports: [DigitalRiceiptComponent],
    entryComponents: [
  
    ],
  })
  export class DigitalRiceiptModule { }
  