import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedAlertRoutingModule } from '@src/app/alert/redAlert-routing.module';
import { RedAlertComponent } from './red-alert/red-alert.component';

@NgModule({
    declarations: [RedAlertComponent],
    imports: [
      CommonModule,
      RedAlertRoutingModule,
    ],
    exports: [RedAlertComponent],
    entryComponents: [
  
    ],
  })
export class RedAlertModule { }
