import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ProgramComponent } from './program/program.component';

@NgModule({
  imports: [
    NativeScriptCommonModule
  ],
  declarations: [
  ProgramComponent],
  providers: [
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AllprogramsModule { }
