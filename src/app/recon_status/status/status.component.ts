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
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  SettlementSatus;
  requetDate;
  // displayedColumns: string[] = [
  //   'brandName',
  //   'executionDate',
  //   'status',
  //   'settlementMode',
  //   'action',
  //   'reportPath'];
  // @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  // @ViewChild(MatSort, { static: false }) sort: MatSort;
  isTableData=false;
  isLogin: boolean = false;
  tenantCode = [];
  errorMsg = 'Loading! Please wait ...';
  errorMsgInfo: boolean = false;
  arrProgramInfoWithKey = {};
  loadingData: boolean = true;
  arrselectedProgram = [];
  selectedProgram;
  allProgram = [];
  isProgramClicked = false;
  isProgramsVisble = false;
  isClickedSearch = false;
  isMonthSelect: boolean = true;
  selectedProgramId ;
  searchInProgress: boolean = false;
  dqrSearchData = new MatTableDataSource();
  isLoading: boolean = true;
  // loadingData : false;
  responceMsg: any;
  userDetails: any = [];
  reconSummary: any=[];
  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    // showTitle: true,
    // title: 'recon status summary:',
    useBom: true,
    noDownload: false,
    headers: ["Program Name", "Recon Process Date", "Threshold Status", "Remarks Status", "Remarks","Remarks Submission Date"]
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
      //   this.userDetails =localStorage.getItem('userInfo');
      //  console.log( "user info",userDetails)
    
      const resSTR = JSON.stringify(res);
      const resJson = JSON.parse(resSTR);
      if (resJson.messageCode == '1' && resJson.data != null) {
        for (let i = 0; i < resJson.data.length; i++) {
          resJson.data[i].isSelect = false;
          this.arrProgramInfoWithKey[resJson.data[i].brandId] = resJson.data[i];
        }
        this.utilityService.programSort(resJson.data);
        this.tenantCode = resJson.data;
        if (this.tenantCode.length) {
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
    this.isProgramClicked=false;
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
      // console.log("selected month", event.date)
    };
    container.setViewMode('month');
  }
 
  // getProgram() {
  //   this.arrselectedProgram = [];
  //   const arrProgram ="";
  //   const arrProgramId="" ;
   
  // }


  // getselectedProgram(data ,index) {
  //    console.log("data===" ,data);
  //    this.selectedProgram = data.tenantCode;
  //    this.selectedProgramId = data.tenantID;
  // }

  // getProgram() {
  //   this.arrselectedProgram = [];
  //   const arrProgram = [];
  //   for (let i = 0; i < this.tenantCode.length; i++) {
  //     if (this.tenantCode[i].isSelect) {
  //       this.arrselectedProgram.push(this.tenantCode[i]);
  //       arrProgram.push(this.tenantCode[i].brandName);
  //     }
  //   }
  //   this.selectedProgram = arrProgram.join();
  // }

  getselectedProgram(data) {
    // if (this.arrProgramInfoWithKey[data.brandId].isSelect) {
    //   this.arrProgramInfoWithKey[data.brandId].isSelect = false;
    // } else {
    //   this.arrProgramInfoWithKey[data.brandId].isSelect = true;
    // }
    // this.getProgram();
    // this.allProgram = this.utilityService.getLetterByFilter(this.tenantCode);
    console.log("data===" ,data);
    this.selectedProgram = data.brandName;
    this.selectedProgramId = data.brandId;

  }
  seeAllPrograms() {
    this.isProgramClicked = false;
    this.isProgramsVisble = true;
    const modalRef = this.modalService.open(ProgramComponent, { windowClass: 'see_all_programs', size: 'xl', centered: true, backdrop: 'static', keyboard: false });
    this.globalService.setUploadData(this.tenantCode);
    modalRef.result.then((result) => {
      this.tenantCode = result;
      // this.getProgram();
    }).catch((error) => {
      console.log(error);
    });
  }
 
  
  downloadCSV() {
    new AngularCsv(this.reconSummary, "recon status summary", this.csvOptions);
  }
  backbutton(){
    this.isTableData = false;
  }

  getSearchData(searchFilterData: NgForm): void {
    this.isProgramClicked=false;
    this.isLoading = true;
    this.loadingData=true;
    this.responceMsg = '';
    // searchFilterData.value.programName=this.selectedProgram;

    // searchFilterData.value.requetDate = searchFilterData.value.requetDate;
    this.searchInProgress = true;
    searchFilterData.value.brandid = this.selectedProgramId;
    // searchFilterData.value.userId=parseInt(this.userDetails.userID);
    searchFilterData.value.month=searchFilterData.value.requetDate.getMonth();
    searchFilterData.value.year=searchFilterData.value.requetDate.getFullYear();

    this.dataService.GetReconStatus(searchFilterData.value).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJson = JSON.parse(resSTR);
      if (resJson.messageCode == '1') {
        this.isTableData=true;
        this.isLoading = false;
        this.loadingData=false;
        this.reconSummary = resJson.data;
        console.log("response", this.reconSummary);  
      } else {
        this.isLoading = false;
        this.loadingData=false;
        alert("sorry no data found")
      }
    });
  }
}
