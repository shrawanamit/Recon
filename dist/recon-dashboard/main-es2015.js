(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/allprograms/program/program.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/allprograms/program/program.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"all_programs_wrap\">\r\n    <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-label=\"Close\">\r\n        <img src=\"assets/images/cross.svg\">\r\n    </button>\r\n    <div class=\"search_filter text-center\">\r\n        <input placeholder=\"Search\" type=\"text\" [(ngModel)]=\"searchText\" (ngModelChange)=\"selectedSearchText($event)\">\r\n        <img src=\"assets/images/search.svg\">\r\n    </div>\r\n    <div class=\"letter_filter_wrap row\">\r\n        <div *ngFor=\"let letter of allProgram  |filter:searchText\" class=\"col-2\">\r\n            <div class=\"letter\">{{letter.group}}</div>\r\n            <div class=\"data\" *ngFor=\"let dataName of letter.children\">\r\n                <div class=\"checkbox_wrap\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"checkbox\" id=\"{{dataName.brandId}}\" [checked]=\"dataName.isSelect\"\r\n                            (change)=\"getselectedProgram(dataName)\">\r\n                        <label for=\"{{dataName.brandId}}\">{{dataName.brandName}}</label>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal_footer\">\r\n        <div class=\"action_btn\">\r\n            <button (click)=\"closeModal()\">Close</button>\r\n            <div class=\"count\">{{selectedProgramCount}} of {{totalProgramCount}} Selected</div>\r\n            <button (click)=\"closeModal()\">Select</button>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page_content\" *ngIf=\"isLogin\">\r\n    <div class=\"login_form_wrap\">\r\n        <form #loginForm=\"ngForm\" name=\"form\" (ngSubmit)=\"loginForm.form.valid && processLogin(loginForm)\" novalidate>\r\n            <div class=\"logo_wrap\">\r\n                <img src=\"assets/images/ez-logo.png\" alt=\"logo\">\r\n            </div>\r\n            <div class=\"form_wrap\">\r\n                <div class=\"form_title\">\r\n                    <h4>Login</h4>\r\n                </div>\r\n                <div class=\"email\">\r\n                    <label>User Name</label>\r\n                    <input id=\"userEmail\" name=\"userEmail\" [(ngModel)]=\"userEmail\" #email=\"ngModel\"\r\n                        placeholder=\"User Name\"\r\n                        [ngClass]=\"{ 'error': (email.touched && email.errors) || (loginForm.submitted && email.invalid)}\">\r\n                </div>\r\n                <div class=\"password\">\r\n                    <label>Password</label>\r\n                    <input id=\"mysecretpassword\" name=\"userPassword\" type=\"password\" [(ngModel)]=\"userPassword\"\r\n                        #password=\"ngModel\" class=\"form-control\" placeholder=\"Password\"\r\n                        [ngClass]=\"{ 'error': (password.touched && password.errors) || (loginForm.submitted && password.invalid)}\"\r\n                        matInput showHideInput>\r\n                    <div (click)=\"showPassToggle()\" showHideTrigger=\"mysecretpassword\" class=\"btn-toggle-pass\"\r\n                        [showHideStatus]=\"{ id: 'mysecretpassword' }\">\r\n                        <i *ngIf=\"!toggleViewPassword\" class=\"fa fa-eye-slash\"></i>\r\n                        <i *ngIf=\"toggleViewPassword\" class=\"fa fa-eye\"></i>\r\n                    </div>\r\n                </div>\r\n                <div class=\"action_btn\">\r\n                    <button type=\"submit\" *ngIf=\"!loginInProgress\">Login</button>\r\n                    <button mdbBtn color=\"primary\" type=\"button\" disabled *ngIf=\"loginInProgress\">\r\n                        <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\r\n                        Loading...\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auto-generated/auto-generated.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auto-generated/auto-generated.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>auto-generated works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/duplicate/duplicate.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/duplicate/duplicate.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-body\">\r\n    <button type=\"button\" class=\"close\" (click)=\"closeModal()\">&times;</button>\r\n    <table class=\"table table-borderless\">\r\n        <thead>\r\n            <tr>\r\n                <th>Bill No.</th>\r\n                <th>Bill Date</th>\r\n                <th>Store Code</th>\r\n                <th>Insertion Date</th>\r\n                <th>File Name</th>\r\n                <th>Remarks</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let duplicate of duplicateData;let i = index\">\r\n                <td>\r\n                    {{duplicate.billNo}}\r\n                </td>\r\n                <td>\r\n                    {{duplicate.billDate}}\r\n                </td>\r\n                <td>\r\n                    {{duplicate.storeCode}}\r\n                </td>\r\n                <td>\r\n                    {{duplicate.insertionDate}}\r\n                </td>\r\n                <td>\r\n                    {{duplicate.fileName}}\r\n                </td>\r\n                <td>\r\n                    {{duplicate.remarks}}\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page_content\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n        <a routerLink=\"/\" class=\"navbar-brand\">\r\n            <img src=\"assets/images/recon_logo.png\" alt=\"logo\">\r\n            <span\r\n                style=\"font-size: 10px; font-style: italic; color: #3ab894; font-weight: 800;\">{{currentVersion}}</span>\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n            aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item\" [routerLinkActive]=\"'active'\" *ngFor=\"let menu of mainMenu; let i = index\">\r\n                   \r\n                   \r\n                    <span *ngIf=\"menu.name == 'Reports'\" class=\"nav-item\">\r\n                        <a class=\"nav-link dropdown-toggle\"  (click)=\"seeAllPrograms() \">\r\n                            Reports\r\n                        </a>\r\n                        <!-- <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n                            <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                            <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                        </div> -->\r\n                        <div class=\"dropdown_multiselect\" *ngIf=\"isAllProgram\">\r\n                            <ul>\r\n                                <li *ngFor=\"let program of programData;let i = index\">\r\n                                    <div class=\"checkbox_wrap\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"radio\" id=\"{{program.name}}\"\r\n                                            (click)=\"getselectedProgram()\"\r\n                                                [checked]=\"program.select\" name=\"reports\">\r\n                                            <label for=\"{{program.name}}\"  routerLink=\"{{program.slug}}\">{{program.name}}</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                           \r\n                        </div>\r\n                    </span>\r\n                    <a *ngIf=\"menu.name != 'Reports'\" class=\"nav-link\" mdbWavesEffect\r\n                        routerLink=\"{{menu.slug}}\"  (click)=\"hidePopup()\" >{{menu.name}}</a>\r\n                </li>\r\n\r\n            </ul>\r\n            <!-- <ul class=\"navbar-nav ml-auto nav-flex-icons nav_right_panel\" *ngIf=\"!isLogin\">\r\n                <li>\r\n                    <button class=\"btnsearch\"(click)=\"signUp()\">SIGNUP</button>\r\n                </li>\r\n\r\n            </ul> -->\r\n            <ul class=\"navbar-nav ml-auto nav-flex-icons nav_right_panel\" *ngIf=\"isLogin\">\r\n                <li class=\"nav-item avatar dropdown\" dropdown>\r\n                    <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link waves-light\" mdbWavesEffect>\r\n                        <img src=\"assets/images/user.svg\">\r\n                    </a>\r\n                    <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown dropdown-primary\" role=\"menu\">\r\n                        <div class=\"profile_icon\">\r\n                            <div class=\"icon\">\r\n                                <img src=\"assets/images/user_icon.png\">\r\n                            </div>\r\n                            <p>Welcome {{userDetails.userName}}</p>\r\n                        </div>\r\n                        <a class=\"dropdown-item waves-light\" mdbWavesEffect (click)=\"logout()\">\r\n                            <i class=\"fa fa-sign-out\"></i>\r\n                            Log out\r\n                        </a>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/allprograms/allprograms-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/allprograms/allprograms-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AllprogramsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllprogramsRoutingModule", function() { return AllprogramsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AllprogramsRoutingModule = class AllprogramsRoutingModule {
};
AllprogramsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AllprogramsRoutingModule);



/***/ }),

/***/ "./src/app/allprograms/allprograms.module.ts":
/*!***************************************************!*\
  !*** ./src/app/allprograms/allprograms.module.ts ***!
  \***************************************************/
/*! exports provided: AllprogramsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllprogramsModule", function() { return AllprogramsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _allprograms_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allprograms-routing.module */ "./src/app/allprograms/allprograms-routing.module.ts");
/* harmony import */ var _program_program_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./program/program.component */ "./src/app/allprograms/program/program.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let AllprogramsModule = class AllprogramsModule {
};
AllprogramsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_program_program_component__WEBPACK_IMPORTED_MODULE_4__["ProgramComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _allprograms_routing_module__WEBPACK_IMPORTED_MODULE_3__["AllprogramsRoutingModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ]
    })
], AllprogramsModule);



/***/ }),

/***/ "./src/app/allprograms/program/program.component.scss":
/*!************************************************************!*\
  !*** ./src/app/allprograms/program/program.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* clearfix style */\nimg {\n  max-width: 100%;\n  height: auto;\n}\n/*== start of code for tooltips ==*/\n.all_programs_wrap {\n  position: relative;\n  max-width: 90%;\n  margin: 0 auto;\n}\n.all_programs_wrap .close img {\n  position: absolute;\n  top: 10px;\n  right: -48px;\n  z-index: 99;\n}\n.all_programs_wrap .search_filter {\n  padding: 15px;\n  position: relative;\n}\n.all_programs_wrap .search_filter input {\n  background: #f9f9f9;\n  outline: 0;\n  box-shadow: none;\n  border: 1px solid #eeecec;\n  padding: 5px;\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 300;\n  border-radius: 3px;\n  line-height: 29px;\n  width: 350px;\n  margin: 0 auto;\n  padding-left: 30px;\n}\n.all_programs_wrap .search_filter input::-webkit-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.all_programs_wrap .search_filter input::-moz-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.all_programs_wrap .search_filter input::-ms-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.all_programs_wrap .search_filter input::placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.all_programs_wrap .search_filter input::-webkit-inner-spin-button, .all_programs_wrap .search_filter input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.all_programs_wrap .search_filter img {\n  position: absolute;\n  left: 34%;\n  top: 30px;\n  z-index: 99;\n}\n.all_programs_wrap .letter_filter_wrap .col-2 {\n  padding: 7px;\n}\n.all_programs_wrap .letter_filter_wrap .col-2 .letter {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 24px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  display: inline-block;\n  width: 100%;\n  margin: 0;\n  color: #00B894;\n  font-weight: 700;\n}\n@media (max-width: 991px) {\n  .all_programs_wrap .letter_filter_wrap .col-2 .letter {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .all_programs_wrap .letter_filter_wrap .col-2 .letter {\n    font-size: 16px;\n  }\n}\n.all_programs_wrap .letter_filter_wrap .col-2 .data .checkbox_wrap {\n  margin: auto;\n}\n.all_programs_wrap .letter_filter_wrap .col-2 .data .checkbox_wrap input[type=checkbox] {\n  display: none;\n}\n.all_programs_wrap .letter_filter_wrap .col-2 .data .checkbox_wrap input[type=checkbox] + label {\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  color: #4A4A4A;\n  font-size: 16px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  line-height: 22px;\n  margin: 0 auto;\n  display: inline-block;\n}\n.all_programs_wrap .letter_filter_wrap .col-2 .data .checkbox_wrap input[type=checkbox] + label:before {\n  content: \"\";\n  display: block;\n  width: 19px;\n  height: 19px;\n  border: 1px solid #00B894;\n  position: absolute;\n  left: 0;\n  top: 2px;\n  opacity: 0.6;\n  transition: all 0.12s, border-color 0.08s;\n  border-radius: 2px;\n}\n.all_programs_wrap .letter_filter_wrap .col-2 .data .checkbox_wrap input[type=checkbox]:checked + label:before {\n  width: 6px;\n  top: 1px;\n  left: 7.5px;\n  border-radius: 0;\n  opacity: 1;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  transform: rotate(45deg);\n  height: 12px;\n  border-bottom-color: #ffffff;\n  border-right-color: #ffffff;\n  z-index: 99;\n}\n.all_programs_wrap .letter_filter_wrap .col-2 .data .checkbox_wrap input[type=checkbox]:checked + label:after {\n  content: \"\";\n  display: block;\n  width: 19px;\n  height: 19px;\n  border: 1px solid #00B894;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 1;\n  transition: all 0.12s, border-color 0.08s;\n  background: #00B894;\n  border-radius: 2px;\n}\n.all_programs_wrap .letter_filter_wrap .col-2 .data .checkbox_wrap label {\n  width: 100%;\n  padding: 7px !important;\n  text-transform: capitalize;\n}\n.all_programs_wrap .letter_filter_wrap .col-2 .data .checkbox_wrap label:before {\n  left: 93% !important;\n  border: none !important;\n}\n.all_programs_wrap .letter_filter_wrap .col-2 .data .checkbox_wrap label:after {\n  left: 88% !important;\n  background: none !important;\n  border: none !important;\n}\n.all_programs_wrap .letter_filter_wrap .col-2 .data .checkbox_wrap .form-group {\n  margin: 0 auto;\n  position: relative;\n}\n.all_programs_wrap .letter_filter_wrap .col-2 .data .checkbox_wrap .form-group input[type=checkbox]:checked + label {\n  color: #00B894;\n  background-color: rgba(0, 184, 148, 0.05);\n  border-radius: 3px;\n  padding: 7px !important;\n}\n.all_programs_wrap .letter_filter_wrap .col-2 .data .checkbox_wrap .form-group input[type=checkbox]:checked + label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 10px !important;\n  right: 13px !important;\n  width: 7px !important;\n  height: 14px !important;\n  border: solid #00B894 !important;\n  border-width: 0 2px 2px 0 !important;\n  transform: rotate(45deg) !important;\n}\n.all_programs_wrap .letter_filter_wrap .col-2 .data .checkbox_wrap .form-group input {\n  position: absolute;\n  top: 7px;\n  width: 100%;\n  z-index: 99;\n  opacity: 0;\n  cursor: pointer;\n  display: block;\n}\n.all_programs_wrap .modal_footer .action_btn {\n  display: flex;\n  position: relative;\n}\n.all_programs_wrap .modal_footer .action_btn button {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n}\n.all_programs_wrap .modal_footer .action_btn button:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.all_programs_wrap .modal_footer .action_btn button:focus {\n  outline: none;\n}\n.all_programs_wrap .modal_footer .action_btn button:visited {\n  color: #ffffff;\n}\n.all_programs_wrap .modal_footer .action_btn button:last-child {\n  margin-left: auto;\n}\n.all_programs_wrap .modal_footer .action_btn .count {\n  position: absolute;\n  right: 130px;\n  top: 10px;\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxscHJvZ3JhbXMvcHJvZ3JhbS9EOlxccmVjb25OZXdcXFJlY29uX0Rhc2hib2FyZC9zcmNcXHNjc3NcXG1peGlucy5zY3NzIiwic3JjL2FwcC9hbGxwcm9ncmFtcy9wcm9ncmFtL3Byb2dyYW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FsbHByb2dyYW1zL3Byb2dyYW0vRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxhcHBcXGFsbHByb2dyYW1zXFxwcm9ncmFtXFxwcm9ncmFtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGxwcm9ncmFtcy9wcm9ncmFtL0Q6XFxyZWNvbk5ld1xcUmVjb25fRGFzaGJvYXJkL3NyY1xcc2Nzc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQUE7QUFpQkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ2ZGO0FEd29CQSxtQ0FBQTtBRTFvQkE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FETUY7QUNKSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FETU47QUNIRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBREtKO0FDSkk7RUYwUkYsbUJHN1JpQjtFSDhSakIsVUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VFblNJLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURpQk47QURrUkU7RUFDRSxjRzdSZ0I7RUg4UmhCLGVBQUE7QUNoUko7QUQ4UUU7RUFDRSxjRzdSZ0I7RUg4UmhCLGVBQUE7QUNoUko7QUQ4UUU7RUFDRSxjRzdSZ0I7RUg4UmhCLGVBQUE7QUNoUko7QUQ4UUU7RUFDRSxjRzdSZ0I7RUg4UmhCLGVBQUE7QUNoUko7QURrUkU7RUFFRSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDalJKO0FDekJJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUQyQk47QUN2Qkk7RUFDRSxZQUFBO0FEeUJOO0FDeEJNO0VGaU1KLHFCQUFBO0VBQ0EsY0c3TWtCO0VIOE1sQixlQUFBO0VBQ0EsZ0JHcE1hO0VIcU1iLGlCQUFBO0VBQ0EsaUNHeE1ZO0VIeU1aLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFRXhNTSxjQy9CTTtFRGdDTixnQkFBQTtBRG1DUjtBRDlCSTtFRVJFO0lGNk1GLGtCQUFBO0VDbktGO0FBQ0Y7QUQvQ0k7RUVJRTtJRmlORixlQUFBO0VDbEtGO0FBQ0Y7QUMxQ1E7RUYwaEJOLFlBQUE7QUM3ZUY7QUQrZUU7RUFDRSxhQUFBO0FDN2VKO0FEZ2ZFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0d0akJnQjtFSHVqQmhCLGVBQUE7RUFDQSxnQkc5aUJTO0VIK2lCVCxpQ0doakJVO0VIaWpCVix5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQzllSjtBRGdmSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBRUEseUNBQUE7RUFDQSxrQkFBQTtBQzllTjtBRG1mSTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFFQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkdobUJRO0VIaW1CUiwyQkdqbUJRO0VIa21CUixXQUFBO0FDamZOO0FEb2ZJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFFQSx5Q0FBQTtFQUNBLG1CR2hvQlE7RUhpb0JSLGtCQUFBO0FDbGZOO0FDMUdVO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUQ0R1o7QUMzR1k7RUFDRSxvQkFBQTtFQUNBLHVCQUFBO0FENkdkO0FDM0dZO0VBQ0Usb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FENkdkO0FDMUdVO0VBQ0UsY0FBQTtFQXFCQSxrQkFBQTtBRHdGWjtBQzNHYztFQUNFLGNDdkRGO0VEd0RFLHlDQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBRDZHaEI7QUM1R2dCO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FEOEdsQjtBQ3pHWTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEMkdkO0FDbkdJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FEcUdOO0FDcEdNO0VGMFBKLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNHNVVZO0VINlVaLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJHL1ZZO0VIZ1daLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNuSkY7QURxSkU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzREFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ25KSjtBRHNKRTtFQUNFLGFBQUE7QUNwSko7QURzSkU7RUFDRSxjR2xXVTtBRjhNZDtBQy9IUTtFQUNFLGlCQUFBO0FEaUlWO0FDOUhNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QURnSVIiLCJmaWxlIjoic3JjL2FwcC9hbGxwcm9ncmFtcy9wcm9ncmFtL3Byb2dyYW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjbGVhcmZpeCBzdHlsZSAqL1xyXG5cclxuLy8gQ2xlYXJmaXggbWl4aW5cclxuJWNsZWFyZml4IHtcclxuICAqem9vbTogMTtcclxuXHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLy8gRGVmaW5lIHRoZSBicmVha3BvaW50c1xyXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcclxuICBAaWYgJHBvaW50PT1zbWFsbC1kZXZpY2Uge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1tb2JpbGUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT10YWJsZXQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT10YWJsZXQwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09dGFibGV0cHJvIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09aXBhZCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PWxhcHRvcCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1sYXB0b3BtYXgge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09ZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vL2xvYWRlclxyXG5AbWl4aW4gbG9hZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGJhY2tncm91bmQ6ICRibGFjay1vdmVybGF5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gIH1cclxufVxyXG4vLyBqdXN0aWZ5LWNvbnRlbnQgbWl4aW5cclxuXHJcbkBtaXhpbiBqdXN0aWZ5LWNvbnRlbnQoJGp1c3RpZnkpIHtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgLW1zLWZsZXgtcGFjazogJGp1c3RpZnk7XHJcbn1cclxuXHJcbi8vIGFsaWduLWl0ZW1zIG1peGluXHJcblxyXG5AbWl4aW4gYWxpZ24taXRlbXMoJGFsaWduLWhvcml6b250YWxseSkge1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbiAgLW1vei1hbGlnbi1pdGVtczogJGFsaWduLWhvcml6b250YWxseTtcclxuICAtbXMtYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbn1cclxuXHJcbi8vIFRyYW5zaXRpb24gbWl4aW5cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uKSB7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG59XHJcblxyXG4vLyBUcmFuc2Zvcm0gbWl4aW5cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybSkge1xyXG4gIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG4gIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbkBtaXhpbiBib3gtc2hhZG93KCRhcmdzKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAtbW96LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gIC1tcy1ib3gtc2hhZG93OiAkYXJncztcclxuICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxufVxyXG5cclxuLy9QYWRkaW5nIG1peGluXHJcbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpIHtcclxuICBwYWRkaW5nLXRvcDogJHRvcDtcclxuICBwYWRkaW5nLXJpZ2h0OiAkcmlnaHQ7XHJcbiAgcGFkZGluZy1ib3R0b206ICRib3R0b207XHJcbiAgcGFkZGluZy1sZWZ0OiAkbGVmdDtcclxufVxyXG5cclxuLy9NYXJnaW4gbWl4aW5cclxuQG1peGluIG1hcmdpbigkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KSB7XHJcbiAgbWFyZ2luLXRvcDogJHRvcDtcclxuICBtYXJnaW4tcmlnaHQ6ICRyaWdodDtcclxuICBtYXJnaW4tYm90dG9tOiAkYm90dG9tO1xyXG4gIG1hcmdpbi1sZWZ0OiAkbGVmdDtcclxufVxyXG5cclxuLy9wb3NpdGlvbiBtaXhpblxyXG5AbWl4aW4gcG9zaXRpb24oJHBvc2l0aW9uLCAkdG9wOiBudWxsLCAkcmlnaHQ6IG51bGwsICRib3R0b206IG51bGwsICRsZWZ0OiBudWxsKSB7XHJcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcclxuICB0b3A6ICR0b3A7XHJcbiAgcmlnaHQ6ICRyaWdodDtcclxuICBib3R0b206ICRib3R0b207XHJcbiAgbGVmdDogJGxlZnQ7XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLUgxIHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gaGVhZGluZy1IMiB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGhlYWRpbmctSDMge1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLUg0IHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LXJlZ3VsYXI7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHBhcmFncmFwaCB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1yZWd1bGFyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29sb3JCb3gge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvZHktYmctY29sb3I7XHJcbiAgLy8gYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggMXB4IDRweCAwLjVweDsgO1xyXG59XHJcblxyXG5AbWl4aW4gYW5jaG9yIHtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcblxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyxcclxuICAmOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICB9XHJcbn1cclxuXHJcbi8vIGRlZmF1bHQgaW5wdXQgdHlwZSBhbnlcclxuQG1peGluIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4gICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vdGV4dGFyZWFcclxuQG1peGluIHRleHRhcmVhIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZGVmYXVsdCBidXR0b25cclxuQG1peGluIGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiA5cHggMTVweCA5cHg7XHJcbiAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKCR0aGVtZS1jb2xvciwgMC4zKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uMSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiA5cHggMTVweCA5cHg7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGJveCBkcl9zdW1tYXJ5XHJcbkBtaXhpbiBib3gge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDFweCA0cHggMC41cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbkBtaXhpbiBtb25fbmFtZSB7XHJcbiAgLy8gcGFkZGluZzogMHB4IDAgMHB4IDE1cHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuQG1peGluIG1vbl9ubyB7XHJcbiAgcGFkZGluZzogMHB4IDAgMHB4IDEwcHg7XHJcbiAgLy8gY29sb3I6ICM0YTRhNGE7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIGRlZmF1bHQgcHJvZHVjdC1idXR0b25cclxuQG1peGluIHByb2R1Y3QtYnV0dG9uIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA1cHggMTRweCA2cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDJweCB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50O1xyXG4gIC1vLWJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIC1vLWJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyByaWdodCB3aGl0ZSBhcnJvdyBpbiBidXR0b25cclxuLy8gQG1peGluIGJ0bl9yaWdodF9hcnJvdyB7XHJcbi8vICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuXHJcbi8vICAgJjphZnRlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoKSBuby1yZXBlYXQ7XHJcbi8vICAgICB3aWR0aDogMjBweDtcclxuLy8gICAgIGhlaWdodDogMTdweDtcclxuLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICByaWdodDogN3B4O1xyXG4vLyAgICAgdG9wOiAxMHB4O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy9mb3IgaDQgd2l0aCBib3R0b20gbGluZVxyXG5AbWl4aW4gdGV4dF91bmRlcmxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDJweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vZm9yIHNlbGVjdCB0YWdcclxuXHJcbkBtaXhpbiBzZWxlY3RCb3gge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW9zLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL2xpc3Quc3ZnKSByaWdodCBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMC43ZW0gdG9wIDUwJSwgMCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWluLXdpZHRoOiA5NXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vL2xhYmVsXHJcbkBtaXhpbiBsYWJlbCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGNvbG9yOiAkY29sb3ItZGFyay1ncmV5O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAmLmRpc2FibGUge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi8vaW1hZ2UgYm94IHNoYWRvd1xyXG5AbWl4aW4gaW1nLWJveC1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWNvbG9yIDBweCAxcHggNHB4IDAuNXB4O1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGJveC1zaGFkb3ctY29sb3IgMHB4IDFweCA0cHggMC41cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYm94LXNoYWRvdy1jb2xvciAwcHggMXB4IDRweDtcclxufVxyXG5cclxuLy9jaGVja2JveFxyXG5cclxuQG1peGluIGNoZWNrYm94IHtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTlweDtcclxuICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAycHg7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICB0b3A6IDFweDtcclxuICAgICAgbGVmdDogNy41cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTlweDtcclxuICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcclxuICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL3Rvb2wtdGlwXHJcblxyXG4vKj09IHN0YXJ0IG9mIGNvZGUgZm9yIHRvb2x0aXBzID09Ki9cclxuQG1peGluIGRlZmF1bHQtdG9vbC10aXAge1xyXG4gIGN1cnNvcjogaGVscDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTEwMDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICAmOmJlZm9yZSxcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMWVtIDAuNzVlbSAwIDAuNzVlbTtcclxuICAgIGJvcmRlci1jb2xvcjogI2JhYmJiYiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNWVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNiksIG9wYWNpdHkgMC42NXMgMC41cztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKC05MCUpO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmFiYmJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgYm90dG9tOiAxODAlO1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXApO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC04Ljc1ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTI2cHg7XHJcbiAgICAvLyBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KSAwLjJzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoNTAlKTtcclxuICAgIC8vIHdpZHRoOiAxNy41ZW07XHJcbiAgICBtaW4td2lkdGg6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTVlbTtcclxuICAgICAgd2lkdGg6IDEwZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL2xpc3Qgc3R5bGVcclxuXHJcbkBtaXhpbiBsaXN0c3R5bGUge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIi5cIjtcclxuICAgIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogNDFweDtcclxuICB9XHJcbn1cclxuXHJcbi8vZmlsZSB1cGxvYWQgaW5wdXRcclxuQG1peGluIGZpbGVfaW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgQGluY2x1ZGUgYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4vL2ZvciBibG9jayBtaXhpblxyXG5AbWl4aW4gYmxvY2tBbGxUZXh0IHtcclxuICBoMSB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUgxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUgyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUgzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUg0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjplbXB0eSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBicmVhZGNydW1iIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgQGluY2x1ZGUgYW5jaG9yO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vL3JhZGlvIGJ1dHRvblxyXG5cclxuQG1peGluIHJhZGlvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgJjpjaGVja2VkLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAvLyBsZWZ0OiA0Ny44JTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdG9wOiA1cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtaXhpbiByYWRpbzEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAmOmNoZWNrZWQsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDQ3LjglO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vZGVmYXVsdCB0YWJsZVxyXG5AbWl4aW4gdGFibGUge1xyXG4gIHRhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIHRoZWFkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgLmljb24taW5mby10b29sdGlwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZGVmYXVsdC10b29sLXRpcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGVja2JveF93cmFwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgY2hlY2tib3g7XHJcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRib2R5IHtcclxuICAgICAgdHIge1xyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAuZXJyb3IsXHJcbiAgICAgICAgICAubWFwcGVkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWNjZXNzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtY29sb3IsIDAuMDUpO1xyXG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kaXNhYmxlIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVycm9yIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItcmVkLCAwLjA1KTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1yZWQ7XHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kaXNhYmxlIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1hcHBlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLWxpZ2h0LWJsYWNrLCAwLjA1KTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZGlzYWJsZSB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGVja2JveF93cmFwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgY2hlY2tib3g7XHJcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBpbWctYm94LXNoYWRvdztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCR0aGVtZS1jb2xvciwgMC4wNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbi1pbmZvLXRvb2x0aXAge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZGVmYXVsdC10b29sLXRpcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyogY2xlYXJmaXggc3R5bGUgKi9cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKj09IHN0YXJ0IG9mIGNvZGUgZm9yIHRvb2x0aXBzID09Ki9cbi5hbGxfcHJvZ3JhbXNfd3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmFsbF9wcm9ncmFtc193cmFwIC5jbG9zZSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IC00OHB4O1xuICB6LWluZGV4OiA5OTtcbn1cbi5hbGxfcHJvZ3JhbXNfd3JhcCAuc2VhcmNoX2ZpbHRlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hbGxfcHJvZ3JhbXNfd3JhcCAuc2VhcmNoX2ZpbHRlciBpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVjZWM7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICB3aWR0aDogMzUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG59XG4uYWxsX3Byb2dyYW1zX3dyYXAgLnNlYXJjaF9maWx0ZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhY2FjYWM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5hbGxfcHJvZ3JhbXNfd3JhcCAuc2VhcmNoX2ZpbHRlciBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgLmFsbF9wcm9ncmFtc193cmFwIC5zZWFyY2hfZmlsdGVyIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5hbGxfcHJvZ3JhbXNfd3JhcCAuc2VhcmNoX2ZpbHRlciBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM0JTtcbiAgdG9wOiAzMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cbi5hbGxfcHJvZ3JhbXNfd3JhcCAubGV0dGVyX2ZpbHRlcl93cmFwIC5jb2wtMiB7XG4gIHBhZGRpbmc6IDdweDtcbn1cbi5hbGxfcHJvZ3JhbXNfd3JhcCAubGV0dGVyX2ZpbHRlcl93cmFwIC5jb2wtMiAubGV0dGVyIHtcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICMwMEI4OTQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmFsbF9wcm9ncmFtc193cmFwIC5sZXR0ZXJfZmlsdGVyX3dyYXAgLmNvbC0yIC5sZXR0ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5hbGxfcHJvZ3JhbXNfd3JhcCAubGV0dGVyX2ZpbHRlcl93cmFwIC5jb2wtMiAubGV0dGVyIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbi5hbGxfcHJvZ3JhbXNfd3JhcCAubGV0dGVyX2ZpbHRlcl93cmFwIC5jb2wtMiAuZGF0YSAuY2hlY2tib3hfd3JhcCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5hbGxfcHJvZ3JhbXNfd3JhcCAubGV0dGVyX2ZpbHRlcl93cmFwIC5jb2wtMiAuZGF0YSAuY2hlY2tib3hfd3JhcCBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYWxsX3Byb2dyYW1zX3dyYXAgLmxldHRlcl9maWx0ZXJfd3JhcCAuY29sLTIgLmRhdGEgLmNoZWNrYm94X3dyYXAgaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hbGxfcHJvZ3JhbXNfd3JhcCAubGV0dGVyX2ZpbHRlcl93cmFwIC5jb2wtMiAuZGF0YSAuY2hlY2tib3hfd3JhcCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCODk0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMnB4O1xuICBvcGFjaXR5OiAwLjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uYWxsX3Byb2dyYW1zX3dyYXAgLmxldHRlcl9maWx0ZXJfd3JhcCAuY29sLTIgLmRhdGEgLmNoZWNrYm94X3dyYXAgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XG4gIHdpZHRoOiA2cHg7XG4gIHRvcDogMXB4O1xuICBsZWZ0OiA3LjVweDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgb3BhY2l0eTogMTtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgaGVpZ2h0OiAxMnB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmlnaHQtY29sb3I6ICNmZmZmZmY7XG4gIHotaW5kZXg6IDk5O1xufVxuLmFsbF9wcm9ncmFtc193cmFwIC5sZXR0ZXJfZmlsdGVyX3dyYXAgLmNvbC0yIC5kYXRhIC5jaGVja2JveF93cmFwIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCODk0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XG4gIGJhY2tncm91bmQ6ICMwMEI4OTQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cbi5hbGxfcHJvZ3JhbXNfd3JhcCAubGV0dGVyX2ZpbHRlcl93cmFwIC5jb2wtMiAuZGF0YSAuY2hlY2tib3hfd3JhcCBsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA3cHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uYWxsX3Byb2dyYW1zX3dyYXAgLmxldHRlcl9maWx0ZXJfd3JhcCAuY29sLTIgLmRhdGEgLmNoZWNrYm94X3dyYXAgbGFiZWw6YmVmb3JlIHtcbiAgbGVmdDogOTMlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuLmFsbF9wcm9ncmFtc193cmFwIC5sZXR0ZXJfZmlsdGVyX3dyYXAgLmNvbC0yIC5kYXRhIC5jaGVja2JveF93cmFwIGxhYmVsOmFmdGVyIHtcbiAgbGVmdDogODglICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4uYWxsX3Byb2dyYW1zX3dyYXAgLmxldHRlcl9maWx0ZXJfd3JhcCAuY29sLTIgLmRhdGEgLmNoZWNrYm94X3dyYXAgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFsbF9wcm9ncmFtc193cmFwIC5sZXR0ZXJfZmlsdGVyX3dyYXAgLmNvbC0yIC5kYXRhIC5jaGVja2JveF93cmFwIC5mb3JtLWdyb3VwIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGNvbG9yOiAjMDBCODk0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDE4NCwgMTQ4LCAwLjA1KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiA3cHggIWltcG9ydGFudDtcbn1cbi5hbGxfcHJvZ3JhbXNfd3JhcCAubGV0dGVyX2ZpbHRlcl93cmFwIC5jb2wtMiAuZGF0YSAuY2hlY2tib3hfd3JhcCAuZm9ybS1ncm91cCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDEzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAjMDBCODk0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDAgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpICFpbXBvcnRhbnQ7XG59XG4uYWxsX3Byb2dyYW1zX3dyYXAgLmxldHRlcl9maWx0ZXJfd3JhcCAuY29sLTIgLmRhdGEgLmNoZWNrYm94X3dyYXAgLmZvcm0tZ3JvdXAgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uYWxsX3Byb2dyYW1zX3dyYXAgLm1vZGFsX2Zvb3RlciAuYWN0aW9uX2J0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hbGxfcHJvZ3JhbXNfd3JhcCAubW9kYWxfZm9vdGVyIC5hY3Rpb25fYnRuIGJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEI4OTQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDlweCAxNXB4IDlweDtcbiAgYmFja2dyb3VuZDogIzAwQjg5NDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xufVxuLmFsbF9wcm9ncmFtc193cmFwIC5tb2RhbF9mb290ZXIgLmFjdGlvbl9idG4gYnV0dG9uOmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoMCwgMTg0LCAxNDgsIDAuMyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuLmFsbF9wcm9ncmFtc193cmFwIC5tb2RhbF9mb290ZXIgLmFjdGlvbl9idG4gYnV0dG9uOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5hbGxfcHJvZ3JhbXNfd3JhcCAubW9kYWxfZm9vdGVyIC5hY3Rpb25fYnRuIGJ1dHRvbjp2aXNpdGVkIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uYWxsX3Byb2dyYW1zX3dyYXAgLm1vZGFsX2Zvb3RlciAuYWN0aW9uX2J0biBidXR0b246bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLmFsbF9wcm9ncmFtc193cmFwIC5tb2RhbF9mb290ZXIgLmFjdGlvbl9idG4gLmNvdW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTMwcHg7XG4gIHRvcDogMTBweDtcbiAgei1pbmRleDogOTk7XG59IiwiQGltcG9ydCBcInNyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XHJcbkBpbXBvcnQgXCJzcmMvc2Nzcy9taXhpbnMuc2Nzc1wiO1xyXG4uYWxsX3Byb2dyYW1zX3dyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICAuY2xvc2Uge1xyXG4gICAgaW1nIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgICAgIHJpZ2h0OiAtNDhweDtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZWFyY2hfZmlsdGVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIEBpbmNsdWRlIGlucHV0O1xyXG4gICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDM0JTtcclxuICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgIH1cclxuICB9XHJcbiAgLmxldHRlcl9maWx0ZXJfd3JhcCB7XHJcbiAgICAuY29sLTIge1xyXG4gICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgIC5sZXR0ZXIge1xyXG4gICAgICAgIEBpbmNsdWRlIGhlYWRpbmctSDQ7XHJcbiAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5kYXRhIHtcclxuICAgICAgICAuY2hlY2tib3hfd3JhcCB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBjaGVja2JveDtcclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDkzJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDg4JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtY29sb3IsIDAuMDUpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgJHRoZW1lLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubW9kYWxfZm9vdGVyIHtcclxuICAgIC5hY3Rpb25fYnRuIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIEBpbmNsdWRlIGJ1dHRvbjtcclxuICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jb3VudCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxMzBweDtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiXHJcbi8vIGdsb2JhbC12YXJpYWJsZVxyXG4kaGVhZGVyLWNvbG9yOiAjMjYyNjI2O1xyXG4kYm9keS1iZy1jb2xvcjogI0YzRjNGMztcclxuJHRoZW1lLWNvbG9yOiAjMDBCODk0O1xyXG4kY29sb3ItcmVkOiAjRkY0QjRCO1xyXG4kY29sb3ItdmFsaWQtZXJyb3I6I0U1MzkzNTtcclxuJGNvbG9yLWludmFsaWQtZXJyb3I6I0I3MWMxYztcclxuJGNvbG9yLW1hZ2VudGE6ICNiYzY0OWM7XHJcbiRjb2xvci1waW5rOiAjZjQ5NGM4O1xyXG4kY29sb3ItZ3JlZW46ICM4NEMxNDA7XHJcbiRjb2xvci1saWdodC1ncmVlbjogI0JDRDUzMztcclxuJGNvbG9yLWJsdWU6ICM5NGQwZWE7XHJcbiRjb2xvci1kYXJrLWdyZXk6ICM5QTlBOUE7XHJcbiRjb2xvci1saWdodC1ncmV5OiAjZjlmOWY5O1xyXG4kY29sb3ItZXh0cmEtbGlnaHQtZ3JleTogI0Y0RjRGNDtcclxuJGNvbG9yLW9yYW5nZTogI0UzNzgyNjtcclxuJGNvbG9yLWxpZ2h0LW9yYW5nZTogI0VCOTgyMjtcclxuJGNvbG9yLWV4dHJhLWxpZ2h0LW9yYW5nZTogI0ZDQUYxNztcclxuJGNvbG9yLXdoaXRlOiAjZmZmZmZmO1xyXG4kYm9yZGVyLWNvbG9yOiAjZWVlY2VjO1xyXG4kbm90aWZpY2F0aW9uLWJnOiAjY2VlM2YwO1xyXG4kY29sb3ItbGlnaHQtYmxhY2s6ICM0QTRBNEE7XHJcbiRjb2xvci1ibGFjazogIzAwMDAwMDtcclxuJGNvbG9yLXllbGxvdzogI2Y5ZTkwNztcclxuJGJveC1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsLjIpO1xyXG4kYmxhY2stb3ZlcmxheTogcmdiYSgwLDAsMCwwLjcpO1xyXG4kd2hpdGUtb3ZlcmxheTogcmdiKDI0NywgMjQ3LCAyNDcpO1xyXG4kcGxhY2Vob2xkZXItY29sb3I6ICNhY2FjYWM7XHJcbiRjb2xvci1iYWNrZ3JvdW5kOiAjZTFmYmZhO1xyXG4kY29sb3ItaW5mbzogI0Y3QjUwMDtcclxuJGZvbnQtcm9ib3RvOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtbGlnaHQ6IDMwMDtcclxuJGZvbnQtcmVndWxhcjogNDAwO1xyXG4kZm9udC1ib2xkOiA3MDA7XHJcbiRmb250LWgxOiAzNHB4O1xyXG4kZm9udC1oMjogMzBweDtcclxuJGZvbnQtaDM6IDI0cHg7XHJcbiRmb250LWg0OiAxOHB4O1xyXG4kZm9udC1oNTogMTZweDtcclxuJGZvbnQtaDY6IDE0cHg7XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/allprograms/program/program.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/allprograms/program/program.component.ts ***!
  \**********************************************************/
/*! exports provided: ProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramComponent", function() { return ProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/utility.service */ "./src/app/service/utility.service.ts");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/global.service */ "./src/app/service/global.service.ts");





let ProgramComponent = class ProgramComponent {
    constructor(activeModal, utilityService, globalService) {
        this.activeModal = activeModal;
        this.utilityService = utilityService;
        this.globalService = globalService;
        this.allProgram = [];
        this.programData = [];
        this.arrProgramInfoWithKey = {};
        this.selectedProgramCount = 0;
        this.totalProgramCount = 0;
    }
    ngOnInit() {
        this.programData = this.globalService.getUploadData();
        this.allProgram = this.utilityService.getLetterByFilter(this.programData);
        this.selectedProgramString();
        for (let i = 0; i < this.programData.length; i++) {
            this.arrProgramInfoWithKey[this.programData[i].brandId] = this.programData[i];
        }
    }
    // objs.sort( compare );
    selectedSearchText(searchText) {
        this.searchText = searchText;
    }
    selectedProgramString() {
        const selectedProgram = [];
        this.totalProgramCount = 0;
        this.selectedProgramCount = 0;
        for (let i = 0; i < this.programData.length; i++) {
            if (this.programData[i].isSelect) {
                selectedProgram.push(this.programData[i].brandName);
                this.selectedProgramCount++;
            }
            this.totalProgramCount++;
        }
        this.selectedProgram = selectedProgram.join();
    }
    getselectedProgram(data) {
        if (this.arrProgramInfoWithKey[data.brandId].isSelect) {
            this.arrProgramInfoWithKey[data.brandId].isSelect = false;
        }
        else {
            this.arrProgramInfoWithKey[data.brandId].isSelect = true;
        }
        this.selectedProgramString();
        this.allProgram = this.utilityService.getLetterByFilter(this.programData);
    }
    closeModal() {
        this.activeModal.close(this.programData);
    }
};
ProgramComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] },
    { type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] }
];
ProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-program',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./program.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/allprograms/program/program.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./program.component.scss */ "./src/app/allprograms/program/program.component.scss")).default]
    })
], ProgramComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");




let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_3__["routes"]);


/***/ }),

/***/ "./src/app/app.component.tns.ts":
/*!**************************************!*\
  !*** ./src/app/app.component.tns.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _src_app_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @src/app/header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _src_app_dashboard_duplicate_duplicate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @src/app/dashboard/duplicate/duplicate.component */ "./src/app/dashboard/duplicate/duplicate.component.ts");
/* harmony import */ var _src_app_auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @src/app/auto-generated/auto-generated.component */ "./src/app/auto-generated/auto-generated.component.ts");
/* harmony import */ var _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @src/app/auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _src_app_allprograms_allprograms_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @src/app/allprograms/allprograms.module */ "./src/app/allprograms/allprograms.module.ts");
/* harmony import */ var _src_app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @src/app/auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _src_app_allprograms_program_program_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @src/app/allprograms/program/program.component */ "./src/app/allprograms/program/program.component.ts");
/* harmony import */ var _src_app_app_component_tns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @src/app/app.component.tns */ "./src/app/app.component.tns.ts");

















// import { StatusComponent } from '@src/app/recon_status/status/status.component';
// import { SummaryComponent } from '@src/app/DR_Summary/summary/summary.component';
// import { SignupComponent } from '@src/app/ragistration/signup/signup.component';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _src_app_app_component_tns__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
            _src_app_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _src_app_dashboard_duplicate_duplicate_component__WEBPACK_IMPORTED_MODULE_9__["DuplicateComponent"],
            _src_app_auto_generated_auto_generated_component__WEBPACK_IMPORTED_MODULE_10__["AutoGeneratedComponent"],
        ],
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _src_app_auth_auth_module__WEBPACK_IMPORTED_MODULE_12__["AuthModule"],
            _src_app_allprograms_allprograms_module__WEBPACK_IMPORTED_MODULE_13__["AllprogramsModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBBootstrapModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ],
        exports: [],
        entryComponents: [
            _src_app_auth_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _src_app_allprograms_program_program_component__WEBPACK_IMPORTED_MODULE_15__["ProgramComponent"],
            _src_app_dashboard_duplicate_duplicate_component__WEBPACK_IMPORTED_MODULE_9__["DuplicateComponent"],
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
        providers: [],
        bootstrap: [_src_app_app_component_tns__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const routes = [
    {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full',
    },
    {
        path: 'signup',
        redirectTo: 'signup',
        pathMatch: 'full',
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then(mod => mod.AuthModule)
    },
    // {
    //   path: '',
    //   loadChildren: () => import('./ragistration/signup.module').then(mod => mod.signupModule)
    // },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~config-config-module~dashboard-d~296b1d95"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~config-config-module~dashboard-d~89c2e599"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dashboard-dashboard-module~digit~1ef5a987"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dashboard-dashboard-module~dqr-d~bd2ce3e8"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(mod => mod.DashboardModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | config-config-module */[__webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~config-config-module~dashboard-d~296b1d95"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~config-config-module~dashboard-d~89c2e599"), __webpack_require__.e("default~config-config-module~digitalRiceipt-digitalRiceipt-module"), __webpack_require__.e("config-config-module")]).then(__webpack_require__.bind(null, /*! ./config/config.module */ "./src/app/config/config.module.ts")).then(mod => mod.ConfigModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | dqr-dqr-module */[__webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~config-config-module~dashboard-d~296b1d95"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~config-config-module~dashboard-d~89c2e599"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dashboard-dashboard-module~digit~1ef5a987"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dashboard-dashboard-module~dqr-d~bd2ce3e8"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dqr-dqr-module~recon_status-status-module"), __webpack_require__.e("dqr-dqr-module")]).then(__webpack_require__.bind(null, /*! ./dqr/dqr.module */ "./src/app/dqr/dqr.module.ts")).then(mod => mod.DqrModule)
    },
    // recon_status
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | recon_status-status-module */[__webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~config-config-module~dashboard-d~296b1d95"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~config-config-module~dashboard-d~89c2e599"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dashboard-dashboard-module~digit~1ef5a987"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dashboard-dashboard-module~dqr-d~bd2ce3e8"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dqr-dqr-module~recon_status-status-module"), __webpack_require__.e("recon_status-status-module")]).then(__webpack_require__.bind(null, /*! ./recon_status/status.module */ "./src/app/recon_status/status.module.ts")).then(mod => mod.statusModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | DR_Summary-summary-module */[__webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~config-config-module~dashboard-d~296b1d95"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~config-config-module~dashboard-d~89c2e599"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dashboard-dashboard-module~digit~1ef5a987"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dashboard-dashboard-module~dqr-d~bd2ce3e8"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dqr-dqr-module~recon_status-status-module"), __webpack_require__.e("DR_Summary-summary-module")]).then(__webpack_require__.bind(null, /*! ./DR_Summary/summary.module */ "./src/app/DR_Summary/summary.module.ts")).then(mod => mod.summaryModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | digitalRiceipt-digitalRiceipt-module */[__webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~config-config-module~dashboard-d~296b1d95"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dashboard-dashboard-module~digit~1ef5a987"), __webpack_require__.e("default~config-config-module~digitalRiceipt-digitalRiceipt-module"), __webpack_require__.e("digitalRiceipt-digitalRiceipt-module")]).then(__webpack_require__.bind(null, /*! ./digitalRiceipt/digitalRiceipt.module */ "./src/app/digitalRiceipt/digitalRiceipt.module.ts")).then(mod => mod.DigitalRiceiptModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | ReconSummary-recon-summary-module */[__webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~config-config-module~dashboard-d~296b1d95"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~config-config-module~dashboard-d~89c2e599"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dashboard-dashboard-module~digit~1ef5a987"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dashboard-dashboard-module~dqr-d~bd2ce3e8"), __webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dqr-dqr-module~recon_status-status-module"), __webpack_require__.e("ReconSummary-recon-summary-module")]).then(__webpack_require__.bind(null, /*! ./ReconSummary/recon-summary.module */ "./src/app/ReconSummary/recon-summary.module.ts")).then(mod => mod.ReconSummaryModule)
    },
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | fileValidate-fileValidate-module */[__webpack_require__.e("default~DR_Summary-summary-module~ReconSummary-recon-summary-module~config-config-module~dashboard-d~296b1d95"), __webpack_require__.e("fileValidate-fileValidate-module")]).then(__webpack_require__.bind(null, /*! ./fileValidate/fileValidate.module */ "./src/app/fileValidate/fileValidate.module.ts")).then(mod => mod.FileValidateModule)
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | alert-redAlert-module */ "alert-redAlert-module").then(__webpack_require__.bind(null, /*! ./alert/redAlert.module */ "./src/app/alert/redAlert.module.ts")).then(mod => mod.RedAlertModule)
    }
];


/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");




const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-show-hide-password */ "./node_modules/ngx-show-hide-password/fesm2015/ngx-show-hide-password.js");







let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_6__["ShowHidePasswordModule"],
        ],
        entryComponents: [],
        exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* clearfix style */\nimg {\n  max-width: 100%;\n  height: auto;\n}\n/*== start of code for tooltips ==*/\n.page_content {\n  position: relative;\n  min-height: 100vh;\n}\n.page_content nav {\n  padding: 0px 30px;\n}\n.page_content nav .navbar-brand {\n  padding: 5px 0;\n  margin: 0;\n  padding-right: 20px;\n}\n.page_content nav .navbar-brand img {\n  max-width: 69px;\n  width: 100%;\n}\n.page_content .login_form_wrap {\n  max-width: 400px;\n  width: 100%;\n  margin: 0 auto;\n  background-color: #ffffff;\n  padding: 15px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 10px;\n}\n.page_content .login_form_wrap .logo_wrap {\n  text-align: center;\n  padding: 15px;\n}\n.page_content .login_form_wrap .logo_wrap img {\n  max-width: 200px;\n}\n.page_content .login_form_wrap .form_wrap {\n  max-width: 80%;\n  margin: 0 auto;\n  padding: 15px 0;\n}\n.page_content .login_form_wrap .form_wrap .form_title h4 {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 18px;\n  font-weight: 400;\n  line-height: 24px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  display: inline-block;\n  width: 100%;\n  margin: 0;\n}\n@media (max-width: 991px) {\n  .page_content .login_form_wrap .form_wrap .form_title h4 {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .page_content .login_form_wrap .form_wrap .form_title h4 {\n    font-size: 16px;\n  }\n}\n.page_content .login_form_wrap .form_wrap label {\n  padding: 0px;\n  margin: 0px;\n  color: #9A9A9A;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  display: block;\n  margin-bottom: 5px;\n}\n.page_content .login_form_wrap .form_wrap label.disable {\n  cursor: not-allowed;\n}\n@media (max-width: 576px) {\n  .page_content .login_form_wrap .form_wrap label {\n    font-size: 14px;\n  }\n}\n.page_content .login_form_wrap .form_wrap input {\n  background: #f9f9f9;\n  outline: 0;\n  box-shadow: none;\n  border: 1px solid #eeecec;\n  padding: 5px;\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 300;\n  border-radius: 3px;\n  line-height: 29px;\n}\n.page_content .login_form_wrap .form_wrap input::-webkit-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.page_content .login_form_wrap .form_wrap input::-moz-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.page_content .login_form_wrap .form_wrap input::-ms-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.page_content .login_form_wrap .form_wrap input::placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.page_content .login_form_wrap .form_wrap input::-webkit-inner-spin-button, .page_content .login_form_wrap .form_wrap input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.page_content .login_form_wrap .form_wrap .password {\n  position: relative;\n}\n.page_content .login_form_wrap .form_wrap .password .btn-toggle-pass {\n  position: absolute;\n  top: 33px;\n  right: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.page_content .login_form_wrap .form_wrap .password .btn-toggle-pass i {\n  color: #9A9A9A;\n  font-size: 20px;\n}\n.page_content .login_form_wrap .form_wrap .action_btn {\n  margin-top: 10px;\n}\n.page_content .login_form_wrap .form_wrap .action_btn button {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  width: 100%;\n  font-size: 14px;\n}\n.page_content .login_form_wrap .form_wrap .action_btn button:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.page_content .login_form_wrap .form_wrap .action_btn button:focus {\n  outline: none;\n}\n.page_content .login_form_wrap .form_wrap .action_btn button:visited {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9EOlxccmVjb25OZXdcXFJlY29uX0Rhc2hib2FyZC9zcmNcXHNjc3NcXG1peGlucy5zY3NzIiwic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRoL2xvZ2luL0Q6XFxyZWNvbk5ld1xcUmVjb25fRGFzaGJvYXJkL3NyY1xcYXBwXFxhdXRoXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4vRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBQTtBQWlCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDZkY7QUR3b0JBLG1DQUFBO0FFem9CQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QURLRjtBQ0pFO0VBQ0UsaUJBQUE7QURNSjtBQ0xJO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBRE9OO0FDTk07RUFDRSxlQUFBO0VBQ0EsV0FBQTtBRFFSO0FDSkU7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJDSFU7RURJVixhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QURNSjtBQ0xJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FET047QUNOTTtFQUNFLGdCQUFBO0FEUVI7QUNMSTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRE9OO0FDTFE7RUZ5TE4scUJBQUE7RUFDQSxjRzdNa0I7RUg4TWxCLGVBQUE7RUFDQSxnQkdwTWE7RUhxTWIsaUJBQUE7RUFDQSxpQ0d4TVk7RUh5TVosZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDakxGO0FEakJJO0VFQUk7SUZxTUosa0JBQUE7RUNoTEY7QUFDRjtBRGxDSTtFRVlJO0lGeU1KLGVBQUE7RUMvS0Y7QUFDRjtBQ3ZCTTtFRnlmSixZQUFBO0VBQ0EsV0FBQTtFQUNBLGNHM2hCZ0I7RUg0aEJoQixlQUFBO0VBQ0EsZ0JHMWdCVztFSDJnQlgsaUNHNWdCWTtFSDZnQlosZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUMvZEY7QURnZUU7RUFDRSxtQkFBQTtBQzlkSjtBRHJESTtFRWdCRTtJRnNnQkYsZUFBQTtFQzdkRjtBQUNGO0FDdkNNO0VGMlBKLG1CRzdSaUI7RUg4UmpCLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2pORjtBRG1ORTtFQUNFLGNHN1JnQjtFSDhSaEIsZUFBQTtBQ2pOSjtBRCtNRTtFQUNFLGNHN1JnQjtFSDhSaEIsZUFBQTtBQ2pOSjtBRCtNRTtFQUNFLGNHN1JnQjtFSDhSaEIsZUFBQTtBQ2pOSjtBRCtNRTtFQUNFLGNHN1JnQjtFSDhSaEIsZUFBQTtBQ2pOSjtBRG1ORTtFQUVFLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNsTko7QUM1RE07RUFDRSxrQkFBQTtBRDhEUjtBQzdEUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FEK0RWO0FDOURVO0VBQ0UsY0NoRE07RURpRE4sZUFBQTtBRGdFWjtBQzVETTtFQUNFLGdCQUFBO0FEOERSO0FDN0RRO0VGc1JOLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNHNVVZO0VINlVaLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJHL1ZZO0VIZ1daLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUVqU1EsV0FBQTtFQUNBLGVBQUE7QUQ0RVY7QURzTkU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzREFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtBQ3BOSjtBRHVORTtFQUNFLGFBQUE7QUNyTko7QUR1TkU7RUFDRSxjR2xXVTtBRjZJZCIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjbGVhcmZpeCBzdHlsZSAqL1xyXG5cclxuLy8gQ2xlYXJmaXggbWl4aW5cclxuJWNsZWFyZml4IHtcclxuICAqem9vbTogMTtcclxuXHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLy8gRGVmaW5lIHRoZSBicmVha3BvaW50c1xyXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcclxuICBAaWYgJHBvaW50PT1zbWFsbC1kZXZpY2Uge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1tb2JpbGUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT10YWJsZXQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT10YWJsZXQwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09dGFibGV0cHJvIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09aXBhZCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PWxhcHRvcCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1sYXB0b3BtYXgge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09ZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vL2xvYWRlclxyXG5AbWl4aW4gbG9hZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGJhY2tncm91bmQ6ICRibGFjay1vdmVybGF5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gIH1cclxufVxyXG4vLyBqdXN0aWZ5LWNvbnRlbnQgbWl4aW5cclxuXHJcbkBtaXhpbiBqdXN0aWZ5LWNvbnRlbnQoJGp1c3RpZnkpIHtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgLW1zLWZsZXgtcGFjazogJGp1c3RpZnk7XHJcbn1cclxuXHJcbi8vIGFsaWduLWl0ZW1zIG1peGluXHJcblxyXG5AbWl4aW4gYWxpZ24taXRlbXMoJGFsaWduLWhvcml6b250YWxseSkge1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbiAgLW1vei1hbGlnbi1pdGVtczogJGFsaWduLWhvcml6b250YWxseTtcclxuICAtbXMtYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbn1cclxuXHJcbi8vIFRyYW5zaXRpb24gbWl4aW5cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uKSB7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG59XHJcblxyXG4vLyBUcmFuc2Zvcm0gbWl4aW5cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybSkge1xyXG4gIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG4gIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbkBtaXhpbiBib3gtc2hhZG93KCRhcmdzKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAtbW96LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gIC1tcy1ib3gtc2hhZG93OiAkYXJncztcclxuICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxufVxyXG5cclxuLy9QYWRkaW5nIG1peGluXHJcbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpIHtcclxuICBwYWRkaW5nLXRvcDogJHRvcDtcclxuICBwYWRkaW5nLXJpZ2h0OiAkcmlnaHQ7XHJcbiAgcGFkZGluZy1ib3R0b206ICRib3R0b207XHJcbiAgcGFkZGluZy1sZWZ0OiAkbGVmdDtcclxufVxyXG5cclxuLy9NYXJnaW4gbWl4aW5cclxuQG1peGluIG1hcmdpbigkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KSB7XHJcbiAgbWFyZ2luLXRvcDogJHRvcDtcclxuICBtYXJnaW4tcmlnaHQ6ICRyaWdodDtcclxuICBtYXJnaW4tYm90dG9tOiAkYm90dG9tO1xyXG4gIG1hcmdpbi1sZWZ0OiAkbGVmdDtcclxufVxyXG5cclxuLy9wb3NpdGlvbiBtaXhpblxyXG5AbWl4aW4gcG9zaXRpb24oJHBvc2l0aW9uLCAkdG9wOiBudWxsLCAkcmlnaHQ6IG51bGwsICRib3R0b206IG51bGwsICRsZWZ0OiBudWxsKSB7XHJcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcclxuICB0b3A6ICR0b3A7XHJcbiAgcmlnaHQ6ICRyaWdodDtcclxuICBib3R0b206ICRib3R0b207XHJcbiAgbGVmdDogJGxlZnQ7XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLUgxIHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gaGVhZGluZy1IMiB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGhlYWRpbmctSDMge1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLUg0IHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LXJlZ3VsYXI7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHBhcmFncmFwaCB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1yZWd1bGFyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29sb3JCb3gge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvZHktYmctY29sb3I7XHJcbiAgLy8gYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggMXB4IDRweCAwLjVweDsgO1xyXG59XHJcblxyXG5AbWl4aW4gYW5jaG9yIHtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcblxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyxcclxuICAmOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICB9XHJcbn1cclxuXHJcbi8vIGRlZmF1bHQgaW5wdXQgdHlwZSBhbnlcclxuQG1peGluIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4gICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vdGV4dGFyZWFcclxuQG1peGluIHRleHRhcmVhIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZGVmYXVsdCBidXR0b25cclxuQG1peGluIGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiA5cHggMTVweCA5cHg7XHJcbiAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKCR0aGVtZS1jb2xvciwgMC4zKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uMSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiA5cHggMTVweCA5cHg7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGJveCBkcl9zdW1tYXJ5XHJcbkBtaXhpbiBib3gge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDFweCA0cHggMC41cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbkBtaXhpbiBtb25fbmFtZSB7XHJcbiAgLy8gcGFkZGluZzogMHB4IDAgMHB4IDE1cHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuQG1peGluIG1vbl9ubyB7XHJcbiAgcGFkZGluZzogMHB4IDAgMHB4IDEwcHg7XHJcbiAgLy8gY29sb3I6ICM0YTRhNGE7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIGRlZmF1bHQgcHJvZHVjdC1idXR0b25cclxuQG1peGluIHByb2R1Y3QtYnV0dG9uIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA1cHggMTRweCA2cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDJweCB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50O1xyXG4gIC1vLWJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIC1vLWJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyByaWdodCB3aGl0ZSBhcnJvdyBpbiBidXR0b25cclxuLy8gQG1peGluIGJ0bl9yaWdodF9hcnJvdyB7XHJcbi8vICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuXHJcbi8vICAgJjphZnRlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoKSBuby1yZXBlYXQ7XHJcbi8vICAgICB3aWR0aDogMjBweDtcclxuLy8gICAgIGhlaWdodDogMTdweDtcclxuLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICByaWdodDogN3B4O1xyXG4vLyAgICAgdG9wOiAxMHB4O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy9mb3IgaDQgd2l0aCBib3R0b20gbGluZVxyXG5AbWl4aW4gdGV4dF91bmRlcmxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDJweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vZm9yIHNlbGVjdCB0YWdcclxuXHJcbkBtaXhpbiBzZWxlY3RCb3gge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW9zLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL2xpc3Quc3ZnKSByaWdodCBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMC43ZW0gdG9wIDUwJSwgMCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWluLXdpZHRoOiA5NXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vL2xhYmVsXHJcbkBtaXhpbiBsYWJlbCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGNvbG9yOiAkY29sb3ItZGFyay1ncmV5O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAmLmRpc2FibGUge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi8vaW1hZ2UgYm94IHNoYWRvd1xyXG5AbWl4aW4gaW1nLWJveC1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWNvbG9yIDBweCAxcHggNHB4IDAuNXB4O1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGJveC1zaGFkb3ctY29sb3IgMHB4IDFweCA0cHggMC41cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYm94LXNoYWRvdy1jb2xvciAwcHggMXB4IDRweDtcclxufVxyXG5cclxuLy9jaGVja2JveFxyXG5cclxuQG1peGluIGNoZWNrYm94IHtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTlweDtcclxuICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAycHg7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICB0b3A6IDFweDtcclxuICAgICAgbGVmdDogNy41cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTlweDtcclxuICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcclxuICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL3Rvb2wtdGlwXHJcblxyXG4vKj09IHN0YXJ0IG9mIGNvZGUgZm9yIHRvb2x0aXBzID09Ki9cclxuQG1peGluIGRlZmF1bHQtdG9vbC10aXAge1xyXG4gIGN1cnNvcjogaGVscDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTEwMDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICAmOmJlZm9yZSxcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMWVtIDAuNzVlbSAwIDAuNzVlbTtcclxuICAgIGJvcmRlci1jb2xvcjogI2JhYmJiYiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNWVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNiksIG9wYWNpdHkgMC42NXMgMC41cztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKC05MCUpO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmFiYmJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgYm90dG9tOiAxODAlO1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXApO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC04Ljc1ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTI2cHg7XHJcbiAgICAvLyBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KSAwLjJzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoNTAlKTtcclxuICAgIC8vIHdpZHRoOiAxNy41ZW07XHJcbiAgICBtaW4td2lkdGg6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTVlbTtcclxuICAgICAgd2lkdGg6IDEwZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL2xpc3Qgc3R5bGVcclxuXHJcbkBtaXhpbiBsaXN0c3R5bGUge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIi5cIjtcclxuICAgIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogNDFweDtcclxuICB9XHJcbn1cclxuXHJcbi8vZmlsZSB1cGxvYWQgaW5wdXRcclxuQG1peGluIGZpbGVfaW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgQGluY2x1ZGUgYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4vL2ZvciBibG9jayBtaXhpblxyXG5AbWl4aW4gYmxvY2tBbGxUZXh0IHtcclxuICBoMSB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUgxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUgyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUgzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUg0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjplbXB0eSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBicmVhZGNydW1iIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgQGluY2x1ZGUgYW5jaG9yO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vL3JhZGlvIGJ1dHRvblxyXG5cclxuQG1peGluIHJhZGlvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgJjpjaGVja2VkLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAvLyBsZWZ0OiA0Ny44JTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdG9wOiA1cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtaXhpbiByYWRpbzEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAmOmNoZWNrZWQsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDQ3LjglO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vZGVmYXVsdCB0YWJsZVxyXG5AbWl4aW4gdGFibGUge1xyXG4gIHRhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIHRoZWFkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgLmljb24taW5mby10b29sdGlwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZGVmYXVsdC10b29sLXRpcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGVja2JveF93cmFwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgY2hlY2tib3g7XHJcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRib2R5IHtcclxuICAgICAgdHIge1xyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAuZXJyb3IsXHJcbiAgICAgICAgICAubWFwcGVkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWNjZXNzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtY29sb3IsIDAuMDUpO1xyXG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kaXNhYmxlIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVycm9yIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItcmVkLCAwLjA1KTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1yZWQ7XHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kaXNhYmxlIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1hcHBlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLWxpZ2h0LWJsYWNrLCAwLjA1KTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZGlzYWJsZSB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGVja2JveF93cmFwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgY2hlY2tib3g7XHJcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBpbWctYm94LXNoYWRvdztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCR0aGVtZS1jb2xvciwgMC4wNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbi1pbmZvLXRvb2x0aXAge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZGVmYXVsdC10b29sLXRpcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyogY2xlYXJmaXggc3R5bGUgKi9cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKj09IHN0YXJ0IG9mIGNvZGUgZm9yIHRvb2x0aXBzID09Ki9cbi5wYWdlX2NvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLnBhZ2VfY29udGVudCBuYXYge1xuICBwYWRkaW5nOiAwcHggMzBweDtcbn1cbi5wYWdlX2NvbnRlbnQgbmF2IC5uYXZiYXItYnJhbmQge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLnBhZ2VfY29udGVudCBuYXYgLm5hdmJhci1icmFuZCBpbWcge1xuICBtYXgtd2lkdGg6IDY5cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBhZ2VfY29udGVudCAubG9naW5fZm9ybV93cmFwIHtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLnBhZ2VfY29udGVudCAubG9naW5fZm9ybV93cmFwIC5sb2dvX3dyYXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ucGFnZV9jb250ZW50IC5sb2dpbl9mb3JtX3dyYXAgLmxvZ29fd3JhcCBpbWcge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuLnBhZ2VfY29udGVudCAubG9naW5fZm9ybV93cmFwIC5mb3JtX3dyYXAge1xuICBtYXgtd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDE1cHggMDtcbn1cbi5wYWdlX2NvbnRlbnQgLmxvZ2luX2Zvcm1fd3JhcCAuZm9ybV93cmFwIC5mb3JtX3RpdGxlIGg0IHtcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAucGFnZV9jb250ZW50IC5sb2dpbl9mb3JtX3dyYXAgLmZvcm1fd3JhcCAuZm9ybV90aXRsZSBoNCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnBhZ2VfY29udGVudCAubG9naW5fZm9ybV93cmFwIC5mb3JtX3dyYXAgLmZvcm1fdGl0bGUgaDQge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLnBhZ2VfY29udGVudCAubG9naW5fZm9ybV93cmFwIC5mb3JtX3dyYXAgbGFiZWwge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzlBOUE5QTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5wYWdlX2NvbnRlbnQgLmxvZ2luX2Zvcm1fd3JhcCAuZm9ybV93cmFwIGxhYmVsLmRpc2FibGUge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5wYWdlX2NvbnRlbnQgLmxvZ2luX2Zvcm1fd3JhcCAuZm9ybV93cmFwIGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5wYWdlX2NvbnRlbnQgLmxvZ2luX2Zvcm1fd3JhcCAuZm9ybV93cmFwIGlucHV0IHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWNlYztcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG59XG4ucGFnZV9jb250ZW50IC5sb2dpbl9mb3JtX3dyYXAgLmZvcm1fd3JhcCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2FjYWNhYztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnBhZ2VfY29udGVudCAubG9naW5fZm9ybV93cmFwIC5mb3JtX3dyYXAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sIC5wYWdlX2NvbnRlbnQgLmxvZ2luX2Zvcm1fd3JhcCAuZm9ybV93cmFwIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5wYWdlX2NvbnRlbnQgLmxvZ2luX2Zvcm1fd3JhcCAuZm9ybV93cmFwIC5wYXNzd29yZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYWdlX2NvbnRlbnQgLmxvZ2luX2Zvcm1fd3JhcCAuZm9ybV93cmFwIC5wYXNzd29yZCAuYnRuLXRvZ2dsZS1wYXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMzcHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhZ2VfY29udGVudCAubG9naW5fZm9ybV93cmFwIC5mb3JtX3dyYXAgLnBhc3N3b3JkIC5idG4tdG9nZ2xlLXBhc3MgaSB7XG4gIGNvbG9yOiAjOUE5QTlBO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4ucGFnZV9jb250ZW50IC5sb2dpbl9mb3JtX3dyYXAgLmZvcm1fd3JhcCAuYWN0aW9uX2J0biB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ucGFnZV9jb250ZW50IC5sb2dpbl9mb3JtX3dyYXAgLmZvcm1fd3JhcCAuYWN0aW9uX2J0biBidXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCODk0O1xuICBib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA5cHggMTVweCA5cHg7XG4gIGJhY2tncm91bmQ6ICMwMEI4OTQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wYWdlX2NvbnRlbnQgLmxvZ2luX2Zvcm1fd3JhcCAuZm9ybV93cmFwIC5hY3Rpb25fYnRuIGJ1dHRvbjpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKDAsIDE4NCwgMTQ4LCAwLjMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcbn1cbi5wYWdlX2NvbnRlbnQgLmxvZ2luX2Zvcm1fd3JhcCAuZm9ybV93cmFwIC5hY3Rpb25fYnRuIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucGFnZV9jb250ZW50IC5sb2dpbl9mb3JtX3dyYXAgLmZvcm1fd3JhcCAuYWN0aW9uX2J0biBidXR0b246dmlzaXRlZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSIsIkBpbXBvcnQgXCJzcmMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwic3JjL3Njc3MvbWl4aW5zLnNjc3NcIjtcclxuXHJcbi5wYWdlX2NvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBuYXYge1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgaW1nIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDY5cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmxvZ2luX2Zvcm1fd3JhcCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIC5sb2dvX3dyYXAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvcm1fd3JhcCB7XHJcbiAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICAuZm9ybV90aXRsZSB7XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgQGluY2x1ZGUgaGVhZGluZy1INDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIEBpbmNsdWRlIGxhYmVsO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBAaW5jbHVkZSBpbnB1dDtcclxuICAgICAgfVxyXG4gICAgICAucGFzc3dvcmQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAuYnRuLXRvZ2dsZS1wYXNzIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMzNweDtcclxuICAgICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgaXtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1kYXJrLWdyZXk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmFjdGlvbl9idG4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJcclxuLy8gZ2xvYmFsLXZhcmlhYmxlXHJcbiRoZWFkZXItY29sb3I6ICMyNjI2MjY7XHJcbiRib2R5LWJnLWNvbG9yOiAjRjNGM0YzO1xyXG4kdGhlbWUtY29sb3I6ICMwMEI4OTQ7XHJcbiRjb2xvci1yZWQ6ICNGRjRCNEI7XHJcbiRjb2xvci12YWxpZC1lcnJvcjojRTUzOTM1O1xyXG4kY29sb3ItaW52YWxpZC1lcnJvcjojQjcxYzFjO1xyXG4kY29sb3ItbWFnZW50YTogI2JjNjQ5YztcclxuJGNvbG9yLXBpbms6ICNmNDk0Yzg7XHJcbiRjb2xvci1ncmVlbjogIzg0QzE0MDtcclxuJGNvbG9yLWxpZ2h0LWdyZWVuOiAjQkNENTMzO1xyXG4kY29sb3ItYmx1ZTogIzk0ZDBlYTtcclxuJGNvbG9yLWRhcmstZ3JleTogIzlBOUE5QTtcclxuJGNvbG9yLWxpZ2h0LWdyZXk6ICNmOWY5Zjk7XHJcbiRjb2xvci1leHRyYS1saWdodC1ncmV5OiAjRjRGNEY0O1xyXG4kY29sb3Itb3JhbmdlOiAjRTM3ODI2O1xyXG4kY29sb3ItbGlnaHQtb3JhbmdlOiAjRUI5ODIyO1xyXG4kY29sb3ItZXh0cmEtbGlnaHQtb3JhbmdlOiAjRkNBRjE3O1xyXG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XHJcbiRib3JkZXItY29sb3I6ICNlZWVjZWM7XHJcbiRub3RpZmljYXRpb24tYmc6ICNjZWUzZjA7XHJcbiRjb2xvci1saWdodC1ibGFjazogIzRBNEE0QTtcclxuJGNvbG9yLWJsYWNrOiAjMDAwMDAwO1xyXG4kY29sb3IteWVsbG93OiAjZjllOTA3O1xyXG4kYm94LXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwuMik7XHJcbiRibGFjay1vdmVybGF5OiByZ2JhKDAsMCwwLDAuNyk7XHJcbiR3aGl0ZS1vdmVybGF5OiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XHJcbiRwbGFjZWhvbGRlci1jb2xvcjogI2FjYWNhYztcclxuJGNvbG9yLWJhY2tncm91bmQ6ICNlMWZiZmE7XHJcbiRjb2xvci1pbmZvOiAjRjdCNTAwO1xyXG4kZm9udC1yb2JvdG86ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1saWdodDogMzAwO1xyXG4kZm9udC1yZWd1bGFyOiA0MDA7XHJcbiRmb250LWJvbGQ6IDcwMDtcclxuJGZvbnQtaDE6IDM0cHg7XHJcbiRmb250LWgyOiAzMHB4O1xyXG4kZm9udC1oMzogMjRweDtcclxuJGZvbnQtaDQ6IDE4cHg7XHJcbiRmb250LWg1OiAxNnB4O1xyXG4kZm9udC1oNjogMTRweDtcclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");






let LoginComponent = class LoginComponent {
    constructor(globalService, modalService, dataService, route, router) {
        this.globalService = globalService;
        this.modalService = modalService;
        this.dataService = dataService;
        this.route = route;
        this.router = router;
        this.isFormValid = false;
        this.loginInProgress = false;
        this.toggleViewPassword = false;
        this.userInfo = [];
        this.isLogin = false;
        this.isSignup = true;
        this.userDetails = [];
        this.dashBoardDetails = [];
    }
    ngOnInit() {
        if (localStorage.getItem('userInfo') != null) {
            this.router.navigate(['dashboard']);
        }
        else {
            this.isLogin = true;
        }
    }
    showPassToggle() {
        if (!this.toggleViewPassword) {
            this.toggleViewPassword = true;
        }
        else {
            this.toggleViewPassword = false;
        }
    }
    processLogin(Rform) {
        this.loginInProgress = true;
        this.loginForm = Rform.form;
        if (this.loginForm.invalid) {
            this.isFormValid = true;
            return;
        }
        const userDeatils = this.loginForm.value;
        this.email = userDeatils.userEmail;
        const userPassword = userDeatils.userPassword;
        const userLowerCase = this.email.toLowerCase();
        this.dataService.doLogin(userLowerCase, userPassword).subscribe((res) => {
            const resSTR = JSON.stringify(res);
            const resJSON = JSON.parse(resSTR);
            if (resJSON.messageCode == '1' && resJSON.data != null) {
                this.userInfo.push(resJSON.data);
                this.loginInProgress = true;
                console.log('login info', resJSON.data);
                localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
                //  this.router.navigate(['/signup']);
                var details = JSON.parse(localStorage.getItem('userInfo'));
                this.userDetails = details[0];
                if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 3)) {
                    // window.location.href = '/settlement';
                    if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 5)))) {
                        window.location.href = '/settlement';
                    }
                    if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 6)))) {
                        window.location.href = '/recon_status';
                    }
                    if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 6)))) {
                        window.location.href = '/dr_summary';
                    }
                    if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 5)))) {
                        window.location.href = '/reconSummary';
                    }
                }
                if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 4)) {
                    window.location.href = '/digital';
                }
                if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 2)) {
                    window.location.href = '/configuration';
                }
                if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 4)) {
                    window.location.href = '/validate';
                }
                if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 1)) {
                    window.location.href = '/dashboard';
                }
            }
            else {
                this.loginInProgress = false;
                alert('Invalid user credential.');
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auto-generated/auto-generated.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/auto-generated/auto-generated.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dG8tZ2VuZXJhdGVkL2F1dG8tZ2VuZXJhdGVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/auto-generated/auto-generated.component.ts":
/*!************************************************************!*\
  !*** ./src/app/auto-generated/auto-generated.component.ts ***!
  \************************************************************/
/*! exports provided: AutoGeneratedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoGeneratedComponent", function() { return AutoGeneratedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AutoGeneratedComponent = class AutoGeneratedComponent {
    constructor() { }
    ngOnInit() {
    }
};
AutoGeneratedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auto-generated',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auto-generated.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auto-generated/auto-generated.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auto-generated.component.scss */ "./src/app/auto-generated/auto-generated.component.scss")).default]
    })
], AutoGeneratedComponent);



/***/ }),

/***/ "./src/app/dashboard/duplicate/duplicate.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/duplicate/duplicate.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-body {\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2R1cGxpY2F0ZS9EOlxccmVjb25OZXdcXFJlY29uX0Rhc2hib2FyZC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkdXBsaWNhdGVcXGR1cGxpY2F0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2R1cGxpY2F0ZS9kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2R1cGxpY2F0ZS9kdXBsaWNhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtYm9keSB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG4iLCIubW9kYWwtYm9keSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/dashboard/duplicate/duplicate.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/duplicate/duplicate.component.ts ***!
  \************************************************************/
/*! exports provided: DuplicateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuplicateComponent", function() { return DuplicateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/global.service */ "./src/app/service/global.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");




let DuplicateComponent = class DuplicateComponent {
    constructor(globalService, activeModal) {
        this.globalService = globalService;
        this.activeModal = activeModal;
        this.duplicateData = [];
    }
    ngOnInit() {
        this.duplicateData = this.globalService.getUploadData();
    }
    closeModal() {
        this.activeModal.close('Modal Closed');
    }
};
DuplicateComponent.ctorParameters = () => [
    { type: src_app_service_global_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] }
];
DuplicateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-duplicate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./duplicate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/duplicate/duplicate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./duplicate.component.scss */ "./src/app/dashboard/duplicate/duplicate.component.scss")).default]
    })
], DuplicateComponent);



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: sep, version, env, urlSuffix, apitoken, application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sep", function() { return sep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "env", function() { return env; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlSuffix", function() { return urlSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apitoken", function() { return apitoken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "application", function() { return application; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


const sep = '/';
const version = '1.0.0';
let env = 'stage';
const urlSuffix = '/stage';
const apitoken = '';
const application = 'ONL v 1.0.0';


/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* clearfix style */\nimg {\n  max-width: 100%;\n  height: auto;\n}\n/*== start of code for tooltips ==*/\n.page_content nav {\n  padding: 0px 30px;\n}\n.page_content nav .navbar-brand {\n  padding: 5px 0;\n  margin: 0;\n  padding-right: 20px;\n}\n.page_content nav .navbar-brand :focus {\n  outline: none;\n}\n.page_content nav .navbar-brand img {\n  max-width: 69px;\n  width: 100%;\n}\n.page_content nav .navbar-brand img :focus {\n  outline: none;\n}\n.page_content nav .navbar-nav {\n  padding: 0 30px;\n}\n.page_content nav .navbar-nav li {\n  margin-right: 20px;\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0.5px;\n  -moz-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0.5px;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #ffffff;\n  width: 180px;\n  position: absolute;\n  top: 42px;\n  z-index: 99;\n  min-height: 51px;\n  overflow-y: auto;\n  border-radius: 5px;\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul li {\n  padding: 10px 15px 10px 15px;\n  margin-right: 0px !important;\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap {\n  position: relative;\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked, .page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) {\n  position: absolute;\n  opacity: 0;\n  top: 5px;\n  z-index: 99;\n  cursor: pointer;\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label, .page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) + label {\n  position: relative;\n  padding-left: 28px;\n  cursor: pointer;\n  line-height: 20px;\n  display: inline-block;\n  color: #4A4A4A;\n  font-size: 14px;\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label:before, .page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) + label:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #4A4A4A;\n  border-radius: 100%;\n  background: #ffffff;\n  opacity: 0;\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label:after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background: #00B894;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap [type=radio]:not(:checked) + label:after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background: #00B894;\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n  opacity: 0;\n  transform: scale(0);\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap [type=radio]:checked + label:after {\n  opacity: 1;\n  transform: scale(1);\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap label {\n  width: 100%;\n  padding-left: 0 !important;\n  text-transform: capitalize;\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap label:before {\n  left: 93% !important;\n  border: none !important;\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap label:after {\n  left: 90% !important;\n  background: none !important;\n  border: none !important;\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap .form-group {\n  margin-bottom: 0;\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap .form-group input[type=radio]:checked + label {\n  color: #00B894;\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul li .checkbox_wrap .form-group input[type=radio]:checked + label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 3px !important;\n  right: 13px !important;\n  width: 7px !important;\n  height: 14px !important;\n  border: solid #00B894 !important;\n  border-width: 0 2px 2px 0 !important;\n  transform: rotate(45deg) !important;\n  border-radius: 0% !important;\n}\n.page_content nav .navbar-nav li .dropdown_multiselect ul li:hover {\n  background-color: rgba(0, 184, 148, 0.06);\n}\n.page_content nav .navbar-nav li .nav-link {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  padding: 0px 10px;\n  line-height: 49px;\n  vertical-align: middle;\n  color: #ffffff;\n}\n@media (max-width: 991px) {\n  .page_content nav .navbar-nav li .nav-link {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .page_content nav .navbar-nav li .nav-link {\n    font-size: 14px;\n  }\n}\n.page_content nav .navbar-nav li .nav-link i {\n  font-size: 18px;\n  color: #4A4A4A;\n}\n.page_content nav .navbar-nav li.active a {\n  color: #00B894;\n}\n.page_content nav .nav_right_panel {\n  padding: 0;\n  border-left: none;\n}\n.page_content nav .nav_right_panel .btnsearch {\n  border: 1px solid #00b894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #00b894;\n  display: inline-block;\n  font-size: 14px;\n  padding: 5px 10px 5px;\n  background: #ffffff;\n  outline: none;\n  margin-bottom: 0px;\n  border-radius: 3px;\n  min-width: 90px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.page_content nav .nav_right_panel .btnsearch:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.page_content nav .nav_right_panel li {\n  margin-right: 0;\n}\n.page_content nav .nav_right_panel li .dropdown-menu .profile_icon .icon {\n  margin: 0 auto;\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n}\n.page_content nav .nav_right_panel li .dropdown-menu .profile_icon p {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 14px;\n}\n@media (max-width: 991px) {\n  .page_content nav .nav_right_panel li .dropdown-menu .profile_icon p {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .page_content nav .nav_right_panel li .dropdown-menu .profile_icon p {\n    font-size: 14px;\n  }\n}\n.page_content nav .nav_right_panel li .dropdown-menu .profile_icon a {\n  color: #4A4A4A;\n}\n.page_content nav .nav_right_panel li .dropdown-menu .profile_icon a i {\n  color: #4A4A4A;\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxyZWNvbk5ld1xcUmVjb25fRGFzaGJvYXJkL3NyY1xcc2Nzc1xcbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9EOlxccmVjb25OZXdcXFJlY29uX0Rhc2hib2FyZC9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9EOlxccmVjb25OZXdcXFJlY29uX0Rhc2hib2FyZC9zcmNcXHNjc3NcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1CQUFBO0FBaUJBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNmRjtBRHdvQkEsbUNBQUE7QUV6b0JFO0VBQ0UsaUJBQUE7QURLSjtBQ0pJO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBRE1OO0FDTE07RUFDRSxhQUFBO0FET1I7QUNMTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FET1I7QUNOUTtFQUNFLGFBQUE7QURRVjtBQ0pJO0VBQ0UsZUFBQTtBRE1OO0FDTE07RUFDRSxrQkFBQTtBRE9SO0FDQVU7RUYyaEJSLGdEQUFBO0VBQ0EscURBQUE7RUFDQSxrREFBQTtFRTNoQlUsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQ2hCRTtFRGtCRixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBREVaO0FDRFk7RUFDRSw0QkFBQTtFQUNBLDRCQUFBO0FER2Q7QUNEYztFRnF5Qlosa0JBQUE7QUNqeUJGO0FEb3lCSTtFQUVFLGtCQUFBO0VBRUEsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3B5Qk47QUR1eUJJO0VBRUUsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0dwMUJjO0VIcTFCZCxlQUFBO0FDdHlCTjtBRDJ5Qk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CR3QyQk07RUh1MkJOLFVBQUE7QUN6eUJSO0FEOHlCTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CRy8zQk07RUhnNEJOLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUVBLHlCQUFBO0FDNXlCUjtBRGl6Qk07RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkc5NEJNO0VIKzRCTixrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFFQSx5QkFBQTtFQUNBLFVBQUE7RUFFQSxtQkFBQTtBQy95QlI7QURvekJNO0VBQ0UsVUFBQTtFQUVBLG1CQUFBO0FDbHpCUjtBQzlEZ0I7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFVQSwwQkFBQTtBRHVEbEI7QUNoRWtCO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtBRGtFcEI7QUNoRWtCO0VBQ0Usb0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FEa0VwQjtBQzlEZ0I7RUFDRSxnQkFBQTtBRGdFbEI7QUM5RG9CO0VBQ0UsY0NqRVI7QUZpSWQ7QUMvRHNCO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7QURpRXhCO0FDM0RjO0VBQ0UseUNBQUE7QUQ2RGhCO0FDMUNRO0VGNElOLHFCQUFBO0VBQ0EsY0dsT2tCO0VIbU9sQixlQUFBO0VBQ0EsZ0JHek5hO0VIME5iLGlCQUFBO0VBQ0EsaUNHN05ZO0VIOE5aLGdCQUFBO0VBQ0EsY0FBQTtFRWpKUSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQzdGSTtBRmdKZDtBRDFISTtFRWtFSTtJRnNKSixrQkFBQTtFQzFGRjtBQUNGO0FEM0lJO0VFOEVJO0lGMEpKLGVBQUE7RUN6RkY7QUFDRjtBQzVEVTtFQUNFLGVBQUE7RUFDQSxjQzdGUTtBRjJKcEI7QUMxRFU7RUFDRSxjQ3BIRTtBRmdMZDtBQ3ZESTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBRHlETjtBQ3ZETTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEeURSO0FDeERRO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0RBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUQwRFY7QUN2RE07RUFDRSxlQUFBO0FEeURSO0FDdERZO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUR3RGQ7QUN0RFk7RUZtRlYscUJBQUE7RUFDQSxjR2xPa0I7RUhtT2xCLGVBQUE7RUFDQSxnQkd6TmE7RUgwTmIsaUJBQUE7RUFDQSxpQ0c3Tlk7RUg4TlosZ0JBQUE7RUFDQSxjQUFBO0VFeEZZLGtCQUFBO0VBQ0EsZUFBQTtBRCtEZDtBRDdMSTtFRTJIUTtJRjZGUixrQkFBQTtFQ3ZCRjtBQUNGO0FEOU1JO0VFdUlRO0lGaUdSLGVBQUE7RUN0QkY7QUFDRjtBQ3ZFWTtFQUNFLGNDcEpNO0FGNk5wQjtBQ3hFYztFQUNFLGNDdEpJO0VEdUpKLGtCQUFBO0FEMEVoQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjbGVhcmZpeCBzdHlsZSAqL1xyXG5cclxuLy8gQ2xlYXJmaXggbWl4aW5cclxuJWNsZWFyZml4IHtcclxuICAqem9vbTogMTtcclxuXHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLy8gRGVmaW5lIHRoZSBicmVha3BvaW50c1xyXG5AbWl4aW4gYnJlYWtwb2ludCgkcG9pbnQpIHtcclxuICBAaWYgJHBvaW50PT1zbWFsbC1kZXZpY2Uge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1tb2JpbGUge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT10YWJsZXQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT10YWJsZXQwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09dGFibGV0cHJvIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09aXBhZCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PWxhcHRvcCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1sYXB0b3BtYXgge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09ZGVza3RvcCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vL2xvYWRlclxyXG5AbWl4aW4gbG9hZGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIGJhY2tncm91bmQ6ICRibGFjay1vdmVybGF5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gIH1cclxufVxyXG4vLyBqdXN0aWZ5LWNvbnRlbnQgbWl4aW5cclxuXHJcbkBtaXhpbiBqdXN0aWZ5LWNvbnRlbnQoJGp1c3RpZnkpIHtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgLW1zLWZsZXgtcGFjazogJGp1c3RpZnk7XHJcbn1cclxuXHJcbi8vIGFsaWduLWl0ZW1zIG1peGluXHJcblxyXG5AbWl4aW4gYWxpZ24taXRlbXMoJGFsaWduLWhvcml6b250YWxseSkge1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbiAgLW1vei1hbGlnbi1pdGVtczogJGFsaWduLWhvcml6b250YWxseTtcclxuICAtbXMtYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbi1ob3Jpem9udGFsbHk7XHJcbn1cclxuXHJcbi8vIFRyYW5zaXRpb24gbWl4aW5cclxuXHJcbkBtaXhpbiB0cmFuc2l0aW9uKCR0cmFuc2l0aW9uKSB7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAtby10cmFuc2l0aW9uOiAkdHJhbnNpdGlvbjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gIHRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG59XHJcblxyXG4vLyBUcmFuc2Zvcm0gbWl4aW5cclxuXHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybSkge1xyXG4gIC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG4gIC1vLXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxuICB0cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbn1cclxuXHJcbkBtaXhpbiBmbGV4IHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1vei1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbkBtaXhpbiBib3gtc2hhZG93KCRhcmdzKSB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYXJncztcclxuICAtbW96LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gIC1tcy1ib3gtc2hhZG93OiAkYXJncztcclxuICBib3gtc2hhZG93OiAkYXJncztcclxufVxyXG5cclxuQG1peGluIGJvcmRlci1yYWRpdXMoJHJhZGl1cykge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxufVxyXG5cclxuLy9QYWRkaW5nIG1peGluXHJcbkBtaXhpbiBwYWRkaW5nKCR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpIHtcclxuICBwYWRkaW5nLXRvcDogJHRvcDtcclxuICBwYWRkaW5nLXJpZ2h0OiAkcmlnaHQ7XHJcbiAgcGFkZGluZy1ib3R0b206ICRib3R0b207XHJcbiAgcGFkZGluZy1sZWZ0OiAkbGVmdDtcclxufVxyXG5cclxuLy9NYXJnaW4gbWl4aW5cclxuQG1peGluIG1hcmdpbigkdG9wLCAkcmlnaHQsICRib3R0b20sICRsZWZ0KSB7XHJcbiAgbWFyZ2luLXRvcDogJHRvcDtcclxuICBtYXJnaW4tcmlnaHQ6ICRyaWdodDtcclxuICBtYXJnaW4tYm90dG9tOiAkYm90dG9tO1xyXG4gIG1hcmdpbi1sZWZ0OiAkbGVmdDtcclxufVxyXG5cclxuLy9wb3NpdGlvbiBtaXhpblxyXG5AbWl4aW4gcG9zaXRpb24oJHBvc2l0aW9uLCAkdG9wOiBudWxsLCAkcmlnaHQ6IG51bGwsICRib3R0b206IG51bGwsICRsZWZ0OiBudWxsKSB7XHJcbiAgcG9zaXRpb246ICRwb3NpdGlvbjtcclxuICB0b3A6ICR0b3A7XHJcbiAgcmlnaHQ6ICRyaWdodDtcclxuICBib3R0b206ICRib3R0b207XHJcbiAgbGVmdDogJGxlZnQ7XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLUgxIHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gaGVhZGluZy1IMiB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGhlYWRpbmctSDMge1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMztcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLUg0IHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LXJlZ3VsYXI7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIHBhcmFncmFwaCB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1yZWd1bGFyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29sb3JCb3gge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvZHktYmctY29sb3I7XHJcbiAgLy8gYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggMXB4IDRweCAwLjVweDsgO1xyXG59XHJcblxyXG5AbWl4aW4gYW5jaG9yIHtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcblxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyxcclxuICAmOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICB9XHJcbn1cclxuXHJcbi8vIGRlZmF1bHQgaW5wdXQgdHlwZSBhbnlcclxuQG1peGluIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4gICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi8vdGV4dGFyZWFcclxuQG1peGluIHRleHRhcmVhIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHBsYWNlaG9sZGVyLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZGVmYXVsdCBidXR0b25cclxuQG1peGluIGJ1dHRvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiA5cHggMTVweCA5cHg7XHJcbiAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbWluLXdpZHRoOiAxMjBweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKCR0aGVtZS1jb2xvciwgMC4zKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gYnV0dG9uMSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHRoZW1lLWNvbG9yO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiA5cHggMTVweCA5cHg7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGJveCBkcl9zdW1tYXJ5XHJcbkBtaXhpbiBib3gge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDFweCA0cHggMC41cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbkBtaXhpbiBtb25fbmFtZSB7XHJcbiAgLy8gcGFkZGluZzogMHB4IDAgMHB4IDE1cHg7XHJcblxyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuQG1peGluIG1vbl9ubyB7XHJcbiAgcGFkZGluZzogMHB4IDAgMHB4IDEwcHg7XHJcbiAgLy8gY29sb3I6ICM0YTRhNGE7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIGRlZmF1bHQgcHJvZHVjdC1idXR0b25cclxuQG1peGluIHByb2R1Y3QtYnV0dG9uIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiA1cHggMTRweCA2cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDJweCB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50O1xyXG4gIC1vLWJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIC1vLWJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICR0aGVtZS1jb2xvcjtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgJjp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyByaWdodCB3aGl0ZSBhcnJvdyBpbiBidXR0b25cclxuLy8gQG1peGluIGJ0bl9yaWdodF9hcnJvdyB7XHJcbi8vICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuXHJcbi8vICAgJjphZnRlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB1cmwoKSBuby1yZXBlYXQ7XHJcbi8vICAgICB3aWR0aDogMjBweDtcclxuLy8gICAgIGhlaWdodDogMTdweDtcclxuLy8gICAgIGNvbnRlbnQ6IFwiXCI7XHJcbi8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICByaWdodDogN3B4O1xyXG4vLyAgICAgdG9wOiAxMHB4O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy9mb3IgaDQgd2l0aCBib3R0b20gbGluZVxyXG5AbWl4aW4gdGV4dF91bmRlcmxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDJweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxlZnQ6IDBweDtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vZm9yIHNlbGVjdCB0YWdcclxuXHJcbkBtaXhpbiBzZWxlY3RCb3gge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW9zLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL2xpc3Quc3ZnKSByaWdodCBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMC43ZW0gdG9wIDUwJSwgMCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWluLXdpZHRoOiA5NXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vL2xhYmVsXHJcbkBtaXhpbiBsYWJlbCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGNvbG9yOiAkY29sb3ItZGFyay1ncmV5O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAmLmRpc2FibGUge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbi8vaW1hZ2UgYm94IHNoYWRvd1xyXG5AbWl4aW4gaW1nLWJveC1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93LWNvbG9yIDBweCAxcHggNHB4IDAuNXB4O1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGJveC1zaGFkb3ctY29sb3IgMHB4IDFweCA0cHggMC41cHg7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkYm94LXNoYWRvdy1jb2xvciAwcHggMXB4IDRweDtcclxufVxyXG5cclxuLy9jaGVja2JveFxyXG5cclxuQG1peGluIGNoZWNrYm94IHtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTlweDtcclxuICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAycHg7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICB0b3A6IDFweDtcclxuICAgICAgbGVmdDogNy41cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICBib3JkZXItcmlnaHQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTlweDtcclxuICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcclxuICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL3Rvb2wtdGlwXHJcblxyXG4vKj09IHN0YXJ0IG9mIGNvZGUgZm9yIHRvb2x0aXBzID09Ki9cclxuQG1peGluIGRlZmF1bHQtdG9vbC10aXAge1xyXG4gIGN1cnNvcjogaGVscDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgJjpiZWZvcmUsXHJcbiAgJjphZnRlciB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTEwMDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICAmOmJlZm9yZSxcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMWVtIDAuNzVlbSAwIDAuNzVlbTtcclxuICAgIGJvcmRlci1jb2xvcjogI2JhYmJiYiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTAuNWVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNiksIG9wYWNpdHkgMC42NXMgMC41cztcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKC05MCUpO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmFiYmJiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gICAgYm90dG9tOiAxODAlO1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXApO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC04Ljc1ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogLTI2cHg7XHJcbiAgICAvLyBwYWRkaW5nOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KSAwLjJzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoNTAlKTtcclxuICAgIC8vIHdpZHRoOiAxNy41ZW07XHJcbiAgICBtaW4td2lkdGg6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldCkge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43NWVtO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTVlbTtcclxuICAgICAgd2lkdGg6IDEwZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL2xpc3Qgc3R5bGVcclxuXHJcbkBtaXhpbiBsaXN0c3R5bGUge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIi5cIjtcclxuICAgIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogNDFweDtcclxuICB9XHJcbn1cclxuXHJcbi8vZmlsZSB1cGxvYWQgaW5wdXRcclxuQG1peGluIGZpbGVfaW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgQGluY2x1ZGUgYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4vL2ZvciBibG9jayBtaXhpblxyXG5AbWl4aW4gYmxvY2tBbGxUZXh0IHtcclxuICBoMSB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUgxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUgyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUgzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoNCB7XHJcbiAgICBAaW5jbHVkZSBoZWFkaW5nLUg0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGEge1xyXG4gICAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgJjplbXB0eSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBicmVhZGNydW1iIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgQGluY2x1ZGUgYW5jaG9yO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vL3JhZGlvIGJ1dHRvblxyXG5cclxuQG1peGluIHJhZGlvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgJjpjaGVja2VkLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAvLyBsZWZ0OiA0Ny44JTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdG9wOiA1cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtaXhpbiByYWRpbzEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAmOmNoZWNrZWQsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDQ3LjglO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDNweDtcclxuICAgICAgICBsZWZ0OiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vZGVmYXVsdCB0YWJsZVxyXG5AbWl4aW4gdGFibGUge1xyXG4gIHRhYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIHRoZWFkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgICAgIHRyIHtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgLmljb24taW5mby10b29sdGlwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZGVmYXVsdC10b29sLXRpcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGVja2JveF93cmFwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgY2hlY2tib3g7XHJcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRib2R5IHtcclxuICAgICAgdHIge1xyXG4gICAgICAgIHRkIHtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAuZXJyb3IsXHJcbiAgICAgICAgICAubWFwcGVkIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWNjZXNzIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtY29sb3IsIDAuMDUpO1xyXG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kaXNhYmxlIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVycm9yIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItcmVkLCAwLjA1KTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1yZWQ7XHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcmVkO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kaXNhYmxlIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1hcHBlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLWxpZ2h0LWJsYWNrLCAwLjA1KTtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuZGlzYWJsZSB7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jaGVja2JveF93cmFwIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgY2hlY2tib3g7XHJcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBpbWctYm94LXNoYWRvdztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCR0aGVtZS1jb2xvciwgMC4wNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaWNvbi1pbmZvLXRvb2x0aXAge1xyXG4gICAgICAgICAgQGluY2x1ZGUgZGVmYXVsdC10b29sLXRpcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyogY2xlYXJmaXggc3R5bGUgKi9cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKj09IHN0YXJ0IG9mIGNvZGUgZm9yIHRvb2x0aXBzID09Ki9cbi5wYWdlX2NvbnRlbnQgbmF2IHtcbiAgcGFkZGluZzogMHB4IDMwcHg7XG59XG4ucGFnZV9jb250ZW50IG5hdiAubmF2YmFyLWJyYW5kIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5wYWdlX2NvbnRlbnQgbmF2IC5uYXZiYXItYnJhbmQgOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5wYWdlX2NvbnRlbnQgbmF2IC5uYXZiYXItYnJhbmQgaW1nIHtcbiAgbWF4LXdpZHRoOiA2OXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5wYWdlX2NvbnRlbnQgbmF2IC5uYXZiYXItYnJhbmQgaW1nIDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucGFnZV9jb250ZW50IG5hdiAubmF2YmFyLW5hdiB7XG4gIHBhZGRpbmc6IDAgMzBweDtcbn1cbi5wYWdlX2NvbnRlbnQgbmF2IC5uYXZiYXItbmF2IGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnBhZ2VfY29udGVudCBuYXYgLm5hdmJhci1uYXYgbGkgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIHtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggNHB4IDAuNXB4O1xuICAtbW96LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDRweCAwLjVweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCA0cHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDE4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDJweDtcbiAgei1pbmRleDogOTk7XG4gIG1pbi1oZWlnaHQ6IDUxcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wYWdlX2NvbnRlbnQgbmF2IC5uYXZiYXItbmF2IGxpIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSB7XG4gIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG4ucGFnZV9jb250ZW50IG5hdiAubmF2YmFyLW5hdiBsaSAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGFnZV9jb250ZW50IG5hdiAubmF2YmFyLW5hdiBsaSAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOmNoZWNrZWQsIC5wYWdlX2NvbnRlbnQgbmF2IC5uYXZiYXItbmF2IGxpIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiA1cHg7XG4gIHotaW5kZXg6IDk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFnZV9jb250ZW50IG5hdiAubmF2YmFyLW5hdiBsaSAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbCwgLnBhZ2VfY29udGVudCBuYXYgLm5hdmJhci1uYXYgbGkgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIFt0eXBlPXJhZGlvXTpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMjhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnBhZ2VfY29udGVudCBuYXYgLm5hdmJhci1uYXYgbGkgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlLCAucGFnZV9jb250ZW50IG5hdiAubmF2YmFyLW5hdiBsaSAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRBNEE0QTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMDtcbn1cbi5wYWdlX2NvbnRlbnQgbmF2IC5uYXZiYXItbmF2IGxpIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogIzAwQjg5NDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNweDtcbiAgbGVmdDogM3B4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG4ucGFnZV9jb250ZW50IG5hdiAubmF2YmFyLW5hdiBsaSAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQ6ICMwMEI4OTQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0cHg7XG4gIGxlZnQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG59XG4ucGFnZV9jb250ZW50IG5hdiAubmF2YmFyLW5hdiBsaSAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5wYWdlX2NvbnRlbnQgbmF2IC5uYXZiYXItbmF2IGxpIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ucGFnZV9jb250ZW50IG5hdiAubmF2YmFyLW5hdiBsaSAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgbGFiZWw6YmVmb3JlIHtcbiAgbGVmdDogOTMlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuLnBhZ2VfY29udGVudCBuYXYgLm5hdmJhci1uYXYgbGkgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIGxhYmVsOmFmdGVyIHtcbiAgbGVmdDogOTAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4ucGFnZV9jb250ZW50IG5hdiAubmF2YmFyLW5hdiBsaSAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnBhZ2VfY29udGVudCBuYXYgLm5hdmJhci1uYXYgbGkgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIC5mb3JtLWdyb3VwIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbCB7XG4gIGNvbG9yOiAjMDBCODk0O1xufVxuLnBhZ2VfY29udGVudCBuYXYgLm5hdmJhci1uYXYgbGkgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIC5mb3JtLWdyb3VwIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM3B4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgIzAwQjg5NCAhaW1wb3J0YW50O1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwJSAhaW1wb3J0YW50O1xufVxuLnBhZ2VfY29udGVudCBuYXYgLm5hdmJhci1uYXYgbGkgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxODQsIDE0OCwgMC4wNik7XG59XG4ucGFnZV9jb250ZW50IG5hdiAubmF2YmFyLW5hdiBsaSAubmF2LWxpbmsge1xuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBsaW5lLWhlaWdodDogNDlweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnBhZ2VfY29udGVudCBuYXYgLm5hdmJhci1uYXYgbGkgLm5hdi1saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucGFnZV9jb250ZW50IG5hdiAubmF2YmFyLW5hdiBsaSAubmF2LWxpbmsge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLnBhZ2VfY29udGVudCBuYXYgLm5hdmJhci1uYXYgbGkgLm5hdi1saW5rIGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNEE0QTRBO1xufVxuLnBhZ2VfY29udGVudCBuYXYgLm5hdmJhci1uYXYgbGkuYWN0aXZlIGEge1xuICBjb2xvcjogIzAwQjg5NDtcbn1cbi5wYWdlX2NvbnRlbnQgbmF2IC5uYXZfcmlnaHRfcGFuZWwge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbi5wYWdlX2NvbnRlbnQgbmF2IC5uYXZfcmlnaHRfcGFuZWwgLmJ0bnNlYXJjaCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMGI4OTQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogIzAwYjg5NDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogOTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucGFnZV9jb250ZW50IG5hdiAubmF2X3JpZ2h0X3BhbmVsIC5idG5zZWFyY2g6aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAxN3B4IDEwcHggLTEwcHggcmdiYSgwLCAxODQsIDE0OCwgMC4zKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMzAwbXM7XG59XG4ucGFnZV9jb250ZW50IG5hdiAubmF2X3JpZ2h0X3BhbmVsIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnBhZ2VfY29udGVudCBuYXYgLm5hdl9yaWdodF9wYW5lbCBsaSAuZHJvcGRvd24tbWVudSAucHJvZmlsZV9pY29uIC5pY29uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5wYWdlX2NvbnRlbnQgbmF2IC5uYXZfcmlnaHRfcGFuZWwgbGkgLmRyb3Bkb3duLW1lbnUgLnByb2ZpbGVfaWNvbiBwIHtcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAucGFnZV9jb250ZW50IG5hdiAubmF2X3JpZ2h0X3BhbmVsIGxpIC5kcm9wZG93bi1tZW51IC5wcm9maWxlX2ljb24gcCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLnBhZ2VfY29udGVudCBuYXYgLm5hdl9yaWdodF9wYW5lbCBsaSAuZHJvcGRvd24tbWVudSAucHJvZmlsZV9pY29uIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLnBhZ2VfY29udGVudCBuYXYgLm5hdl9yaWdodF9wYW5lbCBsaSAuZHJvcGRvd24tbWVudSAucHJvZmlsZV9pY29uIGEge1xuICBjb2xvcjogIzRBNEE0QTtcbn1cbi5wYWdlX2NvbnRlbnQgbmF2IC5uYXZfcmlnaHRfcGFuZWwgbGkgLmRyb3Bkb3duLW1lbnUgLnByb2ZpbGVfaWNvbiBhIGkge1xuICBjb2xvcjogIzRBNEE0QTtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufSIsIkBpbXBvcnQgXCJzcmMvc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwic3JjL3Njc3MvbWl4aW5zLnNjc3NcIjtcclxuLnBhZ2VfY29udGVudCB7XHJcbiAgbmF2IHtcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgIDpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1heC13aWR0aDogNjlweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICA6Zm9jdXMge1xyXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgICAgICAuZHJvcGRvd25fbXVsdGlzZWxlY3Qge1xyXG4gICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgLy8gdG9wOiA0MnB4O1xyXG4gICAgICAgICAgLy8gei1pbmRleDogOTk7XHJcblxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBpbWctYm94LXNoYWRvdztcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA0MnB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuXHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUxcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgLmNoZWNrYm94X3dyYXAge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcmFkaW87XHJcbiAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDkzJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgICAgICAgICAgICAgICAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgJHRoZW1lLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtY29sb3IsIDAuMDYpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gLnNlZV9hbGwge1xyXG4gICAgICAgICAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAvLyAgIHRvcDogMjI2cHg7XHJcbiAgICAgICAgICAvLyAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgICAgLy8gICB3aWR0aDogNzglO1xyXG4gICAgICAgICAgLy8gICBsZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgLy8gICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgLy8gICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAvLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIC8vICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgIC8vICAgcCB7XHJcbiAgICAgICAgICAvLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQ5cHg7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm5hdl9yaWdodF9wYW5lbCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG5cclxuICAgICAgLmJ0bnNlYXJjaCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAwYjg5NDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogIzAwYjg5NDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBtaW4td2lkdGg6IDkwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYigwIDE4NCAxNDggLyAzMCUpO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICAgIC5wcm9maWxlX2ljb24ge1xyXG4gICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiXHJcbi8vIGdsb2JhbC12YXJpYWJsZVxyXG4kaGVhZGVyLWNvbG9yOiAjMjYyNjI2O1xyXG4kYm9keS1iZy1jb2xvcjogI0YzRjNGMztcclxuJHRoZW1lLWNvbG9yOiAjMDBCODk0O1xyXG4kY29sb3ItcmVkOiAjRkY0QjRCO1xyXG4kY29sb3ItdmFsaWQtZXJyb3I6I0U1MzkzNTtcclxuJGNvbG9yLWludmFsaWQtZXJyb3I6I0I3MWMxYztcclxuJGNvbG9yLW1hZ2VudGE6ICNiYzY0OWM7XHJcbiRjb2xvci1waW5rOiAjZjQ5NGM4O1xyXG4kY29sb3ItZ3JlZW46ICM4NEMxNDA7XHJcbiRjb2xvci1saWdodC1ncmVlbjogI0JDRDUzMztcclxuJGNvbG9yLWJsdWU6ICM5NGQwZWE7XHJcbiRjb2xvci1kYXJrLWdyZXk6ICM5QTlBOUE7XHJcbiRjb2xvci1saWdodC1ncmV5OiAjZjlmOWY5O1xyXG4kY29sb3ItZXh0cmEtbGlnaHQtZ3JleTogI0Y0RjRGNDtcclxuJGNvbG9yLW9yYW5nZTogI0UzNzgyNjtcclxuJGNvbG9yLWxpZ2h0LW9yYW5nZTogI0VCOTgyMjtcclxuJGNvbG9yLWV4dHJhLWxpZ2h0LW9yYW5nZTogI0ZDQUYxNztcclxuJGNvbG9yLXdoaXRlOiAjZmZmZmZmO1xyXG4kYm9yZGVyLWNvbG9yOiAjZWVlY2VjO1xyXG4kbm90aWZpY2F0aW9uLWJnOiAjY2VlM2YwO1xyXG4kY29sb3ItbGlnaHQtYmxhY2s6ICM0QTRBNEE7XHJcbiRjb2xvci1ibGFjazogIzAwMDAwMDtcclxuJGNvbG9yLXllbGxvdzogI2Y5ZTkwNztcclxuJGJveC1zaGFkb3ctY29sb3I6IHJnYmEoMCwwLDAsLjIpO1xyXG4kYmxhY2stb3ZlcmxheTogcmdiYSgwLDAsMCwwLjcpO1xyXG4kd2hpdGUtb3ZlcmxheTogcmdiKDI0NywgMjQ3LCAyNDcpO1xyXG4kcGxhY2Vob2xkZXItY29sb3I6ICNhY2FjYWM7XHJcbiRjb2xvci1iYWNrZ3JvdW5kOiAjZTFmYmZhO1xyXG4kY29sb3ItaW5mbzogI0Y3QjUwMDtcclxuJGZvbnQtcm9ib3RvOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtbGlnaHQ6IDMwMDtcclxuJGZvbnQtcmVndWxhcjogNDAwO1xyXG4kZm9udC1ib2xkOiA3MDA7XHJcbiRmb250LWgxOiAzNHB4O1xyXG4kZm9udC1oMjogMzBweDtcclxuJGZvbnQtaDM6IDI0cHg7XHJcbiRmb250LWg0OiAxOHB4O1xyXG4kZm9udC1oNTogMTZweDtcclxuJGZvbnQtaDY6IDE0cHg7XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/global.service */ "./src/app/service/global.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(globalService, router) {
        this.globalService = globalService;
        this.router = router;
        this.currentVersion = 'v-0.0.15';
        this.mainMenu = [];
        this.isLogin = false;
        this.userDetails = [];
        this.dashBoardDetails = [];
        this.isAllProgram = false;
        this.programData = [];
        this.tanentCodeArr = [];
        this.isSelect = false;
        this.reconObject = {};
    }
    ngOnInit() {
        if (localStorage.getItem('currentVersion') != this.currentVersion) {
            localStorage.clear();
            localStorage.setItem('currentVersion', this.currentVersion);
        }
        if (localStorage.getItem('userInfo') == null) {
            this.mainMenu = [];
            this.router.navigate(['login']);
        }
        else {
            var details = JSON.parse(localStorage.getItem('userInfo'));
            this.userDetails = details[0];
            this.reconObject = this.userDetails.dashboardModules;
            this.isLogin = true;
            // this.programData = [
            //   {
            //     name: 'Dashboard',
            //     slug: '/dashboard'
            //   },
            //   {
            //     name: 'Configuration',
            //     slug: '/configuration'
            //   },
            //   {
            //     name: 'DQR',
            //     slug: '/settlement'
            //   },
            // ];
            // this.mainMenu = [
            //   {
            //     name: 'Dashboard',
            //     slug: '/dashboard'
            //   },
            //   {
            //     name: 'Configuration',
            //     slug: '/configuration'
            //   },
            //   {
            //     name: 'DQR',
            //     slug: '/settlement'
            //   },
            //   {
            //     name: 'Digital_Receipt',
            //     slug: '/digital'
            //   }
            // ];
            if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 1)) {
                this.mainMenu.push({
                    name: 'Dashboard',
                    slug: '/dashboard'
                });
            }
            if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 2)) {
                this.mainMenu.push({
                    name: 'Configuration',
                    slug: '/configuration'
                });
            }
            if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 4)) {
                this.mainMenu.push({
                    name: 'DR-Dashboard',
                    slug: '/digital'
                });
            }
            if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 4)) {
                this.mainMenu.push({
                    name: 'ValidateFile',
                    slug: '/validate'
                });
            }
            if (this.userDetails.dashboardModules.find(x => x.d_ModuleID == 3)) {
                this.mainMenu.push({
                    name: 'Reports',
                });
                if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 5)))) {
                    this.programData.push({
                        name: 'DQR',
                        slug: '/settlement',
                    });
                }
                if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 6)))) {
                    this.programData.push({
                        name: 'Recon Status',
                        slug: '/recon_status'
                    });
                }
                if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 7)))) {
                    this.programData.push({
                        name: 'DR_Reports',
                        slug: '/dr_reports',
                    });
                }
                if (this.userDetails.dashboardModules.find(((el) => el.child.find((item) => item.d_ModuleID === 7)))) {
                    this.programData.push({
                        name: 'Recon Summary',
                        slug: '/reconSummary',
                    });
                }
            }
        }
    }
    logout() {
        localStorage.removeItem('userInfo');
        this.router.navigate(['login']);
        this.mainMenu = [];
        this.isLogin = false;
    }
    signUp() {
        this.router.navigate(['signup']);
    }
    seeAllPrograms() {
        if (this.isAllProgram == false) {
            this.isAllProgram = true;
        }
        else {
            this.isAllProgram = false;
        }
    }
    getselectedProgram(tanentCOde, index) {
        this.isAllProgram = false;
    }
    hidePopup() {
        this.isAllProgram = false;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _service_global_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/service/data.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/data.service.ts ***!
  \*****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/globals */ "./src/app/globals.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global.service */ "./src/app/service/global.service.ts");






//import * as AllActiveSummary from '../../assets/data/GetAllActiveCommunicationSummary.json'
let DataService = class DataService {
    constructor(httpClient, globalService) {
        this.httpClient = httpClient;
        this.globalService = globalService;
        this.auth = 'test1';
        this.GLOBAL_AUTH_KEY = 'test';
    }
    doLogin(userName, password) {
        const input = JSON.stringify({
            userName: userName,
            passwords: password
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        // console.log(environment[global.env].API_URL);
        localStorage.setItem("Envurl", src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL);
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Common/GetUserDetails', input, options);
    }
    getAllProgram(userID) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/GetActiveBrands?UserId=' + userID);
    }
    getBrandsBasicDetails() {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/GetBrandsBasicDetails');
    }
    // GetDREnableProgram() {
    // 	return this.httpClient.get(environment[global.env].API_URL + '/api/DigitalReceipt/GetDREnableProgram');
    // }
    // GetTenantCommunicationSummary(selectedProgram, billType, startDate, endDate, storeWise, mobile, billID) {
    // 	const input = JSON.stringify({
    // 		BrandMasterList: selectedProgram,
    // 		DateType: parseInt(billType),
    // 		FromDate: startDate,
    // 		ToDate: endDate,
    // 		StoreCode: storeWise,
    // 		MobileNo: mobile,
    // 		BillNo: billID
    // 	});
    // 	const httpHeaders = new HttpHeaders({
    // 		'content-type': 'application/json',
    // 		'cache-control': 'no-cache'
    // 	});
    // 	const options = {
    // 		headers: httpHeaders
    // 	};
    // 	return this.httpClient.post(environment[global.env].API_URL + '/api/DigitalReceipt/GetTenantCommunicationSummary', input, options);
    // }
    getsearchProgramData(selectedProgram, billType, startDate, endDate, storeWise, mobile, billID) {
        const input = JSON.stringify({
            BrandMasterList: selectedProgram,
            DateType: parseInt(billType),
            FromDate: startDate,
            ToDate: endDate,
            StoreCode: storeWise,
            MobileNo: mobile,
            BillNo: billID
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/GetBrandsStatusCount', input, options);
    }
    transactionData(selectedProgram, billType, TransactionType, startDate, endDate, storeWise, mobile, billID, status, pageSize, OffSetLimit, statusCode) {
        if (storeWise == undefined) {
            storeWise = '';
        }
        if (mobile == undefined) {
            mobile = '';
        }
        if (billID == undefined) {
            billID = '';
        }
        const input = JSON.stringify({
            BrandMasterList: selectedProgram,
            DateType: parseInt(billType),
            TransactionType: TransactionType,
            FromDate: startDate,
            ToDate: endDate,
            StoreCode: storeWise,
            MobileNo: mobile,
            BillNo: billID,
            Status: status,
            PageSize: pageSize,
            OffSetLimit,
            StatusCode: statusCode
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/DisplayCustomerBillTransactions', input, options);
    }
    //////////////////////////
    displayErrorMessageCount(selectedProgram, billType, startDate, endDate, storeWise, mobile, billID, status) {
        if (storeWise == undefined) {
            storeWise = '';
        }
        if (mobile == undefined) {
            mobile = '';
        }
        if (billID == undefined) {
            billID = '';
        }
        const input = JSON.stringify({
            BrandMasterList: selectedProgram,
            DateType: parseInt(billType),
            FromDate: startDate,
            ToDate: endDate,
            StoreCode: storeWise,
            MobileNo: mobile,
            BillNo: billID,
            Status: status
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/DisplayErrorMessageCount', input, options);
    }
    getDuplicateData(selectedProgram, BillNo, BillDate, StoreCode) {
        const input = JSON.stringify({
            BrandMasterList: selectedProgram,
            BillNo,
            BillDate,
            StoreCode
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/DisplayCustomerDuplicateBillTransactions', input, options);
    }
    getReconSetupDetails(BrandId) {
        const input = JSON.stringify({
            BrandId: BrandId
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/GetReconDetailsByBrandID', input, options);
    }
    SaveFeedback(BrandId, feedback, active) {
        const input = JSON.stringify({
            BrandId: BrandId
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/BrandSetupConfirmationComment?Comment=' + feedback + '&isactive=' + active, input, options);
    }
    DQRReportData(searchFilterData) {
        console.log("dqr ", searchFilterData);
        // const input = JSON.stringify(searchFilterData);
        // const httpHeaders = new HttpHeaders({
        // 	'content-type': 'application/json',
        // 	'cache-control': 'no-cache'
        // });
        // const options = {
        // 	headers: httpHeaders
        // };
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/DQRReportData?Program_Code=LoveYourBodyClub');
    }
    // GetDQRData(searchFilterData) {
    // 	console.log("dqr ", searchFilterData);
    // 	const input = JSON.stringify(searchFilterData);
    // 	const httpHeaders = new HttpHeaders({
    // 		'content-type': 'application/json',
    // 		'cache-control': 'no-cache'
    // 	});
    // 	const options = {
    // 		headers: httpHeaders
    // 	};
    // 	return this.httpClient.post(environment[global.env].API_URL + '/api/Recon/GetDQRData', input, options);
    // }
    GetReconStatus(searchFilterData) {
        console.log("summary ", searchFilterData);
        const input = JSON.stringify(searchFilterData);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/Recon_ReportSummary', input, options);
    }
    EditReconBasicDetailsByBrandID(brandId, isActive, isEnable, isDeleted) {
        const input = JSON.stringify({
            BrandId: brandId,
            IsActive: isActive,
            IsEnable: isEnable,
            IsDeleted: false
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/EditReconBasicDetailsByBrandID', input, options);
    }
    SaveGeneralSetting(reconGeneralDetail) {
        var dataReq = reconGeneralDetail.reconGeneralDetail;
        const input = JSON.stringify(dataReq);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/SaveGeneralSetting', input, options);
    }
    SaveFileSetting(fileConfigDetail) {
        var dataReq = fileConfigDetail.fileConfigDetail;
        const input = JSON.stringify(dataReq);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/SaveFileSetting', input, options);
    }
    SaveFolderSetting(folderConfigDetail) {
        var dataReq = folderConfigDetail.folderConfigDetail;
        const input = JSON.stringify(dataReq);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/SaveFolderSetting', input, options);
    }
    SaveDQRSettingDetails(dqrConfigModel) {
        var dataReq = dqrConfigModel.dqrConfigModel;
        const input = JSON.stringify(dataReq);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/SaveDQRSettingDetails', input, options);
    }
    SaveReconAlertSetting(reconAlertDetails) {
        var dataReq = reconAlertDetails.reconAlertDetails;
        const input = JSON.stringify(dataReq);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/SaveReconAlertSetting', input, options);
    }
    SaveReconReportSetting(reconReportDetails) {
        var dataReq = reconReportDetails.reconReportDetails;
        const input = JSON.stringify(dataReq);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/SaveReconReportSetting', input, options);
    }
    SaveConfigSetting(configSetting) {
        var dataReq = configSetting.configSetting;
        const input = JSON.stringify(dataReq);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/SaveConfigSetting', input, options);
    }
    RedAlert(storeId, currentDate) {
        const input = JSON.stringify({
            "brandId": parseInt(storeId),
            "billdate": currentDate,
        });
        // console.log("input", input)
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/RedAlert', input, options);
        //return this.httpClient.get('../../assets/data/GetAllActiveCommunicationSummary.json'); 
    }
    redALartStatus(brandId, userId, brandName, date, serviceType, feedbacktext, status) {
        const input = JSON.stringify({
            "brandid": brandId,
            "brandName": brandName,
            "date": date,
            "serviceType": serviceType,
            "comment": feedbacktext,
            "status": status,
            "userId": parseInt(userId)
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/AlertStatus', input, options);
    }
    getErrorList(ErrorType) {
        return this.httpClient.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/HardAndSoft_ErrorList?ErrorType=' + ErrorType);
    }
    RecondashboardFileUpload(fileType, filesToUpload) {
        // const formData = new FormData();
        // formData.append('fileToUpload',filesToUpload);
        // console.log("formData new", formData,"==",filesToUpload);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/ReconService/RecondashboardFileUpload?FileType=' + fileType, filesToUpload, options);
    }
    RecondashboardFileValidate(fileType, lineSeperator, columnSeperator, filesToUpload) {
        // const formData = new FormData();
        // formData.append('fileToUpload',filesToUpload);
        // console.log("formData new", formData,"==",filesToUpload);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/ReconService/RecondashboardFileValidate?FileType=' + fileType + '&UserLineTerminator=' + lineSeperator + '&UserCommaSeparator=' + columnSeperator, filesToUpload, options);
    }
    getReconSummaryByBillDate(searchData) {
        const input = JSON.stringify(searchData);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/GetReconSummaryByBillDate', input, options);
    }
    GetAllActiveCommunicationSummary(currentDate, userId) {
        const input = JSON.stringify({
            "tenantid": 0,
            "tenantCode": "",
            "requetDate": currentDate,
            "userID": parseInt(userId)
        });
        // console.log("input", input)
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/DigitalReceipt/GetAllActiveCommunicationSummary', input, options);
        //return this.httpClient.get('../../assets/data/GetAllActiveCommunicationSummary.json'); 
    }
    GetSearchInovice(brandName, InvoiceNo, MobileNumber, StoreCode, currentDate) {
        const input = JSON.stringify({
            "tenantCode": brandName,
            "invoiceNo": InvoiceNo,
            "mobileNo": MobileNumber,
            "storeCode": StoreCode,
            "requetDate": currentDate
        });
        // console.log("input", input)
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/DigitalReceipt/GetInvoiceBySearchCriteria', input, options);
        //return this.httpClient.get('../../assets/data/seachDataReponse.json'); 
    }
    GetTenentCods(userId) {
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/DigitalReceipt/GetDREnableProgram?UserID=' + userId, null);
    }
    ResendData(inoviceDatas, searchTenantId, requestedBy) {
        const input = JSON.stringify({
            "progcode": inoviceDatas.progCode,
            "tenantID": searchTenantId.toString(),
            "storecode": inoviceDatas.storecode,
            "billNumber": inoviceDatas.billNo,
            "billDate": inoviceDatas.billDate,
            "source": "dashboard",
            "requestedBy": requestedBy,
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '​/api/DigitalReceipt/ResendShortURL', input, options);
    }
    ResendFeedbackData(inoviceDatas) {
        const input = JSON.stringify({
            "transactionID": "",
            "billNo": inoviceDatas.billNo,
            "billDate": inoviceDatas.billDate,
            "storecode": inoviceDatas.storecode,
            "mobileNo": inoviceDatas.mobileNo,
            "emailID": inoviceDatas.emailID,
            "customerName": inoviceDatas.customerName,
            "progCode": inoviceDatas.progCode,
            "baseURL": inoviceDatas.baseURL,
            "bitly": inoviceDatas.shortURL,
            "feedbackURL": inoviceDatas.feedbackURL
        });
        // console.log("input", input)
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '​/api/DigitalReceipt/ResendFeedbackURL', input, options);
    }
    GetInvoiceBySummaryStatus(tanantcode, date, totalBillReceived, failedBill, successBill, isSMS, isWhatsApp, isSendEmail, isPrint, isOpenPercent) {
        const input = JSON.stringify({
            "tenantCode": tanantcode,
            "requestDate": date,
            "totalBillReceived": totalBillReceived,
            "failedBill": failedBill,
            "successBill": successBill,
            "isSMS": isSMS,
            "isWhatsApp": isWhatsApp,
            "isSendEmail": isSendEmail,
            "isPrint": isPrint,
            "isUniqueHit": isOpenPercent,
        });
        // console.log("input", input)
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '​/api/DigitalReceipt/GetInvoiceBySummaryStatus', input, options);
    }
    GetErrorWiseSummaryStatus(tanantcode, date, totalBillReceived, failedBill, successBill, isSMS, isWhatsApp, isSendEmail, errorMessage) {
        const input = JSON.stringify({
            "tenantCode": tanantcode,
            "requestDate": date,
            "totalBillReceived": totalBillReceived,
            "failedBill": failedBill,
            "successBill": successBill,
            "isSMS": isSMS,
            "isWhatsApp": isWhatsApp,
            "isSendEmail": isSendEmail,
            "errorMessage": errorMessage
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '​/api/DigitalReceipt/GetErrorWiseSummaryStatus', input, options);
    }
    GetDRSummaryData(searchFilterData) {
        console.log("summary data", searchFilterData);
        let input = JSON.stringify(searchFilterData);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/DigitalReceipt/GetMonthWiseSummary', input, options);
    }
    GetDRSummaryDataStoreWise(searchFilterData) {
        console.log("summary  date store wise", searchFilterData);
        let input = JSON.stringify(searchFilterData);
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/DigitalReceipt/GetStoreAndMonthWiseSummary', input, options);
    }
    DownloadMonthWiseSummary(tenantID, tenantcode, date, userId, toDate, reportType, month, year) {
        console.log("summary  date range new month");
        const input = JSON.stringify({
            "tenantid": tenantID,
            "tenantCode": tenantcode,
            "requetDate": date,
            "toDate": toDate,
            "reportType": reportType,
            "userID": userId,
            "month": month,
            "year": year
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/DigitalReceipt/DownloadMonthWiseSummary', input, options);
    }
    // storeWiseConsolideSummary(tenantID, tenantcode, date, userId,toDate,month, year){
    // 	console.log("summary  date range new month");
    // 	const input = JSON.stringify({
    // 		"tenantid": tenantID,
    // 		"tenantCode": tenantcode,
    // 		"requetDate": date,
    // 		"toDate":toDate,
    // 		"userID": userId,
    // 		"month": month,
    // 		"year": year
    // 	});
    // 	const httpHeaders = new HttpHeaders({
    // 		'content-type': 'application/json',
    // 		'cache-control': 'no-cache'
    // 	});
    // 	const options = {
    // 		headers: httpHeaders
    // 	};
    // 	return this.httpClient.post(environment[global.env].API_URL + '/api/DigitalReceipt/GetStoreWiseConsolideSummary', input, options);
    // }
    GetMonthWiseErrorSummary(tenantID, tenantcode, date, userId, endDate, month, year) {
        const input = JSON.stringify({
            "tenantid": tenantID,
            "tenantCode": tenantcode,
            "requetDate": date,
            "userID": userId,
            "toDate": endDate,
            "month": month,
            "year": year
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/DigitalReceipt/GetMonthWiseErrorSummary', input, options);
    }
    GetStoreCountSummary(userId, date, tenantcode, tenantID) {
        const input = JSON.stringify({
            "tenantid": tenantID,
            "tenantCode": tenantcode,
            "startDate": date,
            "endDate": date,
            "userID": parseInt(userId),
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/DigitalReceipt/GetStoreWiseConsolideSummary', input, options);
    }
    GetStoreWiseDetailSummary(tenantID, tenantcode, date, userId, storecode, registerNumber) {
        const input = JSON.stringify({
            "tenantid": tenantID,
            "tenantCode": tenantcode,
            "startDate": date,
            "endDate": date,
            "userID": parseInt(userId),
            "storecode": storecode,
            "registerNumber": registerNumber
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/DigitalReceipt/GetStoreWiseDetailSummary', input, options);
    }
    GetRawBillDetails(billNo, billDate, storeCode, brandId) {
        const input = JSON.stringify({
            "billNo": billNo,
            "billdate": billDate,
            "storeCode": storeCode,
            "brandId": brandId,
        });
        const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'content-type': 'application/json',
            'cache-control': 'no-cache'
        });
        const options = {
            headers: httpHeaders
        };
        return this.httpClient.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"][src_app_globals__WEBPACK_IMPORTED_MODULE_3__["env"]].API_URL + '/api/Recon/GetRawBillDetails', input, options);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/service/global.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/global.service.ts ***!
  \*******************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GlobalService = class GlobalService {
    constructor(http) {
        this.http = http;
        this.keyword = [];
        this.programData = [];
    }
    setUploadData(info) {
        this.programData = info;
    }
    getUploadData() {
        return this.programData;
    }
};
GlobalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GlobalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GlobalService);



/***/ }),

/***/ "./src/app/service/utility.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/utility.service.ts ***!
  \********************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UtilityService = class UtilityService {
    constructor(utilityService) {
        this.utilityService = utilityService;
        this.allProgram = [];
    }
    downloadFtpFile() {
        // var ftpClient = require('ftp-client'),
        //   config = {
        //     host: 'localhost',
        //     port: 21,
        //     user: 'anonymous',
        //     password: 'anonymous@'
        //   },
        //   options = {
        //     logging: 'basic'
        //   },
        //   client = new ftpClient(config, options);
        // client.connect();
    }
    getMessageFromResponce(result) {
        if (result.messageCode == '1' && result.data.length) {
            var msg = "";
            return msg;
        }
        else if (result.messageCode == '1' && !result.data.length) {
            var msg = "Data Not Found !";
            return msg;
        }
        else {
            var msg = "Something Went Wrong !";
            return msg;
        }
    }
    getLetterByFilter(programData) {
        const data = programData.reduce((r, e) => {
            const group = e.brandName[0].toUpperCase();
            if (!r[group]) {
                r[group] = { group, children: [e] };
            }
            else {
                r[group].children.push(e);
            }
            return r;
        }, {});
        this.allProgram = Object.values(data);
        return this.allProgram;
    }
    programSort(programData) {
        programData.sort(function (a, b) {
            var brandNameA = a.brandName.toLowerCase();
            var brandNameB = b.brandName.toLowerCase();
            if (brandNameA < brandNameB) {
                return -1;
            }
            if (brandNameA < brandNameB) {
                return 1;
            }
            return 0;
        });
    }
    convertDate(str) {
        const date = new Date(str), mnth = ('0' + (date.getMonth() + 1)).slice(-2), day = ('0' + date.getDate()).slice(-2);
        // console.log("date",date,mnth,day);
        return [date.getFullYear(), mnth, day].join('-');
    }
    convertMonth(str) {
        const date = new Date(str), mnth = ('0' + (date.getMonth() + 1)).slice(-2);
        return [date.getFullYear(), mnth].join('-');
    }
};
UtilityService.ctorParameters = () => [
    { type: UtilityService }
];
UtilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilityService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    stage: {
        DOMAIN: 'https://example.com',
        API_URL: 'http://api-reconconfiguration.ercx.co',
    },
};
/*
* For easier debugging in development mode, you can import the following file
* to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
*
* This import should be commented out in production mode because it will have a negative impact
* on performance if an error is thrown.
*/
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\reconNew\Recon_Dashboard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map