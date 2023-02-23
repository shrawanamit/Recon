function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ReconSummary-recon-summary-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ReconSummary/recon-summary/recon-summary.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ReconSummary/recon-summary/recon-summary.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppReconSummaryReconSummaryReconSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- card-panel styles -->\n<section class=\"pannel-section\">\n    <div class=\"reconLoadingData\" *ngIf=\"loadingData\">\n        <button class=\"btn btn-dark\">\n            <span class=\"text-light spinner-border spinner-border-sm\"></span>\n            Loading! Please wait ...\n        </button>\n    </div>\n    <div class=\"container\">\n        <div class=\"page_content_dash\" *ngIf=\"!storeWiseSummary\">\n            <div class=\"filter_input_wrap\" *ngIf=\"!isClickedSearch\">\n                <form #searchFilter=\"ngForm\" name=\"form\"\n                    (ngSubmit)=\"searchFilter.form.valid && getSearchData(searchFilter);\" novalidate>\n                    <div class=\"row\">\n                        <div class=\"form-group col-2 multidrop_container\">\n                            <label>Select Program single</label>\n                            <div class=\"selected_text\" (click)=\"isProgramClicked=!isProgramClicked\">\n                                {{selectedProgram}}\n                                <input type=\"hidden\" name=\"programData\" [(ngModel)]=\"selectedProgram\"\n                                    [value]=\"selectedProgram\" required #selectedProg=\"ngModel\">\n                            </div>\n                            <div\n                                *ngIf=\"searchFilter.submitted || selectedProg.invalid && (selectedProg.dirty || selectedProg.touched)\">\n                                <div class=\"alert alert-danger\" *ngIf=\"selectedProg.errors?.required\">\n                                    <i class=\"fa fa-info-circle\"></i>\n                                    Please Select Program.\n                                </div>\n                            </div>\n                            <div class=\"dropdown_multiselect\" *ngIf=\"isProgramClicked\">\n                                <ul>\n                                    <li *ngFor=\"let program of programData\">\n                                        <div class=\"checkbox_wrap\">\n                                            <div class=\"form-group\">\n                                                <input type=\"radio\" id=\"{{program.brandId}}\" name=\"brandName\"\n                                                    (change)=\"getselectedProgramSingle(program)\"\n                                                    [checked]=\"program.isSelect\">\n                                                <label for=\"{{program.brandId}}\">{{program.brandName}}</label>\n                                            </div>\n                                        </div>\n                                    </li>\n                                </ul>\n                                <div class=\"text-center see_all\" (click)=\"seeAllPrograms()\" *ngIf=\"!isSingleBrand\">\n                                    <p>See All Program</p>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- select country -->\n                        <div class=\"form-group col-2 multidrop_container\">\n                            <label>Country</label>\n                            <div class=\"selected_text\" (click)=\"isCountryClicked=!isCountryClicked\">\n                                {{selectedCountry}}\n                                <input type=\"hidden\" name=\"programData\" [(ngModel)]=\"selectedCountry\"\n                                    [value]=\"selectedCountry\" required #selectedProg=\"ngModel\">\n                            </div>\n                            <div\n                                *ngIf=\"searchFilter.submitted || selectedProg.invalid && (selectedProg.dirty || selectedProg.touched)\">\n                                <div class=\"alert alert-danger\" *ngIf=\"selectedProg.errors?.required\">\n                                    <i class=\"fa fa-info-circle\"></i>\n                                    Please Select Country.\n                                </div>\n                            </div>\n                            <div class=\"dropdown_multiselect\" *ngIf=\"isCountryClicked\">\n                                <ul>\n                                    <li *ngFor=\"let program of reconCountryWithModes\">\n                                        <div class=\"checkbox_wrap\">\n                                            <div class=\"form-group\">\n                                                <input type=\"checkbox\" id=\"{{program.countryID}}\" name=\"brandName\"\n                                                    (change)=\"getselectedCountry(program)\"\n                                                    [checked]=\"program.isSelectCountry\">\n                                                <label for=\"{{program.countryID}}\">{{program.countryName}}</label>\n                                            </div>\n                                        </div>\n                                    </li>\n                                </ul>\n\n                            </div>\n                        </div>\n                        <!-- select mode -->\n                        <div class=\"form-group col-2 multidrop_container\">\n                            <label>Mode Type</label>\n                            <div class=\"selected_text\" (click)=\"isBillTypeClick=!isBillTypeClick\">\n                                {{selectedCountryModeType}}\n                                <input type=\"hidden\" name=\"programData\" [(ngModel)]=\"selectedCountryModeType\"\n                                    [value]=\"selectedCountryModeType\" required #selectedProg=\"ngModel\">\n                            </div>\n                            <div\n                                *ngIf=\"searchFilter.submitted || selectedProg.invalid && (selectedProg.dirty || selectedProg.touched)\">\n                                <div class=\"alert alert-danger\" *ngIf=\"selectedProg.errors?.required\">\n                                    <i class=\"fa fa-info-circle\"></i>\n                                    Please Select Bill Type.\n                                </div>\n                            </div>\n                            <div class=\"dropdown_multiselect_mode\" *ngIf=\"isBillTypeClick\">\n                                <ul>\n                                    <li *ngFor=\"let program of selectedCountryMode\">\n                                        <!-- <div *ngFor=\"let program of selectedCountryMode\"> -->\n                                        <div class=\"multiselect_mode_type\"\n                                            *ngFor=\"let countrymode of program.reconModes\">\n                                            <div class=\"checkbox_wrap\">\n                                                <div class=\"form-group\">\n                                                    <input type=\"checkbox\" id=\"{{countrymode.refrenceID}}\"\n                                                        name=\"brandName\"\n                                                        (change)=\"handleCountryModeType(countrymode,program)\"\n                                                        [checked]=\"countrymode.isSelectMode\">\n                                                    <label\n                                                        for=\"{{countrymode.refrenceID}}\">{{countrymode.modeName}}({{program.countryCode}})</label>\n                                                </div>\n                                            </div>\n                                        </div>\n\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-2\">\n                            <label>Filter By</label>\n                            <div class=\"select_wrap\">\n                                <select name=\"SettlementSatus\" [(ngModel)]=\"SettlementSatus\"\n                                    (ngModelChange)=\"changeSettData(SettlementSatus)\" required\n                                    #settlementSatus=\"ngModel\">\n                                    <option [ngValue]=\"1\">Date Range</option>\n                                    <option [ngValue]=\"2\">Month</option>\n                                </select>\n                            </div>\n\n                            <div\n                                *ngIf=\"searchFilter.submitted || settlementSatus.invalid && (settlementSatus.dirty || settlementSatus.touched)\">\n                                <div class=\"alert alert-danger\" *ngIf=\"settlementSatus.errors?.required\">\n                                    <i class=\"fa fa-info-circle\"></i>\n                                    Please Select Settelment Data.\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-2\" *ngIf=\"isMonthSelect\">\n                            <label>Select Month</label>\n                            <input [(ngModel)]=\"requetDate\" autocomplete=\"off\" name=\"requetDate\" bsDatepicker\n                                [bsConfig]=\"{dateInputFormat: 'MM/YYYY'}\" (onShown)=\"onOpenCalendar($event)\" required>\n                            <img class=\"monthImg\" src=\"assets/images/calendar.svg\" (onShown)=\"onOpenCalendar($event)\">\n                        </div>\n                        <div class=\"form-group col-2 date\" *ngIf=\"isDateSelect\">\n                            <label>Date</label>\n                            <ngx-mat-drp (selectedDateRangeChanged)=\"updateRange($event)\" [options]=\"options\"\n                                #dateRangePicker></ngx-mat-drp>\n                            <img class=\"dateImg\" src=\"/assets/images/calendar.svg\">\n                        </div>\n                        <div class=\"form-group col-2 action_btn\">\n                            <button type=\"submit\">\n                                <span *ngIf=\"searchInProgress && isLoading\"\n                                    class=\"text-light spinner-border spinner-border-sm\" role=\"status\"\n                                    aria-hidden=\"true\"></span>\n                                Search</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"card mt-3\" *ngIf=\"storeWiseSummary \">\n            <div class=\"summary_heading_wrap\">\n                <div class=\"summary_heading\">\n                    <span class=\"summary_heading_main\">Program Name</span><br />\n                    <!-- <span class=\"summary_heading_title\">{{selectedProgram}}</span> -->\n                    <p>{{selectedProgram}}</p>\n                </div>\n                <div class=\"summary_heading\">\n                    <span class=\"summary_heading_main\">country</span><br />\n                    <!-- <span class=\"summary_heading_title\">{{selectedCountry}}</span> -->\n                    <p>{{selectedCountry}}</p>\n                </div>\n                <div class=\"summary_heading\">\n                    <span class=\"summary_heading_main\">Mode Type</span><br />\n                    <!-- <span class=\"summary_heading_title\">{{selectedCountryModeType}}</span> -->\n                    <p>{{selectedCountryModeType}}</p>\n                </div>\n                <div class=\"summary_heading\">\n                    <span class=\"summary_heading_main\">Filter By</span><br />\n                    <!-- <span class=\"summary_heading_title\">{{}}</span> -->\n                    <p>{{filterBy}}</p>\n                </div>\n                <div class=\"summary_heading\">\n                    <span class=\"summary_heading_main\">Date</span><br />\n                    <!-- <span class=\"summary_heading_title\">{{Bata}}</span> -->\n                    <p *ngIf=\"isDateSelect\">{{startDate | date}} - {{endDate | date}}</p>\n                    <p *ngIf=\"!isDateSelect\">{{monthNew}} - {{yearNew}}</p>\n                </div>\n                <div class=\"edit_field\">\n                    <small class=\"icon-info-tooltip\" data-tip=\"Edit Search Field\" tabindex=\"2\">\n                        <img class=\"img_refresh\" src=\"/assets/images/pencil.svg\" (click)=\"backButton()\">\n                    </small>\n                </div>\n            </div>\n\n            <div class=\"space\">\n            </div>\n\n            <div class='card-body ' *ngFor=\"let response of responceData;let i = index\">\n                <div class=\"title d-flex justify-content-between\">\n                    <div class=\"table_heading_wrap\">\n                        <div class=\"heading\">\n                            <h3>\n                                <!-- <span class=\"program_name\">Program Name</span><br/> -->\n                                {{responceData[i].tableHeader}}\n                            </h3>\n                        </div>\n                        <!-- <div class=\"edit_field\">\n                            <small class=\"icon-info-tooltip\" data-tip=\"Edit Search Field\" tabindex=\"2\">\n                                <img class=\"img_refresh\" src=\"/assets/images/pencil.svg\" (click)=\"backButton()\">\n                            </small>\n                        </div> -->\n                    </div>\n                    <div class=\"search-inovice\">\n                        <!-- <input id=\"searhDate\" type=\"date\" (change)=\"Filters($event)\" [value]=\"todaysDate\" />\n                        <small class=\"icon-info-tooltip\" data-tip=\"Refresh \" tabindex=\"2\">\n                            <img class=\"img_refresh\" src=\"/assets/images/refresh.svg\" (click)=\"refresh()\">\n                        </small> -->\n                    </div>\n                </div>\n                <div class=\"space\">\n                </div>\n                <div class='dr-table' *ngIf=\"responceData[i].brandErrorSucces.length >0\">\n                    <table>\n                        <tbody>\n                            <tr class=\"table-header\">\n                                <th>Brand</th>\n                                <th>Date</th>\n                                <th>Total</th>\n                                <th>Add</th>\n                                <th>Update</th>\n                                <th>Accural Missing</th>\n                                <th>HardError</th>\n                                <th>SoftError</th>\n                                <th>Matched</th>\n                                <th>Nonloyality</th>\n                                <th>#Remarks</th>\n                            </tr>\n                            <tr *ngFor=\"let datas of responceData[i].brandErrorSucces;let i = index\">\n                                <th>{{datas.brandName}}</th>\n                                <th>{{datas.billDate | date}}</th>\n                                <th>{{datas.totalCount}}</th>\n                                <th>{{datas.missingSuccessCount}}</th>\n                                <!-- <th>{{datas.missingSuccessStatus}}</th> -->\n                                <th>{{datas.missingRedemSuccessCount}}</th>\n                                <!-- <th>{{datas.missingRedemSuccessStatus}}</th> -->\n                                <th>{{datas.accuralMissing}}</th>\n                                <th>{{datas.invalidErrorCount}}</th>\n                                <!-- <th>{{datas.invalidErrorStatus}}</th> -->\n                                <th>{{datas.validErrorCount}}</th>\n                                <!-- <th>{{datas.validErrorStatus}}</th> -->\n                                <!-- <th>{{datas.errorCount}}</th>\n                                <th>{{datas.errorStatus}}</th> -->\n                                <th>{{datas.matchedCount}}</th>\n                                <th>{{datas.nonLoyality}}</th>\n                                <th>{{datas.remarks}}</th>\n                                <!-- <th>{{datas.rollBackSuccess}}</th> -->\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"no_data_found\" *ngIf=\"responceData[i].brandErrorSucces.length == 0\">\n                    Data Not Available!!!\n                </div>\n                <div class=\"space pt-4 pb-2\">\n                </div>\n            </div>\n        </div>\n    </div>\n</section>";
    /***/
  },

  /***/
  "./src/app/ReconSummary/recon-summary-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ReconSummary/recon-summary-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: ReconSummaryRoutingModule */

  /***/
  function srcAppReconSummaryReconSummaryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReconSummaryRoutingModule", function () {
      return ReconSummaryRoutingModule;
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


    var _recon_summary_recon_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./recon-summary/recon-summary.component */
    "./src/app/ReconSummary/recon-summary/recon-summary.component.ts");

    var routes = [{
      path: 'reconSummary',
      component: _recon_summary_recon_summary_component__WEBPACK_IMPORTED_MODULE_3__["ReconSummaryComponent"]
    }];

    var ReconSummaryRoutingModule = function ReconSummaryRoutingModule() {
      _classCallCheck(this, ReconSummaryRoutingModule);
    };

    ReconSummaryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReconSummaryRoutingModule);
    /***/
  },

  /***/
  "./src/app/ReconSummary/recon-summary.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/ReconSummary/recon-summary.module.ts ***!
    \******************************************************/

  /*! exports provided: ReconSummaryModule */

  /***/
  function srcAppReconSummaryReconSummaryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReconSummaryModule", function () {
      return ReconSummaryModule;
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


    var _recon_summary_recon_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./recon-summary/recon-summary.component */
    "./src/app/ReconSummary/recon-summary/recon-summary.component.ts");
    /* harmony import */


    var _recon_summary_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./recon-summary-routing.module */
    "./src/app/ReconSummary/recon-summary-routing.module.ts");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-show-hide-password */
    "./node_modules/ngx-show-hide-password/fesm2015/ngx-show-hide-password.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var ngx_mat_daterange_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-mat-daterange-picker */
    "./node_modules/ngx-mat-daterange-picker/esm2015/ngx-mat-daterange-picker.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ngx-bootstrap/utils */
    "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");

    Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_51__["setTheme"])('bs4'); // or 'bs4'

    var ReconSummaryModule = function ReconSummaryModule() {
      _classCallCheck(this, ReconSummaryModule);
    };

    ReconSummaryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_recon_summary_recon_summary_component__WEBPACK_IMPORTED_MODULE_3__["ReconSummaryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _recon_summary_routing_module__WEBPACK_IMPORTED_MODULE_4__["ReconSummaryRoutingModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_50__["FormsModule"], ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_8__["ShowHidePasswordModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_50__["ReactiveFormsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_49__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_48__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_47__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_46__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_45__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_44__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_43__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_42__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_41__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_40__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_39__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_38__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_37__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_34__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_33__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_32__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_30__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_15__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ScrollingModule"], ngx_mat_daterange_picker__WEBPACK_IMPORTED_MODULE_12__["NgxMatDrpModule"]],
      exports: [_recon_summary_recon_summary_component__WEBPACK_IMPORTED_MODULE_3__["ReconSummaryComponent"]],
      entryComponents: []
    })], ReconSummaryModule);
    /***/
  },

  /***/
  "./src/app/ReconSummary/recon-summary/recon-summary.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/ReconSummary/recon-summary/recon-summary.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppReconSummaryReconSummaryReconSummaryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* clearfix style */\nimg {\n  max-width: 100%;\n  height: auto;\n}\n/*== start of code for tooltips ==*/\n.mat-paginator {\n  display: block;\n  width: 100%;\n}\n.pannel-section .reconLoadingData {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.7);\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n}\n.pannel-section .reconLoadingData button {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 999;\n}\n.pannel-section .container .page_content_dash {\n  background: #ffffff;\n  margin: 20px auto;\n  padding: 10px;\n  border-radius: 5px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group {\n  margin-bottom: 25px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .text-danger {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n}\n@media (max-width: 991px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .text-danger {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .text-danger {\n    font-size: 14px;\n  }\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group label {\n  padding: 0px;\n  margin: 0px;\n  color: #9A9A9A;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  display: block;\n  margin-bottom: 5px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group label.disable {\n  cursor: not-allowed;\n}\n@media (max-width: 576px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group label {\n    font-size: 14px;\n  }\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group select,\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .selected_text {\n  -webkit-appearance: none;\n  -mos-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url('list.svg') right no-repeat;\n  background-position: right 0.7em top 50%, 0 0;\n  color: #4A4A4A;\n  display: inline-block;\n  padding: 5px;\n  outline: none;\n  box-shadow: none;\n  margin: 0 auto;\n  background-color: #f9f9f9;\n  font-size: 16px;\n  font-weight: 300;\n  min-width: 95px;\n  border: 1px solid #eeecec;\n  width: 100%;\n  line-height: 29px;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n@media (max-width: 576px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group select,\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .selected_text {\n    margin-bottom: 10px;\n  }\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input {\n  background: #f9f9f9;\n  outline: 0;\n  box-shadow: none;\n  border: 1px solid #eeecec;\n  padding: 5px;\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 300;\n  border-radius: 3px;\n  line-height: 29px;\n  margin: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-webkit-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-moz-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-ms-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-webkit-inner-spin-button, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .monthImg {\n  position: absolute;\n  right: 26px;\n  top: 37px;\n  z-index: 99;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dateImg {\n  position: absolute;\n  right: 46px;\n  top: 37px;\n  z-index: 99;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .selected_text {\n  height: 41px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 300px;\n  padding-right: 25px;\n  cursor: pointer;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0.5px;\n  -moz-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0.5px;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #ffffff;\n  position: absolute;\n  width: 89%;\n  top: 70px;\n  z-index: 99;\n  height: 300px;\n  overflow-y: auto;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li {\n  padding: 10px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap {\n  margin: auto;\n  position: relative;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap input[type=checkbox] {\n  display: none;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap input[type=checkbox] + label {\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  color: #4A4A4A;\n  font-size: 16px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  line-height: 22px;\n  margin: 0 auto;\n  display: inline-block;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap input[type=checkbox] + label:before {\n  content: \"\";\n  display: block;\n  width: 19px;\n  height: 19px;\n  border: 1px solid #00B894;\n  position: absolute;\n  left: 0;\n  top: 2px;\n  opacity: 0.6;\n  transition: all 0.12s, border-color 0.08s;\n  border-radius: 2px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap input[type=checkbox]:checked + label:before {\n  width: 6px;\n  top: 1px;\n  left: 7.5px;\n  border-radius: 0;\n  opacity: 1;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  transform: rotate(45deg);\n  height: 12px;\n  border-bottom-color: #ffffff;\n  border-right-color: #ffffff;\n  z-index: 99;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap input[type=checkbox]:checked + label:after {\n  content: \"\";\n  display: block;\n  width: 19px;\n  height: 19px;\n  border: 1px solid #00B894;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 1;\n  transition: all 0.12s, border-color 0.08s;\n  background: #00B894;\n  border-radius: 2px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) {\n  position: absolute;\n  opacity: 0;\n  top: 5px;\n  z-index: 99;\n  cursor: pointer;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) + label {\n  position: relative;\n  padding-left: 28px;\n  cursor: pointer;\n  line-height: 20px;\n  display: inline-block;\n  color: #4A4A4A;\n  font-size: 14px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label:before, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) + label:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #4A4A4A;\n  border-radius: 100%;\n  background: #ffffff;\n  opacity: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label:after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background: #00B894;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) + label:after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background: #00B894;\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n  opacity: 0;\n  transform: scale(0);\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label:after {\n  opacity: 1;\n  transform: scale(1);\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap label {\n  width: 100%;\n  padding-left: 0 !important;\n  text-transform: capitalize;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap label:before {\n  left: 93% !important;\n  border: none !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap label:after {\n  left: 90% !important;\n  background: none !important;\n  border: none !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap .form-group {\n  margin-bottom: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap .form-group input[type=radio]:checked + label {\n  color: #00B894;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap .form-group input[type=radio]:checked + label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 3px !important;\n  right: 13px !important;\n  width: 7px !important;\n  height: 14px !important;\n  border: solid #00B894 !important;\n  border-width: 0 2px 2px 0 !important;\n  transform: rotate(45deg) !important;\n  border-radius: 0% !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap .form-group input[type=checkbox]:checked + label {\n  color: #00B894;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap .form-group input[type=checkbox]:checked + label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 3px !important;\n  right: 13px !important;\n  width: 7px !important;\n  height: 14px !important;\n  border: solid #00B894 !important;\n  border-width: 0 2px 2px 0 !important;\n  transform: rotate(45deg) !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li:hover {\n  background-color: rgba(0, 184, 148, 0.06);\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect .see_all {\n  position: absolute;\n  top: 326px;\n  z-index: 99;\n  width: 78%;\n  left: 15px;\n  padding: 10px;\n  background: #ffffff;\n  cursor: pointer;\n  color: #00B894;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect .see_all p {\n  margin: 0 auto;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0.5px;\n  -moz-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0.5px;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #ffffff;\n  position: absolute;\n  width: 89%;\n  top: 70px;\n  z-index: 99;\n  height: 300px;\n  overflow-y: auto;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type {\n  padding: 10px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap {\n  margin: auto;\n  position: relative;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap input[type=checkbox] {\n  display: none;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap input[type=checkbox] + label {\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  color: #4A4A4A;\n  font-size: 16px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  line-height: 22px;\n  margin: 0 auto;\n  display: inline-block;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap input[type=checkbox] + label:before {\n  content: \"\";\n  display: block;\n  width: 19px;\n  height: 19px;\n  border: 1px solid #00B894;\n  position: absolute;\n  left: 0;\n  top: 2px;\n  opacity: 0.6;\n  transition: all 0.12s, border-color 0.08s;\n  border-radius: 2px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap input[type=checkbox]:checked + label:before {\n  width: 6px;\n  top: 1px;\n  left: 7.5px;\n  border-radius: 0;\n  opacity: 1;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  transform: rotate(45deg);\n  height: 12px;\n  border-bottom-color: #ffffff;\n  border-right-color: #ffffff;\n  z-index: 99;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap input[type=checkbox]:checked + label:after {\n  content: \"\";\n  display: block;\n  width: 19px;\n  height: 19px;\n  border: 1px solid #00B894;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 1;\n  transition: all 0.12s, border-color 0.08s;\n  background: #00B894;\n  border-radius: 2px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap [type=radio]:checked, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap [type=radio]:not(:checked) {\n  position: absolute;\n  opacity: 0;\n  top: 5px;\n  z-index: 99;\n  cursor: pointer;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap [type=radio]:checked + label, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap [type=radio]:not(:checked) + label {\n  position: relative;\n  padding-left: 28px;\n  cursor: pointer;\n  line-height: 20px;\n  display: inline-block;\n  color: #4A4A4A;\n  font-size: 14px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap [type=radio]:checked + label:before, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap [type=radio]:not(:checked) + label:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #4A4A4A;\n  border-radius: 100%;\n  background: #ffffff;\n  opacity: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap [type=radio]:checked + label:after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background: #00B894;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap [type=radio]:not(:checked) + label:after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background: #00B894;\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n  opacity: 0;\n  transform: scale(0);\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap [type=radio]:checked + label:after {\n  opacity: 1;\n  transform: scale(1);\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap label {\n  width: 100%;\n  padding-left: 0 !important;\n  text-transform: capitalize;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap label:before {\n  left: 93% !important;\n  border: none !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap label:after {\n  left: 90% !important;\n  background: none !important;\n  border: none !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap .form-group {\n  margin-bottom: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap .form-group input[type=radio]:checked + label {\n  color: #00B894;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap .form-group input[type=radio]:checked + label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 3px !important;\n  right: 13px !important;\n  width: 7px !important;\n  height: 14px !important;\n  border: solid #00B894 !important;\n  border-width: 0 2px 2px 0 !important;\n  transform: rotate(45deg) !important;\n  border-radius: 0% !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap .form-group input[type=checkbox]:checked + label {\n  color: #00B894;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type .checkbox_wrap .form-group input[type=checkbox]:checked + label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 3px !important;\n  right: 13px !important;\n  width: 7px !important;\n  height: 14px !important;\n  border: solid #00B894 !important;\n  border-width: 0 2px 2px 0 !important;\n  transform: rotate(45deg) !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect_mode ul li .multiselect_mode_type:hover {\n  background-color: rgba(0, 184, 148, 0.06);\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn {\n  display: inline-flex;\n  align-items: flex-start;\n  margin: 0;\n  margin-top: 26px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  margin: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button:focus {\n  outline: none;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button:visited {\n  color: #ffffff;\n}\n.pannel-section .container .dqr_table_wrap {\n  position: relative;\n}\n.pannel-section .container .dqr_table_wrap .loading-container {\n  position: absolute;\n  left: 50%;\n  top: 20%;\n  z-index: 99;\n}\n.pannel-section .container .card {\n  border: none;\n}\n.pannel-section .container .card .summary_heading_wrap {\n  width: 100%;\n  vertical-align: middle;\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n}\n.pannel-section .container .card .summary_heading_wrap .summary_heading {\n  font-size: 14px;\n  color: #6a6a6a;\n  text-align: left;\n}\n.pannel-section .container .card .summary_heading_wrap .summary_heading .summary_heading_main {\n  font-weight: 400;\n}\n.pannel-section .container .card .summary_heading_wrap .summary_heading p {\n  font-weight: 500;\n  padding-top: 3px;\n  margin: 0px;\n}\n.pannel-section .container .card .summary_heading_wrap .edit_field {\n  width: 30px;\n  margin-right: 0;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  vertical-align: middle;\n  background: #f4f4f4;\n  border-radius: 2px;\n  cursor: pointer;\n  opacity: 0.6;\n  margin-right: 20px;\n}\n.pannel-section .container .card .title {\n  color: #6a6a6a;\n}\n.pannel-section .container .card .title .table_heading_wrap {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  vertical-align: middle;\n  background-color: lightyellow;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n}\n.pannel-section .container .card .title .table_heading_wrap .heading h3 {\n  font-weight: 500;\n  font-size: 18px;\n  color: #000000;\n}\n.pannel-section .container .card .title .table_heading_wrap .edit_field {\n  width: 30px;\n  margin-right: 0;\n  margin-left: auto;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  vertical-align: middle;\n  background: #f4f4f4;\n  border-radius: 2px;\n  cursor: pointer;\n  opacity: 0.6;\n  margin-right: 20px;\n}\n.pannel-section .container .card .title .table_heading_wrap .edit_field .icon-info-tooltip {\n  cursor: help;\n  position: relative;\n  outline: none;\n}\n.pannel-section .container .card .title .table_heading_wrap .edit_field .icon-info-tooltip:before, .pannel-section .container .card .title .table_heading_wrap .edit_field .icon-info-tooltip:after {\n  left: 50%;\n  opacity: 0;\n  position: absolute;\n  z-index: -100;\n}\n.pannel-section .container .card .title .table_heading_wrap .edit_field .icon-info-tooltip:hover:before, .pannel-section .container .card .title .table_heading_wrap .edit_field .icon-info-tooltip:hover:after, .pannel-section .container .card .title .table_heading_wrap .edit_field .icon-info-tooltip:focus:before, .pannel-section .container .card .title .table_heading_wrap .edit_field .icon-info-tooltip:focus:after {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n  z-index: 100;\n}\n.pannel-section .container .card .title .table_heading_wrap .edit_field .icon-info-tooltip:hover:before, .pannel-section .container .card .title .table_heading_wrap .edit_field .icon-info-tooltip:focus:before {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n}\n.pannel-section .container .card .title .table_heading_wrap .edit_field .icon-info-tooltip:hover:after, .pannel-section .container .card .title .table_heading_wrap .edit_field .icon-info-tooltip:focus:after {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26);\n}\n.pannel-section .container .card .title .table_heading_wrap .edit_field .icon-info-tooltip:before {\n  border-style: solid;\n  border-width: 1em 0.75em 0 0.75em;\n  border-color: #babbbb transparent transparent transparent;\n  bottom: 100%;\n  content: \"\";\n  margin-left: -0.5em;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26), opacity 0.65s 0.5s;\n  transform: scale(0.6) translateY(-90%);\n}\n.pannel-section .container .card .title .table_heading_wrap .edit_field .icon-info-tooltip:after {\n  background: #babbbb;\n  border-radius: 0.25em;\n  bottom: 180%;\n  color: #ffffff;\n  content: attr(data-tip);\n  margin-left: -26px;\n  padding: 7px;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n  transform: scale(0.6) translateY(50%);\n  min-width: 15px;\n  text-align: center;\n}\n@media (max-width: 767px) {\n  .pannel-section .container .card .title .table_heading_wrap .edit_field .icon-info-tooltip:after {\n    font-size: 0.75em;\n    margin-left: -5em;\n    width: 10em;\n  }\n}\n.pannel-section .container .card .title input {\n  background: #f9f9f9;\n  border: 1px solid #f9f9f9;\n  outline: none;\n  color: #959795;\n}\n.pannel-section .container .card .space {\n  width: 100%;\n  height: 15px;\n  background-color: #f3f3f3;\n}\n.pannel-section .container .card .dr-table {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.pannel-section .container .card .dr-table table {\n  width: 100%;\n  text-align: left;\n}\n.pannel-section .container .card .dr-table .table-header th {\n  background-color: #00B894;\n  line-height: 25px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  vertical-align: middle;\n  padding: 10px;\n  border: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.pannel-section .container .card .dr-table tr {\n  background-color: white;\n  line-height: 30px;\n  color: #959795;\n  font-size: 13px;\n  font-weight: 300;\n}\n.pannel-section .container .card .dr-table tr th {\n  min-width: 100px;\n  background-color: #ffffff;\n  padding: 10px;\n  border-bottom: 1px solid #eeecec !important;\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  vertical-align: middle;\n}\n.pannel-section .container .card .dr-table .button-style {\n  background: none;\n  border: none;\n  outline: none;\n  color: #959795;\n  font-size: 18px;\n}\n.pannel-section .container .card .no_data_found {\n  padding: 50px;\n  font-size: 30px;\n  font-weight: bold;\n  line-height: 1.3;\n  color: #959795;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVjb25TdW1tYXJ5L3JlY29uLXN1bW1hcnkvRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxzY3NzXFxtaXhpbnMuc2NzcyIsInNyYy9hcHAvUmVjb25TdW1tYXJ5L3JlY29uLXN1bW1hcnkvcmVjb24tc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvUmVjb25TdW1tYXJ5L3JlY29uLXN1bW1hcnkvRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxhcHBcXFJlY29uU3VtbWFyeVxccmVjb24tc3VtbWFyeVxccmVjb24tc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvUmVjb25TdW1tYXJ5L3JlY29uLXN1bW1hcnkvRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBQTtBQWlCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDZkY7QUR3b0JBLG1DQUFBO0FFem9CQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0FES0o7QUNGSTtFRndERixlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJHMUNjO0VIMkNkLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNsREY7QURtREU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDakRKO0FDakJRO0VBQ0ksbUJDTUU7RURMRixpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBRG1CWjtBQ2hCb0I7RUFFSSxtQkFBQTtBRGlCeEI7QUNoQndCO0VGaU90QixxQkFBQTtFQUNBLGNHbE9rQjtFSG1PbEIsZUFBQTtFQUNBLGdCR3pOYTtFSDBOYixpQkFBQTtFQUNBLGlDRzdOWTtFSDhOWixnQkFBQTtFQUNBLGNBQUE7QUM5TUY7QURQSTtFRW5Cb0I7SUYyT3BCLGtCQUFB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RFRFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxjR3hxQlU7RUh5cUJWLHVCQUFBO0VBRUEsa0JBQUE7RUFFQSxZQUFBO0VBQ0EsZ0VBQUE7RUFDQSxxQ0FBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtBQ1FKO0FENXFCSTtFQXdxQkE7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQ09KO0FBQ0Y7QUM3VmdCO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FEK1ZwQjtBQzVWWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUQ4VmhCO0FDM1ZZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBRDZWaEI7QUMvVWdCO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FEaVZwQjtBQzdVb0I7RUFDSSx5QkN2WlY7RUR3WlUsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0FEK1V4QjtBQzVVZ0I7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRDZVcEI7QUM1VW9CO0VBQ0ksZ0JBQUE7RUFDQSx5QkM3WlY7RUQ4WlUsYUFBQTtFQUVBLDJDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBRDZVeEI7QUMxVWdCO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FENFVwQjtBQ3pVWTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUQyVWhCIiwiZmlsZSI6InNyYy9hcHAvUmVjb25TdW1tYXJ5L3JlY29uLXN1bW1hcnkvcmVjb24tc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNsZWFyZml4IHN0eWxlICovXHJcblxyXG4vLyBDbGVhcmZpeCBtaXhpblxyXG4lY2xlYXJmaXgge1xyXG4gICp6b29tOiAxO1xyXG5cclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4vLyBEZWZpbmUgdGhlIGJyZWFrcG9pbnRzXHJcbkBtaXhpbiBicmVha3BvaW50KCRwb2ludCkge1xyXG4gIEBpZiAkcG9pbnQ9PXNtYWxsLWRldmljZSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldDAge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT10YWJsZXRwcm8ge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1pcGFkIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09bGFwdG9wIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PWxhcHRvcG1heCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1kZXNrdG9wIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vbG9hZGVyXHJcbkBtaXhpbiBsb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgYmFja2dyb3VuZDogJGJsYWNrLW92ZXJsYXk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgfVxyXG59XHJcbi8vIGp1c3RpZnktY29udGVudCBtaXhpblxyXG5cclxuQG1peGluIGp1c3RpZnktY29udGVudCgkanVzdGlmeSkge1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAtbW96LWp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgLW1zLWp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAtbXMtZmxleC1wYWNrOiAkanVzdGlmeTtcclxufVxyXG5cclxuLy8gYWxpZ24taXRlbXMgbWl4aW5cclxuXHJcbkBtaXhpbiBhbGlnbi1pdGVtcygkYWxpZ24taG9yaXpvbnRhbGx5KSB7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogJGFsaWduLWhvcml6b250YWxseTtcclxuICAtbW96LWFsaWduLWl0ZW1zOiAkYWxpZ24taG9yaXpvbnRhbGx5O1xyXG4gIC1tcy1hbGlnbi1pdGVtczogJGFsaWduLWhvcml6b250YWxseTtcclxuICBhbGlnbi1pdGVtczogJGFsaWduLWhvcml6b250YWxseTtcclxufVxyXG5cclxuLy8gVHJhbnNpdGlvbiBtaXhpblxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24pIHtcclxuICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbn1cclxuXHJcbi8vIFRyYW5zZm9ybSBtaXhpblxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtKSB7XHJcbiAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbiAgLW8tdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG4gIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxufVxyXG5cclxuQG1peGluIGZsZXgge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuQG1peGluIGJveC1zaGFkb3coJGFyZ3MpIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgLW1zLWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gIGJveC1zaGFkb3c6ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAtbXMtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG59XHJcblxyXG4vL1BhZGRpbmcgbWl4aW5cclxuQG1peGluIHBhZGRpbmcoJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCkge1xyXG4gIHBhZGRpbmctdG9wOiAkdG9wO1xyXG4gIHBhZGRpbmctcmlnaHQ6ICRyaWdodDtcclxuICBwYWRkaW5nLWJvdHRvbTogJGJvdHRvbTtcclxuICBwYWRkaW5nLWxlZnQ6ICRsZWZ0O1xyXG59XHJcblxyXG4vL01hcmdpbiBtaXhpblxyXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpIHtcclxuICBtYXJnaW4tdG9wOiAkdG9wO1xyXG4gIG1hcmdpbi1yaWdodDogJHJpZ2h0O1xyXG4gIG1hcmdpbi1ib3R0b206ICRib3R0b207XHJcbiAgbWFyZ2luLWxlZnQ6ICRsZWZ0O1xyXG59XHJcblxyXG4vL3Bvc2l0aW9uIG1peGluXHJcbkBtaXhpbiBwb3NpdGlvbigkcG9zaXRpb24sICR0b3A6IG51bGwsICRyaWdodDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJGxlZnQ6IG51bGwpIHtcclxuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xyXG4gIHRvcDogJHRvcDtcclxuICByaWdodDogJHJpZ2h0O1xyXG4gIGJvdHRvbTogJGJvdHRvbTtcclxuICBsZWZ0OiAkbGVmdDtcclxufVxyXG5cclxuQG1peGluIGhlYWRpbmctSDEge1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLUgyIHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gaGVhZGluZy1IMyB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGhlYWRpbmctSDQge1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtcmVndWxhcjtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcGFyYWdyYXBoIHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LXJlZ3VsYXI7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb2xvckJveCB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9keS1iZy1jb2xvcjtcclxuICAvLyBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyMCUpIDBweCAxcHggNHB4IDAuNXB4OyA7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmNob3Ige1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzLFxyXG4gICY6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZGVmYXVsdCBpbnB1dCB0eXBlIGFueVxyXG5AbWl4aW4gaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1saWdodC1ncmV5O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAkcGxhY2Vob2xkZXItY29sb3I7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLy90ZXh0YXJlYVxyXG5AbWl4aW4gdGV4dGFyZWEge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAkcGxhY2Vob2xkZXItY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBkZWZhdWx0IGJ1dHRvblxyXG5AbWl4aW4gYnV0dG9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDlweCAxNXB4IDlweDtcclxuICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24xIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDlweCAxNXB4IDlweDtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxN3B4IDEwcHggLTEwcHggcmdiYSgkdGhlbWUtY29sb3IsIDAuMyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMzAwbXM7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gYm94IGRyX3N1bW1hcnlcclxuQG1peGluIGJveCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggMXB4IDRweCAwLjVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuQG1peGluIG1vbl9uYW1lIHtcclxuICAvLyBwYWRkaW5nOiAwcHggMCAwcHggMTVweDtcclxuXHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5AbWl4aW4gbW9uX25vIHtcclxuICBwYWRkaW5nOiAwcHggMCAwcHggMTBweDtcclxuICAvLyBjb2xvcjogIzRhNGE0YTtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gZGVmYXVsdCBwcm9kdWN0LWJ1dHRvblxyXG5AbWl4aW4gcHJvZHVjdC1idXR0b24ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDVweCAxNHB4IDZweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDJweCB0cmFuc3BhcmVudDtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgLW8tYm94LXNoYWRvdzogMCAycHggMnB4IDJweCB0cmFuc3BhcmVudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHJpZ2h0IHdoaXRlIGFycm93IGluIGJ1dHRvblxyXG4vLyBAbWl4aW4gYnRuX3JpZ2h0X2Fycm93IHtcclxuLy8gICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG5cclxuLy8gICAmOmFmdGVyIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IHVybCgpIG5vLXJlcGVhdDtcclxuLy8gICAgIHdpZHRoOiAyMHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAxN3B4O1xyXG4vLyAgICAgY29udGVudDogXCJcIjtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHJpZ2h0OiA3cHg7XHJcbi8vICAgICB0b3A6IDEwcHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vL2ZvciBoNCB3aXRoIGJvdHRvbSBsaW5lXHJcbkBtaXhpbiB0ZXh0X3VuZGVybGluZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMnB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9mb3Igc2VsZWN0IHRhZ1xyXG5cclxuQG1peGluIHNlbGVjdEJveCB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3MtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvbGlzdC5zdmcpIHJpZ2h0IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAwLjdlbSB0b3AgNTAlLCAwIDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBtaW4td2lkdGg6IDk1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaW5lLWhlaWdodDogMjlweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vbGFiZWxcclxuQG1peGluIGxhYmVsIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgY29sb3I6ICRjb2xvci1kYXJrLWdyZXk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICYuZGlzYWJsZSB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy9pbWFnZSBib3ggc2hhZG93XHJcbkBtaXhpbiBpbWctYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctY29sb3IgMHB4IDFweCA0cHggMC41cHg7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkYm94LXNoYWRvdy1jb2xvciAwcHggMXB4IDRweCAwLjVweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRib3gtc2hhZG93LWNvbG9yIDBweCAxcHggNHB4O1xyXG59XHJcblxyXG4vL2NoZWNrYm94XHJcblxyXG5AbWl4aW4gY2hlY2tib3gge1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDJweDtcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgIHRvcDogMXB4O1xyXG4gICAgICBsZWZ0OiA3LjVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vdG9vbC10aXBcclxuXHJcbi8qPT0gc3RhcnQgb2YgY29kZSBmb3IgdG9vbHRpcHMgPT0qL1xyXG5AbWl4aW4gZGVmYXVsdC10b29sLXRpcCB7XHJcbiAgY3Vyc29yOiBoZWxwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTAwO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgICY6YmVmb3JlLFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcclxuICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNikgMC4ycztcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxZW0gMC43NWVtIDAgMC43NWVtO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmFiYmJiIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMC41ZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KSwgb3BhY2l0eSAwLjY1cyAwLjVzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoLTkwJSk7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNiYWJiYmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgICBib3R0b206IDE4MCU7XHJcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXRpcCk7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogLTguNzVlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjZweDtcclxuICAgIC8vIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNikgdHJhbnNsYXRlWSg1MCUpO1xyXG4gICAgLy8gd2lkdGg6IDE3LjVlbTtcclxuICAgIG1pbi13aWR0aDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xyXG4gICAgICB3aWR0aDogMTBlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vbGlzdCBzdHlsZVxyXG5cclxuQG1peGluIGxpc3RzdHlsZSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiLlwiO1xyXG4gICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBsaW5lLWhlaWdodDogMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiA0MXB4O1xyXG4gIH1cclxufVxyXG5cclxuLy9maWxlIHVwbG9hZCBpbnB1dFxyXG5AbWl4aW4gZmlsZV9pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBidXR0b247XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi8vZm9yIGJsb2NrIG1peGluXHJcbkBtaXhpbiBibG9ja0FsbFRleHQge1xyXG4gIGgxIHtcclxuICAgIEBpbmNsdWRlIGhlYWRpbmctSDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIEBpbmNsdWRlIGhlYWRpbmctSDI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIEBpbmNsdWRlIGhlYWRpbmctSDM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIEBpbmNsdWRlIGhlYWRpbmctSDQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIEBpbmNsdWRlIGFuY2hvcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmVtcHR5IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIEBpbmNsdWRlIGFuY2hvcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJyZWFkY3J1bWIge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vcmFkaW8gYnV0dG9uXHJcblxyXG5AbWl4aW4gcmFkaW8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAmOmNoZWNrZWQsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIC8vIGxlZnQ6IDQ3LjglO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgIGxlZnQ6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1peGluIHJhZGlvMSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgICY6Y2hlY2tlZCxcclxuICAgICY6bm90KDpjaGVja2VkKSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogNDcuOCU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRvcDogNXB4O1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgIGxlZnQ6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLy9kZWZhdWx0IHRhYmxlXHJcbkBtaXhpbiB0YWJsZSB7XHJcbiAgdGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgdGhlYWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICAgICAgdHIge1xyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAuaWNvbi1pbmZvLXRvb2x0aXAge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBkZWZhdWx0LXRvb2wtdGlwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrYm94X3dyYXAge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBjaGVja2JveDtcclxuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGJvZHkge1xyXG4gICAgICB0ciB7XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3VjY2VzcyxcclxuICAgICAgICAgIC5lcnJvcixcclxuICAgICAgICAgIC5tYXBwZWQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Y2Nlc3Mge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR0aGVtZS1jb2xvciwgMC4wNSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmRpc2FibGUge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZXJyb3Ige1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1yZWQsIDAuMDUpO1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXJlZDtcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmRpc2FibGUge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWFwcGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItbGlnaHQtYmxhY2ssIDAuMDUpO1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kaXNhYmxlIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrYm94X3dyYXAge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBjaGVja2JveDtcclxuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGFuY2hvcjtcclxuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGltZy1ib3gtc2hhZG93O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjA1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pY29uLWluZm8tdG9vbHRpcCB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBkZWZhdWx0LXRvb2wtdGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKiBjbGVhcmZpeCBzdHlsZSAqL1xuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qPT0gc3RhcnQgb2YgY29kZSBmb3IgdG9vbHRpcHMgPT0qL1xuLm1hdC1wYWdpbmF0b3Ige1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYW5uZWwtc2VjdGlvbiAucmVjb25Mb2FkaW5nRGF0YSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4ucGFubmVsLXNlY3Rpb24gLnJlY29uTG9hZGluZ0RhdGEgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgei1pbmRleDogOTk5O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLnRleHQtZGFuZ2VyIHtcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAudGV4dC1kYW5nZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAudGV4dC1kYW5nZXIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICM5QTlBOUE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgbGFiZWwuZGlzYWJsZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCBzZWxlY3QsXG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLnNlbGVjdGVkX3RleHQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3MtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvbGlzdC5zdmcpIHJpZ2h0IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMC43ZW0gdG9wIDUwJSwgMCAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1pbi13aWR0aDogOTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWNlYztcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgc2VsZWN0LFxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5zZWxlY3RlZF90ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlY2VjO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgbWFyZ2luOiAwO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWNhY2FjO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLm1vbnRoSW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjZweDtcbiAgdG9wOiAzN3B4O1xuICB6LWluZGV4OiA5OTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZGF0ZUltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDQ2cHg7XG4gIHRvcDogMzdweDtcbiAgei1pbmRleDogOTk7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLnNlbGVjdGVkX3RleHQge1xuICBoZWlnaHQ6IDQxcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggNHB4IDAuNXB4O1xuICAtbW96LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDRweCAwLjVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCA0cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogODklO1xuICB0b3A6IDcwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE5cHg7XG4gIGhlaWdodDogMTlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQjg5NDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDJweDtcbiAgb3BhY2l0eTogMC42O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcbiAgd2lkdGg6IDZweDtcbiAgdG9wOiAxcHg7XG4gIGxlZnQ6IDcuNXB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZmZmZjtcbiAgei1pbmRleDogOTk7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCODk0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XG4gIGJhY2tncm91bmQ6ICMwMEI4OTQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOmNoZWNrZWQsIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOm5vdCg6Y2hlY2tlZCkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogNXB4O1xuICB6LWluZGV4OiA5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsLCAucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIFt0eXBlPXJhZGlvXTpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSwgLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSArIGxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNEE0QTRBO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAwO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogIzAwQjg5NDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogM3B4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIFt0eXBlPXJhZGlvXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDBCODk0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIGxhYmVsOmJlZm9yZSB7XG4gIGxlZnQ6IDkzJSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgbGFiZWw6YWZ0ZXIge1xuICBsZWZ0OiA5MCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCAuZm9ybS1ncm91cCBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xuICBjb2xvcjogIzAwQjg5NDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDEzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAjMDBCODk0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDAgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAlICFpbXBvcnRhbnQ7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIC5mb3JtLWdyb3VwIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGNvbG9yOiAjMDBCODk0O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCAuZm9ybS1ncm91cCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweCAhaW1wb3J0YW50O1xuICByaWdodDogMTNweCAhaW1wb3J0YW50O1xuICB3aWR0aDogN3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkICMwMEI4OTQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMCAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgIWltcG9ydGFudDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE4NCwgMTQ4LCAwLjA2KTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgLnNlZV9hbGwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzI2cHg7XG4gIHotaW5kZXg6IDk5O1xuICB3aWR0aDogNzglO1xuICBsZWZ0OiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMDBCODk0O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCAuc2VlX2FsbCBwIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0X21vZGUgdWwge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCA0cHggMC41cHg7XG4gIC1tb3otYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggNHB4IDAuNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDRweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4OSU7XG4gIHRvcDogNzBweDtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0X21vZGUgdWwgbGkgLm11bHRpc2VsZWN0X21vZGVfdHlwZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0X21vZGUgdWwgbGkgLm11bHRpc2VsZWN0X21vZGVfdHlwZSAuY2hlY2tib3hfd3JhcCB7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdF9tb2RlIHVsIGxpIC5tdWx0aXNlbGVjdF9tb2RlX3R5cGUgLmNoZWNrYm94X3dyYXAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdF9tb2RlIHVsIGxpIC5tdWx0aXNlbGVjdF9tb2RlX3R5cGUgLmNoZWNrYm94X3dyYXAgaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3RfbW9kZSB1bCBsaSAubXVsdGlzZWxlY3RfbW9kZV90eXBlIC5jaGVja2JveF93cmFwIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEI4OTQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAycHg7XG4gIG9wYWNpdHk6IDAuNjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3RfbW9kZSB1bCBsaSAubXVsdGlzZWxlY3RfbW9kZV90eXBlIC5jaGVja2JveF93cmFwIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xuICB3aWR0aDogNnB4O1xuICB0b3A6IDFweDtcbiAgbGVmdDogNy41cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiA5OTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3RfbW9kZSB1bCBsaSAubXVsdGlzZWxlY3RfbW9kZV90eXBlIC5jaGVja2JveF93cmFwIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCODk0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XG4gIGJhY2tncm91bmQ6ICMwMEI4OTQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3RfbW9kZSB1bCBsaSAubXVsdGlzZWxlY3RfbW9kZV90eXBlIC5jaGVja2JveF93cmFwIFt0eXBlPXJhZGlvXTpjaGVja2VkLCAucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0X21vZGUgdWwgbGkgLm11bHRpc2VsZWN0X21vZGVfdHlwZSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiA1cHg7XG4gIHotaW5kZXg6IDk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0X21vZGUgdWwgbGkgLm11bHRpc2VsZWN0X21vZGVfdHlwZSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsLCAucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0X21vZGUgdWwgbGkgLm11bHRpc2VsZWN0X21vZGVfdHlwZSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSArIGxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3RfbW9kZSB1bCBsaSAubXVsdGlzZWxlY3RfbW9kZV90eXBlIC5jaGVja2JveF93cmFwIFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlLCAucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0X21vZGUgdWwgbGkgLm11bHRpc2VsZWN0X21vZGVfdHlwZSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSArIGxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNEE0QTRBO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAwO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdF9tb2RlIHVsIGxpIC5tdWx0aXNlbGVjdF9tb2RlX3R5cGUgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQ6ICMwMEI4OTQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdF9tb2RlIHVsIGxpIC5tdWx0aXNlbGVjdF9tb2RlX3R5cGUgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQ6ICMwMEI4OTQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0X21vZGUgdWwgbGkgLm11bHRpc2VsZWN0X21vZGVfdHlwZSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdF9tb2RlIHVsIGxpIC5tdWx0aXNlbGVjdF9tb2RlX3R5cGUgLmNoZWNrYm94X3dyYXAgbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdF9tb2RlIHVsIGxpIC5tdWx0aXNlbGVjdF9tb2RlX3R5cGUgLmNoZWNrYm94X3dyYXAgbGFiZWw6YmVmb3JlIHtcbiAgbGVmdDogOTMlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdF9tb2RlIHVsIGxpIC5tdWx0aXNlbGVjdF9tb2RlX3R5cGUgLmNoZWNrYm94X3dyYXAgbGFiZWw6YWZ0ZXIge1xuICBsZWZ0OiA5MCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3RfbW9kZSB1bCBsaSAubXVsdGlzZWxlY3RfbW9kZV90eXBlIC5jaGVja2JveF93cmFwIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3RfbW9kZSB1bCBsaSAubXVsdGlzZWxlY3RfbW9kZV90eXBlIC5jaGVja2JveF93cmFwIC5mb3JtLWdyb3VwIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGNvbG9yOiAjMDBCODk0O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdF9tb2RlIHVsIGxpIC5tdWx0aXNlbGVjdF9tb2RlX3R5cGUgLmNoZWNrYm94X3dyYXAgLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDEzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAjMDBCODk0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDAgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAlICFpbXBvcnRhbnQ7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0X21vZGUgdWwgbGkgLm11bHRpc2VsZWN0X21vZGVfdHlwZSAuY2hlY2tib3hfd3JhcCAuZm9ybS1ncm91cCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWwge1xuICBjb2xvcjogIzAwQjg5NDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3RfbW9kZSB1bCBsaSAubXVsdGlzZWxlY3RfbW9kZV90eXBlIC5jaGVja2JveF93cmFwIC5mb3JtLWdyb3VwIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgIzAwQjg5NCAhaW1wb3J0YW50O1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSAhaW1wb3J0YW50O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdF9tb2RlIHVsIGxpIC5tdWx0aXNlbGVjdF9tb2RlX3R5cGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE4NCwgMTQ4LCAwLjA2KTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuYWN0aW9uX2J0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAyNnB4O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5hY3Rpb25fYnRuIGJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEI4OTQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDlweCAxNXB4IDlweDtcbiAgYmFja2dyb3VuZDogIzAwQjg5NDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXJnaW46IDA7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmFjdGlvbl9idG4gYnV0dG9uOmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoMCwgMTg0LCAxNDgsIDAuMyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5hY3Rpb25fYnRuIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmFjdGlvbl9idG4gYnV0dG9uOnZpc2l0ZWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCAubG9hZGluZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAyMCU7XG4gIHotaW5kZXg6IDk5O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuY2FyZCAuc3VtbWFyeV9oZWFkaW5nX3dyYXAge1xuICB3aWR0aDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmNhcmQgLnN1bW1hcnlfaGVhZGluZ193cmFwIC5zdW1tYXJ5X2hlYWRpbmcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNmE2YTZhO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmNhcmQgLnN1bW1hcnlfaGVhZGluZ193cmFwIC5zdW1tYXJ5X2hlYWRpbmcgLnN1bW1hcnlfaGVhZGluZ19tYWluIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5jYXJkIC5zdW1tYXJ5X2hlYWRpbmdfd3JhcCAuc3VtbWFyeV9oZWFkaW5nIHAge1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBtYXJnaW46IDBweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5jYXJkIC5zdW1tYXJ5X2hlYWRpbmdfd3JhcCAuZWRpdF9maWVsZCB7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNjtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmNhcmQgLnRpdGxlIHtcbiAgY29sb3I6ICM2YTZhNmE7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5jYXJkIC50aXRsZSAudGFibGVfaGVhZGluZ193cmFwIC5oZWFkaW5nIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5jYXJkIC50aXRsZSAudGFibGVfaGVhZGluZ193cmFwIC5lZGl0X2ZpZWxkIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNjtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmVkaXRfZmllbGQgLmljb24taW5mby10b29sdGlwIHtcbiAgY3Vyc29yOiBoZWxwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCAuZWRpdF9maWVsZCAuaWNvbi1pbmZvLXRvb2x0aXA6YmVmb3JlLCAucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCAuZWRpdF9maWVsZCAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICBsZWZ0OiA1MCU7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTEwMDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5jYXJkIC50aXRsZSAudGFibGVfaGVhZGluZ193cmFwIC5lZGl0X2ZpZWxkIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjpiZWZvcmUsIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5jYXJkIC50aXRsZSAudGFibGVfaGVhZGluZ193cmFwIC5lZGl0X2ZpZWxkIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjphZnRlciwgLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmVkaXRfZmllbGQgLmljb24taW5mby10b29sdGlwOmZvY3VzOmJlZm9yZSwgLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmVkaXRfZmllbGQgLmljb24taW5mby10b29sdGlwOmZvY3VzOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xuICB6LWluZGV4OiAxMDA7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCAuZWRpdF9maWVsZCAuaWNvbi1pbmZvLXRvb2x0aXA6aG92ZXI6YmVmb3JlLCAucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCAuZWRpdF9maWVsZCAuaWNvbi1pbmZvLXRvb2x0aXA6Zm9jdXM6YmVmb3JlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNikgMC4ycztcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5jYXJkIC50aXRsZSAudGFibGVfaGVhZGluZ193cmFwIC5lZGl0X2ZpZWxkIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjphZnRlciwgLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmVkaXRfZmllbGQgLmljb24taW5mby10b29sdGlwOmZvY3VzOmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNik7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCAuZWRpdF9maWVsZCAuaWNvbi1pbmZvLXRvb2x0aXA6YmVmb3JlIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxZW0gMC43NWVtIDAgMC43NWVtO1xuICBib3JkZXItY29sb3I6ICNiYWJiYmIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGJvdHRvbTogMTAwJTtcbiAgY29udGVudDogXCJcIjtcbiAgbWFyZ2luLWxlZnQ6IC0wLjVlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNiksIG9wYWNpdHkgMC42NXMgMC41cztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoLTkwJSk7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCAuZWRpdF9maWVsZCAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjYmFiYmJiO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIGJvdHRvbTogMTgwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXApO1xuICBtYXJnaW4tbGVmdDogLTI2cHg7XG4gIHBhZGRpbmc6IDdweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNikgMC4ycztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoNTAlKTtcbiAgbWluLXdpZHRoOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmVkaXRfZmllbGQgLmljb24taW5mby10b29sdGlwOmFmdGVyIHtcbiAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICBtYXJnaW4tbGVmdDogLTVlbTtcbiAgICB3aWR0aDogMTBlbTtcbiAgfVxufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmNhcmQgLnRpdGxlIGlucHV0IHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZjlmOTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICM5NTk3OTU7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuY2FyZCAuc3BhY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmNhcmQgLmRyLXRhYmxlIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuY2FyZCAuZHItdGFibGUgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5jYXJkIC5kci10YWJsZSAudGFibGUtaGVhZGVyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjg5NDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmNhcmQgLmRyLXRhYmxlIHRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzk1OTc5NTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmNhcmQgLmRyLXRhYmxlIHRyIHRoIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVjZWMgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDAgYXV0bztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5jYXJkIC5kci10YWJsZSAuYnV0dG9uLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzk1OTc5NTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmNhcmQgLm5vX2RhdGFfZm91bmQge1xuICBwYWRkaW5nOiA1MHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBjb2xvcjogIzk1OTc5NTtcbn0iLCJAaW1wb3J0IFwic3JjL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCBcInNyYy9zY3NzL21peGlucy5zY3NzXCI7XHJcblxyXG4ubWF0LXBhZ2luYXRvciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wYW5uZWwtc2VjdGlvbiB7XHJcbiAgICAucmVjb25Mb2FkaW5nRGF0YSB7XHJcbiAgICAgICAgQGluY2x1ZGUgbG9hZGVyO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgLnBhZ2VfY29udGVudF9kYXNoIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAuZmlsdGVyX2lucHV0X3dyYXAge1xyXG4gICAgICAgICAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0LWRhbmdlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0ZWRfdGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzZWxlY3RCb3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBpbnB1dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0b3A6IDM3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubW9udGhJbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDM3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGF0ZUltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMzdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZF90ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd25fbXVsdGlzZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGltZy1ib3gtc2hhZG93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODklO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tib3hfd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBjaGVja2JveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHJhZGlvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogOTMlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAkdGhlbWUtY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkICR0aGVtZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjA2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zZWVfYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzMjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzglO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd25fbXVsdGlzZWxlY3RfbW9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgaW1nLWJveC1zaGFkb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4OSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubXVsdGlzZWxlY3RfbW9kZV90eXBlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2hlY2tib3hfd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgY2hlY2tib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmFkaW87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDkzJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAkdGhlbWUtY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkICR0aGVtZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubXVsdGlzZWxlY3RfbW9kZV90eXBlOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjA2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLnNlbGVjdF93cmFwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgb3B0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYWN0aW9uX2J0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYnV0dG9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kcXJfdGFibGVfd3JhcCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgLmxvYWRpbmctY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAuc3VtbWFyeV9oZWFkaW5nX3dyYXAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgLnN1bW1hcnlfaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNmE2YTZhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5zdW1tYXJ5X2hlYWRpbmdfbWFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmVkaXRfZmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgICAgICAgICAgICAgIC50YWJsZV9oZWFkaW5nX3dyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLnByb2dyYW1fbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5lZGl0X2ZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBidXR0b24uY2xvc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0b3A6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmltZ19yZWZyZXNoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmljb24taW5mby10b29sdGlwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGRlZmF1bHQtdG9vbC10aXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmOWY5Zjk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZjlmOTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTU5Nzk1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zcGFjZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kci10YWJsZSB7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nOmFmdGVyLFxyXG4gICAgICAgICAgICAgICAgLy8gdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nOmJlZm9yZSxcclxuICAgICAgICAgICAgICAgIC8vIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2M6YWZ0ZXIsXHJcbiAgICAgICAgICAgICAgICAvLyB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjOmJlZm9yZSxcclxuICAgICAgICAgICAgICAgIC8vIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19hc2NfZGlzYWJsZWQ6YWZ0ZXIsXHJcbiAgICAgICAgICAgICAgICAvLyB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfYXNjX2Rpc2FibGVkOmJlZm9yZSxcclxuICAgICAgICAgICAgICAgIC8vIHRhYmxlLmRhdGFUYWJsZSB0aGVhZCAuc29ydGluZ19kZXNjOmFmdGVyLFxyXG4gICAgICAgICAgICAgICAgLy8gdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2M6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgLy8gdGFibGUuZGF0YVRhYmxlIHRoZWFkIC5zb3J0aW5nX2Rlc2NfZGlzYWJsZWQ6YWZ0ZXIsXHJcbiAgICAgICAgICAgICAgICAvLyB0YWJsZS5kYXRhVGFibGUgdGhlYWQgLnNvcnRpbmdfZGVzY19kaXNhYmxlZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgLy8gICBib3R0b206IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTU5Nzk1O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVjZWMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0YTRhNGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYnV0dG9uLXN0eWxlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjOTU5Nzk1O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubm9fZGF0YV9mb3VuZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5NTk3OTU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiXHJcbi8vIGdsb2JhbC12YXJpYWJsZVxyXG4kaGVhZGVyLWNvbG9yOiAjMjYyNjI2O1xyXG4kYm9keS1iZy1jb2xvcjogI0YzRjNGMztcclxuJHRoZW1lLWNvbG9yOiAjMDBCODk0O1xyXG4kY29sb3ItcmVkOiAjRkY0QjRCO1xyXG4kY29sb3ItdmFsaWQtZXJyb3I6I0U1MzkzNTtcclxuJGNvbG9yLWludmFsaWQtZXJyb3I6I0I3MWMxYztcclxuJGNvbG9yLW1hZ2VudGE6ICNiYzY0OWM7XHJcbiRjb2xvci1waW5rOiAjZjQ5NGM4O1xyXG4kY29sb3ItZ3JlZW46ICM4NEMxNDA7XHJcbiRjb2xvci1saWdodC1ncmVlbjogI0JDRDUzMztcclxuJGNvbG9yLWJsdWU6ICM5NGQwZWE7XHJcbiRjb2xvci1kYXJrLWdyZXk6ICM5QTlBOUE7XHJcbiRjb2xvci1saWdodC1ncmV5OiAjZjlmOWY5O1xyXG4kY29sb3ItZXh0cmEtbGlnaHQtZ3JleTogI0Y0RjRGNDtcclxuJGNvbG9yLW9yYW5nZTogI0UzNzgyNjtcclxuJGNvbG9yLWxpZ2h0LW9yYW5nZTogI0VCOTgyMjtcclxuJGNvbG9yLWV4dHJhLWxpZ2h0LW9yYW5nZTogI0ZDQUYxNztcclxuJGNvbG9yLXdoaXRlOiAjZmZmZmZmO1xyXG4kYm9yZGVyLWNvbG9yOiAjZWVlY2VjO1xyXG4kbm90aWZpY2F0aW9uLWJnOiAjY2VlM2YwO1xyXG4kY29sb3ItbGlnaHQtYmxhY2s6ICM0QTRBNEE7XHJcbiRjb2xvci1ibGFjazogIzAwMDAwMDtcclxuJGNvbG9yLXllbGxvdzogI2Y5ZTkwNztcclxuJGJveC1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsLjIpO1xyXG4kYmxhY2stb3ZlcmxheTogcmdiYSgwLDAsMCwwLjcpO1xyXG4kd2hpdGUtb3ZlcmxheTogcmdiKDI0NywgMjQ3LCAyNDcpO1xyXG4kcGxhY2Vob2xkZXItY29sb3I6ICNhY2FjYWM7XHJcbiRjb2xvci1iYWNrZ3JvdW5kOiAjZTFmYmZhO1xyXG4kY29sb3ItaW5mbzogI0Y3QjUwMDtcclxuJGZvbnQtcm9ib3RvOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtbGlnaHQ6IDMwMDtcclxuJGZvbnQtcmVndWxhcjogNDAwO1xyXG4kZm9udC1ib2xkOiA3MDA7XHJcbiRmb250LWgxOiAzNHB4O1xyXG4kZm9udC1oMjogMzBweDtcclxuJGZvbnQtaDM6IDI0cHg7XHJcbiRmb250LWg0OiAxOHB4O1xyXG4kZm9udC1oNTogMTZweDtcclxuJGZvbnQtaDY6IDE0cHg7XHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/ReconSummary/recon-summary/recon-summary.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/ReconSummary/recon-summary/recon-summary.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ReconSummaryComponent */

  /***/
  function srcAppReconSummaryReconSummaryReconSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReconSummaryComponent", function () {
      return ReconSummaryComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! angular7-csv/dist/Angular-csv */
    "./node_modules/angular7-csv/dist/Angular-csv.js");
    /* harmony import */


    var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_11__);

    var ReconSummaryComponent = /*#__PURE__*/function () {
      function ReconSummaryComponent(dataService, globalService, httpClient, modalService, utilityService, router) {
        _classCallCheck(this, ReconSummaryComponent);

        this.dataService = dataService;
        this.globalService = globalService;
        this.httpClient = httpClient;
        this.modalService = modalService;
        this.utilityService = utilityService;
        this.router = router;
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
        this.filterBy = "";
        this.selectedCountry = "";
        this.selectedCountryModeType = "";
        this.selectedCountryModeTypeMultipal = [];
        this.selectedCountryMode = [];
        this.selectedCountryModeMultipal = [];
        this.checkedCountryModeMultipal = [];
        this.selectedCountryMulti = [];
        this.selectedCountryMultiWithMode = [];
        this.clearCountryList = false;
        this.clearCountryModeList = false;
        this.isCountryClicked = false;
        this.isBillTypeClick = false;
        this.singleProgramSelected = [];
        this.reconCountryWithModes = [];
        this.programData = [];
        this.responceData = [];
        this.programResData = [];
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
          headers: ["Brand Name", "Bill No", "Bill Date", "Store Code", "Store Name", "Customer Name", "MObile No", "Email ID", "Short URL", "Read Count", "Status", "Register No", "Bill Amount"]
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

      _createClass(ReconSummaryComponent, [{
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
          this.dataService.getAllProgram(this.userDetails.userID).subscribe(function (res) {
            //   this.userDetails =localStorage.getItem('userInfo');
            //  console.log( "user info",userDetails)
            var resSTR = JSON.stringify(res);
            var resJson = JSON.parse(resSTR);

            if (resJson.messageCode == '1' && resJson.data != null) {
              for (var i = 0; i < resJson.data.length; i++) {
                // console.log(" resJson.data[i].isSelect", resJson.data[i],"===",resJson.data[i].isSelect)
                resJson.data[i].isSelect = false; // debugger
                // console.log(" resJson.data[i].isSelect after", resJson.data[i].isSelect)

                _this.arrProgramInfoWithKey[resJson.data[i].brandId] = resJson.data[i];
              }

              _this.utilityService.programSort(resJson.data);

              _this.programData = resJson.data; // console.log("resJson.data country", this.programData[1].reconCountryWithModes)
              // this.programDataAll=resJson.data;

              if (_this.programData.length) {
                _this.loadingData = false;
              } else {
                _this.errorMsg = resJson.message;
                _this.loadingData = false;
              }
            } else {
              _this.errorMsg = resJson.message;
              _this.loadingData = false;
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
          this.isBillTypeClick = false;
        }
      }, {
        key: "downloadcsvOptionsStoreWise",
        value: function downloadcsvOptionsStoreWise() {
          // this.loadingData=true;
          new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_11__["AngularCsv"](this.userData, "Store wise summary", this.csvOptionsStoreWise); // this.loadingData=false;
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

        } // getProgram() {
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
        } /////////////////////////////

      }, {
        key: "getProgram",
        value: function getProgram() {
          //  debugger
          this.arrselectedProgram = [];
          var arrProgram = [];

          for (var i = 0; i < this.programData.length; i++) {
            if (this.programData[i].isSelect) {
              this.arrselectedProgram.push(this.programData[i]);
              arrProgram.push(this.programData[i].brandName);
            }
          }

          this.selectedProgram = arrProgram.join();
        }
      }, {
        key: "getselectedProgram",
        value: function getselectedProgram(data) {
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
      }, {
        key: "handleCountryModeType",
        value: function handleCountryModeType(data, countryWithmodeSelected) {
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

          for (var i = 0; i = 1; i++) {
            if (this.selectedCountryModeTypeMultipal.includes(data) && this.checkedCountryModeMultipal.includes(data.modeName + "(" + countryWithmodeSelected.countryCode + ")")) {
              var index = this.selectedCountryModeTypeMultipal.indexOf(data);
              this.selectedCountryModeTypeMultipal.splice(index, 1);
              this.checkedCountryModeMultipal.splice(index, 1);
              break;
            } else {
              this.selectedCountryModeTypeMultipal.push(data);
              this.checkedCountryModeMultipal.push(data.modeName + "(" + countryWithmodeSelected.countryCode + ")");
            }

            break;
          } // console.log("selected Mode", data.modeName + "(" + countryWithmodeSelected.countryCode + ")")
          // console.log("final arr", this.selectedCountryModeTypeMultipal)


          this.selectedCountryModeType = this.checkedCountryModeMultipal.join();
          this.clearCountryModeList = true;
          this.isCountryClicked = false; // console.log("counry mode", this.selectedCountryModeType)
        }
      }, {
        key: "getselectedCountry",
        value: function getselectedCountry(data) {
          // debugger
          if (this.clearCountryList) {
            this.selectedCountry = "";
            this.selectedCountryMulti = [];
            this.selectedCountryModeType = "";
            this.selectedCountryMultiWithMode = [];
            this.selectedCountryModeMultipal = [];
            this.selectedCountryModeTypeMultipal = [];
          } // if(this.clearCountryModeList){
          //   this.selectedCountryModeType = "";
          //   this.selectedCountryModeMultipal=[];
          //   this.selectedCountryModeTypeMultipal=[];
          // }isSelectMode


          if (data.isSelectCountry == false) {
            data.isSelectCountry = true;
          }

          for (var i = 0;; i++) {
            if (this.selectedCountryMulti.includes(data.countryName) && this.selectedCountryMultiWithMode.includes(data)) {
              var index = this.selectedCountryMulti.indexOf(data.countryName);
              this.selectedCountryMulti.splice(index, 1);
              this.selectedCountryMultiWithMode.splice(index, 1);
              break;
            } else {
              this.selectedCountryMulti.push(data.countryName);
              this.selectedCountryMultiWithMode.push(data);
            }

            break;
          }

          this.selectedCountry = this.selectedCountryMulti.join();
          this.selectedCountryMode = this.selectedCountryMultiWithMode;
          console.log("country select", this.selectedCountry); // this.selectedCountryModeType="";

          this.clearCountryList = false; // this.clearCountryModeList=true;
          // this.isCountryClicked = false;
        }
      }, {
        key: "getselectedProgramSingle",
        value: function getselectedProgramSingle(data) {
          this.selectedCountryModeType = "";
          this.selectedCountryMode = [];
          this.selectedCountryModeTypeMultipal = [];
          this.clearCountryList = true; // debugger

          this.selectedCountry = "";
          this.reconCountryWithModes = [];
          this.selectedCountryModeMultipal = [];
          this.reconCountryWithModes = data.reconCountryWithModes;
          console.log("datas country", data);
          this.singleProgramSelected = []; // data.isSelect=false;

          if (data.isSelect == false) {
            data.isSelect = true;
          }

          this.singleProgramSelected.push(data);
          this.allProgram = this.utilityService.getLetterByFilter(this.programData);
          this.selectedProgram = data.brandName;
          this.isProgramClicked = false;
          console.log("this.selectedProgram", this.selectedProgram);
        } ///////////////////////////////////

      }, {
        key: "backButton",
        value: function backButton() {
          this.storeWiseSummary = false;
          this.isCountryClicked = false;
          this.isBillTypeClick = false;
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
                delete ele.baseURL;
                return ele;
              });

              _this3.MonthWiseSummary = newData; // console.log("response DownloadMonthWiseSummary  this.requestDate, parseInt(this.userDetails.userID), this.requestDate.getMonth(), this.requestDate.getFullYear()", this.MonthWiseSummary);

              new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_11__["AngularCsv"](_this3.MonthWiseSummary, "digital recipt summary", _this3.csvOptions);
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
        //search data

      }, {
        key: "getSearchData",
        value: function getSearchData(searchFilterData) {
          var _this4 = this;

          this.isProgramClicked = false;
          this.isLoading = true;
          this.loadingData = true;
          this.loadingTable = false;
          this.responceMsg = ''; // searchFilterData.value.tenantid = this.selectedProgramId;
          // searchFilterData.value.userId = parseInt(this.userDetails.userID);

          delete searchFilterData.value.SettlementSatus;
          delete searchFilterData.value.programData;
          this.searchInProgress = true;
          this.singleProgramSelected[0].reconCountryWithModes = this.selectedCountryModeTypeMultipal;
          searchFilterData.value.brandMasterList = this.singleProgramSelected;
          console.log("this.singleProgramSelected", this.singleProgramSelected);

          if (this.isDateSelect) {
            searchFilterData.value.filterBy = "date";
            this.filterBy = "Date";
          } else {
            searchFilterData.value.filterBy = "month";
            this.filterBy = "Month";
          }

          if (this.isDateSelect) {
            searchFilterData.value.startDate = this.utilityService.convertDate(this.range.fromDate);
            searchFilterData.value.endDate = this.utilityService.convertDate(this.range.toDate); // this.requestDate = searchFilterData.value.startDate;

            console.log("get Date", this.startDate, "==", this.endDate);
          } else {
            // searchFilterData.value.requetDate = searchFilterData.value.requetDate;
            // this.requestDate = searchFilterData.value.requetDate;
            searchFilterData.value.month = searchFilterData.value.requetDate.getMonth() + 1;
            searchFilterData.value.year = searchFilterData.value.requetDate.getFullYear();
            delete searchFilterData.value.requetDate;
            this.monthNew = searchFilterData.value.month;
            this.yearNew = searchFilterData.value.year;
            console.log("month", this.monthNew, this.yearNew);
          }

          delete searchFilterData.value.ReportType;
          console.log('searchFilterData.value', searchFilterData.value);
          this.dataService.getReconSummaryByBillDate(searchFilterData.value).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR); // console.log("getReconSummaryByBillDate", resJSON.objAPIResponce, "===", resJSON.objAPIResponce.message)

            if (resJSON.objAPIResponce.message == "Success") {
              _this4.isLoading = false;
              _this4.loadingData = false;
              _this4.storeWiseSummary = true;
              _this4.responceData = resJSON.objAPIResponce.data;
              _this4.programResData = _this4.responceData[0].brandErrorSucces;
            } else {
              _this4.searchInProgress = false;
              _this4.responceMsg = _this4.utilityService.getMessageFromResponce(resJSON);
            }
          });
        }
      }]);

      return ReconSummaryComponent;
    }();

    ReconSummaryComponent.ctorParameters = function () {
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

    ReconSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recon-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recon-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ReconSummary/recon-summary/recon-summary.component.html"))["default"],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recon-summary.component.scss */
      "./src/app/ReconSummary/recon-summary/recon-summary.component.scss"))["default"]]
    })], ReconSummaryComponent);
    /***/
  }
}]);
//# sourceMappingURL=ReconSummary-recon-summary-module-es5.js.map