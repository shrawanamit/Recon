import { Component, OnInit, Renderer2, AfterViewInit, ViewChild } from '@angular/core';
import { UtilityService } from 'src/app/service/utility.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { GlobalService } from 'src/app/service/global.service';
import { DataService } from 'src/app/service/data.service';

import { ProgramComponent } from 'src/app/allprograms/program/program.component';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ExportToCsv } from 'export-to-csv';
import { NgxDrpOptions, PresetItem, Range } from 'ngx-mat-daterange-picker';
import { DatePipe } from '@angular/common';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { __await } from 'tslib';
// import { userInfo } from 'os';
declare var $: any;



const options = {
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalSeparator: '.',
  showLabels: true,
  // showTitle: true,
  // title: 'My Awesome CSV',
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: true,
  // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};
const csvExporter = new ExportToCsv(options);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {



  currentDate = new Date();
  year = this.currentDate.getFullYear();
  month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
  day = String(this.currentDate.getDate()).padStart(2, '0');
  newDate = this.year + '-' + this.month + '-' + this.day;


  range: Range = { fromDate: new Date(), toDate: new Date() };
  options: NgxDrpOptions;
  presets: Array<PresetItem> = [];
  displayedColumns: string[] = [
    'billNo',
    'billDate',
    'storeCode',
    'customerMobile',
    'memberId',
    'loyaltyDiscount',
    'pointRedemption',
    'billValue',
    'voidBill',
    'remarks'];
  dataSource = new MatTableDataSource();
  isProgramsVisble = false;
  programData = [];
  programDataAll = [];
  selectedProgram;

  selectedCountry = "";
  selectedCountryModeType = "";
  selectedCountryModeTypeMultipal = [];
  selectedCountryMode = [];
  selectedCountryModeMultipal = [];
  checkedCountryModeMultipal = [];
  selectedCountryMulti = [];
  selectedCountryMultiWithMode = [];

  
  arrProgramInfoWithKey = {};
  allProgram = [];
  clearCountryList = false;
  clearCountryModeList=false;
  isProgramClicked = false;
  isCountryClicked = false;
  isBillTypeClick = false;
  isClickedSearch = false;



  billType = [
    {
      label: 'On Line',
      value: '1',
    },
    {
      label: 'Off Line',
      value: '2',

    }
  ];

  countrySelected: [{
    countryID: number,
    countryName: string,
    reconModes: [],
  }];

  tempCountrySelected : [{
    countryID: number,
    countryName: string,
    reconModes: [],
  }];
  // tempCountrySelected: any = [];


  alartStatus;
  arrselectedProgram = [];
  startDate;
  endDate;
  serviceType;
  feedbacktext;
  errortext;
  // newDate;
  isLogin: boolean = false;
  tooltip: boolean = false;
  tooltipIdx = null;
  selectedType;
  storewise;
  mobile;
  bill_id;
  brandId;
  refrenceID: number;
  refrenceIDMultipal = "";
  isClickedAdvance: boolean = false;
  selectedBillType;
  TransactionType;
  arrCountStatus = [];
  totalCount = 0;
  successCount = 0;
  updateSucessCount = 0;
  voidBillCount = 0;
  errorCount = 0;
  matchedCount = 0;
  rollBackSuccess = 0;
  validErrorCount = 0;
  invalidErrorCount = 0;
  isTotal: boolean = true;
  editDate;
  loadingData: boolean = true;
  searchInProgress: boolean = false;
  isClickedRow: boolean = false;
  savedRemark: boolean = false;
  isMultiBrand: boolean = false;
  isSingleBrand: boolean = true;
  singleProgramSelected = [];
  reconCountryWithModes = [];

  remarksResponce;
  remarksSaveStatus;
  activeRow: number;
  clickSubProgram;
  arrErrorCount = [];
  SoftErrorList = [];
  hardErrorList = [];
  activeProgramName;
  clickTotalCountMenu = 'total';
  arrTransactionData = [];
  errorMsg;
  errorMsgInfo: boolean = false;
  storeRange: any;
  isSelectAllError: boolean = false;
  isSelectClearError: boolean = false;
  // changeisSelectClearError: boolean = false;
  // changeisSelectAllError: boolean = false;
  responceMsg: any;
  mobileValidate: boolean = true;
  errorMsgType: string;
  // userDetails:string;
  userDetails: any = [];
  inActive: boolean = false;
  noIssueBtn: boolean = false;
  active: boolean = false;
  checkNOISsue: boolean = false;
  checkISsue: boolean = false;
  isSoftErrorListOpen: boolean = false;
  isHardErrorListOpen: boolean = false;

  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    useBom: true,
    noDownload: false,
    headers: [
      "brandId",
      "brandName",
      'billNo',
      'billDate',
      'storeCode',
      'customerMobile',
      'memberId',
      'loyaltyDiscount',
      'pointRedemption',
      'billValue',
      'voidBill',
      'remarks',
      "statusCode",
      "insertionDate",
      "billStatus",
      "fileName",
      "transactionStatus"
    ]
  };

  constructor(
    private dataService: DataService,
    private globalService: GlobalService,
    private httpClient: HttpClient,
    private modalService: NgbModal,
    private utilityService: UtilityService,
    private router: Router,
  ) {

    console.log("this.currentDate,this.endDate", this.currentDate, this.endDate)
  }

  ngOnInit() {


    $(document).ready(function () {

      $('.js-btn-tooltip').tooltip();
    });


    $(document).on('click', function (e) {
      var container = $(".multidrop_container");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.multidrop_container .dropdown_multiselect').slideUp();
      }
    })
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
    // console.log("user info userid", this.userDetails.userID)

    this.dataService.getAllProgram(this.userDetails.userID).subscribe((res: Response) => {
      //   this.userDetails =localStorage.getItem('userInfo');
      //  console.log( "user info",userDetails)

      const resSTR = JSON.stringify(res);
      const resJson = JSON.parse(resSTR);

      if (resJson.messageCode == '1' && resJson.data != null) {
        for (let i = 0; i < resJson.data.length; i++) {
          // console.log(" resJson.data[i].isSelect", resJson.data[i],"===",resJson.data[i].isSelect)
          resJson.data[i].isSelect = false;
          // debugger
          // console.log(" resJson.data[i].isSelect after", resJson.data[i].isSelect)
          this.arrProgramInfoWithKey[resJson.data[i].brandId] = resJson.data[i];
        }
        this.utilityService.programSort(resJson.data);
        this.programData = resJson.data;
        // console.log("resJson.data country", this.programData[1].reconCountryWithModes)
        // this.programDataAll=resJson.data;

        if (this.programData.length) {
          this.loadingData = false;
        }
        else {
          this.errorMsg = resJson.message;
          this.loadingData = false;
        }

      } else {
        this.errorMsg = resJson.message;
        this.loadingData = false;
      }
    });

  }
  mobileValidation(val) {
    this.mobileValidate = /^\d{10}$/.test(val)
  }

  updateRange(range: Range) {
    if (range.toDate < range.fromDate) {
      alert('Not selected valid date !')
    } else {
      this.range = range;
    }
  }

  // helper function to create initial presets
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
  downloadCSV() {
    new AngularCsv(this.dataSource.data, this.activeProgramName + " Summary", this.csvOptions);
  }
  // exportTableCsv() {
  //   csvExporter.generateCsv(this.dataSource.data);
  // }




  getTransactionData(selectedProgram, billType, TransactionType, startDate, endDate, storeWise, mobile, billID, status, pageSize, OffSetLimit, statusCode) {
    // debugger
    console.log("getTransactionData", selectedProgram[0].reconCountryWithModes[0].refrenceID)

    selectedProgram[0].brandId=selectedProgram[0].reconCountryWithModes[0].refrenceID;
    this.dataSource.data = [];
    this.dataService.transactionData(selectedProgram, billType, TransactionType, startDate, endDate, storeWise, mobile, billID, status, pageSize, OffSetLimit, statusCode).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      // console.log("resJSON response tranjaction",resJSON)
      if (resJSON.messageCode == '1') {
        resJSON.selectedProgram = selectedProgram;
        // console.log("dataSource",resJSON.data)
        this.dataSource.data = resJSON.data;
        this.arrTransactionData = resJSON.selectedProgram;
      } else {

      }
    });
  }
  getErrorMsgCount() {
    this.dataService.displayErrorMessageCount(this.isSingleBrand ? this.singleProgramSelected : this.arrselectedProgram, this.selectedType, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, 1).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);

      const resJSON = JSON.parse(resSTR);
      // console.log('error response',resJSON)
      if (resJSON.messageCode == '1') {
        for (let i = 0; i < resJSON.data.length; i++) {
          resJSON.data[i].isSelect = false;
        }
        this.arrErrorCount = resJSON.data;
      }
    });
  }
  getValidErrorMsgCount() {
    this.errorMsgType = 'Soft Error';
    this.dataService.displayErrorMessageCount(this.isSingleBrand ? this.singleProgramSelected : this.arrselectedProgram, this.selectedType, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, 1).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      // console.log('error valid response',resJSON)
      if (resJSON.messageCode == '1') {
        for (let i = 0; i < resJSON.data.length; i++) {
          resJSON.data[i].isSelect = false;
        }
        this.arrErrorCount = resJSON.data;
      }
    });
  }
  getInvalidErrorMsgCount() {

    console.log("Hard Error", this.newDate, "====", this.newDate)
    this.errorMsgType = 'Hard Error';
    this.dataService.displayErrorMessageCount(this.isSingleBrand ? this.singleProgramSelected : this.arrselectedProgram, this.selectedType, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, 2).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      // console.log('error invalid response',resJSON)
      if (resJSON.messageCode == '1') {
        for (let i = 0; i < resJSON.data.length; i++) {
          resJSON.data[i].isSelect = false;
        }
        this.arrErrorCount = resJSON.data;
      }
    });
  }
  getVoidBillErrorMsgCount() {
    this.errorMsgType = 'Void';
    this.dataService.displayErrorMessageCount(this.isSingleBrand ? this.singleProgramSelected : this.arrselectedProgram, this.selectedType, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, 3).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      console.log('void response', resJSON)
      if (resJSON.messageCode == '1') {
        for (let i = 0; i < resJSON.data.length; i++) {
          resJSON.data[i].isSelect = false;
        }
        this.arrErrorCount = resJSON.data;
      }
    });
  }
  // successProgram(index, countStatus, event) {
  //   this.activeProgramName = countStatus.brandName;
  //   const k = 10;
  //   this.isClickedRow = true;
  //   const selectedProgram = [];
  //   selectedProgram.push(this.arrProgramInfoWithKey[countStatus.brandId]);
  //   // console.log("countStatus.successStatus",countStatus.successStatus)
  //   this.getTransactionData(selectedProgram, this.selectedType, this.newDate, this.newDate, this.storewise, this.mobile, this.bill_id, countStatus.successStatus, countStatus.successCount, 0, '');
  //   this.activeRow = index;
  // }
  getMissingMsgCount(index, countStatus, event) {
   
    // console.log("missing",index, countStatus, event)
    this.activeProgramName = countStatus.brandName;
    const k = 10;
    this.isClickedRow = true;
    const selectedProgram = [];
    // debugger
    selectedProgram.push(this.arrProgramInfoWithKey[countStatus.brandId]);
    // selectedProgram.push(countStatus);
    // console.log("countStatus.successStatus",selectedProgram, this.selectedType, this.newDate, this.newDate, this.storewise, this.mobile, this.bill_id, 0, countStatus.missingSuccessCount, 0, '',"=====",countStatus.missingSuccessCount)
    this.getTransactionData(selectedProgram, this.selectedType, 1, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, 0, countStatus.missingSuccessCount, 0, '');
    this.activeRow = index;

  }
  getUpdateMsgCount(index, countStatus, event) {

    // console.log("update",index, countStatus, event)
    this.activeProgramName = countStatus.brandName;
    const k = 10;
    this.isClickedRow = true;
    const selectedProgram = [];
    selectedProgram.push(this.arrProgramInfoWithKey[countStatus.brandId]);
    // selectedProgram.push(countStatus);
    // console.log("countStatus.successStatus",countStatus.successStatus)
    // console.log("update",selectedProgram, this.selectedType, this.newDate, this.newDate, this.storewise, this.mobile, this.bill_id, 0, countStatus.successCount, 0, '')
    this.getTransactionData(selectedProgram, this.selectedType, 2, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, 0, countStatus.missingRedemSuccessCount, 0, '');
    this.activeRow = index;

  }

  grtRollBackSuccessCount(index, countStatus, event) {
    // console.log("update",index, countStatus, event)
    this.activeProgramName = countStatus.brandName;
    const k = 10;
    this.isClickedRow = true;
    const selectedProgram = [];
    selectedProgram.push(this.arrProgramInfoWithKey[countStatus.brandId]);
    // selectedProgram.push(countStatus);
    // console.log("countStatus.successStatus",countStatus.successStatus)
    // console.log("update",selectedProgram, this.selectedType, this.newDate, this.newDate, this.storewise, this.mobile, this.bill_id, 0, countStatus.successCount, 0, '')
    this.getTransactionData(selectedProgram, this.selectedType, 5, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, 0, countStatus.rollBackSuccess, 0, '');
    this.activeRow = index;

  }





  Filters(event) {

    this.newDate = event.target.value;
    //  console.log("event.target.value", event.target.value,'----',this.newDate,this.endDate)
    // this.changeDate = event.target.value;
    // console.log(" this.changeDate", this.changeDate)
    // this.userData = this.AlldataForFilter.filter((e) => this.datepipe.transform(e.requetDate, 'yyyy-MM-dd') <= event.target.value)
    // console.log(" this.filterdata", this.userData)
  }



  errorProgram(index, countStatus, event) {
    debugger
    this.activeProgramName = countStatus.brandName;
    const k = 10;
    this.isClickedRow = true;
    const selectedProgram = [];

    selectedProgram.push(this.arrProgramInfoWithKey[countStatus.brandId]);
    // selectedProgram.push(countStatus);
    this.getTransactionData(selectedProgram, this.selectedType, 0, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, countStatus.errorStatus, countStatus.errorCount, 0, '');
    // console.log("countStatus.errorStatus",countStatus.errorStatus);
    this.activeRow = index;
  }
  validErrorProgram(index, countStatus, event) {

    // console.log("valid",index, countStatus, event)
    this.activeProgramName = countStatus.brandName;
    const k = 10;
    this.isClickedRow = true;
    const selectedProgram = [];

    // selectedProgram.push(countStatus);
    selectedProgram.push(this.arrProgramInfoWithKey[countStatus.brandId]);
    this.getTransactionData(selectedProgram, this.selectedType, 0, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, 1, countStatus.validErrorCount, 0, '');
    // console.log("countStatus.errorStatus",countStatus.errorStatus);
    this.activeRow = index;
  }
  invalidErrorProgram(index, countStatus, event) {
    this.activeProgramName = countStatus.brandName;
    const k = 10;
    this.isClickedRow = true;
    const selectedProgram = [];
    // selectedProgram.push(countStatus);
    selectedProgram.push(this.arrProgramInfoWithKey[countStatus.brandId]);
    this.getTransactionData(selectedProgram, this.selectedType, 0, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, 2, countStatus.invalidErrorCount, 0, '');
    // console.log("countStatus.errorStatus",countStatus.errorStatus);
    this.activeRow = index;
  }
  reprocessProgram(index, countStatus, event) {
    this.activeProgramName = countStatus.brandName;
    const k = 10;
    this.isClickedRow = true;
    const selectedProgram = [];
    // selectedProgram.push(countStatus);
    selectedProgram.push(this.arrProgramInfoWithKey[countStatus.brandId]);
    this.getTransactionData(selectedProgram, this.selectedType, 3, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, 0, countStatus.reErrorCount, 0, '');
    // console.log("countStatus.errorStatus",countStatus.errorStatus);
    this.activeRow = index;
  }
  reerrorProgram(index, countStatus, event) {
    this.activeProgramName = countStatus.brandName;
    const k = 10;
    this.isClickedRow = true;
    const selectedProgram = [];
    // selectedProgram.push(countStatus);
    selectedProgram.push(this.arrProgramInfoWithKey[countStatus.brandId]);
    this.getTransactionData(selectedProgram, this.selectedType, 3, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, 0, countStatus.reprocessCount, 0, '');
    // console.log("countStatus.errorStatus",countStatus.errorStatus);
    this.activeRow = index;
  }

  matchedProgram(index, countStatus, event) {
    // debugger
    this.activeProgramName = countStatus.brandName;
    const k = 10;
    this.isClickedRow = true;
    const selectedProgram = [];
    // selectedProgram.push(countStatus);
    selectedProgram.push(this.arrProgramInfoWithKey[countStatus.brandId]);
    this.getTransactionData(selectedProgram, this.selectedType, 4, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, 5, countStatus.matchedCount, 0, '');
    // console.log("countStatus.matchedStatus",countStatus.matchedStatus);
    this.activeRow = index;
  }

  editProgram() {
    this.isClickedSearch = false;
    this.searchInProgress = false;
    this.isClickedRow = false;
    this.loadingData = false;
    this.clickSubProgram = '';
  }
  clickActive(event) {
    this.isClickedRow = false;
    this.clickSubProgram = '';
    if (event == 'total') {
      this.isTotal = true;
      this.clickTotalCountMenu = 'total';
    } else if (event == 'error') {
      this.clickTotalCountMenu = 'error';
      this.isTotal = false;
      this.getErrorMsgCount();
    } else if (event == 'validError') {
      this.clickTotalCountMenu = 'validError';
      this.isTotal = false;
      this.getValidErrorMsgCount();
    } else if (event == 'invalidError') {
      this.clickTotalCountMenu = 'invalidError';
      this.isTotal = false;
      this.getInvalidErrorMsgCount();
    } else if (event == 'void') {
      this.clickTotalCountMenu = 'void';
      this.isTotal = false;
      this.getVoidBillErrorMsgCount();
    } else if (event == 'missing') {
      this.isTotal = true;
      this.clickTotalCountMenu = 'missing';
    } else if (event == 'update') {
      this.isTotal = true;
      this.clickTotalCountMenu = 'update';
    } else if (event == 'accural') {
      this.isTotal = true;
      this.clickTotalCountMenu = 'accural';
    } else if (event == 'maped') {
      this.isTotal = true;
      this.clickTotalCountMenu = 'maped';
    }
  }



  getSearchData(searchFilterData: NgForm): void {
    this.errorMsg = 'Loading! Please wait ...';

    this.errorMsgInfo = false;
    this.searchInProgress = true;
    this.storewise = searchFilterData.value.store;
    this.mobile = searchFilterData.value.phone;
    this.bill_id = searchFilterData.value.bill;
    // this.selectedBillType = searchFilterData.value.billtype;
    this.selectedBillType = 'Insertion Date';
    if (this.selectedBillType == 'Insertion Date') {
      this.selectedType = '1';
    } else if (searchFilterData.value.billtype == 'Bill Date') {
      this.selectedType = '2';
    }
    // if (searchFilterData.value.billtype == 'Insertion Date') {
    //   this.selectedType = '1';
    // } else if (searchFilterData.value.billtype == 'Bill Date') {
    //   this.selectedType = '2';
    // }
    this.startDate = this.utilityService.convertDate(this.range.fromDate);
    this.endDate = this.utilityService.convertDate(this.range.toDate);
    this.editDate = $('#daterange').val();
    this.searchProgramData();

  }





  searchProgramData() {

    // console.log("from date",this.utilityService.convertDate(this.range.fromDate));
    // console.log("to date",this.utilityService.convertDate(this.range.toDate));
    // debugger
    this.responceMsg = '';
    this.isCountryClicked=false;
    this.isBillTypeClick=false;
    // this.brandId=this.refrenceID;
    // this.singleProgramSelected[0].brandId = this.refrenceID;
    this.singleProgramSelected[0].reconCountryWithModes=this.selectedCountryModeTypeMultipal;

    console.log("this.singleProgramSelected", this.singleProgramSelected, "brand id", this.singleProgramSelected[0].brandId)
    console.log('brandName date before', this.isSingleBrand ? this.singleProgramSelected : this.arrselectedProgram, this.selectedType, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id);
    this.dataService.getsearchProgramData(this.isSingleBrand ? this.singleProgramSelected : this.arrselectedProgram, this.selectedType, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '1') {
        this.responceMsg = this.utilityService.getMessageFromResponce(resJSON);
        this.arrCountStatus = resJSON.data;
        this.isClickedSearch = true;
        this.totalCount = 0;
        this.successCount = 0;
        this.updateSucessCount = 0;
        this.voidBillCount = 0;
        this.errorCount = 0;
        this.matchedCount = 0;
        this.validErrorCount = 0;
        this.invalidErrorCount = 0;
        this.isTotal = true;
        console.log("brand status count ===", this.arrCountStatus, resJSON.data, "====", resJSON.data[0].brandId);

        for (let i = 0; i < this.arrCountStatus.length; i++) {
          this.totalCount += this.arrCountStatus[i].brandErrorSucces.totalCount;
          this.successCount += this.arrCountStatus[i].brandErrorSucces.missingSuccessCount;
          this.updateSucessCount += this.arrCountStatus[i].brandErrorSucces.missingRedemSuccessCount;
          this.voidBillCount += this.arrCountStatus[i].brandErrorSucces.rollBackSuccess
          this.rollBackSuccess += this.arrCountStatus[i].brandErrorSucces.rollBackSuccess;
          this.errorCount += this.arrCountStatus[i].brandErrorSucces.errorCount;
          this.matchedCount += this.arrCountStatus[i].brandErrorSucces.matchedCount;
          this.validErrorCount += this.arrCountStatus[i].brandErrorSucces.validErrorCount;
          this.invalidErrorCount += this.arrCountStatus[i].brandErrorSucces.invalidErrorCount;
          this.alartStatus = this.arrCountStatus[i].brandErrorSucces.status;
          this.remarksResponce = this.arrCountStatus[i].brandErrorSucces.remarks;
          this.remarksSaveStatus = this.arrCountStatus[i].brandErrorSucces.isSavedRemarks;
          this.brandId = this.arrCountStatus[i].brandErrorSucces.brandId;

        }
        if (this.remarksSaveStatus == 1) {
          this.savedRemark = true;
        }

      } else {
        this.searchInProgress = false;
        this.responceMsg = this.utilityService.getMessageFromResponce(resJSON);
      }
    });
  }

  openTextArea() {
    this.noIssueBtn = false;
    this.inActive = true;
    this.checkNOISsue = false;
    this.checkISsue = true;
    // console.log("this.inActive",this.inActive)
  }
  openBtn() {
    this.inActive = false;
    this.noIssueBtn = true;
    this.checkNOISsue = true;
    this.checkISsue = false;
    // console.log("this.inActive",this.inActive)
  }
  closeNoIssueBtn() {
    this.noIssueBtn = false;
    this.tooltip = false;
  }

  fixBrandData(data, idx) {
    this.alartStatus = 2;
    this.serviceType = 1;
    this.feedbacktext = "";
    this.inActive = false;
    this.tooltip = false;
    this.noIssueBtn = false;
    console.log("fixBrandData", data, this.brandId, this.userDetails.userID, this.selectedProgram, this.newDate, this.serviceType, "No Issue", 2)

    this.dataService.redALartStatus(data.brandId, this.userDetails.userID, data.brandName, this.newDate, this.serviceType, "No Issue", 2).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '1') {
        console.log('resJSON alertstatus', resJSON, resJSON.data)
        this.arrCountStatus[this.tooltipIdx].remarks = "No Issue"
        this.arrCountStatus[this.tooltipIdx].isSavedRemarks = 1
        this.arrCountStatus[this.tooltipIdx].status = 2
        //  this.alartStatus=resJSON.data;
      } else {
        console.log(resJSON.message)
      }
    });

  }
  textareaValidation() {
    if ($("#feedback_text").val().length >= 1) {
      this.errortext = "";
      return;
    }


  }
  saveRemark(data) {
    this.noIssueBtn = false;
    console.log("this.feedbacktext", this.feedbacktext, this.alartStatus)
    this.serviceType = 2;
    if ($("#feedback_text").val().trim().length < 1) {
      this.errortext = 'Please Fill Remark';
      return;
    }
    // if (this.feedbacktext == "") {
    //   this.errortext = 'Please enter remark'

    // 
    // else if($("#feedback_text").val().length >= 1){
    //   this.errortext ="";
    //   return;
    // }
    else {
      this.alartStatus = 3;
      this.tooltip = false;
      // console.log("save remark",this.brandId,this.userDetails.userID,this.selectedProgram, this.newDate, this.serviceType, this.feedbacktext, this.arrCountStatus[this.tooltipIdx].status == 1?4:3)
      this.dataService.redALartStatus(data.brandId, this.userDetails.userID, data.brandName, this.newDate, this.serviceType, this.feedbacktext, this.arrCountStatus[this.tooltipIdx].status == 1 ? 4 : 3).subscribe((res: Response) => {
        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        if (resJSON.messageCode == '1') {
          this.arrCountStatus[this.tooltipIdx].remarks = this.feedbacktext
          this.arrCountStatus[this.tooltipIdx].isSavedRemarks = 1
          this.arrCountStatus[this.tooltipIdx].status = this.arrCountStatus[this.tooltipIdx].status == 1 ? 4 : 3
          // console.log('resJSON alertstatus', resJSON, resJSON.data)
          this.savedRemark = true;
          this.remarksResponce = this.feedbacktext;
          //  this.alartStatus=resJSON.data;
          this.feedbacktext = "";
          this.inActive = false;

          //  this.tooltip=false;
        } else {
          console.log(resJSON.message)
        }
      });

    }

  }




  async getErrStatusCodeAll() {
    this.isSelectClearError = !this.isSelectClearError;
    this.isSelectAllError = !this.isSelectAllError;
    if (this.isSelectClearError === true) {
      this.isSelectAllError = true;
    }
    // console.log('isSelectClearError ,isSelectAllError',this.isSelectClearError, this.isSelectAllError);
    const arrStore = [];
    let count = 0;
    const selectedProgram = [];
    const activeProgramName = [];
    for (let i = 0; i < this.arrErrorCount.length; i++) {
      this.arrErrorCount[i].isSelect = this.isSelectClearError;
    }
    for (let j = 0; j < this.arrErrorCount.length; j++) {
      if (this.arrErrorCount[j].isSelect) {
        arrStore.push(this.arrErrorCount[j].statusCode);
        count = count += this.arrErrorCount[j].count;
      }
    }
    for (let k = 0; k < this.programData.length; k++) {
      if (this.programData[k].isSelect) {
        selectedProgram.push(this.programData[k]);
        activeProgramName.push(this.programData[k].brandName);
      }
    }
    this.activeProgramName = activeProgramName.join();
    const str = arrStore.join();
    this.getTransactionData(selectedProgram, this.selectedType, this.TransactionType, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, this.arrErrorCount[0].status, count, 0, str);
    this.isClickedRow = this.isSelectClearError;
  }



  getErrStatusCode(errCount) {
    // this.isSelectClearError = !this.isSelectClearError;
    this.isSelectClearError = false;
    // console.log(' getErrStatusCode isSelectClearError ,isSelectAllError ',this.isSelectClearError, this.isSelectAllError);
    const arrStore = [];
    let count = 0;
    const selectedProgram = [];
    const activeProgramName = [];
    // console.log('arrErrorCount res',this.arrErrorCount)
    for (let i = 0; i < this.arrErrorCount.length; i++) {
      if (this.arrErrorCount[i].statusCode == errCount.statusCode && !errCount.isSelect) {
        this.arrErrorCount[i].isSelect = true;
      } else if (this.arrErrorCount[i].statusCode == errCount.statusCode && errCount.isSelect) {
        this.arrErrorCount[i].isSelect = false;
      }
    }
    for (let j = 0; j < this.arrErrorCount.length; j++) {
      if (this.arrErrorCount[j].isSelect) {
        arrStore.push(this.arrErrorCount[j].statusCode);
        count = count += this.arrErrorCount[j].count;
      }
    }
    for (let k = 0; k < this.programData.length; k++) {
      if (this.programData[k].isSelect) {
        selectedProgram.push(this.programData[k]);
        activeProgramName.push(this.programData[k].brandName);
      }
    }
    this.activeProgramName = activeProgramName.join();
    const str = arrStore.join();
    if (this.errorMsgType == 'Void') {
      this.TransactionType = 5;
      this.getTransactionData(selectedProgram, this.selectedType, this.TransactionType, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, errCount.status, count, 0, str);

    } else {
      this.getTransactionData(selectedProgram, this.selectedType, this.TransactionType, this.isSingleBrand ? this.startDate : this.newDate, this.isSingleBrand ? this.endDate : this.newDate, this.storewise, this.mobile, this.bill_id, errCount.status, count, 0, str);

    }

    this.isClickedRow = true;
    // console.log(' getErrStatusCode down isSelectClearError ,isSelectAllError ',this.isSelectClearError, this.isSelectAllError);

  }





  getProgram() {
    //  debugger
    this.arrselectedProgram = [];
    const arrProgram = [];
    for (let i = 0; i < this.programData.length; i++) {
      if (this.programData[i].isSelect) {
        this.arrselectedProgram.push(this.programData[i]);
        arrProgram.push(this.programData[i].brandName);
      }
    }
    this.selectedProgram = arrProgram.join();
  }

  getselectedProgram(data) {
    console.log("dataM1", data);
    if (this.arrProgramInfoWithKey[data.brandId].isSelect) {
      this.arrProgramInfoWithKey[data.brandId].isSelect = false;
    } else {
      this.arrProgramInfoWithKey[data.brandId].isSelect = true;
    }
    this.getProgram();
    this.allProgram = this.utilityService.getLetterByFilter(this.programData);
    console.log("dataM2", data);
  }



  // clearReconMode(data){
  //   debugger
  //   this.tempCountrySelected=data;
  //   for(let i=0;i<this.tempCountrySelected.length;i++)
  //   {
  //     this.tempCountrySelected.reconModes=[];
  //   }
  //   console.log("selected Country Mode after", this.tempCountrySelected)
  // }

  handleCountryModeType(data, countryWithmodeSelected) {
 
    // debugger
   
    
    // if(!this.clearCountryModeList){
    //   this.selectedCountryModeType = "";
    //   this.selectedCountryMode=[];
    //   this.selectedCountryModeMultipal=[];
    //   this.selectedCountryModeTypeMultipal=[];
    // }

    if (data.isSelectMode == false) {
      data.isSelectMode = true;
    }

    for (let i = 0; i = 1; i++) {
      if (this.selectedCountryModeTypeMultipal.includes(data)  &&  this.checkedCountryModeMultipal.includes(data.modeName+"("+countryWithmodeSelected.countryCode+")")) {
        let index = this.selectedCountryModeTypeMultipal.indexOf(data)
        this.selectedCountryModeTypeMultipal.splice(index, 1);
        this.checkedCountryModeMultipal.splice(index,1)
        break
      }
      else {
        this.selectedCountryModeTypeMultipal.push(data);
        this.checkedCountryModeMultipal.push(data.modeName+"("+countryWithmodeSelected.countryCode+")")
      }
      break

    }
    console.log("selected Mode", data.modeName+"("+countryWithmodeSelected.countryCode+")")
    console.log("final arr",this.selectedCountryModeTypeMultipal)
    this.selectedCountryModeType = this.checkedCountryModeMultipal.join();
    this.clearCountryModeList=true;
  }



  getselectedCountry(data) {
    
    // debugger
    if(this.clearCountryList){
      this.selectedCountry = "";
      this.selectedCountryMulti=[];
      this.selectedCountryModeType = "";
      this.selectedCountryMultiWithMode=[];
      this.selectedCountryModeMultipal=[];
      this.selectedCountryModeTypeMultipal=[];
    }
    // if(this.clearCountryModeList){
    //   this.selectedCountryModeType = "";
    //   this.selectedCountryModeMultipal=[];
    //   this.selectedCountryModeTypeMultipal=[];

    // }isSelectMode
    if (data.isSelectCountry == false) {
      data.isSelectCountry = true;
    }
  

    for (let i = 0; ; i++) {
      if (this.selectedCountryMulti.includes(data.countryName) && this.selectedCountryMultiWithMode.includes(data)) {
        let index = this.selectedCountryMulti.indexOf(data.countryName)
        this.selectedCountryMulti.splice(index, 1);
        this.selectedCountryMultiWithMode.splice(index, 1);
        break
      }
      else {
        this.selectedCountryMulti.push(data.countryName);
        this.selectedCountryMultiWithMode.push(data);
      }
      break

    }
    this.selectedCountry = this.selectedCountryMulti.join();
    this.selectedCountryMode = this.selectedCountryMultiWithMode;
    console.log("this.selectedCountryMultiWithMode",this.selectedCountryMultiWithMode)
    // this.selectedCountryModeType="";
    this.clearCountryList=false;
    // this.clearCountryModeList=true;
    // this.isCountryClicked = false;

  }

 



   getselectedProgramSingle(data) {
    
    this.selectedCountryModeType = "";
    this.selectedCountryMode=[];
    this.selectedCountryModeTypeMultipal=[];
    this.clearCountryList=true;
    // debugger
     this.selectedCountry = "";
    this.reconCountryWithModes=[];
    this.selectedCountryModeMultipal=[];

    this.reconCountryWithModes = data.reconCountryWithModes;
    console.log("datas country", data);
   
    this.singleProgramSelected = [];
    // data.isSelect=false;
   
    if (data.isSelect == false) {
      data.isSelect = true;
    }
    
    this.singleProgramSelected.push(data);
    this.allProgram = this.utilityService.getLetterByFilter(this.programData);
    this.selectedProgram = data.brandName;

    this.isProgramClicked = false;
    
    console.log("this.selectedCountry",this.selectedCountry);
  }



  seeAllPrograms() {
    this.isProgramClicked = false;
    this.isProgramsVisble = true;
    const modalRef = this.modalService.open(ProgramComponent, { windowClass: 'see_all_programs', size: 'xl', centered: true, backdrop: 'static', keyboard: false });
    this.globalService.setUploadData(this.programData);
    modalRef.result.then((result) => {
      this.programData = result;
      this.getProgram();
    }).catch((error) => {
      console.log(error);
    });
  }
  closeMsg() {
    this.errorMsgInfo = true;
    this.errorMsg = 'Loading! Please wait ...';
  }
  isInactive(idx) {
    // document.getElementById("overlay").style.display = "block";
    this.checkNOISsue = false;
    this.checkISsue = false;
    this.noIssueBtn = false;
    this.inActive = false;
    this.tooltipIdx = idx;
    // console.log(" this.tooltipIdx", this.tooltipIdx)
    if (this.tooltip == false) {
      this.tooltip = true;
    }
    else {
      this.tooltip = false;
    }
  }
  closeTooltip() {
    this.tooltip = false;
  }
  getSoftErrorList() {

    this.dataService.getErrorList(1).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      console.log('resJSON soft error list', resJSON)
      this.SoftErrorList = resJSON;
      if (resJSON.messageCode == '1') {
        console.log('resJSON soft error list', resJSON.data)
        this.SoftErrorList = resJSON;

      } else {
        console.log(resJSON.message)
      }
    });
    this.isSoftErrorListOpen = true;
  }
  softErrorListClose() {
    this.isSoftErrorListOpen = false;
  }
  getHardErrorList() {
    this.dataService.getErrorList(2).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      this.hardErrorList = resJSON;
      if (resJSON.messageCode == '1') {
        console.log('resJSON hard error list', resJSON.data)

      } else {
        console.log(resJSON.message)
      }
    });
    this.isHardErrorListOpen = true;
  }
  hardErrorListClose() {
    this.isHardErrorListOpen = false;
  }


  changeSettData(selected) {
    for (let i = 0; i < this.programData.length; i++) {
      // console.log(" resJson.data[i].isSelect", resJson.data[i],"===",resJson.data[i].isSelect)
      this.programData[i].isSelect = false;
    }
    this.selectedProgram = '';
    this.arrselectedProgram = [];
    this.singleProgramSelected = [];
    if (selected == '1') {
      if (this.isMultiBrand == true) {
        this.isMultiBrand = false;
        this.isSingleBrand = true;
      }
      else {
        this.isSingleBrand = true;
      }
    } else {

      if (this.isSingleBrand == true) {
        this.isSingleBrand = false;
        this.isMultiBrand = true;
      }
      else {
        this.isMultiBrand = true;
      }
    }
    //  this.isProgramClicked=false
    console.log("this.isSingleBrand", this.isSingleBrand)
  }

}
