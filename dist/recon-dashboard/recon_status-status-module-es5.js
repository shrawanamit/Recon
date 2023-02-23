function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recon_status-status-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recon_status/status/status.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recon_status/status/status.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecon_statusStatusStatusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- card-panel styles -->\r\n<section class=\"pannel-section\">\r\n    <div class=\"reconLoadingData\" *ngIf=\"loadingData\">\r\n        <button class=\"btn btn-dark\">\r\n            <span class=\"text-light spinner-border spinner-border-sm\"></span>\r\n            Loading! Please wait ...\r\n        </button>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"page_content_dash\">\r\n            <div class=\"filter_input_wrap\" *ngIf=\"!isClickedSearch\">\r\n                <form #searchFilter=\"ngForm\" name=\"form\"\r\n                    (ngSubmit)=\"searchFilter.form.valid && getSearchData(searchFilter);\" novalidate>\r\n                    <div class=\"row\">\r\n                        <div class=\"form-group col-3\">\r\n                            <label>Select Program</label>\r\n                            <div class=\"selected_text\" (click)=\"isProgramClicked=!isProgramClicked\">\r\n                                {{selectedProgram}}\r\n                                <input type=\"hidden\" name=\"programName\" [(ngModel)]=\"selectedProgram\"\r\n                                    [value]=\"selectedProgram\" required #selectedProg=\"ngModel\">\r\n                            </div>\r\n                            <div\r\n                                *ngIf=\"searchFilter.submitted || selectedProg.invalid && (selectedProg.dirty || selectedProg.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"selectedProg.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Please Select Program.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"dropdown_multiselect\" *ngIf=\"isProgramClicked\">\r\n                                <ul>\r\n                                    <li *ngFor=\"let program of tenantCode;let i = index\">\r\n                                        <div class=\"checkbox_wrap\">\r\n                                            <div class=\"form-group\">\r\n                                                <input type=\"radio\" id=\"{{program.brandId}}\" name=\"brandName\"\r\n                                                    (change)=\"getselectedProgram(program)\" [checked]=\"program.isSelect\">\r\n                                                <label for=\"{{program.brandId}}\">{{program.brandName}}</label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </li>\r\n                                </ul>\r\n                                <div class=\"text-center see_all\" (click)=\"seeAllPrograms()\">\r\n                                    <p>See All Program</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"form-group col-2\">\r\n                            <label>Select Month</label>\r\n                            <input [(ngModel)]=\"requetDate\" autocomplete=\"off\" name=\"requetDate\" bsDatepicker\r\n                                [bsConfig]=\"{dateInputFormat: 'MM/YYYY'}\" (onShown)=\"onOpenCalendar($event)\" required>\r\n                            <img src=\"assets/images/calendar.svg\" (onShown)=\"onOpenCalendar($event)\">\r\n                            <!-- #fromDate=\"ngModel\" -->\r\n                        </div>\r\n\r\n                        <div class=\"form-group col-2 action_btn\">\r\n                            <button type=\"submit\">\r\n                                <span *ngIf=\"searchInProgress && isLoading\"\r\n                                    class=\"text-light spinner-border spinner-border-sm\" role=\"status\"\r\n                                    aria-hidden=\"true\"></span>\r\n                                Search</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"mt-4 digital-reciept\" *ngIf=\"isTableData\">\r\n        <div class=\"container\">\r\n            <div class=\"card\">\r\n                <div class='card-body'>\r\n                    <div class=\"title d-flex justify-content-between\">\r\n                        <div class=\"table_heading_wrap\">\r\n                            <h3>Recon Status Summary</h3>\r\n                            <div>\r\n                                <small class=\"icon-info-tooltip\" data-tip=\"Recon status summary\" tabindex=\"2\">\r\n                                    <img class=\"img_refresh\" src=\"/assets/images/downloadTable.svg\"\r\n                                        (click)=\"downloadCSV()\">\r\n                                </small>\r\n                            </div>\r\n                            <!-- <button (click)=\"downloadCSV()\" class=\"btndownload\">Download table</button> -->\r\n                        </div>\r\n                        <div>\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\r\n                                (click)=\"backbutton()\">&times;</button>\r\n                        </div>\r\n\r\n\r\n                        <!-- <div *ngIf=\"dataNotFoundMsg\" class=\"d-flex justify-content-center mt-4 \">sorry!! no data found</div> -->\r\n                    </div>\r\n\r\n                    <div class='mt-4 dr-table'>\r\n                        <!-- <div class=\"reconLoadingData\" *ngIf=\"loadingData\">\r\n                            <button class=\"btn btn-dark\">\r\n                                <span class=\"text-light spinner-border spinner-border-sm\"></span>\r\n                                <span>Loading! Please wait ...</span>\r\n                            </button>\r\n                        </div> -->\r\n\r\n                        <table>\r\n                            <tbody>\r\n                                <tr class=\"table-header mobile-table\">\r\n                                    <th>program&nbsp;Name</th>\r\n                                    <th>Process&nbsp;Date</th>\r\n                                    <th>Status</th>\r\n                                    <th>Remarks</th>\r\n                                    <th>Remark&nbsp;Submission&nbsp;Date</th>\r\n                                    <th>Threshold&nbsp;Exceed</th>\r\n                                </tr>\r\n                                <tr class=\"mobile-table-tr\" *ngFor=\"let inoviceDatas of reconSummary;let i = index\">\r\n                                    <th>{{inoviceDatas.programName}}</th>\r\n                                    <th>{{inoviceDatas.recon_ProcessDate | date}}</th>\r\n                                    <th>\r\n                                        <span *ngIf=\"inoviceDatas.isIssue == 0 || inoviceDatas.isIssue == 1\">Not checked</span>\r\n                                        <span *ngIf=\"inoviceDatas.isIssue == 2\">No issue</span>\r\n                                        <span *ngIf=\"inoviceDatas.isIssue == 3 || inoviceDatas.isIssue == 4\">There was some issue</span>\r\n                                       \r\n                                    </th>\r\n                                    <th>{{inoviceDatas.remarks}}</th>\r\n                                    <th>{{inoviceDatas.remarkSubMissionDate | date}}</th>\r\n                                    <th ><span *ngIf=\"inoviceDatas.isThresholExceed == 0\">No</span>\r\n                                        <span *ngIf=\"inoviceDatas.isThresholExceed == 1\">Yes</span>\r\n                                        \r\n                                        </th>\r\n                                </tr>\r\n\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</section>";
    /***/
  },

  /***/
  "./src/app/recon_status/status-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/recon_status/status-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: statusRoutingModule */

  /***/
  function srcAppRecon_statusStatusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "statusRoutingModule", function () {
      return statusRoutingModule;
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


    var _status_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./status/status.component */
    "./src/app/recon_status/status/status.component.ts");

    var routes = [{
      path: 'recon_status',
      component: _status_status_component__WEBPACK_IMPORTED_MODULE_3__["StatusComponent"]
    }];

    var statusRoutingModule = function statusRoutingModule() {
      _classCallCheck(this, statusRoutingModule);
    };

    statusRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], statusRoutingModule);
    /***/
  },

  /***/
  "./src/app/recon_status/status.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/recon_status/status.module.ts ***!
    \***********************************************/

  /*! exports provided: statusModule */

  /***/
  function srcAppRecon_statusStatusModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "statusModule", function () {
      return statusModule;
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


    var _status_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./status/status.component */
    "./src/app/recon_status/status/status.component.ts");
    /* harmony import */


    var _status_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./status-routing.module */
    "./src/app/recon_status/status-routing.module.ts");
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


    Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_51__["setTheme"])('bs4');

    var statusModule = function statusModule() {
      _classCallCheck(this, statusModule);
    };

    statusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_status_status_component__WEBPACK_IMPORTED_MODULE_3__["StatusComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _status_routing_module__WEBPACK_IMPORTED_MODULE_4__["statusRoutingModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_7__["ShowHidePasswordModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_50__["BsDatepickerModule"].forRoot(), angular_datatables__WEBPACK_IMPORTED_MODULE_49__["DataTablesModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_48__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_47__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_46__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_45__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_44__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_43__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_42__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_41__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_40__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_39__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_38__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_37__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_36__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_35__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_33__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_32__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_31__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_29__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_24__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_14__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollingModule"], ngx_mat_daterange_picker__WEBPACK_IMPORTED_MODULE_11__["NgxMatDrpModule"]],
      exports: [_status_status_component__WEBPACK_IMPORTED_MODULE_3__["StatusComponent"]],
      entryComponents: []
    })], statusModule);
    /***/
  },

  /***/
  "./src/app/recon_status/status/status.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/recon_status/status/status.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecon_statusStatusStatusComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* clearfix style */\nimg {\n  max-width: 100%;\n  height: auto;\n}\n/*== start of code for tooltips ==*/\n.mat-paginator {\n  display: block;\n  width: 100%;\n}\n.pannel-section .reconLoadingData {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.7);\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n}\n.pannel-section .reconLoadingData button {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 999;\n}\n.pannel-section .container .page_content_dash {\n  background: #ffffff;\n  margin: 20px auto;\n  padding: 10px;\n  border-radius: 5px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group {\n  position: relative;\n  margin-bottom: 25px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .text-danger {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n}\n@media (max-width: 991px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .text-danger {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .text-danger {\n    font-size: 14px;\n  }\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group label {\n  padding: 0px;\n  margin: 0px;\n  color: #9A9A9A;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  display: block;\n  margin-bottom: 5px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group label.disable {\n  cursor: not-allowed;\n}\n@media (max-width: 576px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group label {\n    font-size: 14px;\n  }\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group select,\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .selected_text {\n  -webkit-appearance: none;\n  -mos-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url('list.svg') right no-repeat;\n  background-position: right 0.7em top 50%, 0 0;\n  color: #4A4A4A;\n  display: inline-block;\n  padding: 5px;\n  outline: none;\n  box-shadow: none;\n  margin: 0 auto;\n  background-color: #f9f9f9;\n  font-size: 16px;\n  font-weight: 300;\n  min-width: 95px;\n  border: 1px solid #eeecec;\n  width: 100%;\n  line-height: 29px;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n@media (max-width: 576px) {\n  .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group select,\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .selected_text {\n    margin-bottom: 10px;\n  }\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input {\n  background: #f9f9f9;\n  outline: 0;\n  box-shadow: none;\n  border: 1px solid #eeecec;\n  padding: 5px;\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 300;\n  border-radius: 3px;\n  line-height: 29px;\n  margin: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-webkit-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-moz-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-ms-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-webkit-inner-spin-button, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group img {\n  position: absolute;\n  right: 25px;\n  top: 37px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .selected_text {\n  height: 41px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 281.11px;\n  padding-right: 25px;\n  cursor: pointer;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0.5px;\n  -moz-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0.5px;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #ffffff;\n  position: absolute;\n  width: 82%;\n  top: 70px;\n  z-index: 99;\n  height: 200px;\n  overflow-y: auto;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li {\n  padding: 10px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap {\n  position: relative;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) {\n  position: absolute;\n  opacity: 0;\n  top: 5px;\n  z-index: 99;\n  cursor: pointer;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) + label {\n  position: relative;\n  padding-left: 28px;\n  cursor: pointer;\n  line-height: 20px;\n  display: inline-block;\n  color: #4A4A4A;\n  font-size: 14px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label:before, .pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) + label:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #4A4A4A;\n  border-radius: 100%;\n  background: #ffffff;\n  opacity: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label:after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background: #00B894;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) + label:after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background: #00B894;\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n  opacity: 0;\n  transform: scale(0);\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label:after {\n  opacity: 1;\n  transform: scale(1);\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap label {\n  width: 100%;\n  padding-left: 0 !important;\n  text-transform: capitalize;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap label:before {\n  left: 93% !important;\n  border: none !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap label:after {\n  left: 90% !important;\n  background: none !important;\n  border: none !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap .form-group {\n  margin-bottom: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap .form-group input[type=radio]:checked + label {\n  color: #00B894;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li .checkbox_wrap .form-group input[type=radio]:checked + label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 3px !important;\n  right: 13px !important;\n  width: 7px !important;\n  height: 14px !important;\n  border: solid #00B894 !important;\n  border-width: 0 2px 2px 0 !important;\n  transform: rotate(45deg) !important;\n  border-radius: 0% !important;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect ul li:hover {\n  background-color: rgba(0, 184, 148, 0.06);\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect .see_all {\n  position: absolute;\n  top: 239px;\n  z-index: 99;\n  width: 82%;\n  left: 15px;\n  padding: 10px;\n  background: #ffffff;\n  cursor: pointer;\n  color: #00B894;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .form-group .dropdown_multiselect .see_all p {\n  margin: 0 auto;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn {\n  display: inline-flex;\n  align-items: flex-start;\n  margin: 0;\n  margin-top: 26px;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  margin: 0;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button:focus {\n  outline: none;\n}\n.pannel-section .container .page_content_dash .filter_input_wrap .row .action_btn button:visited {\n  color: #ffffff;\n}\n.pannel-section .container .dqr_table_wrap {\n  position: relative;\n}\n.pannel-section .container .dqr_table_wrap .loading-container {\n  position: absolute;\n  left: 50%;\n  top: 20%;\n  z-index: 99;\n}\n.pannel-section .digital-reciept .container .card {\n  border: 1px solid #ffffff;\n}\n.pannel-section .digital-reciept .container .card .title {\n  color: #6a6a6a;\n}\n.pannel-section .digital-reciept .container .card .title .table_heading_wrap {\n  display: flex;\n}\n.pannel-section .digital-reciept .container .card .title .table_heading_wrap h3 {\n  font-size: 22px;\n  font-weight: 500;\n}\n.pannel-section .digital-reciept .container .card .title .table_heading_wrap .img_refresh {\n  padding-left: 6px;\n}\n.pannel-section .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip {\n  cursor: help;\n  position: relative;\n  outline: none;\n}\n.pannel-section .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:before, .pannel-section .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:after {\n  left: 50%;\n  opacity: 0;\n  position: absolute;\n  z-index: -100;\n}\n.pannel-section .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:hover:before, .pannel-section .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:hover:after, .pannel-section .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:focus:before, .pannel-section .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:focus:after {\n  opacity: 1;\n  transform: scale(1) translateY(0);\n  z-index: 100;\n}\n.pannel-section .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:hover:before, .pannel-section .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:focus:before {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n}\n.pannel-section .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:hover:after, .pannel-section .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:focus:after {\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26);\n}\n.pannel-section .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:before {\n  border-style: solid;\n  border-width: 1em 0.75em 0 0.75em;\n  border-color: #babbbb transparent transparent transparent;\n  bottom: 100%;\n  content: \"\";\n  margin-left: -0.5em;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26), opacity 0.65s 0.5s;\n  transform: scale(0.6) translateY(-90%);\n}\n.pannel-section .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:after {\n  background: #babbbb;\n  border-radius: 0.25em;\n  bottom: 180%;\n  color: #ffffff;\n  content: attr(data-tip);\n  margin-left: -26px;\n  padding: 7px;\n  transition: all 0.65s cubic-bezier(0.84, -0.18, 0.31, 1.26) 0.2s;\n  transform: scale(0.6) translateY(50%);\n  min-width: 15px;\n  text-align: center;\n}\n@media (max-width: 767px) {\n  .pannel-section .digital-reciept .container .card .title .table_heading_wrap .icon-info-tooltip:after {\n    font-size: 0.75em;\n    margin-left: -5em;\n    width: 10em;\n  }\n}\n.pannel-section .digital-reciept .container .card .title input {\n  background: #f9f9f9;\n  border: 1px solid #f9f9f9;\n  outline: none;\n  color: #959795;\n}\n.pannel-section .digital-reciept .container .card .dr-table {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.pannel-section .digital-reciept .container .card .dr-table table {\n  width: 100%;\n  text-align: left;\n}\n.pannel-section .digital-reciept .container .card .dr-table .table-header th {\n  background-color: #00B894;\n  line-height: 25px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  vertical-align: middle;\n  padding: 10px;\n  border: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.pannel-section .digital-reciept .container .card .dr-table tr {\n  background-color: white;\n  line-height: 30px;\n  color: #959795;\n  font-size: 13px;\n  font-weight: 300;\n}\n.pannel-section .digital-reciept .container .card .dr-table tr th {\n  min-width: 100px;\n  background-color: #ffffff;\n  padding: 10px;\n  text-transform: capitalize !important;\n  border-bottom: 1px solid #eeecec !important;\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  vertical-align: middle;\n}\n.pannel-section .digital-reciept .container .card .dr-table .button-style {\n  background: none;\n  border: none;\n  outline: none;\n  color: #959795;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb25fc3RhdHVzL3N0YXR1cy9EOlxccmVjb25OZXdcXFJlY29uX0Rhc2hib2FyZC9zcmNcXHNjc3NcXG1peGlucy5zY3NzIiwic3JjL2FwcC9yZWNvbl9zdGF0dXMvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVjb25fc3RhdHVzL3N0YXR1cy9EOlxccmVjb25OZXdcXFJlY29uX0Rhc2hib2FyZC9zcmNcXGFwcFxccmVjb25fc3RhdHVzXFxzdGF0dXNcXHN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVjb25fc3RhdHVzL3N0YXR1cy9EOlxccmVjb25OZXdcXFJlY29uX0Rhc2hib2FyZC9zcmNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFBO0FBaUJBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNmRjtBRHdvQkEsbUNBQUE7QUV6b0JBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QURLSjtBQ0ZJO0VGd0RGLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSw4QkcxQ2M7RUgyQ2QsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ2xERjtBRG1ERTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUNqREo7QUNqQlE7RUFDSSxtQkNNRTtFRExGLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FEbUJaO0FDaEJvQjtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QURrQnhCO0FDakJ3QjtFRmlPdEIscUJBQUE7RUFDQSxjR2xPa0I7RUhtT2xCLGVBQUE7RUFDQSxnQkd6TmE7RUgwTmIsaUJBQUE7RUFDQSxpQ0c3Tlk7RUg4TlosZ0JBQUE7RUFDQSxjQUFBO0FDN01GO0FEUkk7RUVuQm9CO0lGMk9wQixrQkFBQTtFQzVNRjtBQUNGO0FEekJJO0VFUG9CO0lGK09wQixlQUFBO0VDM01GO0FBQ0Y7QUNsQ3dCO0VGNmdCdEIsWUFBQTtFQUNBLFdBQUE7RUFDQSxjRzNoQmdCO0VINGhCaEIsZUFBQTtFQUNBLGdCRzFnQlc7RUgyZ0JYLGlDRzVnQlk7RUg2Z0JaLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDeGVGO0FEeWVFO0VBQ0UsbUJBQUE7QUN2ZUo7QUQ1Q0k7RUVKb0I7SUYwaEJwQixlQUFBO0VDdGVGO0FBQ0Y7QUNsRHdCOztFRjhldEIsd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsY0cxZmtCO0VIMmZsQixxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJHeGdCaUI7RUh5Z0JqQixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFRTlmMEIsMEJBQUE7QUR1RTVCO0FEekVJO0VFRG9COztJRm9nQnBCLG1CQUFBO0VDcmJGO0FBQ0Y7QUMzRXdCO0VGMFF0QixtQkc3UmlCO0VIOFJqQixVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUVuUjBCLFNBQUE7QUR3RjVCO0FENkxFO0VBQ0UsY0c3UmdCO0VIOFJoQixlQUFBO0FDM0xKO0FEeUxFO0VBQ0UsY0c3UmdCO0VIOFJoQixlQUFBO0FDM0xKO0FEeUxFO0VBQ0UsY0c3UmdCO0VIOFJoQixlQUFBO0FDM0xKO0FEeUxFO0VBQ0UsY0c3UmdCO0VIOFJoQixlQUFBO0FDM0xKO0FENkxFO0VBRUUsd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQzVMSjtBQy9Gd0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FEaUc1QjtBQzlGd0I7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QURnRzVCO0FDNUY0QjtFRmtnQjFCLGdEQUFBO0VBQ0EscURBQUE7RUFDQSxrREFBQTtFRWxnQjhCLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkN6Q2xCO0VEMENrQixrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBRGdHaEM7QUMvRmdDO0VBQ0ksYUFBQTtBRGlHcEM7QUNoR29DO0VGaXhCbEMsa0JBQUE7QUM5cUJGO0FEaXJCSTtFQUVFLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ2pyQk47QURvckJJO0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0dwMUJjO0VIcTFCZCxlQUFBO0FDbnJCTjtBRHdyQk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CR3QyQk07RUh1MkJOLFVBQUE7QUN0ckJSO0FEMnJCTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CRy8zQk07RUhnNEJOLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0FDenJCUjtBRDhyQk07RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkc5NEJNO0VIKzRCTixrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtFQUNBLFVBQUE7RUFFQSxtQkFBQTtBQzVyQlI7QURpc0JNO0VBQ0UsVUFBQTtFQUVBLG1CQUFBO0FDL3JCUjtBQzVKd0M7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFVQSwwQkFBQTtBRHFKNUM7QUM5SjRDO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtBRGdLaEQ7QUM5SjRDO0VBQ0ksb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FEZ0toRDtBQzVKd0M7RUFDSSxnQkFBQTtBRDhKNUM7QUM1SmdEO0VBQ0ksY0N0RnRDO0FGb1BkO0FDN0pvRDtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0FEK0p4RDtBQ3pKb0M7RUFDSSx5Q0FBQTtBRDJKeEM7QUN2SjRCO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQ3JHbEI7RURzR2tCLGVBQUE7RUFDQSxjQ3RIbEI7QUYrUWQ7QUN4SmdDO0VBQ0ksY0FBQTtBRDBKcEM7QUNySm9CO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBRHVKeEI7QUN0SndCO0VGb050Qix5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjRzVVWTtFSDZVWixxQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CRy9WWTtFSGdXWixhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VFL04wQixTQUFBO0FEcUs1QjtBRDRERTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNEQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDMURKO0FENkRFO0VBQ0UsYUFBQTtBQzNESjtBRDZERTtFQUNFLGNHbFdVO0FGdVNkO0FDNUtRO0VBQ0ksa0JBQUE7QUQ4S1o7QUM3S1k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBRCtLaEI7QUN6S1U7RUFDRSx5QkFBQTtBRDJLWjtBQzFLWTtFQUNFLGNBQUE7QUQ0S2Q7QUMzS2M7RUFDRSxhQUFBO0FENktoQjtBQzVLZ0I7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUQ4S2xCO0FDM0tnQjtFQUNFLGlCQUFBO0FENktsQjtBQ3pLZ0I7RUZvZWQsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ3hURjtBRDBURTtFQUVFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDelRKO0FEOFRJO0VBRUUsVUFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQzdUTjtBRGdVSTtFQUNFLGdFQUFBO0FDOVROO0FEaVVJO0VBQ0UsMkRBQUE7QUMvVE47QURtVUU7RUFDRSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EseURBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0VBQUE7RUFDQSxzQ0FBQTtBQ2pVSjtBRG9VRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0d4cUJVO0VIeXFCVix1QkFBQTtFQUVBLGtCQUFBO0VBRUEsWUFBQTtFQUNBLGdFQUFBO0VBQ0EscUNBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7QUNyVUo7QUQvVkk7RUF3cUJBO0lBQ0UsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7RUN0VUo7QUFDRjtBQ3hOYztFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBRDBOaEI7QUN0Tlk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FEd05kO0FDdk5jO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FEeU5oQjtBQ3ROZ0I7RUFDRSx5QkM1TEo7RUQ2TEksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0FEd05sQjtBQ3JOYztFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEc05oQjtBQ3JOZ0I7RUFDRSxnQkFBQTtFQUNBLHlCQ2xNSjtFRG1NSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSwyQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUR1TmxCO0FDcE5jO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEc05oQiIsImZpbGUiOiJzcmMvYXBwL3JlY29uX3N0YXR1cy9zdGF0dXMvc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogY2xlYXJmaXggc3R5bGUgKi9cclxuXHJcbi8vIENsZWFyZml4IG1peGluXHJcbiVjbGVhcmZpeCB7XHJcbiAgKnpvb206IDE7XHJcblxyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICB9XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8vIERlZmluZSB0aGUgYnJlYWtwb2ludHNcclxuQG1peGluIGJyZWFrcG9pbnQoJHBvaW50KSB7XHJcbiAgQGlmICRwb2ludD09c21hbGwtZGV2aWNlIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09bW9iaWxlIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09dGFibGV0IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09dGFibGV0MCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldHBybyB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PWlwYWQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1sYXB0b3Age1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09bGFwdG9wbWF4IHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PWRlc2t0b3Age1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLy9sb2FkZXJcclxuQG1peGluIGxvYWRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBiYWNrZ3JvdW5kOiAkYmxhY2stb3ZlcmxheTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBidXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICB9XHJcbn1cclxuLy8ganVzdGlmeS1jb250ZW50IG1peGluXHJcblxyXG5AbWl4aW4ganVzdGlmeS1jb250ZW50KCRqdXN0aWZ5KSB7XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIC1tb3otanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAtbXMtanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIC1tcy1mbGV4LXBhY2s6ICRqdXN0aWZ5O1xyXG59XHJcblxyXG4vLyBhbGlnbi1pdGVtcyBtaXhpblxyXG5cclxuQG1peGluIGFsaWduLWl0ZW1zKCRhbGlnbi1ob3Jpem9udGFsbHkpIHtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiAkYWxpZ24taG9yaXpvbnRhbGx5O1xyXG4gIC1tb3otYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbiAgLW1zLWFsaWduLWl0ZW1zOiAkYWxpZ24taG9yaXpvbnRhbGx5O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ24taG9yaXpvbnRhbGx5O1xyXG59XHJcblxyXG4vLyBUcmFuc2l0aW9uIG1peGluXHJcblxyXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbikge1xyXG4gIC1tb3otdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgLW8tdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICB0cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxufVxyXG5cclxuLy8gVHJhbnNmb3JtIG1peGluXHJcblxyXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm0pIHtcclxuICAtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuICAtby10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbiAgdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG59XHJcblxyXG5AbWl4aW4gZmxleCB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tb3otZmxleDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5AbWl4aW4gYm94LXNoYWRvdygkYXJncykge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkYXJncztcclxuICAtbXMtYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgYm94LXNoYWRvdzogJGFyZ3M7XHJcbn1cclxuXHJcbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXMpIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbn1cclxuXHJcbi8vUGFkZGluZyBtaXhpblxyXG5AbWl4aW4gcGFkZGluZygkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KSB7XHJcbiAgcGFkZGluZy10b3A6ICR0b3A7XHJcbiAgcGFkZGluZy1yaWdodDogJHJpZ2h0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAkYm90dG9tO1xyXG4gIHBhZGRpbmctbGVmdDogJGxlZnQ7XHJcbn1cclxuXHJcbi8vTWFyZ2luIG1peGluXHJcbkBtaXhpbiBtYXJnaW4oJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCkge1xyXG4gIG1hcmdpbi10b3A6ICR0b3A7XHJcbiAgbWFyZ2luLXJpZ2h0OiAkcmlnaHQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogJGJvdHRvbTtcclxuICBtYXJnaW4tbGVmdDogJGxlZnQ7XHJcbn1cclxuXHJcbi8vcG9zaXRpb24gbWl4aW5cclxuQG1peGluIHBvc2l0aW9uKCRwb3NpdGlvbiwgJHRvcDogbnVsbCwgJHJpZ2h0OiBudWxsLCAkYm90dG9tOiBudWxsLCAkbGVmdDogbnVsbCkge1xyXG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XHJcbiAgdG9wOiAkdG9wO1xyXG4gIHJpZ2h0OiAkcmlnaHQ7XHJcbiAgYm90dG9tOiAkYm90dG9tO1xyXG4gIGxlZnQ6ICRsZWZ0O1xyXG59XHJcblxyXG5AbWl4aW4gaGVhZGluZy1IMSB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGhlYWRpbmctSDIge1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLUgzIHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gaGVhZGluZy1INCB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1yZWd1bGFyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBwYXJhZ3JhcGgge1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtcmVndWxhcjtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNvbG9yQm94IHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib2R5LWJnLWNvbG9yO1xyXG4gIC8vIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDFweCA0cHggMC41cHg7IDtcclxufVxyXG5cclxuQG1peGluIGFuY2hvciB7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG5cclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMsXHJcbiAgJjphY3RpdmUge1xyXG4gICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgJjp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBkZWZhdWx0IGlucHV0IHR5cGUgYW55XHJcbkBtaXhpbiBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBsaW5lLWhlaWdodDogMjlweDtcclxuXHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICRwbGFjZWhvbGRlci1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuICAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vL3RleHRhcmVhXHJcbkBtaXhpbiB0ZXh0YXJlYSB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIHBhZGRpbmc6IDZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuXHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICRwbGFjZWhvbGRlci1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIGRlZmF1bHQgYnV0dG9uXHJcbkBtaXhpbiBidXR0b24ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogOXB4IDE1cHggOXB4O1xyXG4gIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxN3B4IDEwcHggLTEwcHggcmdiYSgkdGhlbWUtY29sb3IsIDAuMyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMzAwbXM7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJ1dHRvbjEge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogOXB4IDE1cHggOXB4O1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1saWdodC1ncmV5O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKCR0aGVtZS1jb2xvciwgMC4zKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBib3ggZHJfc3VtbWFyeVxyXG5AbWl4aW4gYm94IHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyMCUpIDBweCAxcHggNHB4IDAuNXB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5AbWl4aW4gbW9uX25hbWUge1xyXG4gIC8vIHBhZGRpbmc6IDBweCAwIDBweCAxNXB4O1xyXG5cclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbkBtaXhpbiBtb25fbm8ge1xyXG4gIHBhZGRpbmc6IDBweCAwIDBweCAxMHB4O1xyXG4gIC8vIGNvbG9yOiAjNGE0YTRhO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyBkZWZhdWx0IHByb2R1Y3QtYnV0dG9uXHJcbkBtaXhpbiBwcm9kdWN0LWJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogNXB4IDE0cHggNnB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IDJweCB0cmFuc3BhcmVudDtcclxuICAtby1ib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICAtby1ib3gtc2hhZG93OiAwcHggMnB4IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gcmlnaHQgd2hpdGUgYXJyb3cgaW4gYnV0dG9uXHJcbi8vIEBtaXhpbiBidG5fcmlnaHRfYXJyb3cge1xyXG4vLyAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcblxyXG4vLyAgICY6YWZ0ZXIge1xyXG4vLyAgICAgYmFja2dyb3VuZDogdXJsKCkgbm8tcmVwZWF0O1xyXG4vLyAgICAgd2lkdGg6IDIwcHg7XHJcbi8vICAgICBoZWlnaHQ6IDE3cHg7XHJcbi8vICAgICBjb250ZW50OiBcIlwiO1xyXG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgcmlnaHQ6IDdweDtcclxuLy8gICAgIHRvcDogMTBweDtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vZm9yIGg0IHdpdGggYm90dG9tIGxpbmVcclxuQG1peGluIHRleHRfdW5kZXJsaW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAycHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL2ZvciBzZWxlY3QgdGFnXHJcblxyXG5AbWl4aW4gc2VsZWN0Qm94IHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vcy1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHVybChzcmMvYXNzZXRzL2ltYWdlcy9saXN0LnN2ZykgcmlnaHQgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDAuN2VtIHRvcCA1MCUsIDAgMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ncmV5O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1pbi13aWR0aDogOTVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy9sYWJlbFxyXG5AbWl4aW4gbGFiZWwge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBjb2xvcjogJGNvbG9yLWRhcmstZ3JleTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgJi5kaXNhYmxlIHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vL2ltYWdlIGJveCBzaGFkb3dcclxuQG1peGluIGltZy1ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdy1jb2xvciAwcHggMXB4IDRweCAwLjVweDtcclxuICAtbW96LWJveC1zaGFkb3c6ICRib3gtc2hhZG93LWNvbG9yIDBweCAxcHggNHB4IDAuNXB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogJGJveC1zaGFkb3ctY29sb3IgMHB4IDFweCA0cHg7XHJcbn1cclxuXHJcbi8vY2hlY2tib3hcclxuXHJcbkBtaXhpbiBjaGVja2JveCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMnB4O1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IDZweDtcclxuICAgICAgdG9wOiAxcHg7XHJcbiAgICAgIGxlZnQ6IDcuNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDE5cHg7XHJcbiAgICAgIGhlaWdodDogMTlweDtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XHJcbiAgICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy90b29sLXRpcFxyXG5cclxuLyo9PSBzdGFydCBvZiBjb2RlIGZvciB0b29sdGlwcyA9PSovXHJcbkBtaXhpbiBkZWZhdWx0LXRvb2wtdGlwIHtcclxuICBjdXJzb3I6IGhlbHA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICY6YmVmb3JlLFxyXG4gICY6YWZ0ZXIge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xMDA7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgJjpiZWZvcmUsXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KSAwLjJzO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFlbSAwLjc1ZW0gMCAwLjc1ZW07XHJcbiAgICBib3JkZXItY29sb3I6ICNiYWJiYmIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0wLjVlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpLCBvcGFjaXR5IDAuNjVzIDAuNXM7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNikgdHJhbnNsYXRlWSgtOTAlKTtcclxuICB9XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2JhYmJiYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICAgIGJvdHRvbTogMTgwJTtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGlwKTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAtOC43NWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNnB4O1xyXG4gICAgLy8gcGFkZGluZzogNXB4O1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNikgMC4ycztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgICAvLyB3aWR0aDogMTcuNWVtO1xyXG4gICAgbWluLXdpZHRoOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXQpIHtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBmb250LXNpemU6IDAuNzVlbTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC01ZW07XHJcbiAgICAgIHdpZHRoOiAxMGVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9saXN0IHN0eWxlXHJcblxyXG5AbWl4aW4gbGlzdHN0eWxlIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctbGVmdDogMThweDtcclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCIuXCI7XHJcbiAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDQxcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vL2ZpbGUgdXBsb2FkIGlucHV0XHJcbkBtaXhpbiBmaWxlX2lucHV0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIEBpbmNsdWRlIGJ1dHRvbjtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLy9mb3IgYmxvY2sgbWl4aW5cclxuQG1peGluIGJsb2NrQWxsVGV4dCB7XHJcbiAgaDEge1xyXG4gICAgQGluY2x1ZGUgaGVhZGluZy1IMTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgQGluY2x1ZGUgaGVhZGluZy1IMjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgQGluY2x1ZGUgaGVhZGluZy1IMztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDQge1xyXG4gICAgQGluY2x1ZGUgaGVhZGluZy1INDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBhIHtcclxuICAgICAgQGluY2x1ZGUgYW5jaG9yO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICY6ZW1wdHkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgQGluY2x1ZGUgYW5jaG9yO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYnJlYWRjcnVtYiB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG5cclxuICAuY29udGFpbmVyIHtcclxuICAgIHVsIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGFuY2hvcjtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLy9yYWRpbyBidXR0b25cclxuXHJcbkBtaXhpbiByYWRpbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgICY6Y2hlY2tlZCxcclxuICAgICY6bm90KDpjaGVja2VkKSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgLy8gbGVmdDogNDcuOCU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRvcDogNXB4O1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWl4aW4gcmFkaW8xIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgJjpjaGVja2VkLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA0Ny44JTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdG9wOiA1cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAzcHg7XHJcbiAgICAgICAgbGVmdDogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA0cHg7XHJcbiAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vL2RlZmF1bHQgdGFibGVcclxuQG1peGluIHRhYmxlIHtcclxuICB0YWJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICB0aGVhZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ncmV5O1xyXG4gICAgICB0ciB7XHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIC5pY29uLWluZm8tdG9vbHRpcCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGRlZmF1bHQtdG9vbC10aXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hlY2tib3hfd3JhcCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGNoZWNrYm94O1xyXG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0Ym9keSB7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlci1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWNjZXNzLFxyXG4gICAgICAgICAgLmVycm9yLFxyXG4gICAgICAgICAgLm1hcHBlZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3VjY2VzcyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjA1KTtcclxuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZGlzYWJsZSB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5lcnJvciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLXJlZCwgMC4wNSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcmVkO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXJlZDtcclxuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZGlzYWJsZSB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5tYXBwZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1saWdodC1ibGFjaywgMC4wNSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmRpc2FibGUge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2hlY2tib3hfd3JhcCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGNoZWNrYm94O1xyXG4gICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYW5jaG9yO1xyXG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgQGluY2x1ZGUgaW1nLWJveC1zaGFkb3c7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkdGhlbWUtY29sb3IsIDAuMDUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmljb24taW5mby10b29sdGlwIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGRlZmF1bHQtdG9vbC10aXA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qIGNsZWFyZml4IHN0eWxlICovXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyo9PSBzdGFydCBvZiBjb2RlIGZvciB0b29sdGlwcyA9PSovXG4ubWF0LXBhZ2luYXRvciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhbm5lbC1zZWN0aW9uIC5yZWNvbkxvYWRpbmdEYXRhIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk5OTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAucmVjb25Mb2FkaW5nRGF0YSBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiA5OTk7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2gge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC50ZXh0LWRhbmdlciB7XG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLnRleHQtZGFuZ2VyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLnRleHQtZGFuZ2VyIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCBsYWJlbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjOUE5QTlBO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIGxhYmVsLmRpc2FibGUge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgc2VsZWN0LFxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5zZWxlY3RlZF90ZXh0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW9zLWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL2xpc3Quc3ZnKSByaWdodCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDAuN2VtIHRvcCA1MCUsIDAgMDtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtaW4td2lkdGg6IDk1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVjZWM7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIHNlbGVjdCxcbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuc2VsZWN0ZWRfdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIGlucHV0IHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWNlYztcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gIG1hcmdpbjogMDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FjYWNhYztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLCAucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI1cHg7XG4gIHRvcDogMzdweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuc2VsZWN0ZWRfdGV4dCB7XG4gIGhlaWdodDogNDFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogMjgxLjExcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCA0cHggMC41cHg7XG4gIC1tb3otYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggNHB4IDAuNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDRweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4MiU7XG4gIHRvcDogNzBweDtcbiAgei1pbmRleDogOTk7XG4gIGhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIFt0eXBlPXJhZGlvXTpjaGVja2VkLCAucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIFt0eXBlPXJhZGlvXTpub3QoOmNoZWNrZWQpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDVweDtcbiAgei1pbmRleDogOTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbCwgLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSArIGxhYmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsIC5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRBNEE0QTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQ6ICMwMEI4OTQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogIzAwQjg5NDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBsYWJlbDpiZWZvcmUge1xuICBsZWZ0OiA5MyUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIGxhYmVsOmFmdGVyIHtcbiAgbGVmdDogOTAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuZm9ybS1ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsIHtcbiAgY29sb3I6ICMwMEI4OTQ7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIC5mb3JtLWdyb3VwIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgIzAwQjg5NCAhaW1wb3J0YW50O1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwJSAhaW1wb3J0YW50O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTg0LCAxNDgsIDAuMDYpO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5mb3JtLWdyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCAuc2VlX2FsbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMzlweDtcbiAgei1pbmRleDogOTk7XG4gIHdpZHRoOiA4MiU7XG4gIGxlZnQ6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMwMEI4OTQ7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmZvcm0tZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IC5zZWVfYWxsIHAge1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5wYWdlX2NvbnRlbnRfZGFzaCAuZmlsdGVyX2lucHV0X3dyYXAgLnJvdyAuYWN0aW9uX2J0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAyNnB4O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5hY3Rpb25fYnRuIGJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEI4OTQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDlweCAxNXB4IDlweDtcbiAgYmFja2dyb3VuZDogIzAwQjg5NDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXJnaW46IDA7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmFjdGlvbl9idG4gYnV0dG9uOmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoMCwgMTg0LCAxNDgsIDAuMyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5jb250YWluZXIgLnBhZ2VfY29udGVudF9kYXNoIC5maWx0ZXJfaW5wdXRfd3JhcCAucm93IC5hY3Rpb25fYnRuIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucGFubmVsLXNlY3Rpb24gLmNvbnRhaW5lciAucGFnZV9jb250ZW50X2Rhc2ggLmZpbHRlcl9pbnB1dF93cmFwIC5yb3cgLmFjdGlvbl9idG4gYnV0dG9uOnZpc2l0ZWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuY29udGFpbmVyIC5kcXJfdGFibGVfd3JhcCAubG9hZGluZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAyMCU7XG4gIHotaW5kZXg6IDk5O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG59XG4ucGFubmVsLXNlY3Rpb24gLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC50aXRsZSB7XG4gIGNvbG9yOiAjNmE2YTZhO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGFubmVsLXNlY3Rpb24gLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC50aXRsZSAudGFibGVfaGVhZGluZ193cmFwIGgzIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCAuaW1nX3JlZnJlc2gge1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwIHtcbiAgY3Vyc29yOiBoZWxwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucGFubmVsLXNlY3Rpb24gLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC50aXRsZSAudGFibGVfaGVhZGluZ193cmFwIC5pY29uLWluZm8tdG9vbHRpcDpiZWZvcmUsIC5wYW5uZWwtc2VjdGlvbiAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmFmdGVyIHtcbiAgbGVmdDogNTAlO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xMDA7XG59XG4ucGFubmVsLXNlY3Rpb24gLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC50aXRsZSAudGFibGVfaGVhZGluZ193cmFwIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjpiZWZvcmUsIC5wYW5uZWwtc2VjdGlvbiAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmhvdmVyOmFmdGVyLCAucGFubmVsLXNlY3Rpb24gLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC50aXRsZSAudGFibGVfaGVhZGluZ193cmFwIC5pY29uLWluZm8tdG9vbHRpcDpmb2N1czpiZWZvcmUsIC5wYW5uZWwtc2VjdGlvbiAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmZvY3VzOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApO1xuICB6LWluZGV4OiAxMDA7XG59XG4ucGFubmVsLXNlY3Rpb24gLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC50aXRsZSAudGFibGVfaGVhZGluZ193cmFwIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjpiZWZvcmUsIC5wYW5uZWwtc2VjdGlvbiAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmZvY3VzOmJlZm9yZSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XG59XG4ucGFubmVsLXNlY3Rpb24gLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC50aXRsZSAudGFibGVfaGVhZGluZ193cmFwIC5pY29uLWluZm8tdG9vbHRpcDpob3ZlcjphZnRlciwgLnBhbm5lbC1zZWN0aW9uIC5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6Zm9jdXM6YWZ0ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KTtcbn1cbi5wYW5uZWwtc2VjdGlvbiAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLnRpdGxlIC50YWJsZV9oZWFkaW5nX3dyYXAgLmljb24taW5mby10b29sdGlwOmJlZm9yZSB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMWVtIDAuNzVlbSAwIDAuNzVlbTtcbiAgYm9yZGVyLWNvbG9yOiAjYmFiYmJiIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBib3R0b206IDEwMCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIG1hcmdpbi1sZWZ0OiAtMC41ZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpLCBvcGFjaXR5IDAuNjVzIDAuNXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKC05MCUpO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiAjYmFiYmJiO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIGJvdHRvbTogMTgwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXApO1xuICBtYXJnaW4tbGVmdDogLTI2cHg7XG4gIHBhZGRpbmc6IDdweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNikgMC4ycztcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoNTAlKTtcbiAgbWluLXdpZHRoOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnBhbm5lbC1zZWN0aW9uIC5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAudGl0bGUgLnRhYmxlX2hlYWRpbmdfd3JhcCAuaWNvbi1pbmZvLXRvb2x0aXA6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xuICAgIHdpZHRoOiAxMGVtO1xuICB9XG59XG4ucGFubmVsLXNlY3Rpb24gLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC50aXRsZSBpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmOWY5Zjk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjOTU5Nzk1O1xufVxuLnBhbm5lbC1zZWN0aW9uIC5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAuZHItdGFibGUge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5wYW5uZWwtc2VjdGlvbiAuZGlnaXRhbC1yZWNpZXB0IC5jb250YWluZXIgLmNhcmQgLmRyLXRhYmxlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucGFubmVsLXNlY3Rpb24gLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC5kci10YWJsZSAudGFibGUtaGVhZGVyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjg5NDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufVxuLnBhbm5lbC1zZWN0aW9uIC5kaWdpdGFsLXJlY2llcHQgLmNvbnRhaW5lciAuY2FyZCAuZHItdGFibGUgdHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGNvbG9yOiAjOTU5Nzk1O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ucGFubmVsLXNlY3Rpb24gLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC5kci10YWJsZSB0ciB0aCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlY2VjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4ucGFubmVsLXNlY3Rpb24gLmRpZ2l0YWwtcmVjaWVwdCAuY29udGFpbmVyIC5jYXJkIC5kci10YWJsZSAuYnV0dG9uLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzk1OTc5NTtcbiAgZm9udC1zaXplOiAxOHB4O1xufSIsIkBpbXBvcnQgXCJzcmMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwic3JjL3Njc3MvbWl4aW5zLnNjc3NcIjtcclxuXHJcbi5tYXQtcGFnaW5hdG9yIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBhbm5lbC1zZWN0aW9uIHtcclxuICAgIC5yZWNvbkxvYWRpbmdEYXRhIHtcclxuICAgICAgICBAaW5jbHVkZSBsb2FkZXI7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAucGFnZV9jb250ZW50X2Rhc2gge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIC5maWx0ZXJfaW5wdXRfd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAucm93IHtcclxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRleHQtZGFuZ2VyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBsYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZF90ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNlbGVjdEJveDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGlucHV0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMzdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZF90ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI4MS4xMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd25fbXVsdGlzZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBpbWctYm94LXNoYWRvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgyJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrYm94X3dyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmFkaW87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MyUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkICR0aGVtZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtY29sb3IsIDAuMDYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlZV9hbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDIzOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MiU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hY3Rpb25fYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBidXR0b247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRxcl90YWJsZV93cmFwIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAubG9hZGluZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kaWdpdGFsLXJlY2llcHQge1xyXG4gICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjNmE2YTZhO1xyXG4gICAgICAgICAgICAgIC50YWJsZV9oZWFkaW5nX3dyYXB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmltZ19yZWZyZXNoe1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgICAgICAgICAgICAgICAgLy8gcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC5pY29uLWluZm8tdG9vbHRpcCB7XHJcbiAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGRlZmF1bHQtdG9vbC10aXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmOWY5Zjk7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5NTk3OTU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAuZHItdGFibGUge1xyXG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM5NTk3OTU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlY2VjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNGE0YTRhO1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5idXR0b24tc3R5bGUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk1OTc5NTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxufSIsIlxyXG4vLyBnbG9iYWwtdmFyaWFibGVcclxuJGhlYWRlci1jb2xvcjogIzI2MjYyNjtcclxuJGJvZHktYmctY29sb3I6ICNGM0YzRjM7XHJcbiR0aGVtZS1jb2xvcjogIzAwQjg5NDtcclxuJGNvbG9yLXJlZDogI0ZGNEI0QjtcclxuJGNvbG9yLXZhbGlkLWVycm9yOiNFNTM5MzU7XHJcbiRjb2xvci1pbnZhbGlkLWVycm9yOiNCNzFjMWM7XHJcbiRjb2xvci1tYWdlbnRhOiAjYmM2NDljO1xyXG4kY29sb3ItcGluazogI2Y0OTRjODtcclxuJGNvbG9yLWdyZWVuOiAjODRDMTQwO1xyXG4kY29sb3ItbGlnaHQtZ3JlZW46ICNCQ0Q1MzM7XHJcbiRjb2xvci1ibHVlOiAjOTRkMGVhO1xyXG4kY29sb3ItZGFyay1ncmV5OiAjOUE5QTlBO1xyXG4kY29sb3ItbGlnaHQtZ3JleTogI2Y5ZjlmOTtcclxuJGNvbG9yLWV4dHJhLWxpZ2h0LWdyZXk6ICNGNEY0RjQ7XHJcbiRjb2xvci1vcmFuZ2U6ICNFMzc4MjY7XHJcbiRjb2xvci1saWdodC1vcmFuZ2U6ICNFQjk4MjI7XHJcbiRjb2xvci1leHRyYS1saWdodC1vcmFuZ2U6ICNGQ0FGMTc7XHJcbiRjb2xvci13aGl0ZTogI2ZmZmZmZjtcclxuJGJvcmRlci1jb2xvcjogI2VlZWNlYztcclxuJG5vdGlmaWNhdGlvbi1iZzogI2NlZTNmMDtcclxuJGNvbG9yLWxpZ2h0LWJsYWNrOiAjNEE0QTRBO1xyXG4kY29sb3ItYmxhY2s6ICMwMDAwMDA7XHJcbiRjb2xvci15ZWxsb3c6ICNmOWU5MDc7XHJcbiRib3gtc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLC4yKTtcclxuJGJsYWNrLW92ZXJsYXk6IHJnYmEoMCwwLDAsMC43KTtcclxuJHdoaXRlLW92ZXJsYXk6IHJnYigyNDcsIDI0NywgMjQ3KTtcclxuJHBsYWNlaG9sZGVyLWNvbG9yOiAjYWNhY2FjO1xyXG4kY29sb3ItYmFja2dyb3VuZDogI2UxZmJmYTtcclxuJGNvbG9yLWluZm86ICNGN0I1MDA7XHJcbiRmb250LXJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LWxpZ2h0OiAzMDA7XHJcbiRmb250LXJlZ3VsYXI6IDQwMDtcclxuJGZvbnQtYm9sZDogNzAwO1xyXG4kZm9udC1oMTogMzRweDtcclxuJGZvbnQtaDI6IDMwcHg7XHJcbiRmb250LWgzOiAyNHB4O1xyXG4kZm9udC1oNDogMThweDtcclxuJGZvbnQtaDU6IDE2cHg7XHJcbiRmb250LWg2OiAxNHB4O1xyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/recon_status/status/status.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/recon_status/status/status.component.ts ***!
    \*********************************************************/

  /*! exports provided: StatusComponent */

  /***/
  function srcAppRecon_statusStatusStatusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusComponent", function () {
      return StatusComponent;
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

    var StatusComponent = /*#__PURE__*/function () {
      function StatusComponent(dataService, globalService, httpClient, modalService, utilityService, router) {
        _classCallCheck(this, StatusComponent);

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

        this.isTableData = false;
        this.isLogin = false;
        this.tenantCode = [];
        this.errorMsg = 'Loading! Please wait ...';
        this.errorMsgInfo = false;
        this.arrProgramInfoWithKey = {};
        this.loadingData = true;
        this.arrselectedProgram = [];
        this.allProgram = [];
        this.isProgramClicked = false;
        this.isProgramsVisble = false;
        this.isClickedSearch = false;
        this.isMonthSelect = true;
        this.searchInProgress = false;
        this.dqrSearchData = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"]();
        this.isLoading = true;
        this.userDetails = [];
        this.reconSummary = [];
        this.csvOptions = {
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalseparator: '.',
          showLabels: true,
          // showTitle: true,
          // title: 'recon status summary:',
          useBom: true,
          noDownload: false,
          headers: ["Program Name", "Recon Process Date", "Threshold Status", "Remarks Status", "Remarks", "Remarks Submission Date"]
        };
      }

      _createClass(StatusComponent, [{
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
            //   this.userDetails =localStorage.getItem('userInfo');
            //  console.log( "user info",userDetails)
            var resSTR = JSON.stringify(res);
            var resJson = JSON.parse(resSTR);

            if (resJson.messageCode == '1' && resJson.data != null) {
              for (var i = 0; i < resJson.data.length; i++) {
                resJson.data[i].isSelect = false;
                _this.arrProgramInfoWithKey[resJson.data[i].brandId] = resJson.data[i];
              }

              _this.utilityService.programSort(resJson.data);

              _this.tenantCode = resJson.data;

              if (_this.tenantCode.length) {
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
        } // getProgram() {
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

      }, {
        key: "getselectedProgram",
        value: function getselectedProgram(data) {
          // if (this.arrProgramInfoWithKey[data.brandId].isSelect) {
          //   this.arrProgramInfoWithKey[data.brandId].isSelect = false;
          // } else {
          //   this.arrProgramInfoWithKey[data.brandId].isSelect = true;
          // }
          // this.getProgram();
          // this.allProgram = this.utilityService.getLetterByFilter(this.tenantCode);
          console.log("data===", data);
          this.selectedProgram = data.brandName;
          this.selectedProgramId = data.brandId;
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
            _this2.tenantCode = result; // this.getProgram();
          })["catch"](function (error) {
            console.log(error);
          });
        }
      }, {
        key: "downloadCSV",
        value: function downloadCSV() {
          new angular7_csv_dist_Angular_csv__WEBPACK_IMPORTED_MODULE_10__["AngularCsv"](this.reconSummary, "recon status summary", this.csvOptions);
        }
      }, {
        key: "backbutton",
        value: function backbutton() {
          this.isTableData = false;
        }
      }, {
        key: "getSearchData",
        value: function getSearchData(searchFilterData) {
          var _this3 = this;

          this.isProgramClicked = false;
          this.isLoading = true;
          this.loadingData = true;
          this.responceMsg = ''; // searchFilterData.value.programName=this.selectedProgram;
          // searchFilterData.value.requetDate = searchFilterData.value.requetDate;

          this.searchInProgress = true;
          searchFilterData.value.brandid = this.selectedProgramId; // searchFilterData.value.userId=parseInt(this.userDetails.userID);

          searchFilterData.value.month = searchFilterData.value.requetDate.getMonth();
          searchFilterData.value.year = searchFilterData.value.requetDate.getFullYear();
          this.dataService.GetReconStatus(searchFilterData.value).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJson = JSON.parse(resSTR);

            if (resJson.messageCode == '1') {
              _this3.isTableData = true;
              _this3.isLoading = false;
              _this3.loadingData = false;
              _this3.reconSummary = resJson.data;
              console.log("response", _this3.reconSummary);
            } else {
              _this3.isLoading = false;
              _this3.loadingData = false;
              alert("sorry no data found");
            }
          });
        }
      }]);

      return StatusComponent;
    }();

    StatusComponent.ctorParameters = function () {
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

    StatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-status',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./status.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recon_status/status/status.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./status.component.scss */
      "./src/app/recon_status/status/status.component.scss"))["default"]]
    })], StatusComponent);
    /***/
  }
}]);
//# sourceMappingURL=recon_status-status-module-es5.js.map