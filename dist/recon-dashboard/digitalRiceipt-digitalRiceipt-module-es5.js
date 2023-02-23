function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["digitalRiceipt-digitalRiceipt-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/digitalRiceipt/digital-riceipt/digital-riceipt.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/digitalRiceipt/digital-riceipt/digital-riceipt.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDigitalRiceiptDigitalRiceiptDigitalRiceiptComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mt-4 digital-reciept\">\r\n    <div class=\"container\" *ngIf=\"!openSearchTable\">\r\n        <div class=\"reconLoadingData\" *ngIf=\"loadingData\">\r\n            <button class=\"btn btn-dark\">\r\n                <span class=\"text-light spinner-border spinner-border-sm\"></span>\r\n                <span>Loading! Please wait ...</span>\r\n                <!-- <p class=\"text-danger\">{{errorMsg}}</p> -->\r\n            </button>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class='card-body'>\r\n                <div class=\"title d-flex justify-content-between\">\r\n                    <div class=\"table_heading_wrap\">\r\n                        <h3>Digital Reciept Summary</h3>\r\n                        <div>\r\n                            <small class=\"icon-info-tooltip\" data-tip=\"Download bill summary\" tabindex=\"2\">\r\n                                <img class=\"img_refresh\" src=\"/assets/images/downloadTable.svg\" (click)=\"downloadCSV()\">\r\n                            </small>\r\n                        </div>\r\n                        <!-- <button (click)=\"downloadCSV()\" class=\"btndownload\">Download table</button> -->\r\n                    </div>\r\n\r\n                    <!-- <ngx-mat-drp (selectedDateRangeChanged)=\"updateRange($event)\" [options]=\"options\"\r\n                    #dateRangePicker></ngx-mat-drp> -->\r\n                    <div class=\"search-inovice\">\r\n                        <input id=\"searhDate\" type=\"date\" (change)=\"Filters($event)\" [value]=\"todaysDate\" />\r\n                        <!-- <button class=\"search-inovice\" (click)=\"openSearchingModel()\" data-toggle=\"modal\"\r\n                            data-target=\".bd-example-modal-lg\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button> -->\r\n\r\n                        <!-- <small class=\"icon-info-tooltip\" data-tip=\"Download Recipt Summary\" > -->\r\n                        <!-- <button class=\"search-inovice  download js-btn-tooltip\" (click)=\"downloadCSV()\"\r\n                            data-toggle=\"tooltip\" data-placement=\"top\" data-custom-class=\"tooltip-primary\"\r\n                            title=\"Download bill summary\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i></button> -->\r\n                        <small class=\"icon-info-tooltip\" data-tip=\"Refresh \" tabindex=\"2\">\r\n                            <img class=\"img_refresh\" src=\"/assets/images/refresh.svg\" (click)=\"refresh()\">\r\n                        </small>\r\n\r\n\r\n                        <!-- <img src=\"/assets/images/pencil.svg\">\r\n                        </small> -->\r\n                    </div>\r\n                    <!-- <ngx-mat-drp (selectedDateRangeChanged)=\"updateRange($event)\" [options]=\"options\"\r\n                    #dateRangePicker></ngx-mat-drp> -->\r\n                </div>\r\n\r\n\r\n\r\n                <div class='mt-4 dr-table'>\r\n                    <table>\r\n                        <tbody>\r\n                            <tr class=\"table-header\">\r\n                                <th>S.No</th>\r\n                                <!-- <th>Request Date</th> -->\r\n                                <th>Brand Name</th>\r\n                                <th>#Total</th>\r\n                                <th>#Failed</th>\r\n                                <th>#Success</th>\r\n                                <th>#Open%</th>\r\n                                <th>#Print</th>\r\n                                <th>#SMS</th>\r\n                                <th>#WhatsApp</th>\r\n                                <th>#Email</th>\r\n                                <th>#Stores</th>\r\n                                <th>Search</th>\r\n                                <!-- <th>View Logs</th> -->\r\n                            </tr>\r\n                            <tr *ngFor=\"let datas of userData;let i = index\">\r\n                                <th>{{i+1}}</th>\r\n                                <!-- <th>{{datas.requetDate | date}}</th> -->\r\n                                <th>{{datas.tenantCode}}</th>\r\n                                <th>\r\n                                    <p class=\"totalbill_wrap total_count_wrap\" (click)=\"getInvoiceBySummary(datas,i)\">\r\n                                        {{datas.totalBills}}\r\n                                    </p>\r\n                                    <!-- <label class=\"resend\" *ngIf=totalIsClick.includes(i)>see summary below</label> -->\r\n                                </th>\r\n                                <th>\r\n                                    <p class=\"totalbill_wrap faild_count_wrap\"\r\n                                        (click)=\"getInvoiceBySummaryFailed(datas)\">{{datas.fail}}\r\n                                    </p>\r\n                                </th>\r\n                                <th>\r\n                                    <p class=\"totalbill_wrap success_count_wrap\"\r\n                                        (click)=\"getInvoiceBySummarySucess(datas)\">\r\n                                        {{datas.success}}</p>\r\n                                </th>\r\n                                <th>\r\n                                    <p class=\"totalbill_wrap total_count_wrap\"\r\n                                        (click)=\"getInvoiceBySummaryPercent(datas)\">\r\n                                        {{datas.readCount}}</p>\r\n                                </th>\r\n                                <th>\r\n                                    <p class=\"totalbill_wrap email_count_wrap\"\r\n                                        (click)=\"getInvoiceBySummaryPrint(datas)\">\r\n                                        {{datas.print}}\r\n                                    </p>\r\n                                </th>\r\n                                <th>\r\n                                    <p class=\"totalbill_wrap sms_count_wrap\" (click)=\"getInvoiceBySummarySms(datas)\">\r\n                                        {{datas.sms}}</p>\r\n                                </th>\r\n                                <th>\r\n                                    <p class=\"totalbill_wrap wap_count_wrap\"\r\n                                        (click)=\"getInvoiceBySummaryWhatsapp(datas)\">\r\n                                        {{datas.whatsAPP}}\r\n                                    </p>\r\n                                </th>\r\n                                <th>\r\n                                    <p class=\"totalbill_wrap email_count_wrap\"\r\n                                        (click)=\"getInvoiceBySummaryEmail(datas)\">{{datas.email}}\r\n                                    </p>\r\n                                </th>\r\n\r\n\r\n\r\n                                <th>\r\n                                    <p class=\"store\" (click)=\"getStoreDetail(datas)\">\r\n                                        {{datas.distinctStoreCode}}\r\n                                    </p>\r\n                                </th>\r\n\r\n\r\n\r\n                                <th><button class=\"button-style\" (click)=\"openSearchModal(datas)\" data-toggle=\"modal\"\r\n                                        data-target=\".bd-example-modal-lg\"><i class=\"fa fa-search\"\r\n                                            aria-hidden=\"true\"></i></button></th>\r\n                                <!-- <th><button class=\"button-style\" (click)=\"openViewModal()\"><i class=\"fa fa-eye\"\r\n                                            aria-hidden=\"true\"></i></button></th> -->\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"card mt-4\">\r\n            <div class=\"reconLoadingData\" *ngIf=\"loadingDataSummary\">\r\n                <button class=\"btn btn-dark\">\r\n                    <span class=\"text-light spinner-border spinner-border-sm\"></span>\r\n                    <span>Loading! Please wait ...</span>\r\n                    <!-- <p class=\"text-danger\">{{errorMsg}}</p> -->\r\n                </button>\r\n            </div>\r\n\r\n\r\n\r\n\r\n            <div class='card-body' *ngIf=\"this.isopentotalbill && this.invoicesummary.length > 0\">\r\n                <div class=\"backbuttonSetting d-flex justify-content-between\">\r\n\r\n                    <h4 class=\"table_heading\" *ngIf=\"invoicesummary.length>0\">Bill Details #{{TenantCode}}\r\n                        ({{datefrompicker | date}}) -&nbsp;\r\n                        <h4 *ngIf=\"!isFailed\" class=\"table_heading_count\" (click)=\"closeTooltip()\">\r\n                            {{invoicesummaryMessage}}</h4>\r\n\r\n                        <h4 *ngIf=\"isFailed\" class=\"table_heading_total\" (click)=\"closeTooltip()\">\r\n                            {{invoicesummaryMessage}}</h4>\r\n\r\n                        <div *ngIf=\"isTooltipOpen\" class=\"bottom_arrow\"></div>\r\n                        <div *ngIf=\"isTooltipOpen\" class=\"tool_tip\">\r\n                            <button type=\"button\" class=\"close close_tooltip\"\r\n                                (click)=\"closeTooltipCross()\">&times;</button>\r\n                            <div class='dr-table'>\r\n                                <table>\r\n                                    <tbody>\r\n                                        <tr class=\"table-header\">\r\n                                            <th *ngIf=\"!total\">S.No</th>\r\n                                            <th *ngIf=\"!total\">Message</th>\r\n                                            <th *ngIf=\"!total\">#Count</th>\r\n                                            <th *ngIf=\"total\">#Total</th>\r\n                                            <th *ngIf=\"total\">#Unique Hit</th>\r\n                                        </tr>\r\n                                        <tr *ngFor=\"let datas of toolTipFailValue;let i = index\">\r\n                                            <th *ngIf=\"!total\">{{i+1}}</th>\r\n                                            <th *ngIf=\"!total\">{{datas.label}}</th>\r\n                                            <!-- <th>{{datas.requetDate | date}}</th> -->\r\n                                            <th (click)=\"getSummaryByFailedMsg(datas)\" *ngIf=\"!total\">\r\n                                                <span class=\"totalbill_wrap\">\r\n                                                    {{datas.value}}\r\n                                                </span>\r\n                                            </th>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <th *ngIf=\"total\">{{totalBill}}</th>\r\n                                            <th *ngIf=\"total\">{{uniqueCode}}</th>\r\n                                            <!-- <th>{{datas.requetDate | date}}</th> -->\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n                        <small class=\"icon-info-tooltip\" data-tip=\"Download bill summary\" tabindex=\"2\">\r\n                            <span class=\"img_download\">\r\n                                <img src=\"/assets/images/downloadTable.svg\" (click)=\"downloadBillSummary()\">\r\n                            </span>\r\n                        </small>\r\n                    </h4>\r\n\r\n\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n                        (click)=\"backButtonOpenBill()\">&times;</button>\r\n                </div>\r\n\r\n                <div class='mt-4 dr-table'>\r\n                    <!-- <table id=\"dtBasicExample\" datatable [dtOptions]=\"dtOptions\"> -->\r\n                        <table>\r\n                        <thead>\r\n                            <tr class=\"table-header\">\r\n                               \r\n                                <th>Bill No</th>\r\n                               \r\n                                <th>Store Code</th>\r\n                                <th>Customer Name</th>\r\n                                <th>Mobile No</th>\r\n                                <th>Email ID</th>\r\n                                <th *ngIf=\"isFailed\">Read Count</th>\r\n                                <th *ngIf=\"!isFailed\">Error Message</th>\r\n                                <th *ngIf=\"!isFailed\">Description</th>\r\n\r\n                                <th *ngIf=\"isFailed\">Bitly</th>\r\n                                <th *ngIf=\"isFailed\">Resend&nbsp;Bitly</th>\r\n                               \r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let inoviceDatas of invoicesummary | slice:0:15000; let i = index\">\r\n                               \r\n                                <th>{{inoviceDatas.billNo}}</th>\r\n                                \r\n                                <th>{{inoviceDatas.storecode}}</th>\r\n\r\n\r\n                                <th>{{inoviceDatas.customerName}}</th>\r\n                                <th>{{inoviceDatas.mobileNo}}</th>\r\n                                <th>{{inoviceDatas.emailID}}</th>\r\n                                <th *ngIf=\"isFailed\">{{inoviceDatas.readCount}}</th>\r\n                                <th *ngIf=\"!isFailed\">{{inoviceDatas.errorMessage}}</th>\r\n                                <th *ngIf=\"!isFailed\">{{inoviceDatas.errorDescription}}</th>\r\n\r\n                                <th *ngIf=\"isFailed\">\r\n                                    <a href=\"//{{inoviceDatas.shortURL}}\" target=\"_blank\"\r\n                                        class=\"linkSorturl\">{{inoviceDatas.shortURL}}</a>\r\n                                </th>\r\n\r\n                                <th *ngIf=\"isFailed\"><button class=\"table-button\" *ngIf=\"inoviceDatas.baseURL != ''\"\r\n                                        (click)=\"Resend(inoviceDatas,i)\">Resend</button>\r\n\r\n                                    <label class=\"resend\" *ngIf=resend.includes(i)>sent...</label>\r\n\r\n                                </th>\r\n                               \r\n\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n \r\n\r\n\r\n\r\n        <div class=\"card mt-4\">\r\n            <div class=\"reconLoadingData\" *ngIf=\"loadingDataSummary\">\r\n                <button class=\"btn btn-dark\">\r\n                    <span class=\"text-light spinner-border spinner-border-sm\"></span>\r\n                    <span>Loading! Please wait ...</span>\r\n                    <!-- <p class=\"text-danger\">{{errorMsg}}</p> -->\r\n                </button>\r\n            </div>\r\n            <div class='card-body' *ngIf=\"this.isopenStoreBill && this.storeSummary.length > 0\">\r\n                <div class=\"backbuttonSetting d-flex justify-content-between\">\r\n\r\n                    <h4 class=\"table_heading\" *ngIf=\"storeSummary.length>0\">Store Wise Bills Details\r\n                        #{{storeTanentCode}}\r\n                        ({{billDate | date}})\r\n\r\n                        <small class=\"icon-info-tooltip\" data-tip=\"Download bill summary\" tabindex=\"2\">\r\n                            <span class=\"img_download\">\r\n                                <img src=\"/assets/images/downloadTable.svg\" (click)=\"downloadStoreSummary()\">\r\n                            </span>\r\n                        </small>\r\n                    </h4>\r\n\r\n\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n                        (click)=\"backButtonstoreBill()\">&times;</button>\r\n                </div>\r\n\r\n                <div class='mt-4 dr-table'>\r\n                    <table>\r\n                        <tbody>\r\n                            <tr class=\"table-header\">\r\n\r\n\r\n                                <th>#Store Code</th>\r\n                                <th>#Store Name</th>\r\n                                <th>#Register No</th>\r\n                                <th>#Total Bill</th>\r\n                                <th>#Sucess Bill</th>\r\n                                <th>#Fail Bill</th>\r\n                                <th>#Print Bill</th>\r\n                                <th>#SMS Count</th>\r\n\r\n\r\n                            </tr>\r\n                            <tr *ngFor=\"let inoviceDatas of storeSummary;let i = index\">\r\n\r\n                                <th>{{inoviceDatas.storeCode}}</th>\r\n                                <th>{{inoviceDatas.storeName}}</th>\r\n                                <th>{{inoviceDatas.registerNo}}</th>\r\n                                <th>\r\n                                    <p class=\"totalbill_wrap total_count_wrap\"\r\n                                        (click)=\"getTotalBillSummary(inoviceDatas)\">\r\n                                        {{inoviceDatas.totalBills}}\r\n                                    </p>\r\n                                </th>\r\n                                <th>{{inoviceDatas.successBills}}</th>\r\n                                <th>{{inoviceDatas.failBills}}</th>\r\n                                <th>{{inoviceDatas.printBills}}</th>\r\n                                <th>{{inoviceDatas.smsCount}}</th>\r\n\r\n\r\n\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\" mt-4 card\">\r\n        </div>\r\n\r\n        <div class=\" mt-4 card\">\r\n            <div class=\"reconLoadingData\" *ngIf=\"loadingDataSummary\">\r\n                <button class=\"btn btn-dark\">\r\n                    <span class=\"text-light spinner-border spinner-border-sm\"></span>\r\n                    <span>Loading! Please wait ...</span>\r\n                    <!-- <p class=\"text-danger\">{{errorMsg}}</p> -->\r\n                </button>\r\n            </div>\r\n\r\n            <div class=' card-body' *ngIf=\"this.isOpenTotalStoreBill && this.totalBillsStoreSummary.length > 0\">\r\n                <div class=\"backbuttonSetting d-flex justify-content-between\">\r\n\r\n                    <h4 class=\"table_heading\" *ngIf=\"storeSummary.length>0\">Total Bills Details\r\n                        #{{storeTanentCode}}\r\n                        ({{billDate | date}})\r\n\r\n                        <small class=\"icon-info-tooltip\" data-tip=\"Download bill summary\" tabindex=\"2\">\r\n                            <span class=\"img_download\">\r\n                                <img src=\"/assets/images/downloadTable.svg\" (click)=\"downloadTotalStoreBillSummary()\">\r\n                            </span>\r\n                        </small>\r\n                    </h4>\r\n\r\n\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n                        (click)=\"backButtonTotlStorBill()\">&times;</button>\r\n                </div>\r\n\r\n                <div class='mt-4 dr-table'>\r\n                    <table>\r\n                        <tbody>\r\n                            <tr class=\"table-header\">\r\n\r\n\r\n\r\n                                <th>#Bill No</th>\r\n                                <th>#Customer Name </th>\r\n                                <th>#EmailId </th>\r\n                                <th>#Mobile No </th>\r\n                                <th>#Read Count </th>\r\n                                <th>#RegisterNo </th>\r\n                                <th>#ShortURL </th>\r\n                                <th>#Sms Date </th>\r\n                                <th>#Store Code </th>\r\n\r\n\r\n                            </tr>\r\n                            <tr *ngFor=\"let inoviceDatas of totalBillsStoreSummary;let i = index\">\r\n\r\n\r\n                                <th>{{inoviceDatas.billNo}}</th>\r\n                                <th>\r\n                                    {{inoviceDatas.customerName}}\r\n                                </th>\r\n                                <th>{{inoviceDatas.emailId}}</th>\r\n                                <th>{{inoviceDatas.mobileNo}}</th>\r\n                                <th>{{inoviceDatas.readCount}}</th>\r\n                                <th>{{inoviceDatas.registerNo}}</th>\r\n\r\n                                <th>{{inoviceDatas.shortURL}}</th>\r\n                                <th>{{inoviceDatas.smsDate }}</th>\r\n                                <th>{{inoviceDatas.storeCode}}</th>\r\n\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- *ngIf=\"openSearch\" -->\r\n\r\n<div class=\"mt-4 digital-reciept\" *ngIf=\"openSearchTable\">\r\n\r\n    <div class=\"container\">\r\n        <div class=\"card\">\r\n\r\n            <div class='card-body'>\r\n                <div class=\"backbuttonSetting flex-column\">\r\n                    <div class=\"d-flex justify-content-between\">\r\n                        <h4 class=\"table_heading\">Bill Summary #{{TenantCode}}\r\n                            <!-- <button class=\"search-inovice  download\" (click)=\"downloadSeachInoviceDataCSV()\"\r\n                            data-toggle=\"tooltip\" data-placement=\"top\" title=\"Download bill summary\"><i\r\n                                class=\"fa fa-download\" aria-hidden=\"true\"></i></button> -->\r\n                            <small *ngIf=\"!dataNotFoundMsg\" class=\"icon-info-tooltip\" data-tip=\"Download bill summary\"\r\n                                tabindex=\"2\">\r\n\r\n                                <img class=\"img_download pb-1\" src=\"/assets/images/downloadTable.svg\"\r\n                                    (click)=\"downloadSeachInoviceDataCSV()\">\r\n\r\n                            </small>\r\n                        </h4>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"backbutton()\">&times;</button>\r\n                    </div>\r\n                    <div *ngIf=\"dataNotFoundMsg\" class=\"d-flex justify-content-center mt-4 \">sorry!! no data found</div>\r\n                </div>\r\n\r\n                <div class='mt-4 dr-table' *ngIf=\"this.tablevalue==true\">\r\n                    <div class=\"reconLoadingData\" *ngIf=\"loadingData\">\r\n                        <button class=\"btn btn-dark\">\r\n                            <span class=\"text-light spinner-border spinner-border-sm\"></span>\r\n                            <span>Loading! Please wait ...</span>\r\n                        </button>\r\n                    </div>\r\n\r\n\r\n\r\n                    <!-- <div class=\"download_btn_wrap\">\r\n                        <button (click)=\"downloadSeachInoviceDataCSV()\" class=\"btndownload\">Download table</button>\r\n                    </div> -->\r\n\r\n                    <table *ngIf=\"!dataNotFoundMsg\">\r\n                        <tbody>\r\n                            <tr class=\"table-header mobile-table\">\r\n                                <th>program&nbsp;code</th>\r\n                                <th>Bill&nbsp;No</th>\r\n                                <th>Bill&nbsp;Date</th>\r\n                                <th>Store&nbsp;Code</th>\r\n                                <th>Customer&nbsp;Name</th>\r\n                                <th>Mobile&nbsp;No</th>\r\n                                <th>Email&nbsp;ID</th>\r\n                                <th>Bitly</th>\r\n                                <th>Resend&nbsp;Bitly</th>\r\n                                <!-- <th>Feedback&nbsp;URL</th>\r\n                                <th>Resend&nbsp;Feedback</th> -->\r\n\r\n                            </tr>\r\n\r\n\r\n\r\n                            <tr class=\"mobile-table-tr\" *ngFor=\"let inoviceDatas of seachInoviceData;let i = index\">\r\n                                <th>{{inoviceDatas.progCode}}</th>\r\n                                <th>{{inoviceDatas.billNo}}</th>\r\n                                <th>{{inoviceDatas.billDate|date}}</th>\r\n                                <th>{{inoviceDatas.storecode}}</th>\r\n\r\n                                <th>{{inoviceDatas.customerName}}</th>\r\n                                <th>{{inoviceDatas.mobileNo}}</th>\r\n                                <th>{{inoviceDatas.emailID.toLowerCase()}}</th>\r\n                                <th>\r\n                                    <a href=\"//{{inoviceDatas.shortURL}}\" target=\"_blank\"\r\n                                        class=\"linkSorturl\">{{inoviceDatas.shortURL.toLowerCase()}}</a>\r\n                                </th>\r\n\r\n                                <th><button class=\"table-button\" *ngIf=\"inoviceDatas.baseURL != ''\"\r\n                                        (click)=\"Resend(inoviceDatas,i)\">Resend</button>\r\n\r\n                                    <label class=\"resend\" *ngIf=resend.includes(i)>sent...</label>\r\n\r\n                                </th>\r\n                                <!-- <th class=\"LinkColor\">\r\n                                    <a href=\"//{{inoviceDatas.feedbackURL}}\" target=\"_blank\"\r\n                                        class=\"linkfeedbackurl\">{{inoviceDatas.feedbackURL}}</a>\r\n                                </th>\r\n                                <th><button class=\"table-button\" *ngIf=\"inoviceDatas.feedbackURL != ''\"\r\n                                        (click)=\"ResendFeedback(inoviceDatas,i)\">Resend</button>\r\n\r\n                                    <label class=\"resend\" *ngIf=resendFeedbackInd.includes(i)>sent...</label>\r\n\r\n                                </th> -->\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!--  *ngIf=\"!closeModel\"-->\r\n\r\n<div class=\"model_wrap\">\r\n    <div id=\"myModal\" class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"card\">\r\n                    <div class=\"backbuttonSetting d-flex justify-content-end\">\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"backbutton()\">&times;</button>\r\n                    </div>\r\n                    <div class='card-body' *ngIf=\"openSearchModel\">\r\n                        <div class=\"title d-flex justify-content-between\">\r\n                            <h3>{{TenantCode}} - <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n                            </h3>\r\n                            <!-- <div class=\"searhinput\">\r\n                        <label class=\"err\" *ngIf=\"requiredfieldErr\">Atlest one field is reqired from mobile number, inovice number, store code</label>\r\n                        </div> -->\r\n                            <input type=\"date\" name=\"daterange\" class=\"date_style\" placeholder=\"Select Date\"\r\n                                [value]=\"todaysDate\" (change)=\"billDatahandler($event)\" />\r\n                        </div>\r\n                        <div class='details'>\r\n                            <div class=\"details-flex  d-flex search-rec \">\r\n\r\n                                <div class=\"store-details input-flex\">\r\n                                    <div class=\"searhinput\" *ngIf=\"IsTenentFieldReq\">\r\n                                        <!-- <input type=\"text\" class=\"input-style\" placeholder=\"tenent Code*\"\r\n                       (change)=\"tenentCodeHandler($event)\" /> -->\r\n                                        <label>Tenent code</label>\r\n                                        <select class=\"input-style\" (change)=\"tenentCodeHandler($event)\">\r\n                                            <option [value]=\"\"></option>\r\n                                            <option *ngFor=\"let tenent of tenentList\" [value]=\"tenent.tenantCode\">\r\n                                                {{tenent.tenantName}}</option>\r\n                                        </select>\r\n                                        <!-- <label class=\"err\" *ngIf=\"TenentFielderr\">Tenent Field is reqired</label> -->\r\n                                        <!-- <div class=\"searhinput\"> -->\r\n                                        <!-- <label class=\"err\" *ngIf=\"requiredfieldErr\">Atlest one field is reqired from Mobile -->\r\n                                        <!-- Number, Inovice Number, Store Code</label> -->\r\n                                        <!-- </div> -->\r\n                                        <!-- <label class=\"err\" *ngIf=\"StoreCodeErr\"> Store Code is requied</label> -->\r\n                                    </div>\r\n                                    <div class=\"searhinput\">\r\n                                        <label>Mobile Number*</label>\r\n                                        <input type=\"number\" class=\"input-style\" id=\"mobileNo\"\r\n                                            [(ngModel)]=\"MobileNumber\" name=\"MobileNumber\"\r\n                                            (change)=\"MobileNumberHandler($event)\" (keyup)=\"textareaValidation()\" />\r\n                                        <!-- <label class=\"err\" *ngIf=\"requiredfieldErr\"> one field is reqired</label> (change)=\"MobileNumberHandler($event)\" -->\r\n                                    </div>\r\n                                    <div class=\"searhinput\">\r\n                                        <label>Invoice Number*</label>\r\n                                        <input type=\"text\" class=\"input-style\" id=\"invoiceNo\"\r\n                                            [(ngModel)]=\"InvoiceNumber\" name=\"InvoiceNumber\"\r\n                                            (keyup)=\"textareaValidation()\" (change)=\"InvoiceNumberHandler($event)\" />\r\n                                    </div>\r\n                                    <div class=\"searhinput\">\r\n                                        <label>Store Code*</label>\r\n                                        <input type=\"text\" class=\"input-style\" id=\"storeCode\" [(ngModel)]=\"StoreCode\"\r\n                                            name=\"StoreCode\" (keyup)=\"textareaValidation()\"\r\n                                            (change)=\"StoreCodeHandler($event)\" />\r\n                                        <!-- <label class=\"err\" *ngIf=\"StoreCodeErr\"> Store Code is requied</label> (change)=\"StoreCodeHandler($event)\"-->\r\n                                    </div>\r\n                                    <div class=\"searhinput margin_top\">\r\n                                        <button *ngIf=\"IsTenentFieldReq == false\" (click)=\"searchingData()\"\r\n                                            class=\"btnsearch\">SEARCH</button>\r\n                                        <button *ngIf=\"IsTenentFieldReq\" (click)=\"SearchModal()\" class=\"btnsearch\"\r\n                                            data-dismiss=\"modal\">SEARCH</button>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <div class=\"d-flex flex-column justify-content-left \">\r\n                                    <!-- <label class=\"err\" *ngIf=\"TenentFielderr\">Tenent Field is reqired</label> -->\r\n                                    <label class=\"err\" *ngIf=\"requiredfieldErr\">{{errortext}}</label>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <!-- <div class=\"all_data_wrap\" *ngIf=\"openDistStore\">\r\n\r\n                        <h3 class=\"storeHeader\">Store Detail #{{storeTanentCode}}</h3>\r\n                        <div class='dr-table'>\r\n                            <table>\r\n                                <tbody>\r\n                                    <tr class=\"table-header\">\r\n                                        <th>#Store Code</th>\r\n                                        <th>#Bill</th>\r\n                                    </tr>\r\n                                    <tr *ngFor=\"let data of storeCount;let i = index\">\r\n\r\n                                        <th>\r\n                                            <span class=\"totalbill_wrap\">{{data.storeCode}}\r\n                                            </span>\r\n                                        </th>\r\n                                        <th>\r\n                                            <span class=\"totalbill_wrap\">{{data.storeCount}}\r\n                                            </span>\r\n                                        </th>\r\n\r\n\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div> -->\r\n\r\n\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/digitalRiceipt/digital-riceipt/digital-riceipt.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/digitalRiceipt/digital-riceipt/digital-riceipt.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDigitalRiceiptDigitalRiceiptDigitalRiceiptComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* clearfix style */\nimg {\n  max-width: 100%;\n  height: auto;\n}\n/*== start of code for tooltips ==*/\n.digital-reciept .container .card {\n  border: none;\n}\n.digital-reciept .container .card .title {\n  color: #6a6a6a;\n}\n.digital-reciept .container .card .title .table_heading_wrap {\n  display: flex;\n}\n.digital-reciept .container .card .title .table_heading_wrap h3 {\n  font-size: 22px;\n  font-weight: 500;\n}\n.digital-reciept .container .card .title .table_heading_wrap .img_refresh {\n  padding-left: 6px;\n}\n.digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip {\n  cursor: help;\n  position: relative;\n  outline: none;\n}\n.digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:before, .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:after {\n  left: 50%;\n  opacity: 0;\n  position: absolute;\n  z-index: -100;\n}\n.digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:hover:before, .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:hover:after, .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:focus:before, .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:focus:after {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n  z-index: 100;\n}\n.digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:hover:before, .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:focus:before {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n}\n.digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:hover:after, .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:focus:after {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26);\n}\n.digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:before {\n  border-style: solid;\n  border-width: 1em 0.75em 0 0.75em;\n  border-color: #babbbb transparent transparent transparent;\n  bottom: 100%;\n  content: \"\";\n  margin-left: -0.5em;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26), opacity 0.65s 0.5s;\n  transform: scale(0.6) translateY(-90%);\n}\n.digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:after {\n  background: #babbbb;\n  border-radius: 0.25em;\n  bottom: 180%;\n  color: #ffffff;\n  content: attr(data-tip);\n  margin-left: -26px;\n  padding: 7px;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n  transform: scale(0.6) translateY(50%);\n  min-width: 15px;\n  text-align: center;\n}\n@media (max-width: 767px) {\n  .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:after {\n    font-size: 0.75em;\n    margin-left: -5em;\n    width: 10em;\n  }\n}\n.digital-reciept .container .card .title input {\n  background: #f9f9f9;\n  border: 1px solid #f9f9f9;\n  outline: none;\n  color: #959795;\n}\n.digital-reciept .container .card .dr-table {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.digital-reciept .container .card .dr-table table {\n  width: 100%;\n  text-align: left;\n}\n.digital-reciept .container .card .dr-table .table-header th {\n  background-color: #00B894;\n  line-height: 25px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  vertical-align: middle;\n  padding: 10px;\n  border: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.digital-reciept .container .card .dr-table tr {\n  background-color: white;\n  line-height: 30px;\n  color: #959795;\n  font-size: 13px;\n  font-weight: 300;\n}\n.digital-reciept .container .card .dr-table tr th {\n  min-width: 100px;\n  background-color: #ffffff;\n  padding: 10px;\n  border-bottom: 1px solid #eeecec !important;\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  vertical-align: middle;\n}\n.digital-reciept .container .card .dr-table .button-style {\n  background: none;\n  border: none;\n  outline: none;\n  color: #959795;\n  font-size: 18px;\n}\n.totalbill_wrap {\n  margin: 0px;\n  cursor: pointer;\n}\n.totalbill_wrap.total_count_wrap {\n  color: #00b894;\n  font-weight: 800;\n  font-size: 16px;\n}\n.totalbill_wrap.total_count_wrap:hover {\n  text-decoration: underline;\n}\n.totalbill_wrap {\n  margin: 0px;\n  cursor: pointer;\n}\n.totalbill_wrap.faild_count_wrap {\n  color: #f71458;\n  font-weight: 800;\n  font-size: 16px;\n}\n.totalbill_wrap.faild_count_wrap:hover {\n  text-decoration: underline;\n}\n.totalbill_wrap {\n  margin: 0px;\n  cursor: pointer;\n}\n.totalbill_wrap.success_count_wrap {\n  color: #1ed815;\n  font-weight: 800;\n  font-size: 16px;\n}\n.totalbill_wrap.success_count_wrap:hover {\n  text-decoration: underline;\n}\n.totalbill_wrap {\n  margin: 0px;\n  cursor: pointer;\n}\n.totalbill_wrap.sms_count_wrap {\n  color: #acacac;\n  font-weight: 800;\n  font-size: 16px;\n}\n.totalbill_wrap.sms_count_wrap:hover {\n  text-decoration: underline;\n}\n.totalbill_wrap {\n  margin: 0px;\n  cursor: pointer;\n}\n.totalbill_wrap.wap_count_wrap {\n  color: #53e1aa;\n  font-weight: 800;\n  font-size: 16px;\n}\n.totalbill_wrap.wap_count_wrap:hover {\n  text-decoration: underline;\n}\n.totalbill_wrap {\n  margin: 0px;\n  cursor: pointer;\n}\n.totalbill_wrap.email_count_wrap {\n  color: #0072b8;\n  font-weight: 800;\n  font-size: 16px;\n}\n.totalbill_wrap.email_count_wrap:hover {\n  text-decoration: underline;\n}\n.store {\n  margin: 0px;\n  color: #acacac;\n  font-weight: 800;\n  font-size: 16px;\n  cursor: pointer;\n}\n.store:hover {\n  text-decoration: underline;\n}\n.linkfeedbackurl {\n  text-decoration: none;\n  color: #00b894;\n}\n.linkSorturl {\n  text-decoration: none;\n  color: #959795;\n}\n.reconLoadingData {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.7);\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n}\n.reconLoadingData button {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 999;\n}\n.search-rec {\n  display: flex;\n  flex-direction: column;\n}\n.download_btn_wrap {\n  display: flex;\n  justify-content: flex-end;\n}\n.btndownload {\n  border: 1px solid #00b894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 11px 15px 11px;\n  background: #00b894;\n  outline: none;\n  margin: 0px;\n  border-radius: 3px;\n  min-width: 120px;\n}\n.btndownload:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.btnsearch {\n  border: 1px solid #00b894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 11px 15px 11px;\n  background: #00b894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  margin-top: 20px;\n}\n.btnsearch:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.table-button {\n  border-radius: 3px;\n  color: #00b894;\n  border: 1px solid #00b894;\n  box-shadow: none;\n  outline: none;\n}\n.input-style {\n  height: 44px;\n  width: 90%;\n  /* border: none; */\n  padding-left: 11px;\n  border-radius: 3px;\n  background: #f9f9f9;\n  outline: 0;\n  box-shadow: none;\n  border: 1px solid #eeecec;\n}\n.input-flex {\n  flex-direction: row;\n  justify-content: space-around;\n  display: flex;\n}\n.details {\n  padding: 30px 0px 20px 0px;\n  margin-top: 30px;\n  border-top: groove;\n  border-bottom: groove;\n  color: black;\n}\n.btn-style {\n  background-color: #f9f9f9;\n  border-radius: 3px;\n  color: #00b894;\n  border: 1px solid #00b894;\n  box-shadow: none;\n}\n.LinkColor {\n  color: #00b894;\n}\n.positions {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 82px;\n  width: 50%;\n}\n.widthcon {\n  width: 70%;\n}\n.modal .modal-dialog {\n  max-width: 60%;\n}\n.modal .modal-dialog .modal-content .modal-header {\n  padding: 0;\n  position: relative;\n}\n.modal .modal-dialog .modal-content .modal-header button.close {\n  position: absolute;\n  right: 22px;\n  top: 24px;\n  padding: 5px;\n  background: #ffffff;\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n  line-height: 11px;\n  vertical-align: middle;\n}\n.modal .modal-dialog .modal-content .modal-header .modal-title {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  padding: 0;\n}\n@media (max-width: 991px) {\n  .modal .modal-dialog .modal-content .modal-header .modal-title {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .modal .modal-dialog .modal-content .modal-header .modal-title {\n    font-size: 14px;\n  }\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .col-3 {\n  margin-top: 28px;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group label {\n  padding: 0px;\n  margin: 0px;\n  color: #9A9A9A;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  display: block;\n  margin-bottom: 5px;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group label.disable {\n  cursor: not-allowed;\n}\n@media (max-width: 576px) {\n  .modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group label {\n    font-size: 14px;\n  }\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group input {\n  background: #f9f9f9;\n  outline: 0;\n  box-shadow: none;\n  border: 1px solid #eeecec;\n  padding: 5px;\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 300;\n  border-radius: 3px;\n  line-height: 29px;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group input::-webkit-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group input::-moz-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group input::-ms-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group input::placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group input::-webkit-inner-spin-button, .modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group button {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  min-width: auto;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group button:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group button:focus {\n  outline: none;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group button:visited {\n  color: #ffffff;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group .alert {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  padding: 5px;\n  line-height: 1.3;\n  color: #FF4B4B;\n}\n@media (max-width: 991px) {\n  .modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group .alert {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group .alert {\n    font-size: 14px;\n  }\n}\n.resend {\n  font-size: 12px;\n  color: #00b894;\n  font-weight: 400;\n}\n.err {\n  font-size: 14px;\n  color: #f71458;\n  margin-left: 21px;\n}\n.search-inovice {\n  background: none;\n  border: none;\n  outline: none;\n  color: #6a6a6a;\n  background-color: #ffffff;\n}\n.search-inovice .img_refresh {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.search-inovice .icon-info-tooltip {\n  cursor: help;\n  position: relative;\n  outline: none;\n}\n.search-inovice .icon-info-tooltip:before, .search-inovice .icon-info-tooltip:after {\n  left: 50%;\n  opacity: 0;\n  position: absolute;\n  z-index: -100;\n}\n.search-inovice .icon-info-tooltip:hover:before, .search-inovice .icon-info-tooltip:hover:after, .search-inovice .icon-info-tooltip:focus:before, .search-inovice .icon-info-tooltip:focus:after {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n  z-index: 100;\n}\n.search-inovice .icon-info-tooltip:hover:before, .search-inovice .icon-info-tooltip:focus:before {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n}\n.search-inovice .icon-info-tooltip:hover:after, .search-inovice .icon-info-tooltip:focus:after {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26);\n}\n.search-inovice .icon-info-tooltip:before {\n  border-style: solid;\n  border-width: 1em 0.75em 0 0.75em;\n  border-color: #babbbb transparent transparent transparent;\n  bottom: 100%;\n  content: \"\";\n  margin-left: -0.5em;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26), opacity 0.65s 0.5s;\n  transform: scale(0.6) translateY(-90%);\n}\n.search-inovice .icon-info-tooltip:after {\n  background: #babbbb;\n  border-radius: 0.25em;\n  bottom: 180%;\n  color: #ffffff;\n  content: attr(data-tip);\n  margin-left: -26px;\n  padding: 7px;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n  transform: scale(0.6) translateY(50%);\n  min-width: 15px;\n  text-align: center;\n}\n@media (max-width: 767px) {\n  .search-inovice .icon-info-tooltip:after {\n    font-size: 0.75em;\n    margin-left: -5em;\n    width: 10em;\n  }\n}\n.search-inovice .download {\n  vertical-align: middle;\n}\n.search-inovice .tooltip {\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  font-weight: 700;\n  background: #f3f3f3;\n  border: 1px solid #737373;\n  color: #737373;\n  margin: 4px 121px 0 5px;\n  float: right;\n  text-align: left !important;\n}\n.backbuttonSetting {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 0px 0px 0px;\n  margin-right: 15px;\n}\n.backbuttonSetting .table_heading {\n  font-size: 20px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0px;\n  text-transform: capitalize;\n  color: #6a6a6a;\n}\n.backbuttonSetting .table_heading .table_heading_count {\n  font-size: 20px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0px;\n  text-transform: capitalize;\n  color: #6a6a6a;\n  position: relative;\n  cursor: pointer;\n  color: #f71458;\n}\n.backbuttonSetting .table_heading .table_heading_total {\n  font-size: 20px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  margin-bottom: 0px;\n  text-transform: capitalize;\n  color: #00b894;\n  cursor: pointer;\n}\n.backbuttonSetting .table_heading .bottom_arrow {\n  position: absolute;\n  width: 0;\n  top: 55px;\n  left: 367px;\n  height: 0;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-bottom: 14px solid #ffffff;\n  z-index: 9;\n}\n.backbuttonSetting .table_heading .tool_tip {\n  position: absolute;\n  top: 70px;\n  left: 213px;\n  background-color: #ffffff;\n  padding: 20px;\n  padding-top: 10px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 390px;\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);\n  z-index: 9;\n}\n.backbuttonSetting .table_heading .tool_tip .close_tooltip {\n  display: flex;\n  justify-content: flex-end;\n}\n.backbuttonSetting .table_heading .tool_tip .dr-table {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.backbuttonSetting .table_heading .tool_tip .dr-table table {\n  width: 100%;\n  text-align: left;\n}\n.backbuttonSetting .table_heading .tool_tip .dr-table .table-header th {\n  background-color: #00B894;\n  line-height: 25px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  vertical-align: middle;\n  padding: 10px;\n  border: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.backbuttonSetting .table_heading .tool_tip .dr-table tr {\n  background-color: white;\n  line-height: 30px;\n  color: #959795;\n  font-size: 13px;\n  font-weight: 300;\n}\n.backbuttonSetting .table_heading .tool_tip .dr-table tr th {\n  min-width: 100px;\n  background-color: #ffffff;\n  padding: 10px;\n  text-transform: capitalize;\n  border-bottom: 1px solid #eeecec !important;\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  vertical-align: middle;\n}\n.backbuttonSetting .table_heading .tool_tip .dr-table tr th .totalbill_wrap {\n  margin: 0px;\n  cursor: pointer;\n  color: #f71458;\n  font-weight: 800;\n  font-size: 16px;\n}\n.backbuttonSetting .table_heading .tool_tip .dr-table tr th .totalbill_wrap:hover {\n  text-decoration: underline;\n}\n.backbuttonSetting .table_heading .tool_tip .dr-table .button-style {\n  background: none;\n  border: none;\n  outline: none;\n  color: #959795;\n  font-size: 18px;\n}\n.backbuttonSetting .table_heading .icon-info-tooltip {\n  cursor: help;\n  position: relative;\n  outline: none;\n}\n.backbuttonSetting .table_heading .icon-info-tooltip:before, .backbuttonSetting .table_heading .icon-info-tooltip:after {\n  left: 50%;\n  opacity: 0;\n  position: absolute;\n  z-index: -100;\n}\n.backbuttonSetting .table_heading .icon-info-tooltip:hover:before, .backbuttonSetting .table_heading .icon-info-tooltip:hover:after, .backbuttonSetting .table_heading .icon-info-tooltip:focus:before, .backbuttonSetting .table_heading .icon-info-tooltip:focus:after {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n  z-index: 100;\n}\n.backbuttonSetting .table_heading .icon-info-tooltip:hover:before, .backbuttonSetting .table_heading .icon-info-tooltip:focus:before {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n}\n.backbuttonSetting .table_heading .icon-info-tooltip:hover:after, .backbuttonSetting .table_heading .icon-info-tooltip:focus:after {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26);\n}\n.backbuttonSetting .table_heading .icon-info-tooltip:before {\n  border-style: solid;\n  border-width: 1em 0.75em 0 0.75em;\n  border-color: #babbbb transparent transparent transparent;\n  bottom: 100%;\n  content: \"\";\n  margin-left: -0.5em;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26), opacity 0.65s 0.5s;\n  transform: scale(0.6) translateY(-90%);\n}\n.backbuttonSetting .table_heading .icon-info-tooltip:after {\n  background: #babbbb;\n  border-radius: 0.25em;\n  bottom: 180%;\n  color: #ffffff;\n  content: attr(data-tip);\n  margin-left: -26px;\n  padding: 7px;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n  transform: scale(0.6) translateY(50%);\n  min-width: 15px;\n  text-align: center;\n}\n@media (max-width: 767px) {\n  .backbuttonSetting .table_heading .icon-info-tooltip:after {\n    font-size: 0.75em;\n    margin-left: -5em;\n    width: 10em;\n  }\n}\n.backbuttonSetting .table_heading .img_download {\n  vertical-align: middle;\n  padding-left: 7px;\n}\n.modal .modal-dialog .modal-content .card {\n  border-radius: 1.3rem;\n  border: 1px solid #ffffff;\n}\n.modal .modal-dialog .modal-content .card .card-body {\n  flex: 1 1 auto;\n  /* padding: 1.25rem; */\n  padding: 15px;\n}\n.modal .modal-dialog .modal-content .card .card-body .all_data_wrap {\n  margin-bottom: 30px;\n  overflow: overlay;\n  max-height: 390px;\n}\n.modal .modal-dialog .modal-content .card .card-body .all_data_wrap .dr-table table {\n  width: 100%;\n  text-align: left;\n  border: 1px solid #f9f9f9;\n}\n.modal .modal-dialog .modal-content .card .card-body .all_data_wrap .dr-table .table-header th {\n  width: 50%;\n  background-color: #f9f9f9;\n  line-height: 25px;\n  color: #4a4a4a;\n  font-size: 15px;\n  font-weight: 500;\n  vertical-align: middle;\n  padding: 10px 10px 10px 30px;\n  border: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: -1px;\n}\n.modal .modal-dialog .modal-content .card .card-body .all_data_wrap .dr-table tr {\n  background-color: #ffffff;\n  line-height: 30px;\n  color: #959795;\n  font-size: 13px;\n  font-weight: 300;\n}\n.modal .modal-dialog .modal-content .card .card-body .all_data_wrap .dr-table tr th {\n  background-color: #ffffff;\n  padding: 10px 10px 10px 30px;\n  text-transform: capitalize;\n  border-bottom: 1px solid #eeecec !important;\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  vertical-align: middle;\n}\n.modal .modal-dialog .modal-content .card .card-body .all_data_wrap .dr-table .button-style {\n  background: none;\n  border: none;\n  outline: none;\n  color: #959795;\n  font-size: 18px;\n}\n@media (max-width: 769px) {\n  .modal .modal-dialog {\n    max-width: 100%;\n  }\n\n  .digital-reciept .container .card {\n    border: 1px solid #ffffff;\n  }\n  .digital-reciept .container .card .card-body {\n    flex: 1 1 auto;\n    /* padding: 1.25rem; */\n    padding: 15px;\n  }\n  .digital-reciept .container .card .title {\n    display: flex;\n    flex-direction: column;\n  }\n  .digital-reciept .container .card .title h3 {\n    font-weight: 500;\n    font-size: 13px;\n    color: #6a6a6a;\n  }\n  .digital-reciept .container .card .details {\n    padding: 10px 0px 21px 0px;\n    margin-top: 15px;\n  }\n  .digital-reciept .container .card .details .store-details .input-style {\n    margin: 5px 0px 5px 0px;\n  }\n  .digital-reciept .container .card .details .store-details .btn-style {\n    padding: 4px 20px;\n    margin: 5px 0px 5px 0px;\n  }\n  .digital-reciept .container .card .dr-table {\n    max-height: 300px;\n    overflow: auto;\n  }\n  .digital-reciept .container .card .dr-table th {\n    font-size: 9px;\n  }\n  .digital-reciept .container .card .dr-table .table-header {\n    line-height: 15px;\n    color: #959795;\n    font-size: 10px;\n  }\n  .digital-reciept .container .card .dr-table .mobile-table-tr th {\n    line-height: 15px;\n  }\n  .digital-reciept .label-style {\n    font-size: 12px;\n  }\n\n  .input-flex {\n    flex-direction: column;\n    display: flex;\n  }\n\n  .input-style {\n    margin: 10px 0px 10px 0px;\n    width: 100%;\n  }\n\n  .widthcon {\n    width: 100%;\n  }\n\n  .btn-style {\n    line-height: 37px;\n    width: 156px;\n    margin: 10px 0px 10px 0px;\n  }\n\n  .modal {\n    top: 58px;\n  }\n\n  .store-details {\n    width: 100%;\n  }\n  .store-details .searhinput {\n    width: 100%;\n  }\n}\n.model_wrap .modal .modal-dialog .modal-content .card {\n  border-radius: 1.3rem;\n  border: 1px solid #ffffff;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .card-body {\n  flex: 1 1 auto;\n  /* padding: 1.25rem; */\n  padding: 15px;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .card-body .title {\n  display: flex;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .card-body .title h3 {\n  font-weight: 500;\n  font-size: 18px;\n  color: #6a6a6a;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .card-body .title .date_style {\n  background: #f9f9f9;\n  border: 1px solid #f9f9f9;\n  outline: none;\n  color: #6a6a6a;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .card-body .details {\n  padding: 10px 0px 21px 0px;\n  margin-top: 15px;\n  border-top: 1px solid #eae7e7;\n  border-bottom: none;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .card-body .details .store-details {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .card-body .details .store-details .searhinput label {\n  padding: 0px;\n  margin: 0px;\n  color: #9A9A9A;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  display: block;\n  margin-bottom: 5px;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .card-body .details .store-details .searhinput label.disable {\n  cursor: not-allowed;\n}\n@media (max-width: 576px) {\n  .model_wrap .modal .modal-dialog .modal-content .card .card-body .details .store-details .searhinput label {\n    font-size: 14px;\n  }\n}\n.model_wrap .modal .modal-dialog .modal-content .card .card-body .details .store-details .input-style {\n  margin: 5px 0px 5px 0px;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .card-body .details .store-details .btn-style {\n  padding: 4px 20px;\n  margin: 5px 0px 5px 0px;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .card-body .details .store-details .margin_top {\n  margin-top: 11px;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .all_data_wrap {\n  margin-bottom: 30px;\n  overflow: overlay;\n  max-height: 390px;\n  margin-left: 20px;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .all_data_wrap .storeHeader {\n  color: #6a6a6a;\n  font-size: 22px;\n  font-weight: 500;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .all_data_wrap .dr-table table {\n  width: 100%;\n  text-align: left;\n  border: 1px solid #f9f9f9;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .all_data_wrap .dr-table .table-header th {\n  width: 50%;\n  background-color: #00B894;\n  line-height: 25px;\n  color: #ffffff;\n  font-size: 15px;\n  font-weight: 500;\n  vertical-align: middle;\n  padding: 10px 10px 10px 30px;\n  border: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: -1px;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .all_data_wrap .dr-table tr {\n  background-color: #ffffff;\n  line-height: 30px;\n  color: #959795;\n  font-size: 13px;\n  font-weight: 300;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .all_data_wrap .dr-table tr th {\n  background-color: #ffffff;\n  padding: 10px 10px 10px 30px;\n  text-transform: capitalize;\n  border-bottom: 1px solid #eeecec !important;\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  vertical-align: middle;\n}\n.model_wrap .modal .modal-dialog .modal-content .card .all_data_wrap .dr-table .button-style {\n  background: none;\n  border: none;\n  outline: none;\n  color: #959795;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlnaXRhbFJpY2VpcHQvZGlnaXRhbC1yaWNlaXB0L0Q6XFxyZWNvbk5ld1xcUmVjb25fRGFzaGJvYXJkL3NyY1xcc2Nzc1xcbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2RpZ2l0YWxSaWNlaXB0L2RpZ2l0YWwtcmljZWlwdC9kaWdpdGFsLXJpY2VpcHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RpZ2l0YWxSaWNlaXB0L2RpZ2l0YWwtcmljZWlwdC9EOlxccmVjb25OZXdcXFJlY29uX0Rhc2hib2FyZC9zcmNcXGFwcFxcZGlnaXRhbFJpY2VpcHRcXGRpZ2l0YWwtcmljZWlwdFxcZGlnaXRhbC1yaWNlaXB0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaWdpdGFsUmljZWlwdC9kaWdpdGFsLXJpY2VpcHQvRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBQTtBQWlCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDZkY7QUR3b0JBLG1DQUFBO0FFeG9CSTtFQUNFLFlBQUE7QURJTjtBQ0hNO0VBQ0UsY0FBQTtBREtSO0FDSlE7RUFDRSxhQUFBO0FETVY7QUNMVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBRE9aO0FDTFU7RUFDRSxpQkFBQTtBRE9aO0FDSFU7RUYybkJSLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNybkJGO0FEdW5CRTtFQUVFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDdG5CSjtBRDJuQkk7RUFFRSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0FDMW5CTjtBRDZuQkk7RUFDRSxnRUFBQTtBQzNuQk47QUQ4bkJJO0VBQ0UsMkRBQUE7QUM1bkJOO0FEZ29CRTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSx5REFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwrRUFBQTtFQUNBLHNDQUFBO0FDOW5CSjtBRGlvQkU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGNHeHFCVTtFSHlxQlYsdUJBQUE7RUFFQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSxnRUFBQTtFQUNBLHFDQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0FDbG9CSjtBRGxDSTtFQXdxQkE7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQ25vQko7QUFDRjtBQ2xEUTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBRG9EVjtBQ2hETTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QURrRFI7QUNwQ1E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QURzQ1Y7QUNsQ1U7RUFDRSx5QkNuREU7RURvREYsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0FEb0NaO0FDakNRO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURrQ1Y7QUNqQ1U7RUFDRSxnQkFBQTtFQUNBLHlCQ3pERTtFRDBERixhQUFBO0VBRUEsMkNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FEa0NaO0FDL0JRO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEaUNWO0FDM0JBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUQ4QkY7QUM3QkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FEK0JKO0FDOUJJO0VBQ0UsMEJBQUE7QURnQ047QUM1QkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBRCtCRjtBQzlCRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURnQ0o7QUMvQkk7RUFDRSwwQkFBQTtBRGlDTjtBQzdCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FEZ0NGO0FDL0JFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRGlDSjtBQ2hDSTtFQUNFLDBCQUFBO0FEa0NOO0FDOUJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QURpQ0Y7QUNoQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FEa0NKO0FDakNJO0VBQ0UsMEJBQUE7QURtQ047QUMvQkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBRGtDRjtBQ2pDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURtQ0o7QUNsQ0k7RUFDRSwwQkFBQTtBRG9DTjtBQ2hDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FEbUNGO0FDbENFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRG9DSjtBQ25DSTtFQUNFLDBCQUFBO0FEcUNOO0FDakNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FEb0NGO0FDbkNFO0VBQ0UsMEJBQUE7QURxQ0o7QUNsQ0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QURxQ0Y7QUNuQ0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QURzQ0Y7QUNwQ0E7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FEdUNGO0FDdENFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBRHdDSjtBQ3BDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBRHVDRjtBQ3BDQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBRHVDRjtBQ3BDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FEdUNGO0FDckNFO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0RBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUR1Q0o7QUNwQ0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRHVDRjtBQ3RDRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNEQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FEd0NKO0FDN0JBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QURnQ0Y7QUM5QkE7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QURpQ0Y7QUMvQkE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBRGtDRjtBQ2hDQTtFQUNFLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBRG1DRjtBQ2pDQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBRG9DRjtBQ2xDQTtFQUNFLGNBQUE7QURxQ0Y7QUNsQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUVBLFlBQUE7RUFDQSxVQUFBO0FEb0NGO0FDbENBO0VBQ0UsVUFBQTtBRHFDRjtBQ2xDRTtFQUNFLGNBQUE7QURxQ0o7QUNsQ007RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QURvQ1I7QUNuQ1E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQ2xVSTtFRG1VSixrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBRHFDVjtBQ25DUTtFRnJHTixxQkFBQTtFQUNBLGNHbE9rQjtFSG1PbEIsZUFBQTtFQUNBLGdCR3pOYTtFSDBOYixpQkFBQTtFQUNBLGlDRzdOWTtFSDhOWixnQkFBQTtFQUNBLGNBQUE7RUVnR1EsVUFBQTtBRDRDVjtBRGpXSTtFRW1USTtJRjNGSixrQkFBQTtFQzZJRjtBQUNGO0FEbFhJO0VFK1RJO0lGdkZKLGVBQUE7RUM4SUY7QUFDRjtBQ2hEWTtFQUNFLGdCQUFBO0FEa0RkO0FDL0NjO0VGOExaLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0czaEJnQjtFSDRoQmhCLGVBQUE7RUFDQSxnQkcxZ0JXO0VIMmdCWCxpQ0c1Z0JZO0VINmdCWixnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQzVJRjtBRDZJRTtFQUNFLG1CQUFBO0FDM0lKO0FEeFlJO0VFMlVVO0lGMk1WLGVBQUE7RUMxSUY7QUFDRjtBQy9EYztFRmhFWixtQkc3UmlCO0VIOFJqQixVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNrSUY7QURoSUU7RUFDRSxjRzdSZ0I7RUg4UmhCLGVBQUE7QUNrSUo7QURwSUU7RUFDRSxjRzdSZ0I7RUg4UmhCLGVBQUE7QUNrSUo7QURwSUU7RUFDRSxjRzdSZ0I7RUg4UmhCLGVBQUE7QUNrSUo7QURwSUU7RUFDRSxjRzdSZ0I7RUg4UmhCLGVBQUE7QUNrSUo7QURoSUU7RUFFRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDaUlKO0FDcEZjO0VGcEJaLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNHNVVZO0VINlVaLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJHL1ZZO0VIZ1daLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUVTYyxlQUFBO0FEbUdoQjtBRDFHRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNEQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDNEdKO0FEekdFO0VBQ0UsYUFBQTtBQzJHSjtBRHpHRTtFQUNFLGNHbFdVO0FGNmNkO0FDOUdjO0VGM0haLHFCQUFBO0VBQ0EsY0dsT2tCO0VIbU9sQixlQUFBO0VBQ0EsZ0JHek5hO0VIME5iLGlCQUFBO0VBQ0EsaUNHN05ZO0VIOE5aLGdCQUFBO0VBQ0EsY0FBQTtFRXNIYyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ2pYSjtBRndlWjtBRHBjSTtFRXlVVTtJRmpIVixrQkFBQTtFQ2dQRjtBQUNGO0FEcmRJO0VFcVZVO0lGN0dWLGVBQUE7RUNpUEY7QUFDRjtBQ3hIQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUQySEY7QUN6SEE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FENEhGO0FDMUhBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBRDZIRjtBQzVIRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUQ4SEo7QUMzSEU7RUYwUEEsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQzVIRjtBRDhIRTtFQUVFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDN0hKO0FEa0lJO0VBRUUsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQ2pJTjtBRG9JSTtFQUNFLGdFQUFBO0FDbElOO0FEcUlJO0VBQ0UsMkRBQUE7QUNuSU47QUR1SUU7RUFDRSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EseURBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0VBQUE7RUFDQSxzQ0FBQTtBQ3JJSjtBRHdJRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0d4cUJVO0VIeXFCVix1QkFBQTtFQUVBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLGdFQUFBO0VBQ0EscUNBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7QUN6SUo7QUQzaEJJO0VBd3FCQTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0VDMUlKO0FBQ0Y7QUMzS0U7RUFDRSxzQkFBQTtBRDZLSjtBQzNLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUQ2S0o7QUMxS0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FENktGO0FDM0tFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUQ2S0o7QUMzS0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUQ2S047QUMzS0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUQ2S047QUMxS0k7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0FENEtOO0FDektJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkVBQUE7RUFDQSxVQUFBO0FEMktOO0FDMUtNO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FENEtSO0FDektNO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBRDJLUjtBQzFLUTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBRDRLVjtBQ3pLVTtFQUNFLHlCQ2pmRTtFRGtmRixpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7QUQyS1o7QUN4S1E7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRHlLVjtBQ3hLVTtFQUNFLGdCQUFBO0VBQ0EseUJDdmZFO0VEd2ZGLGFBQUE7RUFDQSwwQkFBQTtFQUNBLDJDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBRDBLWjtBQ3pLWTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRDJLZDtBQzFLYztFQUNFLDBCQUFBO0FENEtoQjtBQ3ZLUTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRHlLVjtBQ3BLSTtFRmtHRixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDcUVGO0FEbkVFO0VBRUUsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNvRUo7QUQvREk7RUFFRSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0FDZ0VOO0FEN0RJO0VBQ0UsZ0VBQUE7QUMrRE47QUQ1REk7RUFDRSwyREFBQTtBQzhETjtBRDFERTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSx5REFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwrRUFBQTtFQUNBLHNDQUFBO0FDNERKO0FEekRFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxjR3hxQlU7RUh5cUJWLHVCQUFBO0VBRUEsa0JBQUE7RUFFQSxZQUFBO0VBQ0EsZ0VBQUE7RUFDQSxxQ0FBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtBQ3dESjtBRDV0Qkk7RUF3cUJBO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7RUN1REo7QUFDRjtBQ3JOSTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUR1Tk47QUMvTU07RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FEa05SO0FDak5RO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBRG1OVjtBQ2pOVTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRG1OWjtBQzlNYztFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FEZ05oQjtBQzdNZ0I7RUFDRSxVQUFBO0VBQ0EseUJDbmtCQztFRG9rQkQsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsU0FBQTtBRCtNbEI7QUMzTWM7RUFDRSx5QkM1a0JGO0VENmtCRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUQ2TWhCO0FDNU1nQjtFQUNFLHlCQ2xsQko7RURtbEJJLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUQ4TWxCO0FDMU1jO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FENE1oQjtBQ2xNQTtFQUVJO0lBQ0UsZUFBQTtFRG9NSjs7RUMvTEk7SUFDRSx5QkFBQTtFRGtNTjtFQ2pNTTtJQUNFLGNBQUE7SUFDQSxzQkFBQTtJQUNBLGFBQUE7RURtTVI7RUNqTU07SUFDRSxhQUFBO0lBQ0Esc0JBQUE7RURtTVI7RUNqTVE7SUFDRSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxjQUFBO0VEbU1WO0VDaE1NO0lBQ0UsMEJBQUE7SUFDQSxnQkFBQTtFRGtNUjtFQ2hNVTtJQUNFLHVCQUFBO0VEa01aO0VDaE1VO0lBQ0UsaUJBQUE7SUFDQSx1QkFBQTtFRGtNWjtFQzlMTTtJQUNFLGlCQUFBO0lBQ0EsY0FBQTtFRGdNUjtFQy9MUTtJQUNFLGNBQUE7RURpTVY7RUMvTFE7SUFDRSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VEaU1WO0VDM0xVO0lBQ0UsaUJBQUE7RUQ2TFo7RUN2TEU7SUFDRSxlQUFBO0VEeUxKOztFQ3RMQTtJQUNFLHNCQUFBO0lBRUEsYUFBQTtFRHdMRjs7RUN0TEE7SUFDRSx5QkFBQTtJQUNBLFdBQUE7RUR5TEY7O0VDdkxBO0lBQ0UsV0FBQTtFRDBMRjs7RUN4TEE7SUFDRSxpQkFBQTtJQUNBLFlBQUE7SUFDQSx5QkFBQTtFRDJMRjs7RUN6TEE7SUFDRSxTQUFBO0VENExGOztFQzFMQTtJQUNFLFdBQUE7RUQ2TEY7RUM1TEU7SUFDRSxXQUFBO0VEOExKO0FBQ0Y7QUN2TFE7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0FEeUxWO0FDeExVO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBRDBMWjtBQ3pMWTtFQUNFLGFBQUE7QUQyTGQ7QUN6TGM7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEMkxoQjtBQ3pMYztFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBRDJMaEI7QUN4TFk7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBRDBMZDtBQ3hMYztFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBRDBMaEI7QUN4TGtCO0VGOU5oQixZQUFBO0VBQ0EsV0FBQTtFQUNBLGNHM2hCZ0I7RUg0aEJoQixlQUFBO0VBQ0EsZ0JHMWdCVztFSDJnQlgsaUNHNWdCWTtFSDZnQlosZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUN5WkY7QUR4WkU7RUFDRSxtQkFBQTtBQzBaSjtBRDc2Qkk7RUV1dUJjO0lGak5kLGVBQUE7RUMyWkY7QUFDRjtBQ3RNZ0I7RUFDRSx1QkFBQTtBRHdNbEI7QUN0TWdCO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBRHdNbEI7QUN0TWdCO0VBQ0UsZ0JBQUE7QUR3TWxCO0FDbE1VO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QURvTVo7QUNuTVk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEcU1kO0FDL0xjO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QURpTWhCO0FDOUxnQjtFQUNFLFVBQUE7RUFDQSx5QkN6eUJKO0VEMHlCSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxTQUFBO0FEZ01sQjtBQzVMYztFQUNFLHlCQ3h5QkY7RUR5eUJFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRDhMaEI7QUM3TGdCO0VBQ0UseUJDOXlCSjtFRCt5QkksNEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBRCtMbEI7QUMzTGM7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUQ2TGhCIiwiZmlsZSI6InNyYy9hcHAvZGlnaXRhbFJpY2VpcHQvZGlnaXRhbC1yaWNlaXB0L2RpZ2l0YWwtcmljZWlwdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNsZWFyZml4IHN0eWxlICovXHJcblxyXG4vLyBDbGVhcmZpeCBtaXhpblxyXG4lY2xlYXJmaXgge1xyXG4gICp6b29tOiAxO1xyXG5cclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4vLyBEZWZpbmUgdGhlIGJyZWFrcG9pbnRzXHJcbkBtaXhpbiBicmVha3BvaW50KCRwb2ludCkge1xyXG4gIEBpZiAkcG9pbnQ9PXNtYWxsLWRldmljZSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldDAge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT10YWJsZXRwcm8ge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1pcGFkIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09bGFwdG9wIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PWxhcHRvcG1heCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1kZXNrdG9wIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vbG9hZGVyXHJcbkBtaXhpbiBsb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgYmFja2dyb3VuZDogJGJsYWNrLW92ZXJsYXk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgfVxyXG59XHJcbi8vIGp1c3RpZnktY29udGVudCBtaXhpblxyXG5cclxuQG1peGluIGp1c3RpZnktY29udGVudCgkanVzdGlmeSkge1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAtbW96LWp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgLW1zLWp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAtbXMtZmxleC1wYWNrOiAkanVzdGlmeTtcclxufVxyXG5cclxuLy8gYWxpZ24taXRlbXMgbWl4aW5cclxuXHJcbkBtaXhpbiBhbGlnbi1pdGVtcygkYWxpZ24taG9yaXpvbnRhbGx5KSB7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogJGFsaWduLWhvcml6b250YWxseTtcclxuICAtbW96LWFsaWduLWl0ZW1zOiAkYWxpZ24taG9yaXpvbnRhbGx5O1xyXG4gIC1tcy1hbGlnbi1pdGVtczogJGFsaWduLWhvcml6b250YWxseTtcclxuICBhbGlnbi1pdGVtczogJGFsaWduLWhvcml6b250YWxseTtcclxufVxyXG5cclxuLy8gVHJhbnNpdGlvbiBtaXhpblxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24pIHtcclxuICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbn1cclxuXHJcbi8vIFRyYW5zZm9ybSBtaXhpblxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtKSB7XHJcbiAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbiAgLW8tdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG4gIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxufVxyXG5cclxuQG1peGluIGZsZXgge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuQG1peGluIGJveC1zaGFkb3coJGFyZ3MpIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgLW1zLWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gIGJveC1zaGFkb3c6ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAtbXMtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG59XHJcblxyXG4vL1BhZGRpbmcgbWl4aW5cclxuQG1peGluIHBhZGRpbmcoJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCkge1xyXG4gIHBhZGRpbmctdG9wOiAkdG9wO1xyXG4gIHBhZGRpbmctcmlnaHQ6ICRyaWdodDtcclxuICBwYWRkaW5nLWJvdHRvbTogJGJvdHRvbTtcclxuICBwYWRkaW5nLWxlZnQ6ICRsZWZ0O1xyXG59XHJcblxyXG4vL01hcmdpbiBtaXhpblxyXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpIHtcclxuICBtYXJnaW4tdG9wOiAkdG9wO1xyXG4gIG1hcmdpbi1yaWdodDogJHJpZ2h0O1xyXG4gIG1hcmdpbi1ib3R0b206ICRib3R0b207XHJcbiAgbWFyZ2luLWxlZnQ6ICRsZWZ0O1xyXG59XHJcblxyXG4vL3Bvc2l0aW9uIG1peGluXHJcbkBtaXhpbiBwb3NpdGlvbigkcG9zaXRpb24sICR0b3A6IG51bGwsICRyaWdodDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJGxlZnQ6IG51bGwpIHtcclxuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xyXG4gIHRvcDogJHRvcDtcclxuICByaWdodDogJHJpZ2h0O1xyXG4gIGJvdHRvbTogJGJvdHRvbTtcclxuICBsZWZ0OiAkbGVmdDtcclxufVxyXG5cclxuQG1peGluIGhlYWRpbmctSDEge1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLUgyIHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gaGVhZGluZy1IMyB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGhlYWRpbmctSDQge1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtcmVndWxhcjtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcGFyYWdyYXBoIHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LXJlZ3VsYXI7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb2xvckJveCB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9keS1iZy1jb2xvcjtcclxuICAvLyBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyMCUpIDBweCAxcHggNHB4IDAuNXB4OyA7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmNob3Ige1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzLFxyXG4gICY6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZGVmYXVsdCBpbnB1dCB0eXBlIGFueVxyXG5AbWl4aW4gaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1saWdodC1ncmV5O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAkcGxhY2Vob2xkZXItY29sb3I7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLy90ZXh0YXJlYVxyXG5AbWl4aW4gdGV4dGFyZWEge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAkcGxhY2Vob2xkZXItY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBkZWZhdWx0IGJ1dHRvblxyXG5AbWl4aW4gYnV0dG9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDlweCAxNXB4IDlweDtcclxuICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24xIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDlweCAxNXB4IDlweDtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxN3B4IDEwcHggLTEwcHggcmdiYSgkdGhlbWUtY29sb3IsIDAuMyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMzAwbXM7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gYm94IGRyX3N1bW1hcnlcclxuQG1peGluIGJveCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggMXB4IDRweCAwLjVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuQG1peGluIG1vbl9uYW1lIHtcclxuICAvLyBwYWRkaW5nOiAwcHggMCAwcHggMTVweDtcclxuXHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5AbWl4aW4gbW9uX25vIHtcclxuICBwYWRkaW5nOiAwcHggMCAwcHggMTBweDtcclxuICAvLyBjb2xvcjogIzRhNGE0YTtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gZGVmYXVsdCBwcm9kdWN0LWJ1dHRvblxyXG5AbWl4aW4gcHJvZHVjdC1idXR0b24ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDVweCAxNHB4IDZweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDJweCB0cmFuc3BhcmVudDtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgLW8tYm94LXNoYWRvdzogMCAycHggMnB4IDJweCB0cmFuc3BhcmVudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHJpZ2h0IHdoaXRlIGFycm93IGluIGJ1dHRvblxyXG4vLyBAbWl4aW4gYnRuX3JpZ2h0X2Fycm93IHtcclxuLy8gICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG5cclxuLy8gICAmOmFmdGVyIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IHVybCgpIG5vLXJlcGVhdDtcclxuLy8gICAgIHdpZHRoOiAyMHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAxN3B4O1xyXG4vLyAgICAgY29udGVudDogXCJcIjtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHJpZ2h0OiA3cHg7XHJcbi8vICAgICB0b3A6IDEwcHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vL2ZvciBoNCB3aXRoIGJvdHRvbSBsaW5lXHJcbkBtaXhpbiB0ZXh0X3VuZGVybGluZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMnB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9mb3Igc2VsZWN0IHRhZ1xyXG5cclxuQG1peGluIHNlbGVjdEJveCB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3MtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvbGlzdC5zdmcpIHJpZ2h0IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAwLjdlbSB0b3AgNTAlLCAwIDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBtaW4td2lkdGg6IDk1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaW5lLWhlaWdodDogMjlweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vbGFiZWxcclxuQG1peGluIGxhYmVsIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgY29sb3I6ICRjb2xvci1kYXJrLWdyZXk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICYuZGlzYWJsZSB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy9pbWFnZSBib3ggc2hhZG93XHJcbkBtaXhpbiBpbWctYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctY29sb3IgMHB4IDFweCA0cHggMC41cHg7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkYm94LXNoYWRvdy1jb2xvciAwcHggMXB4IDRweCAwLjVweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRib3gtc2hhZG93LWNvbG9yIDBweCAxcHggNHB4O1xyXG59XHJcblxyXG4vL2NoZWNrYm94XHJcblxyXG5AbWl4aW4gY2hlY2tib3gge1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDJweDtcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgIHRvcDogMXB4O1xyXG4gICAgICBsZWZ0OiA3LjVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vdG9vbC10aXBcclxuXHJcbi8qPT0gc3RhcnQgb2YgY29kZSBmb3IgdG9vbHRpcHMgPT0qL1xyXG5AbWl4aW4gZGVmYXVsdC10b29sLXRpcCB7XHJcbiAgY3Vyc29yOiBoZWxwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTAwO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgICY6YmVmb3JlLFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcclxuICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNikgMC4ycztcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxZW0gMC43NWVtIDAgMC43NWVtO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmFiYmJiIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMC41ZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KSwgb3BhY2l0eSAwLjY1cyAwLjVzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoLTkwJSk7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNiYWJiYmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgICBib3R0b206IDE4MCU7XHJcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXRpcCk7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogLTguNzVlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjZweDtcclxuICAgIC8vIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNikgdHJhbnNsYXRlWSg1MCUpO1xyXG4gICAgLy8gd2lkdGg6IDE3LjVlbTtcclxuICAgIG1pbi13aWR0aDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xyXG4gICAgICB3aWR0aDogMTBlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vbGlzdCBzdHlsZVxyXG5cclxuQG1peGluIGxpc3RzdHlsZSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiLlwiO1xyXG4gICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBsaW5lLWhlaWdodDogMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiA0MXB4O1xyXG4gIH1cclxufVxyXG5cclxuLy9maWxlIHVwbG9hZCBpbnB1dFxyXG5AbWl4aW4gZmlsZV9pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBidXR0b247XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi8vZm9yIGJsb2NrIG1peGluXHJcbkBtaXhpbiBibG9ja0FsbFRleHQge1xyXG4gIGgxIHtcclxuICAgIEBpbmNsdWRlIGhlYWRpbmctSDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIEBpbmNsdWRlIGhlYWRpbmctSDI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIEBpbmNsdWRlIGhlYWRpbmctSDM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIEBpbmNsdWRlIGhlYWRpbmctSDQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIEBpbmNsdWRlIGFuY2hvcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmVtcHR5IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIEBpbmNsdWRlIGFuY2hvcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJyZWFkY3J1bWIge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vcmFkaW8gYnV0dG9uXHJcblxyXG5AbWl4aW4gcmFkaW8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAmOmNoZWNrZWQsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIC8vIGxlZnQ6IDQ3LjglO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgIGxlZnQ6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1peGluIHJhZGlvMSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgICY6Y2hlY2tlZCxcclxuICAgICY6bm90KDpjaGVja2VkKSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogNDcuOCU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRvcDogNXB4O1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgIGxlZnQ6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLy9kZWZhdWx0IHRhYmxlXHJcbkBtaXhpbiB0YWJsZSB7XHJcbiAgdGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgdGhlYWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICAgICAgdHIge1xyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAuaWNvbi1pbmZvLXRvb2x0aXAge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBkZWZhdWx0LXRvb2wtdGlwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrYm94X3dyYXAge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBjaGVja2JveDtcclxuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGJvZHkge1xyXG4gICAgICB0ciB7XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3VjY2VzcyxcclxuICAgICAgICAgIC5lcnJvcixcclxuICAgICAgICAgIC5tYXBwZWQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Y2Nlc3Mge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR0aGVtZS1jb2xvciwgMC4wNSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmRpc2FibGUge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZXJyb3Ige1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1yZWQsIDAuMDUpO1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXJlZDtcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmRpc2FibGUge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWFwcGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItbGlnaHQtYmxhY2ssIDAuMDUpO1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kaXNhYmxlIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrYm94X3dyYXAge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBjaGVja2JveDtcclxuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGFuY2hvcjtcclxuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGltZy1ib3gtc2hhZG93O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjA1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pY29uLWluZm8tdG9vbHRpcCB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBkZWZhdWx0LXRvb2wtdGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKiBjbGVhcmZpeCBzdHlsZSAqL1xuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qPT0gc3RhcnQgb2YgY29kZSBmb3IgdG9vbHRpcHMgPT0qL1xuLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC50aXRsZSB7XG4gIGNvbG9yOiAjNmE2YTZhO1xufVxuLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC50aXRsZSAudGFibGVfaGVhZGluZ193cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCBoMyB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCAuaW1nX3JlZnJlc2gge1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cbi5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXAge1xuICBjdXJzb3I6IGhlbHA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6YmVmb3JlLCAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmFmdGVyIHtcbiAgbGVmdDogNTAlO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xMDA7XG59XG4uZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmhvdmVyOmJlZm9yZSwgLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC50aXRsZSAudGFibGVfaGVhZGluZ193cmFwIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjphZnRlciwgLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC50aXRsZSAudGFibGVfaGVhZGluZ193cmFwIC5pY29uLWluZm8tdG9vbHRpcDpmb2N1czpiZWZvcmUsIC5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6Zm9jdXM6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6aG92ZXI6YmVmb3JlLCAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmZvY3VzOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XG59XG4uZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmhvdmVyOmFmdGVyLCAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmZvY3VzOmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNik7XG59XG4uZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmJlZm9yZSB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMWVtIDAuNzVlbSAwIDAuNzVlbTtcbiAgYm9yZGVyLWNvbG9yOiAjYmFiYmJiIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBib3R0b206IDEwMCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbi1sZWZ0OiAtMC41ZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpLCBvcGFjaXR5IDAuNjVzIDAuNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKC05MCUpO1xufVxuLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC50aXRsZSAudGFibGVfaGVhZGluZ193cmFwIC5pY29uLWluZm8tdG9vbHRpcDphZnRlciB7XG4gIGJhY2tncm91bmQ6ICNiYWJiYmI7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgYm90dG9tOiAxODAlO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgY29udGVudDogYXR0cihkYXRhLXRpcCk7XG4gIG1hcmdpbi1sZWZ0OiAtMjZweDtcbiAgcGFkZGluZzogN3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KSAwLjJzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNikgdHJhbnNsYXRlWSg1MCUpO1xuICBtaW4td2lkdGg6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmFmdGVyIHtcbiAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICBtYXJnaW4tbGVmdDogLTVlbTtcbiAgICB3aWR0aDogMTBlbTtcbiAgfVxufVxuLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC50aXRsZSBpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOWY5Zjk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjOTU5Nzk1O1xufVxuLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC5kci10YWJsZSB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC5kci10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC5kci10YWJsZSAudGFibGUtaGVhZGVyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjg5NDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufVxuLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC5kci10YWJsZSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICM5NTk3OTU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAuZHItdGFibGUgdHIgdGgge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWNlYyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzRhNGE0YTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC5kci10YWJsZSAuYnV0dG9uLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzk1OTc5NTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udG90YWxiaWxsX3dyYXAge1xuICBtYXJnaW46IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRvdGFsYmlsbF93cmFwLnRvdGFsX2NvdW50X3dyYXAge1xuICBjb2xvcjogIzAwYjg5NDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnRvdGFsYmlsbF93cmFwLnRvdGFsX2NvdW50X3dyYXA6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnRvdGFsYmlsbF93cmFwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50b3RhbGJpbGxfd3JhcC5mYWlsZF9jb3VudF93cmFwIHtcbiAgY29sb3I6ICNmNzE0NTg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi50b3RhbGJpbGxfd3JhcC5mYWlsZF9jb3VudF93cmFwOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi50b3RhbGJpbGxfd3JhcCB7XG4gIG1hcmdpbjogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udG90YWxiaWxsX3dyYXAuc3VjY2Vzc19jb3VudF93cmFwIHtcbiAgY29sb3I6ICMxZWQ4MTU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi50b3RhbGJpbGxfd3JhcC5zdWNjZXNzX2NvdW50X3dyYXA6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnRvdGFsYmlsbF93cmFwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50b3RhbGJpbGxfd3JhcC5zbXNfY291bnRfd3JhcCB7XG4gIGNvbG9yOiAjYWNhY2FjO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4udG90YWxiaWxsX3dyYXAuc21zX2NvdW50X3dyYXA6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnRvdGFsYmlsbF93cmFwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50b3RhbGJpbGxfd3JhcC53YXBfY291bnRfd3JhcCB7XG4gIGNvbG9yOiAjNTNlMWFhO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4udG90YWxiaWxsX3dyYXAud2FwX2NvdW50X3dyYXA6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLnRvdGFsYmlsbF93cmFwIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50b3RhbGJpbGxfd3JhcC5lbWFpbF9jb3VudF93cmFwIHtcbiAgY29sb3I6ICMwMDcyYjg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi50b3RhbGJpbGxfd3JhcC5lbWFpbF9jb3VudF93cmFwOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5zdG9yZSB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogI2FjYWNhYztcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3RvcmU6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmxpbmtmZWVkYmFja3VybCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMwMGI4OTQ7XG59XG5cbi5saW5rU29ydHVybCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM5NTk3OTU7XG59XG5cbi5yZWNvbkxvYWRpbmdEYXRhIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5yZWNvbkxvYWRpbmdEYXRhIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLnNlYXJjaC1yZWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZG93bmxvYWRfYnRuX3dyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uYnRuZG93bmxvYWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBiODk0O1xuICBib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMXB4IDE1cHggMTFweDtcbiAgYmFja2dyb3VuZDogIzAwYjg5NDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbn1cbi5idG5kb3dubG9hZDpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKDAsIDE4NCwgMTQ4LCAwLjMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcbn1cblxuLmJ0bnNlYXJjaCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMGI4OTQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDExcHggMTVweCAxMXB4O1xuICBiYWNrZ3JvdW5kOiAjMDBiODk0O1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYnRuc2VhcmNoOmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoMCwgMTg0LCAxNDgsIDAuMyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuXG4udGFibGUtYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogIzAwYjg5NDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwYjg5NDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmlucHV0LXN0eWxlIHtcbiAgaGVpZ2h0OiA0NHB4O1xuICB3aWR0aDogOTAlO1xuICAvKiBib3JkZXI6IG5vbmU7ICovXG4gIHBhZGRpbmctbGVmdDogMTFweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlY2VjO1xufVxuXG4uaW5wdXQtZmxleCB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGV0YWlscyB7XG4gIHBhZGRpbmc6IDMwcHggMHB4IDIwcHggMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3JkZXItdG9wOiBncm9vdmU7XG4gIGJvcmRlci1ib3R0b206IGdyb292ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYnRuLXN0eWxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBjb2xvcjogIzAwYjg5NDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwYjg5NDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLkxpbmtDb2xvciB7XG4gIGNvbG9yOiAjMDBiODk0O1xufVxuXG4ucG9zaXRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDgycHg7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi53aWR0aGNvbiB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5tb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG59XG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWhlYWRlciBidXR0b24uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMnB4O1xuICB0b3A6IDI0cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSBmb3JtIC51c2VyX2FkZF93cmFwIC5jb2wtMyB7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSBmb3JtIC51c2VyX2FkZF93cmFwIC5pbnB1dF9ncm91cCBsYWJlbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjOUE5QTlBO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgZm9ybSAudXNlcl9hZGRfd3JhcCAuaW5wdXRfZ3JvdXAgbGFiZWwuZGlzYWJsZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgZm9ybSAudXNlcl9hZGRfd3JhcCAuaW5wdXRfZ3JvdXAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgZm9ybSAudXNlcl9hZGRfd3JhcCAuaW5wdXRfZ3JvdXAgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlY2VjO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBsaW5lLWhlaWdodDogMjlweDtcbn1cbi5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IGZvcm0gLnVzZXJfYWRkX3dyYXAgLmlucHV0X2dyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWNhY2FjO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSBmb3JtIC51c2VyX2FkZF93cmFwIC5pbnB1dF9ncm91cCBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgZm9ybSAudXNlcl9hZGRfd3JhcCAuaW5wdXRfZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgZm9ybSAudXNlcl9hZGRfd3JhcCAuaW5wdXRfZ3JvdXAgYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQjg5NDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOXB4IDE1cHggOXB4O1xuICBiYWNrZ3JvdW5kOiAjMDBCODk0O1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1pbi13aWR0aDogYXV0bztcbn1cbi5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IGZvcm0gLnVzZXJfYWRkX3dyYXAgLmlucHV0X2dyb3VwIGJ1dHRvbjpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKDAsIDE4NCwgMTQ4LCAwLjMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcbn1cbi5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IGZvcm0gLnVzZXJfYWRkX3dyYXAgLmlucHV0X2dyb3VwIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSBmb3JtIC51c2VyX2FkZF93cmFwIC5pbnB1dF9ncm91cCBidXR0b246dmlzaXRlZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgZm9ybSAudXNlcl9hZGRfd3JhcCAuaW5wdXRfZ3JvdXAgLmFsZXJ0IHtcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiAjRkY0QjRCO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IGZvcm0gLnVzZXJfYWRkX3dyYXAgLmlucHV0X2dyb3VwIC5hbGVydCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgZm9ybSAudXNlcl9hZGRfd3JhcCAuaW5wdXRfZ3JvdXAgLmFsZXJ0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLnJlc2VuZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMGI4OTQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5lcnIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZjcxNDU4O1xuICBtYXJnaW4tbGVmdDogMjFweDtcbn1cblxuLnNlYXJjaC1pbm92aWNlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzZhNmE2YTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5zZWFyY2gtaW5vdmljZSAuaW1nX3JlZnJlc2gge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLnNlYXJjaC1pbm92aWNlIC5pY29uLWluZm8tdG9vbHRpcCB7XG4gIGN1cnNvcjogaGVscDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNlYXJjaC1pbm92aWNlIC5pY29uLWluZm8tdG9vbHRpcDpiZWZvcmUsIC5zZWFyY2gtaW5vdmljZSAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICBsZWZ0OiA1MCU7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTEwMDtcbn1cbi5zZWFyY2gtaW5vdmljZSAuaWNvbi1pbmZvLXRvb2x0aXA6aG92ZXI6YmVmb3JlLCAuc2VhcmNoLWlub3ZpY2UgLmljb24taW5mby10b29sdGlwOmhvdmVyOmFmdGVyLCAuc2VhcmNoLWlub3ZpY2UgLmljb24taW5mby10b29sdGlwOmZvY3VzOmJlZm9yZSwgLnNlYXJjaC1pbm92aWNlIC5pY29uLWluZm8tdG9vbHRpcDpmb2N1czphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcbiAgei1pbmRleDogMTAwO1xufVxuLnNlYXJjaC1pbm92aWNlIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjpiZWZvcmUsIC5zZWFyY2gtaW5vdmljZSAuaWNvbi1pbmZvLXRvb2x0aXA6Zm9jdXM6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNikgMC4ycztcbn1cbi5zZWFyY2gtaW5vdmljZSAuaWNvbi1pbmZvLXRvb2x0aXA6aG92ZXI6YWZ0ZXIsIC5zZWFyY2gtaW5vdmljZSAuaWNvbi1pbmZvLXRvb2x0aXA6Zm9jdXM6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KTtcbn1cbi5zZWFyY2gtaW5vdmljZSAuaWNvbi1pbmZvLXRvb2x0aXA6YmVmb3JlIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxZW0gMC43NWVtIDAgMC43NWVtO1xuICBib3JkZXItY29sb3I6ICNiYWJiYmIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGJvdHRvbTogMTAwJTtcbiAgY29udGVudDogXCJcIjtcbiAgbWFyZ2luLWxlZnQ6IC0wLjVlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNiksIG9wYWNpdHkgMC42NXMgMC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoLTkwJSk7XG59XG4uc2VhcmNoLWlub3ZpY2UgLmljb24taW5mby10b29sdGlwOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2JhYmJiYjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBib3R0b206IDE4MCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGlwKTtcbiAgbWFyZ2luLWxlZnQ6IC0yNnB4O1xuICBwYWRkaW5nOiA3cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKDUwJSk7XG4gIG1pbi13aWR0aDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zZWFyY2gtaW5vdmljZSAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xuICAgIHdpZHRoOiAxMGVtO1xuICB9XG59XG4uc2VhcmNoLWlub3ZpY2UgLmRvd25sb2FkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5zZWFyY2gtaW5vdmljZSAudG9vbHRpcCB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgYm9yZGVyOiAxcHggc29saWQgIzczNzM3MztcbiAgY29sb3I6ICM3MzczNzM7XG4gIG1hcmdpbjogNHB4IDEyMXB4IDAgNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLmJhY2tidXR0b25TZXR0aW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxNXB4IDBweCAwcHggMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uYmFja2J1dHRvblNldHRpbmcgLnRhYmxlX2hlYWRpbmcge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjNmE2YTZhO1xufVxuLmJhY2tidXR0b25TZXR0aW5nIC50YWJsZV9oZWFkaW5nIC50YWJsZV9oZWFkaW5nX2NvdW50IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogIzZhNmE2YTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZjcxNDU4O1xufVxuLmJhY2tidXR0b25TZXR0aW5nIC50YWJsZV9oZWFkaW5nIC50YWJsZV9oZWFkaW5nX3RvdGFsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogIzAwYjg5NDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJhY2tidXR0b25TZXR0aW5nIC50YWJsZV9oZWFkaW5nIC5ib3R0b21fYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICB0b3A6IDU1cHg7XG4gIGxlZnQ6IDM2N3B4O1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgI2ZmZmZmZjtcbiAgei1pbmRleDogOTtcbn1cbi5iYWNrYnV0dG9uU2V0dGluZyAudGFibGVfaGVhZGluZyAudG9vbF90aXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzBweDtcbiAgbGVmdDogMjEzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMzkwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB6LWluZGV4OiA5O1xufVxuLmJhY2tidXR0b25TZXR0aW5nIC50YWJsZV9oZWFkaW5nIC50b29sX3RpcCAuY2xvc2VfdG9vbHRpcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uYmFja2J1dHRvblNldHRpbmcgLnRhYmxlX2hlYWRpbmcgLnRvb2xfdGlwIC5kci10YWJsZSB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLmJhY2tidXR0b25TZXR0aW5nIC50YWJsZV9oZWFkaW5nIC50b29sX3RpcCAuZHItdGFibGUgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5iYWNrYnV0dG9uU2V0dGluZyAudGFibGVfaGVhZGluZyAudG9vbF90aXAgLmRyLXRhYmxlIC50YWJsZS1oZWFkZXIgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCODk0O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG59XG4uYmFja2J1dHRvblNldHRpbmcgLnRhYmxlX2hlYWRpbmcgLnRvb2xfdGlwIC5kci10YWJsZSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICM5NTk3OTU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5iYWNrYnV0dG9uU2V0dGluZyAudGFibGVfaGVhZGluZyAudG9vbF90aXAgLmRyLXRhYmxlIHRyIHRoIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlY2VjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYmFja2J1dHRvblNldHRpbmcgLnRhYmxlX2hlYWRpbmcgLnRvb2xfdGlwIC5kci10YWJsZSB0ciB0aCAudG90YWxiaWxsX3dyYXAge1xuICBtYXJnaW46IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2Y3MTQ1ODtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmJhY2tidXR0b25TZXR0aW5nIC50YWJsZV9oZWFkaW5nIC50b29sX3RpcCAuZHItdGFibGUgdHIgdGggLnRvdGFsYmlsbF93cmFwOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uYmFja2J1dHRvblNldHRpbmcgLnRhYmxlX2hlYWRpbmcgLnRvb2xfdGlwIC5kci10YWJsZSAuYnV0dG9uLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzk1OTc5NTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmJhY2tidXR0b25TZXR0aW5nIC50YWJsZV9oZWFkaW5nIC5pY29uLWluZm8tdG9vbHRpcCB7XG4gIGN1cnNvcjogaGVscDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmJhY2tidXR0b25TZXR0aW5nIC50YWJsZV9oZWFkaW5nIC5pY29uLWluZm8tdG9vbHRpcDpiZWZvcmUsIC5iYWNrYnV0dG9uU2V0dGluZyAudGFibGVfaGVhZGluZyAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICBsZWZ0OiA1MCU7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTEwMDtcbn1cbi5iYWNrYnV0dG9uU2V0dGluZyAudGFibGVfaGVhZGluZyAuaWNvbi1pbmZvLXRvb2x0aXA6aG92ZXI6YmVmb3JlLCAuYmFja2J1dHRvblNldHRpbmcgLnRhYmxlX2hlYWRpbmcgLmljb24taW5mby10b29sdGlwOmhvdmVyOmFmdGVyLCAuYmFja2J1dHRvblNldHRpbmcgLnRhYmxlX2hlYWRpbmcgLmljb24taW5mby10b29sdGlwOmZvY3VzOmJlZm9yZSwgLmJhY2tidXR0b25TZXR0aW5nIC50YWJsZV9oZWFkaW5nIC5pY29uLWluZm8tdG9vbHRpcDpmb2N1czphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcbiAgei1pbmRleDogMTAwO1xufVxuLmJhY2tidXR0b25TZXR0aW5nIC50YWJsZV9oZWFkaW5nIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjpiZWZvcmUsIC5iYWNrYnV0dG9uU2V0dGluZyAudGFibGVfaGVhZGluZyAuaWNvbi1pbmZvLXRvb2x0aXA6Zm9jdXM6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNikgMC4ycztcbn1cbi5iYWNrYnV0dG9uU2V0dGluZyAudGFibGVfaGVhZGluZyAuaWNvbi1pbmZvLXRvb2x0aXA6aG92ZXI6YWZ0ZXIsIC5iYWNrYnV0dG9uU2V0dGluZyAudGFibGVfaGVhZGluZyAuaWNvbi1pbmZvLXRvb2x0aXA6Zm9jdXM6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KTtcbn1cbi5iYWNrYnV0dG9uU2V0dGluZyAudGFibGVfaGVhZGluZyAuaWNvbi1pbmZvLXRvb2x0aXA6YmVmb3JlIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxZW0gMC43NWVtIDAgMC43NWVtO1xuICBib3JkZXItY29sb3I6ICNiYWJiYmIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGJvdHRvbTogMTAwJTtcbiAgY29udGVudDogXCJcIjtcbiAgbWFyZ2luLWxlZnQ6IC0wLjVlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNiksIG9wYWNpdHkgMC42NXMgMC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoLTkwJSk7XG59XG4uYmFja2J1dHRvblNldHRpbmcgLnRhYmxlX2hlYWRpbmcgLmljb24taW5mby10b29sdGlwOmFmdGVyIHtcbiAgYmFja2dyb3VuZDogI2JhYmJiYjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBib3R0b206IDE4MCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGlwKTtcbiAgbWFyZ2luLWxlZnQ6IC0yNnB4O1xuICBwYWRkaW5nOiA3cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKDUwJSk7XG4gIG1pbi13aWR0aDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iYWNrYnV0dG9uU2V0dGluZyAudGFibGVfaGVhZGluZyAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xuICAgIHdpZHRoOiAxMGVtO1xuICB9XG59XG4uYmFja2J1dHRvblNldHRpbmcgLnRhYmxlX2hlYWRpbmcgLmltZ19kb3dubG9hZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xufVxuXG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAuY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEuM3JlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbn1cbi5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5jYXJkIC5jYXJkLWJvZHkge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgLyogcGFkZGluZzogMS4yNXJlbTsgKi9cbiAgcGFkZGluZzogMTVweDtcbn1cbi5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5jYXJkIC5jYXJkLWJvZHkgLmFsbF9kYXRhX3dyYXAge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBvdmVyZmxvdzogb3ZlcmxheTtcbiAgbWF4LWhlaWdodDogMzkwcHg7XG59XG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAuY2FyZCAuY2FyZC1ib2R5IC5hbGxfZGF0YV93cmFwIC5kci10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjlmOWY5O1xufVxuLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLmNhcmQgLmNhcmQtYm9keSAuYWxsX2RhdGFfd3JhcCAuZHItdGFibGUgLnRhYmxlLWhlYWRlciB0aCB7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBjb2xvcjogIzRhNGE0YTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAzMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogLTFweDtcbn1cbi5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5jYXJkIC5jYXJkLWJvZHkgLmFsbF9kYXRhX3dyYXAgLmRyLXRhYmxlIHRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjOTU5Nzk1O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAuY2FyZCAuY2FyZC1ib2R5IC5hbGxfZGF0YV93cmFwIC5kci10YWJsZSB0ciB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWNlYyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzRhNGE0YTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLmNhcmQgLmNhcmQtYm9keSAuYWxsX2RhdGFfd3JhcCAuZHItdGFibGUgLmJ1dHRvbi1zdHlsZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICM5NTk3OTU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gIC5tb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG4gIH1cbiAgLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC5jYXJkLWJvZHkge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIC8qIHBhZGRpbmc6IDEuMjVyZW07ICovXG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuICAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLnRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC50aXRsZSBoMyB7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM2YTZhNmE7XG4gIH1cbiAgLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC5kZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAyMXB4IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG4gIC5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAuZGV0YWlscyAuc3RvcmUtZGV0YWlscyAuaW5wdXQtc3R5bGUge1xuICAgIG1hcmdpbjogNXB4IDBweCA1cHggMHB4O1xuICB9XG4gIC5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAuZGV0YWlscyAuc3RvcmUtZGV0YWlscyAuYnRuLXN0eWxlIHtcbiAgICBwYWRkaW5nOiA0cHggMjBweDtcbiAgICBtYXJnaW46IDVweCAwcHggNXB4IDBweDtcbiAgfVxuICAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLmRyLXRhYmxlIHtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLmRyLXRhYmxlIHRoIHtcbiAgICBmb250LXNpemU6IDlweDtcbiAgfVxuICAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLmRyLXRhYmxlIC50YWJsZS1oZWFkZXIge1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAgIGNvbG9yOiAjOTU5Nzk1O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxuICAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLmRyLXRhYmxlIC5tb2JpbGUtdGFibGUtdHIgdGgge1xuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB9XG4gIC5kaWdpdGFsLXJlY2llcHQgLmxhYmVsLXN0eWxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cblxuICAuaW5wdXQtZmxleCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLmlucHV0LXN0eWxlIHtcbiAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLndpZHRoY29uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5idG4tc3R5bGUge1xuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xuICAgIHdpZHRoOiAxNTZweDtcbiAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4O1xuICB9XG5cbiAgLm1vZGFsIHtcbiAgICB0b3A6IDU4cHg7XG4gIH1cblxuICAuc3RvcmUtZGV0YWlscyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnN0b3JlLWRldGFpbHMgLnNlYXJoaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ubW9kZWxfd3JhcCAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAuY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEuM3JlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbn1cbi5tb2RlbF93cmFwIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5jYXJkIC5jYXJkLWJvZHkge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgLyogcGFkZGluZzogMS4yNXJlbTsgKi9cbiAgcGFkZGluZzogMTVweDtcbn1cbi5tb2RlbF93cmFwIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5jYXJkIC5jYXJkLWJvZHkgLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5tb2RlbF93cmFwIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5jYXJkIC5jYXJkLWJvZHkgLnRpdGxlIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzZhNmE2YTtcbn1cbi5tb2RlbF93cmFwIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5jYXJkIC5jYXJkLWJvZHkgLnRpdGxlIC5kYXRlX3N0eWxlIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZjlmOTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICM2YTZhNmE7XG59XG4ubW9kZWxfd3JhcCAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAuY2FyZCAuY2FyZC1ib2R5IC5kZXRhaWxzIHtcbiAgcGFkZGluZzogMTBweCAwcHggMjFweCAwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlN2U3O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLm1vZGVsX3dyYXAgLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLmNhcmQgLmNhcmQtYm9keSAuZGV0YWlscyAuc3RvcmUtZGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5tb2RlbF93cmFwIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5jYXJkIC5jYXJkLWJvZHkgLmRldGFpbHMgLnN0b3JlLWRldGFpbHMgLnNlYXJoaW5wdXQgbGFiZWwge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzlBOUE5QTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tb2RlbF93cmFwIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5jYXJkIC5jYXJkLWJvZHkgLmRldGFpbHMgLnN0b3JlLWRldGFpbHMgLnNlYXJoaW5wdXQgbGFiZWwuZGlzYWJsZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1vZGVsX3dyYXAgLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLmNhcmQgLmNhcmQtYm9keSAuZGV0YWlscyAuc3RvcmUtZGV0YWlscyAuc2VhcmhpbnB1dCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4ubW9kZWxfd3JhcCAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAuY2FyZCAuY2FyZC1ib2R5IC5kZXRhaWxzIC5zdG9yZS1kZXRhaWxzIC5pbnB1dC1zdHlsZSB7XG4gIG1hcmdpbjogNXB4IDBweCA1cHggMHB4O1xufVxuLm1vZGVsX3dyYXAgLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLmNhcmQgLmNhcmQtYm9keSAuZGV0YWlscyAuc3RvcmUtZGV0YWlscyAuYnRuLXN0eWxlIHtcbiAgcGFkZGluZzogNHB4IDIwcHg7XG4gIG1hcmdpbjogNXB4IDBweCA1cHggMHB4O1xufVxuLm1vZGVsX3dyYXAgLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLmNhcmQgLmNhcmQtYm9keSAuZGV0YWlscyAuc3RvcmUtZGV0YWlscyAubWFyZ2luX3RvcCB7XG4gIG1hcmdpbi10b3A6IDExcHg7XG59XG4ubW9kZWxfd3JhcCAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAuY2FyZCAuYWxsX2RhdGFfd3JhcCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG92ZXJmbG93OiBvdmVybGF5O1xuICBtYXgtaGVpZ2h0OiAzOTBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubW9kZWxfd3JhcCAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAuY2FyZCAuYWxsX2RhdGFfd3JhcCAuc3RvcmVIZWFkZXIge1xuICBjb2xvcjogIzZhNmE2YTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm1vZGVsX3dyYXAgLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLmNhcmQgLmFsbF9kYXRhX3dyYXAgLmRyLXRhYmxlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOWY5Zjk7XG59XG4ubW9kZWxfd3JhcCAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAuY2FyZCAuYWxsX2RhdGFfd3JhcCAuZHItdGFibGUgLnRhYmxlLWhlYWRlciB0aCB7XG4gIHdpZHRoOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEI4OTQ7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAzMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogLTFweDtcbn1cbi5tb2RlbF93cmFwIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5jYXJkIC5hbGxfZGF0YV93cmFwIC5kci10YWJsZSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzk1OTc5NTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLm1vZGVsX3dyYXAgLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLmNhcmQgLmFsbF9kYXRhX3dyYXAgLmRyLXRhYmxlIHRyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlY2VjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ubW9kZWxfd3JhcCAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAuY2FyZCAuYWxsX2RhdGFfd3JhcCAuZHItdGFibGUgLmJ1dHRvbi1zdHlsZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICM5NTk3OTU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iLCJAaW1wb3J0IFwic3JjL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCBcInNyYy9zY3NzL21peGlucy5zY3NzXCI7XHJcbi5kaWdpdGFsLXJlY2llcHQge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgLmNhcmQge1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICAgICAgLnRhYmxlX2hlYWRpbmdfd3JhcCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaW1nX3JlZnJlc2gge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaWNvbi1pbmZvLXRvb2x0aXAge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBkZWZhdWx0LXRvb2wtdGlwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmOWY5Zjk7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICM5NTk3OTU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuZHItdGFibGUge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgICAgIC8vIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZzphZnRlcixcclxuICAgICAgICAvLyB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmc6YmVmb3JlLFxyXG4gICAgICAgIC8vIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2M6YWZ0ZXIsXHJcbiAgICAgICAgLy8gdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzYzpiZWZvcmUsXHJcbiAgICAgICAgLy8gdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2FzY19kaXNhYmxlZDphZnRlcixcclxuICAgICAgICAvLyB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjX2Rpc2FibGVkOmJlZm9yZSxcclxuICAgICAgICAvLyB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzYzphZnRlcixcclxuICAgICAgICAvLyB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzYzpiZWZvcmUsXHJcbiAgICAgICAgLy8gdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2NfZGlzYWJsZWQ6YWZ0ZXIsXHJcbiAgICAgICAgLy8gdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2NfZGlzYWJsZWQ6YmVmb3JlIHtcclxuICAgICAgICAvLyAgIGJvdHRvbTogMC41ZW07XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50YWJsZS1oZWFkZXIge1xyXG4gICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuXHJcbiAgICAgICAgICBjb2xvcjogIzk1OTc5NTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlY2VjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNGE0YTRhO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b24tc3R5bGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzk1OTc5NTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRvdGFsYmlsbF93cmFwIHtcclxuICBtYXJnaW46IDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJi50b3RhbF9jb3VudF93cmFwIHtcclxuICAgIGNvbG9yOiAjMDBiODk0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRvdGFsYmlsbF93cmFwIHtcclxuICBtYXJnaW46IDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJi5mYWlsZF9jb3VudF93cmFwIHtcclxuICAgIGNvbG9yOiAjZjcxNDU4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRvdGFsYmlsbF93cmFwIHtcclxuICBtYXJnaW46IDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJi5zdWNjZXNzX2NvdW50X3dyYXAge1xyXG4gICAgY29sb3I6ICMxZWQ4MTU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4udG90YWxiaWxsX3dyYXAge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmLnNtc19jb3VudF93cmFwIHtcclxuICAgIGNvbG9yOiAjYWNhY2FjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRvdGFsYmlsbF93cmFwIHtcclxuICBtYXJnaW46IDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJi53YXBfY291bnRfd3JhcCB7XHJcbiAgICBjb2xvcjogIzUzZTFhYTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi50b3RhbGJpbGxfd3JhcCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICYuZW1haWxfY291bnRfd3JhcCB7XHJcbiAgICBjb2xvcjogIzAwNzJiODtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5zdG9yZSB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgY29sb3I6ICNhY2FjYWM7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG59XHJcbi5saW5rZmVlZGJhY2t1cmwge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzAwYjg5NDtcclxufVxyXG4ubGlua1NvcnR1cmwge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzk1OTc5NTtcclxufVxyXG4ucmVjb25Mb2FkaW5nRGF0YSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoLXJlYyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZG93bmxvYWRfYnRuX3dyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmJ0bmRvd25sb2FkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDBiODk0O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogMTFweCAxNXB4IDExcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwYjg5NDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYigwIDE4NCAxNDggLyAzMCUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xyXG4gIH1cclxufVxyXG4uYnRuc2VhcmNoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDBiODk0O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogMTFweCAxNXB4IDExcHg7XHJcbiAgYmFja2dyb3VuZDogIzAwYjg5NDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICAmOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYigwIDE4NCAxNDggLyAzMCUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLmJ0bnNlYXJjaHtcclxuLy8gICBvdXRsaW5lOiBub25lO1xyXG4vLyAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2IoMCAxODQgMTQ4IC8gMzAlKTtcclxuLy8gICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcclxuLy8gfVxyXG4udGFibGUtYnV0dG9uIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY29sb3I6ICMwMGI4OTQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwYjg5NDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmlucHV0LXN0eWxlIHtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICAvKiBib3JkZXI6IG5vbmU7ICovXHJcbiAgcGFkZGluZy1sZWZ0OiAxMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlY2VjO1xyXG59XHJcbi5pbnB1dC1mbGV4IHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmRldGFpbHMge1xyXG4gIHBhZGRpbmc6IDMwcHggMHB4IDIwcHggMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYm9yZGVyLXRvcDogZ3Jvb3ZlO1xyXG4gIGJvcmRlci1ib3R0b206IGdyb292ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLmJ0bi1zdHlsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY29sb3I6ICMwMGI4OTQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwYjg5NDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5MaW5rQ29sb3Ige1xyXG4gIGNvbG9yOiAjMDBiODk0O1xyXG59XHJcblxyXG4ucG9zaXRpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICBoZWlnaHQ6IDgycHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4ud2lkdGhjb24ge1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuLm1vZGFsIHtcclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogOTBweDtcclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYnV0dG9uLmNsb3NlIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHJpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgdG9wOiAyNHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbC10aXRsZSB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAudXNlcl9hZGRfd3JhcCB7XHJcbiAgICAgICAgICAgIC5jb2wtMyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5wdXRfZ3JvdXAge1xyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGxhYmVsO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBpbnB1dDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbjtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmFsZXJ0IHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXJlZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnJlc2VuZCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjMDBiODk0O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmVyciB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjZjcxNDU4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMXB4O1xyXG59XHJcbi5zZWFyY2gtaW5vdmljZSB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogIzZhNmE2YTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIC5pbWdfcmVmcmVzaCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICB9XHJcblxyXG4gIC5pY29uLWluZm8tdG9vbHRpcCB7XHJcbiAgICBAaW5jbHVkZSBkZWZhdWx0LXRvb2wtdGlwO1xyXG4gIH1cclxuXHJcbiAgLmRvd25sb2FkIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIC50b29sdGlwIHtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzM3MzczO1xyXG4gICAgY29sb3I6ICM3MzczNzM7XHJcbiAgICBtYXJnaW46IDRweCAxMjFweCAwIDVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmJhY2tidXR0b25TZXR0aW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxNXB4IDBweCAwcHggMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuXHJcbiAgLnRhYmxlX2hlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxuXHJcbiAgICAudGFibGVfaGVhZGluZ19jb3VudCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBjb2xvcjogI2Y3MTQ1ODtcclxuICAgIH1cclxuICAgIC50YWJsZV9oZWFkaW5nX3RvdGFsIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICBjb2xvcjogIzAwYjg5NDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b21fYXJyb3cge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICB0b3A6IDU1cHg7XHJcbiAgICAgIGxlZnQ6IDM2N3B4O1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgei1pbmRleDogOTtcclxuICAgIH1cclxuXHJcbiAgICAudG9vbF90aXAge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNzBweDtcclxuICAgICAgbGVmdDogMjEzcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB3aWR0aDogMzkwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggMCByZ2IoMCAwIDAgLyAxMCUpLCAwIDJweCAxNXB4IDAgcmdiKDAgMCAwIC8gNSUpO1xyXG4gICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAuY2xvc2VfdG9vbHRpcCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZHItdGFibGUge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgICAgICAgY29sb3I6ICM5NTk3OTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWNlYyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAudG90YWxiaWxsX3dyYXAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBjb2xvcjogI2Y3MTQ1ODtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uLXN0eWxlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgY29sb3I6ICM5NTk3OTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24taW5mby10b29sdGlwIHtcclxuICAgICAgQGluY2x1ZGUgZGVmYXVsdC10b29sLXRpcDtcclxuICAgIH1cclxuICAgIC5pbWdfZG93bmxvYWQge1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAubW9kYWwtY29udGVudCB7XHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjNyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAuY2FyZC1ib2R5IHtcclxuICAgICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgICAgICAgLyogcGFkZGluZzogMS4yNXJlbTsgKi9cclxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gICAgICAgICAgLmFsbF9kYXRhX3dyYXAge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogb3ZlcmxheTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMzkwcHg7XHJcblxyXG4gICAgICAgICAgICAuZHItdGFibGUge1xyXG4gICAgICAgICAgICAgIC8vIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgIC8vIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50YWJsZS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNGE0YTRhO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAtMXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgdHIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk1OTc5NTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMzBweDtcclxuICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlY2VjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNGE0YTRhO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuYnV0dG9uLXN0eWxlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5NTk3OTU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY5cHgpIHtcclxuICAubW9kYWwge1xyXG4gICAgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLmRpZ2l0YWwtcmVjaWVwdCB7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICAgIC8qIHBhZGRpbmc6IDEuMjVyZW07ICovXHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNmE2YTZhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweCAyMXB4IDBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAuc3RvcmUtZGV0YWlscyB7XHJcbiAgICAgICAgICAgIC5pbnB1dC1zdHlsZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi1zdHlsZSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyLXRhYmxlIHtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzk1OTc5NTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gLm1vYmlsZS10YWJsZXtcclxuXHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAubW9iaWxlLXRhYmxlLXRyIHtcclxuICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGFiZWwtc3R5bGUge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbnB1dC1mbGV4IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgLmlucHV0LXN0eWxlIHtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLndpZHRoY29uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuYnRuLXN0eWxlIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgd2lkdGg6IDE1NnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDtcclxuICB9XHJcbiAgLm1vZGFsIHtcclxuICAgIHRvcDogNThweDtcclxuICB9XHJcbiAgLnN0b3JlLWRldGFpbHMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuc2VhcmhpbnB1dCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubW9kZWxfd3JhcCB7XHJcbiAgLm1vZGFsIHtcclxuICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICAubW9kYWwtY29udGVudCB7XHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMS4zcmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICAgICAgLyogcGFkZGluZzogMS4yNXJlbTsgKi9cclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNmE2YTZhO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZGF0ZV9zdHlsZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZjlmOTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4IDIxcHggMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWU3ZTc7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgLnN0b3JlLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgLnNlYXJoaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaW5wdXQtc3R5bGUge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwcHggNXB4IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idG4tc3R5bGUge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMjBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubWFyZ2luX3RvcCB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDExcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmFsbF9kYXRhX3dyYXAge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogb3ZlcmxheTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMzkwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAuc3RvcmVIZWFkZXIge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNmE2YTZhO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZHItdGFibGUge1xyXG4gICAgICAgICAgICAgIC8vIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgIC8vIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC50YWJsZS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogLTFweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5NTk3OTU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWNlYyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmJ1dHRvbi1zdHlsZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTU5Nzk1O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJcclxuLy8gZ2xvYmFsLXZhcmlhYmxlXHJcbiRoZWFkZXItY29sb3I6ICMyNjI2MjY7XHJcbiRib2R5LWJnLWNvbG9yOiAjRjNGM0YzO1xyXG4kdGhlbWUtY29sb3I6ICMwMEI4OTQ7XHJcbiRjb2xvci1yZWQ6ICNGRjRCNEI7XHJcbiRjb2xvci12YWxpZC1lcnJvcjojRTUzOTM1O1xyXG4kY29sb3ItaW52YWxpZC1lcnJvcjojQjcxYzFjO1xyXG4kY29sb3ItbWFnZW50YTogI2JjNjQ5YztcclxuJGNvbG9yLXBpbms6ICNmNDk0Yzg7XHJcbiRjb2xvci1ncmVlbjogIzg0QzE0MDtcclxuJGNvbG9yLWxpZ2h0LWdyZWVuOiAjQkNENTMzO1xyXG4kY29sb3ItYmx1ZTogIzk0ZDBlYTtcclxuJGNvbG9yLWRhcmstZ3JleTogIzlBOUE5QTtcclxuJGNvbG9yLWxpZ2h0LWdyZXk6ICNmOWY5Zjk7XHJcbiRjb2xvci1leHRyYS1saWdodC1ncmV5OiAjRjRGNEY0O1xyXG4kY29sb3Itb3JhbmdlOiAjRTM3ODI2O1xyXG4kY29sb3ItbGlnaHQtb3JhbmdlOiAjRUI5ODIyO1xyXG4kY29sb3ItZXh0cmEtbGlnaHQtb3JhbmdlOiAjRkNBRjE3O1xyXG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XHJcbiRib3JkZXItY29sb3I6ICNlZWVjZWM7XHJcbiRub3RpZmljYXRpb24tYmc6ICNjZWUzZjA7XHJcbiRjb2xvci1saWdodC1ibGFjazogIzRBNEE0QTtcclxuJGNvbG9yLWJsYWNrOiAjMDAwMDAwO1xyXG4kY29sb3IteWVsbG93OiAjZjllOTA3O1xyXG4kYm94LXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwuMik7XHJcbiRibGFjay1vdmVybGF5OiByZ2JhKDAsMCwwLDAuNyk7XHJcbiR3aGl0ZS1vdmVybGF5OiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XHJcbiRwbGFjZWhvbGRlci1jb2xvcjogI2FjYWNhYztcclxuJGNvbG9yLWJhY2tncm91bmQ6ICNlMWZiZmE7XHJcbiRjb2xvci1pbmZvOiAjRjdCNTAwO1xyXG4kZm9udC1yb2JvdG86ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1saWdodDogMzAwO1xyXG4kZm9udC1yZWd1bGFyOiA0MDA7XHJcbiRmb250LWJvbGQ6IDcwMDtcclxuJGZvbnQtaDE6IDM0cHg7XHJcbiRmb250LWgyOiAzMHB4O1xyXG4kZm9udC1oMzogMjRweDtcclxuJGZvbnQtaDQ6IDE4cHg7XHJcbiRmb250LWg1OiAxNnB4O1xyXG4kZm9udC1oNjogMTRweDtcclxuXHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/digitalRiceipt/digital-riceipt/digital-riceipt.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/digitalRiceipt/digital-riceipt/digital-riceipt.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: DigitalRiceiptComponent */

  /***/
  function srcAppDigitalRiceiptDigitalRiceiptDigitalRiceiptComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DigitalRiceiptComponent", function () {
      return DigitalRiceiptComponent;
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


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var froala_editor_css_third_party_embedly_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! froala-editor/css/third_party/embedly.min.css */
    "./node_modules/froala-editor/css/third_party/embedly.min.css");
    /* harmony import */


    var froala_editor_js_third_party_embedly_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! froala-editor/js/third_party/embedly.min.js */
    "./node_modules/froala-editor/js/third_party/embedly.min.js");
    /* harmony import */


    var froala_editor_js_third_party_embedly_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(froala_editor_js_third_party_embedly_min_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular7-csv/dist/Angular-csv */
    "./node_modules/angular7-csv/dist/Angular-csv.js");
    /* harmony import */


    var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js"); // import { UtilityService } from '@src/app/service/utility.service';


    var DigitalRiceiptComponent = /*#__PURE__*/function () {
      function DigitalRiceiptComponent(httpClient, datepipe, dataService) {
        _classCallCheck(this, DigitalRiceiptComponent);

        this.httpClient = httpClient;
        this.datepipe = datepipe;
        this.dataService = dataService;
        this.currentDate = new Date();
        this.year = this.currentDate.getFullYear();
        this.month = String(this.currentDate.getMonth() + 1).padStart(2, '0');
        this.day = String(this.currentDate.getDate()).padStart(2, '0');
        this.todaysDate = this.year + '-' + this.month + '-' + this.day;
        this.storeSliceSummary = [];
        this.filterdata = [];
        this.userData = [];
        this.AlldataForFilter = [];
        this.AllActiveCommunicationSummary = [];
        this.failedMsgSummary = [];
        this.storeData = [];
        this.StoreCode = "";
        this.MobileNumber = "";
        this.InvoiceNumber = "";
        this.TenantCode = "";
        this.seachDataReponse = "";
        this.requiredfieldErr = false;
        this.tablevalue = false;
        this.openSearchModel = false;
        this.openDistStore = false;
        this.openSearchTable = false;
        this.closeModel = false;
        this.StoreCodeErr = false;
        this.InvoiceNumberErr = false;
        this.IsTenentFieldReq = false;
        this.TenentFielderr = false;
        this.seachInoviceData = [];
        this.SearchInoviceDatForFilter = [];
        this.openSearch = false;
        this.loadingData = true;
        this.loadingDataSummary = false;
        this.tenentCode = "";
        this.datefrompicker = "";
        this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy');
        this.tenentList = [];
        this.resend = [];
        this.totalIsClick = [];
        this.ResendData = [];
        this.resendFeedbackInd = [];
        this.isopentotalbill = false;
        this.userDetails = [];
        this.errortext = "";
        this.invoicesummary = [];
        this.storeCount = [];
        this.storeSummaryDownload = [];
        this.invoicesummaryMessage = "";
        this.dataNotFoundMsg = false;
        this.isopenStoreBill = false;
        this.storeSummary = [];
        this.downloadCsvData = [];
        this.changeDate = "";
        this.dataDismis = "";
        this.toolTipFailValue = [];
        this.totalBillsStoreSummary = [];
        this.isOpenTotalStoreBill = false; // summaryTable=[];

        this.totalBillReceived = false;
        this.failedBill = false;
        this.successBill = false;
        this.isSMS = false;
        this.isWhatsApp = false;
        this.isSendEmail = false;
        this.isPrint = false;
        this.isOpenPercent = false;
        this.isFailed = true;
        this.total = false;
        this.isTooltipOpen = false;
        this.dtOptions = {};
        this.csvOptions = {
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
        this.csvOptionsSearchInvoice = {
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalseparator: '.',
          showLabels: true,
          // showTitle: true,
          // title: 'Invoice Summary:',
          useBom: true,
          noDownload: false,
          headers: ["Program Code", "Bill No", "Bill Date", "Store Code", "Sms Generated", "Email Generated", "WhatsApp Generated", "Feedback Generated", "Feedback URL", "Short URL", "Customer Name", "Mobile No", "Email ID", "Read Count", "Status", "PacketReceiveDate", "SendSMSTime", "IsSendCommunicationApplicable", "EmailRequestCountThruReceipt"]
        };
        this.csvOptionsSearchInvoiceFailed = {
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalseparator: '.',
          showLabels: true,
          useBom: true,
          noDownload: false,
          headers: ["Program Code", "Bill No", "Bill Date", "Store Code", "Customer Name", "Mobile No", "Email ID", "Error Message", "Description"]
        };
        this.csvOptionsStoreBill = {
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalseparator: '.',
          showLabels: true,
          // showTitle: true,
          // title: 'Invoice Summary:',
          useBom: true,
          noDownload: false,
          headers: ["Program Code", "Store Code", "Store Name", "Register No", "Total Bill", "Sucess Bill", "Fail Bill", "Print Bill", "SMS Count"]
        };
        this.csvOptionsTotalStoreBill = {
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
      }

      _createClass(DigitalRiceiptComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          $(document).ready(function () {
            $('.js-btn-tooltip').tooltip();
            $('.btn-tooltip').tooltip();
          });
          this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            lengthMenu: [10, 25, 50],
            processing: true
          };
          this.getTenentInfo(); // console.log("today date", this.todaysDate)
          //  document.getElementById('searhDate').values=this.todaysDate;

          var details = JSON.parse(localStorage.getItem('userInfo'));
          this.userDetails = details[0];
          this.userId = this.userDetails.userID;
          console.log("this.userId", this.userDetails.userName);
          this.dataService.GetAllActiveCommunicationSummary(this.currentDate.toISOString(), this.userId).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR); // console.log("resSTR", this.currentDate.toISOString());

            if (resJSON.messageCode == '200') {
              _this.loadingData = false;
              _this.userData = resJSON.data;
              _this.AlldataForFilter = resJSON.data;
            } else {}
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {}
      }, {
        key: "refresh",
        value: function refresh() {
          var _this2 = this;

          // if(this.changeDate != null){
          //   this.refreshDate=this.changeDate;
          // }
          // else{
          //   this.refreshDate=this.currentDate.toISOString();
          // }
          // console.log("today date, change date ", this.refreshDate)
          this.loadingData = true;
          this.dataService.GetAllActiveCommunicationSummary(this.changeDate == "" ? this.currentDate.toISOString() : this.changeDate, this.userId).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);

            if (resJSON.messageCode == '200') {
              _this2.loadingData = false;
              _this2.userData = resJSON.data;
              _this2.AlldataForFilter = resJSON.data;
              console.log(" this.userData new refresh", _this2.userData);
            } else {}
          });
        }
      }, {
        key: "downloadCSV",
        value: function downloadCSV() {
          new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__["AngularCsv"](this.userData, "digital recipt summary", this.csvOptions);
        }
      }, {
        key: "downloadSeachInoviceDataCSV",
        value: function downloadSeachInoviceDataCSV() {
          new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__["AngularCsv"](this.seachInoviceData, "Search invoice summary", this.csvOptionsSearchInvoice);
        }
      }, {
        key: "downloadBillSummary",
        value: function downloadBillSummary() {
          if (this.isFailed) {
            new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__["AngularCsv"](this.downloadCsvData, "invoice summary", this.csvOptionsSearchInvoice);
          } else {
            new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__["AngularCsv"](this.downloadCsvData, "Invoice Summary Failded", this.csvOptionsSearchInvoiceFailed);
          }
        }
      }, {
        key: "downloadStoreSummary",
        value: function downloadStoreSummary() {
          new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__["AngularCsv"](this.storeSummaryDownload, "Store summary", this.csvOptionsStoreBill);
        }
      }, {
        key: "downloadTotalStoreBillSummary",
        value: function downloadTotalStoreBillSummary() {
          new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_6__["AngularCsv"](this.totalBillsStoreSummary, "Total Store summary", this.csvOptionsTotalStoreBill);
        }
      }, {
        key: "Filters",
        value: function Filters(event) {
          var _this3 = this;

          this.isopentotalbill = false;
          console.log("event.target.value", event.target.value);
          var details = JSON.parse(localStorage.getItem('userInfo'));
          this.userDetails = details[0];
          this.userId = this.userDetails.userID;
          this.changeDate = event.target.value;
          console.log(" this.changeDate", this.changeDate);
          this.userData = this.AlldataForFilter.filter(function (e) {
            return _this3.datepipe.transform(e.requetDate, 'yyyy-MM-dd') <= event.target.value;
          });
          console.log(" this.filterdata", this.userData);

          if (this.changeDate != null) {
            this.loadingData = true;
            this.dataService.GetAllActiveCommunicationSummary(this.changeDate, this.userId).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJSON = JSON.parse(resSTR);
              console.log("resSTR", _this3.currentDate.toISOString());

              if (resJSON.messageCode == '200') {
                _this3.loadingData = false; // console.log("dataSource",resJSON.data)

                _this3.userData = resJSON.data;
                _this3.AlldataForFilter = resJSON.data;
                console.log(" this.userData new", _this3.userData);
              } else {
                _this3.loadingData = false;
              }
            });
          } // this.dataService.GetAllActiveCommunicationSummary(event.target.value).subscribe((res: Response) => {
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
      }, {
        key: "MobileNumberHandler",
        value: function MobileNumberHandler(e) {
          this.MobileNumber = e.target.value;
          this.requiredfieldErr = false;
          console.log("d", e.target.value);
        }
      }, {
        key: "tenentCodeHandler",
        value: function tenentCodeHandler(e) {
          this.tenentCode = e.target.value;
          this.TenentFielderr = false;
          console.log("trrr", e.target.value);
        }
      }, {
        key: "InvoiceNumberHandler",
        value: function InvoiceNumberHandler(e) {
          this.InvoiceNumber = e.target.value;
          this.requiredfieldErr = false;
          console.log("d", e.target.value);
        }
      }, {
        key: "StoreCodeHandler",
        value: function StoreCodeHandler(e) {
          this.StoreCode = e.target.value;
          this.requiredfieldErr = false;
          console.log("d", e.target.value);
        }
      }, {
        key: "backbutton",
        value: function backbutton() {
          this.openSearchTable = false;
          this.openSearch = false;
          this.StoreCode = "";
          this.MobileNumber = "";
          this.InvoiceNumber = "";
          this.seachInoviceData = [];
          this.SearchInoviceDatForFilter = [];
          this.datefrompicker = "";
          this.requiredfieldErr = false;
          this.TenentFielderr = false;
        } // closePopup(){
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

      }, {
        key: "openSearchingModel",
        value: function openSearchingModel() {
          this.TenantCode = "";
          this.openSearch = true;
          this.IsTenentFieldReq = true;
        }
      }, {
        key: "SearchModal",
        value: function SearchModal() {
          var _this4 = this;

          console.log("SearchModal");
          console.log("this.datefrompicker :", this.datefrompicker);

          if (this.MobileNumber == "" && this.InvoiceNumber == "" && this.StoreCode == "") {
            this.requiredfieldErr = true;
            console.log(" this.requiredfieldErr err", this.requiredfieldErr);
          }

          if (this.tenentCode == "") {
            this.TenentFielderr = true;
          }

          if ((this.MobileNumber != "" || this.InvoiceNumber != "" || this.StoreCode != "") && this.tenentCode != "") {
            if (this.datefrompicker == "") {
              this.datefrompicker = new Date().toISOString();
            }

            this.closeModel = true;
            this.dataService.GetSearchInovice(this.tenentCode, this.InvoiceNumber, this.MobileNumber, this.StoreCode, this.datefrompicker).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJSON = JSON.parse(resSTR);
              console.log("resSTR", resSTR, "resJSON", resJSON);

              if (resJSON.messageCode == '200') {
                _this4.openSearchTable = true;
                console.log("dataSource table2", resJSON.data);
                _this4.tenentCode = "";
                _this4.InvoiceNumber = "";
                _this4.MobileNumber = "";
                _this4.StoreCode = "";
                _this4.tablevalue = true; // console.log("dataSource",resJSON.data)

                _this4.seachInoviceData = resJSON.data;
                _this4.SearchInoviceDatForFilter = resJSON.data;

                if (_this4.seachInoviceData.length == 0) {
                  _this4.dataNotFoundMsg = true;
                }

                if (_this4.seachInoviceData.length != 0) {
                  _this4.dataNotFoundMsg = false;
                }

                console.log(" this.userData1", _this4.seachInoviceData);
              } else {}
            });
          }
        }
      }, {
        key: "openSearchModal",
        value: function openSearchModal(searchData) {
          this.openSearchModel = true;
          this.openDistStore = false;
          console.log("d====", searchData.tenantCode, searchData.tenantid);
          this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy');
          this.TenantCode = searchData.tenantCode;
          this.seachInoviceData = [];
          this.SearchInoviceDatForFilter = [];
          this.openSearch = true;
          this.IsTenentFieldReq = false;
          this.searchTenantId = searchData.tenantid; // $('#showSearchModal').on('hidden.bs.modal', function (e) {
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
      }, {
        key: "textareaValidation",
        value: function textareaValidation() {
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
      }, {
        key: "searchingData",
        value: function searchingData() {
          var _this5 = this;

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
            this.dataService.GetSearchInovice(this.TenantCode, this.InvoiceNumber, this.MobileNumber, this.StoreCode, this.datefrompicker).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJSON = JSON.parse(resSTR);

              if (resJSON.messageCode == '200') {
                _this5.tenentCode = "";
                _this5.InvoiceNumber = "";
                _this5.MobileNumber = "";
                _this5.StoreCode = "";
                _this5.openSearchTable = true;
                _this5.loadingData = false;
                _this5.dataNotFoundMsg = false;
                _this5.tablevalue = true;
                _this5.seachInoviceData = resJSON.data;
                _this5.SearchInoviceDatForFilter = resJSON.data; // let result = this.seachInoviceData.sort(
                //   function (a, b) {
                //     if (new Date(a.billDate) < new Date(b.billDate)) { return -1; }
                //     else if (new Date(a.billDate) > new Date(b.billDate)) { return 1; }
                //     return 0;
                //   });
                // this.seachInoviceData = result;
              } else {
                _this5.tenentCode = "";
                _this5.InvoiceNumber = "";
                _this5.MobileNumber = "";
                _this5.StoreCode = "";
                _this5.loadingData = false;
                _this5.openSearchTable = true;
                if (_this5.seachInoviceData.length == 0) _this5.dataNotFoundMsg = true;
              }
            });
          }
        }
      }, {
        key: "FilterInoviceData",
        value: function FilterInoviceData(e) {
          var _this6 = this;

          var dateFromDaePicker = e.target.value; //console.log("e.target.value",e.target.value,"   ",this.convert(dateFromDaePicker))

          this.datefrompicker = new Date(dateFromDaePicker).toISOString();
          this.SearchInoviceDatForFilter.filter(function (e) {
            return console.warn("d", _this6.datepipe.transform(e.billDate, 'yyyy-MM-dd')) <= dateFromDaePicker;
          });
          this.seachInoviceData = this.SearchInoviceDatForFilter.filter(function (e) {
            return _this6.datepipe.transform(e.billDate, 'yyyy-MM-dd') <= dateFromDaePicker;
          });
        }
      }, {
        key: "getTenentInfo",
        value: function getTenentInfo() {
          var _this7 = this;

          var details = JSON.parse(localStorage.getItem('userInfo'));
          this.userDetails = details[0];
          this.userId = Number(this.userDetails.userID);
          this.dataService.GetTenentCods(this.userId).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);

            if (resJSON.messageCode == '200') {
              _this7.tenentList = resJSON.data;
            } else {}
          });
        }
      }, {
        key: "getInvoiceBySummaryEmail",
        value: function getInvoiceBySummaryEmail(totalbill) {
          var _this8 = this;

          this.total = false;
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
          this.isOpenPercent = false;
          this.isopentotalbill = true;

          if (this.changeDate == "") {
            this.datefrompicker = new Date().toISOString();
          } else {
            this.datefrompicker = this.changeDate;
          }

          this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy');
          this.TenantCode = totalbill.tenantCode;
          this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint, this.isOpenPercent).subscribe(function (res) {
            _this8.loadingDataSummary = false;
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);

            if (resJSON.messageCode == '200') {
              _this8.invoicesummary = resJSON.data;

              var newData = _this8.invoicesummary.map(function (ele) {
                delete ele.baseURL;
                delete ele.isBitlyGenrated;
                delete ele.errorMessage;
                delete ele.errorDescription;
                delete ele.errorCode;
                delete ele.isError;
                return ele;
              });

              _this8.downloadCsvData = newData;
              _this8.invoicesummaryMessage = resJSON.message;
              _this8.SearchInoviceDatForFilter = resJSON.data;
            } else {
              _this8.loadingDataSummary = false;
            }
          });
        }
      }, {
        key: "getInvoiceBySummaryWhatsapp",
        value: function getInvoiceBySummaryWhatsapp(totalbill) {
          var _this9 = this;

          this.total = false;
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
          this.isOpenPercent = false;
          this.isopentotalbill = true;

          if (this.changeDate == "") {
            this.datefrompicker = new Date().toISOString();
          } else {
            this.datefrompicker = this.changeDate;
          }

          this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy');
          this.TenantCode = totalbill.tenantCode;
          this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint, this.isOpenPercent).subscribe(function (res) {
            _this9.loadingDataSummary = false;
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);

            if (resJSON.messageCode == '200') {
              _this9.invoicesummary = resJSON.data;

              var newData = _this9.invoicesummary.map(function (ele) {
                delete ele.baseURL;
                delete ele.isBitlyGenrated;
                delete ele.errorMessage;
                delete ele.errorDescription;
                delete ele.errorCode;
                delete ele.isError;
                return ele;
              });

              _this9.downloadCsvData = newData;
              _this9.invoicesummaryMessage = resJSON.message;
              _this9.SearchInoviceDatForFilter = resJSON.data;
            } else {
              _this9.loadingDataSummary = false;
            }
          });
        }
      }, {
        key: "getInvoiceBySummarySms",
        value: function getInvoiceBySummarySms(totalbill) {
          var _this10 = this;

          this.total = false;
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
          this.isOpenPercent = false;
          this.isopentotalbill = true;

          if (this.changeDate == "") {
            this.datefrompicker = new Date().toISOString();
          } else {
            this.datefrompicker = this.changeDate;
          }

          this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy');
          this.TenantCode = totalbill.tenantCode;
          this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint, this.isOpenPercent).subscribe(function (res) {
            _this10.loadingDataSummary = false;
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);

            if (resJSON.messageCode == '200') {
              _this10.invoicesummary = resJSON.data;

              var newData = _this10.invoicesummary.map(function (ele) {
                delete ele.baseURL;
                delete ele.isBitlyGenrated;
                delete ele.errorMessage;
                delete ele.errorDescription;
                delete ele.errorCode;
                delete ele.isError;
                return ele;
              });

              _this10.downloadCsvData = newData;
              _this10.invoicesummaryMessage = resJSON.message;
              _this10.SearchInoviceDatForFilter = resJSON.data;
            } else {
              _this10.loadingDataSummary = false;
            }
          });
        }
      }, {
        key: "getInvoiceBySummaryFailed",
        value: function getInvoiceBySummaryFailed(totalbill) {
          var _this11 = this;

          this.total = false;
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
          this.isOpenPercent = false;
          this.isopentotalbill = true;
          console.log("totalbill", totalbill);

          if (this.changeDate == "") {
            this.datefrompicker = new Date().toISOString();
          } else {
            this.datefrompicker = this.changeDate;
          }

          this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy');
          this.TenantCode = totalbill.tenantCode;
          this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint, this.isOpenPercent).subscribe(function (res) {
            _this11.loadingDataSummary = false;
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);

            if (resJSON.messageCode == '200') {
              _this11.invoicesummary = resJSON.data;
              _this11.invoicesummaryMessage = resJSON.message;
              _this11.SearchInoviceDatForFilter = resJSON.data;
              _this11.toolTipFailValue = resJSON.toolTipValue;

              var newData = _this11.invoicesummary.map(function (ele) {
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
                return ele;
              });

              _this11.downloadCsvData = newData; // this.downloadCsvData = this.invoicesummary;

              console.log(" this.userData failed download", _this11.invoicesummary);
            } else {
              _this11.loadingDataSummary = false;
            }
          });
        }
      }, {
        key: "getSummaryByFailedMsg",
        value: function getSummaryByFailedMsg(data) {
          var _this12 = this;

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
          } else {
            this.datefrompicker = this.changeDate;
          }

          this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy');
          this.dataService.GetErrorWiseSummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.errorMessage).subscribe(function (res) {
            _this12.loadingDataSummary = false;
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);

            if (resJSON.messageCode == '200') {
              _this12.invoicesummary = resJSON.data;

              var newData = _this12.invoicesummary.map(function (ele) {
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
                return ele;
              });

              _this12.downloadCsvData = newData;
            } else {
              _this12.loadingDataSummary = false;
            }
          });
        }
      }, {
        key: "getInvoiceBySummarySucess",
        value: function getInvoiceBySummarySucess(totalbill) {
          var _this13 = this;

          this.total = false;
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
          this.isOpenPercent = false;
          this.isopentotalbill = true;

          if (this.changeDate == "") {
            this.datefrompicker = new Date().toISOString();
          } else {
            this.datefrompicker = this.changeDate;
          }

          this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy');
          this.TenantCode = totalbill.tenantCode;
          this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint, this.isOpenPercent).subscribe(function (res) {
            _this13.loadingDataSummary = false;
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);

            if (resJSON.messageCode == '200') {
              _this13.invoicesummary = resJSON.data;

              var newData = _this13.invoicesummary.map(function (ele) {
                delete ele.baseURL;
                delete ele.isBitlyGenrated;
                delete ele.errorMessage;
                delete ele.errorDescription;
                delete ele.errorCode;
                delete ele.isError;
                return ele;
              });

              _this13.downloadCsvData = newData;
              _this13.invoicesummaryMessage = resJSON.message;
              _this13.SearchInoviceDatForFilter = resJSON.data;
            } else {
              _this13.loadingDataSummary = false;
            }
          });
        }
      }, {
        key: "getInvoiceBySummaryPercent",
        value: function getInvoiceBySummaryPercent(totalbill) {
          var _this14 = this;

          this.total = false;
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
          this.isOpenPercent = true;
          this.isopentotalbill = true;

          if (this.changeDate == "") {
            this.datefrompicker = new Date().toISOString();
          } else {
            this.datefrompicker = this.changeDate;
          }

          this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy');
          this.TenantCode = totalbill.tenantCode;
          this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint, this.isOpenPercent).subscribe(function (res) {
            _this14.loadingDataSummary = false;
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);

            if (resJSON.messageCode == '200') {
              _this14.invoicesummary = resJSON.data;

              var newData = _this14.invoicesummary.map(function (ele) {
                delete ele.baseURL;
                delete ele.isBitlyGenrated;
                delete ele.errorMessage;
                delete ele.errorDescription;
                delete ele.errorCode;
                delete ele.isError;
                return ele;
              });

              _this14.downloadCsvData = newData;
              _this14.invoicesummaryMessage = resJSON.message;
              _this14.SearchInoviceDatForFilter = resJSON.data;
            } else {
              _this14.loadingDataSummary = false;
            }
          });
        }
      }, {
        key: "getInvoiceBySummaryPrint",
        value: function getInvoiceBySummaryPrint(totalbill) {
          var _this15 = this;

          this.total = false;
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
          this.isOpenPercent = false;
          this.isopentotalbill = true;

          if (this.changeDate == "") {
            this.datefrompicker = new Date().toISOString();
          } else {
            this.datefrompicker = this.changeDate;
          }

          this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy');
          this.TenantCode = totalbill.tenantCode;
          this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint, this.isOpenPercent).subscribe(function (res) {
            _this15.loadingDataSummary = false;
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);

            if (resJSON.messageCode == '200') {
              _this15.invoicesummary = resJSON.data;

              var newData = _this15.invoicesummary.map(function (ele) {
                delete ele.baseURL;
                delete ele.isBitlyGenrated;
                delete ele.errorMessage;
                delete ele.errorDescription;
                delete ele.errorCode;
                delete ele.isError;
                return ele;
              });

              _this15.downloadCsvData = newData;
              _this15.invoicesummaryMessage = resJSON.message;
              _this15.SearchInoviceDatForFilter = resJSON.data;
            } else {
              _this15.loadingDataSummary = false;
            }
          });
        }
      }, {
        key: "getInvoiceBySummary",
        value: function getInvoiceBySummary(totalbill, index) {
          var _this16 = this;

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
          this.isOpenPercent = false;

          if (this.changeDate == "") {
            this.datefrompicker = new Date().toISOString();
          } else {
            this.datefrompicker = this.changeDate;
          }

          this.formatdate = this.datepipe.transform(this.currentDate, 'dd-MM-yyyy');
          this.TenantCode = totalbill.tenantCode;
          this.dataService.GetInvoiceBySummaryStatus(this.TenantCode, this.datefrompicker, this.totalBillReceived, this.failedBill, this.successBill, this.isSMS, this.isWhatsApp, this.isSendEmail, this.isPrint, this.isOpenPercent).subscribe(function (res) {
            _this16.loadingDataSummary = false;
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR); // if (resJSON.messageCode == '200') {

            _this16.total = true; // console.log("total",resJSON.data)

            _this16.invoicesummary = resJSON.data; // console.log(" this.invoicesummary new--", this.invoicesummary)
            //  this.invoiceSummaryData(resJSON.data);

            _this16.uniqueCode = resJSON.messageCode;
            _this16.totalBill = resJSON.data.length;

            var newData = _this16.invoicesummary.map(function (ele) {
              delete ele.baseURL;
              delete ele.isBitlyGenrated;
              delete ele.errorMessage;
              delete ele.errorDescription;
              delete ele.errorCode;
              delete ele.isError;
              return ele;
            });

            _this16.downloadCsvData = newData;
            _this16.invoicesummaryMessage = resJSON.message;
            _this16.SearchInoviceDatForFilter = resJSON.data; // } else {
            //   this.loadingDataSummary = false;
            // }
          });
        }
      }, {
        key: "invoiceSummaryData",
        value: function invoiceSummaryData(data) {
          this.storeSliceSummary = data;

          for (var i = 0; i <= this.storeSliceSummary.length / 10000; i++) {
            this.invoicesummary[i] = this.storeSliceSummary.slice(i * 10000, (i + 1) * 10000);
            console.log("this.invoicesummary[i]", this.invoicesummary[i], "==", i * 10000, "==", (i + 1) * 10000);
          }
        }
      }, {
        key: "getStoreDetail",
        value: function getStoreDetail(totalbill) {
          var _this17 = this;

          this.isopenStoreBill = false;
          this.isopenStoreBill = true;
          this.isopentotalbill = false;
          this.loadingDataSummary = true;
          this.storeTanentCode = totalbill.tenantCode;
          this.tanentId = totalbill.tenantID;
          this.billDate = totalbill.requetDate;
          this.dataService.GetStoreCountSummary(this.userId, totalbill.requetDate, totalbill.tenantCode, totalbill.tenantid).subscribe(function (res) {
            _this17.loadingDataSummary = false;
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);

            if (resJSON.messageCode == '200') {
              _this17.storeSummary = resJSON.data;

              var storeSummaryDownload = _this17.storeSummary.map(function (ele) {
                delete ele.storeCount;
                return ele;
              });

              _this17.storeSummaryDownload = storeSummaryDownload;
            } else {
              _this17.loadingDataSummary = false;
            }
          });
        }
      }, {
        key: "getTotalBillSummary",
        value: function getTotalBillSummary(totalbill) {
          var _this18 = this;

          this.isOpenTotalStoreBill = true;
          this.loadingDataSummary = true;
          this.dataService.GetStoreWiseDetailSummary(this.tanentId, totalbill.progCode, this.billDate, this.userId, totalbill.storeCode, totalbill.registerNo).subscribe(function (res) {
            _this18.loadingDataSummary = false;
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);

            if (resJSON.messageCode == '200') {
              _this18.totalBillsStoreSummary = resJSON.data;
            } else {
              _this18.loadingDataSummary = false;
            }
          });
        }
      }, {
        key: "backButtonOpenBill",
        value: function backButtonOpenBill() {
          this.isopentotalbill = false;
        }
      }, {
        key: "billDatahandler",
        value: function billDatahandler(event) {}
      }, {
        key: "backButtonstoreBill",
        value: function backButtonstoreBill() {
          this.isopenStoreBill = false;
        }
      }, {
        key: "backButtonTotlStorBill",
        value: function backButtonTotlStorBill() {
          this.isOpenTotalStoreBill = false;
        }
      }, {
        key: "ResendFeedback",
        value: function ResendFeedback(inoviceDatas, arrayInd) {
          this.resendFeedbackInd.push(arrayInd);
          this.dataService.ResendFeedbackData(inoviceDatas).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);
          });
        }
      }, {
        key: "Resend",
        value: function Resend(inoviceDatas, arrindex) {
          //this.ResendData=inoviceDatas
          this.resend.push(arrindex); // this.loadingData=true;

          this.dataService.ResendData(inoviceDatas, this.searchTenantId, this.userDetails.userName).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);
          });
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
      }]);

      return DigitalRiceiptComponent;
    }();

    DigitalRiceiptComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    DigitalRiceiptComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-digital-riceipt',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./digital-riceipt.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/digitalRiceipt/digital-riceipt/digital-riceipt.component.html"))["default"],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./digital-riceipt.component.scss */
      "./src/app/digitalRiceipt/digital-riceipt/digital-riceipt.component.scss"))["default"]]
    })], DigitalRiceiptComponent);
    /***/
  },

  /***/
  "./src/app/digitalRiceipt/digitalRiceipt-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/digitalRiceipt/digitalRiceipt-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: DigitalRiceiptRoutingModule */

  /***/
  function srcAppDigitalRiceiptDigitalRiceiptRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DigitalRiceiptRoutingModule", function () {
      return DigitalRiceiptRoutingModule;
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


    var _digital_riceipt_digital_riceipt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./digital-riceipt/digital-riceipt.component */
    "./src/app/digitalRiceipt/digital-riceipt/digital-riceipt.component.ts");

    var routes = [{
      path: 'digital',
      component: _digital_riceipt_digital_riceipt_component__WEBPACK_IMPORTED_MODULE_3__["DigitalRiceiptComponent"]
    }];

    var DigitalRiceiptRoutingModule = function DigitalRiceiptRoutingModule() {
      _classCallCheck(this, DigitalRiceiptRoutingModule);
    };

    DigitalRiceiptRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DigitalRiceiptRoutingModule);
    /***/
  },

  /***/
  "./src/app/digitalRiceipt/digitalRiceipt.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/digitalRiceipt/digitalRiceipt.module.ts ***!
    \*********************************************************/

  /*! exports provided: DigitalRiceiptModule */

  /***/
  function srcAppDigitalRiceiptDigitalRiceiptModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DigitalRiceiptModule", function () {
      return DigitalRiceiptModule;
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


    var _digital_riceipt_digital_riceipt_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./digital-riceipt/digital-riceipt.component */
    "./src/app/digitalRiceipt/digital-riceipt/digital-riceipt.component.ts");
    /* harmony import */


    var _digitalRiceipt_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./digitalRiceipt-routing.module */
    "./src/app/digitalRiceipt/digitalRiceipt-routing.module.ts");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");

    var DigitalRiceiptModule = function DigitalRiceiptModule() {
      _classCallCheck(this, DigitalRiceiptModule);
    };

    DigitalRiceiptModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_digital_riceipt_digital_riceipt_component__WEBPACK_IMPORTED_MODULE_3__["DigitalRiceiptComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _digitalRiceipt_routing_module__WEBPACK_IMPORTED_MODULE_4__["DigitalRiceiptRoutingModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"]],
      exports: [_digital_riceipt_digital_riceipt_component__WEBPACK_IMPORTED_MODULE_3__["DigitalRiceiptComponent"]],
      entryComponents: []
    })], DigitalRiceiptModule);
    /***/
  }
}]);
//# sourceMappingURL=digitalRiceipt-digitalRiceipt-module-es5.js.map