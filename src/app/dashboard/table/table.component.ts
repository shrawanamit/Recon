import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { GlobalService } from 'src/app/service/global.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DuplicateComponent } from '../duplicate/duplicate.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() arrTable = new MatTableDataSource();
  @Input() arrSelectedProgram = [];
  tooltip = false;
  isHeader = false;
  isRow = false;
  loadingData =false;
  header=[];
  raw=[];
  tender=[];

  displayedColumns: string[] = [
    'pName',
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
    'billStatus',
    'rawDetails'];
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  duplicateData = [];

  constructor(
    private dataService: DataService,
    private globalService: GlobalService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private modalService: NgbModal
  ) {
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/duplicate.svg'));
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.arrTable.paginator = this.paginator;
    this.arrTable.sort = this.sort;
  }
  duplicateRecord(data, arrSelectedProgram) {
    this.dataService.getDuplicateData(arrSelectedProgram, data.billNo, data.billDate, data.storeCode).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '1') {
        this.duplicateData = resJSON.data;
        const modalRef = this.modalService.open(DuplicateComponent, { windowClass: 'duplicate_data', size: 'xl', centered: true, backdrop: 'static', keyboard: true });
        this.globalService.setUploadData(this.duplicateData);
        modalRef.result.then((result: any = 'open') => {
        }).catch((error) => {
          console.log(error);
        });
      }
    });

  }
  viewHeaderData(data) {
    console.log("viewHeaderData", data)
    this.loadingData=true;
    this.tooltip = true;
    this.dataService.GetRawBillDetails(data.billNo, data.billDate, data.storeCode, data.brandId).subscribe((res: Response) => {

      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);

      if (resJSON.messageCode == '1') {
        this.isHeader = resJSON.isHeader ;
        this.isRow = resJSON.isSKU;
        this.loadingData=false;
        // console.log("isHeader ",this.isHeader ,"====" ,this.isRow)
        this.header = resJSON.data.rawheaderdetails;
        console.log("GetRawBillDetails output", resJSON.data.rawItemDetails,'heaer',resJSON.data.rawheaderdetails)
        this.raw = resJSON.data.rawItemDetails;
        console.log("GetRawBillDetails output rawTenderDetails", resJSON.data.rawTenderDetails)
        this.tender = resJSON.data.rawTenderDetails;

      } else {
        alert("sorry! no data found")
        this.loadingData=false;
      }
    })


  }




  // viewTooltip(){
  //    if(this.tooltip == false){
  //      this.tooltip =true;
  //    }
  //    else{
  //     this.tooltip = false;
  //    }
  // }
}
