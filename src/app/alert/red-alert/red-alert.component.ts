import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { DatePipe } from '@angular/common'

declare var $: any;

@Component({
  selector: 'app-red-alert',
  templateUrl: './red-alert.component.html',
  styleUrls: ['./red-alert.component.scss'],
  providers: [DatePipe]


})
export class RedAlertComponent implements OnInit {
  currentDate = new Date();
  year = this.currentDate.getFullYear();
  month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
  day = String(this.currentDate.getDate()).padStart(2, '0');
  todaysDate = this.year + '-' + this.month + '-' + this.day;
  billDate = "";
  storeId = "";
  billData = [];
  openSearch: Boolean = true;
  loadingData: Boolean = true;

  constructor(private httpClient: HttpClient,
    public datepipe: DatePipe,
    private dataService: DataService) {}

  ngOnInit() {
    
  }
  getInvoiceBySummaryWhatsapp(){
    console.log("getInvoiceBySummaryWhatsapp")
  }
  getInvoiceBySummarySms(){
    console.log("getInvoiceBySummarySms")
  }
  getInvoiceBySummarySucess(){
    console.log("getInvoiceBySummarySucess")
  }
  getInvoiceBySummaryFailed(){
    console.log("getInvoiceBySummaryFailed")
  }
  getInvoiceBySummary(){
    console.log("getInvoiceBySummary")
  }
  storeIdHandler(e) {
    this.storeId = e.target.value
    // this.requiredfieldErr = false;
    console.log("d", e.target.value)
  }

  billDatahandler(event){
    this.billDate = event.target.value;
    console.log(" this.changeDate", this.billDate)
   
  }

  SearchModal() {
    console.log("SearchModal" ,this.storeId, this.billDate)
    this.dataService.RedAlert(this.storeId, this.billDate).subscribe((res: Response) => {

      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      console.log("resSTR", resSTR, "resJSON", resJSON);
     
        this.billData = resJSON;
        console.log(" this.billData", this.billData)

     
    })
  }

}

