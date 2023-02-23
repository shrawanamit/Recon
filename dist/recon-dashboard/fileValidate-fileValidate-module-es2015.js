(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fileValidate-fileValidate-module"],{

/***/ "./node_modules/angular-datatables/index.js":
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/*! exports provided: DataTableDirective, DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__["DataTableDirective"]; });

/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ "./node_modules/angular-datatables/src/angular-datatables.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__["DataTablesModule"]; });

/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
/**
 * @module
 * @description
 * Entry point from which you should import all public library APIs.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/*! exports provided: DataTableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTableDirective", function() { return DataTableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataTableDirective = /** @class */ (function () {
    function DataTableDirective(el) {
        this.el = el;
        /**
         * The DataTable option you pass to configure your table.
         */
        this.dtOptions = {};
    }
    DataTableDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dtTrigger) {
            this.dtTrigger.subscribe(function () {
                _this.displayTable();
            });
        }
        else {
            this.displayTable();
        }
    };
    DataTableDirective.prototype.ngOnDestroy = function () {
        if (this.dtTrigger) {
            this.dtTrigger.unsubscribe();
        }
        if (this.dt) {
            this.dt.destroy(true);
        }
    };
    DataTableDirective.prototype.displayTable = function () {
        var _this = this;
        this.dtInstance = new Promise(function (resolve, reject) {
            Promise.resolve(_this.dtOptions).then(function (dtOptions) {
                // Using setTimeout as a "hack" to be "part" of NgZone
                setTimeout(function () {
                    _this.dt = $(_this.el.nativeElement).DataTable(dtOptions);
                    resolve(_this.dt);
                });
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DataTableDirective.prototype, "dtOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"])
    ], DataTableDirective.prototype, "dtTrigger", void 0);
    DataTableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[datatable]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DataTableDirective);
    return DataTableDirective;
}());

//# sourceMappingURL=angular-datatables.directive.js.map

/***/ }),

/***/ "./node_modules/angular-datatables/src/angular-datatables.module.js":
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/*! exports provided: DataTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesModule", function() { return DataTablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-datatables.directive */ "./node_modules/angular-datatables/src/angular-datatables.directive.js");
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DataTablesModule = /** @class */ (function () {
    function DataTablesModule() {
    }
    DataTablesModule_1 = DataTablesModule;
    DataTablesModule.forRoot = function () {
        return {
            ngModule: DataTablesModule_1
        };
    };
    var DataTablesModule_1;
    DataTablesModule = DataTablesModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]],
            exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_2__["DataTableDirective"]]
        })
    ], DataTablesModule);
    return DataTablesModule;
}());

//# sourceMappingURL=angular-datatables.module.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fileValidate/file-validate/file-validate.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fileValidate/file-validate/file-validate.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mt-4 file_container\">\n\n    <div class=\"row mt-4 file_container_wrap\">\n        <div class=\"col-6 file_container_form\">\n            <div class=\"row  mb-4\">\n\n                <div class=\"col-6 py-2\">\n                    Recon Type\n                </div>\n                <div class=\"form-group col-6\">\n                    <select name=\"FileType\" id=\"FileTypeSelect\" [(ngModel)]=\"FileType\"\n                        (ngModelChange)=\"selectFileType(FileType)\" required #fileType=\"ngModel\">\n                        <option [ngValue]=\"1\">Standard</option>\n                        <option [ngValue]=\"2\">Gsl</option>\n                        <option [ngValue]=\"3\">Ecomm</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"row  mb-4\">\n\n                <div class=\"col-6 py-2\">\n                    Line Seprator\n                </div>\n                <div class=\"form-group col-6\">\n                    <select name=\"LineSeperater\" id=\"FileTypeSelectLine\" [(ngModel)]=\"LineSeperater\"\n                        (ngModelChange)=\"selectLineSeperater(LineSeperater)\" required #fileType=\"ngModel\">\n                        <option [ngValue]=\"1\">\\r\\n</option>\n                        <option [ngValue]=\"2\">\\n</option>\n                        <!-- <option [ngValue]=\"3\">\\r\\n</option> -->\n                    </select>\n\n                </div>\n            </div>\n\n            <div class=\"row mb-4\">\n\n                <div class=\"col-6  py-2\">\n                    Sale File\n                </div>\n                <div class=\"form-group col-6\">\n                    <input type=\"file\" class=\"form-control-file\" name=\"file\" id=\"file1\"\n                        (change)=\"handleFile1Input($event.target.files)\">\n                    <span>* File less then 50MB</span>\n\n                </div>\n\n\n            </div>\n            <div class=\"row\">\n\n                <button class=\"ml-2\" (click)=\"validateFile()\">\n                    <span *ngIf=\"loadingData\" class=\"text-ligt spinner-border spinner-border-sm \" role=\"status\"\n                        aria-hidden=\"true\"></span>\n                    Validate\n                </button>\n            </div>\n\n        </div>\n\n        <div class=\"col-6 file_container_form\">\n            <div class=\"row  mb-4\">\n\n                <div class=\"col-6 py-2\">\n                    File Type\n                </div>\n                <div class=\"form-group col-6\">\n                    <select name=\"FileTypeTender\" id=\"FileTypeTender\" [(ngModel)]=\"FileTypeTender\"\n                        (ngModelChange)=\"selectFileTypeTender(FileType)\" required #fileType=\"ngModel\">\n                        <option [ngValue]=\"1\">CSV</option>\n                        <option [ngValue]=\"2\">TXT</option>\n                        <!-- <option [ngValue]=\"3\">Ecomm</option> -->\n                    </select>\n\n                </div>\n            </div>\n            <div class=\"row  mb-4\">\n\n                <div class=\"col-6 py-2\">\n                    Column Seperator\n                </div>\n                <div class=\"form-group col-6\">\n                    <select name=\"ColumnSeperator\" id=\"FileTypeSelectTender\" [(ngModel)]=\"ColumnSeperator\"\n                        (ngModelChange)=\"selectColumnSeperator(ColumnSeperator)\" required #fileTypeTender=\"ngModel\">\n\n\n                        <option [ngValue]=\"1\">,</option>\n                        <option [ngValue]=\"2\">|</option>\n                        <option [ngValue]=\"3\">||</option>\n                        <option [ngValue]=\"4\">~</option>\n                        <option [ngValue]=\"5\">~|</option>\n                    </select>\n\n                </div>\n            </div>\n\n            <div class=\"row mb-4\">\n\n                <div class=\"col-6  py-2\">\n                    Tender File\n                </div>\n                <div class=\"form-group col-6\">\n                    <input type=\"file\" class=\"form-control-file\" name=\"file\" id=\"file2\"\n                        (change)=\"handleFile2Input($event.target.files)\">\n                    <span>* File less then 50MB</span>\n\n                </div>\n\n\n            </div>\n            <!-- <div class=\"row\">\n\n                <button class=\"ml-2\" (click)=\"validateFile()\">\n                    <span *ngIf=\"loadingData\" class=\"text-ligt spinner-border spinner-border-sm \" role=\"status\"\n                        aria-hidden=\"true\"></span>\n                    Validate\n                </button>\n            </div> -->\n\n        </div>\n    </div>\n    <!-- <div class=\"row mb-4 mt-4 \"> -->\n        <div class=\"row mt-4 mb-4 file_container_wrap\">\n            <div class=\"col-6 file_container_form\" *ngIf=\"displayFileRes\">\n        <!-- <div class=\"col-6 \" > -->\n            <span class=\"output_text_wrap\">{{fileUploadResponce}}</span>\n            <!-- <span class=\"responceError\" *ngFor=\"let fileUploadResponceError of fileUploadResponceError;let i = index\">{{fileUploadResponceError}}\n                <br/>\n            </span> -->\n        </div>\n\n        <div class=\"col-12  file_container_form \" *ngIf=\"displayFileError\" >\n            <span class=\" output_text_wrap responceError\">\n               Error Message Table\n            </span>\n            <div class='dr-table '>\n                <table>\n                    <tbody>\n                        <tr class=\"table-header\">\n                            <th>S.No</th>\n                            <th>File Name</th>\n                            <th>Error Type</th>\n                            <th>Error Message</th>   \n                        </tr>\n                        <tr *ngFor=\"let datas of fileUploadResponceError;let i = index\">\n                            <th>{{i+1}}</th>\n                            <th>{{datas.FileName}}</th>\n                            <th>{{datas.ErrorType}}</th>\n                            <th>{{datas.ErrorMessage}}</th>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./src/app/fileValidate/file-validate/file-validate.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/fileValidate/file-validate/file-validate.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* clearfix style */\nimg {\n  max-width: 100%;\n  height: auto;\n}\n/*== start of code for tooltips ==*/\n.file_container {\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 10px;\n}\n.file_container .backbtn_wrap {\n  padding-right: 20px;\n}\n.file_container .backbtn_wrap .close {\n  outline: none;\n}\n.file_container .file_container_wrap .file_container_form {\n  padding-left: 115px;\n  padding-right: 115px;\n}\n.file_container .file_container_wrap .file_container_form .form-group {\n  margin-bottom: 0px;\n}\n.file_container .file_container_wrap .file_container_form .form-group select,\n.file_container .file_container_wrap .file_container_form .form-group .selected_text {\n  -webkit-appearance: none;\n  -mos-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url('list.svg') right no-repeat;\n  background-position: right 0.7em top 50%, 0 0;\n  color: #4A4A4A;\n  display: inline-block;\n  padding: 5px;\n  outline: none;\n  box-shadow: none;\n  margin: 0 auto;\n  background-color: #f9f9f9;\n  font-size: 16px;\n  font-weight: 300;\n  min-width: 95px;\n  border: 1px solid #eeecec;\n  width: 100%;\n  line-height: 29px;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n@media (max-width: 576px) {\n  .file_container .file_container_wrap .file_container_form .form-group select,\n.file_container .file_container_wrap .file_container_form .form-group .selected_text {\n    margin-bottom: 10px;\n  }\n}\n.file_container .file_container_wrap .file_container_form .form-group input {\n  background: #f9f9f9;\n  outline: 0;\n  box-shadow: none;\n  border: 1px solid #eeecec;\n  padding: 5px;\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 300;\n  border-radius: 3px;\n  line-height: 29px;\n  margin-bottom: 0;\n}\n.file_container .file_container_wrap .file_container_form .form-group input::-webkit-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.file_container .file_container_wrap .file_container_form .form-group input::-moz-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.file_container .file_container_wrap .file_container_form .form-group input::-ms-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.file_container .file_container_wrap .file_container_form .form-group input::placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.file_container .file_container_wrap .file_container_form .form-group input::-webkit-inner-spin-button, .file_container .file_container_wrap .file_container_form .form-group input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.file_container .file_container_wrap .file_container_form button {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  margin-bottom: 0;\n}\n.file_container .file_container_wrap .file_container_form button:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.file_container .file_container_wrap .file_container_form button:focus {\n  outline: none;\n}\n.file_container .file_container_wrap .file_container_form button:visited {\n  color: #ffffff;\n}\n.file_container .file_container_wrap .file_container_form button .spinner-border {\n  stroke: #00B894 !important;\n  color: #ffffff;\n}\n.file_container .output_text_wrap {\n  padding-left: 100px;\n  padding-right: 115px;\n  color: #00B894;\n  font-weight: 400;\n}\n.file_container .responceError {\n  color: #E53935;\n  padding-left: 0px;\n  font-weight: bold;\n  font-size: 20px;\n}\n.file_container .dr-table {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.file_container .dr-table table {\n  width: 100%;\n  text-align: left;\n}\n.file_container .dr-table .table-header th {\n  background-color: #00B894;\n  line-height: 25px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  vertical-align: middle;\n  padding: 10px;\n  border: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.file_container .dr-table tr {\n  background-color: white;\n  line-height: 30px;\n  color: #959795;\n  font-size: 13px;\n  font-weight: 300;\n}\n.file_container .dr-table tr th {\n  min-width: 100px;\n  background-color: #ffffff;\n  padding: 10px;\n  text-transform: capitalize !important;\n  border-bottom: 1px solid #eeecec !important;\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  vertical-align: middle;\n}\n.file_container .dr-table .button-style {\n  background: none;\n  border: none;\n  outline: none;\n  color: #959795;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZVZhbGlkYXRlL2ZpbGUtdmFsaWRhdGUvRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxzY3NzXFxtaXhpbnMuc2NzcyIsInNyYy9hcHAvZmlsZVZhbGlkYXRlL2ZpbGUtdmFsaWRhdGUvZmlsZS12YWxpZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmlsZVZhbGlkYXRlL2ZpbGUtdmFsaWRhdGUvRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxhcHBcXGZpbGVWYWxpZGF0ZVxcZmlsZS12YWxpZGF0ZVxcZmlsZS12YWxpZGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmlsZVZhbGlkYXRlL2ZpbGUtdmFsaWRhdGUvRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBQTtBQWlCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDZkY7QUR3b0JBLG1DQUFBO0FFMW9CQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQ2NZO0VEYlosYUFBQTtFQUNBLG1CQUFBO0FETUY7QUNMRTtFQUNFLG1CQUFBO0FET0o7QUNOSTtFQUNFLGFBQUE7QURRTjtBQ0pJO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBRE1OO0FDTE07RUFDRSxrQkFBQTtBRE9SO0FDTlE7O0VGc2ZOLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSw2Q0FBQTtFQUNBLGNHMWZrQjtFSDJmbEIscUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCR3hnQmlCO0VIeWdCakIsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUV0Z0JRLDBCQUFBO0FEMkJWO0FEckJJO0VFVEk7O0lGNGdCSixtQkFBQTtFQ3plRjtBQUNGO0FDL0JRO0VGa1JOLG1CRzdSaUI7RUg4UmpCLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFRTNSUSxnQkFBQTtBRDRDVjtBRGlQRTtFQUNFLGNHN1JnQjtFSDhSaEIsZUFBQTtBQy9PSjtBRDZPRTtFQUNFLGNHN1JnQjtFSDhSaEIsZUFBQTtBQy9PSjtBRDZPRTtFQUNFLGNHN1JnQjtFSDhSaEIsZUFBQTtBQy9PSjtBRDZPRTtFQUNFLGNHN1JnQjtFSDhSaEIsZUFBQTtBQy9PSjtBRGlQRTtFQUVFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNoUEo7QUNuRE07RUY0VEoseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0c1VVk7RUg2VVoscUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkcvVlk7RUhnV1osYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFRXZVTSxnQkFBQTtBRGtFUjtBRHVRRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNEQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDclFKO0FEd1FFO0VBQ0UsYUFBQTtBQ3RRSjtBRHdRRTtFQUNFLGNHbFdVO0FGNEZkO0FDN0VRO0VBQ0UsMEJBQUE7RUFDQSxjQ2pCSTtBRmdHZDtBQ3pFRTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFLQSxjQzdDVTtFRDhDVixnQkFBQTtBRHVFSjtBQ3JFRTtFQUNFLGNDL0NlO0VEZ0RmLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEdUVKO0FDbkVFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBRHFFSjtBQ3BFSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBRHNFTjtBQ25FTTtFQUNFLHlCQ2pFTTtFRGtFTixpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7QURxRVI7QUNsRUk7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRG1FTjtBQ2xFTTtFQUNFLGdCQUFBO0VBQ0EseUJDdkVNO0VEd0VOLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBRG9FUjtBQ2pFSTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRG1FTiIsImZpbGUiOiJzcmMvYXBwL2ZpbGVWYWxpZGF0ZS9maWxlLXZhbGlkYXRlL2ZpbGUtdmFsaWRhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjbGVhcmZpeCBzdHlsZSAqL1xyXG5cclxuLy8gQ2xlYXJmaXggbWl4aW5cclxuJWNsZWFyZml4IHtcclxuICAqem9vbTogMTtcclxuXHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLy8gRGVmaW5lIHRoZSBicmVha3BvaW50c1xyXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcclxuICBAaWYgJHBvaW50PT1zbWFsbC1kZXZpY2Uge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1tb2JpbGUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT10YWJsZXQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT10YWJsZXQwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09dGFibGV0cHJvIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09aXBhZCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PWxhcHRvcCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1sYXB0b3BtYXgge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09ZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vL2xvYWRlclxyXG5AbWl4aW4gbG9hZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGJhY2tncm91bmQ6ICRibGFjay1vdmVybGF5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gIH1cclxufVxyXG4vLyBqdXN0aWZ5LWNvbnRlbnQgbWl4aW5cclxuXHJcbkBtaXhpbiBqdXN0aWZ5LWNvbnRlbnQoJGp1c3RpZnkpIHtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgLW1zLWZsZXgtcGFjazogJGp1c3RpZnk7XHJcbn1cclxuXHJcbi8vIGFsaWduLWl0ZW1zIG1peGluXHJcblxyXG5AbWl4aW4gYWxpZ24taXRlbXMoJGFsaWduLWhvcml6b250YWxseSkge1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbiAgLW1vei1hbGlnbi1pdGVtczogJGFsaWduLWhvcml6b250YWxseTtcclxuICAtbXMtYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbn1cclxuXHJcbi8vIFRyYW5zaXRpb24gbWl4aW5cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uKSB7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG59XHJcblxyXG4vLyBUcmFuc2Zvcm0gbWl4aW5cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybSkge1xyXG4gIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG4gIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbkBtaXhpbiBib3gtc2hhZG93KCRhcmdzKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAtbW96LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gIC1tcy1ib3gtc2hhZG93OiAkYXJncztcclxuICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxufVxyXG5cclxuLy9QYWRkaW5nIG1peGluXHJcbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpIHtcclxuICBwYWRkaW5nLXRvcDogJHRvcDtcclxuICBwYWRkaW5nLXJpZ2h0OiAkcmlnaHQ7XHJcbiAgcGFkZGluZy1ib3R0b206ICRib3R0b207XHJcbiAgcGFkZGluZy1sZWZ0OiAkbGVmdDtcclxufVxyXG5cclxuLy9NYXJnaW4gbWl4aW5cclxuQG1peGluIG1hcmdpbigkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KSB7XHJcbiAgbWFyZ2luLXRvcDogJHRvcDtcclxuICBtYXJnaW4tcmlnaHQ6ICRyaWdodDtcclxuICBtYXJnaW4tYm90dG9tOiAkYm90dG9tO1xyXG4gIG1hcmdpbi1sZWZ0OiAkbGVmdDtcclxufVxyXG5cclxuLy9wb3NpdGlvbiBtaXhpblxyXG5AbWl4aW4gcG9zaXRpb24oJHBvc2l0aW9uLCAkdG9wOiBudWxsLCAkcmlnaHQ6IG51bGwsICRib3R0b206IG51bGwsICRsZWZ0OiBudWxsKSB7XHJcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcclxuICB0b3A6ICR0b3A7XHJcbiAgcmlnaHQ6ICRyaWdodDtcclxuICBib3R0b206ICRib3R0b207XHJcbiAgbGVmdDogJGxlZnQ7XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLUgxIHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gaGVhZGluZy1IMiB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGhlYWRpbmctSDMge1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLUg0IHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LXJlZ3VsYXI7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHBhcmFncmFwaCB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1yZWd1bGFyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29sb3JCb3gge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvZHktYmctY29sb3I7XHJcbiAgLy8gYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggMXB4IDRweCAwLjVweDsgO1xyXG59XHJcblxyXG5AbWl4aW4gYW5jaG9yIHtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcblxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyxcclxuICAmOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICB9XHJcbn1cclxuXHJcbi8vIGRlZmF1bHQgaW5wdXQgdHlwZSBhbnlcclxuQG1peGluIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4gICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vdGV4dGFyZWFcclxuQG1peGluIHRleHRhcmVhIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZGVmYXVsdCBidXR0b25cclxuQG1peGluIGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiA5cHggMTVweCA5cHg7XHJcbiAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKCR0aGVtZS1jb2xvciwgMC4zKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uMSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiA5cHggMTVweCA5cHg7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGJveCBkcl9zdW1tYXJ5XHJcbkBtaXhpbiBib3gge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDFweCA0cHggMC41cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbkBtaXhpbiBtb25fbmFtZSB7XHJcbiAgLy8gcGFkZGluZzogMHB4IDAgMHB4IDE1cHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuQG1peGluIG1vbl9ubyB7XHJcbiAgcGFkZGluZzogMHB4IDAgMHB4IDEwcHg7XHJcbiAgLy8gY29sb3I6ICM0YTRhNGE7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIGRlZmF1bHQgcHJvZHVjdC1idXR0b25cclxuQG1peGluIHByb2R1Y3QtYnV0dG9uIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA1cHggMTRweCA2cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDJweCB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50O1xyXG4gIC1vLWJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIC1vLWJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyByaWdodCB3aGl0ZSBhcnJvdyBpbiBidXR0b25cclxuLy8gQG1peGluIGJ0bl9yaWdodF9hcnJvdyB7XHJcbi8vICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuXHJcbi8vICAgJjphZnRlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoKSBuby1yZXBlYXQ7XHJcbi8vICAgICB3aWR0aDogMjBweDtcclxuLy8gICAgIGhlaWdodDogMTdweDtcclxuLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICByaWdodDogN3B4O1xyXG4vLyAgICAgdG9wOiAxMHB4O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy9mb3IgaDQgd2l0aCBib3R0b20gbGluZVxyXG5AbWl4aW4gdGV4dF91bmRlcmxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDJweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vZm9yIHNlbGVjdCB0YWdcclxuXHJcbkBtaXhpbiBzZWxlY3RCb3gge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW9zLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL2xpc3Quc3ZnKSByaWdodCBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMC43ZW0gdG9wIDUwJSwgMCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWluLXdpZHRoOiA5NXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vL2xhYmVsXHJcbkBtaXhpbiBsYWJlbCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGNvbG9yOiAkY29sb3ItZGFyay1ncmV5O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAmLmRpc2FibGUge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi8vaW1hZ2UgYm94IHNoYWRvd1xyXG5AbWl4aW4gaW1nLWJveC1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWNvbG9yIDBweCAxcHggNHB4IDAuNXB4O1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGJveC1zaGFkb3ctY29sb3IgMHB4IDFweCA0cHggMC41cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYm94LXNoYWRvdy1jb2xvciAwcHggMXB4IDRweDtcclxufVxyXG5cclxuLy9jaGVja2JveFxyXG5cclxuQG1peGluIGNoZWNrYm94IHtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTlweDtcclxuICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAycHg7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICB0b3A6IDFweDtcclxuICAgICAgbGVmdDogNy41cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTlweDtcclxuICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcclxuICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL3Rvb2wtdGlwXHJcblxyXG4vKj09IHN0YXJ0IG9mIGNvZGUgZm9yIHRvb2x0aXBzID09Ki9cclxuQG1peGluIGRlZmF1bHQtdG9vbC10aXAge1xyXG4gIGN1cnNvcjogaGVscDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTEwMDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICAmOmJlZm9yZSxcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMWVtIDAuNzVlbSAwIDAuNzVlbTtcclxuICAgIGJvcmRlci1jb2xvcjogI2JhYmJiYiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNWVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNiksIG9wYWNpdHkgMC42NXMgMC41cztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKC05MCUpO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmFiYmJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgYm90dG9tOiAxODAlO1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXApO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC04Ljc1ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTI2cHg7XHJcbiAgICAvLyBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KSAwLjJzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoNTAlKTtcclxuICAgIC8vIHdpZHRoOiAxNy41ZW07XHJcbiAgICBtaW4td2lkdGg6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTVlbTtcclxuICAgICAgd2lkdGg6IDEwZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL2xpc3Qgc3R5bGVcclxuXHJcbkBtaXhpbiBsaXN0c3R5bGUge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIi5cIjtcclxuICAgIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogNDFweDtcclxuICB9XHJcbn1cclxuXHJcbi8vZmlsZSB1cGxvYWQgaW5wdXRcclxuQG1peGluIGZpbGVfaW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgQGluY2x1ZGUgYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4vL2ZvciBibG9jayBtaXhpblxyXG5AbWl4aW4gYmxvY2tBbGxUZXh0IHtcclxuICBoMSB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUgxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUgyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUgzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUg0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjplbXB0eSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBicmVhZGNydW1iIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgQGluY2x1ZGUgYW5jaG9yO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vL3JhZGlvIGJ1dHRvblxyXG5cclxuQG1peGluIHJhZGlvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgJjpjaGVja2VkLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAvLyBsZWZ0OiA0Ny44JTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdG9wOiA1cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtaXhpbiByYWRpbzEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAmOmNoZWNrZWQsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDQ3LjglO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vZGVmYXVsdCB0YWJsZVxyXG5AbWl4aW4gdGFibGUge1xyXG4gIHRhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIHRoZWFkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgLmljb24taW5mby10b29sdGlwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZGVmYXVsdC10b29sLXRpcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGVja2JveF93cmFwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgY2hlY2tib3g7XHJcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRib2R5IHtcclxuICAgICAgdHIge1xyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAuZXJyb3IsXHJcbiAgICAgICAgICAubWFwcGVkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWNjZXNzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtY29sb3IsIDAuMDUpO1xyXG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kaXNhYmxlIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVycm9yIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItcmVkLCAwLjA1KTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1yZWQ7XHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kaXNhYmxlIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1hcHBlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLWxpZ2h0LWJsYWNrLCAwLjA1KTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZGlzYWJsZSB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGVja2JveF93cmFwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgY2hlY2tib3g7XHJcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBpbWctYm94LXNoYWRvdztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCR0aGVtZS1jb2xvciwgMC4wNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbi1pbmZvLXRvb2x0aXAge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZGVmYXVsdC10b29sLXRpcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyogY2xlYXJmaXggc3R5bGUgKi9cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKj09IHN0YXJ0IG9mIGNvZGUgZm9yIHRvb2x0aXBzID09Ki9cbi5maWxlX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uZmlsZV9jb250YWluZXIgLmJhY2tidG5fd3JhcCB7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4uZmlsZV9jb250YWluZXIgLmJhY2tidG5fd3JhcCAuY2xvc2Uge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZpbGVfY29udGFpbmVyIC5maWxlX2NvbnRhaW5lcl93cmFwIC5maWxlX2NvbnRhaW5lcl9mb3JtIHtcbiAgcGFkZGluZy1sZWZ0OiAxMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTE1cHg7XG59XG4uZmlsZV9jb250YWluZXIgLmZpbGVfY29udGFpbmVyX3dyYXAgLmZpbGVfY29udGFpbmVyX2Zvcm0gLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uZmlsZV9jb250YWluZXIgLmZpbGVfY29udGFpbmVyX3dyYXAgLmZpbGVfY29udGFpbmVyX2Zvcm0gLmZvcm0tZ3JvdXAgc2VsZWN0LFxuLmZpbGVfY29udGFpbmVyIC5maWxlX2NvbnRhaW5lcl93cmFwIC5maWxlX2NvbnRhaW5lcl9mb3JtIC5mb3JtLWdyb3VwIC5zZWxlY3RlZF90ZXh0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW9zLWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL2xpc3Quc3ZnKSByaWdodCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDAuN2VtIHRvcCA1MCUsIDAgMDtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtaW4td2lkdGg6IDk1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVjZWM7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmZpbGVfY29udGFpbmVyIC5maWxlX2NvbnRhaW5lcl93cmFwIC5maWxlX2NvbnRhaW5lcl9mb3JtIC5mb3JtLWdyb3VwIHNlbGVjdCxcbi5maWxlX2NvbnRhaW5lciAuZmlsZV9jb250YWluZXJfd3JhcCAuZmlsZV9jb250YWluZXJfZm9ybSAuZm9ybS1ncm91cCAuc2VsZWN0ZWRfdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuLmZpbGVfY29udGFpbmVyIC5maWxlX2NvbnRhaW5lcl93cmFwIC5maWxlX2NvbnRhaW5lcl9mb3JtIC5mb3JtLWdyb3VwIGlucHV0IHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWNlYztcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZmlsZV9jb250YWluZXIgLmZpbGVfY29udGFpbmVyX3dyYXAgLmZpbGVfY29udGFpbmVyX2Zvcm0gLmZvcm0tZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhY2FjYWM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5maWxlX2NvbnRhaW5lciAuZmlsZV9jb250YWluZXJfd3JhcCAuZmlsZV9jb250YWluZXJfZm9ybSAuZm9ybS1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgLmZpbGVfY29udGFpbmVyIC5maWxlX2NvbnRhaW5lcl93cmFwIC5maWxlX2NvbnRhaW5lcl9mb3JtIC5mb3JtLWdyb3VwIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5maWxlX2NvbnRhaW5lciAuZmlsZV9jb250YWluZXJfd3JhcCAuZmlsZV9jb250YWluZXJfZm9ybSBidXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCODk0O1xuICBib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA5cHggMTVweCA5cHg7XG4gIGJhY2tncm91bmQ6ICMwMEI4OTQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5maWxlX2NvbnRhaW5lciAuZmlsZV9jb250YWluZXJfd3JhcCAuZmlsZV9jb250YWluZXJfZm9ybSBidXR0b246aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAxN3B4IDEwcHggLTEwcHggcmdiYSgwLCAxODQsIDE0OCwgMC4zKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMzAwbXM7XG59XG4uZmlsZV9jb250YWluZXIgLmZpbGVfY29udGFpbmVyX3dyYXAgLmZpbGVfY29udGFpbmVyX2Zvcm0gYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5maWxlX2NvbnRhaW5lciAuZmlsZV9jb250YWluZXJfd3JhcCAuZmlsZV9jb250YWluZXJfZm9ybSBidXR0b246dmlzaXRlZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmZpbGVfY29udGFpbmVyIC5maWxlX2NvbnRhaW5lcl93cmFwIC5maWxlX2NvbnRhaW5lcl9mb3JtIGJ1dHRvbiAuc3Bpbm5lci1ib3JkZXIge1xuICBzdHJva2U6ICMwMEI4OTQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZmlsZV9jb250YWluZXIgLm91dHB1dF90ZXh0X3dyYXAge1xuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMTVweDtcbiAgY29sb3I6ICMwMEI4OTQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uZmlsZV9jb250YWluZXIgLnJlc3BvbmNlRXJyb3Ige1xuICBjb2xvcjogI0U1MzkzNTtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uZmlsZV9jb250YWluZXIgLmRyLXRhYmxlIHtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uZmlsZV9jb250YWluZXIgLmRyLXRhYmxlIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZmlsZV9jb250YWluZXIgLmRyLXRhYmxlIC50YWJsZS1oZWFkZXIgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCODk0O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG59XG4uZmlsZV9jb250YWluZXIgLmRyLXRhYmxlIHRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzk1OTc5NTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmZpbGVfY29udGFpbmVyIC5kci10YWJsZSB0ciB0aCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlY2VjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZmlsZV9jb250YWluZXIgLmRyLXRhYmxlIC5idXR0b24tc3R5bGUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjOTU5Nzk1O1xuICBmb250LXNpemU6IDE4cHg7XG59IiwiQGltcG9ydCBcInNyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgXCJzcmMvc2Nzcy9taXhpbnMuc2Nzc1wiO1xyXG4uZmlsZV9jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC5iYWNrYnRuX3dyYXAge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIC5jbG9zZSB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5maWxlX2NvbnRhaW5lcl93cmFwIHtcclxuICAgIC5maWxlX2NvbnRhaW5lcl9mb3JtIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMTVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTE1cHg7XHJcbiAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgc2VsZWN0LFxyXG4gICAgICAgIC5zZWxlY3RlZF90ZXh0IHtcclxuICAgICAgICAgIEBpbmNsdWRlIHNlbGVjdEJveDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBpbnB1dDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgICAgIC5zcGlubmVyLWJvcmRlciB7XHJcbiAgICAgICAgICBzdHJva2U6ICR0aGVtZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5vdXRwdXRfdGV4dF93cmFwIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMTVweDtcclxuICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1saWdodC1ibGFjaztcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIG1hcmdpbjogMHB4IDI1cHggMjVweCAyNXB4IDtcclxuICAgIC8vIHBhZGRpbmc6IDE0cHg7XHJcbiAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLnJlc3BvbmNlRXJyb3Ige1xyXG4gICAgY29sb3I6ICRjb2xvci12YWxpZC1lcnJvcjtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAvLyBtYXJnaW46IDBweCAyNXB4IHB4IDI1cHggO1xyXG4gIH1cclxuXHJcbiAgLmRyLXRhYmxlIHtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHRhYmxlIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgdGgge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0ciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuXHJcbiAgICAgIGNvbG9yOiAjOTU5Nzk1O1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIHRoIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVjZWMgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5idXR0b24tc3R5bGUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjOTU5Nzk1O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIlxyXG4vLyBnbG9iYWwtdmFyaWFibGVcclxuJGhlYWRlci1jb2xvcjogIzI2MjYyNjtcclxuJGJvZHktYmctY29sb3I6ICNGM0YzRjM7XHJcbiR0aGVtZS1jb2xvcjogIzAwQjg5NDtcclxuJGNvbG9yLXJlZDogI0ZGNEI0QjtcclxuJGNvbG9yLXZhbGlkLWVycm9yOiNFNTM5MzU7XHJcbiRjb2xvci1pbnZhbGlkLWVycm9yOiNCNzFjMWM7XHJcbiRjb2xvci1tYWdlbnRhOiAjYmM2NDljO1xyXG4kY29sb3ItcGluazogI2Y0OTRjODtcclxuJGNvbG9yLWdyZWVuOiAjODRDMTQwO1xyXG4kY29sb3ItbGlnaHQtZ3JlZW46ICNCQ0Q1MzM7XHJcbiRjb2xvci1ibHVlOiAjOTRkMGVhO1xyXG4kY29sb3ItZGFyay1ncmV5OiAjOUE5QTlBO1xyXG4kY29sb3ItbGlnaHQtZ3JleTogI2Y5ZjlmOTtcclxuJGNvbG9yLWV4dHJhLWxpZ2h0LWdyZXk6ICNGNEY0RjQ7XHJcbiRjb2xvci1vcmFuZ2U6ICNFMzc4MjY7XHJcbiRjb2xvci1saWdodC1vcmFuZ2U6ICNFQjk4MjI7XHJcbiRjb2xvci1leHRyYS1saWdodC1vcmFuZ2U6ICNGQ0FGMTc7XHJcbiRjb2xvci13aGl0ZTogI2ZmZmZmZjtcclxuJGJvcmRlci1jb2xvcjogI2VlZWNlYztcclxuJG5vdGlmaWNhdGlvbi1iZzogI2NlZTNmMDtcclxuJGNvbG9yLWxpZ2h0LWJsYWNrOiAjNEE0QTRBO1xyXG4kY29sb3ItYmxhY2s6ICMwMDAwMDA7XHJcbiRjb2xvci15ZWxsb3c6ICNmOWU5MDc7XHJcbiRib3gtc2hhZG93LWNvbG9yOiByZ2JhKDAsMCwwLC4yKTtcclxuJGJsYWNrLW92ZXJsYXk6IHJnYmEoMCwwLDAsMC43KTtcclxuJHdoaXRlLW92ZXJsYXk6IHJnYigyNDcsIDI0NywgMjQ3KTtcclxuJHBsYWNlaG9sZGVyLWNvbG9yOiAjYWNhY2FjO1xyXG4kY29sb3ItYmFja2dyb3VuZDogI2UxZmJmYTtcclxuJGNvbG9yLWluZm86ICNGN0I1MDA7XHJcbiRmb250LXJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LWxpZ2h0OiAzMDA7XHJcbiRmb250LXJlZ3VsYXI6IDQwMDtcclxuJGZvbnQtYm9sZDogNzAwO1xyXG4kZm9udC1oMTogMzRweDtcclxuJGZvbnQtaDI6IDMwcHg7XHJcbiRmb250LWgzOiAyNHB4O1xyXG4kZm9udC1oNDogMThweDtcclxuJGZvbnQtaDU6IDE2cHg7XHJcbiRmb250LWg2OiAxNHB4O1xyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/fileValidate/file-validate/file-validate.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/fileValidate/file-validate/file-validate.component.ts ***!
  \***********************************************************************/
/*! exports provided: FileValidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileValidateComponent", function() { return FileValidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");



let FileValidateComponent = class FileValidateComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.formData = new FormData();
        this.loadingData = false;
        this.isActiveProgram = false;
        this.fileTypeSelect = "";
        this.lineSeperaterSelect = '';
        this.fileTypeSelectTender = "";
        this.columnSeperatorSelect = "";
        this.file1 = false;
        this.file2 = false;
        this.displayFileData = false;
        this.displayFileError = false;
        this.displayFileRes = false;
        this.fileUploadResponceError = [];
    }
    ngOnInit() {
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
    selectLineSeperater(LineSeperater) {
        // debugger
        if (LineSeperater == '1') {
            this.lineTermineterSelect = "\\r\\n";
        }
        if (LineSeperater == '2') {
            this.lineTermineterSelect = "\\n";
        }
        //  console.log("this.lineSeperaterSelect",this.lineTermineterSelect,LineSeperater)
    }
    selectFileTypeTender(fileTypeTender) {
        if (fileTypeTender == '1') {
            this.fileTypeSelectTender = 'csv';
        }
        if (fileTypeTender == '2') {
            this.fileTypeSelectTender = 'txt';
        }
    }
    selectColumnSeperator(columnSeperator) {
        if (columnSeperator == '1') {
            this.columnSeperatorSelect = ',';
        }
        if (columnSeperator == '2') {
            this.columnSeperatorSelect = '|';
        }
        if (columnSeperator == '3') {
            this.columnSeperatorSelect = '||';
        }
        if (columnSeperator == '4') {
            this.columnSeperatorSelect = '~';
        }
        if (columnSeperator == '5') {
            this.columnSeperatorSelect = '~|';
        }
    }
    handleFile1Input(files) {
        this.formData.append(`request1`, files.item(0));
        this.file1 = true;
        console.log("file1", this.formData.append(`request1`, files.item(0)));
    }
    handleFile2Input(files) {
        this.formData.append(`request1`, files.item(0));
        this.file2 = true;
        console.log("file2", this.formData.append(`request1`, files.item(0)));
    }
    validateFile() {
        this.displayFileRes = false;
        this.displayFileError = false;
        this.displayFileData = false;
        if (this.fileTypeSelect === "") {
            alert("Please Select Recon File Type");
        }
        else if (!this.file1) {
            alert("Please Select Sale File");
        }
        else if (!this.file2) {
            alert("Please Select Tender File");
        }
        else {
            this.loadingData = true;
            this.dataService.RecondashboardFileValidate(this.fileTypeSelect, this.lineTermineterSelect, this.columnSeperatorSelect, this.formData).subscribe((res) => {
                const resSTR = JSON.stringify(res);
                const resJSON = JSON.parse(resSTR);
                this.formData.delete('request1');
                this.fileTypeSelect = "";
                $('#file1').val('');
                $('#file2').val('');
                $('#FileTypeSelect').val('');
                $('#FileTypeTender').val('');
                $('#FileTypeSelectLine').val('');
                $('#FileTypeSelectTender').val('');
                if (resJSON.responseCode == '200') {
                    this.loadingData = false;
                    this.displayFileRes = true;
                    this.fileUploadResponce = resJSON.message;
                    // this.reconDataList =resJSON.recondataList
                }
                else if (resJSON.responseCode == '500') {
                    this.fileTypeSelect = "";
                    this.loadingData = false;
                    this.displayFileError = true;
                    this.fileUploadResponceError = JSON.parse(resJSON.message);
                    console.log('this.fileUploadResponceError', this.fileUploadResponceError);
                    // this.fileUploadResponceError;.split('--').splice(4, 1)
                    // this.reconDataList =resJSON.recondataList
                }
                else if (resJSON.responseCode == '501') {
                    this.fileTypeSelect = "";
                    this.loadingData = false;
                    this.displayFileRes = true;
                    this.displayFileData = true;
                    this.fileUploadResponce = resJSON.message;
                    // this.reconDataList = resJSON.recondataList
                }
                else {
                    this.loadingData = false;
                }
            });
        }
    }
};
FileValidateComponent.ctorParameters = () => [
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
FileValidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-file-validate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-validate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fileValidate/file-validate/file-validate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-validate.component.scss */ "./src/app/fileValidate/file-validate/file-validate.component.scss")).default]
    })
], FileValidateComponent);



/***/ }),

/***/ "./src/app/fileValidate/fileValidate-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/fileValidate/fileValidate-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FileValidateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileValidateRoutingModule", function() { return FileValidateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _file_validate_file_validate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-validate/file-validate.component */ "./src/app/fileValidate/file-validate/file-validate.component.ts");




const routes = [
    { path: 'validate', component: _file_validate_file_validate_component__WEBPACK_IMPORTED_MODULE_3__["FileValidateComponent"] },
];
let FileValidateRoutingModule = class FileValidateRoutingModule {
};
FileValidateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FileValidateRoutingModule);



/***/ }),

/***/ "./src/app/fileValidate/fileValidate.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/fileValidate/fileValidate.module.ts ***!
  \*****************************************************/
/*! exports provided: FileValidateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileValidateModule", function() { return FileValidateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _file_validate_file_validate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-validate/file-validate.component */ "./src/app/fileValidate/file-validate/file-validate.component.ts");
/* harmony import */ var _fileValidate_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fileValidate-routing.module */ "./src/app/fileValidate/fileValidate-routing.module.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");








let FileValidateModule = class FileValidateModule {
};
FileValidateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_file_validate_file_validate_component__WEBPACK_IMPORTED_MODULE_3__["FileValidateComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _fileValidate_routing_module__WEBPACK_IMPORTED_MODULE_4__["FileValidateRoutingModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"]
        ],
        exports: [_file_validate_file_validate_component__WEBPACK_IMPORTED_MODULE_3__["FileValidateComponent"]],
        entryComponents: [],
    })
], FileValidateModule);



/***/ })

}]);
//# sourceMappingURL=fileValidate-fileValidate-module-es2015.js.map