import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '@src/app/service/utility.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from '@src/app/service/global.service';
import { DataService } from '@src/app/service/data.service';
import { ProgramComponent } from '@src/app/allprograms/program/program.component';
import { NgForm, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { AngularCsv } from 'angular7-csv/dist/Angular-csv'
import { NgxDrpOptions, PresetItem, Range } from 'ngx-mat-daterange-picker';
import { DatePipe } from '@angular/common'
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  SettlementSatus;
  requetDate;
  requestDate;
  startDate;
  endDate;
  // displayedColumns: string[] = [
  //   'brandName',
  //   'executionDate',
  //   'status',
  //   'settlementMode',
  //   'action',
  //   'reportPath'];
  // @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: false }) sort: MatSort;
  isLogin: boolean = false;
  tenantCode = [];
  errorMsg = 'Loading! Please wait ...';
  reportTypeSelect:string = "";
  errorMsgInfo: boolean = false;
  arrProgramInfoWithKey = {};
  loadingData: boolean = true;
  arrselectedProgram = [];
  selectedProgram;
  allProgram = [];
  toolTipFailValue = [];
  isProgramClicked = false;
  isProgramsVisble = false;
  isClickedSearch = false;
  dowloadtable = true;
  loadingTable = false;
  isMonthSelect: boolean = false;
  isDateSelect: boolean = false;
  selectedProgramId;
  searchInProgress: boolean = false;
  dqrSearchData = new MatTableDataSource();
  isLoading: boolean = true;
  // loadingData : false;
  responceMsg: any;
  userDetails: any = [];
  DrSummary: any = [];
  SMSSentRatio;
  MonthWiseSummary: any = [];
  MonthWiseSummaryData: any = [];
  monthData: any = [];
  isTooltipOpen = false;
  isFailed = false;
  totalBillReceived = false;
  failedBill = true;
  successBill = false;
  isSMS = false;
  isWhatsApp = false;
  isSendEmail = false;
  errorMessage;
  isopentotalbill = true;
  storeWiseSummary = false;
  summaryData=false;
  storeWiseSummaryData: any = [];
  userData: any = [];
  csvOptionsStoreWise = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    // showTitle: true,
    // title: 'Digital Recipt summary:',
    useBom: true,
    noDownload: false,
    headers: ["Store_Code","Total_Bills","Success_Bills","Failed_Bills","Readcount","Open_Percentage"]
  };

  currentDate = new Date();
  year = this.currentDate.getFullYear();
  month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
  day = String(this.currentDate.getDate()).padStart(2, '0');
  newDate = this.year + '-' + this.month + '-' + this.day;


  range: Range = { fromDate: new Date(), toDate: new Date() };
  options: NgxDrpOptions;
  presets: Array<PresetItem> = [];

  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    useBom: true,
    noDownload: false,
    headers: ["Brand Name", "Bill No", "Bill Date", "Store Code", "Store Name", "Customer Name", "MObile No", "Email ID", "Short URL", "Read Count", "Status", "Register No", "Bill Amount","Base URL","Remarks"]
  };
  csvOptionsDownload = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    useBom: true,
    noDownload: false,
    headers: ["Brand Name", "Bill No", "Bill Date", "Store Code", "Customer Name", "MObile No", "Email ID", "Status", "Description"]
  };

  constructor(
    private dataService: DataService,
    private globalService: GlobalService,
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private utilityService: UtilityService,
    private router: Router,
  ) { }

  ngOnInit() {
    if (localStorage.getItem('userInfo') == null) {
      this.router.navigate(['login']);
    } else {
      this.isLogin = true;
    }
    const today = new Date();
    const fromMin = new Date(today.getFullYear(), today.getMonth() - 2, 1);
    const fromMax = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const toMin = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const toMax = new Date(today.getFullYear(), today.getMonth() + 2, 0);
    this.setupPresets();
    this.options = {
      presets: this.presets,
      format: 'mediumDate',
      range: { fromDate: today, toDate: today },
      applyLabel: "Submit",
      calendarOverlayConfig: {
        shouldCloseOnBackdropClick: false,
        hasBackdrop: false
      }
      // cancelLabel: "Cancel",
      // excludeWeekends:true,
      // fromMinMax: {fromDate:fromMin, toDate:fromMax},
      // toMinMax: {fromDate:toMin, toDate:toMax}
    };
    var details: any = JSON.parse(localStorage.getItem('userInfo'));
    this.userDetails = details[0];
    this.dataService.GetTenentCods(this.userDetails.userID).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJson = JSON.parse(resSTR);
      if (resJson.messageCode == '200' && resJson.data != null) {
        this.errorMsg = 'Success';
        this.loadingData = false;

        this.tenantCode = resJson.data;
        // console.log("resJson.data tanent code", this.tenantCode);
        // for (let i = 0; i < resJson.data.length; i++) {
        //   resJson.data[i].isSelect = false;
        //   this.arrProgramInfoWithKey[resJson.data[i].tenantID] = resJson.data[i];



        //   if (resJson.data[i].isDQR) {
        //     this.tenantCode.push(resJson.data[i])
        //   }
        // }
        // this.utilityService.programSort(this.tenantCode);
        // if (this.tenantCode.length) {
        //   this.loadingData = false;
        // }
      } else if (resJson.statusCode == '500') {
        this.loadingData = false;
        this.errorMsg = 'Internal Serve Error! Please Try Again...';
      } else if (resJson.statusCode == '200' && resJson.data == null) {
        this.errorMsg = 'No Data Found! Please Try Again...';
      }
    });
  }
  // ngAfterViewInit() {
  //   this.dqrSearchData.paginator = this.paginator;
  //   this.dqrSearchData.sort = this.sort;
  // }
  onOpenCalendar(container) {
    this.isProgramClicked = false;
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
      // console.log("selected month", event.date)
    };
    container.setViewMode('month');
  }
  setupPresets() {
    const backDate = (numOfDays) => {
      const today = new Date();
      return new Date(today.setDate(today.getDate() - numOfDays));
    }

    const today = new Date();
    const yesterday = backDate(1);
    const minus7 = backDate(7)
    const minus30 = backDate(30);
    const currMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const currMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);

    this.presets = [
      { presetLabel: "Yesterday", range: { fromDate: yesterday, toDate: today } },
      { presetLabel: "Last 7 Days", range: { fromDate: minus7, toDate: today } },
      { presetLabel: "Last 30 Days", range: { fromDate: minus30, toDate: today } },
      { presetLabel: "This Month", range: { fromDate: currMonthStart, toDate: currMonthEnd } },
      { presetLabel: "Last Month", range: { fromDate: lastMonthStart, toDate: lastMonthEnd } }
    ]
  }

  //date range end
  updateRange(range: Range) {
    if (range.toDate < range.fromDate) {
      alert('Not selected valid date !')
    } else {
      this.range = range;
      // console.log("range new",this.range.fromDate,"===", this.range.toDate);
      // console.log(this.range.fromDate.getDate);

    }
    this.startDate = this.utilityService.convertDate(this.range.fromDate);
    this.endDate = this.utilityService.convertDate(this.range.toDate);
  }
  changeSettData(selected) {
    if (selected == '1') {
      if (this.isMonthSelect == true) {
        this.isMonthSelect = false;
        this.isDateSelect = true;
      }
      else {
        this.isDateSelect = true;
      }
    } else {

      if (this.isDateSelect == true) {
        this.isDateSelect = false;
        this.isMonthSelect = true;
      }
      else {
        this.isMonthSelect = true;
      }
    }
    this.isProgramClicked = false
  }

  downloadcsvOptionsStoreWise() {
    // this.loadingData=true;
    new AngularCsv(this.userData, "Store wise summary", this.csvOptionsStoreWise);
    // this.loadingData=false;
  }
  SelectReportType(reporttype){
    if (reporttype == '1') {
      this.reportTypeSelect = 'summaryReport';
    }
    if (reporttype == '2') {
      this.reportTypeSelect = 'storeWiseSummaryReport';
    }
    // this.isProgramClicked = false
  }
  getProgram() {
    this.arrselectedProgram = [];
    const arrProgram = "";
    const arrProgramId = "";
    // for (let i = 0; i < this.tenantCode.length; i++) {
    //   this.selectedProgram="";
    //   this.selectedProgramId="";

    // if (this.tenantCode.isSelect) {
    //   this.arrselectedProgram.push(this.tenantCode[i]);
    //   this.selectedProgram=this.tenantCode[i].brandName;
    //   this.selectedProgramId=(this.tenantCode[i].brandId)

    // }
    // }
    // this.selectedProgram = arrProgram;
    // this.selectedProgramId = arrProgramId;
  }


  getselectedProgram(data, index) {
    // console.log("data===", data);
    this.selectedProgram = data.tenantCode;
    this.selectedProgramId = data.tenantID;
  }


  seeAllPrograms() {
    this.isProgramClicked = false;
    this.isProgramsVisble = true;
    const modalRef = this.modalService.open(ProgramComponent, { windowClass: 'see_all_programs', size: 'xl', centered: true, backdrop: 'static', keyboard: false });
    this.globalService.setUploadData(this.tenantCode);
    modalRef.result.then((result) => {
      this.tenantCode = result;
      this.getProgram();
    }).catch((error) => {
      console.log(error);
    });
  }


  downloadCSV(requestType) {
    this.loadingData = true;
    this.dataService.DownloadMonthWiseSummary(this.selectedProgramId, this.selectedProgram, this.isMonthSelect ? this.requestDate : this.utilityService.convertDate(this.range.fromDate), parseInt(this.userDetails.userID), this.utilityService.convertDate(this.range.toDate), requestType,this.isMonthSelect ? this.requestDate.getMonth() : 0, this.isMonthSelect ? this.requestDate.getFullYear() : 0).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJson = JSON.parse(resSTR);
      if (resJson.messageCode == '200') {
        this.loadingData = false;
        this.MonthWiseSummary = resJson.data;
        let newData = this.MonthWiseSummary.map(ele => {
          // delete ele.baseURL;
          return ele
        })
        this.MonthWiseSummary = newData;
        // console.log("response DownloadMonthWiseSummary  this.requestDate, parseInt(this.userDetails.userID), this.requestDate.getMonth(), this.requestDate.getFullYear()", this.MonthWiseSummary);
        new AngularCsv(this.MonthWiseSummary, "digital recipt summary", this.csvOptions);

      } else {
        this.loadingData = false;
        alert("sorry !! some tecnical issue")
      }
    });
  }


  // downloadCSVStoreWiseConsolideSummary(requestType) {
  //   this.loadingData = true;
  //   this.dataService.storeWiseConsolideSummary(this.selectedProgramId, this.selectedProgram, this.isMonthSelect ? this.requestDate : this.utilityService.convertDate(this.range.fromDate), parseInt(this.userDetails.userID), this.utilityService.convertDate(this.range.toDate), this.isMonthSelect ? this.requestDate.getMonth() : 0, this.isMonthSelect ? this.requestDate.getFullYear() : 0).subscribe((res: Response) => {
  //     const resSTR = JSON.stringify(res);
  //     const resJson = JSON.parse(resSTR);
  //     if (resJson.messageCode == '200') {
  //       this.loadingData = false;
  //       this.MonthWiseSummary = resJson.data;
  //       let newData = this.MonthWiseSummary.map(ele => {
  //         delete ele.baseURL;
  //         return ele
  //       })
  //       this.MonthWiseSummary = newData;
  //       console.log("response DownloadMonthWiseSummary  this.requestDate, parseInt(this.userDetails.userID), this.requestDate.getMonth(), this.requestDate.getFullYear()", this.MonthWiseSummary);
  //       new AngularCsv(this.MonthWiseSummary, "digital recipt summary", this.csvOptions);

  //     } else {
  //       this.loadingData = false;
  //       alert("sorry !! some tecnical issue")
  //     }
  //   });
  // }


  getSearchData(searchFilterData: NgForm): void {
    this.isProgramClicked = false;
    this.isLoading = true;
    this.loadingData = true;
    this.loadingTable = false;
    this.responceMsg = '';
    searchFilterData.value.tenantCode = this.selectedProgram;
    delete searchFilterData.value.ReportType;
    console.log('searchFilterData.value',searchFilterData.value)

    this.searchInProgress = true;
    searchFilterData.value.tenantid = this.selectedProgramId;
    searchFilterData.value.userId = parseInt(this.userDetails.userID);
    if (this.isDateSelect) {
      searchFilterData.value.requetDate = this.utilityService.convertDate(this.range.fromDate);
      searchFilterData.value.toDate = this.utilityService.convertDate(this.range.toDate);
      this.requestDate = searchFilterData.value.requetDate;
    }

    else {
      searchFilterData.value.requetDate = searchFilterData.value.requetDate;
      this.requestDate = searchFilterData.value.requetDate;
      searchFilterData.value.month = searchFilterData.value.requetDate.getMonth();
      searchFilterData.value.year = searchFilterData.value.requetDate.getFullYear();

    }

    if(this.reportTypeSelect === 'summaryReport'){
     
      this.dataService.GetDRSummaryData(searchFilterData.value).subscribe((res: Response) => {
        const resSTR = JSON.stringify(res);
        const resJson = JSON.parse(resSTR);
        if (resJson.messageCode == '200') {
          this.summaryData=true;
          this.storeWiseSummary=false;
          // this.selectedProgram="";
          // this.requetDate="";
          this.isLoading = false;
          this.loadingData = false;
          this.DrSummary = resJson.data;
          // console.log("response", this.DrSummary);
          this.SMSSentRatio = Math.trunc(resJson.data[0].smsSentRatio);
          // console.log("SMS",  this.SMSSentRatio);
        } else {
          this.isLoading = false;
          this.loadingData = false;
          alert("sorry no data found")
        }
      });
    }
    else{
      this.dataService.GetDRSummaryDataStoreWise(searchFilterData.value).subscribe((res: Response) => {
        const resSTR = JSON.stringify(res);
        const resJson = JSON.parse(resSTR);
        if (resJson.messageCode == '200') {
          // this.selectedProgram="";
          // this.requetDate="";
          this.storeWiseSummary=true;
          this.summaryData=false;
          this.isLoading = false;
          this.loadingData = false;
          this.storeWiseSummaryData = resJson.data;
          this.userData = resJson.data;
          // console.log("response", this.DrSummary);
          // this.SMSSentRatio = Math.trunc(resJson.data[0].smsSentRatio);
          // console.log("SMS",  this.SMSSentRatio);
        } else {
          this.isLoading = false;
          this.loadingData = false;
          alert("sorry no data found")
        }
      });
    }
    
  }

  getMonthWiseData() {
    this.loadingTable = true;
    this.loadingData = true;
    document.getElementById('clickTotal').setAttribute("class", "addBorder");
    // console.log("getMonthWiseErrorData", this.selectedProgramId, this.selectedProgram, this.isDateSelect ? this.startDate : this.requestDate, parseInt(this.userDetails.userID), this.isDateSelect ? this.startDate : this.requestDate, this.isDateSelect ? 0 : this.requestDate.getMonth(), this.isDateSelect ? 0 : this.requestDate.getFullYear());
    this.dataService.GetMonthWiseErrorSummary(this.selectedProgramId, this.selectedProgram, this.isDateSelect ? this.startDate : this.requestDate, parseInt(this.userDetails.userID), this.isDateSelect ? this.endDate : this.requestDate, this.isDateSelect ? 0 : this.requestDate.getMonth(), this.isDateSelect ? 0 : this.requestDate.getFullYear()).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJson = JSON.parse(resSTR);
      if (resJson.messageCode == '200') {
        this.loadingData = false;
        this.MonthWiseSummaryData = resJson.data;
        this.toolTipFailValue = resJson.toolTipValue;
        // console.log("this.toolTipFailValue", this.toolTipFailValue);
        // if(this.dowloadtable){
        //   new AngularCsv(this.MonthWiseSummary, "digital recipt summary", this.csvOptions);
        // }

      } else {
        this.loadingData = false;
        alert("sorry !! some tecnical issue")
      }
    });

  }
  backButton() {
    this.loadingTable = false;
  }
  downloadFailBillSummary() {

    new AngularCsv(this.MonthWiseSummaryData, "Fail Bills Summary", this.csvOptionsDownload);

  }


  closeTooltip() {
    this.isTooltipOpen = true;
  }
  closeTooltipCross() {
    this.isTooltipOpen = false;
  }
  getSummaryByFailedMsg(data) {
    this.isLoading = true;
    this.isFailed = false;
    this.totalBillReceived = false;
    this.failedBill = true;
    this.successBill = false;
    this.isSMS = false;
    this.isWhatsApp = false;
    this.isSendEmail = false;
    this.errorMessage = data.label;
    this.isopentotalbill = true;
    // console.log(" this.failMsg", this.errorMessage)

    // if (this.changeDate == "") {
    //   this.datefrompicker = new Date().toISOString();
    //   console.log("if date", this.datefrompicker, "====", this.changeDate)

    // }
    // else {
    //   this.datefrompicker = this.changeDate;
    //   console.log("else date", this.datefrompicker, "====", this.changeDate)

    // }
    // this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy')

    this.dataService.GetErrorWiseSummaryStatus(this.selectedProgram, this.requestDate, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.errorMessage).subscribe((res: Response) => {
      this.isLoading = false;
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      // console.log("resSTR", resSTR, "resJSON", resJSON);
      if (resJSON.messageCode == '200') {
        this.MonthWiseSummaryData = resJSON.data;
        // console.log(" this.MonthWiseSummaryData", resJSON.data, this.MonthWiseSummaryData)

      } else {
        this.isLoading = false;
      }
    })
  }

}
