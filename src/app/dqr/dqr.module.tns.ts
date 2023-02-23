import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DqrRoutingModule } from '@src/app/dqr/dqr-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SettlementComponent } from '@src/app/dqr/settlement/settlement.component';


@NgModule({
  declarations: [SettlementComponent],
  imports: [
    DqrRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DqrModule { }
