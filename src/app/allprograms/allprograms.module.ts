import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllprogramsRoutingModule } from './allprograms-routing.module';
import { ProgramComponent } from './program/program.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProgramComponent],
  imports: [
    CommonModule,
    AllprogramsRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class AllprogramsModule { }
