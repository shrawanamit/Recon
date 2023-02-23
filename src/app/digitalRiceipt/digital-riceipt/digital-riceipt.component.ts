import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/service/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
// import { GlobalService } from '@src/app/service/global.service';
import { NgForm, Validators } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import FroalaEditor from 'froala-editor';
import { FormControl, FormGroup, Validator } from '@angular/forms'
import "froala-editor/css/third_party/embedly.min.css";
import "froala-editor/js/third_party/embedly.min.js";
// import { UtilityService } from '@src/app/service/utility.service';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
// import { SortPipe } from './shared/pipes/sort.pipe';

// import { CdkTableExporterModule } from 'cdk-table-exporter';
// import * as Alldata from "../../../assets/data/data.json";
// import * as GetAllActiveCommunicationSummary from "../../../assets/data/GetAllActiveCommunicationSummary.json"
// import * as GetTenantCommunicationSummary from "../../../assets/data/GetTenantCommunicationSummary.json"
// import * as searchinovice from "../../../assets/data/seachDataReponse.json"

import { NgxDrpOptions, PresetItem, Range } from 'ngx-mat-daterange-picker';
import { DatePipe } from '@angular/common'
import { BsCurrentDateViewComponent } from 'ngx-bootstrap/datepicker/themes/bs/bs-current-date-view.component';
declare var $: any;



export interface DataOfTable {
  playerName: string;
  playerCountry: string;
  playerClub: string;
}


@Component({
  selector: 'app-digital-riceipt',
  templateUrl: './digital-riceipt.component.html',
  styleUrls: ['./digital-riceipt.component.scss',

  ],
  providers: [DatePipe]
})
export class DigitalRiceiptComponent implements OnInit {

  currentDate = new Date();
  year = this.currentDate.getFullYear();
  month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
  day = String(this.currentDate.getDate()).padStart(2, '0');
  todaysDate = this.year + '-' + this.month + '-' + this.day;
  storeSliceSummary=[];
  filterdata = [];
  userData = [];
  AlldataForFilter = [];
  AllActiveCommunicationSummary = [];
  failedMsgSummary = [];
  storeData=[];
  StoreCode = "";
  MobileNumber = "";
  InvoiceNumber = "";
  TenantCode = "";
  seachDataReponse = "";
  requiredfieldErr = false;
  tablevalue = false;
  openSearchModel = false;
  openDistStore = false;
  openSearchTable: boolean = false;
  closeModel: boolean = false;
  StoreCodeErr = false;
  InvoiceNumberErr = false;
  IsTenentFieldReq = false;
  TenentFielderr = false;
  seachInoviceData = [];
  SearchInoviceDatForFilter = [];
  openSearch = false;
  loadingData: boolean = true;
  loadingDataSummary: boolean = false;
  tenentCode = "";
  datefrompicker = "";
  formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy');
  tenentList = [];
  resend = [];
  totalIsClick = [];
  ResendData = [];
  resendFeedbackInd = [];
  isopentotalbill = false;
  userDetails: any = [];
  userId: any;
  tanentId: any;
  searchTenantId:any;
  errortext = "";
  invoicesummary = [];
  storeCount = [];
  storeSummaryDownload=[];
  invoicesummaryMessage = "";
  dataNotFoundMsg = false;
  isopenStoreBill = false;
  storeSummary = [];
  downloadCsvData = [];
  billDate;
  changeDate = "";
  dataDismis = "";
  refreshDate;
  storeTanentCode;
  toolTipFailValue = [];
  totalBillsStoreSummary = [];
  isOpenTotalStoreBill = false;
  errorMessage;
  // summaryTable=[];
  totalBillReceived = false;
  failedBill = false;
  successBill = false;
  isSMS = false;
  isWhatsApp = false;
  isSendEmail = false;
  isPrint = false;
  isOpenPercent=false;
  isFailed = true;
  uniqueCode;
  totalBill;
  total = false;
  isTooltipOpen = false;
  dtOptions : DataTables.Settings ={};
  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    // showTitle: true,
    // title: 'Digital Recipt summary:',
    useBom: true,
    noDownload: false,
    headers: ["Remarks", "Remarks Code", "Total Bills", "Success Bills", "Failed Bills", "SMS", "WhatsApp", "Email ID", "Distinct Store", "Print", "Brand Id", "Brand Name", "Date", "UserID"]
  };
  csvOptionsSearchInvoice = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    // showTitle: true,
    // title: 'Invoice Summary:',
    useBom: true,
    noDownload: false,
    headers: ["Program Code", "Bill No", "Bill Date", "Store Code",  "Sms Generated", "Email Generated","WhatsApp Generated", "Feedback Generated" , "Feedback URL", "Short URL", "Customer Name", "Mobile No", "Email ID","Read Count", "Status", "PacketReceiveDate","SendSMSTime", "IsSendCommunicationApplicable","EmailRequestCountThruReceipt"]
  };

  
  csvOptionsSearchInvoiceFailed={
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    useBom: true,
    noDownload: false,
    headers: ["Program Code", "Bill No", "Bill Date", "Store Code", "Customer Name", "Mobile No", "Email ID","Error Message","Description"]
   };

  csvOptionsStoreBill = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    // showTitle: true,
    // title: 'Invoice Summary:',
    useBom: true,
    noDownload: false,
    headers: ["Program Code", "Store Code","Store Name", "Register No", "Total Bill", "Sucess Bill", "Fail Bill", "Print Bill", "SMS Count",]
  };



  csvOptionsTotalStoreBill = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    // showTitle: true,
    // title: 'Invoice Summary:',
    useBom: true,
    noDownload: false,
    headers: ["Program Code", "Bill No", "Bill Date", "Store Code", "Register No", "Customer Name", "Mobile No", "EmailId", "Read Count", "ShortURL", "Sms Date"]
  };


  constructor(private httpClient: HttpClient,
    public datepipe: DatePipe,
    private dataService: DataService,) { }

  ngOnInit() {

    $(document).ready(function () {
      $('.js-btn-tooltip').tooltip();
      $('.btn-tooltip').tooltip();
    });


     this.dtOptions ={
      pagingType:'full_numbers',
      pageLength:10,
      lengthMenu:[10,25,50],
      processing:true,

     }



    this.getTenentInfo();
    // console.log("today date", this.todaysDate)
    //  document.getElementById('searhDate').values=this.todaysDate;
    var details: any = JSON.parse(localStorage.getItem('userInfo'));
    this.userDetails = details[0];
    this.userId = this.userDetails.userID;
    console.log("this.userId", this.userDetails.userName)

    this.dataService.GetAllActiveCommunicationSummary(this.currentDate.toISOString(), this.userId).subscribe((res: Response) => {

      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      // console.log("resSTR", this.currentDate.toISOString());
      if (resJSON.messageCode == '200') {
        this.loadingData = false
        this.userData = resJSON.data;
        this.AlldataForFilter = resJSON.data;

      } else {

      }
    })

  }
  ngOnChanges() {




  }

  refresh() {


    // if(this.changeDate != null){
    //   this.refreshDate=this.changeDate;
    // }
    // else{
    //   this.refreshDate=this.currentDate.toISOString();
    // }
    // console.log("today date, change date ", this.refreshDate)
    this.loadingData = true;
    this.dataService.GetAllActiveCommunicationSummary(this.changeDate == "" ? this.currentDate.toISOString() : this.changeDate, this.userId).subscribe((res: Response) => {

      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '200') {
        this.loadingData = false;
        this.userData = resJSON.data;

        this.AlldataForFilter = resJSON.data;
        console.log(" this.userData new refresh", this.userData);
      } else {

      }
    })

  }


  downloadCSV() {
    new AngularCsv(this.userData, "digital recipt summary", this.csvOptions);
  }

  downloadSeachInoviceDataCSV() {
    new AngularCsv(this.seachInoviceData, "Search invoice summary", this.csvOptionsSearchInvoice);
  }


  downloadBillSummary() {
    if(this.isFailed){
      new AngularCsv(this.downloadCsvData, "invoice summary", this.csvOptionsSearchInvoice);
      
    }
    else{
      new AngularCsv(this.downloadCsvData, "Invoice Summary Failded", this.csvOptionsSearchInvoiceFailed);
    }
  }


  downloadStoreSummary() {
    new AngularCsv(this.storeSummaryDownload, "Store summary", this.csvOptionsStoreBill);
  }
  downloadTotalStoreBillSummary() {
    new AngularCsv(this.totalBillsStoreSummary, "Total Store summary", this.csvOptionsTotalStoreBill);
  }



  Filters(event) {
    this.isopentotalbill = false;
    console.log("event.target.value", event.target.value)
    var details: any = JSON.parse(localStorage.getItem('userInfo'));
    this.userDetails = details[0];
    this.userId = this.userDetails.userID;
    this.changeDate = event.target.value;
    console.log(" this.changeDate", this.changeDate)
    this.userData = this.AlldataForFilter.filter((e) => this.datepipe.transform(e.requetDate, 'yyyy-MM-dd') <= event.target.value)
    console.log(" this.filterdata", this.userData)
    if (this.changeDate != null) {
      this.loadingData = true;
      this.dataService.GetAllActiveCommunicationSummary(this.changeDate, this.userId).subscribe((res: Response) => {

        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        console.log("resSTR", this.currentDate.toISOString());
        if (resJSON.messageCode == '200') {
          this.loadingData = false
          // console.log("dataSource",resJSON.data)
          this.userData = resJSON.data;

          this.AlldataForFilter = resJSON.data;
          console.log(" this.userData new", this.userData);
        } else {
          this.loadingData = false
        }
      })
    }



    // this.dataService.GetAllActiveCommunicationSummary(event.target.value).subscribe((res: Response) => {

    //   const resSTR = JSON.stringify(res);
    //   const resJSON = JSON.parse(resSTR);
    //   console.log("resSTR", this.currentDate.toISOString());
    //   if (resJSON.messageCode == '200') {
    //     this.loadingData = false
    //     // console.log("dataSource",resJSON.data)
    //     this.userData = resJSON.data;

    //     this.AlldataForFilter = resJSON.data;
    //     console.log(" this.userData new", this.userData);
    //   } else {

    //   }
    //  })
  }
  MobileNumberHandler(e) {
    this.MobileNumber = e.target.value
    this.requiredfieldErr = false;
    console.log("d", e.target.value)
  }



  tenentCodeHandler(e) {
    this.tenentCode = e.target.value;
    this.TenentFielderr = false;
    console.log("trrr", e.target.value)
  }
  InvoiceNumberHandler(e) {
    this.InvoiceNumber = e.target.value
    this.requiredfieldErr = false;
    console.log("d", e.target.value)
  }
  StoreCodeHandler(e) {
    this.StoreCode = e.target.value
    this.requiredfieldErr = false;
    console.log("d", e.target.value)
  }
  backbutton() {
    this.openSearchTable = false;
    this.openSearch = false;
    this.StoreCode = "";
    this.MobileNumber = "";
    this.InvoiceNumber = "";
    this.seachInoviceData = [];
    this.SearchInoviceDatForFilter = [];
    this.datefrompicker = "";
    this.requiredfieldErr = false;
    this.TenentFielderr = false
  }

  // closePopup(){
  //   this.seachInoviceData=[];
  //   this.SearchInoviceDatForFilter=[];
  //   $('#showSearchModal').on('hidden.bs.modal', function (e) {
  //     $(this)
  //       .find("input,textarea,select")
  //          .val('')
  //          .end()

  //   })
  //   $("#showSearchModal").modal('hide');
  // }
  openSearchingModel() {
    this.TenantCode = "";
    this.openSearch = true;
    this.IsTenentFieldReq = true;
  }
  SearchModal() {
    console.log("SearchModal")
    console.log("this.datefrompicker :", this.datefrompicker)


    if (this.MobileNumber == "" && this.InvoiceNumber == "" && this.StoreCode == "") {
      this.requiredfieldErr = true;
      console.log(" this.requiredfieldErr err", this.requiredfieldErr)
    }
    if (this.tenentCode == "") {
      this.TenentFielderr = true;

    }
    if ((this.MobileNumber != "" || this.InvoiceNumber != "" || this.StoreCode != "") && (this.tenentCode != "")) {
      if (this.datefrompicker == "") {
        this.datefrompicker = new Date().toISOString();
      }
      this.closeModel = true;
      this.dataService.GetSearchInovice(this.tenentCode, this.InvoiceNumber, this.MobileNumber, this.StoreCode, this.datefrompicker).subscribe((res: Response) => {

        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        console.log("resSTR", resSTR, "resJSON", resJSON);
        if (resJSON.messageCode == '200') {
          this.openSearchTable = true;
          console.log("dataSource table2", resJSON.data)
          this.tenentCode = "";
          this.InvoiceNumber = "";
          this.MobileNumber = "";
          this.StoreCode = ""
          this.tablevalue = true;
          // console.log("dataSource",resJSON.data)
          this.seachInoviceData = resJSON.data;
          this.SearchInoviceDatForFilter = resJSON.data;
          if (this.seachInoviceData.length == 0) {
            this.dataNotFoundMsg = true;
          }
          if (this.seachInoviceData.length != 0) {
            this.dataNotFoundMsg = false;
          }
          console.log(" this.userData1", this.seachInoviceData);
        } else {

        }
      })
    }

  }
  openSearchModal(searchData) {
    this.openSearchModel = true;
    this.openDistStore = false;
    console.log("d====", searchData.tenantCode,searchData.tenantid)
    this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy')
    this.TenantCode = searchData.tenantCode
    this.seachInoviceData = [];
    this.SearchInoviceDatForFilter = [];
    this.openSearch = true;
    this.IsTenentFieldReq = false;
    this.searchTenantId=searchData.tenantid;

    // $('#showSearchModal').on('hidden.bs.modal', function (e) {
    //   $(this)
    //     .find("input,textarea,select")
    //        .val('')
    //        .end()

    // })
    // this.httpClient.get("../../../assets/data/GetAllActiveCommunicationSummary.json").subscribe((res:Response) =>{

    //   const resSTR = JSON.stringify(res);
    //   const resJSON = JSON.parse(resSTR);
    //   console.log("resSTR",resSTR,"resJSON",resJSON);
    //   if (resJSON.messageCode == '200') {

    //     // console.log("dataSource",resJSON.data)
    //     this.AllActiveCommunicationSummary = resJSON.data;
    //     console.log(" this.userData", this.userData);
    //   } else {

    //   }
    // })
    //  $("#showSearchModal").modal('show');
    //  $('#showViewModal').modal('hide');


  }
  textareaValidation() {
    if ($("#storeCode").val().length >= 1) {
      this.errortext = "";
      return;
    }
    if ($("#invoiceNo").val().length >= 1) {
      this.errortext = "";
      return;
    }
    if ($("#mobileNo").val().length >= 1) {
      this.errortext = "";
      return;
    }
  }
  searchingData() {

    if (this.MobileNumber.length == 0 && this.InvoiceNumber.length == 0 && this.StoreCode.length == 0) {
      this.requiredfieldErr = true;
      this.errortext = "Atlest one field is reqired from Mobile Number, Inovice Number, Store Code";
    }
    if (this.requiredfieldErr == false) {
      $("#myModal").modal('hide');
    }


    if (this.MobileNumber != "" || this.InvoiceNumber != "" || this.StoreCode != "") {
      if (this.datefrompicker == "") {
        this.datefrompicker = new Date().toISOString();
      }
      this.loadingData = true;
      this.closeModel = true;
      this.dataService.GetSearchInovice(this.TenantCode, this.InvoiceNumber, this.MobileNumber, this.StoreCode, this.datefrompicker).subscribe((res: Response) => {
        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        if (resJSON.messageCode == '200') {
          this.tenentCode = "";
          this.InvoiceNumber = "";
          this.MobileNumber = "";
          this.StoreCode = ""
          this.openSearchTable = true;
          this.loadingData = false;
          this.dataNotFoundMsg = false;
          this.tablevalue = true;
          this.seachInoviceData = resJSON.data;
          this.SearchInoviceDatForFilter = resJSON.data;
          // let result = this.seachInoviceData.sort(
          //   function (a, b) {
          //     if (new Date(a.billDate) < new Date(b.billDate)) { return -1; }
          //     else if (new Date(a.billDate) > new Date(b.billDate)) { return 1; }
          //     return 0;
          //   });
          // this.seachInoviceData = result;
        } 
        else {
          this.tenentCode = "";
          this.InvoiceNumber = "";
          this.MobileNumber = "";
          this.StoreCode = "";
          this.loadingData = false;
          this.openSearchTable = true;
          if (this.seachInoviceData.length == 0)
            this.dataNotFoundMsg = true;

        }
      })
    }
  }
 
  FilterInoviceData(e) {
    var dateFromDaePicker = e.target.value;
    //console.log("e.target.value",e.target.value,"   ",this.convert(dateFromDaePicker))
    this.datefrompicker = new Date(dateFromDaePicker).toISOString();
    this.SearchInoviceDatForFilter.filter((e) => console.warn("d", this.datepipe.transform(e.billDate, 'yyyy-MM-dd')) <= dateFromDaePicker)
    this.seachInoviceData = this.SearchInoviceDatForFilter.filter((e) => this.datepipe.transform(e.billDate, 'yyyy-MM-dd') <= dateFromDaePicker)
  }
  

  getTenentInfo() {
    var details: any = JSON.parse(localStorage.getItem('userInfo'));
    this.userDetails = details[0];
    this.userId = Number(this.userDetails.userID);

    this.dataService.GetTenentCods(this.userId).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '200') {
        this.tenentList = resJSON.data;
      } else {

      }
    })
  }
  getInvoiceBySummaryEmail(totalbill) {
    this.total=false;
    this.isopenStoreBill = false;
    this.loadingDataSummary = true;
    this.isTooltipOpen = false;
    this.isFailed = true;
    this.totalBillReceived = false;
    this.failedBill = false;
    this.successBill = false;
    this.isSMS = false;
    this.isWhatsApp = false;
    this.isSendEmail = true;
    this.isPrint = false;
    this.isOpenPercent=false;
    this.isopentotalbill = true;
    if (this.changeDate == "") {
      this.datefrompicker = new Date().toISOString();
    }
    else {
      this.datefrompicker = this.changeDate;
    }
    this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy')
    this.TenantCode = totalbill.tenantCode;
    this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint,this.isOpenPercent).subscribe((res: Response) => {
      this.loadingDataSummary = false;
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '200') {
        this.invoicesummary = resJSON.data;
        let newData = this.invoicesummary.map(ele => {
          delete ele.baseURL;
          delete ele.isBitlyGenrated;
          delete ele.errorMessage;
          delete ele.errorDescription;
          delete ele.errorCode;
          delete ele.isError;
          return ele
        })
        this.downloadCsvData = newData;
        this.invoicesummaryMessage = resJSON.message;
        this.SearchInoviceDatForFilter = resJSON.data;

      } else {
        this.loadingDataSummary = false;
      }
    })
  }
  getInvoiceBySummaryWhatsapp(totalbill) {
    this.total=false;
    this.isopenStoreBill = false;
    this.loadingDataSummary = true;
    this.isFailed = true;
    this.totalBillReceived = false;
    this.failedBill = false;
    this.successBill = false;
    this.isSMS = false;
    this.isWhatsApp = true;
    this.isSendEmail = false;
    this.isPrint = false;
    this.isOpenPercent=false;
    this.isopentotalbill = true;
    if (this.changeDate == "") {
      this.datefrompicker = new Date().toISOString();
    }
    else {
      this.datefrompicker = this.changeDate;
    }
    this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy')
    this.TenantCode = totalbill.tenantCode
    this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint,this.isOpenPercent).subscribe((res: Response) => {
      this.loadingDataSummary = false;
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '200') {
        this.invoicesummary = resJSON.data;
        let newData = this.invoicesummary.map(ele => {
          delete ele.baseURL;
          delete ele.isBitlyGenrated;
          delete ele.errorMessage;
          delete ele.errorDescription;
          delete ele.errorCode;
          delete ele.isError;

          return ele
        })
        this.downloadCsvData = newData;
        this.invoicesummaryMessage = resJSON.message;
        this.SearchInoviceDatForFilter = resJSON.data;
      } else {
        this.loadingDataSummary = false;
      }
    })
  }
  getInvoiceBySummarySms(totalbill) {
    this.total=false;
    this.isopenStoreBill = false;
    this.loadingDataSummary = true;
    this.isTooltipOpen = false;
    this.isFailed = true;
    this.totalBillReceived = false;
    this.failedBill = false;
    this.successBill = false;
    this.isSMS = true;
    this.isWhatsApp = false;
    this.isSendEmail = false;
    this.isPrint = false;
    this.isOpenPercent=false;
    this.isopentotalbill = true;
    if (this.changeDate == "") {
      this.datefrompicker = new Date().toISOString();
    }
    else {
      this.datefrompicker = this.changeDate;
    }
    this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy')
    this.TenantCode = totalbill.tenantCode;

    this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint,this.isOpenPercent).subscribe((res: Response) => {
      this.loadingDataSummary = false;
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '200') {
        this.invoicesummary = resJSON.data;
        let newData = this.invoicesummary.map(ele => {
          delete ele.baseURL;
          delete ele.isBitlyGenrated;
          delete ele.errorMessage;
          delete ele.errorDescription;
          delete ele.errorCode;
          delete ele.isError;
          return ele
        })
        this.downloadCsvData = newData;
        this.invoicesummaryMessage = resJSON.message;
        this.SearchInoviceDatForFilter = resJSON.data;
      } else {
        this.loadingDataSummary = false;

      }
    })
  }
  getInvoiceBySummaryFailed(totalbill) {
    this.total=false;
    this.isopenStoreBill = false;
    this.loadingDataSummary = true;
    this.isFailed = false;
    this.totalBillReceived = false;
    this.failedBill = true;
    this.successBill = false;
    this.isSMS = false;
    this.isWhatsApp = false;
    this.isSendEmail = false;
    this.isPrint = false;
    this.isOpenPercent=false;
    this.isopentotalbill = true;
    console.log("totalbill", totalbill)
    if (this.changeDate == "") {
      this.datefrompicker = new Date().toISOString();
    }
    else {
      this.datefrompicker = this.changeDate;
    }
    this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy')
    this.TenantCode = totalbill.tenantCode;
    this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint,this.isOpenPercent).subscribe((res: Response) => {
      this.loadingDataSummary = false;
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '200') {
        this.invoicesummary = resJSON.data;
        this.invoicesummaryMessage = resJSON.message;
        this.SearchInoviceDatForFilter = resJSON.data;
        this.toolTipFailValue = resJSON.toolTipValue;

        let newData = this.invoicesummary.map(ele => {
          delete ele.isBitlyGenrated;
          delete ele.isSendSMS;
          delete ele.isSendEmail;
          delete ele.isSendWhatsApp;
          delete ele.isFeedbackApplicable;
          delete ele.feedbackURL;
          delete ele.shortURL;
          delete ele.baseURL;
          delete ele.readCount;
          delete ele.errorCode;
          delete ele.status;
          delete ele.packetReceiveDate;
          delete ele.sendSMSTime;
          delete ele.isSendCommunicationApplicable;
          delete ele.emailRequestCountThruReceipt;
          delete ele.isError;

          return ele
        })
        this.downloadCsvData = newData;
        // this.downloadCsvData = this.invoicesummary;
        console.log(" this.userData failed download", this.invoicesummary);
      } else {
        this.loadingDataSummary = false;
      }
    })
  }



  getSummaryByFailedMsg(data) {
    this.isopenStoreBill = false;
    this.loadingDataSummary = true;
    this.isFailed = false;
    this.totalBillReceived = false;
    this.failedBill = true;
    this.successBill = false;
    this.isSMS = false;
    this.isWhatsApp = false;
    this.isSendEmail = false;
    this.errorMessage = data.label;
    this.isopentotalbill = true;
    if (this.changeDate == "") {
      this.datefrompicker = new Date().toISOString();
    }
    else {
      this.datefrompicker = this.changeDate;
    }
    this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy');
    this.dataService.GetErrorWiseSummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.errorMessage).subscribe((res: Response) => {
      this.loadingDataSummary = false;
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);

      if (resJSON.messageCode == '200') {
        this.invoicesummary = resJSON.data;
        let newData = this.invoicesummary.map(ele => {
          delete ele.isBitlyGenrated;
          delete ele.isSendSMS;
          delete ele.isSendEmail;
          delete ele.isSendWhatsApp;
          delete ele.isFeedbackApplicable;
          delete ele.feedbackURL;
          delete ele.errorCode;
          delete ele.shortURL;
          delete ele.baseURL;
          delete ele.readCount;
          delete ele.status;
          delete ele.packetReceiveDate;
          delete ele.sendSMSTime;
          delete ele.isSendCommunicationApplicable;
          delete ele.emailRequestCountThruReceipt;
          delete ele.isError;

          return ele
        })
        this.downloadCsvData = newData;
      } else {
        this.loadingDataSummary = false;
      }
    })
  }

  getInvoiceBySummarySucess(totalbill) {
    this.total=false;
    this.isopenStoreBill = false;
    this.loadingDataSummary = true;
    this.isTooltipOpen = false;
    this.isFailed = true;
    this.totalBillReceived = false;
    this.failedBill = false;
    this.successBill = true;
    this.isSMS = false;
    this.isWhatsApp = false;
    this.isSendEmail = false;
    this.isPrint = false;
    this.isOpenPercent=false;
    this.isopentotalbill = true;

    if (this.changeDate == "") {
      this.datefrompicker = new Date().toISOString();
    }
    else {
      this.datefrompicker = this.changeDate;
    }
    this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy')
    this.TenantCode = totalbill.tenantCode;

    this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint,this.isOpenPercent).subscribe((res: Response) => {
      this.loadingDataSummary = false;
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '200') {
        this.invoicesummary = resJSON.data;
        let newData = this.invoicesummary.map(ele => {
          delete ele.baseURL;
          delete ele.isBitlyGenrated;
          delete ele.errorMessage;
          delete ele.errorDescription;
          delete ele.errorCode;
          delete ele.isError;
          return ele
        })
        this.downloadCsvData = newData;
        this.invoicesummaryMessage = resJSON.message;
        this.SearchInoviceDatForFilter = resJSON.data;
      } else {
        this.loadingDataSummary = false;
      }
    })
  }

  getInvoiceBySummaryPercent(totalbill)
  {
    this.total=false;
    this.loadingDataSummary = true;
    this.isTooltipOpen = false;
    this.isFailed = true;
    this.totalBillReceived = false;
    this.failedBill = false;
    this.successBill = false;
    this.isSMS = false;
    this.isWhatsApp = false;
    this.isSendEmail = false;
    this.isPrint = false;
    this.isOpenPercent=true;
    this.isopentotalbill = true;
    if (this.changeDate == "") {
      this.datefrompicker = new Date().toISOString();
    }
    else {
      this.datefrompicker = this.changeDate;
    }
    this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy')
    this.TenantCode = totalbill.tenantCode

    this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint,this.isOpenPercent).subscribe((res: Response) => {
      this.loadingDataSummary = false;
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '200') {
        this.invoicesummary = resJSON.data;
        let newData = this.invoicesummary.map(ele => {
          delete ele.baseURL;
          delete ele.isBitlyGenrated;
          delete ele.errorMessage;
          delete ele.errorDescription;
          delete ele.errorCode;
          delete ele.isError;
          return ele
        })
        this.downloadCsvData = newData;
        this.invoicesummaryMessage = resJSON.message;
        this.SearchInoviceDatForFilter = resJSON.data;
      } else {
        this.loadingDataSummary = false;
      }
    })


  }
  getInvoiceBySummaryPrint(totalbill) {
    this.total=false;
    this.loadingDataSummary = true;
    this.isTooltipOpen = false;
    this.isFailed = true;
    this.totalBillReceived = false;
    this.failedBill = false;
    this.successBill = false;
    this.isSMS = false;
    this.isWhatsApp = false;
    this.isSendEmail = false;
    this.isPrint = true;
    this.isOpenPercent=false;
    this.isopentotalbill = true;
    if (this.changeDate == "") {
      this.datefrompicker = new Date().toISOString();
    }
    else {
      this.datefrompicker = this.changeDate;
    }
    this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy')
    this.TenantCode = totalbill.tenantCode

    this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint,this.isOpenPercent).subscribe((res: Response) => {
      this.loadingDataSummary = false;
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '200') {
        this.invoicesummary = resJSON.data;
        let newData = this.invoicesummary.map(ele => {
          delete ele.baseURL;
          delete ele.isBitlyGenrated;
          delete ele.errorMessage;
          delete ele.errorDescription;
          delete ele.errorCode;
          delete ele.isError;
          return ele
        })
        this.downloadCsvData = newData;
        this.invoicesummaryMessage = resJSON.message;
        this.SearchInoviceDatForFilter = resJSON.data;
      } else {
        this.loadingDataSummary = false;
      }
    })
  }



  getInvoiceBySummary(totalbill, index) {
    this.isopenStoreBill = false;
    this.loadingDataSummary = true;
    this.isTooltipOpen = false;
    this.isFailed = true;
    this.totalIsClick.push(index);
    this.isopentotalbill = true;

    this.totalBillReceived = true;
    this.failedBill = false;
    this.successBill = false;
    this.isSMS = false;
    this.isWhatsApp = false;
    this.isSendEmail = false;
    this.isPrint = false;
    this.isOpenPercent=false;
    if (this.changeDate == "") {
      this.datefrompicker = new Date().toISOString();
    }
    else {
      this.datefrompicker = this.changeDate;
    }
    this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy')
    this.TenantCode = totalbill.tenantCode;
    this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint,this.isOpenPercent).subscribe((res: Response) => {
      this.loadingDataSummary = false;
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      // if (resJSON.messageCode == '200') {
        this.total=true;
        // console.log("total",resJSON.data)

        this.invoicesummary = resJSON.data;
        // console.log(" this.invoicesummary new--", this.invoicesummary)
    //  this.invoiceSummaryData(resJSON.data);
        this.uniqueCode=resJSON.messageCode;
        this.totalBill=resJSON.data.length;

        let newData = this.invoicesummary.map(ele => {
          delete ele.baseURL;
          delete ele.isBitlyGenrated;
          delete ele.errorMessage;
          delete ele.errorDescription;
          delete ele.errorCode;
          delete ele.isError;
          return ele
        })
        this.downloadCsvData = newData;
        this.invoicesummaryMessage = resJSON.message;
        this.SearchInoviceDatForFilter = resJSON.data;
      // } else {
      //   this.loadingDataSummary = false;
      // }
    })


  }

  invoiceSummaryData(data){
    this.storeSliceSummary=data;
      for(let i=0; i<=this.storeSliceSummary.length/10000;i++)
      {

        this.invoicesummary[i]=this.storeSliceSummary.slice(i*10000,(i+1)*10000);
        console.log("this.invoicesummary[i]",this.invoicesummary[i],"==",i*10000,"==",(i+1)*10000)
      }

    
  }


  getStoreDetail(totalbill) {
    this.isopenStoreBill = false;
    this.isopenStoreBill = true;
    this.isopentotalbill = false;
    this.loadingDataSummary = true;
    this.storeTanentCode = totalbill.tenantCode;
    this.tanentId = totalbill.tenantID;
    this.billDate = totalbill.requetDate;

    this.dataService.GetStoreCountSummary(this.userId, totalbill.requetDate, totalbill.tenantCode, totalbill.tenantid).subscribe((res: Response) => {
      this.loadingDataSummary = false;
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '200') {
        this.storeSummary = resJSON.data;
        let storeSummaryDownload = this.storeSummary.map(ele => {
          delete ele.storeCount;
          return ele
        })
        this.storeSummaryDownload = storeSummaryDownload;
      } else {
        this.loadingDataSummary = false;
      }
    })
  }




  getTotalBillSummary(totalbill) {
    this.isOpenTotalStoreBill = true;
    this.loadingDataSummary = true;

    this.dataService.GetStoreWiseDetailSummary(this.tanentId, totalbill.progCode, this.billDate, this.userId, totalbill.storeCode, totalbill.registerNo).subscribe((res: Response) => {
      this.loadingDataSummary = false;
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '200') {
        this.totalBillsStoreSummary = resJSON.data;
      } else {
        this.loadingDataSummary = false;
      }
    })
  }









  backButtonOpenBill() {
    this.isopentotalbill = false;
  }
  billDatahandler(event) {
  }
  backButtonstoreBill() {
    this.isopenStoreBill = false;
  }
  backButtonTotlStorBill() {
    this.isOpenTotalStoreBill = false;
  }

  ResendFeedback(inoviceDatas, arrayInd) {
    this.resendFeedbackInd.push(arrayInd);

    this.dataService.ResendFeedbackData(inoviceDatas).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
    })
  }



  Resend(inoviceDatas, arrindex,) {
    //this.ResendData=inoviceDatas
    this.resend.push(arrindex);
    // this.loadingData=true;
    this.dataService.ResendData(inoviceDatas,this.searchTenantId,this.userDetails.userName).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);

    })
  }


  closeTooltip() {
    this.isTooltipOpen = true;
  }
  closeTooltipCross() {
    this.isTooltipOpen = false;
  }


}
