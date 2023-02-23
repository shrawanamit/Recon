import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '@src/app/header/header.component';
import { DuplicateComponent } from '@src/app/dashboard/duplicate/duplicate.component';
import { AutoGeneratedComponent } from '@src/app/auto-generated/auto-generated.component';
import { AppRoutingModule } from '@src/app/app-routing.module';
import { AuthModule } from '@src/app/auth/auth.module';
import { AllprogramsModule } from '@src/app/allprograms/allprograms.module';
import { LoginComponent } from '@src/app/auth/login/login.component';
import { ProgramComponent } from '@src/app/allprograms/program/program.component';
import { AppComponent } from '@src/app/app.component.tns';
import { DataTablesModule } from 'angular-datatables';

import { NgxMatDrpModule } from 'ngx-mat-daterange-picker';
import { FileValidateComponent } from '@src/app/fileValidate/file-validate/file-validate.component';
import { ReconSummaryComponent } from '@src/app/ReconSummary/recon-summary/recon-summary.component';
// import { StatusComponent } from '@src/app/recon_status/status/status.component';
// import { SummaryComponent } from '@src/app/DR_Summary/summary/summary.component';
// import { SignupComponent } from '@src/app/ragistration/signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DuplicateComponent,
    AutoGeneratedComponent,
    // ReconSummaryComponent,
    // FileValidateComponent,
    // StatusComponent,
    // SummaryComponent,
    // SignupComponent,
  ],
  imports: [
   
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    AuthModule,
    AllprogramsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports: [

  ],
  entryComponents: [

    LoginComponent,
    ProgramComponent,
    DuplicateComponent,
    // SignupComponent

  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
