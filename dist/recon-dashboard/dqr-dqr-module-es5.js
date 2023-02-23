function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dqr-dqr-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dqr/settlement/settlement.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dqr/settlement/settlement.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDqrSettlementSettlementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- card-panel styles -->\r\n<section class=\"pannel-section\">\r\n    <div class=\"reconLoadingData\" *ngIf=\"loadingData\">\r\n        <button class=\"btn btn-dark\">\r\n            <span class=\"text-light spinner-border spinner-border-sm\"></span>\r\n            Loading! Please wait ...\r\n        </button>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"page_content_dash\">\r\n            <div class=\"filter_input_wrap\" *ngIf=\"!isClickedSearch\">\r\n                <form #searchFilter=\"ngForm\" name=\"form\"\r\n                    (ngSubmit)=\"searchFilter.form.valid && getSearchData(searchFilter);\" novalidate>\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-3\">\r\n                            <label>Select Program</label>\r\n                            <div class=\"selected_text\" (click)=\"isProgramClicked=!isProgramClicked\">\r\n                                {{selectedProgram}}\r\n                                <input type=\"hidden\" name=\"programData\" [(ngModel)]=\"selectedProgram\"\r\n                                    [value]=\"selectedProgram\" required #selectedProg=\"ngModel\">\r\n                            </div>\r\n                            <div\r\n                                *ngIf=\"searchFilter.submitted || selectedProg.invalid && (selectedProg.dirty || selectedProg.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"selectedProg.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Please Select Program.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"dropdown_multiselect\" *ngIf=\"isProgramClicked\">\r\n                                <ul>\r\n                                    <li *ngFor=\"let program of programData\">\r\n                                        <div class=\"checkbox_wrap\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"checkbox\" id=\"{{program.brandId}}\"\r\n                                                    (change)=\"getselectedProgram(program)\" [checked]=\"program.isSelect\">\r\n                                                <label for=\"{{program.brandId}}\">{{program.brandName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n                                </ul>\r\n                                <div class=\"text-center see_all\" (click)=\"seeAllPrograms()\">\r\n                                    <p>See All Program</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"form-group col-3\">\r\n                            <label>Settelment Data</label>\r\n                            <select name=\"SettlementSatus\" [(ngModel)]=\"SettlementSatus\"\r\n                                (ngModelChange)=\"changeSettData(SettlementSatus)\" required #settlementSatus=\"ngModel\">\r\n                                <option [ngValue]=\"1\">All Settled</option>\r\n                                <option [ngValue]=\"2\">All Not Settled</option>\r\n                                <option [ngValue]=\"3\">By Month</option>\r\n                            </select>\r\n                            <div\r\n                                *ngIf=\"searchFilter.submitted || settlementSatus.invalid && (settlementSatus.dirty || settlementSatus.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"settlementSatus.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Please Select Settelment Data.\r\n                                </div>\r\n                            </div>\r\n                        </div> -->\r\n\r\n                        <!-- <div class=\"form-group col-2\" *ngIf=\"isMonthSelect\">\r\n                            <label>Select From Month</label>\r\n                            <input [(ngModel)]=\"FromDate\" autocomplete=\"off\" name=\"FromDate\" bsDatepicker\r\n                                [bsConfig]=\"{dateInputFormat: 'MM/YYYY'}\" (onShown)=\"onOpenCalendar($event)\"\r\n                                required #fromDate=\"ngModel\">\r\n                            <img src=\"assets/images/calendar.svg\" (onShown)=\"onOpenCalendar($event)\">\r\n                            <div\r\n                                *ngIf=\"searchFilter.submitted || fromDate.invalid && (fromDate.dirty || fromDate.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"fromDate.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Please Select Month From.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group col-2\" *ngIf=\"isMonthSelect\">\r\n                            <label>Select To Month</label>\r\n                            <input [(ngModel)]=\"Todate\" autocomplete=\"off\" name=\"Todate\" bsDatepicker\r\n                                [bsConfig]=\"{dateInputFormat: 'MM/YYYY'}\" (onShown)=\"onOpenCalendar($event)\"\r\n                                required #todate=\"ngModel\">\r\n                            <img src=\"assets/images/calendar.svg\" (onShown)=\"onOpenCalendar($event)\">\r\n                            <div\r\n                                *ngIf=\"searchFilter.submitted || todate.invalid && (todate.dirty || todate.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"todate.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Please Select Month To.\r\n                                </div>\r\n                            </div>\r\n                        </div> -->\r\n                        <div class=\"form-group col-2 action_btn\">\r\n                            <button type=\"submit\">\r\n                                <span *ngIf=\"searchInProgress && isLoading\"\r\n                                    class=\"text-light spinner-border spinner-border-sm\" role=\"status\"\r\n                                    aria-hidden=\"true\"></span>\r\n                                Search</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"row\" *ngIf=\"searchInProgress\" class=\"dqr_table_wrap\">\r\n            <div class=\"loading-container\">\r\n                <!-- <div class=\"spinner-border\" role=\"status\" *ngIf=\"isLoading\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div> -->\r\n                <p class=\"text-danger\" *ngIf=\"!isLoading\">{{responceMsg}}</p>\r\n            </div>\r\n            <div class=\"heading_wrap\" *ngIf=\"DqrData.length > 0\">\r\n                <div class=\"table_heading\">\r\n                    DQR Summary\r\n                </div>\r\n                <div class=\"download_img\">\r\n                    <small class=\"icon-info-tooltip\" data-tip=\"Download DQR Summary\" tabindex=\"2\">\r\n                        <span class=\"img_download\">\r\n                            <img src=\"/assets/images/downloadTable.svg\" (click)=\"downloadBillSummary()\">\r\n                        </span>\r\n                    </small>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=' dr-table' *ngIf=\"DqrData.length > 0\">\r\n                <table>\r\n                    <tbody>\r\n                        <tr class=\"table-header\">\r\n                            <th>S.No</th>\r\n                            <th>#Store&nbsp;Code</th>\r\n                            <th>#Store&nbsp;Name</th>\r\n                            <th>#Lpaas&nbsp;Sales</th>\r\n                            <th>#Lpaas&nbsp;Bills</th>\r\n                            <th>#Loyality&nbsp;Sales</th>\r\n                            <th>#Non&nbsp;Loyality&nbsp;Sales</th>\r\n                            <th>#Loyalty&nbsp;Bills</th>\r\n                            <th>#Non&nbsp;Loyalty&nbsp;Bills</th>\r\n                            <th>#Extra&nbsp;Bills</th>\r\n\r\n                        </tr>\r\n                        <tr *ngFor=\"let datas of DqrData;let i = index\">\r\n                            <th>{{i+1}}</th>\r\n                            <th>\r\n                                <!-- <p class=\"totalbill_wrap\"> -->\r\n                                    {{datas.storeCode}}\r\n                                <!-- </p> -->\r\n                            </th>\r\n                            \r\n                            <th>\r\n                                <!-- <p class=\"totalbill_wrap\"> -->\r\n                                    {{datas.storeName}}\r\n                                <!-- </p> -->\r\n                            </th>\r\n                            <th>\r\n                                <!-- <p class=\"totalbill_wrap\"> -->\r\n                                    {{datas.lpaasSales}}\r\n                                <!-- </p> -->\r\n                            </th>\r\n                            <th>\r\n                                <!-- <p class=\"totalbill_wrap\"> -->\r\n                                    {{datas.lpaasBills}}\r\n                                <!-- </p> -->\r\n                            </th>\r\n                            <th>\r\n                                <!-- <p class=\"totalbill_wrap\"> -->\r\n                                    {{datas.reconLoyalitysales}}\r\n                                <!-- </p> -->\r\n                            </th>\r\n                            <th>\r\n                                <!-- <p class=\"totalbill_wrap\"> -->\r\n                                    {{datas.reconNonLoyalitysales}}\r\n                                <!-- </p> -->\r\n                            </th>\r\n                            <th>\r\n                                <!-- <p class=\"totalbill_wrap\"> -->\r\n                                    {{datas.reconLoyaltyBills}}\r\n                                <!-- </p> -->\r\n                            </th>\r\n                            <th>\r\n                                <!-- <p class=\"totalbill_wrap\"> -->\r\n                                    {{datas.reconNonLoyaltyBills}}\r\n                                <!-- </p> -->\r\n                            </th>\r\n                            <th>\r\n                                <!-- <p class=\"totalbill_wrap\"> -->\r\n                                    {{datas.extraBillsinLpaas}}\r\n                                <!-- </p> -->\r\n                            </th>\r\n                        </tr>\r\n\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n</section>";
    /***/
  },

  /***/
  "./src/app/dqr/dqr-routing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/dqr/dqr-routing.module.ts ***!
    \*******************************************/

  /*! exports provided: DqrRoutingModule */

  /***/
  function srcAppDqrDqrRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DqrRoutingModule", function () {
      return DqrRoutingModule;
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


    var _settlement_settlement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./settlement/settlement.component */
    "./src/app/dqr/settlement/settlement.component.ts");

    var routes = [{
      path: 'settlement',
      component: _settlement_settlement_component__WEBPACK_IMPORTED_MODULE_3__["SettlementComponent"]
    }];

    var DqrRoutingModule = function DqrRoutingModule() {
      _classCallCheck(this, DqrRoutingModule);
    };

    DqrRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DqrRoutingModule);
    /***/
  },

  /***/
  "./src/app/dqr/dqr.module.ts":
  /*!***********************************!*\
    !*** ./src/app/dqr/dqr.module.ts ***!
    \***********************************/

  /*! exports provided: DqrModule */

  /***/
  function srcAppDqrDqrModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DqrModule", function () {
      return DqrModule;
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


    var _src_app_dqr_dqr_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @src/app/dqr/dqr-routing.module */
    "./src/app/dqr/dqr-routing.module.ts");
    /* harmony import */


    var _src_app_dqr_settlement_settlement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @src/app/dqr/settlement/settlement.component */
    "./src/app/dqr/settlement/settlement.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var ngx_mat_daterange_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-mat-daterange-picker */
    "./node_modules/ngx-mat-daterange-picker/esm2015/ngx-mat-daterange-picker.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var angular_datatables__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! angular-datatables */
    "./node_modules/angular-datatables/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ngx-bootstrap/utils */
    "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");

    Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_51__["setTheme"])('bs4'); // or 'bs4'

    var DqrModule = function DqrModule() {
      _classCallCheck(this, DqrModule);
    };

    DqrModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_src_app_dqr_settlement_settlement_component__WEBPACK_IMPORTED_MODULE_4__["SettlementComponent"]],
      imports: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_49__["NgbModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _src_app_dqr_dqr_routing_module__WEBPACK_IMPORTED_MODULE_3__["DqrRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_50__["BsDatepickerModule"].forRoot(), angular_datatables__WEBPACK_IMPORTED_MODULE_48__["DataTablesModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_47__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_46__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_45__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_44__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_43__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_42__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_41__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_40__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_39__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_38__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_37__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_35__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_34__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_31__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_25__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_12__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_10__["ScrollingModule"], ngx_mat_daterange_picker__WEBPACK_IMPORTED_MODULE_9__["NgxMatDrpModule"]]
    })], DqrModule);
    /***/
  },

  /***/
  "./src/app/dqr/settlement/settlement.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/dqr/settlement/settlement.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDqrSettlementSettlementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* clearfix style */\nimg {\n  max-width: 100%;\n  height: auto;\n}\n/*== start of code for tooltips ==*/\n.mat-paginator {\n  display: block;\n  width: 100%;\n}\n.pannel-section .reconLoadingData {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.7);\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n}\n.pannel-section .reconLoadingData button {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 999;\n}\n.pannel-section .container .page_content_dash {\n  background: #ffffff;\n  margin: 20px auto;\n  padding: 10px;\n  border-radius: 5px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group {\n  position: relative;\n  margin-bottom: 25px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .text-danger {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n}\n@media (max-width: 991px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .text-danger {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .text-danger {\n    font-size: 14px;\n  }\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group label {\n  padding: 0px;\n  margin: 0px;\n  color: #9A9A9A;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  display: block;\n  margin-bottom: 5px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group label.disable {\n  cursor: not-allowed;\n}\n@media (max-width: 576px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group label {\n    font-size: 14px;\n  }\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group select,\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .selected_text {\n  -webkit-appearance: none;\n  -mos-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url('list.svg') right no-repeat;\n  background-position: right 0.7em top 50%, 0 0;\n  color: #4A4A4A;\n  display: inline-block;\n  padding: 5px;\n  outline: none;\n  box-shadow: none;\n  margin: 0 auto;\n  background-color: #f9f9f9;\n  font-size: 16px;\n  font-weight: 300;\n  min-width: 95px;\n  border: 1px solid #eeecec;\n  width: 100%;\n  line-height: 29px;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n@media (max-width: 576px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group select,\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .selected_text {\n    margin-bottom: 10px;\n  }\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input {\n  background: #f9f9f9;\n  outline: 0;\n  box-shadow: none;\n  border: 1px solid #eeecec;\n  padding: 5px;\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 300;\n  border-radius: 3px;\n  line-height: 29px;\n  margin: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-webkit-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-moz-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-ms-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-webkit-inner-spin-button, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group img {\n  position: absolute;\n  right: 25px;\n  top: 37px;\n  z-index: 99;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .selected_text {\n  height: 41px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 281.11px;\n  padding-right: 25px;\n  cursor: pointer;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0.5px;\n  -moz-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0.5px;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #ffffff;\n  position: absolute;\n  width: 83%;\n  top: 70px;\n  z-index: 99;\n  height: 200px;\n  overflow-y: auto;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li {\n  padding: 10px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap {\n  margin: auto;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap input[type=checkbox] {\n  display: none;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap input[type=checkbox] + label {\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  color: #4A4A4A;\n  font-size: 16px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  line-height: 22px;\n  margin: 0 auto;\n  display: inline-block;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap input[type=checkbox] + label:before {\n  content: \"\";\n  display: block;\n  width: 19px;\n  height: 19px;\n  border: 1px solid #00B894;\n  position: absolute;\n  left: 0;\n  top: 2px;\n  opacity: 0.6;\n  transition: all 0.12s, border-color 0.08s;\n  border-radius: 2px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap input[type=checkbox]:checked + label:before {\n  width: 6px;\n  top: 1px;\n  left: 7.5px;\n  border-radius: 0;\n  opacity: 1;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  transform: rotate(45deg);\n  height: 12px;\n  border-bottom-color: #ffffff;\n  border-right-color: #ffffff;\n  z-index: 99;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap input[type=checkbox]:checked + label:after {\n  content: \"\";\n  display: block;\n  width: 19px;\n  height: 19px;\n  border: 1px solid #00B894;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 1;\n  transition: all 0.12s, border-color 0.08s;\n  background: #00B894;\n  border-radius: 2px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap label {\n  width: 100%;\n  padding-left: 0 !important;\n  text-transform: capitalize;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap label:before {\n  left: 93% !important;\n  border: none !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap label:after {\n  left: 90% !important;\n  background: none !important;\n  border: none !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap .form-group {\n  margin-bottom: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap .form-group input[type=checkbox]:checked + label {\n  color: #00B894;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap .form-group input[type=checkbox]:checked + label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 3px !important;\n  right: 13px !important;\n  width: 7px !important;\n  height: 14px !important;\n  border: solid #00B894 !important;\n  border-width: 0 2px 2px 0 !important;\n  transform: rotate(45deg) !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li:hover {\n  background-color: rgba(0, 184, 148, 0.06);\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect .see_all {\n  position: absolute;\n  top: 226px;\n  z-index: 99;\n  width: 82%;\n  left: 15px;\n  padding: 10px;\n  background: #ffffff;\n  cursor: pointer;\n  color: #00B894;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect .see_all p {\n  margin: 0 auto;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn {\n  display: inline-flex;\n  align-items: center;\n  margin: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  margin: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button:focus {\n  outline: none;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button:visited {\n  color: #ffffff;\n}\n.pannel-section .container .dqr_table_wrap {\n  position: relative;\n}\n.pannel-section .container .dqr_table_wrap .loading-container {\n  position: absolute;\n  left: 50%;\n  top: 20%;\n  z-index: 99;\n}\n.pannel-section .container .dqr_table_wrap .heading_wrap {\n  display: flex;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  background-color: #ffffff;\n  padding-left: 5px;\n}\n.pannel-section .container .dqr_table_wrap .heading_wrap .table_heading {\n  font-size: 22px;\n  font-weight: 500;\n  color: #6a6a6a;\n}\n.pannel-section .container .dqr_table_wrap .heading_wrap .download_img {\n  padding-left: 6px;\n}\n.pannel-section .container .dqr_table_wrap .heading_wrap .download_img .icon-info-tooltip {\n  cursor: help;\n  position: relative;\n  outline: none;\n}\n.pannel-section .container .dqr_table_wrap .heading_wrap .download_img .icon-info-tooltip:before, .pannel-section .container .dqr_table_wrap .heading_wrap .download_img .icon-info-tooltip:after {\n  left: 50%;\n  opacity: 0;\n  position: absolute;\n  z-index: -100;\n}\n.pannel-section .container .dqr_table_wrap .heading_wrap .download_img .icon-info-tooltip:hover:before, .pannel-section .container .dqr_table_wrap .heading_wrap .download_img .icon-info-tooltip:hover:after, .pannel-section .container .dqr_table_wrap .heading_wrap .download_img .icon-info-tooltip:focus:before, .pannel-section .container .dqr_table_wrap .heading_wrap .download_img .icon-info-tooltip:focus:after {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n  z-index: 100;\n}\n.pannel-section .container .dqr_table_wrap .heading_wrap .download_img .icon-info-tooltip:hover:before, .pannel-section .container .dqr_table_wrap .heading_wrap .download_img .icon-info-tooltip:focus:before {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n}\n.pannel-section .container .dqr_table_wrap .heading_wrap .download_img .icon-info-tooltip:hover:after, .pannel-section .container .dqr_table_wrap .heading_wrap .download_img .icon-info-tooltip:focus:after {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26);\n}\n.pannel-section .container .dqr_table_wrap .heading_wrap .download_img .icon-info-tooltip:before {\n  border-style: solid;\n  border-width: 1em 0.75em 0 0.75em;\n  border-color: #babbbb transparent transparent transparent;\n  bottom: 100%;\n  content: \"\";\n  margin-left: -0.5em;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26), opacity 0.65s 0.5s;\n  transform: scale(0.6) translateY(-90%);\n}\n.pannel-section .container .dqr_table_wrap .heading_wrap .download_img .icon-info-tooltip:after {\n  background: #babbbb;\n  border-radius: 0.25em;\n  bottom: 180%;\n  color: #ffffff;\n  content: attr(data-tip);\n  margin-left: -26px;\n  padding: 7px;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n  transform: scale(0.6) translateY(50%);\n  min-width: 15px;\n  text-align: center;\n}\n@media (max-width: 767px) {\n  .pannel-section .container .dqr_table_wrap .heading_wrap .download_img .icon-info-tooltip:after {\n    font-size: 0.75em;\n    margin-left: -5em;\n    width: 10em;\n  }\n}\n.pannel-section .container .dqr_table_wrap .heading_wrap .download_img .icon-info-tooltip .img_download {\n  vertical-align: middle;\n}\n.pannel-section .container .dqr_table_wrap .dr-table {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.pannel-section .container .dqr_table_wrap .dr-table table {\n  width: 100%;\n  text-align: left;\n}\n.pannel-section .container .dqr_table_wrap .dr-table .table-header th {\n  background-color: #00B894;\n  line-height: 25px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  vertical-align: middle;\n  padding: 10px;\n  border: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.pannel-section .container .dqr_table_wrap .dr-table tr {\n  background-color: white;\n  line-height: 30px;\n  color: #959795;\n  font-size: 13px;\n  font-weight: 300;\n}\n.pannel-section .container .dqr_table_wrap .dr-table tr th {\n  min-width: 100px;\n  background-color: #ffffff;\n  padding: 10px;\n  text-transform: capitalize !important;\n  border-bottom: 1px solid #eeecec !important;\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  vertical-align: middle;\n}\n.pannel-section .container .dqr_table_wrap .dr-table tr th .totalbill_wrap p {\n  margin: 0px;\n}\n.pannel-section .container .dqr_table_wrap .dr-table .button-style {\n  background: none;\n  border: none;\n  outline: none;\n  color: #959795;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHFyL3NldHRsZW1lbnQvRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxzY3NzXFxtaXhpbnMuc2NzcyIsInNyYy9hcHAvZHFyL3NldHRsZW1lbnQvc2V0dGxlbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZHFyL3NldHRsZW1lbnQvRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxhcHBcXGRxclxcc2V0dGxlbWVudFxcc2V0dGxlbWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZHFyL3NldHRsZW1lbnQvRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBQTtBQWlCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDZkY7QUR3b0JBLG1DQUFBO0FFem9CQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FES0Y7QUNGRTtFRndEQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsOEJHMUNjO0VIMkNkLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNsREY7QURtREU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FDakRKO0FDakJJO0VBQ0UsbUJDTVE7RURMUixpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBRG1CTjtBQ2hCVTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QURrQlo7QUNqQlk7RUZpT1YscUJBQUE7RUFDQSxjR2xPa0I7RUhtT2xCLGVBQUE7RUFDQSxnQkd6TmE7RUgwTmIsaUJBQUE7RUFDQSxpQ0c3Tlk7RUg4TlosZ0JBQUE7RUFDQSxjQUFBO0FDN01GO0FEUkk7RUVuQlE7SUYyT1Isa0JBQUE7RUM1TUY7QUFDRjtBRHpCSTtFRVBRO0lGK09SLGVBQUE7RUMzTUY7QUFDRjtBQ2xDWTtFRjZnQlYsWUFBQTtFQUNBLFdBQUE7RUFDQSxjRzNoQmdCO0VINGhCaEIsZUFBQTtFQUNBLGdCRzFnQlc7RUgyZ0JYLGlDRzVnQlk7RUg2Z0JaLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDeGVGO0FEeWVFO0VBQ0UsbUJBQUE7QUN2ZUo7QUQ1Q0k7RUVKUTtJRjBoQlIsZUFBQTtFQ3RlRjtBQUNGO0FDbERZOztFRjhlVix3QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0EsNkNBQUE7RUFDQSxjRzFma0I7RUgyZmxCLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5Qkd4Z0JpQjtFSHlnQmpCLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VFOWZZLDBCQUFBO0FEdUVkO0FEekVJO0VFRFE7O0lGb2dCUixtQkFBQTtFQ3JiRjtBQUNGO0FDM0VZO0VGMFFWLG1CRzdSaUI7RUg4UmpCLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFRW5SWSxTQUFBO0FEd0ZkO0FENkxFO0VBQ0UsY0c3UmdCO0VIOFJoQixlQUFBO0FDM0xKO0FEeUxFO0VBQ0UsY0c3UmdCO0VIOFJoQixlQUFBO0FDM0xKO0FEeUxFO0VBQ0UsY0c3UmdCO0VIOFJoQixlQUFBO0FDM0xKO0FEeUxFO0VBQ0UsY0c3UmdCO0VIOFJoQixlQUFBO0FDM0xKO0FENkxFO0VBRUUsd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQzVMSjtBQ2hHWTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FEa0dkO0FDaEdZO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FEa0dkO0FDL0ZjO0VGb2dCWixnREFBQTtFQUNBLHFEQUFBO0VBQ0Esa0RBQUE7RUVwZ0JjLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkN2Q0Y7RUR3Q0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QURtR2hCO0FDbEdnQjtFQUNFLGFBQUE7QURvR2xCO0FDbkdrQjtFRjhmaEIsWUFBQTtBQ3haRjtBRDBaRTtFQUNFLGFBQUE7QUN4Wko7QUQyWkU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjR3RqQmdCO0VIdWpCaEIsZUFBQTtFQUNBLGdCRzlpQlM7RUgraUJULGlDR2hqQlU7RUhpakJWLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDelpKO0FEMlpJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFFQSx5Q0FBQTtFQUNBLGtCQUFBO0FDelpOO0FEOFpJO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUVBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCR2htQlE7RUhpbUJSLDJCR2ptQlE7RUhrbUJSLFdBQUE7QUM1Wk47QUQrWkk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUVBLHlDQUFBO0VBQ0EsbUJHaG9CUTtFSGlvQlIsa0JBQUE7QUM3Wk47QUNuS29CO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBVUEsMEJBQUE7QUQ0SnRCO0FDcktzQjtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7QUR1S3hCO0FDcktzQjtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBRHVLeEI7QUNuS29CO0VBQ0UsZ0JBQUE7QURxS3RCO0FDbkt3QjtFQUNFLGNDbkZaO0FGd1BkO0FDcEswQjtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtBRHNLNUI7QUNoS2tCO0VBQ0UseUNBQUE7QURrS3BCO0FDOUpjO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQ2pHRjtFRGtHRSxlQUFBO0VBQ0EsY0NsSEY7QUZrUmQ7QUMvSmdCO0VBQ0UsY0FBQTtBRGlLbEI7QUM1SlU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBRDhKWjtBQzdKWTtFRnlOVix5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjRzVVWTtFSDZVWixxQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CRy9WWTtFSGdXWixhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VFcE9ZLFNBQUE7QUQ0S2Q7QUQwREU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzREFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ3hESjtBRDJERTtFQUNFLGFBQUE7QUN6REo7QUQyREU7RUFDRSxjR2xXVTtBRnlTZDtBQ25MSTtFQUNFLGtCQUFBO0FEcUxOO0FDcExNO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QURzTFI7QUNwTE07RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBRHNMUjtBQ3JMUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUR1TFY7QUNyTFE7RUFDRSxpQkFBQTtBRHVMVjtBQ3RMVTtFRmdmUixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDdlRGO0FEeVRFO0VBRUUsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUN4VEo7QUQ2VEk7RUFFRSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0FDNVROO0FEK1RJO0VBQ0UsZ0VBQUE7QUM3VE47QURnVUk7RUFDRSwyREFBQTtBQzlUTjtBRGtVRTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSx5REFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwrRUFBQTtFQUNBLHNDQUFBO0FDaFVKO0FEbVVFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxjR3hxQlU7RUh5cUJWLHVCQUFBO0VBRUEsa0JBQUE7RUFFQSxZQUFBO0VBQ0EsZ0VBQUE7RUFDQSxxQ0FBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtBQ3BVSjtBRGhXSTtFQXdxQkE7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQ3JVSjtBQUNGO0FDeE9ZO0VBRUUsc0JBQUE7QUR5T2Q7QUNwT007RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FEc09SO0FDck9RO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FEdU9WO0FDcE9VO0VBQ0UseUJDNUtFO0VENktGLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtBRHNPWjtBQ25PUTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEcU9WO0FDcE9VO0VBQ0UsZ0JBQUE7RUFDQSx5QkNqTEU7RURrTEYsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsMkNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QURzT1o7QUNwT2M7RUFDRSxXQUFBO0FEc09oQjtBQ2hPUTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRGtPViIsImZpbGUiOiJzcmMvYXBwL2Rxci9zZXR0bGVtZW50L3NldHRsZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjbGVhcmZpeCBzdHlsZSAqL1xyXG5cclxuLy8gQ2xlYXJmaXggbWl4aW5cclxuJWNsZWFyZml4IHtcclxuICAqem9vbTogMTtcclxuXHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLy8gRGVmaW5lIHRoZSBicmVha3BvaW50c1xyXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcclxuICBAaWYgJHBvaW50PT1zbWFsbC1kZXZpY2Uge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1tb2JpbGUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT10YWJsZXQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT10YWJsZXQwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09dGFibGV0cHJvIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09aXBhZCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PWxhcHRvcCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1sYXB0b3BtYXgge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09ZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vL2xvYWRlclxyXG5AbWl4aW4gbG9hZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGJhY2tncm91bmQ6ICRibGFjay1vdmVybGF5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gIH1cclxufVxyXG4vLyBqdXN0aWZ5LWNvbnRlbnQgbWl4aW5cclxuXHJcbkBtaXhpbiBqdXN0aWZ5LWNvbnRlbnQoJGp1c3RpZnkpIHtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgLW1zLWZsZXgtcGFjazogJGp1c3RpZnk7XHJcbn1cclxuXHJcbi8vIGFsaWduLWl0ZW1zIG1peGluXHJcblxyXG5AbWl4aW4gYWxpZ24taXRlbXMoJGFsaWduLWhvcml6b250YWxseSkge1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbiAgLW1vei1hbGlnbi1pdGVtczogJGFsaWduLWhvcml6b250YWxseTtcclxuICAtbXMtYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbn1cclxuXHJcbi8vIFRyYW5zaXRpb24gbWl4aW5cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uKSB7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG59XHJcblxyXG4vLyBUcmFuc2Zvcm0gbWl4aW5cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybSkge1xyXG4gIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG4gIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbkBtaXhpbiBib3gtc2hhZG93KCRhcmdzKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAtbW96LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gIC1tcy1ib3gtc2hhZG93OiAkYXJncztcclxuICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxufVxyXG5cclxuLy9QYWRkaW5nIG1peGluXHJcbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpIHtcclxuICBwYWRkaW5nLXRvcDogJHRvcDtcclxuICBwYWRkaW5nLXJpZ2h0OiAkcmlnaHQ7XHJcbiAgcGFkZGluZy1ib3R0b206ICRib3R0b207XHJcbiAgcGFkZGluZy1sZWZ0OiAkbGVmdDtcclxufVxyXG5cclxuLy9NYXJnaW4gbWl4aW5cclxuQG1peGluIG1hcmdpbigkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KSB7XHJcbiAgbWFyZ2luLXRvcDogJHRvcDtcclxuICBtYXJnaW4tcmlnaHQ6ICRyaWdodDtcclxuICBtYXJnaW4tYm90dG9tOiAkYm90dG9tO1xyXG4gIG1hcmdpbi1sZWZ0OiAkbGVmdDtcclxufVxyXG5cclxuLy9wb3NpdGlvbiBtaXhpblxyXG5AbWl4aW4gcG9zaXRpb24oJHBvc2l0aW9uLCAkdG9wOiBudWxsLCAkcmlnaHQ6IG51bGwsICRib3R0b206IG51bGwsICRsZWZ0OiBudWxsKSB7XHJcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcclxuICB0b3A6ICR0b3A7XHJcbiAgcmlnaHQ6ICRyaWdodDtcclxuICBib3R0b206ICRib3R0b207XHJcbiAgbGVmdDogJGxlZnQ7XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLUgxIHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gaGVhZGluZy1IMiB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGhlYWRpbmctSDMge1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLUg0IHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LXJlZ3VsYXI7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHBhcmFncmFwaCB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1yZWd1bGFyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29sb3JCb3gge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvZHktYmctY29sb3I7XHJcbiAgLy8gYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggMXB4IDRweCAwLjVweDsgO1xyXG59XHJcblxyXG5AbWl4aW4gYW5jaG9yIHtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcblxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyxcclxuICAmOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICB9XHJcbn1cclxuXHJcbi8vIGRlZmF1bHQgaW5wdXQgdHlwZSBhbnlcclxuQG1peGluIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4gICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vdGV4dGFyZWFcclxuQG1peGluIHRleHRhcmVhIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZGVmYXVsdCBidXR0b25cclxuQG1peGluIGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiA5cHggMTVweCA5cHg7XHJcbiAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKCR0aGVtZS1jb2xvciwgMC4zKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uMSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiA5cHggMTVweCA5cHg7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGJveCBkcl9zdW1tYXJ5XHJcbkBtaXhpbiBib3gge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDFweCA0cHggMC41cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbkBtaXhpbiBtb25fbmFtZSB7XHJcbiAgLy8gcGFkZGluZzogMHB4IDAgMHB4IDE1cHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuQG1peGluIG1vbl9ubyB7XHJcbiAgcGFkZGluZzogMHB4IDAgMHB4IDEwcHg7XHJcbiAgLy8gY29sb3I6ICM0YTRhNGE7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIGRlZmF1bHQgcHJvZHVjdC1idXR0b25cclxuQG1peGluIHByb2R1Y3QtYnV0dG9uIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA1cHggMTRweCA2cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDJweCB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50O1xyXG4gIC1vLWJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIC1vLWJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyByaWdodCB3aGl0ZSBhcnJvdyBpbiBidXR0b25cclxuLy8gQG1peGluIGJ0bl9yaWdodF9hcnJvdyB7XHJcbi8vICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuXHJcbi8vICAgJjphZnRlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoKSBuby1yZXBlYXQ7XHJcbi8vICAgICB3aWR0aDogMjBweDtcclxuLy8gICAgIGhlaWdodDogMTdweDtcclxuLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICByaWdodDogN3B4O1xyXG4vLyAgICAgdG9wOiAxMHB4O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy9mb3IgaDQgd2l0aCBib3R0b20gbGluZVxyXG5AbWl4aW4gdGV4dF91bmRlcmxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDJweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vZm9yIHNlbGVjdCB0YWdcclxuXHJcbkBtaXhpbiBzZWxlY3RCb3gge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW9zLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL2xpc3Quc3ZnKSByaWdodCBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMC43ZW0gdG9wIDUwJSwgMCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWluLXdpZHRoOiA5NXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vL2xhYmVsXHJcbkBtaXhpbiBsYWJlbCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGNvbG9yOiAkY29sb3ItZGFyay1ncmV5O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAmLmRpc2FibGUge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi8vaW1hZ2UgYm94IHNoYWRvd1xyXG5AbWl4aW4gaW1nLWJveC1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWNvbG9yIDBweCAxcHggNHB4IDAuNXB4O1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGJveC1zaGFkb3ctY29sb3IgMHB4IDFweCA0cHggMC41cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYm94LXNoYWRvdy1jb2xvciAwcHggMXB4IDRweDtcclxufVxyXG5cclxuLy9jaGVja2JveFxyXG5cclxuQG1peGluIGNoZWNrYm94IHtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTlweDtcclxuICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAycHg7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICB0b3A6IDFweDtcclxuICAgICAgbGVmdDogNy41cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTlweDtcclxuICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcclxuICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL3Rvb2wtdGlwXHJcblxyXG4vKj09IHN0YXJ0IG9mIGNvZGUgZm9yIHRvb2x0aXBzID09Ki9cclxuQG1peGluIGRlZmF1bHQtdG9vbC10aXAge1xyXG4gIGN1cnNvcjogaGVscDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTEwMDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICAmOmJlZm9yZSxcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMWVtIDAuNzVlbSAwIDAuNzVlbTtcclxuICAgIGJvcmRlci1jb2xvcjogI2JhYmJiYiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNWVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNiksIG9wYWNpdHkgMC42NXMgMC41cztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKC05MCUpO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmFiYmJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgYm90dG9tOiAxODAlO1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXApO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC04Ljc1ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTI2cHg7XHJcbiAgICAvLyBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KSAwLjJzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoNTAlKTtcclxuICAgIC8vIHdpZHRoOiAxNy41ZW07XHJcbiAgICBtaW4td2lkdGg6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTVlbTtcclxuICAgICAgd2lkdGg6IDEwZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL2xpc3Qgc3R5bGVcclxuXHJcbkBtaXhpbiBsaXN0c3R5bGUge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIi5cIjtcclxuICAgIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogNDFweDtcclxuICB9XHJcbn1cclxuXHJcbi8vZmlsZSB1cGxvYWQgaW5wdXRcclxuQG1peGluIGZpbGVfaW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgQGluY2x1ZGUgYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4vL2ZvciBibG9jayBtaXhpblxyXG5AbWl4aW4gYmxvY2tBbGxUZXh0IHtcclxuICBoMSB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUgxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUgyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUgzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUg0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjplbXB0eSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBicmVhZGNydW1iIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgQGluY2x1ZGUgYW5jaG9yO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vL3JhZGlvIGJ1dHRvblxyXG5cclxuQG1peGluIHJhZGlvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgJjpjaGVja2VkLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAvLyBsZWZ0OiA0Ny44JTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdG9wOiA1cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtaXhpbiByYWRpbzEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAmOmNoZWNrZWQsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDQ3LjglO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vZGVmYXVsdCB0YWJsZVxyXG5AbWl4aW4gdGFibGUge1xyXG4gIHRhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIHRoZWFkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgLmljb24taW5mby10b29sdGlwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZGVmYXVsdC10b29sLXRpcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGVja2JveF93cmFwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgY2hlY2tib3g7XHJcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRib2R5IHtcclxuICAgICAgdHIge1xyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAuZXJyb3IsXHJcbiAgICAgICAgICAubWFwcGVkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWNjZXNzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtY29sb3IsIDAuMDUpO1xyXG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kaXNhYmxlIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVycm9yIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItcmVkLCAwLjA1KTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1yZWQ7XHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kaXNhYmxlIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1hcHBlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLWxpZ2h0LWJsYWNrLCAwLjA1KTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZGlzYWJsZSB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGVja2JveF93cmFwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgY2hlY2tib3g7XHJcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBpbWctYm94LXNoYWRvdztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCR0aGVtZS1jb2xvciwgMC4wNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbi1pbmZvLXRvb2x0aXAge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZGVmYXVsdC10b29sLXRpcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyogY2xlYXJmaXggc3R5bGUgKi9cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKj09IHN0YXJ0IG9mIGNvZGUgZm9yIHRvb2x0aXBzID09Ki9cbi5tYXQtcGFnaW5hdG9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFubmVsLXNlY3Rpb24gLnJlY29uTG9hZGluZ0RhdGEge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTk5O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5yZWNvbkxvYWRpbmdEYXRhIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHotaW5kZXg6IDk5OTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLnRleHQtZGFuZ2VyIHtcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAudGV4dC1kYW5nZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAudGV4dC1kYW5nZXIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICM5QTlBOUE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgbGFiZWwuZGlzYWJsZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCBzZWxlY3QsXG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLnNlbGVjdGVkX3RleHQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3MtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvbGlzdC5zdmcpIHJpZ2h0IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMC43ZW0gdG9wIDUwJSwgMCAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1pbi13aWR0aDogOTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWNlYztcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgc2VsZWN0LFxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5zZWxlY3RlZF90ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlY2VjO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgbWFyZ2luOiAwO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWNhY2FjO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjVweDtcbiAgdG9wOiAzN3B4O1xuICB6LWluZGV4OiA5OTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuc2VsZWN0ZWRfdGV4dCB7XG4gIGhlaWdodDogNDFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogMjgxLjExcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCA0cHggMC41cHg7XG4gIC1tb3otYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggNHB4IDAuNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDRweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4MyU7XG4gIHRvcDogNzBweDtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAge1xuICBtYXJnaW46IGF1dG87XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE5cHg7XG4gIGhlaWdodDogMTlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQjg5NDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDJweDtcbiAgb3BhY2l0eTogMC42O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcbiAgd2lkdGg6IDZweDtcbiAgdG9wOiAxcHg7XG4gIGxlZnQ6IDcuNXB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBoZWlnaHQ6IDEycHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogI2ZmZmZmZjtcbiAgei1pbmRleDogOTk7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCODk0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XG4gIGJhY2tncm91bmQ6ICMwMEI4OTQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBsYWJlbDpiZWZvcmUge1xuICBsZWZ0OiA5MyUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIGxhYmVsOmFmdGVyIHtcbiAgbGVmdDogOTAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsIHtcbiAgY29sb3I6ICMwMEI4OTQ7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIC5mb3JtLWdyb3VwIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgIzAwQjg5NCAhaW1wb3J0YW50O1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSAhaW1wb3J0YW50O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTg0LCAxNDgsIDAuMDYpO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCAuc2VlX2FsbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMjZweDtcbiAgei1pbmRleDogOTk7XG4gIHdpZHRoOiA4MiU7XG4gIGxlZnQ6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMwMEI4OTQ7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IC5zZWVfYWxsIHAge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuYWN0aW9uX2J0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmFjdGlvbl9idG4gYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQjg5NDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOXB4IDE1cHggOXB4O1xuICBiYWNrZ3JvdW5kOiAjMDBCODk0O1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1hcmdpbjogMDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuYWN0aW9uX2J0biBidXR0b246aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAxN3B4IDEwcHggLTEwcHggcmdiYSgwLCAxODQsIDE0OCwgMC4zKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMzAwbXM7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmFjdGlvbl9idG4gYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuYWN0aW9uX2J0biBidXR0b246dmlzaXRlZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmRxcl90YWJsZV93cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmRxcl90YWJsZV93cmFwIC5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDIwJTtcbiAgei1pbmRleDogOTk7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuZHFyX3RhYmxlX3dyYXAgLmhlYWRpbmdfd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCAuaGVhZGluZ193cmFwIC50YWJsZV9oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzZhNmE2YTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCAuaGVhZGluZ193cmFwIC5kb3dubG9hZF9pbWcge1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCAuaGVhZGluZ193cmFwIC5kb3dubG9hZF9pbWcgLmljb24taW5mby10b29sdGlwIHtcbiAgY3Vyc29yOiBoZWxwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuZHFyX3RhYmxlX3dyYXAgLmhlYWRpbmdfd3JhcCAuZG93bmxvYWRfaW1nIC5pY29uLWluZm8tdG9vbHRpcDpiZWZvcmUsIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCAuaGVhZGluZ193cmFwIC5kb3dubG9hZF9pbWcgLmljb24taW5mby10b29sdGlwOmFmdGVyIHtcbiAgbGVmdDogNTAlO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xMDA7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuZHFyX3RhYmxlX3dyYXAgLmhlYWRpbmdfd3JhcCAuZG93bmxvYWRfaW1nIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjpiZWZvcmUsIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCAuaGVhZGluZ193cmFwIC5kb3dubG9hZF9pbWcgLmljb24taW5mby10b29sdGlwOmhvdmVyOmFmdGVyLCAucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuZHFyX3RhYmxlX3dyYXAgLmhlYWRpbmdfd3JhcCAuZG93bmxvYWRfaW1nIC5pY29uLWluZm8tdG9vbHRpcDpmb2N1czpiZWZvcmUsIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCAuaGVhZGluZ193cmFwIC5kb3dubG9hZF9pbWcgLmljb24taW5mby10b29sdGlwOmZvY3VzOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xuICB6LWluZGV4OiAxMDA7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuZHFyX3RhYmxlX3dyYXAgLmhlYWRpbmdfd3JhcCAuZG93bmxvYWRfaW1nIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjpiZWZvcmUsIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCAuaGVhZGluZ193cmFwIC5kb3dubG9hZF9pbWcgLmljb24taW5mby10b29sdGlwOmZvY3VzOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuZHFyX3RhYmxlX3dyYXAgLmhlYWRpbmdfd3JhcCAuZG93bmxvYWRfaW1nIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjphZnRlciwgLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmRxcl90YWJsZV93cmFwIC5oZWFkaW5nX3dyYXAgLmRvd25sb2FkX2ltZyAuaWNvbi1pbmZvLXRvb2x0aXA6Zm9jdXM6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCAuaGVhZGluZ193cmFwIC5kb3dubG9hZF9pbWcgLmljb24taW5mby10b29sdGlwOmJlZm9yZSB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMWVtIDAuNzVlbSAwIDAuNzVlbTtcbiAgYm9yZGVyLWNvbG9yOiAjYmFiYmJiIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBib3R0b206IDEwMCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbi1sZWZ0OiAtMC41ZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpLCBvcGFjaXR5IDAuNjVzIDAuNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKC05MCUpO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmRxcl90YWJsZV93cmFwIC5oZWFkaW5nX3dyYXAgLmRvd25sb2FkX2ltZyAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjYmFiYmJiO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIGJvdHRvbTogMTgwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXApO1xuICBtYXJnaW4tbGVmdDogLTI2cHg7XG4gIHBhZGRpbmc6IDdweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNikgMC4ycztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoNTAlKTtcbiAgbWluLXdpZHRoOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmRxcl90YWJsZV93cmFwIC5oZWFkaW5nX3dyYXAgLmRvd25sb2FkX2ltZyAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xuICAgIHdpZHRoOiAxMGVtO1xuICB9XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuZHFyX3RhYmxlX3dyYXAgLmhlYWRpbmdfd3JhcCAuZG93bmxvYWRfaW1nIC5pY29uLWluZm8tdG9vbHRpcCAuaW1nX2Rvd25sb2FkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCAuZHItdGFibGUge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCAuZHItdGFibGUgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCAuZHItdGFibGUgLnRhYmxlLWhlYWRlciB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEI4OTQ7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCAuZHItdGFibGUgdHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjOTU5Nzk1O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAuZHFyX3RhYmxlX3dyYXAgLmRyLXRhYmxlIHRyIHRoIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVjZWMgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmRxcl90YWJsZV93cmFwIC5kci10YWJsZSB0ciB0aCAudG90YWxiaWxsX3dyYXAgcCB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLmRxcl90YWJsZV93cmFwIC5kci10YWJsZSAuYnV0dG9uLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzk1OTc5NTtcbiAgZm9udC1zaXplOiAxOHB4O1xufSIsIkBpbXBvcnQgXCJzcmMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwic3JjL3Njc3MvbWl4aW5zLnNjc3NcIjtcclxuXHJcbi5tYXQtcGFnaW5hdG9yIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ucGFubmVsLXNlY3Rpb24ge1xyXG4gIC5yZWNvbkxvYWRpbmdEYXRhIHtcclxuICAgIEBpbmNsdWRlIGxvYWRlcjtcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICAucGFnZV9jb250ZW50X2Rhc2gge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIC5maWx0ZXJfaW5wdXRfd3JhcCB7XHJcbiAgICAgICAgLnJvdyB7XHJcbiAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgLnRleHQtZGFuZ2VyIHtcclxuICAgICAgICAgICAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGxhYmVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGVjdCxcclxuICAgICAgICAgICAgLnNlbGVjdGVkX3RleHQge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIHNlbGVjdEJveDtcclxuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgaW5wdXQ7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgIHRvcDogMzdweDtcclxuICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2VsZWN0ZWRfdGV4dCB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI4MS4xMXB4O1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgaW1nLWJveC1zaGFkb3c7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MyU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAuY2hlY2tib3hfd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgY2hlY2tib3g7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogOTMlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkICR0aGVtZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjA2KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2VlX2FsbCB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDIyNnB4O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODIlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFjdGlvbl9idG4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5kcXJfdGFibGVfd3JhcCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgLmxvYWRpbmctY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRvcDogMjAlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWFkaW5nX3dyYXAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIC50YWJsZV9oZWFkaW5nIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRvd25sb2FkX2ltZyB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgICAgICAgIC5pY29uLWluZm8tdG9vbHRpcCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGRlZmF1bHQtdG9vbC10aXA7XHJcbiAgICAgICAgICAgIC5pbWdfZG93bmxvYWR7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5kci10YWJsZSB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YWJsZS1oZWFkZXIge1xyXG4gICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdHIge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgIGNvbG9yOiAjOTU5Nzk1O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWNlYyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIC50b3RhbGJpbGxfd3JhcHtcclxuICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b24tc3R5bGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzk1OTc5NTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiXHJcbi8vIGdsb2JhbC12YXJpYWJsZVxyXG4kaGVhZGVyLWNvbG9yOiAjMjYyNjI2O1xyXG4kYm9keS1iZy1jb2xvcjogI0YzRjNGMztcclxuJHRoZW1lLWNvbG9yOiAjMDBCODk0O1xyXG4kY29sb3ItcmVkOiAjRkY0QjRCO1xyXG4kY29sb3ItdmFsaWQtZXJyb3I6I0U1MzkzNTtcclxuJGNvbG9yLWludmFsaWQtZXJyb3I6I0I3MWMxYztcclxuJGNvbG9yLW1hZ2VudGE6ICNiYzY0OWM7XHJcbiRjb2xvci1waW5rOiAjZjQ5NGM4O1xyXG4kY29sb3ItZ3JlZW46ICM4NEMxNDA7XHJcbiRjb2xvci1saWdodC1ncmVlbjogI0JDRDUzMztcclxuJGNvbG9yLWJsdWU6ICM5NGQwZWE7XHJcbiRjb2xvci1kYXJrLWdyZXk6ICM5QTlBOUE7XHJcbiRjb2xvci1saWdodC1ncmV5OiAjZjlmOWY5O1xyXG4kY29sb3ItZXh0cmEtbGlnaHQtZ3JleTogI0Y0RjRGNDtcclxuJGNvbG9yLW9yYW5nZTogI0UzNzgyNjtcclxuJGNvbG9yLWxpZ2h0LW9yYW5nZTogI0VCOTgyMjtcclxuJGNvbG9yLWV4dHJhLWxpZ2h0LW9yYW5nZTogI0ZDQUYxNztcclxuJGNvbG9yLXdoaXRlOiAjZmZmZmZmO1xyXG4kYm9yZGVyLWNvbG9yOiAjZWVlY2VjO1xyXG4kbm90aWZpY2F0aW9uLWJnOiAjY2VlM2YwO1xyXG4kY29sb3ItbGlnaHQtYmxhY2s6ICM0QTRBNEE7XHJcbiRjb2xvci1ibGFjazogIzAwMDAwMDtcclxuJGNvbG9yLXllbGxvdzogI2Y5ZTkwNztcclxuJGJveC1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsLjIpO1xyXG4kYmxhY2stb3ZlcmxheTogcmdiYSgwLDAsMCwwLjcpO1xyXG4kd2hpdGUtb3ZlcmxheTogcmdiKDI0NywgMjQ3LCAyNDcpO1xyXG4kcGxhY2Vob2xkZXItY29sb3I6ICNhY2FjYWM7XHJcbiRjb2xvci1iYWNrZ3JvdW5kOiAjZTFmYmZhO1xyXG4kY29sb3ItaW5mbzogI0Y3QjUwMDtcclxuJGZvbnQtcm9ib3RvOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtbGlnaHQ6IDMwMDtcclxuJGZvbnQtcmVndWxhcjogNDAwO1xyXG4kZm9udC1ib2xkOiA3MDA7XHJcbiRmb250LWgxOiAzNHB4O1xyXG4kZm9udC1oMjogMzBweDtcclxuJGZvbnQtaDM6IDI0cHg7XHJcbiRmb250LWg0OiAxOHB4O1xyXG4kZm9udC1oNTogMTZweDtcclxuJGZvbnQtaDY6IDE0cHg7XHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/dqr/settlement/settlement.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/dqr/settlement/settlement.component.ts ***!
    \********************************************************/

  /*! exports provided: SettlementComponent */

  /***/
  function srcAppDqrSettlementSettlementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettlementComponent", function () {
      return SettlementComponent;
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


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! angular7-csv/dist/Angular-csv */
    "./node_modules/angular7-csv/dist/Angular-csv.js");
    /* harmony import */


    var angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_12__);

    var SettlementComponent = /*#__PURE__*/function () {
      function SettlementComponent(dataService, globalService, httpClient, modalService, utilityService, router) {
        _classCallCheck(this, SettlementComponent);

        this.dataService = dataService;
        this.globalService = globalService;
        this.httpClient = httpClient;
        this.modalService = modalService;
        this.utilityService = utilityService;
        this.router = router;
        this.displayedColumns = ['storeCode', 'storeName', 'lpaasSales', 'lpaasBills', 'reconLoyalitysales', 'reconNonLoyalitysales', 'reconLoyaltyBills', 'reconNonLoyaltyBills', 'extraBillsinLpaas'];
        this.isLogin = false;
        this.programData = [];
        this.errorMsg = 'Loading! Please wait ...';
        this.errorMsgInfo = false;
        this.arrProgramInfoWithKey = {};
        this.loadingData = true;
        this.arrselectedProgram = [];
        this.allProgram = [];
        this.DqrData = [];
        this.isProgramClicked = false;
        this.isProgramsVisble = false;
        this.isClickedSearch = false;
        this.isMonthSelect = false;
        this.selectedProgramId = [];
        this.searchInProgress = false;
        this.dqrSearchData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableDataSource"]();
        this.isLoading = true;
        this.userDetails = [];
        this.csvOptions = {
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalseparator: '.',
          showLabels: true,
          // showTitle: true,
          // title: 'Digital Recipt summary:',
          useBom: true,
          noDownload: false,
          headers: ["Store Code", "Store Name", "Lpaas Sales", "Lpaas Bills", "Loyality Sales", "Non Loyality Sales", "Loyalty Bills", "Non Loyalty Bills", "Extra Bills In Lpaas"]
        };
      }

      _createClass(SettlementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (localStorage.getItem('userInfo') == null) {
            this.router.navigate(['login']);
          } else {
            this.isLogin = true;
          }

          var details = JSON.parse(localStorage.getItem('userInfo'));
          this.userDetails = details[0];
          this.dataService.getAllProgram(this.userDetails.userID).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJson = JSON.parse(resSTR);

            if (resJson.messageCode == '1' && resJson.data != null) {
              _this.errorMsg = 'Success';

              for (var i = 0; i < resJson.data.length; i++) {
                resJson.data[i].isSelect = false;
                _this.arrProgramInfoWithKey[resJson.data[i].brandId] = resJson.data[i];

                if (resJson.data[i].isDQR) {
                  _this.programData.push(resJson.data[i]);
                }
              }

              _this.utilityService.programSort(_this.programData);

              if (_this.programData.length) {
                _this.loadingData = false;
              }
            } else if (resJson.statusCode == '500') {
              _this.loadingData = false;
              _this.errorMsg = 'Internal Serve Error! Please Try Again...';
            } else if (resJson.statusCode == '200' && resJson.data == null) {
              _this.errorMsg = 'No Data Found! Please Try Again...';
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {// this.dqrSearchData.paginator = this.paginator;
          // this.dqrSearchData.sort = this.sort;
        }
      }, {
        key: "onOpenCalendar",
        value: function onOpenCalendar(container) {
          container.monthSelectHandler = function (event) {
            container._store.dispatch(container._actions.select(event.date));
          };

          container.setViewMode('month');
        }
      }, {
        key: "changeSettData",
        value: function changeSettData(selected) {
          if (selected == '3') {
            this.isMonthSelect = true;
          } else {
            this.isMonthSelect = false;
          }
        }
      }, {
        key: "getProgram",
        value: function getProgram() {
          this.arrselectedProgram = [];
          var arrProgram = [];
          var arrProgramId = [];

          for (var i = 0; i < this.programData.length; i++) {
            if (this.programData[i].isSelect) {
              this.arrselectedProgram.push(this.programData[i]);
              arrProgram.push(this.programData[i].brandName);
              arrProgramId.push(this.programData[i].brandId);
            }
          }

          this.selectedProgram = arrProgram.join();
          this.selectedProgramId = arrProgramId;
        }
      }, {
        key: "getselectedProgram",
        value: function getselectedProgram(data) {
          if (this.arrProgramInfoWithKey[data.brandId].isSelect) {
            this.arrProgramInfoWithKey[data.brandId].isSelect = false;
          } else {
            this.arrProgramInfoWithKey[data.brandId].isSelect = true;
          }

          this.getProgram();
          this.allProgram = this.utilityService.getLetterByFilter(this.programData);
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
          this.globalService.setUploadData(this.programData);
          modalRef.result.then(function (result) {
            _this2.programData = result;

            _this2.getProgram();
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getSearchData",
        value: function getSearchData(searchFilterData) {
          var _this3 = this;

          this.isProgramClicked = false;
          this.isLoading = true;
          this.responceMsg = '';

          if (this.isMonthSelect) {
            searchFilterData.value.FromDate = this.utilityService.convertMonth(searchFilterData.value.FromDate);
            searchFilterData.value.Todate = this.utilityService.convertMonth(searchFilterData.value.Todate);
          }

          this.searchInProgress = true; // searchFilterData.value.Brand_Id = this.selectedProgramId;

          searchFilterData.value.Brand_Id = 'LoveYourBodyClub'; // this.dataService.GetDQRData(searchFilterData.value).subscribe((res: Response) => {
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

          this.dataService.DQRReportData(searchFilterData.value).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJson = JSON.parse(resSTR);
            console.log('dqr', resJson);

            if (resJson.messageCode == '1') {
              _this3.isLoading = false; // for (var i = 0; i < resJson.data.length; i++) {
              //   if (resJson.data[i].settlementMode == 'Auto') {
              //     resJson.data[i].isDqrReport = true;
              //   } else {
              //     resJson.data[i].isDqrReport = false;
              //   }
              // }

              _this3.DqrData = resJson.data;
              console.log('dqr==', _this3.DqrData);
              _this3.responceMsg = _this3.utilityService.getMessageFromResponce(resJson);
            } else {
              _this3.isLoading = false;
              _this3.responceMsg = _this3.utilityService.getMessageFromResponce(resJson);
            }
          });
        }
      }, {
        key: "downloadBillSummary",
        value: function downloadBillSummary() {
          new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_12__["AngularCsv"](this.DqrData, "DQR Summary", this.csvOptions);
        }
      }]);

      return SettlementComponent;
    }();

    SettlementComponent.ctorParameters = function () {
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

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], {
      "static": false
    })], SettlementComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"], {
      "static": false
    })], SettlementComponent.prototype, "sort", void 0);
    SettlementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-settlement',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settlement.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dqr/settlement/settlement.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settlement.component.scss */
      "./src/app/dqr/settlement/settlement.component.scss"))["default"]]
    })], SettlementComponent);
    /***/
  }
}]);
//# sourceMappingURL=dqr-dqr-module-es5.js.map