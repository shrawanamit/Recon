import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ConfigurationComponent } from '@src/app/config/configuration/configuration.component';

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  declarations: [
  ConfigurationComponent],
  providers: [
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ConfigModule { }
