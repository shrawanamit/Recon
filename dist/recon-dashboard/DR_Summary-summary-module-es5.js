function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DR_Summary-summary-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/DR_Summary/summary/summary.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/DR_Summary/summary/summary.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDR_SummarySummarySummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- card-panel styles -->\r\n<section class=\"pannel-section\">\r\n    <div class=\"reconLoadingData\" *ngIf=\"loadingData\">\r\n        <button class=\"btn btn-dark\">\r\n            <span class=\"text-light spinner-border spinner-border-sm\"></span>\r\n            Loading! Please wait ...\r\n        </button>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"page_content_dash\">\r\n            <div class=\"filter_input_wrap\" *ngIf=\"!isClickedSearch\">\r\n                <form #searchFilter=\"ngForm\" name=\"form\"\r\n                    (ngSubmit)=\"searchFilter.form.valid && getSearchData(searchFilter);\" novalidate>\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-2\">\r\n                            <label>Select Report Type</label>\r\n                            <select name=\"ReportType\" [(ngModel)]=\"ReportType\"\r\n                                (ngModelChange)=\"SelectReportType(ReportType)\" required #reporttype=\"ngModel\">\r\n                                <option [ngValue]=\"1\">Summary Report</option>\r\n                                <option [ngValue]=\"2\">Store Wise Summary Report</option>\r\n                            </select>\r\n                            <div\r\n                                *ngIf=\"searchFilter.submitted || reporttype.invalid && (reporttype.dirty || reporttype.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"reporttype.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Please Select Report Type.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group col-2\">\r\n                            <label>Select Program</label>\r\n                            <div class=\"selected_text\" (click)=\"isProgramClicked=!isProgramClicked\">\r\n                                {{selectedProgram}}\r\n                                <input type=\"hidden\" name=\"tenantCode\" [(ngModel)]=\"selectedProgram\"\r\n                                    [value]=\"selectedProgram\" required #selectedProg=\"ngModel\">\r\n                            </div>\r\n                            <div\r\n                                *ngIf=\"searchFilter.submitted || selectedProg.invalid && (selectedProg.dirty || selectedProg.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"selectedProg.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Please Select Program.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"dropdown_multiselect\" *ngIf=\"isProgramClicked\">\r\n                                <ul>\r\n                                    <li *ngFor=\"let program of tenantCode;let i = index\">\r\n                                        <div class=\"checkbox_wrap\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"radio\" id=\"{{program.tenantID}}\" name=\"brandName\"\r\n                                                    (click)=\"getselectedProgram(program,i)\"\r\n                                                    [checked]=\"program.isSelect\">\r\n                                                <label for=\"{{program.tenantID}}\">{{program.tenantCode}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n                                </ul>\r\n                                <!-- <div class=\"text-center see_all\" (click)=\"seeAllPrograms()\">\r\n                                    <p>See All Program</p>\r\n                                </div> -->\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group col-2\">\r\n                            <label>Filter By</label>\r\n                            <select name=\"SettlementSatus\" [(ngModel)]=\"SettlementSatus\"\r\n                                (ngModelChange)=\"changeSettData(SettlementSatus)\" required #settlementSatus=\"ngModel\">\r\n                                <option [ngValue]=\"1\">Date Range</option>\r\n                                <option [ngValue]=\"2\">Month</option>\r\n                            </select>\r\n                            <div\r\n                                *ngIf=\"searchFilter.submitted || settlementSatus.invalid && (settlementSatus.dirty || settlementSatus.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"settlementSatus.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Please Select Settelment Data.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group col-2\" *ngIf=\"isMonthSelect\">\r\n                            <label>Select Month</label>\r\n                            <input [(ngModel)]=\"requetDate\" autocomplete=\"off\" name=\"requetDate\" bsDatepicker\r\n                                [bsConfig]=\"{dateInputFormat: 'MM/YYYY'}\" (onShown)=\"onOpenCalendar($event)\" required>\r\n                            <img class=\"monthImg\" src=\"assets/images/calendar.svg\" (onShown)=\"onOpenCalendar($event)\">\r\n                            <!-- #fromDate=\"ngModel\" -->\r\n                        </div>\r\n                        <div class=\"form-group col-3 date\" *ngIf=\"isDateSelect\">\r\n                            <label>Date</label>\r\n                            <!-- <input type=\"text\" id=\"daterange\" value=\"{{editDate}}\" />  -->\r\n                            <ngx-mat-drp (selectedDateRangeChanged)=\"updateRange($event)\" [options]=\"options\"\r\n                                #dateRangePicker></ngx-mat-drp>\r\n                            <img class=\"dateImg\" src=\"/assets/images/calendar.svg\">\r\n                            <!-- <input id=\"searhDate\" type=\"date\" (change)=\"Filters($event)\" [value]=\"newDate\" /> -->\r\n                        </div>\r\n\r\n                        <div class=\"form-group col-2 action_btn\">\r\n                            <button type=\"submit\">\r\n                                <span *ngIf=\"searchInProgress && isLoading\"\r\n                                    class=\"text-light spinner-border spinner-border-sm\" role=\"status\"\r\n                                    aria-hidden=\"true\"></span>\r\n                                Search</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</section>\r\n\r\n\r\n<div class=\"container\">\r\n    <!-- <div class=\"reconLoadingData\" *ngIf=\"loadingData\">\r\n            <button class=\"btn btn-dark\">\r\n                <span class=\"text-light spinner-border spinner-border-sm\"></span>\r\n                Loading! Please wait ...\r\n            </button>\r\n        </div> -->\r\n    <div *ngIf=\"summaryData\">\r\n        <div class=\"box_wrap\" *ngFor=\"let data of DrSummary;let i = index\">\r\n\r\n            <div class=\"heading_wrap\">\r\n                <div class=\"heading_container\">\r\n                    <span class=\"heading\">{{data.tenantCode}} Summary</span>\r\n                    <span class=\"heading\" *ngIf=\"isMonthSelect\">({{requestDate | date }})</span>\r\n                    <span class=\"heading\" *ngIf=\"isDateSelect\">({{startDate | date}} - {{endDate | date}})</span>\r\n                    <!-- <span class=\"heading\">Hit Ratio {{data.hitRatio}}%</span> -->\r\n                </div>\r\n                <!-- <div class=\"download_btn_wrap\">\r\n                <small class=\"icon-info-tooltip\" data-tip=\"Download bill summary\" tabindex=\"2\">\r\n                    <img class=\"img_refresh\" src=\"/assets/images/downloadFileNew.png\" (click)=\"downloadCSV()\">\r\n                </small>\r\n            </div> -->\r\n            </div>\r\n\r\n            <div class=\"container_new\">\r\n                <div class=\"level-1 rectangle\">Total Transaction - {{data.totalBills}},\r\n                    <span class=\"hit-ratio\">Hit Ratio-{{data.hitRatio}}%</span>\r\n                    <div class=\"download_btn_wrap\">\r\n                        <small class=\"icon-info-tooltip\" data-tip=\"Download bill summary\" tabindex=\"2\">\r\n                            <img class=\"img_refresh\" src=\"/assets/images/downloadFileNew.png\"\r\n                                (click)=\"downloadCSV('All')\">\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n                <ol class=\"level-2-wrapper\">\r\n                    <li>\r\n                        <h2 class=\"level-2 rectangle\">Non-Print Transaction - {{data.nonPrint}}\r\n                            <div class=\"download_btn_wrap\">\r\n                                <small class=\"icon-info-tooltip\" data-tip=\"Download bill summary\" tabindex=\"2\">\r\n                                    <img class=\"img_refresh\" src=\"/assets/images/downloadFileNew.png\"\r\n                                        (click)=\"downloadCSV('NonPrint')\">\r\n                                </small>\r\n                            </div>\r\n                        </h2>\r\n                        <ol class=\"level-3-wrapper\">\r\n                            <li>\r\n                                <h3 class=\"level-3 rectangle\">Success - {{data.successNonPrint}}\r\n                                    <div class=\"download_btn_wrap\">\r\n                                        <small class=\"icon-info-tooltip\" data-tip=\"Download bill summary\" tabindex=\"2\">\r\n                                            <img class=\"img_refresh\" src=\"/assets/images/downloadFileNew.png\"\r\n                                                (click)=\"downloadCSV('S_NonPrint')\">\r\n                                        </small>\r\n                                    </div><br />\r\n                                    <span> SMS Ratio - {{SMSSentRatio}}%</span>\r\n\r\n                                </h3>\r\n                            </li>\r\n                            <li>\r\n                                <h3 class=\"level-3 rectangle\">Fail - {{data.failNonPrint}}\r\n                                    <div class=\"download_btn_wrap\">\r\n                                        <small class=\"icon-info-tooltip\" data-tip=\"Download bill summary\" tabindex=\"2\">\r\n                                            <img class=\"img_refresh\" src=\"/assets/images/downloadFileNew.png\"\r\n                                                (click)=\"downloadCSV('F_NonPrint')\">\r\n                                        </small>\r\n                                    </div>\r\n                                </h3>\r\n                            </li>\r\n                        </ol>\r\n                    </li>\r\n                    <li class=\"level2\">\r\n                        <h2 class=\"level-2 rectangle\">Print Transaction - {{data.print}}\r\n                            <div class=\"download_btn_wrap\">\r\n                                <small class=\"icon-info-tooltip\" data-tip=\"Download bill summary\" tabindex=\"2\">\r\n                                    <img class=\"img_refresh\" src=\"/assets/images/downloadFileNew.png\"\r\n                                        (click)=\"downloadCSV('Print')\">\r\n                                </small>\r\n                            </div>\r\n                        </h2>\r\n                        <ol class=\"level-3-wrapper\">\r\n                            <li>\r\n                                <h3 class=\"level-3 rectangle\">Success - {{data.successPrint}}\r\n                                    <div class=\"download_btn_wrap\">\r\n                                        <small class=\"icon-info-tooltip\" data-tip=\"Download bill summary\" tabindex=\"2\">\r\n                                            <img class=\"img_refresh\" src=\"/assets/images/downloadFileNew.png\"\r\n                                                (click)=\"downloadCSV('S_Print')\">\r\n                                        </small>\r\n                                    </div>\r\n                                </h3>\r\n                            </li>\r\n                            <li>\r\n                                <h3 class=\"level-3 rectangle\">Fail - {{data.failPrint}}\r\n                                    <div class=\"download_btn_wrap\">\r\n                                        <small class=\"icon-info-tooltip\" data-tip=\"Download bill summary\" tabindex=\"2\">\r\n                                            <img class=\"img_refresh\" src=\"/assets/images/downloadFileNew.png\"\r\n                                                (click)=\"downloadCSV('F_Print')\">\r\n                                        </small>\r\n                                    </div>\r\n                                </h3>\r\n\r\n                            </li>\r\n                        </ol>\r\n                    </li>\r\n                </ol>\r\n                <ol class=\"level-4-wrapper\">\r\n                    <li>\r\n                        <h3 class=\"level-4 rectangle\">SMS Communication - {{data.sms}}</h3>\r\n                    </li>\r\n                    <li>\r\n                        <h3 class=\"level-4 rectangle\">WhatsApp Communication - {{data.whatsAPP}}</h3>\r\n                    </li>\r\n                    <li>\r\n                        <h3 class=\"level-4 rectangle\">Email Communication - {{data.email}}</h3>\r\n                    </li>\r\n                    <li>\r\n                        <h3 class=\"level-4 rectangle\">Reciept Email Request - {{data.emailThruReceipt}}</h3>\r\n                    </li>\r\n                </ol>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"store_wise\"  *ngIf=\"storeWiseSummary\">\r\n\r\n        <div class=\"table_heading_wrap\">\r\n            <h3>Store Wise Summary</h3>\r\n            <div>\r\n                <small class=\"icon-info-tooltip\" data-tip=\"Download Store Wise summary\" tabindex=\"2\">\r\n                    <img class=\"img_refresh\" src=\"/assets/images/downloadTable.svg\" (click)=\"downloadcsvOptionsStoreWise()\">\r\n                </small>\r\n            </div>\r\n            <!-- <button (click)=\"downloadCSV()\" class=\"btndownload\">Download table</button> -->\r\n        </div>\r\n        <div class='dr-table'>\r\n            <table>\r\n                <tbody>\r\n                    <tr class=\"table-header\">\r\n                        <th>#S.No</th>\r\n                        <th>#Store_Code</th>\r\n                        <th>#Total_Bills</th>\r\n                        <th>#Success_Bills</th>\r\n                        <th>#Failed_Bills</th>\r\n                        <th>#Readcount</th>\r\n                        <th>#Open_Percentage</th>\r\n\r\n                    </tr>\r\n                    <tr *ngFor=\"let datas of storeWiseSummaryData;let i = index\">\r\n                        <th>{{i+1}}</th>\r\n                        <th>{{datas.storecode}}</th>\r\n                        <th>{{datas.totalBills}}</th>\r\n                        <th>{{datas.successBills}}</th>\r\n                        <th>{{datas.failedBills}}</th>\r\n                        <th>{{datas.readcount}}</th>\r\n                        <th>{{datas.openPercentage}}%</th>\r\n\r\n\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"tableContainer\" *ngIf=\"loadingTable\">\r\n        <div class=\"heading_wrap\">\r\n            <div class=\"heading_container\">\r\n                <h4 class=\"table_heading\" *ngIf=\"MonthWiseSummaryData.length>0\">Bill Details #{{selectedProgram}}\r\n                    ({{requestDate | date}}) -&nbsp;\r\n                    <h4 *ngIf=\"!isFailed\" class=\"table_heading_count\" (click)=\"closeTooltip()\">\r\n                        Fail {{MonthWiseSummaryData.length}}</h4>\r\n                </h4>\r\n                <!-- <div *ngIf=\"isTooltipOpen\" class=\"bottom_arrow\"></div> -->\r\n                <div *ngIf=\"isTooltipOpen\" class=\"tool_tip\">\r\n                    <button type=\"button\" class=\"close close_tooltip\" (click)=\"closeTooltipCross()\">&times;</button>\r\n                    <div class='dr-table'>\r\n                        <table>\r\n                            <tbody>\r\n                                <tr class=\"table-header\">\r\n                                    <th>S.No</th>\r\n                                    <th>Error Message</th>\r\n                                    <th>Count</th>\r\n                                </tr>\r\n                                <tr *ngFor=\"let datas of toolTipFailValue;let i = index\">\r\n                                    <th>{{i+1}}</th>\r\n                                    <th>{{datas.label}}</th>\r\n\r\n                                    <th (click)=\"getSummaryByFailedMsg(datas)\">\r\n                                        <span class=\"totalbill_wrap\">\r\n                                            {{datas.value}}\r\n                                        </span>\r\n                                    </th>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n\r\n                <div>\r\n                    <small class=\"icon-info-tooltip\" data-tip=\"Download Fail Bills\" tabindex=\"2\">\r\n                        <span class=\"img_download\">\r\n                            <img src=\"/assets/images/downloadTable.svg\" (click)=\"downloadFailBillSummary()\">\r\n                        </span>\r\n                    </small>\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"closeBtnContainer\">\r\n                <button type=\"button\" class=\"close\" (click)=\"backButton()\">&times;</button>\r\n            </div>\r\n        </div>\r\n        <div class='mt-2 dr-table'>\r\n            <table>\r\n                <tbody>\r\n                    <tr class=\"table-header\">\r\n                        <th>S.No</th>\r\n                        <!-- <th>Request Date</th> -->\r\n                        <th>Brand Name</th>\r\n                        <th>#Bill NO</th>\r\n                        <th>#Bill Date</th>\r\n                        <th>#Store Code</th>\r\n                        <th>#Customer&nbsp;Name</th>\r\n                        <th>#Mobile No</th>\r\n                        <!-- <th>#Email</th> -->\r\n                        <!-- <th>#Short URL</th>\r\n                            <th>#Base URL</th>\r\n                            <th>#Read&nbsp;Count</th> -->\r\n                        <th>#Status</th>\r\n                        <th>#Error Message</th>\r\n                        <!-- <th>View Logs</th> -->\r\n                    </tr>\r\n                    <tr *ngFor=\"let datas of MonthWiseSummaryData;let i = index\">\r\n                        <th>{{i+1}}</th>\r\n                        <!-- <th>{{datas.requetDate | date}}</th> -->\r\n                        <th>{{datas.progCode}}</th>\r\n                        <th>\r\n\r\n                            {{datas.billNo}}\r\n\r\n                            <!-- <label class=\"resend\" *ngIf=totalIsClick.includes(i)>see summary below</label> -->\r\n                        </th>\r\n                        <th>\r\n\r\n                            {{datas.billDate | date}}\r\n\r\n                        </th>\r\n                        <th>\r\n\r\n                            {{datas.storecode}}\r\n                        </th>\r\n                        <th>\r\n\r\n                            {{datas.customerName}}\r\n                        </th>\r\n                        <th>\r\n\r\n                            {{datas.mobileNo}}\r\n\r\n                        </th>\r\n                        <!-- <th>\r\n                                \r\n                                    {{datas.emailID}}\r\n                                \r\n                            </th> -->\r\n                        <!-- <th>\r\n                                <p class=\"totalbill_wrap wap_count_wrap\">\r\n                                    {{datas.shortURL}}\r\n                                </p>\r\n                            </th>\r\n                            <th>\r\n                                <p class=\"totalbill_wrap wap_count_wrap\">\r\n                                    {{datas.baseURL}}\r\n                                </p>\r\n                            </th>\r\n                            <th>\r\n                                <p class=\"totalbill_wrap wap_count_wrap\">\r\n                                    {{datas.readCount}}\r\n                                </p>\r\n                            </th> -->\r\n                        <th>\r\n\r\n                            {{datas.status}}\r\n\r\n                        </th>\r\n                        <th>\r\n\r\n                            {{datas.errorMessage}}\r\n\r\n                        </th>\r\n\r\n                    </tr>\r\n\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./src/app/DR_Summary/summary-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/DR_Summary/summary-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: summaryRoutingModule */

  /***/
  function srcAppDR_SummarySummaryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "summaryRoutingModule", function () {
      return summaryRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./summary/summary.component */
    "./src/app/DR_Summary/summary/summary.component.ts");

    var routes = [{
      path: 'dr_reports',
      component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__["SummaryComponent"]
    }];

    var summaryRoutingModule = function summaryRoutingModule() {
      _classCallCheck(this, summaryRoutingModule);
    };

    summaryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], summaryRoutingModule);
    /***/
  },

  /***/
  "./src/app/DR_Summary/summary.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/DR_Summary/summary.module.ts ***!
    \**********************************************/

  /*! exports provided: summaryModule */

  /***/
  function srcAppDR_SummarySummaryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "summaryModule", function () {
      return summaryModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./summary/summary.component */
    "./src/app/DR_Summary/summary/summary.component.ts");
    /* harmony import */


    var _summary_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./summary-routing.module */
    "./src/app/DR_Summary/summary-routing.module.ts");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-show-hide-password */
    "./node_modules/ngx-show-hide-password/fesm2015/ngx-show-hide-password.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var ngx_mat_daterange_picker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-mat-daterange-picker */
    "./node_modules/ngx-mat-daterange-picker/esm2015/ngx-mat-daterange-picker.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ngx-bootstrap/utils */
    "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js"); // import { MatTooltipModule } from '@angular/material/tooltip';


    Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_51__["setTheme"])('bs4'); // or 'bs4'

    var summaryModule = function summaryModule() {
      _classCallCheck(this, summaryModule);
    };

    summaryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_summary_summary_component__WEBPACK_IMPORTED_MODULE_3__["SummaryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _summary_routing_module__WEBPACK_IMPORTED_MODULE_4__["summaryRoutingModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_7__["ShowHidePasswordModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_50__["BsDatepickerModule"].forRoot(), angular_datatables__WEBPACK_IMPORTED_MODULE_49__["DataTablesModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_48__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_47__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_46__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_45__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_44__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_43__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_42__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_41__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_40__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_39__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_38__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_36__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_35__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollingModule"], ngx_mat_daterange_picker__WEBPACK_IMPORTED_MODULE_11__["NgxMatDrpModule"]],
      exports: [_summary_summary_component__WEBPACK_IMPORTED_MODULE_3__["SummaryComponent"]],
      entryComponents: []
    })], summaryModule);
    /***/
  },

  /***/
  "./src/app/DR_Summary/summary/summary.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/DR_Summary/summary/summary.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDR_SummarySummarySummaryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* clearfix style */\nimg {\n  max-width: 100%;\n  height: auto;\n}\n/*== start of code for tooltips ==*/\n.mat-paginator {\n  display: block;\n  width: 100%;\n}\n.pannel-section .reconLoadingData {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.7);\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n}\n.pannel-section .reconLoadingData button {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 999;\n}\n.pannel-section .container .page_content_dash {\n  background: #ffffff;\n  margin: 20px auto;\n  padding: 10px;\n  border-radius: 5px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group {\n  margin-bottom: 25px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .text-danger {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n}\n@media (max-width: 991px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .text-danger {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .text-danger {\n    font-size: 14px;\n  }\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group label {\n  padding: 0px;\n  margin: 0px;\n  color: #9A9A9A;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  display: block;\n  margin-bottom: 5px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group label.disable {\n  cursor: not-allowed;\n}\n@media (max-width: 576px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group label {\n    font-size: 14px;\n  }\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group select,\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .selected_text {\n  -webkit-appearance: none;\n  -mos-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url('list.svg') right no-repeat;\n  background-position: right 0.7em top 50%, 0 0;\n  color: #4A4A4A;\n  display: inline-block;\n  padding: 5px;\n  outline: none;\n  box-shadow: none;\n  margin: 0 auto;\n  background-color: #f9f9f9;\n  font-size: 16px;\n  font-weight: 300;\n  min-width: 95px;\n  border: 1px solid #eeecec;\n  width: 100%;\n  line-height: 29px;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n@media (max-width: 576px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group select,\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .selected_text {\n    margin-bottom: 10px;\n  }\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input {\n  background: #f9f9f9;\n  outline: 0;\n  box-shadow: none;\n  border: 1px solid #eeecec;\n  padding: 5px;\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 300;\n  border-radius: 3px;\n  line-height: 29px;\n  margin: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-webkit-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-moz-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-ms-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-webkit-inner-spin-button, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .monthImg {\n  position: absolute;\n  right: 26px;\n  top: 37px;\n  z-index: 99;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dateImg {\n  position: absolute;\n  right: 46px;\n  top: 37px;\n  z-index: 99;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .selected_text {\n  height: 41px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n  padding-right: 25px;\n  cursor: pointer;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0.5px;\n  -moz-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0.5px;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #ffffff;\n  position: absolute;\n  width: 83%;\n  top: 70px;\n  z-index: 99;\n  height: 200px;\n  overflow-y: auto;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li {\n  padding: 10px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap {\n  position: relative;\n  width: inherit;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) {\n  position: absolute;\n  opacity: 0;\n  top: 5px;\n  z-index: 99;\n  cursor: pointer;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) + label {\n  position: relative;\n  padding-left: 28px;\n  cursor: pointer;\n  line-height: 20px;\n  display: inline-block;\n  color: #4A4A4A;\n  font-size: 14px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label:before, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) + label:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #4A4A4A;\n  border-radius: 100%;\n  background: #ffffff;\n  opacity: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label:after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background: #00B894;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) + label:after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background: #00B894;\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n  opacity: 0;\n  transform: scale(0);\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label:after {\n  opacity: 1;\n  transform: scale(1);\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap label {\n  width: 100%;\n  padding-left: 0 !important;\n  text-transform: capitalize;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap label:before {\n  left: 93% !important;\n  border: none !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap label:after {\n  left: 90% !important;\n  background: none !important;\n  border: none !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap .form-group {\n  margin-bottom: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap .form-group input[type=radio]:checked + label {\n  color: #00B894;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap .form-group input[type=radio]:checked + label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 3px !important;\n  right: 13px !important;\n  width: 7px !important;\n  height: 14px !important;\n  border: solid #00B894 !important;\n  border-width: 0 2px 2px 0 !important;\n  transform: rotate(45deg) !important;\n  border-radius: 0% !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li:hover {\n  background-color: rgba(0, 184, 148, 0.06);\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect .see_all {\n  position: absolute;\n  top: 239px;\n  z-index: 99;\n  width: 82%;\n  left: 15px;\n  padding: 10px;\n  background: #ffffff;\n  cursor: pointer;\n  color: #00B894;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect .see_all p {\n  margin: 0 auto;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn {\n  display: inline-flex;\n  align-items: flex-start;\n  margin: 0;\n  margin-top: 26px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  margin: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button:focus {\n  outline: none;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button:visited {\n  color: #ffffff;\n}\n.pannel-section .container .dqr_table_wrap {\n  position: relative;\n}\n.pannel-section .container .dqr_table_wrap .loading-container {\n  position: absolute;\n  left: 50%;\n  top: 20%;\n  z-index: 99;\n}\n.ngx-mat-drp-calendar[_ngcontent-ona-c3] {\n  width: 0px;\n  height: 0px;\n}\n.box_wrap {\n  background: #ffffff;\n  margin: 20px auto;\n  padding: 10px;\n  border-radius: 5px;\n}\n.box_wrap .heading_wrap {\n  display: flex;\n  align-items: center;\n}\n.box_wrap .heading_wrap .heading_container .heading {\n  padding: 5px 0px 5px 10px;\n  font-size: 28px;\n  font-weight: 500;\n  line-height: 24px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  display: inline-block;\n  color: #6a6a6a;\n}\n.box_wrap .heading_wrap .download_btn_wrap {\n  padding-left: 8px;\n}\n.box_wrap .heading_wrap .download_btn_wrap .icon-info-tooltip {\n  cursor: help;\n  position: relative;\n  outline: none;\n  cursor: pointer;\n}\n.box_wrap .heading_wrap .download_btn_wrap .icon-info-tooltip:before, .box_wrap .heading_wrap .download_btn_wrap .icon-info-tooltip:after {\n  left: 50%;\n  opacity: 0;\n  position: absolute;\n  z-index: -100;\n}\n.box_wrap .heading_wrap .download_btn_wrap .icon-info-tooltip:hover:before, .box_wrap .heading_wrap .download_btn_wrap .icon-info-tooltip:hover:after, .box_wrap .heading_wrap .download_btn_wrap .icon-info-tooltip:focus:before, .box_wrap .heading_wrap .download_btn_wrap .icon-info-tooltip:focus:after {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n  z-index: 100;\n}\n.box_wrap .heading_wrap .download_btn_wrap .icon-info-tooltip:hover:before, .box_wrap .heading_wrap .download_btn_wrap .icon-info-tooltip:focus:before {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n}\n.box_wrap .heading_wrap .download_btn_wrap .icon-info-tooltip:hover:after, .box_wrap .heading_wrap .download_btn_wrap .icon-info-tooltip:focus:after {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26);\n}\n.box_wrap .heading_wrap .download_btn_wrap .icon-info-tooltip:before {\n  border-style: solid;\n  border-width: 1em 0.75em 0 0.75em;\n  border-color: #babbbb transparent transparent transparent;\n  bottom: 100%;\n  content: \"\";\n  margin-left: -0.5em;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26), opacity 0.65s 0.5s;\n  transform: scale(0.6) translateY(-90%);\n}\n.box_wrap .heading_wrap .download_btn_wrap .icon-info-tooltip:after {\n  background: #babbbb;\n  border-radius: 0.25em;\n  bottom: 180%;\n  color: #ffffff;\n  content: attr(data-tip);\n  margin-left: -26px;\n  padding: 7px;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n  transform: scale(0.6) translateY(50%);\n  min-width: 15px;\n  text-align: center;\n}\n@media (max-width: 767px) {\n  .box_wrap .heading_wrap .download_btn_wrap .icon-info-tooltip:after {\n    font-size: 0.75em;\n    margin-left: -5em;\n    width: 10em;\n  }\n}\n.box_wrap .container_new {\n  box-sizing: border-box;\n  margin: 30px 0 10px;\n  text-align: center;\n  padding: 0px;\n}\n.box_wrap .container_new ol {\n  list-style: none;\n}\n.box_wrap .container_new .rectangle {\n  position: relative;\n  padding: 20px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);\n  border-radius: 10px;\n  color: #ffffff;\n  font-size: 25px;\n  font-weight: 500;\n  line-height: 30px;\n  font-family: \"Roboto\", sans-serif;\n}\n.box_wrap .container_new .rectangle .download_btn_wrap {\n  padding-left: 8px;\n  display: inline;\n}\n.box_wrap .container_new .rectangle .download_btn_wrap .icon-info-tooltip {\n  cursor: help;\n  position: relative;\n  outline: none;\n  cursor: pointer;\n}\n.box_wrap .container_new .rectangle .download_btn_wrap .icon-info-tooltip:before, .box_wrap .container_new .rectangle .download_btn_wrap .icon-info-tooltip:after {\n  left: 50%;\n  opacity: 0;\n  position: absolute;\n  z-index: -100;\n}\n.box_wrap .container_new .rectangle .download_btn_wrap .icon-info-tooltip:hover:before, .box_wrap .container_new .rectangle .download_btn_wrap .icon-info-tooltip:hover:after, .box_wrap .container_new .rectangle .download_btn_wrap .icon-info-tooltip:focus:before, .box_wrap .container_new .rectangle .download_btn_wrap .icon-info-tooltip:focus:after {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n  z-index: 100;\n}\n.box_wrap .container_new .rectangle .download_btn_wrap .icon-info-tooltip:hover:before, .box_wrap .container_new .rectangle .download_btn_wrap .icon-info-tooltip:focus:before {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n}\n.box_wrap .container_new .rectangle .download_btn_wrap .icon-info-tooltip:hover:after, .box_wrap .container_new .rectangle .download_btn_wrap .icon-info-tooltip:focus:after {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26);\n}\n.box_wrap .container_new .rectangle .download_btn_wrap .icon-info-tooltip:before {\n  border-style: solid;\n  border-width: 1em 0.75em 0 0.75em;\n  border-color: #babbbb transparent transparent transparent;\n  bottom: 100%;\n  content: \"\";\n  margin-left: -0.5em;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26), opacity 0.65s 0.5s;\n  transform: scale(0.6) translateY(-90%);\n}\n.box_wrap .container_new .rectangle .download_btn_wrap .icon-info-tooltip:after {\n  background: #babbbb;\n  border-radius: 0.25em;\n  bottom: 180%;\n  color: #ffffff;\n  content: attr(data-tip);\n  margin-left: -26px;\n  padding: 7px;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n  transform: scale(0.6) translateY(50%);\n  min-width: 15px;\n  text-align: center;\n}\n@media (max-width: 767px) {\n  .box_wrap .container_new .rectangle .download_btn_wrap .icon-info-tooltip:after {\n    font-size: 0.75em;\n    margin-left: -5em;\n    width: 10em;\n  }\n}\n.box_wrap .container_new .rectangle .download_btn_wrap .icon-info-tooltip .img_refresh {\n  vertical-align: initial;\n  width: 19px;\n}\n.box_wrap .container_new .level-1 {\n  width: 50%;\n  margin: 0 auto 40px;\n  background: #16a085;\n}\n.box_wrap .container_new .level-1::before {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 2px;\n  height: 20px;\n  background: #000000;\n}\n.box_wrap .container_new .level-2-wrapper {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 0px;\n}\n.box_wrap .container_new .level-2-wrapper::before {\n  content: \"\";\n  position: absolute;\n  top: -20px;\n  left: 25%;\n  width: 50%;\n  height: 2px;\n  background: #000000;\n}\n.box_wrap .container_new .level-2-wrapper::after {\n  display: none;\n  content: \"\";\n  position: absolute;\n  left: -20px;\n  bottom: -20px;\n  width: calc(100% + 20px);\n  height: 2px;\n  background: #000000;\n}\n.box_wrap .container_new .level-2-wrapper li {\n  position: relative;\n}\n.box_wrap .container_new .level-2-wrapper > li::before {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 2px;\n  height: 20px;\n  background: #000000;\n}\n.box_wrap .container_new .level-2 {\n  width: 70%;\n  margin: 0 auto 40px;\n  background: #3498db;\n}\n.box_wrap .container_new .level-2::before {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 2px;\n  height: 20px;\n  background: #000000;\n}\n.box_wrap .container_new .level-2::after {\n  display: none;\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0%;\n  transform: translate(-100%, -50%);\n  width: 20px;\n  height: 2px;\n  background: #000000;\n}\n.box_wrap .container_new .level-3-wrapper {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-column-gap: 20px;\n  width: 90%;\n  margin: 0 auto;\n  padding: 0px;\n}\n.box_wrap .container_new .level-3-wrapper::before {\n  content: \"\";\n  position: absolute;\n  top: -20px;\n  left: calc(25% - 5px);\n  width: calc(50% + 10px);\n  height: 2px;\n  background: #000000;\n}\n.box_wrap .container_new .level-3-wrapper > li::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, -100%);\n  width: 2px;\n  height: 20px;\n  background: #000000;\n}\n.box_wrap .container_new .level-3 {\n  margin-bottom: 20px;\n  background: #7b9fe0;\n}\n.box_wrap .container_new .level-4-wrapper {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-column-gap: 20px;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0px;\n}\n.box_wrap .container_new .level-4-wrapper .level-4 {\n  margin-bottom: 20px;\n  background: #8e44ad;\n}\n.store_wise .table_heading_wrap {\n  display: flex;\n}\n.store_wise .table_heading_wrap h3 {\n  font-size: 22px;\n  font-weight: 500;\n  color: #6a6a6a;\n}\n.store_wise .table_heading_wrap .img_refresh {\n  padding-left: 6px;\n}\n.store_wise .table_heading_wrap .icon-info-tooltip {\n  cursor: help;\n  position: relative;\n  outline: none;\n}\n.store_wise .table_heading_wrap .icon-info-tooltip:before, .store_wise .table_heading_wrap .icon-info-tooltip:after {\n  left: 50%;\n  opacity: 0;\n  position: absolute;\n  z-index: -100;\n}\n.store_wise .table_heading_wrap .icon-info-tooltip:hover:before, .store_wise .table_heading_wrap .icon-info-tooltip:hover:after, .store_wise .table_heading_wrap .icon-info-tooltip:focus:before, .store_wise .table_heading_wrap .icon-info-tooltip:focus:after {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n  z-index: 100;\n}\n.store_wise .table_heading_wrap .icon-info-tooltip:hover:before, .store_wise .table_heading_wrap .icon-info-tooltip:focus:before {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n}\n.store_wise .table_heading_wrap .icon-info-tooltip:hover:after, .store_wise .table_heading_wrap .icon-info-tooltip:focus:after {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26);\n}\n.store_wise .table_heading_wrap .icon-info-tooltip:before {\n  border-style: solid;\n  border-width: 1em 0.75em 0 0.75em;\n  border-color: #babbbb transparent transparent transparent;\n  bottom: 100%;\n  content: \"\";\n  margin-left: -0.5em;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26), opacity 0.65s 0.5s;\n  transform: scale(0.6) translateY(-90%);\n}\n.store_wise .table_heading_wrap .icon-info-tooltip:after {\n  background: #babbbb;\n  border-radius: 0.25em;\n  bottom: 180%;\n  color: #ffffff;\n  content: attr(data-tip);\n  margin-left: -26px;\n  padding: 7px;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n  transform: scale(0.6) translateY(50%);\n  min-width: 15px;\n  text-align: center;\n}\n@media (max-width: 767px) {\n  .store_wise .table_heading_wrap .icon-info-tooltip:after {\n    font-size: 0.75em;\n    margin-left: -5em;\n    width: 10em;\n  }\n}\n.store_wise .dr-table {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.store_wise .dr-table table {\n  width: 100%;\n  text-align: left;\n}\n.store_wise .dr-table .table-header th {\n  background-color: #00B894;\n  line-height: 25px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  vertical-align: middle;\n  padding: 10px;\n  border: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.store_wise .dr-table tr {\n  background-color: #ffffff;\n  line-height: 30px;\n  color: #959795;\n  font-size: 13px;\n  font-weight: 300;\n}\n.store_wise .dr-table tr th {\n  min-width: 100px;\n  background-color: #ffffff;\n  padding: 10px;\n  text-transform: capitalize !important;\n  border-bottom: 1px solid #eeecec !important;\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  vertical-align: middle;\n}\n.store_wise .dr-table tr th .totalbill_wrap {\n  margin: 0px;\n  cursor: pointer;\n  color: #f71458;\n  font-weight: 800;\n  font-size: 16px;\n}\n.store_wise .dr-table tr th .totalbill_wrap:hover {\n  text-decoration: underline;\n}\n.store_wise .dr-table .button-style {\n  background: none;\n  border: none;\n  outline: none;\n  color: #959795;\n  font-size: 18px;\n}\n.tableContainer {\n  display: block;\n  padding: 15px;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n}\n.tableContainer .heading_wrap {\n  display: flex;\n  justify-content: space-between;\n}\n.tableContainer .heading_wrap .heading_container {\n  display: flex;\n}\n.tableContainer .heading_wrap .heading_container .table_heading {\n  font-size: 20px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0px;\n  text-transform: capitalize;\n  color: #6a6a6a;\n}\n.tableContainer .heading_wrap .heading_container .table_heading .table_heading_count {\n  font-size: 20px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0px;\n  text-transform: capitalize;\n  color: #6a6a6a;\n  position: relative;\n  cursor: pointer;\n  color: #f71458;\n}\n.tableContainer .heading_wrap .heading_container .tool_tip {\n  position: absolute;\n  top: 550px;\n  left: 285px;\n  background-color: #ffffff;\n  padding: 20px;\n  padding-top: 10px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 390px;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);\n  z-index: 9;\n}\n.tableContainer .heading_wrap .heading_container .tool_tip .close_tooltip {\n  display: flex;\n  justify-content: flex-end;\n}\n.tableContainer .heading_wrap .heading_container .tool_tip .dr-table {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.tableContainer .heading_wrap .heading_container .tool_tip .dr-table table {\n  width: 100%;\n  text-align: left;\n}\n.tableContainer .heading_wrap .heading_container .tool_tip .dr-table .table-header th {\n  background-color: #00B894;\n  line-height: 25px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  vertical-align: middle;\n  padding: 10px;\n  border: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.tableContainer .heading_wrap .heading_container .tool_tip .dr-table tr {\n  background-color: #ffffff;\n  line-height: 30px;\n  color: #959795;\n  font-size: 13px;\n  font-weight: 300;\n}\n.tableContainer .heading_wrap .heading_container .tool_tip .dr-table tr th {\n  min-width: 100px;\n  background-color: #ffffff;\n  padding: 10px;\n  text-transform: capitalize !important;\n  border-bottom: 1px solid #eeecec !important;\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  vertical-align: middle;\n}\n.tableContainer .heading_wrap .heading_container .tool_tip .dr-table tr th .totalbill_wrap {\n  margin: 0px;\n  cursor: pointer;\n  color: #f71458;\n  font-weight: 800;\n  font-size: 16px;\n}\n.tableContainer .heading_wrap .heading_container .tool_tip .dr-table tr th .totalbill_wrap:hover {\n  text-decoration: underline;\n}\n.tableContainer .heading_wrap .heading_container .tool_tip .dr-table .button-style {\n  background: none;\n  border: none;\n  outline: none;\n  color: #959795;\n  font-size: 18px;\n}\n.tableContainer .heading_wrap .heading_container .icon-info-tooltip {\n  cursor: help;\n  position: relative;\n  outline: none;\n}\n.tableContainer .heading_wrap .heading_container .icon-info-tooltip:before, .tableContainer .heading_wrap .heading_container .icon-info-tooltip:after {\n  left: 50%;\n  opacity: 0;\n  position: absolute;\n  z-index: -100;\n}\n.tableContainer .heading_wrap .heading_container .icon-info-tooltip:hover:before, .tableContainer .heading_wrap .heading_container .icon-info-tooltip:hover:after, .tableContainer .heading_wrap .heading_container .icon-info-tooltip:focus:before, .tableContainer .heading_wrap .heading_container .icon-info-tooltip:focus:after {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n  z-index: 100;\n}\n.tableContainer .heading_wrap .heading_container .icon-info-tooltip:hover:before, .tableContainer .heading_wrap .heading_container .icon-info-tooltip:focus:before {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n}\n.tableContainer .heading_wrap .heading_container .icon-info-tooltip:hover:after, .tableContainer .heading_wrap .heading_container .icon-info-tooltip:focus:after {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26);\n}\n.tableContainer .heading_wrap .heading_container .icon-info-tooltip:before {\n  border-style: solid;\n  border-width: 1em 0.75em 0 0.75em;\n  border-color: #babbbb transparent transparent transparent;\n  bottom: 100%;\n  content: \"\";\n  margin-left: -0.5em;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26), opacity 0.65s 0.5s;\n  transform: scale(0.6) translateY(-90%);\n}\n.tableContainer .heading_wrap .heading_container .icon-info-tooltip:after {\n  background: #babbbb;\n  border-radius: 0.25em;\n  bottom: 180%;\n  color: #ffffff;\n  content: attr(data-tip);\n  margin-left: -26px;\n  padding: 7px;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n  transform: scale(0.6) translateY(50%);\n  min-width: 15px;\n  text-align: center;\n}\n@media (max-width: 767px) {\n  .tableContainer .heading_wrap .heading_container .icon-info-tooltip:after {\n    font-size: 0.75em;\n    margin-left: -5em;\n    width: 10em;\n  }\n}\n.tableContainer .heading_wrap .heading_container .icon-info-tooltip .img_download {\n  vertical-align: text-bottom;\n  padding-left: 7px;\n  cursor: pointer;\n}\n.tableContainer .heading_wrap .closeBtnContainer {\n  display: flex;\n}\n.tableContainer .dr-table {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.tableContainer .dr-table table {\n  width: 100%;\n  text-align: left;\n}\n.tableContainer .dr-table .table-header th {\n  background-color: #00B894;\n  line-height: 25px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  vertical-align: middle;\n  padding: 10px;\n  border: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.tableContainer .dr-table tr {\n  background-color: white;\n  line-height: 30px;\n  color: #959795;\n  font-size: 13px;\n  font-weight: 300;\n}\n.tableContainer .dr-table tr th {\n  min-width: 100px;\n  background-color: #ffffff;\n  padding: 10px;\n  text-transform: capitalize !important;\n  border-bottom: 1px solid #eeecec !important;\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  vertical-align: middle;\n}\n.tableContainer .dr-table .button-style {\n  background: none;\n  border: none;\n  outline: none;\n  color: #959795;\n  font-size: 18px;\n}\n/* MQ STYLES\n  –––––––––––––––––––––––––––––––––––––––––––––––––– */\n@media screen and (max-width: 700px) {\n  .rectangle {\n    padding: 20px 10px;\n  }\n\n  .level-1,\n.level-2 {\n    width: 100%;\n  }\n\n  .level-1 {\n    margin-bottom: 20px;\n  }\n\n  .level-1::before,\n.level-2-wrapper > li::before {\n    display: none;\n  }\n\n  .level-2-wrapper,\n.level-2-wrapper::after,\n.level-2::after {\n    display: block;\n  }\n\n  .level-2-wrapper {\n    width: 90%;\n    margin-left: 10%;\n  }\n\n  .level-2-wrapper::before {\n    left: -20px;\n    width: 2px;\n    height: calc(100% + 40px);\n  }\n\n  .level-2-wrapper > li:not(:first-child) {\n    margin-top: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRFJfU3VtbWFyeS9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0RSX1N1bW1hcnkvc3VtbWFyeS9EOlxccmVjb25OZXdcXFJlY29uX0Rhc2hib2FyZC9zcmNcXHNjc3NcXG1peGlucy5zY3NzIiwic3JjL2FwcC9EUl9TdW1tYXJ5L3N1bW1hcnkvRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxhcHBcXERSX1N1bW1hcnlcXHN1bW1hcnlcXHN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0RSX1N1bW1hcnkvc3VtbWFyeS9EOlxccmVjb25OZXdcXFJlY29uX0Rhc2hib2FyZC9zcmNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixtQkFBQTtBQWlCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FEZEY7QUN1b0JBLG1DQUFBO0FDem9CQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FGTUo7QUVISTtFRHdERixlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJFMUNjO0VGMkNkLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QURqREY7QUNrREU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FEaERKO0FFbEJRO0VBQ0ksbUJDTUU7RURMRixpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBRm9CWjtBRWpCb0I7RUFFSSxtQkFBQTtBRmtCeEI7QUVqQndCO0VEaU90QixxQkFBQTtFQUNBLGNFbE9rQjtFRm1PbEIsZUFBQTtFQUNBLGdCRXpOYTtFRjBOYixpQkFBQTtFQUNBLGlDRTdOWTtFRjhOWixnQkFBQTtFQUNBLGNBQUE7QUQ3TUY7QUNSSTtFQ25Cb0I7SUQyT3BCLGtCQUFBO0VENU1GO0FBQ0Y7QUN6Qkk7RUNQb0I7SUQrT3BCLGVBQUE7RUQz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LGFBQUE7QUZ5VVo7QUVwVUk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FGc1VSO0FFclVRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FGdVVaO0FFcFVZO0VBQ0kseUJDbmxCRjtFRG9sQkUsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0FGc1VoQjtBRW5VUTtFQUNJLHVCQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FGb1VaO0FFblVZO0VBQ0ksZ0JBQUE7RUFDQSx5QkN6bEJGO0VEMGxCRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUZxVWhCO0FFbFVRO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FGb1VaO0FFL1RBO3NEQUFBO0FBRUE7RUFDSTtJQUNJLGtCQUFBO0VGa1VOOztFRS9URTs7SUFFSSxXQUFBO0VGa1VOOztFRS9URTtJQUNJLG1CQUFBO0VGa1VOOztFRS9URTs7SUFFSSxhQUFBO0VGa1VOOztFRS9URTs7O0lBR0ksY0FBQTtFRmtVTjs7RUUvVEU7SUFDSSxVQUFBO0lBQ0EsZ0JBQUE7RUZrVU47O0VFL1RFO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSx5QkFBQTtFRmtVTjs7RUUvVEU7SUFDSSxnQkFBQTtFRmtVTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvRFJfU3VtbWFyeS9zdW1tYXJ5L3N1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBjbGVhcmZpeCBzdHlsZSAqL1xuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qPT0gc3RhcnQgb2YgY29kZSBmb3IgdG9vbHRpcHMgPT0qL1xuLm1hdC1wYWdpbmF0b3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYW5uZWwtc2VjdGlvbiAucmVjb25Mb2FkaW5nRGF0YSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4ucGFubmVsLXNlY3Rpb24gLnJlY29uTG9hZGluZ0RhdGEgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogOTk5O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLnRleHQtZGFuZ2VyIHtcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAudGV4dC1kYW5nZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAudGV4dC1kYW5nZXIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICM5QTlBOUE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgbGFiZWwuZGlzYWJsZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCBzZWxlY3QsXG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLnNlbGVjdGVkX3RleHQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3MtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvbGlzdC5zdmcpIHJpZ2h0IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMC43ZW0gdG9wIDUwJSwgMCAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1pbi13aWR0aDogOTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWNlYztcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgc2VsZWN0LFxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5zZWxlY3RlZF90ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlY2VjO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgbWFyZ2luOiAwO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWNhY2FjO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLm1vbnRoSW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjZweDtcbiAgdG9wOiAzN3B4O1xuICB6LWluZGV4OiA5OTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZGF0ZUltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDQ2cHg7XG4gIHRvcDogMzdweDtcbiAgei1pbmRleDogOTk7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLnNlbGVjdGVkX3RleHQge1xuICBoZWlnaHQ6IDQxcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggNHB4IDAuNXB4O1xuICAtbW96LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDRweCAwLjVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCA0cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogODMlO1xuICB0b3A6IDcwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOmNoZWNrZWQsIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOm5vdCg6Y2hlY2tlZCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogNXB4O1xuICB6LWluZGV4OiA5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsLCAucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIFt0eXBlPXJhZGlvXTpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSwgLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSArIGxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNEE0QTRBO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAwO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogIzAwQjg5NDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogM3B4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIFt0eXBlPXJhZGlvXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDBCODk0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIGxhYmVsOmJlZm9yZSB7XG4gIGxlZnQ6IDkzJSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgbGFiZWw6YWZ0ZXIge1xuICBsZWZ0OiA5MCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCAuZm9ybS1ncm91cCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xuICBjb2xvcjogIzAwQjg5NDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDEzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAjMDBCODk0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDAgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAlICFpbXBvcnRhbnQ7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxODQsIDE0OCwgMC4wNik7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IC5zZWVfYWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIzOXB4O1xuICB6LWluZGV4OiA5OTtcbiAgd2lkdGg6IDgyJTtcbiAgbGVmdDogMTVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzAwQjg5NDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgLnNlZV9hbGwgcCB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5hY3Rpb25fYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmFjdGlvbl9idG4gYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQjg5NDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOXB4IDE1cHggOXB4O1xuICBiYWNrZ3JvdW5kOiAjMDBCODk0O1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuYWN0aW9uX2J0biBidXR0b246aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAxN3B4IDEwcHggLTEwcHggcmdiYSgwLCAxODQsIDE0OCwgMC4zKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMzAwbXM7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmFjdGlvbl9idG4gYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuYWN0aW9uX2J0biBidXR0b246dmlzaXRlZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmRxcl90YWJsZV93cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmRxcl90YWJsZV93cmFwIC5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDIwJTtcbiAgei1pbmRleDogOTk7XG59XG5cbi5uZ3gtbWF0LWRycC1jYWxlbmRhcltfbmdjb250ZW50LW9uYS1jM10ge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbn1cblxuLmJveF93cmFwIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5ib3hfd3JhcCAuaGVhZGluZ193cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib3hfd3JhcCAuaGVhZGluZ193cmFwIC5oZWFkaW5nX2NvbnRhaW5lciAuaGVhZGluZyB7XG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNmE2YTZhO1xufVxuLmJveF93cmFwIC5oZWFkaW5nX3dyYXAgLmRvd25sb2FkX2J0bl93cmFwIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uYm94X3dyYXAgLmhlYWRpbmdfd3JhcCAuZG93bmxvYWRfYnRuX3dyYXAgLmljb24taW5mby10b29sdGlwIHtcbiAgY3Vyc29yOiBoZWxwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ib3hfd3JhcCAuaGVhZGluZ193cmFwIC5kb3dubG9hZF9idG5fd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6YmVmb3JlLCAuYm94X3dyYXAgLmhlYWRpbmdfd3JhcCAuZG93bmxvYWRfYnRuX3dyYXAgLmljb24taW5mby10b29sdGlwOmFmdGVyIHtcbiAgbGVmdDogNTAlO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xMDA7XG59XG4uYm94X3dyYXAgLmhlYWRpbmdfd3JhcCAuZG93bmxvYWRfYnRuX3dyYXAgLmljb24taW5mby10b29sdGlwOmhvdmVyOmJlZm9yZSwgLmJveF93cmFwIC5oZWFkaW5nX3dyYXAgLmRvd25sb2FkX2J0bl93cmFwIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjphZnRlciwgLmJveF93cmFwIC5oZWFkaW5nX3dyYXAgLmRvd25sb2FkX2J0bl93cmFwIC5pY29uLWluZm8tdG9vbHRpcDpmb2N1czpiZWZvcmUsIC5ib3hfd3JhcCAuaGVhZGluZ193cmFwIC5kb3dubG9hZF9idG5fd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6Zm9jdXM6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5ib3hfd3JhcCAuaGVhZGluZ193cmFwIC5kb3dubG9hZF9idG5fd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6aG92ZXI6YmVmb3JlLCAuYm94X3dyYXAgLmhlYWRpbmdfd3JhcCAuZG93bmxvYWRfYnRuX3dyYXAgLmljb24taW5mby10b29sdGlwOmZvY3VzOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XG59XG4uYm94X3dyYXAgLmhlYWRpbmdfd3JhcCAuZG93bmxvYWRfYnRuX3dyYXAgLmljb24taW5mby10b29sdGlwOmhvdmVyOmFmdGVyLCAuYm94X3dyYXAgLmhlYWRpbmdfd3JhcCAuZG93bmxvYWRfYnRuX3dyYXAgLmljb24taW5mby10b29sdGlwOmZvY3VzOmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNik7XG59XG4uYm94X3dyYXAgLmhlYWRpbmdfd3JhcCAuZG93bmxvYWRfYnRuX3dyYXAgLmljb24taW5mby10b29sdGlwOmJlZm9yZSB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMWVtIDAuNzVlbSAwIDAuNzVlbTtcbiAgYm9yZGVyLWNvbG9yOiAjYmFiYmJiIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBib3R0b206IDEwMCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbi1sZWZ0OiAtMC41ZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpLCBvcGFjaXR5IDAuNjVzIDAuNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKC05MCUpO1xufVxuLmJveF93cmFwIC5oZWFkaW5nX3dyYXAgLmRvd25sb2FkX2J0bl93cmFwIC5pY29uLWluZm8tdG9vbHRpcDphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNiYWJiYmI7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgYm90dG9tOiAxODAlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY29udGVudDogYXR0cihkYXRhLXRpcCk7XG4gIG1hcmdpbi1sZWZ0OiAtMjZweDtcbiAgcGFkZGluZzogN3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KSAwLjJzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNikgdHJhbnNsYXRlWSg1MCUpO1xuICBtaW4td2lkdGg6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYm94X3dyYXAgLmhlYWRpbmdfd3JhcCAuZG93bmxvYWRfYnRuX3dyYXAgLmljb24taW5mby10b29sdGlwOmFmdGVyIHtcbiAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICBtYXJnaW4tbGVmdDogLTVlbTtcbiAgICB3aWR0aDogMTBlbTtcbiAgfVxufVxuLmJveF93cmFwIC5jb250YWluZXJfbmV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAzMHB4IDAgMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG59XG4uYm94X3dyYXAgLmNvbnRhaW5lcl9uZXcgb2wge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmJveF93cmFwIC5jb250YWluZXJfbmV3IC5yZWN0YW5nbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuLmJveF93cmFwIC5jb250YWluZXJfbmV3IC5yZWN0YW5nbGUgLmRvd25sb2FkX2J0bl93cmFwIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5ib3hfd3JhcCAuY29udGFpbmVyX25ldyAucmVjdGFuZ2xlIC5kb3dubG9hZF9idG5fd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXAge1xuICBjdXJzb3I6IGhlbHA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJveF93cmFwIC5jb250YWluZXJfbmV3IC5yZWN0YW5nbGUgLmRvd25sb2FkX2J0bl93cmFwIC5pY29uLWluZm8tdG9vbHRpcDpiZWZvcmUsIC5ib3hfd3JhcCAuY29udGFpbmVyX25ldyAucmVjdGFuZ2xlIC5kb3dubG9hZF9idG5fd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICBsZWZ0OiA1MCU7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTEwMDtcbn1cbi5ib3hfd3JhcCAuY29udGFpbmVyX25ldyAucmVjdGFuZ2xlIC5kb3dubG9hZF9idG5fd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6aG92ZXI6YmVmb3JlLCAuYm94X3dyYXAgLmNvbnRhaW5lcl9uZXcgLnJlY3RhbmdsZSAuZG93bmxvYWRfYnRuX3dyYXAgLmljb24taW5mby10b29sdGlwOmhvdmVyOmFmdGVyLCAuYm94X3dyYXAgLmNvbnRhaW5lcl9uZXcgLnJlY3RhbmdsZSAuZG93bmxvYWRfYnRuX3dyYXAgLmljb24taW5mby10b29sdGlwOmZvY3VzOmJlZm9yZSwgLmJveF93cmFwIC5jb250YWluZXJfbmV3IC5yZWN0YW5nbGUgLmRvd25sb2FkX2J0bl93cmFwIC5pY29uLWluZm8tdG9vbHRpcDpmb2N1czphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcbiAgei1pbmRleDogMTAwO1xufVxuLmJveF93cmFwIC5jb250YWluZXJfbmV3IC5yZWN0YW5nbGUgLmRvd25sb2FkX2J0bl93cmFwIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjpiZWZvcmUsIC5ib3hfd3JhcCAuY29udGFpbmVyX25ldyAucmVjdGFuZ2xlIC5kb3dubG9hZF9idG5fd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6Zm9jdXM6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNikgMC4ycztcbn1cbi5ib3hfd3JhcCAuY29udGFpbmVyX25ldyAucmVjdGFuZ2xlIC5kb3dubG9hZF9idG5fd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6aG92ZXI6YWZ0ZXIsIC5ib3hfd3JhcCAuY29udGFpbmVyX25ldyAucmVjdGFuZ2xlIC5kb3dubG9hZF9idG5fd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6Zm9jdXM6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KTtcbn1cbi5ib3hfd3JhcCAuY29udGFpbmVyX25ldyAucmVjdGFuZ2xlIC5kb3dubG9hZF9idG5fd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6YmVmb3JlIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxZW0gMC43NWVtIDAgMC43NWVtO1xuICBib3JkZXItY29sb3I6ICNiYWJiYmIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGJvdHRvbTogMTAwJTtcbiAgY29udGVudDogXCJcIjtcbiAgbWFyZ2luLWxlZnQ6IC0wLjVlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNiksIG9wYWNpdHkgMC42NXMgMC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoLTkwJSk7XG59XG4uYm94X3dyYXAgLmNvbnRhaW5lcl9uZXcgLnJlY3RhbmdsZSAuZG93bmxvYWRfYnRuX3dyYXAgLmljb24taW5mby10b29sdGlwOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2JhYmJiYjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBib3R0b206IDE4MCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGlwKTtcbiAgbWFyZ2luLWxlZnQ6IC0yNnB4O1xuICBwYWRkaW5nOiA3cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKDUwJSk7XG4gIG1pbi13aWR0aDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ib3hfd3JhcCAuY29udGFpbmVyX25ldyAucmVjdGFuZ2xlIC5kb3dubG9hZF9idG5fd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xuICAgIHdpZHRoOiAxMGVtO1xuICB9XG59XG4uYm94X3dyYXAgLmNvbnRhaW5lcl9uZXcgLnJlY3RhbmdsZSAuZG93bmxvYWRfYnRuX3dyYXAgLmljb24taW5mby10b29sdGlwIC5pbWdfcmVmcmVzaCB7XG4gIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xuICB3aWR0aDogMTlweDtcbn1cbi5ib3hfd3JhcCAuY29udGFpbmVyX25ldyAubGV2ZWwtMSB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvIDQwcHg7XG4gIGJhY2tncm91bmQ6ICMxNmEwODU7XG59XG4uYm94X3dyYXAgLmNvbnRhaW5lcl9uZXcgLmxldmVsLTE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuLmJveF93cmFwIC5jb250YWluZXJfbmV3IC5sZXZlbC0yLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5ib3hfd3JhcCAuY29udGFpbmVyX25ldyAubGV2ZWwtMi13cmFwcGVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IDI1JTtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDA7XG59XG4uYm94X3dyYXAgLmNvbnRhaW5lcl9uZXcgLmxldmVsLTItd3JhcHBlcjo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0yMHB4O1xuICBib3R0b206IC0yMHB4O1xuICB3aWR0aDogY2FsYygxMDAlICsgMjBweCk7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuLmJveF93cmFwIC5jb250YWluZXJfbmV3IC5sZXZlbC0yLXdyYXBwZXIgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYm94X3dyYXAgLmNvbnRhaW5lcl9uZXcgLmxldmVsLTItd3JhcHBlciA+IGxpOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTAwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbi5ib3hfd3JhcCAuY29udGFpbmVyX25ldyAubGV2ZWwtMiB7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogMCBhdXRvIDQwcHg7XG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XG59XG4uYm94X3dyYXAgLmNvbnRhaW5lcl9uZXcgLmxldmVsLTI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuLmJveF93cmFwIC5jb250YWluZXJfbmV3IC5sZXZlbC0yOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSk7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbi5ib3hfd3JhcCAuY29udGFpbmVyX25ldyAubGV2ZWwtMy13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwcHg7XG59XG4uYm94X3dyYXAgLmNvbnRhaW5lcl9uZXcgLmxldmVsLTMtd3JhcHBlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiBjYWxjKDI1JSAtIDVweCk7XG4gIHdpZHRoOiBjYWxjKDUwJSArIDEwcHgpO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbn1cbi5ib3hfd3JhcCAuY29udGFpbmVyX25ldyAubGV2ZWwtMy13cmFwcGVyID4gbGk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xufVxuLmJveF93cmFwIC5jb250YWluZXJfbmV3IC5sZXZlbC0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYmFja2dyb3VuZDogIzdiOWZlMDtcbn1cbi5ib3hfd3JhcCAuY29udGFpbmVyX25ldyAubGV2ZWwtNC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMHB4O1xufVxuLmJveF93cmFwIC5jb250YWluZXJfbmV3IC5sZXZlbC00LXdyYXBwZXIgLmxldmVsLTQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjOGU0NGFkO1xufVxuXG4uc3RvcmVfd2lzZSAudGFibGVfaGVhZGluZ193cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5zdG9yZV93aXNlIC50YWJsZV9oZWFkaW5nX3dyYXAgaDMge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNmE2YTZhO1xufVxuLnN0b3JlX3dpc2UgLnRhYmxlX2hlYWRpbmdfd3JhcCAuaW1nX3JlZnJlc2gge1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cbi5zdG9yZV93aXNlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwIHtcbiAgY3Vyc29yOiBoZWxwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc3RvcmVfd2lzZSAudGFibGVfaGVhZGluZ193cmFwIC5pY29uLWluZm8tdG9vbHRpcDpiZWZvcmUsIC5zdG9yZV93aXNlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmFmdGVyIHtcbiAgbGVmdDogNTAlO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xMDA7XG59XG4uc3RvcmVfd2lzZSAudGFibGVfaGVhZGluZ193cmFwIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjpiZWZvcmUsIC5zdG9yZV93aXNlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmhvdmVyOmFmdGVyLCAuc3RvcmVfd2lzZSAudGFibGVfaGVhZGluZ193cmFwIC5pY29uLWluZm8tdG9vbHRpcDpmb2N1czpiZWZvcmUsIC5zdG9yZV93aXNlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmZvY3VzOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xuICB6LWluZGV4OiAxMDA7XG59XG4uc3RvcmVfd2lzZSAudGFibGVfaGVhZGluZ193cmFwIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjpiZWZvcmUsIC5zdG9yZV93aXNlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmZvY3VzOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XG59XG4uc3RvcmVfd2lzZSAudGFibGVfaGVhZGluZ193cmFwIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjphZnRlciwgLnN0b3JlX3dpc2UgLnRhYmxlX2hlYWRpbmdfd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6Zm9jdXM6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KTtcbn1cbi5zdG9yZV93aXNlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmJlZm9yZSB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMWVtIDAuNzVlbSAwIDAuNzVlbTtcbiAgYm9yZGVyLWNvbG9yOiAjYmFiYmJiIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBib3R0b206IDEwMCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbi1sZWZ0OiAtMC41ZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpLCBvcGFjaXR5IDAuNjVzIDAuNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKC05MCUpO1xufVxuLnN0b3JlX3dpc2UgLnRhYmxlX2hlYWRpbmdfd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjYmFiYmJiO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIGJvdHRvbTogMTgwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXApO1xuICBtYXJnaW4tbGVmdDogLTI2cHg7XG4gIHBhZGRpbmc6IDdweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNikgMC4ycztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoNTAlKTtcbiAgbWluLXdpZHRoOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnN0b3JlX3dpc2UgLnRhYmxlX2hlYWRpbmdfd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xuICAgIHdpZHRoOiAxMGVtO1xuICB9XG59XG4uc3RvcmVfd2lzZSAuZHItdGFibGUge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5zdG9yZV93aXNlIC5kci10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnN0b3JlX3dpc2UgLmRyLXRhYmxlIC50YWJsZS1oZWFkZXIgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCODk0O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG59XG4uc3RvcmVfd2lzZSAuZHItdGFibGUgdHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICM5NTk3OTU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5zdG9yZV93aXNlIC5kci10YWJsZSB0ciB0aCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlY2VjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uc3RvcmVfd2lzZSAuZHItdGFibGUgdHIgdGggLnRvdGFsYmlsbF93cmFwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmNzE0NTg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5zdG9yZV93aXNlIC5kci10YWJsZSB0ciB0aCAudG90YWxiaWxsX3dyYXA6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5zdG9yZV93aXNlIC5kci10YWJsZSAuYnV0dG9uLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzk1OTc5NTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGFibGVDb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi50YWJsZUNvbnRhaW5lciAuaGVhZGluZ193cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnRhYmxlQ29udGFpbmVyIC5oZWFkaW5nX3dyYXAgLmhlYWRpbmdfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi50YWJsZUNvbnRhaW5lciAuaGVhZGluZ193cmFwIC5oZWFkaW5nX2NvbnRhaW5lciAudGFibGVfaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICM2YTZhNmE7XG59XG4udGFibGVDb250YWluZXIgLmhlYWRpbmdfd3JhcCAuaGVhZGluZ19jb250YWluZXIgLnRhYmxlX2hlYWRpbmcgLnRhYmxlX2hlYWRpbmdfY291bnQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjNmE2YTZhO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmNzE0NTg7XG59XG4udGFibGVDb250YWluZXIgLmhlYWRpbmdfd3JhcCAuaGVhZGluZ19jb250YWluZXIgLnRvb2xfdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU1MHB4O1xuICBsZWZ0OiAyODVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzOTBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHotaW5kZXg6IDk7XG59XG4udGFibGVDb250YWluZXIgLmhlYWRpbmdfd3JhcCAuaGVhZGluZ19jb250YWluZXIgLnRvb2xfdGlwIC5jbG9zZV90b29sdGlwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi50YWJsZUNvbnRhaW5lciAuaGVhZGluZ193cmFwIC5oZWFkaW5nX2NvbnRhaW5lciAudG9vbF90aXAgLmRyLXRhYmxlIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4udGFibGVDb250YWluZXIgLmhlYWRpbmdfd3JhcCAuaGVhZGluZ19jb250YWluZXIgLnRvb2xfdGlwIC5kci10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRhYmxlQ29udGFpbmVyIC5oZWFkaW5nX3dyYXAgLmhlYWRpbmdfY29udGFpbmVyIC50b29sX3RpcCAuZHItdGFibGUgLnRhYmxlLWhlYWRlciB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEI4OTQ7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbn1cbi50YWJsZUNvbnRhaW5lciAuaGVhZGluZ193cmFwIC5oZWFkaW5nX2NvbnRhaW5lciAudG9vbF90aXAgLmRyLXRhYmxlIHRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjOTU5Nzk1O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4udGFibGVDb250YWluZXIgLmhlYWRpbmdfd3JhcCAuaGVhZGluZ19jb250YWluZXIgLnRvb2xfdGlwIC5kci10YWJsZSB0ciB0aCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlY2VjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4udGFibGVDb250YWluZXIgLmhlYWRpbmdfd3JhcCAuaGVhZGluZ19jb250YWluZXIgLnRvb2xfdGlwIC5kci10YWJsZSB0ciB0aCAudG90YWxiaWxsX3dyYXAge1xuICBtYXJnaW46IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2Y3MTQ1ODtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnRhYmxlQ29udGFpbmVyIC5oZWFkaW5nX3dyYXAgLmhlYWRpbmdfY29udGFpbmVyIC50b29sX3RpcCAuZHItdGFibGUgdHIgdGggLnRvdGFsYmlsbF93cmFwOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4udGFibGVDb250YWluZXIgLmhlYWRpbmdfd3JhcCAuaGVhZGluZ19jb250YWluZXIgLnRvb2xfdGlwIC5kci10YWJsZSAuYnV0dG9uLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzk1OTc5NTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnRhYmxlQ29udGFpbmVyIC5oZWFkaW5nX3dyYXAgLmhlYWRpbmdfY29udGFpbmVyIC5pY29uLWluZm8tdG9vbHRpcCB7XG4gIGN1cnNvcjogaGVscDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnRhYmxlQ29udGFpbmVyIC5oZWFkaW5nX3dyYXAgLmhlYWRpbmdfY29udGFpbmVyIC5pY29uLWluZm8tdG9vbHRpcDpiZWZvcmUsIC50YWJsZUNvbnRhaW5lciAuaGVhZGluZ193cmFwIC5oZWFkaW5nX2NvbnRhaW5lciAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICBsZWZ0OiA1MCU7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTEwMDtcbn1cbi50YWJsZUNvbnRhaW5lciAuaGVhZGluZ193cmFwIC5oZWFkaW5nX2NvbnRhaW5lciAuaWNvbi1pbmZvLXRvb2x0aXA6aG92ZXI6YmVmb3JlLCAudGFibGVDb250YWluZXIgLmhlYWRpbmdfd3JhcCAuaGVhZGluZ19jb250YWluZXIgLmljb24taW5mby10b29sdGlwOmhvdmVyOmFmdGVyLCAudGFibGVDb250YWluZXIgLmhlYWRpbmdfd3JhcCAuaGVhZGluZ19jb250YWluZXIgLmljb24taW5mby10b29sdGlwOmZvY3VzOmJlZm9yZSwgLnRhYmxlQ29udGFpbmVyIC5oZWFkaW5nX3dyYXAgLmhlYWRpbmdfY29udGFpbmVyIC5pY29uLWluZm8tdG9vbHRpcDpmb2N1czphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcbiAgei1pbmRleDogMTAwO1xufVxuLnRhYmxlQ29udGFpbmVyIC5oZWFkaW5nX3dyYXAgLmhlYWRpbmdfY29udGFpbmVyIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjpiZWZvcmUsIC50YWJsZUNvbnRhaW5lciAuaGVhZGluZ193cmFwIC5oZWFkaW5nX2NvbnRhaW5lciAuaWNvbi1pbmZvLXRvb2x0aXA6Zm9jdXM6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNikgMC4ycztcbn1cbi50YWJsZUNvbnRhaW5lciAuaGVhZGluZ193cmFwIC5oZWFkaW5nX2NvbnRhaW5lciAuaWNvbi1pbmZvLXRvb2x0aXA6aG92ZXI6YWZ0ZXIsIC50YWJsZUNvbnRhaW5lciAuaGVhZGluZ193cmFwIC5oZWFkaW5nX2NvbnRhaW5lciAuaWNvbi1pbmZvLXRvb2x0aXA6Zm9jdXM6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KTtcbn1cbi50YWJsZUNvbnRhaW5lciAuaGVhZGluZ193cmFwIC5oZWFkaW5nX2NvbnRhaW5lciAuaWNvbi1pbmZvLXRvb2x0aXA6YmVmb3JlIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxZW0gMC43NWVtIDAgMC43NWVtO1xuICBib3JkZXItY29sb3I6ICNiYWJiYmIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGJvdHRvbTogMTAwJTtcbiAgY29udGVudDogXCJcIjtcbiAgbWFyZ2luLWxlZnQ6IC0wLjVlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNiksIG9wYWNpdHkgMC42NXMgMC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoLTkwJSk7XG59XG4udGFibGVDb250YWluZXIgLmhlYWRpbmdfd3JhcCAuaGVhZGluZ19jb250YWluZXIgLmljb24taW5mby10b29sdGlwOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2JhYmJiYjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBib3R0b206IDE4MCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGlwKTtcbiAgbWFyZ2luLWxlZnQ6IC0yNnB4O1xuICBwYWRkaW5nOiA3cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKDUwJSk7XG4gIG1pbi13aWR0aDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC50YWJsZUNvbnRhaW5lciAuaGVhZGluZ193cmFwIC5oZWFkaW5nX2NvbnRhaW5lciAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xuICAgIHdpZHRoOiAxMGVtO1xuICB9XG59XG4udGFibGVDb250YWluZXIgLmhlYWRpbmdfd3JhcCAuaGVhZGluZ19jb250YWluZXIgLmljb24taW5mby10b29sdGlwIC5pbWdfZG93bmxvYWQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGFibGVDb250YWluZXIgLmhlYWRpbmdfd3JhcCAuY2xvc2VCdG5Db250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRhYmxlQ29udGFpbmVyIC5kci10YWJsZSB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnRhYmxlQ29udGFpbmVyIC5kci10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRhYmxlQ29udGFpbmVyIC5kci10YWJsZSAudGFibGUtaGVhZGVyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjg5NDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufVxuLnRhYmxlQ29udGFpbmVyIC5kci10YWJsZSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICM5NTk3OTU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi50YWJsZUNvbnRhaW5lciAuZHItdGFibGUgdHIgdGgge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWNlYyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzRhNGE0YTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnRhYmxlQ29udGFpbmVyIC5kci10YWJsZSAuYnV0dG9uLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzk1OTc5NTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4vKiBNUSBTVFlMRVNcbiAg4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAucmVjdGFuZ2xlIHtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIH1cblxuICAubGV2ZWwtMSxcbi5sZXZlbC0yIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5sZXZlbC0xIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG5cbiAgLmxldmVsLTE6OmJlZm9yZSxcbi5sZXZlbC0yLXdyYXBwZXIgPiBsaTo6YmVmb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmxldmVsLTItd3JhcHBlcixcbi5sZXZlbC0yLXdyYXBwZXI6OmFmdGVyLFxuLmxldmVsLTI6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5sZXZlbC0yLXdyYXBwZXIge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgfVxuXG4gIC5sZXZlbC0yLXdyYXBwZXI6OmJlZm9yZSB7XG4gICAgbGVmdDogLTIwcHg7XG4gICAgd2lkdGg6IDJweDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDQwcHgpO1xuICB9XG5cbiAgLmxldmVsLTItd3JhcHBlciA+IGxpOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG59IiwiLyogY2xlYXJmaXggc3R5bGUgKi9cclxuXHJcbi8vIENsZWFyZml4IG1peGluXHJcbiVjbGVhcmZpeCB7XHJcbiAgKnpvb206IDE7XHJcblxyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8vIERlZmluZSB0aGUgYnJlYWtwb2ludHNcclxuQG1peGluIGJyZWFrcG9pbnQoJHBvaW50KSB7XHJcbiAgQGlmICRwb2ludD09c21hbGwtZGV2aWNlIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09bW9iaWxlIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09dGFibGV0IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09dGFibGV0MCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldHBybyB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PWlwYWQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1sYXB0b3Age1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09bGFwdG9wbWF4IHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PWRlc2t0b3Age1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLy9sb2FkZXJcclxuQG1peGluIGxvYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBiYWNrZ3JvdW5kOiAkYmxhY2stb3ZlcmxheTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICB9XHJcbn1cclxuLy8ganVzdGlmeS1jb250ZW50IG1peGluXHJcblxyXG5AbWl4aW4ganVzdGlmeS1jb250ZW50KCRqdXN0aWZ5KSB7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIC1tb3otanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAtbXMtanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIC1tcy1mbGV4LXBhY2s6ICRqdXN0aWZ5O1xyXG59XHJcblxyXG4vLyBhbGlnbi1pdGVtcyBtaXhpblxyXG5cclxuQG1peGluIGFsaWduLWl0ZW1zKCRhbGlnbi1ob3Jpem9udGFsbHkpIHtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiAkYWxpZ24taG9yaXpvbnRhbGx5O1xyXG4gIC1tb3otYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbiAgLW1zLWFsaWduLWl0ZW1zOiAkYWxpZ24taG9yaXpvbnRhbGx5O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taG9yaXpvbnRhbGx5O1xyXG59XHJcblxyXG4vLyBUcmFuc2l0aW9uIG1peGluXHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbikge1xyXG4gIC1tb3otdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxufVxyXG5cclxuLy8gVHJhbnNmb3JtIG1peGluXHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm0pIHtcclxuICAtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbiAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleCB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5AbWl4aW4gYm94LXNoYWRvdygkYXJncykge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkYXJncztcclxuICAtbXMtYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgYm94LXNoYWRvdzogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbn1cclxuXHJcbi8vUGFkZGluZyBtaXhpblxyXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KSB7XHJcbiAgcGFkZGluZy10b3A6ICR0b3A7XHJcbiAgcGFkZGluZy1yaWdodDogJHJpZ2h0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAkYm90dG9tO1xyXG4gIHBhZGRpbmctbGVmdDogJGxlZnQ7XHJcbn1cclxuXHJcbi8vTWFyZ2luIG1peGluXHJcbkBtaXhpbiBtYXJnaW4oJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCkge1xyXG4gIG1hcmdpbi10b3A6ICR0b3A7XHJcbiAgbWFyZ2luLXJpZ2h0OiAkcmlnaHQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogJGJvdHRvbTtcclxuICBtYXJnaW4tbGVmdDogJGxlZnQ7XHJcbn1cclxuXHJcbi8vcG9zaXRpb24gbWl4aW5cclxuQG1peGluIHBvc2l0aW9uKCRwb3NpdGlvbiwgJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xyXG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XHJcbiAgdG9wOiAkdG9wO1xyXG4gIHJpZ2h0OiAkcmlnaHQ7XHJcbiAgYm90dG9tOiAkYm90dG9tO1xyXG4gIGxlZnQ6ICRsZWZ0O1xyXG59XHJcblxyXG5AbWl4aW4gaGVhZGluZy1IMSB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGhlYWRpbmctSDIge1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLUgzIHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gaGVhZGluZy1INCB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1yZWd1bGFyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwYXJhZ3JhcGgge1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtcmVndWxhcjtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNvbG9yQm94IHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib2R5LWJnLWNvbG9yO1xyXG4gIC8vIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDFweCA0cHggMC41cHg7IDtcclxufVxyXG5cclxuQG1peGluIGFuY2hvciB7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG5cclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMsXHJcbiAgJjphY3RpdmUge1xyXG4gICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgJjp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBkZWZhdWx0IGlucHV0IHR5cGUgYW55XHJcbkBtaXhpbiBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBsaW5lLWhlaWdodDogMjlweDtcclxuXHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICRwbGFjZWhvbGRlci1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuICAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vL3RleHRhcmVhXHJcbkBtaXhpbiB0ZXh0YXJlYSB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuXHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICRwbGFjZWhvbGRlci1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIGRlZmF1bHQgYnV0dG9uXHJcbkBtaXhpbiBidXR0b24ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogOXB4IDE1cHggOXB4O1xyXG4gIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxN3B4IDEwcHggLTEwcHggcmdiYSgkdGhlbWUtY29sb3IsIDAuMyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMzAwbXM7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJ1dHRvbjEge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogOXB4IDE1cHggOXB4O1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1saWdodC1ncmV5O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKCR0aGVtZS1jb2xvciwgMC4zKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBib3ggZHJfc3VtbWFyeVxyXG5AbWl4aW4gYm94IHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyMCUpIDBweCAxcHggNHB4IDAuNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5AbWl4aW4gbW9uX25hbWUge1xyXG4gIC8vIHBhZGRpbmc6IDBweCAwIDBweCAxNXB4O1xyXG5cclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbkBtaXhpbiBtb25fbm8ge1xyXG4gIHBhZGRpbmc6IDBweCAwIDBweCAxMHB4O1xyXG4gIC8vIGNvbG9yOiAjNGE0YTRhO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyBkZWZhdWx0IHByb2R1Y3QtYnV0dG9uXHJcbkBtaXhpbiBwcm9kdWN0LWJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogNXB4IDE0cHggNnB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IDJweCB0cmFuc3BhcmVudDtcclxuICAtby1ib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwcHggMnB4IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gcmlnaHQgd2hpdGUgYXJyb3cgaW4gYnV0dG9uXHJcbi8vIEBtaXhpbiBidG5fcmlnaHRfYXJyb3cge1xyXG4vLyAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcblxyXG4vLyAgICY6YWZ0ZXIge1xyXG4vLyAgICAgYmFja2dyb3VuZDogdXJsKCkgbm8tcmVwZWF0O1xyXG4vLyAgICAgd2lkdGg6IDIwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDE3cHg7XHJcbi8vICAgICBjb250ZW50OiBcIlwiO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgcmlnaHQ6IDdweDtcclxuLy8gICAgIHRvcDogMTBweDtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vZm9yIGg0IHdpdGggYm90dG9tIGxpbmVcclxuQG1peGluIHRleHRfdW5kZXJsaW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAycHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL2ZvciBzZWxlY3QgdGFnXHJcblxyXG5AbWl4aW4gc2VsZWN0Qm94IHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vcy1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHVybChzcmMvYXNzZXRzL2ltYWdlcy9saXN0LnN2ZykgcmlnaHQgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDAuN2VtIHRvcCA1MCUsIDAgMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ncmV5O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1pbi13aWR0aDogOTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy9sYWJlbFxyXG5AbWl4aW4gbGFiZWwge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBjb2xvcjogJGNvbG9yLWRhcmstZ3JleTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgJi5kaXNhYmxlIHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vL2ltYWdlIGJveCBzaGFkb3dcclxuQG1peGluIGltZy1ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdy1jb2xvciAwcHggMXB4IDRweCAwLjVweDtcclxuICAtbW96LWJveC1zaGFkb3c6ICRib3gtc2hhZG93LWNvbG9yIDBweCAxcHggNHB4IDAuNXB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGJveC1zaGFkb3ctY29sb3IgMHB4IDFweCA0cHg7XHJcbn1cclxuXHJcbi8vY2hlY2tib3hcclxuXHJcbkBtaXhpbiBjaGVja2JveCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMnB4O1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgdG9wOiAxcHg7XHJcbiAgICAgIGxlZnQ6IDcuNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy90b29sLXRpcFxyXG5cclxuLyo9PSBzdGFydCBvZiBjb2RlIGZvciB0b29sdGlwcyA9PSovXHJcbkBtaXhpbiBkZWZhdWx0LXRvb2wtdGlwIHtcclxuICBjdXJzb3I6IGhlbHA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xMDA7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KSAwLjJzO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFlbSAwLjc1ZW0gMCAwLjc1ZW07XHJcbiAgICBib3JkZXItY29sb3I6ICNiYWJiYmIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0wLjVlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpLCBvcGFjaXR5IDAuNjVzIDAuNXM7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNikgdHJhbnNsYXRlWSgtOTAlKTtcclxuICB9XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2JhYmJiYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICAgIGJvdHRvbTogMTgwJTtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGlwKTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAtOC43NWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNnB4O1xyXG4gICAgLy8gcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNikgMC4ycztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgICAvLyB3aWR0aDogMTcuNWVtO1xyXG4gICAgbWluLXdpZHRoOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01ZW07XHJcbiAgICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9saXN0IHN0eWxlXHJcblxyXG5AbWl4aW4gbGlzdHN0eWxlIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMThweDtcclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCIuXCI7XHJcbiAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDQxcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vL2ZpbGUgdXBsb2FkIGlucHV0XHJcbkBtaXhpbiBmaWxlX2lucHV0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLy9mb3IgYmxvY2sgbWl4aW5cclxuQG1peGluIGJsb2NrQWxsVGV4dCB7XHJcbiAgaDEge1xyXG4gICAgQGluY2x1ZGUgaGVhZGluZy1IMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgQGluY2x1ZGUgaGVhZGluZy1IMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgQGluY2x1ZGUgaGVhZGluZy1IMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgQGluY2x1ZGUgaGVhZGluZy1INDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBhIHtcclxuICAgICAgQGluY2x1ZGUgYW5jaG9yO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6ZW1wdHkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgQGluY2x1ZGUgYW5jaG9yO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYnJlYWRjcnVtYiB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIHVsIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGFuY2hvcjtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLy9yYWRpbyBidXR0b25cclxuXHJcbkBtaXhpbiByYWRpbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgICY6Y2hlY2tlZCxcclxuICAgICY6bm90KDpjaGVja2VkKSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgLy8gbGVmdDogNDcuOCU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRvcDogNXB4O1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWl4aW4gcmFkaW8xIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgJjpjaGVja2VkLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA0Ny44JTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdG9wOiA1cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vL2RlZmF1bHQgdGFibGVcclxuQG1peGluIHRhYmxlIHtcclxuICB0YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICB0aGVhZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ncmV5O1xyXG4gICAgICB0ciB7XHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIC5pY29uLWluZm8tdG9vbHRpcCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGRlZmF1bHQtdG9vbC10aXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hlY2tib3hfd3JhcCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGNoZWNrYm94O1xyXG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0Ym9keSB7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlci1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWNjZXNzLFxyXG4gICAgICAgICAgLmVycm9yLFxyXG4gICAgICAgICAgLm1hcHBlZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3VjY2VzcyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjA1KTtcclxuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZGlzYWJsZSB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXJlZCwgMC4wNSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcmVkO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZDtcclxuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZGlzYWJsZSB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYXBwZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1saWdodC1ibGFjaywgMC4wNSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmRpc2FibGUge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hlY2tib3hfd3JhcCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGNoZWNrYm94O1xyXG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYW5jaG9yO1xyXG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgaW1nLWJveC1zaGFkb3c7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkdGhlbWUtY29sb3IsIDAuMDUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24taW5mby10b29sdGlwIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGRlZmF1bHQtdG9vbC10aXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgXCJzcmMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwic3JjL3Njc3MvbWl4aW5zLnNjc3NcIjtcclxuXHJcbi5tYXQtcGFnaW5hdG9yIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBhbm5lbC1zZWN0aW9uIHtcclxuICAgIC5yZWNvbkxvYWRpbmdEYXRhIHtcclxuICAgICAgICBAaW5jbHVkZSBsb2FkZXI7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAucGFnZV9jb250ZW50X2Rhc2gge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIC5maWx0ZXJfaW5wdXRfd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQtZGFuZ2VyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBsYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZF90ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNlbGVjdEJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGlucHV0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICByaWdodDogNDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRvcDogMzdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tb250aEltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMzdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kYXRlSW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkX3RleHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgaW1nLWJveC1zaGFkb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MyU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2JveF93cmFwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJhZGlvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MyUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkICR0aGVtZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtY29sb3IsIDAuMDYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlZV9hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIzOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hY3Rpb25fYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBidXR0b247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRxcl90YWJsZV93cmFwIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAubG9hZGluZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubmd4LW1hdC1kcnAtY2FsZW5kYXJbX25nY29udGVudC1vbmEtYzNdIHtcclxuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWwsPHN2ZyBmaWxsPVwiIzAwMDAwMFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMjRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+IDxwYXRoIGQ9XCJNOSAxMUg3djJoMnYtMnptNCAwaC0ydjJoMnYtMnptNCAwaC0ydjJoMnYtMnptMi03aC0xVjJoLTJ2Mkg4VjJINnYySDVjLTEuMTEgMC0xLjk5LjktMS45OSAyTDMgMjBjMCAxLjEuODkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCAxNkg1VjloMTR2MTF6XCIvPiA8cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPjwvc3ZnPik7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbn1cclxuLmJveF93cmFwIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAuaGVhZGluZ193cmFwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmhlYWRpbmdfY29udGFpbmVyIHtcclxuICAgICAgICAgICAgLmhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweCA1cHggMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRvd25sb2FkX2J0bl93cmFwIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcblxyXG4gICAgICAgICAgICAuaWNvbi1pbmZvLXRvb2x0aXAge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZGVmYXVsdC10b29sLXRpcDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyX25ldyB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBtYXJnaW46IDMwcHggMCAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcblxyXG4gICAgICAgIG9sIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlY3RhbmdsZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIC5kb3dubG9hZF9idG5fd3JhcCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuXHJcbiAgICAgICAgICAgICAgICAuaWNvbi1pbmZvLXRvb2x0aXAge1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGRlZmF1bHQtdG9vbC10aXA7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC5pbWdfcmVmcmVzaCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTlweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxldmVsLTEge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byA0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMTZhMDg1O1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZXZlbC0yLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjUlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMjBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAyMHB4KTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPiBsaSB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxldmVsLTIge1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byA0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZXZlbC0zLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0yMHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogY2FsYygyNSUgLSA1cHgpO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlICsgMTBweCk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPiBsaSB7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxldmVsLTMge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN2I5ZmUwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGV2ZWwtNC13cmFwcGVyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAubGV2ZWwtNCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzhlNDRhZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnN0b3JlX3dpc2Uge1xyXG4gICAgLnRhYmxlX2hlYWRpbmdfd3JhcCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWdfcmVmcmVzaCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgICAgICAgICAvLyBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24taW5mby10b29sdGlwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZGVmYXVsdC10b29sLXRpcDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRyLXRhYmxlIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YWJsZS1oZWFkZXIge1xyXG4gICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICM5NTk3OTU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVjZWMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNGE0YTRhO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgLnRvdGFsYmlsbF93cmFwIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmNzE0NTg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uLXN0eWxlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogIzk1OTc5NTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRhYmxlQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAuaGVhZGluZ193cmFwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAuaGVhZGluZ19jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAudGFibGVfaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNmE2YTZhO1xyXG5cclxuICAgICAgICAgICAgICAgIC50YWJsZV9oZWFkaW5nX2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNmE2YTZhO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmNzE0NTg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gLmJvdHRvbV9hcnJvdyB7XHJcbiAgICAgICAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIC8vICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgLy8gICAgIC8vIHRvcDogNTVweDtcclxuICAgICAgICAgICAgLy8gICAgIGxlZnQ6IDM2N3B4O1xyXG4gICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAvLyAgICAgYm9yZGVyLWxlZnQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIC8vICAgICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIC8vICAgICBib3JkZXItYm90dG9tOiAxNHB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgICAgIC8vICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAudG9vbF90aXAge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiA1NTBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDI4NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzOTBweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggMCByZ2IoMCAwIDAgLyAxMCUpLCAwIDJweCAxNXB4IDAgcmdiKDAgMCAwIC8gNSUpO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICAgICAgICAgIC5jbG9zZV90b29sdGlwIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyLXRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50YWJsZS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM5NTk3OTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVjZWMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNGE0YTRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvdGFsYmlsbF93cmFwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmNzE0NTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYnV0dG9uLXN0eWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzk1OTc5NTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmljb24taW5mby10b29sdGlwIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGRlZmF1bHQtdG9vbC10aXA7XHJcbiAgICAgICAgICAgICAgICAuaW1nX2Rvd25sb2FkIHtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2VCdG5Db250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZHItdGFibGUge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICM5NTk3OTU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVjZWMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNGE0YTRhO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b24tc3R5bGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTU5Nzk1O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiBNUSBTVFlMRVNcclxuICDigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgIC5yZWN0YW5nbGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubGV2ZWwtMSxcclxuICAgIC5sZXZlbC0yIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubGV2ZWwtMSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubGV2ZWwtMTo6YmVmb3JlLFxyXG4gICAgLmxldmVsLTItd3JhcHBlciA+IGxpOjpiZWZvcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxldmVsLTItd3JhcHBlcixcclxuICAgIC5sZXZlbC0yLXdyYXBwZXI6OmFmdGVyLFxyXG4gICAgLmxldmVsLTI6OmFmdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAubGV2ZWwtMi13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxldmVsLTItd3JhcHBlcjo6YmVmb3JlIHtcclxuICAgICAgICBsZWZ0OiAtMjBweDtcclxuICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlICsgNDBweCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmxldmVsLTItd3JhcHBlciA+IGxpOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG4vLyBnbG9iYWwtdmFyaWFibGVcclxuJGhlYWRlci1jb2xvcjogIzI2MjYyNjtcclxuJGJvZHktYmctY29sb3I6ICNGM0YzRjM7XHJcbiR0aGVtZS1jb2xvcjogIzAwQjg5NDtcclxuJGNvbG9yLXJlZDogI0ZGNEI0QjtcclxuJGNvbG9yLXZhbGlkLWVycm9yOiNFNTM5MzU7XHJcbiRjb2xvci1pbnZhbGlkLWVycm9yOiNCNzFjMWM7XHJcbiRjb2xvci1tYWdlbnRhOiAjYmM2NDljO1xyXG4kY29sb3ItcGluazogI2Y0OTRjODtcclxuJGNvbG9yLWdyZWVuOiAjODRDMTQwO1xyXG4kY29sb3ItbGlnaHQtZ3JlZW46ICNCQ0Q1MzM7XHJcbiRjb2xvci1ibHVlOiAjOTRkMGVhO1xyXG4kY29sb3ItZGFyay1ncmV5OiAjOUE5QTlBO1xyXG4kY29sb3ItbGlnaHQtZ3JleTogI2Y5ZjlmOTtcclxuJGNvbG9yLWV4dHJhLWxpZ2h0LWdyZXk6ICNGNEY0RjQ7XHJcbiRjb2xvci1vcmFuZ2U6ICNFMzc4MjY7XHJcbiRjb2xvci1saWdodC1vcmFuZ2U6ICNFQjk4MjI7XHJcbiRjb2xvci1leHRyYS1saWdodC1vcmFuZ2U6ICNGQ0FGMTc7XHJcbiRjb2xvci13aGl0ZTogI2ZmZmZmZjtcclxuJGJvcmRlci1jb2xvcjogI2VlZWNlYztcclxuJG5vdGlmaWNhdGlvbi1iZzogI2NlZTNmMDtcclxuJGNvbG9yLWxpZ2h0LWJsYWNrOiAjNEE0QTRBO1xyXG4kY29sb3ItYmxhY2s6ICMwMDAwMDA7XHJcbiRjb2xvci15ZWxsb3c6ICNmOWU5MDc7XHJcbiRib3gtc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLC4yKTtcclxuJGJsYWNrLW92ZXJsYXk6IHJnYmEoMCwwLDAsMC43KTtcclxuJHdoaXRlLW92ZXJsYXk6IHJnYigyNDcsIDI0NywgMjQ3KTtcclxuJHBsYWNlaG9sZGVyLWNvbG9yOiAjYWNhY2FjO1xyXG4kY29sb3ItYmFja2dyb3VuZDogI2UxZmJmYTtcclxuJGNvbG9yLWluZm86ICNGN0I1MDA7XHJcbiRmb250LXJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LWxpZ2h0OiAzMDA7XHJcbiRmb250LXJlZ3VsYXI6IDQwMDtcclxuJGZvbnQtYm9sZDogNzAwO1xyXG4kZm9udC1oMTogMzRweDtcclxuJGZvbnQtaDI6IDMwcHg7XHJcbiRmb250LWgzOiAyNHB4O1xyXG4kZm9udC1oNDogMThweDtcclxuJGZvbnQtaDU6IDE2cHg7XHJcbiRmb250LWg2OiAxNHB4O1xyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/DR_Summary/summary/summary.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/DR_Summary/summary/summary.component.ts ***!
    \*********************************************************/

  /*! exports provided: SummaryComponent */

  /***/
  function srcAppDR_SummarySummarySummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SummaryComponent", function () {
      return SummaryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @src/app/service/utility.service */
    "./src/app/service/utility.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _src_app_service_global_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @src/app/service/global.service */
    "./src/app/service/global.service.ts");
    /* harmony import */


    var _src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _src_app_allprograms_program_program_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @src/app/allprograms/program/program.component */
    "./src/app/allprograms/program/program.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angular7-csv/dist/Angular-csv */
    "./node_modules/angular7-csv/dist/Angular-csv.js");
    /* harmony import */


    var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_10__);

    var SummaryComponent = /*#__PURE__*/function () {
      function SummaryComponent(dataService, globalService, httpClient, modalService, utilityService, router) {
        _classCallCheck(this, SummaryComponent);

        this.dataService = dataService;
        this.globalService = globalService;
        this.httpClient = httpClient;
        this.modalService = modalService;
        this.utilityService = utilityService;
        this.router = router; // displayedColumns: string[] = [
        //   'brandName',
        //   'executionDate',
        //   'status',
        //   'settlementMode',
        //   'action',
        //   'reportPath'];
        // @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
        // @ViewChild(MatSort, { static: false }) sort: MatSort;

        this.isLogin = false;
        this.tenantCode = [];
        this.errorMsg = 'Loading! Please wait ...';
        this.reportTypeSelect = "";
        this.errorMsgInfo = false;
        this.arrProgramInfoWithKey = {};
        this.loadingData = true;
        this.arrselectedProgram = [];
        this.allProgram = [];
        this.toolTipFailValue = [];
        this.isProgramClicked = false;
        this.isProgramsVisble = false;
        this.isClickedSearch = false;
        this.dowloadtable = true;
        this.loadingTable = false;
        this.isMonthSelect = false;
        this.isDateSelect = false;
        this.searchInProgress = false;
        this.dqrSearchData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"]();
        this.isLoading = true;
        this.userDetails = [];
        this.DrSummary = [];
        this.MonthWiseSummary = [];
        this.MonthWiseSummaryData = [];
        this.monthData = [];
        this.isTooltipOpen = false;
        this.isFailed = false;
        this.totalBillReceived = false;
        this.failedBill = true;
        this.successBill = false;
        this.isSMS = false;
        this.isWhatsApp = false;
        this.isSendEmail = false;
        this.isopentotalbill = true;
        this.storeWiseSummary = false;
        this.summaryData = false;
        this.storeWiseSummaryData = [];
        this.userData = [];
        this.csvOptionsStoreWise = {
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
        this.currentDate = new Date();
        this.year = this.currentDate.getFullYear();
        this.month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
        this.day = String(this.currentDate.getDate()).padStart(2, '0');
        this.newDate = this.year + '-' + this.month + '-' + this.day;
        this.range = {
          fromDate: new Date(),
          toDate: new Date()
        };
        this.presets = [];
        this.csvOptions = {
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalseparator: '.',
          showLabels: true,
          useBom: true,
          noDownload: false,
          headers: ["Brand Name", "Bill No", "Bill Date", "Store Code", "Store Name", "Customer Name", "MObile No", "Email ID", "Short URL", "Read Count", "Status", "Register No", "Bill Amount", "Base URL", "Remarks"]
        };
        this.csvOptionsDownload = {
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalseparator: '.',
          showLabels: true,
          useBom: true,
          noDownload: false,
          headers: ["Brand Name", "Bill No", "Bill Date", "Store Code", "Customer Name", "MObile No", "Email ID", "Status", "Description"]
        };
      }

      _createClass(SummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (localStorage.getItem('userInfo') == null) {
            this.router.navigate(['login']);
          } else {
            this.isLogin = true;
          }

          var today = new Date();
          var fromMin = new Date(today.getFullYear(), today.getMonth() - 2, 1);
          var fromMax = new Date(today.getFullYear(), today.getMonth() + 1, 0);
          var toMin = new Date(today.getFullYear(), today.getMonth() - 1, 1);
          var toMax = new Date(today.getFullYear(), today.getMonth() + 2, 0);
          this.setupPresets();
          this.options = {
            presets: this.presets,
            format: 'mediumDate',
            range: {
              fromDate: today,
              toDate: today
            },
            applyLabel: "Submit",
            calendarOverlayConfig: {
              shouldCloseOnBackdropClick: false,
              hasBackdrop: false
            } // cancelLabel: "Cancel",
            // excludeWeekends:true,
            // fromMinMax: {fromDate:fromMin, toDate:fromMax},
            // toMinMax: {fromDate:toMin, toDate:toMax}

          };
          var details = JSON.parse(localStorage.getItem('userInfo'));
          this.userDetails = details[0];
          this.dataService.GetTenentCods(this.userDetails.userID).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJson = JSON.parse(resSTR);

            if (resJson.messageCode == '200' && resJson.data != null) {
              _this.errorMsg = 'Success';
              _this.loadingData = false;
              _this.tenantCode = resJson.data; // console.log("resJson.data tanent code", this.tenantCode);
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
              _this.loadingData = false;
              _this.errorMsg = 'Internal Serve Error! Please Try Again...';
            } else if (resJson.statusCode == '200' && resJson.data == null) {
              _this.errorMsg = 'No Data Found! Please Try Again...';
            }
          });
        } // ngAfterViewInit() {
        //   this.dqrSearchData.paginator = this.paginator;
        //   this.dqrSearchData.sort = this.sort;
        // }

      }, {
        key: "onOpenCalendar",
        value: function onOpenCalendar(container) {
          this.isProgramClicked = false;

          container.monthSelectHandler = function (event) {
            container._store.dispatch(container._actions.select(event.date)); // console.log("selected month", event.date)

          };

          container.setViewMode('month');
        }
      }, {
        key: "setupPresets",
        value: function setupPresets() {
          var backDate = function backDate(numOfDays) {
            var today = new Date();
            return new Date(today.setDate(today.getDate() - numOfDays));
          };

          var today = new Date();
          var yesterday = backDate(1);
          var minus7 = backDate(7);
          var minus30 = backDate(30);
          var currMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
          var currMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
          var lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
          var lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
          this.presets = [{
            presetLabel: "Yesterday",
            range: {
              fromDate: yesterday,
              toDate: today
            }
          }, {
            presetLabel: "Last 7 Days",
            range: {
              fromDate: minus7,
              toDate: today
            }
          }, {
            presetLabel: "Last 30 Days",
            range: {
              fromDate: minus30,
              toDate: today
            }
          }, {
            presetLabel: "This Month",
            range: {
              fromDate: currMonthStart,
              toDate: currMonthEnd
            }
          }, {
            presetLabel: "Last Month",
            range: {
              fromDate: lastMonthStart,
              toDate: lastMonthEnd
            }
          }];
        } //date range end

      }, {
        key: "updateRange",
        value: function updateRange(range) {
          if (range.toDate < range.fromDate) {
            alert('Not selected valid date !');
          } else {
            this.range = range; // console.log("range new",this.range.fromDate,"===", this.range.toDate);
            // console.log(this.range.fromDate.getDate);
          }

          this.startDate = this.utilityService.convertDate(this.range.fromDate);
          this.endDate = this.utilityService.convertDate(this.range.toDate);
        }
      }, {
        key: "changeSettData",
        value: function changeSettData(selected) {
          if (selected == '1') {
            if (this.isMonthSelect == true) {
              this.isMonthSelect = false;
              this.isDateSelect = true;
            } else {
              this.isDateSelect = true;
            }
          } else {
            if (this.isDateSelect == true) {
              this.isDateSelect = false;
              this.isMonthSelect = true;
            } else {
              this.isMonthSelect = true;
            }
          }

          this.isProgramClicked = false;
        }
      }, {
        key: "downloadcsvOptionsStoreWise",
        value: function downloadcsvOptionsStoreWise() {
          // this.loadingData=true;
          new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_10__["AngularCsv"](this.userData, "Store wise summary", this.csvOptionsStoreWise); // this.loadingData=false;
        }
      }, {
        key: "SelectReportType",
        value: function SelectReportType(reporttype) {
          if (reporttype == '1') {
            this.reportTypeSelect = 'summaryReport';
          }

          if (reporttype == '2') {
            this.reportTypeSelect = 'storeWiseSummaryReport';
          } // this.isProgramClicked = false

        }
      }, {
        key: "getProgram",
        value: function getProgram() {
          this.arrselectedProgram = [];
          var arrProgram = "";
          var arrProgramId = ""; // for (let i = 0; i < this.tenantCode.length; i++) {
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
      }, {
        key: "getselectedProgram",
        value: function getselectedProgram(data, index) {
          // console.log("data===", data);
          this.selectedProgram = data.tenantCode;
          this.selectedProgramId = data.tenantID;
        }
      }, {
        key: "seeAllPrograms",
        value: function seeAllPrograms() {
          var _this2 = this;

          this.isProgramClicked = false;
          this.isProgramsVisble = true;
          var modalRef = this.modalService.open(_src_app_allprograms_program_program_component__WEBPACK_IMPORTED_MODULE_8__["ProgramComponent"], {
            windowClass: 'see_all_programs',
            size: 'xl',
            centered: true,
            backdrop: 'static',
            keyboard: false
          });
          this.globalService.setUploadData(this.tenantCode);
          modalRef.result.then(function (result) {
            _this2.tenantCode = result;

            _this2.getProgram();
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "downloadCSV",
        value: function downloadCSV(requestType) {
          var _this3 = this;

          this.loadingData = true;
          this.dataService.DownloadMonthWiseSummary(this.selectedProgramId, this.selectedProgram, this.isMonthSelect ? this.requestDate : this.utilityService.convertDate(this.range.fromDate), parseInt(this.userDetails.userID), this.utilityService.convertDate(this.range.toDate), requestType, this.isMonthSelect ? this.requestDate.getMonth() : 0, this.isMonthSelect ? this.requestDate.getFullYear() : 0).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJson = JSON.parse(resSTR);

            if (resJson.messageCode == '200') {
              _this3.loadingData = false;
              _this3.MonthWiseSummary = resJson.data;

              var newData = _this3.MonthWiseSummary.map(function (ele) {
                // delete ele.baseURL;
                return ele;
              });

              _this3.MonthWiseSummary = newData; // console.log("response DownloadMonthWiseSummary  this.requestDate, parseInt(this.userDetails.userID), this.requestDate.getMonth(), this.requestDate.getFullYear()", this.MonthWiseSummary);

              new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_10__["AngularCsv"](_this3.MonthWiseSummary, "digital recipt summary", _this3.csvOptions);
            } else {
              _this3.loadingData = false;
              alert("sorry !! some tecnical issue");
            }
          });
        } // downloadCSVStoreWiseConsolideSummary(requestType) {
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

      }, {
        key: "getSearchData",
        value: function getSearchData(searchFilterData) {
          var _this4 = this;

          this.isProgramClicked = false;
          this.isLoading = true;
          this.loadingData = true;
          this.loadingTable = false;
          this.responceMsg = '';
          searchFilterData.value.tenantCode = this.selectedProgram;
          delete searchFilterData.value.ReportType;
          console.log('searchFilterData.value', searchFilterData.value);
          this.searchInProgress = true;
          searchFilterData.value.tenantid = this.selectedProgramId;
          searchFilterData.value.userId = parseInt(this.userDetails.userID);

          if (this.isDateSelect) {
            searchFilterData.value.requetDate = this.utilityService.convertDate(this.range.fromDate);
            searchFilterData.value.toDate = this.utilityService.convertDate(this.range.toDate);
            this.requestDate = searchFilterData.value.requetDate;
          } else {
            searchFilterData.value.requetDate = searchFilterData.value.requetDate;
            this.requestDate = searchFilterData.value.requetDate;
            searchFilterData.value.month = searchFilterData.value.requetDate.getMonth();
            searchFilterData.value.year = searchFilterData.value.requetDate.getFullYear();
          }

          if (this.reportTypeSelect === 'summaryReport') {
            this.dataService.GetDRSummaryData(searchFilterData.value).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJson = JSON.parse(resSTR);

              if (resJson.messageCode == '200') {
                _this4.summaryData = true;
                _this4.storeWiseSummary = false; // this.selectedProgram="";
                // this.requetDate="";

                _this4.isLoading = false;
                _this4.loadingData = false;
                _this4.DrSummary = resJson.data; // console.log("response", this.DrSummary);

                _this4.SMSSentRatio = Math.trunc(resJson.data[0].smsSentRatio); // console.log("SMS",  this.SMSSentRatio);
              } else {
                _this4.isLoading = false;
                _this4.loadingData = false;
                alert("sorry no data found");
              }
            });
          } else {
            this.dataService.GetDRSummaryDataStoreWise(searchFilterData.value).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJson = JSON.parse(resSTR);

              if (resJson.messageCode == '200') {
                // this.selectedProgram="";
                // this.requetDate="";
                _this4.storeWiseSummary = true;
                _this4.summaryData = false;
                _this4.isLoading = false;
                _this4.loadingData = false;
                _this4.storeWiseSummaryData = resJson.data;
                _this4.userData = resJson.data; // console.log("response", this.DrSummary);
                // this.SMSSentRatio = Math.trunc(resJson.data[0].smsSentRatio);
                // console.log("SMS",  this.SMSSentRatio);
              } else {
                _this4.isLoading = false;
                _this4.loadingData = false;
                alert("sorry no data found");
              }
            });
          }
        }
      }, {
        key: "getMonthWiseData",
        value: function getMonthWiseData() {
          var _this5 = this;

          this.loadingTable = true;
          this.loadingData = true;
          document.getElementById('clickTotal').setAttribute("class", "addBorder"); // console.log("getMonthWiseErrorData", this.selectedProgramId, this.selectedProgram, this.isDateSelect ? this.startDate : this.requestDate, parseInt(this.userDetails.userID), this.isDateSelect ? this.startDate : this.requestDate, this.isDateSelect ? 0 : this.requestDate.getMonth(), this.isDateSelect ? 0 : this.requestDate.getFullYear());

          this.dataService.GetMonthWiseErrorSummary(this.selectedProgramId, this.selectedProgram, this.isDateSelect ? this.startDate : this.requestDate, parseInt(this.userDetails.userID), this.isDateSelect ? this.endDate : this.requestDate, this.isDateSelect ? 0 : this.requestDate.getMonth(), this.isDateSelect ? 0 : this.requestDate.getFullYear()).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJson = JSON.parse(resSTR);

            if (resJson.messageCode == '200') {
              _this5.loadingData = false;
              _this5.MonthWiseSummaryData = resJson.data;
              _this5.toolTipFailValue = resJson.toolTipValue; // console.log("this.toolTipFailValue", this.toolTipFailValue);
              // if(this.dowloadtable){
              //   new AngularCsv(this.MonthWiseSummary, "digital recipt summary", this.csvOptions);
              // }
            } else {
              _this5.loadingData = false;
              alert("sorry !! some tecnical issue");
            }
          });
        }
      }, {
        key: "backButton",
        value: function backButton() {
          this.loadingTable = false;
        }
      }, {
        key: "downloadFailBillSummary",
        value: function downloadFailBillSummary() {
          new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_10__["AngularCsv"](this.MonthWiseSummaryData, "Fail Bills Summary", this.csvOptionsDownload);
        }
      }, {
        key: "closeTooltip",
        value: function closeTooltip() {
          this.isTooltipOpen = true;
        }
      }, {
        key: "closeTooltipCross",
        value: function closeTooltipCross() {
          this.isTooltipOpen = false;
        }
      }, {
        key: "getSummaryByFailedMsg",
        value: function getSummaryByFailedMsg(data) {
          var _this6 = this;

          this.isLoading = true;
          this.isFailed = false;
          this.totalBillReceived = false;
          this.failedBill = true;
          this.successBill = false;
          this.isSMS = false;
          this.isWhatsApp = false;
          this.isSendEmail = false;
          this.errorMessage = data.label;
          this.isopentotalbill = true; // console.log(" this.failMsg", this.errorMessage)
          // if (this.changeDate == "") {
          //   this.datefrompicker = new Date().toISOString();
          //   console.log("if date", this.datefrompicker, "====", this.changeDate)
          // }
          // else {
          //   this.datefrompicker = this.changeDate;
          //   console.log("else date", this.datefrompicker, "====", this.changeDate)
          // }
          // this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy')

          this.dataService.GetErrorWiseSummaryStatus(this.selectedProgram, this.requestDate, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.errorMessage).subscribe(function (res) {
            _this6.isLoading = false;
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR); // console.log("resSTR", resSTR, "resJSON", resJSON);

            if (resJSON.messageCode == '200') {
              _this6.MonthWiseSummaryData = resJSON.data; // console.log(" this.MonthWiseSummaryData", resJSON.data, this.MonthWiseSummaryData)
            } else {
              _this6.isLoading = false;
            }
          });
        }
      }]);

      return SummaryComponent;
    }();

    SummaryComponent.ctorParameters = function () {
      return [{
        type: _src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
      }, {
        type: _src_app_service_global_service__WEBPACK_IMPORTED_MODULE_6__["GlobalService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }, {
        type: _src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/DR_Summary/summary/summary.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./summary.component.scss */
      "./src/app/DR_Summary/summary/summary.component.scss"))["default"]]
    })], SummaryComponent);
    /***/
  }
}]);
//# sourceMappingURL=DR_Summary-summary-module-es5.js.map