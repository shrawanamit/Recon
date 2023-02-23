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
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
declare var $: any;

@Component({
  selector: 'app-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.scss']
})
export class SettlementComponent implements OnInit, AfterViewInit {
  SettlementSatus;
  FromDate;
  Todate;
  displayedColumns: string[] = [
    'storeCode',
    'storeName',
    'lpaasSales',
    'lpaasBills',
    'reconLoyalitysales',
    'reconNonLoyalitysales',
    'reconLoyaltyBills',
    'reconNonLoyaltyBills',
    'extraBillsinLpaas' ];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  isLogin: boolean = false;
  programData = [];
  errorMsg = 'Loading! Please wait ...';
  errorMsgInfo: boolean = false;
  arrProgramInfoWithKey = {};
  loadingData: boolean = true;
  arrselectedProgram = [];
  selectedProgram;
  allProgram = [];
  DqrData=[];
  isProgramClicked = false;
  isProgramsVisble = false;
  isClickedSearch = false;
  isMonthSelect: boolean = false;
  selectedProgramId = [];
  searchInProgress: boolean = false;
  dqrSearchData = new MatTableDataSource();
  isLoading: boolean = true;
  responceMsg: any;
  userDetails: any = [];
  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    // showTitle: true,
    // title: 'Digital Recipt summary:',
    useBom: true,
    noDownload: false,
    headers: [
      "Store Code",
      "Store Name",
      "Lpaas Sales",
      "Lpaas Bills",
      "Loyality Sales",
      "Non Loyality Sales",
      "Loyalty Bills",
      "Non Loyalty Bills",
      "Extra Bills In Lpaas"]
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
    var details: any = JSON.parse(localStorage.getItem('userInfo'));
    this.userDetails = details[0];
    this.dataService.getAllProgram(this.userDetails.userID).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJson = JSON.parse(resSTR);
      if (resJson.messageCode == '1' && resJson.data != null) {
        this.errorMsg = 'Success';
        for (let i = 0; i < resJson.data.length; i++) {
          resJson.data[i].isSelect = false;
          this.arrProgramInfoWithKey[resJson.data[i].brandId] = resJson.data[i];
          if (resJson.data[i].isDQR) {
            this.programData.push(resJson.data[i])
          }
        }
        this.utilityService.programSort(this.programData);
        if (this.programData.length) {
          this.loadingData = false;
        }
      } else if (resJson.statusCode == '500') {
        this.loadingData = false;
        this.errorMsg = 'Internal Serve Error! Please Try Again...';
      } else if (resJson.statusCode == '200' && resJson.data == null) {
        this.errorMsg = 'No Data Found! Please Try Again...';
      }
    });
  }
  ngAfterViewInit() {
    // this.dqrSearchData.paginator = this.paginator;
    // this.dqrSearchData.sort = this.sort;
  }
  onOpenCalendar(container) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };
    container.setViewMode('month');
  }
  changeSettData(selected) {
    if (selected == '3') {
      this.isMonthSelect = true;
    } else {
      this.isMonthSelect = false;
    }
  }
  getProgram() {
    this.arrselectedProgram = [];
    const arrProgram = [];
    const arrProgramId = [];
    for (let i = 0; i < this.programData.length; i++) {
      if (this.programData[i].isSelect) {
        this.arrselectedProgram.push(this.programData[i]);
        arrProgram.push(this.programData[i].brandName);
        arrProgramId.push(this.programData[i].brandId);
      }
    }
    this.selectedProgram = arrProgram.join();
    this.selectedProgramId = arrProgramId;
  }
  getselectedProgram(data) {
    if (this.arrProgramInfoWithKey[data.brandId].isSelect) {
      this.arrProgramInfoWithKey[data.brandId].isSelect = false;
    } else {
      this.arrProgramInfoWithKey[data.brandId].isSelect = true;
    }
    this.getProgram();
    this.allProgram = this.utilityService.getLetterByFilter(this.programData);
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
  getSearchData(searchFilterData: NgForm): void {
    this.isProgramClicked = false;
    this.isLoading = true;
    this.responceMsg = '';
    if (this.isMonthSelect) {
      searchFilterData.value.FromDate = this.utilityService.convertMonth(searchFilterData.value.FromDate)
      searchFilterData.value.Todate = this.utilityService.convertMonth(searchFilterData.value.Todate)
    }
    this.searchInProgress = true;
    // searchFilterData.value.Brand_Id = this.selectedProgramId;
    searchFilterData.value.Brand_Id = 'LoveYourBodyClub';
    // this.dataService.GetDQRData(searchFilterData.value).subscribe((res: Response) => {
    //   const resSTR = JSON.stringify(res);
    //   const resJson = JSON.parse(resSTR);
    //   if (resJson.messageCode == '1') {
    //     this.isLoading = false;
    //     for (var i = 0; i < resJson.data.length; i++) {
    //       if (resJson.data[i].settlementMode == 'Auto') {
    //         resJson.data[i].isDqrReport = true;
    //       } else {
    //         resJson.data[i].isDqrReport = false;
    //       }
    //     }
    //     this.dqrSearchData.data = resJson.data;
    //     this.responceMsg = this.utilityService.getMessageFromResponce(resJson);
    //   } else {
    //     this.isLoading = false;
    //     this.responceMsg = this.utilityService.getMessageFromResponce(resJson);
    //   }
    // });
    this.dataService.DQRReportData(searchFilterData.value).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJson = JSON.parse(resSTR);
      console.log('dqr', resJson);
      if (resJson.messageCode == '1') {
        this.isLoading = false;
        // for (var i = 0; i < resJson.data.length; i++) {
        //   if (resJson.data[i].settlementMode == 'Auto') {
        //     resJson.data[i].isDqrReport = true;
        //   } else {
        //     resJson.data[i].isDqrReport = false;
        //   }
        // }
        this.DqrData = resJson.data;
        console.log('dqr==',  this.DqrData)
        this.responceMsg = this.utilityService.getMessageFromResponce(resJson);
      } else {
        this.isLoading = false;
        this.responceMsg = this.utilityService.getMessageFromResponce(resJson);
      }
    });
  }
  downloadBillSummary() {
    new AngularCsv( this.DqrData, "DQR Summary", this.csvOptions);
  }
}
