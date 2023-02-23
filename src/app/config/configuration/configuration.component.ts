import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/service/data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { GlobalService } from '@src/app/service/global.service';
import { NgForm } from '@angular/forms';
import FroalaEditor from 'froala-editor';
import "froala-editor/css/third_party/embedly.min.css";
import "froala-editor/js/third_party/embedly.min.js";
import { AngularFileUploaderModule } from "angular-file-uploader";
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { MatToolbarModule } from '@angular/material/toolbar';

// import { MdePopoverModule } from '@material-extended/mde';

import { UtilityService } from '@src/app/service/utility.service';

declare var $: any;

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  //temp
  monthlyErrorLog;
  monthlyLog;
  dailyErrorLogType;
  dailyErrorLogDetail;
  //temp
  formData = new FormData();
  loadingData: boolean = false;
  isActiveProgram: boolean = false;
  feedbacktext;
  fileTypeSelect: string = "";
  file;
  errortext;
  active: boolean = false;
  tooltip: boolean = false;
  remarkSaved: boolean = true;
  isPointOnMissingRedemption: boolean = true;
  missingRedemptionByAll: boolean = false;
  is_DQR_Required: any;
  ftpCredential: any = [];
  sqlCredential: any = [];
  purgeDetails: any = [];
  apiCredential: any = [];
  uatSetting: any = [];
  reconReportDetails: any = [];
  progConfigDetails: any = [];
  reconGeneralDetail: any = [];
  fileConfigDetail: any = [];
  folderConfigDetail: any = [];
  dqrConfigModel: any = [];
  reconAlertDetails: any = [];
  configSetting: any = [];
  isCreateNew = false;
  arrConfigEdit = [];
  tabId: any = '1';
  panelOpenState: boolean = false;
  isAddFormDqr: boolean = false;
  arrDqrUserListTo: any = [];
  arrDqrUserListCc: any = [];
  // fileToUpload: File | null = null;
  // filesArray: any = [];
  file1: boolean = false;
  file2: boolean = false;
  displayFileData: boolean = false;
  displayFileError: boolean = false;
  displayFileRes: boolean = false;
  fileUploadResponce;
  fileUploadResponceError = [];
  reconDataList = [];
  dqrDateRange = [];

  displayedColumns: string[] = [
    'brandName',
    'headerFile',
    'skuBill',
    'skuTenderItem',
    'lastModifiedBy',
    'lastModifiedOn',
    'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  isCreateConfig: boolean = false;
  internalError: boolean = false;
  isEditConfig: boolean = false;
  openValidateSec: boolean = false;
  objCreateConfigEdit = {};
  isEditConfigLoader: boolean;
  userDetails: any = [];
  moduleRoleRightDetailWithKey: any = [];
  sqlConn;
  successAlert: boolean = false;
  missingAlert: boolean = false;
  invalidAlert: boolean = false;
  selectedDqrEmailTo;
  arrselectedDqrEmailTo = [];
  selectedDqrEmailCc;
  arrselectedDqrEmailCc = [];
  selectedDistSuccessUserTo;
  arrDqrSuccessUserListTo: any = [];
  arrSelectedSuccessUserListTo = [];
  selectedDistSuccessUserCc;
  arrSelectedSuccessUserListCc = [];
  arrDqrSuccessUserListCc: any = [];


  selectedDistMissingUserTo;
  arrDqrMissingUserListTo: any = [];
  arrSelectedMissingUserListTo = [];
  selectedDistMissingUserCc;
  arrSelectedMissingUserListCc = [];
  arrDqrMissingUserListCc: any = [];

  selectedDistInvalidUserTo;
  arrDqrInvalidUserListTo: any = [];
  arrSelectedInvalidUserListTo = [];
  selectedDistInvalidUserCc;
  arrSelectedInvalidUserListCc = [];
  arrDqrInvalidUserListCc: any = [];
  isDqrEmailTo: boolean;
  isDqrEmailCc: boolean;
  isDistSuccessUserTo: boolean;
  isDistSuccessUserCc: boolean;
  isDistMissingUserTo: boolean;
  isDistMissingUserCc: boolean;
  isDistInvalidUserTo: boolean;
  isDistInvalidUserCc: boolean;
  newBrandId: any;
  isbrandsTable: boolean = false;
  responceMsg: any;


  reconGeneralDetails: {};
  reconFileDetails: {};
  reconFolderDetails: {};
  reconAlertsDetails: {};
  reconReportsDetails: {};
  reconSeatingsDetails: {};

  constructor(
    private dataService: DataService,
    private router: Router,
    private globalService: GlobalService,
    private utilityService: UtilityService
  ) {


  }

  ngOnInit() {
    this.getbrands();
    this.viewAllData(26, {
      "brandId": 26,
      "brandName": "Baazarkolkata",
      "isActive": false,
      "isEnable": false,
      "isHeaderFile": true,
      "isItemFile": false,
      "isItemTenderFile": false,
      "modifiedBy": "Karan Shah",
      "modifiedDate": "24-Apr-2019 10:27"
    })
    // $(document).ready(function() {

    //     $(' [data-toggle="popover"]').popover();
    // });saveavtive
    $("#saveavtive").click(function () {
      alert('tool tip');
    });
    $("#informationIcons").click(function () {
      alert('tool tip');
      $("#infoTooltip").toggle();
    });



    $(document).on('click', function (e) {
      var container = $(".multidrop_container");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.multidrop_container .dropdown_multiselect').slideUp();
      }
    })
    var details: any = JSON.parse(localStorage.getItem('userInfo'));
    this.userDetails = details[0].moduleRoleRightDetail;
    // console.log('useer detail config', this.userDetails);
    for (var i = 0; i < this.userDetails.length; i++) {
      this.moduleRoleRightDetailWithKey[this.userDetails[i].moduleCode] = this.userDetails[i]
    }
    // console.log("this.moduleRoleRightDetailWithKey ",this.moduleRoleRightDetailWithKey,'==',this.moduleRoleRightDetailWithKey.SETTING.view)
    this.sqlConn = this.moduleRoleRightDetailWithKey.SETTING.view;
    // console.log(" this.sqlConn", this.moduleRoleRightDetailWithKey.CONFIGURATION.view);
    if (localStorage.getItem('userInfo') == null) {
      this.router.navigate(['/login']);
    }

    var total = 29;
    for (var i = 1; i < total; i++) {
      this.dqrDateRange.push(i);
    }
    FroalaEditor.DefineIcon('alert', { SVG_KEY: 'help' });
    FroalaEditor.RegisterCommand('alert', {
      title: 'Giphy',
      icon: 'giphyIcon',
      undo: true,
      popup: true,
      plugin: 'giphyPlugin',
      showOnMobile: true,
      refreshAfterCallback: true,
      callback: function () {
        /* Toggle the giphy button */
        if (!this.popups.isVisible('giphyPlugin.popup')) {
          this.giphyPlugin.showPopup();
          this.$tb.find("input.giphy_search_field").focus()
        } else {
          if (this.$el.find('.fr-marker')) {
            this.events.disableBlur();
            this.selection.restore();
          }
          this.popups.hide('giphyPlugin.popup');
        }
      },
    });

  }
  afuConfig = {
    uploadAPI: {
      url: "https://example-file-upload-api"
    }
  };


  isInactive() {
    // document.getElementById("overlay").style.display = "block";
    this.active = false;
    if (this.tooltip == false) {
      this.tooltip = true;
    }
    else {
      this.tooltip = false;
    }
  }
  // off(){
  //   document.getElementById("overlay").style.display = "none";
  // }
  closeTooltip() {
    this.tooltip = false;
  }

  isActive() {
    this.active = true;
    this.feedbacktext = "";
    this.dataService.SaveFeedback(parseInt(this.newBrandId), this.feedbacktext, this.active).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '1') {
        this.feedbacktext = "";
        alert("Brand saved Successfully")
        this.calculateTabId();
      } else {
        alert(resJSON.message)
      }
    });

  }
  textareaValidation() {
    if ($("#feedback_text").val().length >= 1) {
      $("#footer_model").css("padding-top", "10px");
      this.errortext = "";
      return;
    }
  }
  saveRemark() {
    // console.log("tab 8",this.feedbacktext,this.active)
    if ($("#feedback_text").val().trim().length < 1) {
      $("#footer_model").css("padding-top", "0px");
      this.errortext = 'Please enter remark';
      return;

    }
    else {
      this.dataService.SaveFeedback(parseInt(this.newBrandId), this.feedbacktext, this.active).subscribe((res: Response) => {
        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        if (resJSON.messageCode == '1') {
          this.feedbacktext = "";
          alert("Brand saved Successfully")
          this.remarkSaved = false;
          this.calculateTabId();
        } else {
          alert(resJSON.message)
        }
      });
    }


  }



  // Depending on your screen size you may want to use a specific toolbar dimension or all of them.

  public options: Object = {
    charCounterCount: true,
    toolbarButtons: [['bold', 'italic', 'underline', 'paragraphFormat', 'alert'], ['embedly', 'html']],
    toolbarButtonsXS: [['bold', 'italic', 'underline', 'paragraphFormat', 'alert'], ['embedly', 'html']],
    toolbarButtonsSM: [['bold', 'italic', 'underline', 'paragraphFormat', 'alert'], ['embedly', 'html']],
    toolbarButtonsMD: [['bold', 'italic', 'underline', 'paragraphFormat', 'alert'], ['embedly', 'html']]
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getbrands() {
    this.responceMsg = '';
    this.applyFilter('');
    this.dataService.getBrandsBasicDetails().subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      //  console.log(' getbrands resJSON basic detail',resJSON);
      if (resJSON.messageCode == '1') {
        this.responceMsg = this.utilityService.getMessageFromResponce(resJSON);
        this.dataSource.data = resJSON.data;
        // console.log(' getbrands  basic detail', this.dataSource.data);
        this.isbrandsTable = true;
        this.internalError = false;
      } else {
        this.responceMsg = this.utilityService.getMessageFromResponce(resJSON);
        this.internalError = true;
      }
    });
  }
  getReconType() {
    var reconTypeSelect = $('#reconTypeSelect option:selected').text();
    $(this).next('input').val(reconTypeSelect);
  }
  getDqrEmailTo(dqrUser) {
    if (!dqrUser.isSelected) {
      dqrUser.isSelected = true
    } else {
      dqrUser.isSelected = false
    }
    this.selectDqrEmailTo();
  }
  selectDqrEmailTo() {
    this.arrselectedDqrEmailTo = [];
    const arrEmail = [];
    for (let i = 0; i < this.arrDqrUserListTo.length; i++) {
      if (this.arrDqrUserListTo[i].isSelected) {
        this.arrselectedDqrEmailTo.push(this.arrDqrUserListTo[i]);
        arrEmail.push(this.arrDqrUserListTo[i].value);
      }
    }
    this.selectedDqrEmailTo = arrEmail.join();
  }
  getDqrEmailCc(dqrUser) {
    if (!dqrUser.isSelected) {
      dqrUser.isSelected = true
    } else {
      dqrUser.isSelected = false
    }
    this.selectDqrEmailCc();
  }
  selectDqrEmailCc() {
    this.arrselectedDqrEmailCc = [];
    const arrEmail = [];
    for (let i = 0; i < this.arrDqrUserListCc.length; i++) {
      if (this.arrDqrUserListCc[i].isSelected) {
        this.arrselectedDqrEmailCc.push(this.arrDqrUserListCc[i]);
        arrEmail.push(this.arrDqrUserListCc[i].value);
      }
    }
    this.selectedDqrEmailCc = arrEmail.join();
  }
  selectDqrSuccessEmailTo() {
    this.arrSelectedSuccessUserListTo = [];
    const arrEmail = [];
    for (let i = 0; i < this.arrDqrSuccessUserListTo.length; i++) {
      if (this.arrDqrSuccessUserListTo[i].isSelected) {
        this.arrSelectedSuccessUserListTo.push(this.arrDqrSuccessUserListTo[i]);
        arrEmail.push(this.arrDqrSuccessUserListTo[i].value);
      }
    }
    this.selectedDistSuccessUserTo = arrEmail.join();
  }
  getDistSuccessUserTo(distUser) {
    if (!distUser.isSelected) {
      distUser.isSelected = true
    } else {
      distUser.isSelected = false
    }
    this.selectDqrSuccessEmailTo();
  }
  selectDqrSuccessEmailCc() {
    this.arrSelectedSuccessUserListCc = [];
    const arrEmail = [];
    for (let i = 0; i < this.arrDqrSuccessUserListCc.length; i++) {
      if (this.arrDqrSuccessUserListCc[i].isSelected) {
        this.arrSelectedSuccessUserListCc.push(this.arrDqrSuccessUserListCc[i]);
        arrEmail.push(this.arrDqrSuccessUserListCc[i].value);
      }
    }
    this.selectedDistSuccessUserCc = arrEmail.join();
  }
  getDistSuccessUserCc(distUser) {
    if (!distUser.isSelected) {
      distUser.isSelected = true
    } else {
      distUser.isSelected = false
    }
    this.selectDqrSuccessEmailCc();
  }
  selectDqrMissingEmailTo() {
    this.arrSelectedMissingUserListTo = [];
    const arrEmail = [];
    for (let i = 0; i < this.arrDqrMissingUserListTo.length; i++) {
      if (this.arrDqrMissingUserListTo[i].isSelected) {
        this.arrSelectedMissingUserListTo.push(this.arrDqrMissingUserListTo[i]);
        arrEmail.push(this.arrDqrMissingUserListTo[i].value);
      }
    }
    this.selectedDistMissingUserTo = arrEmail.join();
  }
  getDistMissingUserTo(distUser) {
    if (!distUser.isSelected) {
      distUser.isSelected = true
    } else {
      distUser.isSelected = false
    }
    this.selectDqrMissingEmailTo();
  }
  selectDqrMissingEmailCc() {
    this.arrSelectedMissingUserListCc = [];
    const arrEmail = [];
    for (let i = 0; i < this.arrDqrMissingUserListCc.length; i++) {
      if (this.arrDqrMissingUserListCc[i].isSelected) {
        this.arrSelectedMissingUserListCc.push(this.arrDqrMissingUserListCc[i]);
        arrEmail.push(this.arrDqrMissingUserListCc[i].value);
      }
    }
    this.selectedDistMissingUserCc = arrEmail.join();
  }
  getDistMissingUserCc(distUser) {
    if (!distUser.isSelected) {
      distUser.isSelected = true
    } else {
      distUser.isSelected = false
    }
    this.selectDqrMissingEmailCc();
  }
  selectDqrInvalidEmailTo() {
    this.arrSelectedInvalidUserListTo = [];
    const arrEmail = [];
    for (let i = 0; i < this.arrDqrInvalidUserListTo.length; i++) {
      if (this.arrDqrInvalidUserListTo[i].isSelected) {
        this.arrSelectedInvalidUserListTo.push(this.arrDqrInvalidUserListTo[i]);
        arrEmail.push(this.arrDqrInvalidUserListTo[i].value);
      }
    }
    this.selectedDistInvalidUserTo = arrEmail.join();
  }
  getDistInvalidUserTo(distUser) {
    if (!distUser.isSelected) {
      distUser.isSelected = true
    } else {
      distUser.isSelected = false
    }
    this.selectDqrInvalidEmailTo();
  }
  selectDqrInvalidEmailCc() {
    this.arrSelectedInvalidUserListCc = [];
    const arrEmail = [];
    for (let i = 0; i < this.arrDqrInvalidUserListCc.length; i++) {
      if (this.arrDqrInvalidUserListCc[i].isSelected) {
        this.arrSelectedInvalidUserListCc.push(this.arrDqrInvalidUserListCc[i]);
        arrEmail.push(this.arrDqrInvalidUserListCc[i].value);
      }
    }
    this.selectedDistInvalidUserCc = arrEmail.join();
  }
  getDistInvalidUserCc(distUser) {
    if (!distUser.isSelected) {
      distUser.isSelected = true
    } else {
      distUser.isSelected = false
    }
    this.selectDqrInvalidEmailCc();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  editReconSetting(brandId) {
    this.dataService.getReconSetupDetails(brandId).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      // console.log('editReconSetting', resJSON)
      if (resJSON.messageCode == '1') {
        if (resJSON.message == 'Success') {
          this.isEditConfigLoader = false;
        } else {
          this.isEditConfigLoader = true;
          this.arrConfigEdit = [];
          this.reconGeneralDetail = [];
          this.fileConfigDetail = [];
          this.folderConfigDetail = [];
          this.dqrConfigModel = [];
          this.reconAlertDetails = [];
          this.configSetting = [];
          this.progConfigDetails = [];
          this.reconReportDetails = [];
          this.uatSetting = [];
          this.apiCredential = [];
          this.ftpCredential = [];
          this.sqlCredential = [];
          this.purgeDetails = [];
          this.arrDqrUserListTo = [];
          this.arrDqrUserListCc = [];
          this.arrSelectedSuccessUserListTo = [];
          this.arrSelectedSuccessUserListCc = [];
          this.selectedDistSuccessUserCc = '';
          this.selectedDistSuccessUserTo = '';
          this.selectedDqrEmailTo = '';
          this.selectedDqrEmailCc = '';
          this.arrSelectedMissingUserListTo = [];
          this.arrSelectedMissingUserListCc = [];
          this.selectedDistMissingUserCc = '';
          this.selectedDistMissingUserTo = '';

          this.arrSelectedInvalidUserListTo = [];
          this.arrSelectedInvalidUserListCc = [];
          this.selectedDistInvalidUserCc = '';
          this.selectedDistInvalidUserTo = '';
        }
        this.arrConfigEdit = resJSON.data;
        this.reconGeneralDetail = resJSON.data.reconGeneralDetail
        this.isPointOnMissingRedemption = resJSON.data.reconGeneralDetail.isPointOnMissingRedemption
        if (this.reconGeneralDetail.brandId) {
          this.newBrandId = this.reconGeneralDetail.brandId
        }
        this.fileConfigDetail = resJSON.data.fileConfigDetail
        this.folderConfigDetail = resJSON.data.folderConfigDetail
        this.dqrConfigModel = resJSON.data.dqrConfigModel
        this.reconAlertDetails = resJSON.data.reconAlertDetails
        if (resJSON.data.reconAlertDetails.toSuccessDistribution) {
          this.arrDqrSuccessUserListTo = resJSON.data.reconAlertDetails.toSuccessDistribution
          this.selectDqrSuccessEmailTo();
        }
        if (resJSON.data.reconAlertDetails.ccSuccessDistribution) {
          this.arrDqrSuccessUserListCc = resJSON.data.reconAlertDetails.ccSuccessDistribution
          this.selectDqrSuccessEmailCc();
        }

        if (resJSON.data.reconAlertDetails.toMissingDistribution) {
          this.arrDqrMissingUserListTo = resJSON.data.reconAlertDetails.toMissingDistribution
          this.selectDqrMissingEmailTo();
        }
        if (resJSON.data.reconAlertDetails.ccMissingDistribution) {
          this.arrDqrMissingUserListCc = resJSON.data.reconAlertDetails.ccMissingDistribution
          this.selectDqrMissingEmailCc();
        }
        if (resJSON.data.reconAlertDetails.toInvalidDistribution) {
          this.arrDqrInvalidUserListTo = resJSON.data.reconAlertDetails.toInvalidDistribution
          this.selectDqrInvalidEmailTo();
        }
        if (resJSON.data.reconAlertDetails.ccInvalidDistribution) {
          this.arrDqrInvalidUserListCc = resJSON.data.reconAlertDetails.ccInvalidDistribution
          this.selectDqrInvalidEmailCc();
        }
        this.configSetting = resJSON.data.configSetting
        this.progConfigDetails = resJSON.data.configSetting.progConfigDetails
        this.reconReportDetails = resJSON.data.reconReportDetails
        this.uatSetting = resJSON.data.configSetting.uatSetting
        this.apiCredential = resJSON.data.configSetting.apiCredential
        this.ftpCredential = resJSON.data.configSetting.ftpCredential
        this.sqlCredential = resJSON.data.configSetting.connectionDetail
        this.purgeDetails = resJSON.data.configSetting.purgeDetails
        if (resJSON.data.dqrConfigModel.toEmail) {
          this.arrDqrUserListTo = resJSON.data.dqrConfigModel.toEmail
          this.selectDqrEmailTo();
        }
        if (resJSON.data.dqrConfigModel.ccEmail) {
          this.arrDqrUserListCc = resJSON.data.dqrConfigModel.ccEmail
          this.selectDqrEmailCc();
        }
        if (this.reconAlertDetails.isSuccess) {
          this.successAlert = true;
        } else {
          this.successAlert = false;
        }
        if (this.reconAlertDetails.isMissing) {
          this.missingAlert = true;
        } else {
          this.missingAlert = false;
        }
        if (this.reconAlertDetails.isInvalid) {
          this.invalidAlert = true;
        } else {
          this.invalidAlert = false;
        }
      } else {
        this.internalError = true;
        this.isEditConfigLoader = true;
        this.arrConfigEdit = [];
        this.reconGeneralDetail = [];
        this.fileConfigDetail = [];
        this.folderConfigDetail = [];
        this.dqrConfigModel = [];
        this.reconAlertDetails = [];
        this.configSetting = [];
        this.progConfigDetails = [];
        this.reconReportDetails = [];
        this.uatSetting = [];
        this.apiCredential = [];
        this.ftpCredential = [];
        this.sqlCredential = [];
        this.purgeDetails = [];
        this.arrDqrUserListTo = [];
        this.arrDqrUserListCc = [];
        this.arrSelectedSuccessUserListTo = [];
        this.arrSelectedSuccessUserListCc = [];
        this.selectedDistSuccessUserCc = '';
        this.selectedDistSuccessUserTo = '';
        this.selectedDqrEmailTo = '';
        this.selectedDqrEmailCc = '';
        this.arrSelectedMissingUserListTo = [];
        this.arrSelectedMissingUserListCc = [];
        this.selectedDistMissingUserCc = '';
        this.selectedDistMissingUserTo = '';

        this.arrSelectedInvalidUserListTo = [];
        this.arrSelectedInvalidUserListCc = [];
        this.selectedDistInvalidUserCc = '';
        this.selectedDistInvalidUserTo = '';
      }
    });
  }
  createNewConfig(type, program) {
    //  console.log("edit")
    // console.log('type ,program,reconGeneralDetail', type, program.isActive, this.reconGeneralDetail);
    this.isActiveProgram = program.isActive;
    // console.log('program active', this.isActiveProgram)

    this.isbrandsTable = false;
    this.newBrandId = '';
    this.isCreateConfig = true;
    if (program.length != 0) {
      // console.log('if createnewconfig');
      this.reconGeneralDetail = program;
      this.isEditConfigLoader = true;
      this.isEditConfig = true;
      this.editReconSetting(program.brandId);
    } else {

      this.isEditConfigLoader = false;
      this.isEditConfig = false;
      this.arrConfigEdit = [];
      this.reconGeneralDetail = [];
      this.fileConfigDetail = [];
      this.folderConfigDetail = [];
      this.dqrConfigModel = [];
      this.reconAlertDetails = [];
      this.configSetting = [];
      this.progConfigDetails = [];
      this.reconReportDetails = [];
      this.uatSetting = [];
      this.apiCredential = [];
      this.ftpCredential = [];
      this.sqlCredential = [];
      this.purgeDetails = [];
      this.arrDqrUserListTo = [];
      this.arrDqrUserListCc = [];
      this.arrSelectedSuccessUserListTo = [];
      this.arrSelectedSuccessUserListCc = [];
      this.selectedDistSuccessUserCc = '';
      this.selectedDistSuccessUserTo = '';
      this.selectedDqrEmailTo = '';
      this.selectedDqrEmailCc = '';
      this.arrSelectedMissingUserListTo = [];
      this.arrSelectedMissingUserListCc = [];
      this.selectedDistMissingUserCc = '';
      this.selectedDistMissingUserTo = '';

      this.arrSelectedInvalidUserListTo = [];
      this.arrSelectedInvalidUserListCc = [];
      this.selectedDistInvalidUserCc = '';
      this.selectedDistInvalidUserTo = '';
      this.isPointOnMissingRedemption = true;
      // console.log('else createnewconfig',this.reconGeneralDetail);
    }
  }

  openValidateSection() {
    this.openValidateSec = true;
  }
  backButton() {
    this.openValidateSec = false;
    this.displayFileRes = false;
    this.displayFileError = false;
    this.displayFileData = false;
  }
  
  selectFileType(fileType) {

    if (fileType == '1') {
      this.fileTypeSelect = 'standard';
    }
    if (fileType == '2') {
      this.fileTypeSelect = 'gsl';
    }
    if (fileType == '3') {
      this.fileTypeSelect = 'ecomm';
    }

  }

  handleFile1Input(files: FileList) {
    this.formData.append(`request1`, files.item(0));
    this.file1 = true;

  }
  handleFile2Input(files: FileList) {
    this.formData.append(`request1`, files.item(0));
    this.file2 = true;
  }

  validateFile() {
    this.displayFileRes = false;
    this.displayFileError = false;
    this.displayFileData = false;

    if (this.fileTypeSelect === "") {
      alert("Please Select Program")
    }
    else if (!this.file1) {
      alert("Please Select File1");
    }
    else if (!this.file2) {
      alert("Please Select File2");
    }
    else {
      this.loadingData = true;
      this.dataService.RecondashboardFileUpload(this.fileTypeSelect, this.formData).subscribe((res: Response) => {
        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        this.formData.delete('request1');
        this.fileTypeSelect = "";
        $('#file1').val('');
        $('#file2').val('');
        $('#FileTypeSelect').val('');
        if (resJSON.responseCode == '200') {

          this.loadingData = false;
          this.displayFileRes = true;
          this.fileUploadResponce = resJSON.message;
          // this.reconDataList =resJSON.recondataList
        }
        else if (resJSON.responseCode == '500') {
          this.fileTypeSelect = "";
          this.loadingData = false;
          this.displayFileError = true
          this.fileUploadResponceError = resJSON.message.split(';');
          this.fileUploadResponceError.splice(6,1);
          console.log('this.fileUploadResponceError',this.fileUploadResponceError)
          // this.reconDataList =resJSON.recondataList
        }
        else if (resJSON.responseCode == '501') {
          this.fileTypeSelect = "";
          this.loadingData = false;
          this.displayFileRes = true;
          this.displayFileData = true;
          this.fileUploadResponce = resJSON.message;
          this.reconDataList = resJSON.recondataList
        }
        else {
          this.loadingData = false;
        }
      })
    }


  }








  viewAllData(id, product) {
    // console.log("id,product config",id,product)
    this.dataService.getReconSetupDetails(parseInt(id)).subscribe((res: Response) => {

      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);

      this.reconGeneralDetails = resJSON.data.reconGeneralDetail;
      this.reconFileDetails = resJSON.data.fileConfigDetail;
      this.reconFolderDetails = resJSON.data.folderConfigDetail;
      this.reconAlertsDetails = resJSON.data.reconAlertDetails;
      this.reconReportsDetails = resJSON.data.reconReportDetails;
      this.reconSeatingsDetails = resJSON.data.configSetting;
      // console.log(" this.reconFolderDetails",  this.reconFolderDetails)
    });

  }
  activeProgram(brandId, isActive, isEnable, isDeleted) {
    this.dataService.EditReconBasicDetailsByBrandID(brandId, isActive, isEnable, isDeleted).subscribe((res: Response) => {
      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      if (resJSON.messageCode == '1') {
        alert(resJSON.message)
      } else {
        alert(resJSON.message)
      }
    });
  }
  openDqrUserModalTo() {
    $("#dqrUserModalTo").modal('show');
  }
  openDqrUserModalCc() {
    $("#dqrUserModalCc").modal('show');
  }
  openDqrUserSuccessModalTo() {
    $("#dqrUserSuccessModalTo").modal('show');
  }
  openDqrUserSuccessModalCc() {
    $("#dqrUserSuccessModalCc").modal('show');
  }
  openDqrUserMissingModalTo() {
    $("#dqrUserMissingModalTo").modal('show');
  }
  openDqrUserMissingModalCc() {
    $("#dqrUserMissingModalCc").modal('show');
  }
  openDqrUserInvalidModalTo() {
    $("#dqrUserInvalidModalTo").modal('show');
  }
  openDqrUserInvalidModalCc() {
    $("#dqrUserInvalidModalCc").modal('show');
  }
  addDqrUserTo(dqrUserObj: NgForm) {
    dqrUserObj.value.isSelected = true;
    var arrUser = [];
    arrUser.push(dqrUserObj.value);
    this.arrDqrUserListTo = arrUser.concat(this.arrDqrUserListTo);
    dqrUserObj.resetForm();
    this.selectDqrEmailTo();
  }
  addDqrUserCc(dqrUserObj: NgForm) {
    dqrUserObj.value.isSelected = true;
    var arrUser = [];
    arrUser.push(dqrUserObj.value);
    this.arrDqrUserListCc = arrUser.concat(this.arrDqrUserListCc);
    dqrUserObj.resetForm();
    this.selectDqrEmailCc();
  }
  addDqrSuccessUserTo(dqrUserSuccessObjTo: NgForm) {
    dqrUserSuccessObjTo.value.isSelected = true;
    var arrUser = [];
    arrUser.push(dqrUserSuccessObjTo.value);
    this.arrDqrSuccessUserListTo = arrUser.concat(this.arrDqrSuccessUserListTo);
    dqrUserSuccessObjTo.resetForm();
    this.selectDqrSuccessEmailTo();
  }
  addDqrSuccessUserCc(dqrUserSuccessObj: NgForm) {
    dqrUserSuccessObj.value.isSelected = true;
    var arrUser = [];
    arrUser.push(dqrUserSuccessObj.value);
    this.arrDqrSuccessUserListCc = arrUser.concat(this.arrDqrSuccessUserListCc);
    dqrUserSuccessObj.resetForm();
    this.selectDqrSuccessEmailCc();
  }
  addDqrMissingUserTo(dqrUserMissingObjTo: NgForm) {
    dqrUserMissingObjTo.value.isSelected = true;
    var arrUser = [];
    arrUser.push(dqrUserMissingObjTo.value);
    this.arrDqrMissingUserListTo = arrUser.concat(this.arrDqrMissingUserListTo);
    dqrUserMissingObjTo.resetForm();
    this.selectDqrMissingEmailTo();
  }
  addDqrMissingUserCc(dqrUserMissingObj: NgForm) {
    dqrUserMissingObj.value.isSelected = true;
    var arrUser = [];
    arrUser.push(dqrUserMissingObj.value);
    this.arrDqrMissingUserListCc = arrUser.concat(this.arrDqrMissingUserListCc);
    dqrUserMissingObj.resetForm();
    this.selectDqrMissingEmailCc();
  }
  addDqrInvalidUserTo(dqrUserInvalidObjTo: NgForm) {
    dqrUserInvalidObjTo.value.isSelected = true;
    var arrUser = [];
    arrUser.push(dqrUserInvalidObjTo.value);
    this.arrDqrInvalidUserListTo = arrUser.concat(this.arrDqrInvalidUserListTo);
    dqrUserInvalidObjTo.resetForm();
    this.selectDqrInvalidEmailTo();
  }
  addDqrInvalidUserCc(dqrUserInvalidObj: NgForm) {
    dqrUserInvalidObj.value.isSelected = true;
    var arrUser = [];
    arrUser.push(dqrUserInvalidObj.value);
    this.arrDqrInvalidUserListCc = arrUser.concat(this.arrDqrInvalidUserListCc);
    dqrUserInvalidObj.resetForm();
    this.selectDqrInvalidEmailCc();
  }
  isSuccessAlert(isSuccess) {
    this.successAlert = isSuccess;
  }
  isMissingAlert(isMissing) {
    this.missingAlert = isMissing;
  }
  isInvalidAlert(isInvalid) {
    this.invalidAlert = isInvalid;
  }
  closeConfig() {
    this.getbrands();
    this.newBrandId = '';
    this.isCreateConfig = false;
    this.tabId = '1';
  }

  calculateTabId() {
    if (this.tabId != '8') {
      this.getbrands();
      this.tabId = parseInt(this.tabId) + 1;
    } else {
      this.closeConfig();
    }
  }
  getConfigObject(configObject: NgForm): void {
    if (this.tabId == '1') {
      this.arrConfigEdit['reconGeneralDetail'] = configObject.value
      this.dataService.SaveGeneralSetting(this.arrConfigEdit).subscribe((res: Response) => {
        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        if (resJSON.messageCode == '1') {
          this.newBrandId = resJSON.brandID
          this.editReconSetting(resJSON.brandID);
          // console.log("brand id", resJSON.brandID);
          alert("Successfully saved.")
          this.calculateTabId();
        } else {
          alert(resJSON.message)
        }
      });

    } else if (this.tabId == '2') {
      if (!configObject.value.brandId) {
        configObject.value.brandId = this.newBrandId
      }
      this.arrConfigEdit['fileConfigDetail'] = configObject.value
      this.dataService.SaveFileSetting(this.arrConfigEdit).subscribe((res: Response) => {
        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        if (resJSON.messageCode == '1') {
          alert("Successfully saved.")
          this.calculateTabId();
        } else {
          alert(resJSON.message)
        }
      });

    } else if (this.tabId == '3') {
      this.arrConfigEdit['folderConfigDetail'] = configObject.value
      this.dataService.SaveFolderSetting(this.arrConfigEdit).subscribe((res: Response) => {
        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        if (resJSON.messageCode == '1') {
          alert("Successfully saved.")
          this.calculateTabId();
        } else {
          alert(resJSON.message)
        }
      });

    } else if (this.tabId == '4') {
      configObject.value['toEmail'] = this.arrselectedDqrEmailTo
      configObject.value['ccEmail'] = this.arrselectedDqrEmailCc
      this.arrConfigEdit['dqrConfigModel'] = configObject.value
      this.dataService.SaveDQRSettingDetails(this.arrConfigEdit).subscribe((res: Response) => {
        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        if (resJSON.messageCode == '1') {
          alert("Successfully saved.")
          this.calculateTabId();
        } else {
          alert(resJSON.message)
        }
      });

    } else if (this.tabId == '5') {
      configObject.value['toSuccessDistribution'] = this.arrSelectedSuccessUserListTo
      configObject.value['ccSuccessDistribution'] = this.arrSelectedSuccessUserListCc
      configObject.value['toMissingDistribution'] = this.arrSelectedMissingUserListTo
      configObject.value['ccMissingDistribution'] = this.arrSelectedMissingUserListCc
      configObject.value['toInvalidDistribution'] = this.arrSelectedInvalidUserListTo
      configObject.value['ccInvalidDistribution'] = this.arrSelectedInvalidUserListCc
      this.arrConfigEdit['reconAlertDetails'] = configObject.value
      this.dataService.SaveReconAlertSetting(this.arrConfigEdit).subscribe((res: Response) => {
        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        if (resJSON.messageCode == '1') {
          alert("Successfully saved.")
          this.calculateTabId();
        } else {
          alert(resJSON.message)
        }
      });

    } else if (this.tabId == '6') {
      this.arrConfigEdit['reconReportDetails'] = configObject.value
      this.dataService.SaveReconReportSetting(this.arrConfigEdit).subscribe((res: Response) => {
        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        if (resJSON.messageCode == '1') {
          alert("Successfully saved.")
          this.calculateTabId();
        } else {
          alert(resJSON.message)
        }
      });

    }

    else if (this.tabId == '7') {
      this.arrConfigEdit['configSetting'] = configObject.value
      this.dataService.SaveConfigSetting(this.arrConfigEdit).subscribe((res: Response) => {
        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        if (resJSON.messageCode == '1') {
          alert("Successfully saved.")
          this.calculateTabId();
        } else {
          alert(resJSON.message)
        }
      });
      this.dataService.getReconSetupDetails(parseInt(this.newBrandId)).subscribe((res: Response) => {

        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        // console.log("brand detail ", resJSON.data.reconGeneralDetail)
        this.reconGeneralDetails = resJSON.data.reconGeneralDetail;
        this.reconFileDetails = resJSON.data.fileConfigDetail;
        this.reconFolderDetails = resJSON.data.folderConfigDetail;
        this.reconAlertsDetails = resJSON.data.reconAlertDetails;
        this.reconReportsDetails = resJSON.data.reconReportDetails;
        this.reconSeatingsDetails = resJSON.data.configSetting;
      });
    }

    else if (this.tabId == '8') {

      // console.log("this.tabId ", this.tabId)


      this.dataService.getReconSetupDetails(parseInt(this.newBrandId)).subscribe((res: Response) => {

        const resSTR = JSON.stringify(res);
        const resJSON = JSON.parse(resSTR);
        // console.log("brand detail ", resJSON.data.reconGeneralDetail)
        this.reconGeneralDetails = resJSON.data.reconGeneralDetail;
        this.reconFileDetails = resJSON.data.fileConfigDetail;
        this.reconFolderDetails = resJSON.data.folderConfigDetail;
        this.reconAlertsDetails = resJSON.data.reconAlertDetails;
        this.reconReportsDetails = resJSON.data.reconReportDetails;
        this.reconSeatingsDetails = resJSON.data.configSetting;
      });

    }

  }

  getDetailById() {


    this.dataService.getReconSetupDetails(parseInt(this.newBrandId)).subscribe((res: Response) => {

      const resSTR = JSON.stringify(res);
      const resJSON = JSON.parse(resSTR);
      // console.log("brand detail ", resJSON.data.reconGeneralDetail)
      this.reconGeneralDetails = resJSON.data.reconGeneralDetail;
      this.reconFileDetails = resJSON.data.fileConfigDetail;
      this.reconFolderDetails = resJSON.data.folderConfigDetail;
      this.reconAlertsDetails = resJSON.data.reconAlertDetails;
      this.reconReportsDetails = resJSON.data.reconReportDetails;
      this.reconSeatingsDetails = resJSON.data.configSetting;
    });



  }




  removeDqrEmailTo(index) {
    this.arrDqrUserListTo.splice(index, 1);
    this.selectDqrEmailTo();
  }
  removeDqrEmailCc(index) {
    this.arrDqrUserListCc.splice(index, 1);
    this.selectDqrEmailCc();
  }
  removeDqrSuccessEmailTo(index) {
    this.arrDqrSuccessUserListTo.splice(index, 1);
    this.selectDqrSuccessEmailTo();
  }
  removeDqrSuccessEmailCc(index) {
    this.arrDqrSuccessUserListCc.splice(index, 1);
    this.selectDqrSuccessEmailCc();
  }
  removeDqrMissingEmailTo(index) {
    this.arrDqrMissingUserListTo.splice(index, 1);
    this.selectDqrMissingEmailTo();
  }
  removeDqrMissingEmailCc(index) {
    this.arrDqrMissingUserListCc.splice(index, 1);
    this.selectDqrMissingEmailCc();
  }
  removeDqrInvalidEmailTo(index) {
    this.arrDqrInvalidUserListTo.splice(index, 1);
    this.selectDqrInvalidEmailTo();
  }
  removeDqrInvalidEmailCc(index) {
    this.arrDqrInvalidUserListCc.splice(index, 1);
    this.selectDqrInvalidEmailCc();
  }
}
