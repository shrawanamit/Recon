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
  selector: 'app-recon-summary',
  templateUrl: './recon-summary.component.html',
  styleUrls: ['./recon-summary.component.scss'],
  providers: [DatePipe]
})
export class ReconSummaryComponent implements OnInit {

  // SettlementSatus;
  requetDate;
  requestDate;
  startDate;
  endDate;
  monthNew;
  yearNew;
  isLogin: boolean = false;
  tenantCode = [];
  errorMsg = 'Loading! Please wait ...';
  reportTypeSelect: string = "";
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
  summaryData = false;
  storeWiseSummaryData: any = [];
  userData: any = [];
  filterBy="";
  selectedCountry = "";
  selectedCountryModeType = "";
  selectedCountryModeTypeMultipal = [];
  selectedCountryMode = [];
  selectedCountryModeMultipal = [];
  checkedCountryModeMultipal = [];
  selectedCountryMulti = [];
  selectedCountryMultiWithMode = [];
  clearCountryList = false;
  clearCountryModeList = false;
  isCountryClicked = false;
  isBillTypeClick=false;
  singleProgramSelected = [];
  reconCountryWithModes = [];
  programData = [];
  responceData: any = [];
  programResData: any = [];
  csvOptionsStoreWise = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    // showTitle: true,
    // title: 'Digital Recipt summary:',
    useBom: true,
    noDownload: false,
    headers: ["Store_Code", "Total_Bills", "Success_Bills", "Failed_Bills", "Readcount", "Open_Percentage"]
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
    headers: ["Brand Name", "Bill No", "Bill Date", "Store Code", "Store Name", "Customer Name", "MObile No", "Email ID", "Short URL", "Read Count", "Status", "Register No", "Bill Amount"]
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
    this.isProgramClicked = false;
    this.isBillTypeClick=false;
  }

  downloadcsvOptionsStoreWise() {
    // this.loadingData=true;
    new AngularCsv(this.userData, "Store wise summary", this.csvOptionsStoreWise);
    // this.loadingData=false;
  }
  SelectReportType(reporttype) {
    if (reporttype == '1') {
      this.reportTypeSelect = 'summaryReport';
    }
    if (reporttype == '2') {
      this.reportTypeSelect = 'storeWiseSummaryReport';
    }
    // this.isProgramClicked = false
  }
  // getProgram() {
  //   this.arrselectedProgram = [];
  //   const arrProgram = "";
  //   const arrProgramId = "";
  //   for (let i = 0; i < this.tenantCode.length; i++) {
  //     this.selectedProgram="";
  //     this.selectedProgramId="";

  //   if (this.tenantCode.isSelect) {
  //     this.arrselectedProgram.push(this.tenantCode[i]);
  //     this.selectedProgram=this.tenantCode[i].brandName;
  //     this.selectedProgramId=(this.tenantCode[i].brandId)

  //   }
  //   }
  //   this.selectedProgram = arrProgram;
  //   this.selectedProgramId = arrProgramId;
  // }


  // getselectedProgram(data, index) {
  //   console.log("data===", data);
  //   this.selectedProgram = data.tenantCode;
  //   this.selectedProgramId = data.tenantID;
  // }


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



  /////////////////////////////
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
      if (this.selectedCountryModeTypeMultipal.includes(data) && this.checkedCountryModeMultipal.includes(data.modeName + "(" + countryWithmodeSelected.countryCode + ")")) {
        let index = this.selectedCountryModeTypeMultipal.indexOf(data)
        this.selectedCountryModeTypeMultipal.splice(index, 1);
        this.checkedCountryModeMultipal.splice(index, 1)
        break
      }
      else {
        this.selectedCountryModeTypeMultipal.push(data);
        this.checkedCountryModeMultipal.push(data.modeName + "(" + countryWithmodeSelected.countryCode + ")")
      }
      break

    }
    // console.log("selected Mode", data.modeName + "(" + countryWithmodeSelected.countryCode + ")")
    // console.log("final arr", this.selectedCountryModeTypeMultipal)
    this.selectedCountryModeType = this.checkedCountryModeMultipal.join();
    this.clearCountryModeList = true;
    this.isCountryClicked=false;
    // console.log("counry mode", this.selectedCountryModeType)
  }



  getselectedCountry(data) {

    // debugger
    if (this.clearCountryList) {
      this.selectedCountry = "";
      this.selectedCountryMulti = [];
      this.selectedCountryModeType = "";
      this.selectedCountryMultiWithMode = [];
      this.selectedCountryModeMultipal = [];
      this.selectedCountryModeTypeMultipal = [];
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
    console.log("country select", this.selectedCountry)
    // this.selectedCountryModeType="";
    this.clearCountryList = false;
    // this.clearCountryModeList=true;
    // this.isCountryClicked = false;

  }





  getselectedProgramSingle(data) {

    this.selectedCountryModeType = "";
    this.selectedCountryMode = [];
    this.selectedCountryModeTypeMultipal = [];
    this.clearCountryList = true;
    // debugger
    this.selectedCountry = "";
    this.reconCountryWithModes = [];
    this.selectedCountryModeMultipal = [];

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

    console.log("this.selectedProgram", this.selectedProgram);
  }


  ///////////////////////////////////

  backButton(){
    this.storeWiseSummary=false;
    this.isCountryClicked=false;
    this.isBillTypeClick=false;
  }

  downloadCSV(requestType) {
    this.loadingData = true;
    this.dataService.DownloadMonthWiseSummary(this.selectedProgramId, this.selectedProgram, this.isMonthSelect ? this.requestDate : this.utilityService.convertDate(this.range.fromDate), parseInt(this.userDetails.userID), this.utilityService.convertDate(this.range.toDate), requestType, this.isMonthSelect ? this.requestDate.getMonth() : 0, this.isMonthSelect ? this.requestDate.getFullYear() : 0).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJson = JSON.parse(resSTR);
      if (resJson.messageCode == '200') {
        this.loadingData = false;
        this.MonthWiseSummary = resJson.data;
        let newData = this.MonthWiseSummary.map(ele => {
          delete ele.baseURL;
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


  //search data



  getSearchData(searchFilterData: NgForm): void {


    this.isProgramClicked = false;
    this.isLoading = true;
    this.loadingData = true;
    this.loadingTable = false;
    this.responceMsg = '';
    // searchFilterData.value.tenantid = this.selectedProgramId;
    // searchFilterData.value.userId = parseInt(this.userDetails.userID);
    delete searchFilterData.value.SettlementSatus;
    delete searchFilterData.value.programData;
    this.searchInProgress = true;

    this.singleProgramSelected[0].reconCountryWithModes = this.selectedCountryModeTypeMultipal;
    searchFilterData.value.brandMasterList = this.singleProgramSelected;
    console.log("this.singleProgramSelected",this.singleProgramSelected);

    if (this.isDateSelect) {
      searchFilterData.value.filterBy = "date"
      this.filterBy="Date";
    }
    else {
      searchFilterData.value.filterBy = "month"
      this.filterBy="Month";
    }
    if (this.isDateSelect) {
      searchFilterData.value.startDate = this.utilityService.convertDate(this.range.fromDate);
      searchFilterData.value.endDate = this.utilityService.convertDate(this.range.toDate);
      // this.requestDate = searchFilterData.value.startDate;
      console.log("get Date", this.startDate, "==", this.endDate)
    }

    else {
      // searchFilterData.value.requetDate = searchFilterData.value.requetDate;
      // this.requestDate = searchFilterData.value.requetDate;
      searchFilterData.value.month = searchFilterData.value.requetDate.getMonth()+1;
      searchFilterData.value.year = searchFilterData.value.requetDate.getFullYear();
      delete searchFilterData.value.requetDate;
      this.monthNew=searchFilterData.value.month;
      this.yearNew=searchFilterData.value.year;
      console.log("month",this.monthNew,this.yearNew)

    }
    delete searchFilterData.value.ReportType;
    console.log('searchFilterData.value', searchFilterData.value)
    
    this.dataService.getReconSummaryByBillDate(searchFilterData.value).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      // console.log("getReconSummaryByBillDate", resJSON.objAPIResponce, "===", resJSON.objAPIResponce.message)
      
      if (resJSON.objAPIResponce.message == "Success") {
       
        this.isLoading=false;
        this.loadingData = false;
        this.storeWiseSummary = true;
        this.responceData = resJSON.objAPIResponce.data;
        this.programResData = this.responceData[0].brandErrorSucces;
       
      } else {
        this.searchInProgress = false;
        this.responceMsg = this.utilityService.getMessageFromResponce(resJSON);
      }
    });

  }
}
