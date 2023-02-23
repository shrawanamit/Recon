function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dashboard-dashboard-module~dqr-d~bd2ce3e8"], {
  /***/
  "./node_modules/ngx-mat-daterange-picker/esm2015/ngx-mat-daterange-picker.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/ngx-mat-daterange-picker/esm2015/ngx-mat-daterange-picker.js ***!
    \***********************************************************************************/

  /*! exports provided: NgxMatDrpModule, NgxMatDrpComponent, PickerOverlayComponent, CalendarWrapperComponent, PresetsComponent, CalendarOverlayService, ConfigStoreService, DATE, RangeStoreService, ɵa */

  /***/
  function node_modulesNgxMatDaterangePickerEsm2015NgxMatDaterangePickerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatDrpModule", function () {
      return NgxMatDrpModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxMatDrpComponent", function () {
      return NgxMatDrpComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PickerOverlayComponent", function () {
      return PickerOverlayComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarWrapperComponent", function () {
      return CalendarWrapperComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresetsComponent", function () {
      return PresetsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalendarOverlayService", function () {
      return CalendarOverlayService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigStoreService", function () {
      return ConfigStoreService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DATE", function () {
      return DATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RangeStoreService", function () {
      return RangeStoreService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return pickerOverlayAnimations;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DATE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('date');

    var RangeStoreService = /*#__PURE__*/function () {
      /**
       * @param {?} _fromDate
       * @param {?} _toDate
       */
      function RangeStoreService(_fromDate, _toDate) {
        _classCallCheck(this, RangeStoreService);

        this._fromDate = _fromDate;
        this._toDate = _toDate;
        this.rangeUpdate$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }
      /**
       * @return {?}
       */


      _createClass(RangeStoreService, [{
        key: "updateRange",

        /**
         * @param {?=} fromDate
         * @param {?=} toDate
         * @return {?}
         */
        value: function updateRange() {
          var fromDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._fromDate;
          var toDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this._toDate;
          this._fromDate = fromDate;
          this._toDate = toDate;
          this.rangeUpdate$.next({
            fromDate: this._fromDate,
            toDate: this._toDate
          });
        }
      }, {
        key: "fromDate",
        get: function get() {
          return this._fromDate;
        }
        /**
         * @return {?}
         */

      }, {
        key: "toDate",
        get: function get() {
          return this._toDate;
        }
      }]);

      return RangeStoreService;
    }();

    RangeStoreService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    RangeStoreService.ctorParameters = function () {
      return [{
        type: Date,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [DATE]
        }]
      }, {
        type: Date,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [DATE]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */


    var ConfigStoreService = /*#__PURE__*/function () {
      function ConfigStoreService() {
        _classCallCheck(this, ConfigStoreService);

        this.defaultOptions = {
          excludeWeekends: false,
          animation: true,
          locale: 'en-US',
          fromMinMax: {
            fromDate: null,
            toDate: null
          },
          toMinMax: {
            fromDate: null,
            toDate: null
          }
        };
      }
      /**
       * @return {?}
       */


      _createClass(ConfigStoreService, [{
        key: "ngxDrpOptions",
        get: function get() {
          return this._ngxDrpOptions;
        }
        /**
         * @param {?} options
         * @return {?}
         */
        ,
        set: function set(options) {
          this._ngxDrpOptions = Object.assign({}, this.defaultOptions, options);
        }
      }]);

      return ConfigStoreService;
    }();

    ConfigStoreService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    ConfigStoreService.ctorParameters = function () {
      return [];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */


    var pickerOverlayAnimations = {
      /** Transforms the height of the picker overlay content. */
      transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('transformPickerOverlay', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0,
        transform: 'scale(1, 0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 1,
        transform: 'scale(1, 1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms cubic-bezier(0.25, 0.8, 0.25, 1)')])), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        opacity: 0
      })))])
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    var PickerOverlayComponent = /*#__PURE__*/function () {
      /**
       * @param {?} rangeStoreService
       * @param {?} configStoreService
       * @param {?} overlayRef
       */
      function PickerOverlayComponent(rangeStoreService, configStoreService, overlayRef) {
        _classCallCheck(this, PickerOverlayComponent);

        this.rangeStoreService = rangeStoreService;
        this.configStoreService = configStoreService;
        this.overlayRef = overlayRef;
        this.presets = [];
      }
      /**
       * @return {?}
       */


      _createClass(PickerOverlayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fromDate = this.rangeStoreService.fromDate;
          this.toDate = this.rangeStoreService.toDate;
          this.startDatePrefix = this.configStoreService.ngxDrpOptions.startDatePrefix || 'FROM:';
          this.endDatePrefix = this.configStoreService.ngxDrpOptions.endDatePrefix || 'TO:';
          this.applyLabel = this.configStoreService.ngxDrpOptions.applyLabel || 'Apply';
          this.cancelLabel = this.configStoreService.ngxDrpOptions.cancelLabel || 'Cancel';
          this.presets = this.configStoreService.ngxDrpOptions.presets;
          this.shouldAnimate = this.configStoreService.ngxDrpOptions.animation ? 'enter' : 'noop';
          var _this$configStoreServ = this.configStoreService.ngxDrpOptions.fromMinMax;
          this.fromMinDate = _this$configStoreServ.fromDate;
          this.fromMaxDate = _this$configStoreServ.toDate;
          var _this$configStoreServ2 = this.configStoreService.ngxDrpOptions.toMinMax;
          this.toMinDate = _this$configStoreServ2.fromDate;
          this.toMaxDate = _this$configStoreServ2.toDate;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "updateFromDate",
        value: function updateFromDate(date) {
          this.fromDate = date;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "updateToDate",
        value: function updateToDate(date) {
          this.toDate = date;
        }
        /**
         * @param {?} presetItem
         * @return {?}
         */

      }, {
        key: "updateRangeByPreset",
        value: function updateRangeByPreset(presetItem) {
          this.updateFromDate(presetItem.range.fromDate);
          this.updateToDate(presetItem.range.toDate);
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "applyNewDates",
        value: function applyNewDates(e) {
          this.rangeStoreService.updateRange(this.fromDate, this.toDate);
          this.disposeOverLay();
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "discardNewDates",
        value: function discardNewDates(e) {
          // this.rangeStoreService.updateRange();
          this.disposeOverLay();
        }
        /**
         * @return {?}
         */

      }, {
        key: "disposeOverLay",
        value: function disposeOverLay() {
          this.overlayRef.dispose();
        }
      }]);

      return PickerOverlayComponent;
    }();

    PickerOverlayComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngx-mat-drp-picker-overlay',
        template: "<div [@transformPickerOverlay]=\"shouldAnimate\" class=\"ngx-mat-drp-calendar-container\">\n\n  <div class=\"ngx-mat-drp-calendar-item\">\n    <calendar-wrapper \n    [prefixLabel]=\"startDatePrefix\"\n    [selectedDate]=\"fromDate\"\n    [minDate]=\"fromMinDate\"\n    [maxDate]=\"fromMaxDate\"\n    (selectedDateChange)=\"updateFromDate($event)\">\n  </calendar-wrapper>\n  </div>\n  <div class=\"ngx-mat-drp-calendar-item\">\n    <calendar-wrapper \n    [prefixLabel]=\"endDatePrefix\"\n    [selectedDate]=\"toDate\"\n    [minDate]=\"toMinDate\"\n    [maxDate]=\"toMaxDate\" \n    (selectedDateChange)=\"updateToDate($event)\">\n  </calendar-wrapper>\n  </div>\n  <div class=\"ngx-mat-drp-calendar-item\">\n    <div class=\"ngx-mat-drp-menu\">\n      <mat-drp-presets [presets]=\"presets\" (presetChanged)=\"updateRangeByPreset($event)\"></mat-drp-presets>\n      <div class=\"ngx-mat-drp-controls\">\n        <button mat-button color=\"primary\" (click)=\"applyNewDates($event)\">{{applyLabel}}</button>\n        <button mat-button (click)=\"discardNewDates($event)\">{{cancelLabel}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n",
        styles: [".ngx-mat-drp-calendar-container{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;min-width:650px;height:300px}.ngx-mat-drp-calendar-item{-ms-flex-preferred-size:33.33%;flex-basis:33.33%;min-width:210px;padding:1em;font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:400}.ngx-mat-drp-menu{height:100%}.ngx-mat-drp-controls{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;margin:10% auto}.ngx-mat-drp-overlay{-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);background:#fff;border-radius:2px}.ngx-mat-drp-overlay-backdrop{background-color:rgba(0,0,0,.2);opacity:.2}"],
        animations: [pickerOverlayAnimations.transformPanel],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    PickerOverlayComponent.ctorParameters = function () {
      return [{
        type: RangeStoreService
      }, {
        type: ConfigStoreService
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayRef"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DEFAULT_CONFIG = {
      panelClass: 'ngx-mat-drp-overlay',
      hasBackdrop: true,
      backdropClass: 'ngx-mat-drp-overlay-backdrop',
      shouldCloseOnBackdropClick: true
    };

    var CalendarOverlayService = /*#__PURE__*/function () {
      /**
       * @param {?} overlay
       * @param {?} injector
       */
      function CalendarOverlayService(overlay, injector) {
        _classCallCheck(this, CalendarOverlayService);

        this.overlay = overlay;
        this.injector = injector;
      }
      /**
       * @param {?=} config
       * @param {?=} hostElemRef
       * @return {?}
       */


      _createClass(CalendarOverlayService, [{
        key: "open",
        value: function open() {
          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var hostElemRef = arguments.length > 1 ? arguments[1] : undefined;
          this.hostElemRef = hostElemRef;
          /** @type {?} */

          var overlayConfig = Object.assign({}, DEFAULT_CONFIG, config);
          /** @type {?} */

          var overlayRef = this.createOverlay(overlayConfig);
          /** @type {?} */

          var portalInjector = this.createInjector(overlayRef);
          /** @type {?} */

          var calendarPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["ComponentPortal"](PickerOverlayComponent, null, portalInjector);
          overlayRef.attach(calendarPortal);
          overlayRef.backdropClick().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () {
            return overlayConfig.shouldCloseOnBackdropClick;
          })).subscribe(function () {
            return overlayRef.dispose();
          });
          return overlayRef;
        }
        /**
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "createOverlay",
        value: function createOverlay(config) {
          /** @type {?} */
          var overlayConfig = this.getOverlayConfig(config);
          return this.overlay.create(overlayConfig);
        }
        /**
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "getOverlayConfig",
        value: function getOverlayConfig(config) {
          /** @type {?} */
          var positionStrategy = this.overlay.position().flexibleConnectedTo(this.hostElemRef).withFlexibleDimensions(false).withViewportMargin(8).withDefaultOffsetY(12).withPositions([{
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          }, {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom'
          }, {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top'
          }, {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom'
          }]);
          /** @type {?} */

          var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayConfig"]({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy: positionStrategy
          });
          return overlayConfig;
        }
        /**
         * @param {?} overlayRef
         * @return {?}
         */

      }, {
        key: "createInjector",
        value: function createInjector(overlayRef) {
          /** @type {?} */
          var injectionTokens = new WeakMap();
          injectionTokens.set(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayRef"], overlayRef);
          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalInjector"](this.injector, injectionTokens);
        }
      }]);

      return CalendarOverlayService;
    }();

    CalendarOverlayService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    CalendarOverlayService.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */


    var NgxMatDrpComponent = /*#__PURE__*/function () {
      /**
       * @param {?} changeDetectionRef
       * @param {?} calendarOverlayService
       * @param {?} rangeStoreService
       * @param {?} configStoreService
       * @param {?} datePipe
       */
      function NgxMatDrpComponent(changeDetectionRef, calendarOverlayService, rangeStoreService, configStoreService, datePipe) {
        _classCallCheck(this, NgxMatDrpComponent);

        this.changeDetectionRef = changeDetectionRef;
        this.calendarOverlayService = calendarOverlayService;
        this.rangeStoreService = rangeStoreService;
        this.configStoreService = configStoreService;
        this.datePipe = datePipe;
        this.selectedDateRangeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedDateRange = '';
      }
      /**
       * @return {?}
       */


      _createClass(NgxMatDrpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.configStoreService.ngxDrpOptions = this.options;
          this.options.placeholder = this.options.placeholder || 'Choose a date';
          this.rangeUpdate$ = this.rangeStoreService.rangeUpdate$.subscribe(function (range) {
            /** @type {?} */
            var from = _this.formatToDateString(range.fromDate, _this.options.format);
            /** @type {?} */


            var to = _this.formatToDateString(range.toDate, _this.options.format);

            _this.selectedDateRange = "".concat(from, " - ").concat(to);

            _this.selectedDateRangeChanged.emit(range);
          });
          this.rangeStoreService.updateRange(this.options.range.fromDate, this.options.range.toDate);
          this.changeDetectionRef.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.rangeUpdate$) {
            this.rangeUpdate$.unsubscribe();
          }
        }
        /**
         * @param {?} date
         * @param {?} format
         * @return {?}
         */

      }, {
        key: "formatToDateString",
        value: function formatToDateString(date, format) {
          return this.datePipe.transform(date, format);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "openCalendar",
        value: function openCalendar(event) {
          /** @type {?} */
          var overlayRef = this.calendarOverlayService.open(this.options.calendarOverlayConfig, this.calendarInput);
        }
        /**
         * @param {?} range
         * @return {?}
         */

      }, {
        key: "resetDates",
        value: function resetDates(range) {
          this.rangeStoreService.updateRange(range.fromDate, range.toDate);
        }
      }]);

      return NgxMatDrpComponent;
    }();

    NgxMatDrpComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngx-mat-drp',
        template: "<div> \n  \n  <mat-form-field class=\"ngx-mat-drp-date-display\">\n    <input class=\"ngx-mat-drp-date-input\"\n          matInput [placeholder]=\"options.placeholder\"\n          [value]=\"selectedDateRange\"\n          [matTooltip]=\"selectedDateRange\"\n          (click)=\"openCalendar($event)\"\n          readonly\n          #calendarInput >\n    <div matSuffix \n          class=\"ngx-mat-drp-calendar\"\n          (click)=\"openCalendar($event)\">\n    </div>\n  </mat-form-field>\n  \n</div>    \n",
        styles: [".ngx-mat-drp-date-display{min-width:230px}.ngx-mat-drp-date-input{text-overflow:ellipsis;color:#4169e1}.ngx-mat-drp-calendar{background-image:url('data:image/svg+xml,<svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"http://www.w3.org/2000/svg\">    <path d=\"M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z\"/>    <path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>');width:24px;height:24px}"],
        providers: [CalendarOverlayService, RangeStoreService, ConfigStoreService, _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    NgxMatDrpComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: CalendarOverlayService
      }, {
        type: RangeStoreService
      }, {
        type: ConfigStoreService
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
      }];
    };

    NgxMatDrpComponent.propDecorators = {
      calendarInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['calendarInput']
      }],
      selectedDateRangeChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    var CalendarWrapperComponent = /*#__PURE__*/function () {
      /**
       * @param {?} configStore
       */
      function CalendarWrapperComponent(configStore) {
        _classCallCheck(this, CalendarWrapperComponent);

        this.configStore = configStore;
        this.selectedDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this.weekendFilter = function (d) {
          return true;
        };

        this.dateFormat = configStore.ngxDrpOptions.format;

        if (configStore.ngxDrpOptions.excludeWeekends) {
          this.weekendFilter = function (d) {
            /** @type {?} */
            var day = d.getDay();
            return day !== 0 && day !== 6;
          };
        }
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(CalendarWrapperComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // Necessary to force view refresh
          this.matCalendar.activeDate = changes["selectedDate"].currentValue;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "onSelectedChange",
        value: function onSelectedChange(date) {
          this.selectedDateChange.emit(date);
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onYearSelected",
        value: function onYearSelected(e) {}
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "onUserSelection",
        value: function onUserSelection(e) {}
      }]);

      return CalendarWrapperComponent;
    }();

    CalendarWrapperComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'calendar-wrapper',
        template: "<div>\n\n  <!-- <mat-divider></mat-divider> -->\n  <span class=\"ngx-mat-drp-date-label\">\n    <label>{{prefixLabel}}</label>\n    <label class=\"ngx-mat-drp-selected-date-label\">{{selectedDate | date:dateFormat}}</label>\n  </span>\n  <!-- <mat-divider></mat-divider> -->\n\n  <mat-calendar \n    [startAt]=\"selectedDate\"\n    [selected]=\"selectedDate\"\n    [minDate]=\"minDate\"\n    [maxDate]=\"maxDate\"\n    (selectedChange)=\"onSelectedChange($event)\"\n    (yearSelected)=\"onYearSelected($event)\"\n    (_userSelection)=\"onUserSelection($event)\"\n    [dateFilter]=\"weekendFilter\">\n  </mat-calendar>\n\n</div>",
        styles: [".ngx-mat-drp-date-label{background:#fafafa;margin:15px;padding:4px 2px;width:100%;font-size:14px;font-weight:500}.ngx-mat-drp-selected-date-label{color:rgba(0,0,0,.38);padding-left:5%}"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    CalendarWrapperComponent.ctorParameters = function () {
      return [{
        type: ConfigStoreService
      }];
    };

    CalendarWrapperComponent.propDecorators = {
      matCalendar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatCalendar"]]
      }],
      selectedDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      selectedDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      prefixLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    var PresetsComponent = /*#__PURE__*/function () {
      function PresetsComponent() {
        _classCallCheck(this, PresetsComponent);

        this.presetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(PresetsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "setPresetPeriod",
        value: function setPresetPeriod(event) {
          this.presetChanged.emit(event);
        }
      }]);

      return PresetsComponent;
    }();

    PresetsComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'mat-drp-presets',
        template: "<div>\n  <ul class=\"ngx-mat-drp-presets-list\">\n    <li *ngFor=\"let preset of presets\" (click)=\"setPresetPeriod(preset)\"> {{preset.presetLabel}} </li>\n  </ul>\n</div>",
        styles: [".ngx-mat-drp-presets-list{list-style-type:none;margin:0;padding:0}.ngx-mat-drp-presets-list li{margin:5px 0;padding:4%;cursor:pointer;background:#fafafa;color:#3f51b5;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ngx-mat-drp-presets-list li:hover{background:#3f51b5;color:#fff}"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    PresetsComponent.ctorParameters = function () {
      return [];
    };

    PresetsComponent.propDecorators = {
      presets: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      presetChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    var ɵ0 = new Date();

    var NgxMatDrpModule = function NgxMatDrpModule() {
      _classCallCheck(this, NgxMatDrpModule);
    };

    NgxMatDrpModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"]],
        declarations: [NgxMatDrpComponent, CalendarWrapperComponent, PickerOverlayComponent, PresetsComponent],
        providers: [{
          provide: DATE,
          useValue: ɵ0
        }],
        entryComponents: [PickerOverlayComponent],
        exports: [NgxMatDrpComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-mat-daterange-picker.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~DR_Summary-summary-module~ReconSummary-recon-summary-module~dashboard-dashboard-module~dqr-d~bd2ce3e8-es5.js.map