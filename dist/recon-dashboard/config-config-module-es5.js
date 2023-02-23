function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["config-config-module"], {
  /***/
  "./node_modules/angular-file-uploader/fesm2015/angular-file-uploader.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/angular-file-uploader/fesm2015/angular-file-uploader.js ***!
    \******************************************************************************/

  /*! exports provided: AngularFileUploaderComponent, AngularFileUploaderModule */

  /***/
  function node_modulesAngularFileUploaderFesm2015AngularFileUploaderJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFileUploaderComponent", function () {
      return AngularFileUploaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularFileUploaderModule", function () {
      return AngularFileUploaderModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AngularFileUploaderComponent = /*#__PURE__*/function () {
      function AngularFileUploaderComponent(http) {
        _classCallCheck(this, AngularFileUploaderComponent);

        this.http = http;
        this.resetUpload = false; // Outputs

        this.ApiResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fileSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allowedFiles = [];
        this.notAllowedFiles = [];
        this.Caption = [];
        this.isAllowedFileSingle = true;
        this.progressBarShow = false;
        this.enableUploadBtn = false;
        this.uploadMsg = false;
        this.afterUpload = false;
        this.uploadStarted = false;
        this.currentUploads = [];
        this.fileNameIndex = true;
        this.withCredentials = false;
        this.autoUpload = false;
        this.idDate = +new Date();
      }

      _createClass(AngularFileUploaderComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // Track changes in Configuration and see if user has even provided Configuration.
          if (changes.config && this.config) {
            // Assign User Configurations to Library Properties.
            this.theme = this.config.theme || '';
            this.id = this.config.id || parseInt((this.idDate / 10000).toString().split('.')[1], 10) + Math.floor(Math.random() * 20) * 10000;
            this.hideProgressBar = this.config.hideProgressBar || false;
            this.hideResetBtn = this.config.hideResetBtn || false;
            this.hideSelectBtn = this.config.hideSelectBtn || false;
            this.maxSize = (this.config.maxSize || 20) * 1024000; // mb to bytes.

            this.uploadAPI = this.config.uploadAPI.url;
            this.method = this.config.uploadAPI.method || 'POST';
            this.formatsAllowed = this.config.formatsAllowed || '*';
            this.formatsAllowedText = this.formatsAllowed === '*' ? '' : '(' + this.formatsAllowed + ')';
            this.multiple = this.config.multiple || false;
            this.headers = this.config.uploadAPI.headers || {};
            this.params = this.config.uploadAPI.params || {};
            this.responseType = this.config.uploadAPI.responseType || 'json';
            this.withCredentials = this.config.uploadAPI.withCredentials || false;
            this.fileNameIndex = this.config.fileNameIndex === false ? false : true;
            this.autoUpload = this.config.autoUpload || false;
            this.replaceTexts = {
              selectFileBtn: this.multiple ? 'Select Files' : 'Select File',
              resetBtn: 'Reset',
              uploadBtn: 'Upload',
              dragNDropBox: 'Drag N Drop',
              attachPinBtn: this.multiple ? 'Attach Files...' : 'Attach File...',
              afterUploadMsg_success: 'Successfully Uploaded !',
              afterUploadMsg_error: 'Upload Failed !',
              sizeLimit: 'Size Limit'
            }; // default replaceText.

            if (this.config.replaceTexts) {
              // updated replaceText if user has provided any.
              this.replaceTexts = Object.assign(Object.assign({}, this.replaceTexts), this.config.replaceTexts);
            }
          } // Reset when resetUpload value changes from false to true.


          if (changes.resetUpload) {
            if (changes.resetUpload.currentValue === true) {
              this.resetFileUpload();
            }
          }
        } // Reset following properties.

      }, {
        key: "resetFileUpload",
        value: function resetFileUpload() {
          this.allowedFiles = [];
          this.Caption = [];
          this.notAllowedFiles = [];
          this.uploadMsg = false;
          this.enableUploadBtn = false;
        } // When user selects files.

      }, {
        key: "onChange",
        value: function onChange(event) {
          this.fileSelected.emit(event);
          this.notAllowedFiles = [];
          var fileExtRegExp = /(?:\.([^.]+))?$/;
          var fileList;

          if (this.afterUpload || !this.multiple) {
            this.allowedFiles = [];
            this.Caption = [];
            this.afterUpload = false;
          }

          if (event.type === 'drop') {
            fileList = event.dataTransfer.files;
          } else {
            fileList = event.target.files || event.srcElement.files;
          } // 'forEach' does not exist on 'filelist' that's why this good old 'for' is used.


          for (var i = 0; i < fileList.length; i++) {
            var currentFileExt = fileExtRegExp.exec(fileList[i].name)[1].toLowerCase(); // Get file extension.

            var isFormatValid = this.formatsAllowed.includes('*') ? true : this.formatsAllowed.includes(currentFileExt);
            var isSizeValid = fileList[i].size <= this.maxSize; // Check whether current file format and size is correct as specified in the configurations.

            if (isFormatValid && isSizeValid) {
              this.allowedFiles.push(fileList[i]);
            } else {
              this.notAllowedFiles.push({
                fileName: fileList[i].name,
                fileSize: this.convertSize(fileList[i].size),
                errorMsg: !isFormatValid ? 'Invalid format' : 'Invalid size'
              });
            }
          } // If there's any allowedFiles.


          if (this.allowedFiles.length > 0) {
            this.enableUploadBtn = true; // Upload the files directly if theme is attach pin (as upload btn is not there for this theme) or autoUpload is true.

            if (this.theme === 'attachPin' || this.autoUpload) {
              this.uploadFiles();
            }
          } else {
            this.enableUploadBtn = false;
          }

          this.uploadMsg = false;
          this.uploadStarted = false;
          this.uploadPercent = 0;
          event.target.value = null;
        }
      }, {
        key: "uploadFiles",
        value: function uploadFiles() {
          var _this2 = this;

          this.progressBarShow = true;
          this.uploadStarted = true;
          this.notAllowedFiles = [];
          var isError = false;
          this.isAllowedFileSingle = this.allowedFiles.length <= 1;
          var formData = new FormData(); // Add data to be sent in this request

          this.allowedFiles.forEach(function (file, i) {
            formData.append(_this2.Caption[i] || 'file' + (_this2.fileNameIndex ? i : ''), _this2.allowedFiles[i]);
          });
          /*
          Not Working, Headers null
          // Contruct Headers
          const headers = new HttpHeaders();
          for (const key of Object.keys(this.headers)) {
            headers.append(key, this.headers[key]);
          }
                // Contruct Params
          const params = new HttpParams();
          for (const key of Object.keys(this.params)) {
            params.append(key, this.params[key]);
          } */

          this.http.request(this.method.toUpperCase(), this.uploadAPI, {
            body: formData,
            reportProgress: true,
            observe: 'events',
            headers: this.headers,
            params: this.params,
            responseType: this.responseType,
            withCredentials: this.withCredentials
          }).subscribe(function (event) {
            // Upload Progress
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
              _this2.enableUploadBtn = false; // button should be disabled if process uploading

              var currentDone = event.loaded / event.total;
              _this2.uploadPercent = Math.round(event.loaded / event.total * 100);
            } else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
              if (event.status === 200 || event.status === 201) {
                // Success
                _this2.progressBarShow = false;
                _this2.enableUploadBtn = false;
                _this2.uploadMsg = true;
                _this2.afterUpload = true;

                if (!isError) {
                  _this2.uploadMsgText = _this2.replaceTexts.afterUploadMsg_success;
                  _this2.uploadMsgClass = 'text-success lead';
                }
              } else {
                // Failure
                isError = true;

                _this2.handleErrors();
              }

              _this2.ApiResponse.emit(event);
            } else {//console.log('Event Other: ', event);
            }
          }, function (error) {
            // Failure
            isError = true;

            _this2.handleErrors();

            _this2.ApiResponse.emit(error);
          });
        }
      }, {
        key: "handleErrors",
        value: function handleErrors() {
          this.progressBarShow = false;
          this.enableUploadBtn = false;
          this.uploadMsg = true;
          this.afterUpload = true;
          this.uploadMsgText = this.replaceTexts.afterUploadMsg_error;
          this.uploadMsgClass = 'text-danger lead';
        }
      }, {
        key: "removeFile",
        value: function removeFile(i, sf_na) {
          if (sf_na === 'sf') {
            this.allowedFiles.splice(i, 1);
            this.Caption.splice(i, 1);
          } else {
            this.notAllowedFiles.splice(i, 1);
          }

          if (this.allowedFiles.length === 0) {
            this.enableUploadBtn = false;
          }
        }
      }, {
        key: "convertSize",
        value: function convertSize(fileSize) {
          return fileSize < 1024000 ? (fileSize / 1024).toFixed(2) + ' KB' : (fileSize / 1024000).toFixed(2) + ' MB';
        }
      }, {
        key: "attachpinOnclick",
        value: function attachpinOnclick() {
          var element = document.getElementById('sel' + this.id);

          if (element !== null) {
            element.click();
          }
        }
      }, {
        key: "drop",
        value: function drop(event) {
          event.stopPropagation();
          event.preventDefault();
          this.onChange(event);
        }
      }, {
        key: "allowDrop",
        value: function allowDrop(event) {
          event.stopPropagation();
          event.preventDefault();
          event.dataTransfer.dropEffect = 'copy';
        }
      }]);

      return AngularFileUploaderComponent;
    }();

    AngularFileUploaderComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'angular-file-uploader',
        template: "<div class=\"container\" *ngIf=\"(theme !== 'attachPin')\" id=\"default\">\r\n\r\n  <!-- Drag n Drop theme Starts -->\r\n  <div *ngIf=\"theme == 'dragNDrop'\" id=\"dragNDrop\"\r\n    [ngClass]=\"(hideSelectBtn && hideResetBtn) ? null : 'dragNDropBtmPad'\" class=\"dragNDrop\">\r\n    <div style=\"position:relative;\">\r\n      <div id=\"div1\" class=\"div1 afu-dragndrop-box\" (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\">\r\n        <p class=\"afu-dragndrop-text\">{{replaceTexts?.dragNDropBox}}</p>\r\n      </div>\r\n      <!-- <span class='label label-info' id=\"upload-file-info{{id}}\">{{allowedFiles[0]?.name}}</span> -->\r\n    </div>\r\n  </div>\r\n  <!-- Drag n Drop theme Ends -->\r\n\r\n  <label for=\"sel{{id}}\" class=\"btn btn-primary btn-sm afu-select-btn\" [ngClass]=\"progressBarShow ? 'disabled' : null\"\r\n    *ngIf=\"!hideSelectBtn\">{{replaceTexts?.selectFileBtn}}</label>\r\n  <input type=\"file\" id=\"sel{{id}}\" style=\"display: none\" *ngIf=\"!hideSelectBtn\" [disabled]=\"progressBarShow\"\r\n    (change)=\"onChange($event)\" title=\"Select file\" name=\"files[]\" [accept]=formatsAllowed\r\n    [attr.multiple]=\"multiple ? '' : null\" />\r\n  <button class=\"btn btn-info btn-sm resetBtn afu-reset-btn\" (click)=\"resetFileUpload()\" *ngIf=\"!hideResetBtn\"\r\n    [disabled]=\"progressBarShow\">{{replaceTexts?.resetBtn}}</button>\r\n  <br *ngIf=\"!hideSelectBtn\">\r\n  <p class=\"constraints-info afu-constraints-info\">{{formatsAllowedText}} {{replaceTexts?.sizeLimit}}:\r\n    {{(convertSize(maxSize))}}\r\n  </p>\r\n  <!--Allowed file list-->\r\n  <div class=\"row afu-valid-file\" *ngFor=\"let sf of allowedFiles;let i=index\">\r\n    <p class=\"col-xs-3 textOverflow\"><span class=\"text-primary\">{{sf.name}}</span></p>\r\n    <p class=\"col-xs-3 padMarg sizeC\"><strong>({{convertSize(sf.size)}})</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>\r\n    <!--  <input class=\"col-xs-3 progress caption\"  type=\"text\"  placeholder=\"Caption..\"  [(ngModel)]=\"Caption[i]\"  *ngIf=\"!uploadStarted\"/> -->\r\n    <div class=\"progress col-xs-3 padMarg afu-progress-bar\"\r\n      *ngIf=\"isAllowedFileSingle && progressBarShow && !hideProgressBar\">\r\n      <span class=\"progress-bar progress-bar-success\" role=\"progressbar\"\r\n        [ngStyle]=\"{'width':uploadPercent+'%'}\">{{uploadPercent}}%</span>\r\n    </div>\r\n    <a class=\"col-xs-1\" role=\"button\" (click)=\"removeFile(i,'sf')\" *ngIf=\"!uploadStarted\"><i\r\n        class=\"fa fa-times\"></i></a>\r\n  </div>\r\n  <!--Not Allowed file list-->\r\n  <div class=\"row text-danger afu-invalid-file\" *ngFor=\"let na of notAllowedFiles;let j=index\">\r\n    <p class=\"col-xs-3 textOverflow\"><span>{{na['fileName']}}</span></p>\r\n    <p class=\"col-xs-3 padMarg sizeC\"><strong>({{na['fileSize']}})</strong></p>\r\n    <p class=\"col-xs-3 \">{{na['errorMsg']}}</p>\r\n    <a class=\"col-xs-1 delFileIcon\" role=\"button\" (click)=\"removeFile(j,'na')\" *ngIf=\"!uploadStarted\">&nbsp;<i\r\n        class=\"fa fa-times\"></i></a>\r\n  </div>\r\n\r\n  <p *ngIf=\"uploadMsg\" class=\"{{uploadMsgClass}} + afu-upload-status\">{{uploadMsgText}}\r\n  <p>\r\n  <div *ngIf=\"!isAllowedFileSingle && progressBarShow && !hideProgressBar\">\r\n    <div class=\"progress col-xs-4 padMarg afu-progress-bar\">\r\n      <span class=\"progress-bar progress-bar-success\" role=\"progressbar\"\r\n        [ngStyle]=\"{'width':uploadPercent+'%'}\">{{uploadPercent}}%</span>\r\n    </div>\r\n    <br>\r\n    <br>\r\n  </div>\r\n  <button class=\"btn btn-success afu-upload-btn\" type=\"button\" (click)=\"uploadFiles()\"\r\n    [disabled]=\"!enableUploadBtn && progressBarShow\" *ngIf=\"!autoUpload\">{{replaceTexts?.uploadBtn}}</button>\r\n  <br>\r\n</div>\r\n\r\n<!--/////////////////////////// ATTACH PIN THEME  //////////////////////////////////////////////////////////-->\r\n<div *ngIf=\"theme == 'attachPin'\" id=\"attachPin\">\r\n  <div style=\"position:relative;padding-left:6px\">\r\n    <a class='btn up_btn afu-attach-pin' (click)=\"attachpinOnclick()\">\r\n      {{replaceTexts?.attachPinBtn}}\r\n      <i class=\"fa fa-paperclip\" aria-hidden=\"true\"></i>\r\n      <!-- <p style=\"margin-top:10px\">({{formatsAllowedText}}) Size limit- {{(convertSize(maxSize))}}</p> -->\r\n      <input type=\"file\" id=\"sel{{id}}\" (change)=\"onChange($event)\" style=\"display: none\" title=\"Select file\"\r\n        name=\"files[]\" [accept]=formatsAllowed [attr.multiple]=\"multiple ? '' : null\" />\r\n      <br>\r\n    </a>\r\n    &nbsp;\r\n    <span class='label label-info' id=\"upload-file-info{{id}}\">{{allowedFiles[0]?.name}}</span>\r\n  </div>\r\n</div>",
        styles: [".constraints-info{font-style:italic;margin-top:10px}.padMarg{margin-bottom:0;padding:0}.caption{margin-right:5px}.textOverflow{overflow:hidden;padding-right:0;text-overflow:ellipsis;white-space:nowrap}.up_btn{background-color:transparent;border:2px solid #5c5b5b;border-radius:22px;color:#000}.delFileIcon{color:#ce0909;text-decoration:none}.selectBtnDisabled{background-color:#ccc;border:1px solid #999;color:#666;cursor:no-drop}.dragNDrop .div1{border:2px dashed #5c5b5b;display:border-box;height:6rem;width:20rem}.dragNDrop .div1>p{color:#5c5b5b;font-weight:700;margin-top:1.4em;text-align:center}.dragNDropBtmPad{padding-bottom:2rem}@media screen and (max-width:620px){.caption{padding:0}}@media screen and (max-width:510px){.sizeC{width:25%}}@media screen and (max-width:260px){.caption,.sizeC{font-size:10px}}.resetBtn{margin-left:3px}"]
      }]
    }];

    AngularFileUploaderComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }];
    };

    AngularFileUploaderComponent.propDecorators = {
      config: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      resetUpload: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ApiResponse: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      fileSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    var AngularFileUploaderModule = function AngularFileUploaderModule() {
      _classCallCheck(this, AngularFileUploaderModule);
    };

    AngularFileUploaderModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]],
        declarations: [AngularFileUploaderComponent],
        exports: [AngularFileUploaderComponent]
      }]
    }];
    /*
     * Public API Surface of angular-file-uploader
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=angular-file-uploader.js.map

    /***/
  },

  /***/
  "./node_modules/angular-froala-wysiwyg/editor/editor.directive.js":
  /*!************************************************************************!*\
    !*** ./node_modules/angular-froala-wysiwyg/editor/editor.directive.js ***!
    \************************************************************************/

  /*! exports provided: FroalaEditorDirective */

  /***/
  function node_modulesAngularFroalaWysiwygEditorEditorDirectiveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FroalaEditorDirective", function () {
      return FroalaEditorDirective;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var froala_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! froala-editor */
    "./node_modules/froala-editor/js/froala_editor.min.js");
    /* harmony import */


    var froala_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(froala_editor__WEBPACK_IMPORTED_MODULE_2__);

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var FroalaEditorDirective =
    /** @class */
    function () {
      function FroalaEditorDirective(el, zone) {
        this.zone = zone; // editor options

        this._opts = {
          immediateAngularModelUpdate: false,
          angularIgnoreAttrs: null
        };
        this.SPECIAL_TAGS = ['img', 'button', 'input', 'a'];
        this.INNER_HTML_ATTR = 'innerHTML';
        this._hasSpecialTag = false;
        this._editorInitialized = false;
        this._oldModel = null; // Begin ControlValueAccesor methods.

        this.onChange = function (_) {};

        this.onTouched = function () {}; // froalaModel directive as output: update model if editor contentChanged


        this.froalaModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // froalaInit directive as output: send manual editor initialization

        this.froalaInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        var element = el.nativeElement; // check if the element is a special tag

        if (this.SPECIAL_TAGS.indexOf(element.tagName.toLowerCase()) != -1) {
          this._hasSpecialTag = true;
        }

        this._element = element;
        this.zone = zone;
      }

      FroalaEditorDirective_1 = FroalaEditorDirective; // Form model content changed.

      FroalaEditorDirective.prototype.writeValue = function (content) {
        this.updateEditor(content);
      };

      FroalaEditorDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
      };

      FroalaEditorDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
      };

      Object.defineProperty(FroalaEditorDirective.prototype, "froalaEditor", {
        // End ControlValueAccesor methods.
        // froalaEditor directive as input: store the editor options
        set: function set(opts) {
          this._opts = opts || this._opts;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(FroalaEditorDirective.prototype, "froalaModel", {
        // froalaModel directive as input: store initial editor content
        set: function set(content) {
          this.updateEditor(content);
        },
        enumerable: true,
        configurable: true
      }); // Update editor with model contents.

      FroalaEditorDirective.prototype.updateEditor = function (content) {
        if (JSON.stringify(this._oldModel) == JSON.stringify(content)) {
          return;
        }

        if (!this._hasSpecialTag) {
          this._oldModel = content;
        } else {
          this._model = content;
        }

        if (this._editorInitialized) {
          if (!this._hasSpecialTag) {
            this._editor.html.set(content);
          } else {
            this.setContent();
          }
        } else {
          if (!this._hasSpecialTag) {
            this._element.innerHTML = content || '';
          } else {
            this.setContent();
          }
        }
      }; // update model if editor contentChanged


      FroalaEditorDirective.prototype.updateModel = function () {
        var _this = this;

        this.zone.run(function () {
          var modelContent = null;

          if (_this._hasSpecialTag) {
            var attributeNodes = _this._element.attributes;
            var attrs = {};

            for (var i = 0; i < attributeNodes.length; i++) {
              var attrName = attributeNodes[i].name;

              if (_this._opts.angularIgnoreAttrs && _this._opts.angularIgnoreAttrs.indexOf(attrName) != -1) {
                continue;
              }

              attrs[attrName] = attributeNodes[i].value;
            }

            if (_this._element.innerHTML) {
              attrs[_this.INNER_HTML_ATTR] = _this._element.innerHTML;
            }

            modelContent = attrs;
          } else {
            var returnedHtml = _this._editor.html.get();

            if (typeof returnedHtml === 'string') {
              modelContent = returnedHtml;
            }
          }

          if (_this._oldModel !== modelContent) {
            _this._oldModel = modelContent; // Update froalaModel.

            _this.froalaModelChange.emit(modelContent); // Update form model.


            _this.onChange(modelContent);
          }
        });
      };

      FroalaEditorDirective.prototype.registerEvent = function (eventName, callback) {
        if (!eventName || !callback) {
          return;
        }

        if (!this._opts.events) {
          this._opts.events = {};
        }

        this._opts.events[eventName] = callback;
      };

      FroalaEditorDirective.prototype.initListeners = function () {
        var self = this; // Check if we have events on the editor.

        if (this._editor.events) {
          // bind contentChange and keyup event to froalaModel
          this._editor.events.on('contentChanged', function () {
            setTimeout(function () {
              self.updateModel();
            }, 0);
          });

          this._editor.events.on('mousedown', function () {
            setTimeout(function () {
              self.onTouched();
            }, 0);
          });

          if (this._opts.immediateAngularModelUpdate) {
            this._editor.events.on('keyup', function () {
              setTimeout(function () {
                self.updateModel();
              }, 0);
            });
          }
        }

        this._editorInitialized = true;
      };

      FroalaEditorDirective.prototype.createEditor = function () {
        var _this = this;

        if (this._editorInitialized) {
          return;
        }

        this.setContent(true); // init editor

        this.zone.runOutsideAngular(function () {
          // Add listeners on initialized event.
          if (!_this._opts.events) _this._opts.events = {}; // Register initialized event.

          _this.registerEvent('initialized', _this._opts.events && _this._opts.events.initialized);

          var existingInitCallback = _this._opts.events.initialized; // Default initialized event.

          if (!_this._opts.events.initialized || !_this._opts.events.initialized.overridden) {
            _this._opts.events.initialized = function () {
              _this.initListeners();

              existingInitCallback && existingInitCallback.call(_this._editor, _this);
            };

            _this._opts.events.initialized.overridden = true;
          } // Initialize the Froala Editor.


          _this._editor = new froala_editor__WEBPACK_IMPORTED_MODULE_2___default.a(_this._element, _this._opts);
        });
      };

      FroalaEditorDirective.prototype.setHtml = function () {
        this._editor.html.set(this._model || ""); // This will reset the undo stack everytime the model changes externally. Can we fix this?


        this._editor.undo.reset();

        this._editor.undo.saveStep();
      };

      FroalaEditorDirective.prototype.setContent = function (firstTime) {
        if (firstTime === void 0) {
          firstTime = false;
        }

        var self = this; // Set initial content

        if (this._model || this._model == '') {
          this._oldModel = this._model;

          if (this._hasSpecialTag) {
            var tags = this._model; // add tags on element

            if (tags) {
              for (var attr in tags) {
                if (tags.hasOwnProperty(attr) && attr != this.INNER_HTML_ATTR) {
                  this._element.setAttribute(attr, tags[attr]);
                }
              }

              if (tags.hasOwnProperty(this.INNER_HTML_ATTR)) {
                this._element.innerHTML = tags[this.INNER_HTML_ATTR];
              }
            }
          } else {
            if (firstTime) {
              this.registerEvent('initialized', function () {
                self.setHtml();
              });
            } else {
              self.setHtml();
            }
          }
        }
      };

      FroalaEditorDirective.prototype.destroyEditor = function () {
        if (this._editorInitialized) {
          this._editor.destroy();

          this._editorInitialized = false;
        }
      };

      FroalaEditorDirective.prototype.getEditor = function () {
        if (this._element) {
          return this._editor;
        }

        return null;
      }; // send manual editor initialization


      FroalaEditorDirective.prototype.generateManualController = function () {
        var controls = {
          initialize: this.createEditor.bind(this),
          destroy: this.destroyEditor.bind(this),
          getEditor: this.getEditor.bind(this)
        };
        this.froalaInit.emit(controls);
      }; // TODO not sure if ngOnInit is executed after @inputs


      FroalaEditorDirective.prototype.ngAfterViewInit = function () {
        // check if output froalaInit is present. Maybe observers is private and should not be used?? TODO how to better test that an output directive is present.
        if (!this.froalaInit.observers.length) {
          this.createEditor();
        } else {
          this.generateManualController();
        }
      };

      FroalaEditorDirective.prototype.ngOnDestroy = function () {
        this.destroyEditor();
      };

      var FroalaEditorDirective_1;

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], FroalaEditorDirective.prototype, "froalaEditor", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], FroalaEditorDirective.prototype, "froalaModel", null);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], FroalaEditorDirective.prototype, "froalaModelChange", void 0);

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], FroalaEditorDirective.prototype, "froalaInit", void 0);

      FroalaEditorDirective = FroalaEditorDirective_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[froalaEditor]',
        exportAs: 'froalaEditor',
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return FroalaEditorDirective_1;
          }),
          multi: true
        }]
      }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], FroalaEditorDirective);
      return FroalaEditorDirective;
    }(); //# sourceMappingURL=editor.directive.js.map

    /***/

  },

  /***/
  "./node_modules/angular-froala-wysiwyg/editor/editor.module.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/angular-froala-wysiwyg/editor/editor.module.js ***!
    \*********************************************************************/

  /*! exports provided: FroalaEditorModule */

  /***/
  function node_modulesAngularFroalaWysiwygEditorEditorModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FroalaEditorModule", function () {
      return FroalaEditorModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _editor_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./editor.directive */
    "./node_modules/angular-froala-wysiwyg/editor/editor.directive.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var FroalaEditorModule =
    /** @class */
    function () {
      function FroalaEditorModule() {}

      FroalaEditorModule_1 = FroalaEditorModule;

      FroalaEditorModule.forRoot = function () {
        return {
          ngModule: FroalaEditorModule_1,
          providers: []
        };
      };

      var FroalaEditorModule_1;
      FroalaEditorModule = FroalaEditorModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_editor_directive__WEBPACK_IMPORTED_MODULE_1__["FroalaEditorDirective"]],
        exports: [_editor_directive__WEBPACK_IMPORTED_MODULE_1__["FroalaEditorDirective"]]
      })], FroalaEditorModule);
      return FroalaEditorModule;
    }(); //# sourceMappingURL=editor.module.js.map

    /***/

  },

  /***/
  "./node_modules/angular-froala-wysiwyg/editor/index.js":
  /*!*************************************************************!*\
    !*** ./node_modules/angular-froala-wysiwyg/editor/index.js ***!
    \*************************************************************/

  /*! exports provided: FroalaEditorDirective, FroalaEditorModule */

  /***/
  function node_modulesAngularFroalaWysiwygEditorIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _editor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./editor.directive */
    "./node_modules/angular-froala-wysiwyg/editor/editor.directive.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FroalaEditorDirective", function () {
      return _editor_directive__WEBPACK_IMPORTED_MODULE_0__["FroalaEditorDirective"];
    });
    /* harmony import */


    var _editor_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./editor.module */
    "./node_modules/angular-froala-wysiwyg/editor/editor.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FroalaEditorModule", function () {
      return _editor_module__WEBPACK_IMPORTED_MODULE_1__["FroalaEditorModule"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/angular-froala-wysiwyg/index.js":
  /*!******************************************************!*\
    !*** ./node_modules/angular-froala-wysiwyg/index.js ***!
    \******************************************************/

  /*! exports provided: FroalaEditorDirective, FroalaEditorModule, FroalaViewDirective, FroalaViewModule, FERootModule */

  /***/
  function node_modulesAngularFroalaWysiwygIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FERootModule", function () {
      return FERootModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./editor */
    "./node_modules/angular-froala-wysiwyg/editor/index.js");
    /* harmony import */


    var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./view */
    "./node_modules/angular-froala-wysiwyg/view/index.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FroalaEditorDirective", function () {
      return _editor__WEBPACK_IMPORTED_MODULE_1__["FroalaEditorDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FroalaEditorModule", function () {
      return _editor__WEBPACK_IMPORTED_MODULE_1__["FroalaEditorModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FroalaViewDirective", function () {
      return _view__WEBPACK_IMPORTED_MODULE_2__["FroalaViewDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FroalaViewModule", function () {
      return _view__WEBPACK_IMPORTED_MODULE_2__["FroalaViewModule"];
    });

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var MODULES = [_editor__WEBPACK_IMPORTED_MODULE_1__["FroalaEditorModule"], _view__WEBPACK_IMPORTED_MODULE_2__["FroalaViewModule"]];

    var FERootModule =
    /** @class */
    function () {
      function FERootModule() {}

      FERootModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_editor__WEBPACK_IMPORTED_MODULE_1__["FroalaEditorModule"].forRoot(), _view__WEBPACK_IMPORTED_MODULE_2__["FroalaViewModule"].forRoot()],
        exports: MODULES
      })], FERootModule);
      return FERootModule;
    }(); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/angular-froala-wysiwyg/view/index.js":
  /*!***********************************************************!*\
    !*** ./node_modules/angular-froala-wysiwyg/view/index.js ***!
    \***********************************************************/

  /*! exports provided: FroalaViewDirective, FroalaViewModule */

  /***/
  function node_modulesAngularFroalaWysiwygViewIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _view_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./view.directive */
    "./node_modules/angular-froala-wysiwyg/view/view.directive.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FroalaViewDirective", function () {
      return _view_directive__WEBPACK_IMPORTED_MODULE_0__["FroalaViewDirective"];
    });
    /* harmony import */


    var _view_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./view.module */
    "./node_modules/angular-froala-wysiwyg/view/view.module.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FroalaViewModule", function () {
      return _view_module__WEBPACK_IMPORTED_MODULE_1__["FroalaViewModule"];
    }); //# sourceMappingURL=index.js.map

    /***/

  },

  /***/
  "./node_modules/angular-froala-wysiwyg/view/view.directive.js":
  /*!********************************************************************!*\
    !*** ./node_modules/angular-froala-wysiwyg/view/view.directive.js ***!
    \********************************************************************/

  /*! exports provided: FroalaViewDirective */

  /***/
  function node_modulesAngularFroalaWysiwygViewViewDirectiveJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FroalaViewDirective", function () {
      return FroalaViewDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var FroalaViewDirective =
    /** @class */
    function () {
      function FroalaViewDirective(renderer, element) {
        this.renderer = renderer;
        this._element = element.nativeElement;
      }

      Object.defineProperty(FroalaViewDirective.prototype, "froalaView", {
        // update content model as it comes
        set: function set(content) {
          this._element.innerHTML = content;
        },
        enumerable: true,
        configurable: true
      });

      FroalaViewDirective.prototype.ngAfterViewInit = function () {
        this.renderer.addClass(this._element, "fr-view");
      };

      __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", String), __metadata("design:paramtypes", [String])], FroalaViewDirective.prototype, "froalaView", null);

      FroalaViewDirective = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[froalaView]'
      }), __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])], FroalaViewDirective);
      return FroalaViewDirective;
    }(); //# sourceMappingURL=view.directive.js.map

    /***/

  },

  /***/
  "./node_modules/angular-froala-wysiwyg/view/view.module.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/angular-froala-wysiwyg/view/view.module.js ***!
    \*****************************************************************/

  /*! exports provided: FroalaViewModule */

  /***/
  function node_modulesAngularFroalaWysiwygViewViewModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FroalaViewModule", function () {
      return FroalaViewModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _view_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./view.directive */
    "./node_modules/angular-froala-wysiwyg/view/view.directive.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var FroalaViewModule =
    /** @class */
    function () {
      function FroalaViewModule() {}

      FroalaViewModule_1 = FroalaViewModule;

      FroalaViewModule.forRoot = function () {
        return {
          ngModule: FroalaViewModule_1,
          providers: []
        };
      };

      var FroalaViewModule_1;
      FroalaViewModule = FroalaViewModule_1 = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_view_directive__WEBPACK_IMPORTED_MODULE_1__["FroalaViewDirective"]],
        exports: [_view_directive__WEBPACK_IMPORTED_MODULE_1__["FroalaViewDirective"]]
      })], FroalaViewModule);
      return FroalaViewModule;
    }(); //# sourceMappingURL=view.module.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/config/configuration/configuration.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/config/configuration/configuration.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppConfigConfigurationConfigurationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page_content\">\r\n    <!-- <div class=\"loading-container\" *ngIf=\"loadingData\">\r\n        <div class=\"spinner-border\" role=\"status\" >\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"container\">\r\n        <div class=\"config_table\" *ngIf=\"!isCreateConfig && !openValidateSec\">\r\n            <div class=\"top_header\">\r\n                <div class=\"search_filter\">\r\n                    <img src=\"assets/images/search.svg\">\r\n                    <input (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search...\">\r\n                </div>\r\n                <div class=\"btn_wrap\">\r\n                    <button class=\"btn_validate\" (click)=\"openValidateSection()\">\r\n                        Validate File\r\n                    </button>\r\n                    <button (click)=\"createNewConfig('false', [])\">\r\n                        <i class=\"fa fa-plus\"></i>\r\n                        Create New\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"loading-container\" *ngIf=\"!dataSource.data.length \">\r\n                <div class=\"spinner-border\" role=\"status\" *ngIf=\"!internalError\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n                <p class=\"text-danger\" *ngIf=\"internalError\">{{responceMsg}}</p>\r\n            </div>\r\n            <!-- ANGULAR MATERIAL TABLE -->\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"table\" matSort>\r\n                <!-- Bill No. # Column -->\r\n                <ng-container matColumnDef=\"brandName\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Program Name</th>\r\n                    <td mat-cell *matCellDef=\"let product\">{{product.brandName}}</td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"headerFile\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Header File</th>\r\n                    <td mat-cell *matCellDef=\"let product\">\r\n                        <div class=\"checkbox_wrap\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"checkbox\" id=\"{{product.brandId}}\" [checked]=\"product.isHeaderFile\"\r\n                                    disabled>\r\n                                <label for=\"{{product.brandId}}\"></label>\r\n                            </div>\r\n                        </div>\r\n                    </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"skuBill\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>SKU Bill Item</th>\r\n                    <td mat-cell *matCellDef=\"let product\">\r\n                        <div class=\"checkbox_wrap\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"checkbox\" id=\"{{product.brandId}}\" [checked]=\"product.isItemFile\">\r\n                                <label for=\"{{product.brandId}}\"></label>\r\n                            </div>\r\n                        </div>\r\n                    </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"skuTenderItem\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>SKU Item & Tender File</th>\r\n                    <td mat-cell *matCellDef=\"let product\">\r\n                        <div class=\"checkbox_wrap\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"checkbox\" id=\"{{product.brandId}}\" [checked]=\"product.isItemTenderFile\">\r\n                                <label for=\"{{product.brandId}}\"></label>\r\n                            </div>\r\n                        </div>\r\n                    </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"lastModifiedBy\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Updated By</th>\r\n                    <td mat-cell *matCellDef=\"let product\">{{product.modifiedBy}}</td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"lastModifiedOn\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Date Updated</th>\r\n                    <td mat-cell *matCellDef=\"let product\">{{product.modifiedDate}}</td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>\r\n                    <td mat-cell *matCellDef=\"let product\">\r\n                        <small class=\"icon-info-tooltip\" data-tip=\"Disable Program\" tabindex=\"2\"\r\n                            *ngIf=\"moduleRoleRightDetailWithKey.CONFIGURATION.delete == 'yes'\">\r\n                            <img src=\"/assets/images/trash.svg\">\r\n                        </small>\r\n                        <small class=\"icon-info-tooltip\" data-tip=\"Edit Program\" tabindex=\"2\"\r\n                            *ngIf=\"moduleRoleRightDetailWithKey.CONFIGURATION.edit == 'yes'\">\r\n                            <img src=\"/assets/images/pencil.svg\" (click)=\"createNewConfig('true',product)\">\r\n                        </small>\r\n                        <small class=\"icon-info-tooltip\" data-tip=\"Active/Inactive Program\" tabindex=\"2\"\r\n                            *ngIf=\"moduleRoleRightDetailWithKey.CONFIGURATION.create == 'yes'\">\r\n                            <mat-slide-toggle [(ngModel)]=\"product.isActive\"\r\n                                (change)=\"activeProgram(product.brandId,product.isActive,product.isEnable,product.isDeleted)\"\r\n                                aria-disabled=\"moduleRoleRightDetailWithKey.CONFIGURATION.create == 'yes'\">\r\n                            </mat-slide-toggle>\r\n                        </small>\r\n                        <small class=\"icon-info-tooltip\" data-tip=\"View data\" tabindex=\"2\" data-toggle=\"modal\"\r\n                            data-target=\".bd-example-modal-lg\"\r\n                            *ngIf=\"moduleRoleRightDetailWithKey.CONFIGURATION.view == 'yes'\">\r\n                            <img src=\"/assets/images/view.svg\" (click)=\"viewAllData(product.brandId,product)\">\r\n                        </small>\r\n\r\n                    </td>\r\n                </ng-container>\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n            <mat-paginator [length]=\"5\" [pageSize]=\"5\" [pageSizeOptions]=\"[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]\">\r\n            </mat-paginator>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n        <!-- <app-create-config *ngIf=\"isCreateConfig\" [isEditConfig]='isEditConfig'></app-create-config> -->\r\n\r\n\r\n        <div class=\"mt-4 file_container\" *ngIf=\"openValidateSec\">\r\n            <div class=\"backbtn_wrap\">\r\n                <button type=\"button\" class=\"close\" (click)=\"backButton()\">&times;</button>\r\n            </div>\r\n            <div class=\"row mt-4 file_container_wrap\">\r\n                <div class=\"col-6 file_container_form\">\r\n                    <div class=\"row  mb-4\">\r\n\r\n                        <div class=\"col-6 py-2\">\r\n                           Recon Type\r\n                        </div>\r\n                        <div class=\"form-group col-6\">\r\n                            <select name=\"FileType\" id=\"FileTypeSelect\" [(ngModel)]=\"FileType\"\r\n                                (ngModelChange)=\"selectFileType(FileType)\" required #fileType=\"ngModel\">\r\n                                <option [ngValue]=\"1\">Standard</option>\r\n                                <option [ngValue]=\"2\">Gsl</option>\r\n                                <option [ngValue]=\"3\">Ecomm</option>\r\n                            </select>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mb-4\">\r\n\r\n                        <div class=\"col-6  py-2\">\r\n                           Sale Item\r\n                        </div>\r\n                        <div class=\"form-group col-6\">\r\n                            <input type=\"file\" class=\"form-control-file\" name=\"file\"id=\"file1\"\r\n                                (change)=\"handleFile1Input($event.target.files)\">\r\n\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                    <div class=\"row mb-4\">\r\n\r\n                        <div class=\"col-6  py-2\">\r\n                            Tender\r\n                        </div>\r\n                        <div class=\"form-group col-6\">\r\n                            <input type=\"file\" class=\"form-control-file\" name=\"file\" id=\"file2\"\r\n                                (change)=\"handleFile2Input($event.target.files)\">\r\n\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                    <div class=\"row\">\r\n\r\n                        <button class=\"ml-2\" (click)=\"validateFile()\">\r\n                            <span *ngIf=\"loadingData\" class=\"text-ligt spinner-border spinner-border-sm \" role=\"status\"\r\n                                aria-hidden=\"true\"></span>\r\n                            Validate\r\n                        </button>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"col-5 output_text_wrap\" *ngIf=\"displayFileRes\">\r\n                    <span>{{fileUploadResponce}}</span>\r\n                    <!-- <span class=\"responceError\" *ngFor=\"let fileUploadResponceError of fileUploadResponceError;let i = index\">{{fileUploadResponceError}}\r\n                        <br/>\r\n                    </span> -->\r\n                </div>\r\n                <div class=\"col-5 output_text_wrap\"  *ngIf=\"displayFileError\">\r\n                    <span class=\"responceError\" *ngFor=\"let fileUploadResponceError of fileUploadResponceError;let i = index\">{{fileUploadResponceError}}\r\n                        <br/>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            \r\n            <div class=\"mt-4 table_container_wrap\" *ngIf=\"displayDileData\">\r\n                <div class='dr-table'>\r\n                    <table>\r\n                        <tbody>\r\n                            <tr class=\"table-header\">\r\n\r\n\r\n                                <th>#Bill Price</th>\r\n                                <th>#Tender Amount</th>\r\n                                <th>#Net Amount</th>\r\n                                <th>#Bill Date</th>\r\n                                <th>#Bill Value</th>\r\n                                <th>#Massge</th>\r\n                                <th>#Bill No</th>\r\n                                <th>#Store Code</th>\r\n\r\n\r\n                            </tr>\r\n                            <tr *ngFor=\"let reconFileDataList of reconDataList;let i = index\">\r\n                                <th>{{reconFileDataList.billedPrices}}</th>\r\n                                <th>{{reconFileDataList.tenderAmount}}</th>\r\n                                <th>{{reconFileDataList.netamount}}</th>\r\n                                <th>{{reconFileDataList.billdate}}</th>\r\n                                <th>{{reconFileDataList.billValue}}</th>\r\n                                <th>{{reconFileDataList.massges}}</th>\r\n                                <th>{{reconFileDataList.billNo}}</th>\r\n                                <th>{{reconFileDataList.storeCode}}</th>\r\n                            </tr>\r\n\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- Create or Edit Program -->\r\n\r\n<div class=\"createnew_wrap\" *ngIf=\"isCreateConfig\">\r\n    <div class=\"create_new_container\">\r\n        <div class=\"loading-container\" *ngIf=\"isEditConfigLoader && reconGeneralDetail.length == ''\">\r\n            <div class=\"spinner-border\" role=\"status\">\r\n                <span class=\"sr-only\">Loading...</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"top_header\">\r\n            <ul>\r\n                <li [ngClass]=\"{active: tabId == '1'}\" (click)=\"tabId='1'\">General</li>\r\n                <li [ngClass]=\"{active: tabId == '2'}\" (click)=\"newBrandId != '' && tabId='2'\">File</li>\r\n                <li [ngClass]=\"{active: tabId == '3'}\" (click)=\"newBrandId != '' && tabId='3'\">Folder</li>\r\n                <li [ngClass]=\"{active: tabId == '4'}\" (click)=\"newBrandId != '' && tabId='4'\">DQR</li>\r\n                <li [ngClass]=\"{active: tabId == '5'}\" (click)=\"newBrandId != '' && tabId='5'\">Alert</li>\r\n                <li [ngClass]=\"{active: tabId == '6'}\" (click)=\"newBrandId != '' && tabId='6'\">Report</li>\r\n                <li [ngClass]=\"{active: tabId == '7'}\" (click)=\"newBrandId != '' && tabId='7'\">Setting</li>\r\n                <li [ngClass]=\"{active: tabId == '8'}\" (click)=\"newBrandId != '' && tabId='8' \"\r\n                    (click)=\"getDetailById()\">All Data</li>\r\n                <!-- <li [ngClass]=\"{active: tabId == '8'}\" (click)=\"getDetailById() && tabId='8' \">All Data</li> -->\r\n            </ul>\r\n        </div>\r\n        <div class=\"close_config_form\">\r\n            <button (click)=\"closeConfig()\" class=\"close\">Close</button>\r\n        </div>\r\n        <form #configObject=\"ngForm\" name=\"form\" (ngSubmit)=\"configObject.form.valid && getConfigObject(configObject)\"\r\n            novalidate>\r\n            <div class=\"form_section\">\r\n                <div class=\"genral_wrap\" *ngIf=\"tabId == '1'\">\r\n                    <div class=\"form_wrap row\">\r\n                        <div class=\"input_group col-4\">\r\n                            <label>Program Name*</label>\r\n                            <input type=\"text\" pattern='[A-Za-z\\\\s]*' [(ngModel)]=\"reconGeneralDetail.brandName\"\r\n                                name=\"brandName\" minlength=\"4\" required #brandName=\"ngModel\" maxlength=\"50\">\r\n                            <div\r\n                                *ngIf=\"configObject.submitted || brandName.invalid && (brandName.dirty || brandName.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"brandName.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Program Name must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"brandName.errors?.minlength\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Program Name must be at least 4 characters long.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"programCode.errors?.pattern\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Program Name pattern does't matched.\r\n                                </div>\r\n                            </div>\r\n                            <input type=\"hidden\" [(ngModel)]=\"reconGeneralDetail.brandId\" name=\"brandId\">\r\n                        </div>\r\n                        <div class=\"input_group col-4\">\r\n                            <label>Program Code*</label>\r\n                            <input type=\"text\" [(ngModel)]=\"reconGeneralDetail.programCode\" name=\"programCode\"\r\n                                pattern=\"[A-Za-z\\\\s]*\" minlength=\"4\" required #programCode=\"ngModel\" maxlength=\"50\">\r\n                            <div\r\n                                *ngIf=\"configObject.submitted || programCode.invalid && (programCode.dirty || programCode.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"programCode.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Program Code must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"programCode.errors?.minlength\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Program Code must be at least 4 characters long.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"programCode.errors?.pattern\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Program Code pattern does't matched.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form_wrap\">\r\n                        <p>File required for Recon Process*</p>\r\n                        <div class=\"group\">\r\n                            <div class=\"radio_wrap\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"radio\" id=\"fileType1\" name=\"fileType\" value=\"sale\"\r\n                                        [(ngModel)]=\"reconGeneralDetail.fileType\" #fileType=\"ngModel\" required>\r\n                                    <label for=\"fileType1\">Header Recon File</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"radio\" id=\"fileType2\" name=\"fileType\" value=\"item\"\r\n                                        [(ngModel)]=\"reconGeneralDetail.fileType\" required>\r\n                                    <label for=\"fileType2\">SKU Bill Item file</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"radio\" id=\"fileType3\" name=\"fileType\" value=\"SaleItem\"\r\n                                        [(ngModel)]=\"reconGeneralDetail.fileType\" required>\r\n                                    <label for=\"fileType3\">SKU Bill Item & SKU Bill tender file</label>\r\n                                </div>\r\n                                <div *ngIf=\"configObject.submitted && fileType.invalid\">\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"fileType.errors?.required\">\r\n                                        <i class=\"fa fa-info-circle\"></i>\r\n                                        File type must be required.\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"form_wrap\">\r\n                        <p>Missing Transactions</p>\r\n                        <div class=\"group\">\r\n                            <div class=\"checkbox_wrap\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"fileType1\">\r\n                                    <label for=\"fileType1\">Header Level</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"fileType2\">\r\n                                    <label for=\"fileType2\">Item Level</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"form_wrap\">\r\n                        <p>Missing Redemptions</p>\r\n                        <div class=\"group\">\r\n                            <div class=\"checkbox_wrap\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"mr1\" [(ngModel)]=\"missingRedemptionByAll\"\r\n                                        (change)=\"missingRedemptionByAll === isPointOnMissingRedemption\"\r\n                                        name=\"missingRedemptionByAll\" [checked]=\"isPointOnMissingRedemption \r\n                                        && reconGeneralDetail.isCouponOnMissingRedemption \r\n                                        && reconGeneralDetail.isGV\">\r\n                                    <label for=\"mr1\">All</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"mr2\" [(ngModel)]=\"isPointOnMissingRedemption\"\r\n                                        name=\"isPointOnMissingRedemption\"\r\n                                        [checked]=\"missingRedemptionByAll || isPointOnMissingRedemption\" disabled>\r\n                                    <label for=\"mr2\">Points</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"mr3\"\r\n                                        [(ngModel)]=\"reconGeneralDetail.isCouponOnMissingRedemption\"\r\n                                        name=\"isCouponOnMissingRedemption\" [checked]=\"missingRedemptionByAll\">\r\n                                    <label for=\"mr3\">Coupon</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"mr4\" [(ngModel)]=\"reconGeneralDetail.isGV\" name=\"isGV\"\r\n                                        [checked]=\"missingRedemptionByAll\">\r\n                                    <label for=\"mr4\">GV</label>\r\n                                </div>\r\n                                <!-- <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"mr5\"\r\n                                        [(ngModel)]=\"reconGeneralDetail.isPaidByCreditNoteAdjusted\"\r\n                                        name=\"isPaidByCreditNoteAdjusted\">\r\n                                    <label for=\"mr5\">Paid By Credit Note</label>\r\n                                </div> -->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form_wrap\">\r\n                        <div class=\"group_2\">\r\n                            <div class=\"checkbox_wrap\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"uploadSKUToLpass1\"\r\n                                        [(ngModel)]=\"reconGeneralDetail.uploadSkuToLpass\" name=\"uploadSkuToLpass\">\r\n                                    <label for=\"uploadSKUToLpass1\">Upload SKU data to LPaaS</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"uploadSKUToRP1\"\r\n                                        [(ngModel)]=\"reconGeneralDetail.uploadSkuToRP\" name=\"uploadSkuToRP\">\r\n                                    <label for=\"uploadSKUToRP1\">Upload SKU data to Reporting Panel</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form_wrap\">\r\n                        <p>API will be invoked for Bill Reconciliation</p>\r\n                        <div class=\"group\">\r\n                            <div class=\"radio_wrap\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"radio\" id=\"accrualEossApi1\"\r\n                                        [checked]=\"reconGeneralDetail.fileType == 'sale'\" disabled>\r\n                                    <label for=\"accrualEossApi1\" class=\"disable\">Accrual EOSS API</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"radio\" id=\"saveSkuBillApi2\"\r\n                                        [checked]=\"reconGeneralDetail.fileType == 'item' || reconGeneralDetail.fileType == 'SaleItem'\"\r\n                                        disabled>\r\n                                    <label for=\"saveSkuBillApi2\" class=\"disable\">Save SKU Bill API</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form_wrap\">\r\n                        <p>Store based Accrual</p>\r\n                        <div class=\"group\">\r\n                            <div class=\"checkbox_wrap\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"storeBasedAccrual1\"\r\n                                        [(ngModel)]=\"reconGeneralDetail.isAccrual\" name=\"isAccrual\">\r\n                                    <label for=\"storeBasedAccrual1\">Store based Accrual</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"form_wrap\">\r\n                        <div class=\"alert alert-warning\" role=\"alert\">\r\n                            <i class=\"fa fa-info-circle\"></i>\r\n                            <b>Note:</b> Recon will be done without Tender\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"offer_code\">\r\n                        <label>Offer Code</label>\r\n                        <input type=\"text\" placeholder=\"Enter Offer Code\">\r\n                    </div> -->\r\n                </div>\r\n                <div class=\"file_wrap\" *ngIf=\"tabId == '2'\">\r\n                    <input type=\"hidden\" [(ngModel)]=\"reconGeneralDetail.brandId\" name=\"brandId\">\r\n                    <!-- <div class=\"form_wrap\">\r\n                        <p>Recon file settings</p>\r\n                        <div class=\"group\">\r\n                            <div class=\"radio_wrap\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"radio\" id=\"test1\" name=\"radio-group\" checked>\r\n                                    <label for=\"test1\">SKU Bill Item & SKU Bill tender file</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"radio\" id=\"test2\" name=\"radio-group\">\r\n                                    <label for=\"test2\">SKU Bill item file </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"file_format_wrap\">\r\n                        <div class=\"form_wrap\">\r\n                            <p>File Format</p>\r\n                            <div class=\"group\">\r\n                                <div class=\"radio_wrap\">\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"radio\" id=\"fileFormat1\" value=\"csv\"\r\n                                            [(ngModel)]=\"fileConfigDetail.fileExtension\" name=\"fileExtension\" checked>\r\n                                        <label for=\"fileFormat1\">CSV</label>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"radio\" id=\"fileFormat2\" value=\"text\"\r\n                                            [(ngModel)]=\"fileConfigDetail.fileExtension\" name=\"fileExtension\">\r\n                                        <label for=\"fileFormat2\">Text</label>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"input_group\">\r\n                                <label>Time(24 hr format)</label>\r\n                                <input type=\"text\" [(ngModel)]=\"fileConfigDetail.fileTime\" name=\"fileTime\">\r\n                                <img src=\"assets/images/clock.svg\">\r\n                            </div>\r\n                            <div class=\"input_group\">\r\n                                <label>Delimiter</label>\r\n                                <select [(ngModel)]=\"fileConfigDetail.columnSeparator\" name=\"columnSeparator\"\r\n                                    class=\"bg-white\">\r\n                                    <option>~|</option>\r\n                                    <option>|</option>\r\n                                    <option>||</option>\r\n                                    <option>~</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"input_group\">\r\n                                <label>Line Seprator</label>\r\n                                <select [(ngModel)]=\"fileConfigDetail.lineSeparator\" name=\"lineSeparator\"\r\n                                    class=\"bg-white\">\r\n                                    <option>#\\r\\n</option>\r\n                                    <option>\\r\\n</option>\r\n                                    <option>\\n</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"sample_tbl_container\" *ngIf=\"tabId == '2'\">\r\n                        <table>\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>File Type</th>\r\n                                    <th>Sample File</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>SKU bill tender file</td>\r\n                                    <td class=\"text-center\">\r\n                                        <a target=\"_self\" href=\"../../assets/downloads/ER_BrandName_Tender_20200225.csv\"\r\n                                            download=\"ER_BrandName_Tender_20200225.csv\">\r\n                                            <i class=\"fa fa-download\"></i>\r\n                                        </a>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>SKU Bill item file</td>\r\n                                    <td class=\"text-center\">\r\n                                        <a target=\"_self\"\r\n                                            href=\"../../assets/downloads/ER_BrandName_Sale_Item_20200225.csv\"\r\n                                            download=\"ER_BrandName_Sale_Item_20200225.csv\">\r\n                                            <i class=\"fa fa-download\"></i>\r\n                                        </a>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td>Header File</td>\r\n                                    <td class=\"text-center\">\r\n                                        <a target=\"_self\" href=\"../../assets/downloads/ER_BrandName_Sale_25022020.csv\"\r\n                                            download=\"ER_BrandName_Sale_25022020.csv\">\r\n                                            <i class=\"fa fa-download\"></i>\r\n                                        </a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"folder_wrap\" *ngIf=\"tabId == '3'\">\r\n                    <input type=\"hidden\" [(ngModel)]=\"reconGeneralDetail.brandId\" name=\"brandId\">\r\n                    <div class=\"form_wrap\">\r\n                        <div class=\"input_group\">\r\n                            <label>Recon Folder Path*</label>\r\n                            <input type=\"text\" [(ngModel)]=\"folderConfigDetail.reconFileFolder\" name=\"reconFileFolder\"\r\n                                #folder=\"ngModel\" required placeholder=\"/Recon/Folder\">\r\n                            <div *ngIf=\"configObject.submitted && folder.invalid\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"folder.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Folder Path must be required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group\">\r\n                            <label>Success Folder Path</label>\r\n                            <input type=\"text\" [(ngModel)]=\"folderConfigDetail.reconSuccessFileFolder\"\r\n                                name=\"reconSuccessFileFolder\" #success=\"ngModel\" required placeholder=\"/Recon/Success\">\r\n                            <div *ngIf=\"configObject.submitted && success.invalid\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"success.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Success Folder Path must be required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group\">\r\n                            <label>Failure Folder Path</label>\r\n                            <input type=\"text\" [(ngModel)]=\"folderConfigDetail.reconFailureFileFolder\"\r\n                                name=\"reconFailureFileFolder\" #failure=\"ngModel\" required placeholder=\"/Recon/Failure\">\r\n                            <div *ngIf=\"configObject.submitted && failure.invalid\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"failure.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Failure Folder Path must be required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group\">\r\n                            <label>Archive Folder Path</label>\r\n                            <input type=\"text\" [(ngModel)]=\"folderConfigDetail.reconArchieveFileFolder\"\r\n                                name=\"reconArchieveFileFolder\" #archive=\"ngModel\" required placeholder=\"/Recon/Archive\">\r\n                            <div *ngIf=\"configObject.submitted && archive.invalid\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"archive.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Archive Folder Path must be required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group\">\r\n                            <label>Reposting Folder Path</label>\r\n                            <input type=\"text\" [(ngModel)]=\"folderConfigDetail.reconRepostingFileFolder\"\r\n                                name=\"reconRepostingFileFolder\" #reposting=\"ngModel\" required\r\n                                placeholder=\"/Recon/Repost\">\r\n                            <div *ngIf=\"configObject.submitted && reposting.invalid\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"reposting.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Reposting Folder Path must be required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group\">\r\n                            <label>Reporting Folder Path</label>\r\n                            <input type=\"text\" [(ngModel)]=\"folderConfigDetail.reconReportFileFolder\"\r\n                                name=\"reconReportFileFolder\" #reporting=\"ngModel\" required placeholder=\"/Recon/Report\">\r\n                            <div *ngIf=\"configObject.submitted && reporting.invalid\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"reporting.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Reporting Folder Path must be required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group\">\r\n                            <label>Invalid Folder Path</label>\r\n                            <input type=\"text\" [(ngModel)]=\"folderConfigDetail.reconFileErrorsFolder\"\r\n                                name=\"reconFileErrorsFolder\" #invalid=\"ngModel\" required placeholder=\"/Recon/Invalid\">\r\n                            <div *ngIf=\"configObject.submitted && invalid.invalid\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"invalid.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Invalid Folder Path must be required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"dqr_wrap\" *ngIf=\"tabId == '4'\">\r\n                    <input type=\"hidden\" [(ngModel)]=\"reconGeneralDetail.brandId\" name=\"brandId\">\r\n                    <div class=\"form_wrap\">\r\n                        <p>Consider For Settlement</p>\r\n                        <div class=\"group\">\r\n                            <div class=\"radio_wrap\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"radio\" id=\"considerForSett1\" name=\"is_DQR_Required\" [value]=\"true\"\r\n                                        [(ngModel)]=\"dqrConfigModel.is_DQR_Required\"\r\n                                        (change)=\"is_DQR_Required = 'true'\">\r\n                                    <label for=\"considerForSett1\">Yes</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"radio\" id=\"considerForSett2\" name=\"is_DQR_Required\" [value]=\"false\"\r\n                                        [(ngModel)]=\"dqrConfigModel.is_DQR_Required\"\r\n                                        (change)=\"is_DQR_Required = 'false'\">\r\n                                    <label for=\"considerForSett2\">No</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form_wrap\" *ngIf=\"dqrConfigModel.is_DQR_Required\">\r\n                        <p>Settlement Configration</p>\r\n                        <div class=\"group\">\r\n                            <div class=\"radio_wrap\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"radio\" id=\"settConfig1\" [(ngModel)]=\"dqrConfigModel.settlement_Mode\"\r\n                                        name=\"settlement_Mode\" value=\"0\">\r\n                                    <label for=\"settConfig1\">Auto</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"radio\" id=\"settConfig2\" value=\"1\"\r\n                                        [(ngModel)]=\"dqrConfigModel.settlement_Mode\" name=\"settlement_Mode\">\r\n                                    <label for=\"settConfig2\">Manual</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form_wrap\"\r\n                        *ngIf=\"dqrConfigModel.settlement_Mode == '0' && dqrConfigModel.is_DQR_Required\">\r\n                        <div class=\"input_group\">\r\n                            <label>Date</label>\r\n                            <select [(ngModel)]=\"dqrConfigModel.execution_Day\" name=\"execution_Day\" #dqrDate=\"ngModel\">\r\n                                <option *ngFor=\"let dqrDate of dqrDateRange\" [value]=\"dqrDate\">{{dqrDate}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form_wrap\" *ngIf=\"dqrConfigModel.is_DQR_Required\">\r\n                        <p>DQR distribution List</p>\r\n                        <div class=\"row\">\r\n                            <div class=\"input_group col multidrop_container\">\r\n                                <label>Users(TO)</label>\r\n                                <!-- <select [(ngModel)]=\"dqrEmailTo\" name=\"dqrEmailTo\">\r\n                                    <option *ngFor=\"let dqrUser of arrDqrUserListTo\" [value]=\"dqrUser.value\">\r\n                                        {{dqrUser.name}}<{{dqrUser.value}}>\r\n                                    </option>\r\n                                </select> -->\r\n                                <div class=\"selected_text\" (click)=\"isDqrEmailTo=!isDqrEmailTo\">\r\n                                    {{selectedDqrEmailTo}}\r\n                                </div>\r\n                                <div class=\"dropdown_multiselect\" *ngIf=\"isDqrEmailTo\">\r\n                                    <ul>\r\n                                        <li *ngFor=\"let dqrUser of arrDqrUserListTo\">\r\n                                            <div class=\"checkbox_wrap\">\r\n                                                <div class=\"form-group\">\r\n                                                    <input type=\"checkbox\" id=\"{{dqrUser.value}}\"\r\n                                                        (change)=\"getDqrEmailTo(dqrUser)\"\r\n                                                        [checked]=\"dqrUser.isSelected\">\r\n                                                    <label for=\"{{dqrUser.value}}\">{{dqrUser.name}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <i class=\"fa fa-plus-circle\" (click)=\"openDqrUserModalTo()\">Add</i>\r\n                            </div>\r\n                            <div class=\"input_group col multidrop_container\">\r\n                                <label>Users(CC)</label>\r\n                                <!-- <select [(ngModel)]=\"dqrEmailCc\" name=\"dqrEmailCc\">\r\n                                    <option *ngFor=\"let dqrUser of arrDqrUserListCc\" [value]=\"dqrUser.value\">\r\n                                        {{dqrUser.name}}<{{dqrUser.value}}>\r\n                                    </option>\r\n                                </select> -->\r\n                                <div class=\"selected_text\" (click)=\"isDqrEmailCc=!isDqrEmailCc\">\r\n                                    {{selectedDqrEmailCc}}\r\n                                </div>\r\n                                <div class=\"dropdown_multiselect\" *ngIf=\"isDqrEmailCc\">\r\n                                    <ul>\r\n                                        <li *ngFor=\"let dqrUser of arrDqrUserListCc\">\r\n                                            <div class=\"checkbox_wrap\">\r\n                                                <div class=\"form-group\">\r\n                                                    <input type=\"checkbox\" id=\"{{dqrUser.value}}\"\r\n                                                        (change)=\"getDqrEmailCc(dqrUser)\"\r\n                                                        [checked]=\"dqrUser.isSelected\">\r\n                                                    <label for=\"{{dqrUser.value}}\">{{dqrUser.name}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <i class=\"fa fa-plus-circle\" (click)=\"openDqrUserModalCc()\">Add</i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group mt-2\">\r\n                            <label>Email Body</label>\r\n                            <!-- <div class=\"mt-1\" id=\"html_editor\" [froalaEditor]=\"options\" [(froalaModel)]=\"content\"></div> -->\r\n                            <textarea [froalaEditor] name=\"body\"\r\n                                [(ngModel)]=\"dqrConfigModel.body\">{{dqrConfigModel.body}}</textarea>\r\n                            <!-- <div [froalaView]=\"dqrConfigModel.froalaEditor\"></div> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"alert_wrap\" *ngIf=\"tabId == '5'\">\r\n                    <input type=\"hidden\" [(ngModel)]=\"reconGeneralDetail.brandId\" name=\"brandId\">\r\n                    <div class=\"form_wrap\">\r\n                        <p>Recon Alert</p>\r\n                        <div class=\"group\">\r\n                            <div class=\"checkbox_wrap\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"reconAlert1\" [(ngModel)]=\"successAlert\" name=\"isSuccess\"\r\n                                        (ngModelChange)=\"isSuccessAlert(successAlert)\">\r\n                                    <label for=\"reconAlert1\">Success</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"reconAlert2\" [(ngModel)]=\"missingAlert\" name=\"isMissing\"\r\n                                        (ngModelChange)=\"isMissingAlert(missingAlert)\">\r\n                                    <label for=\"reconAlert2\">Missing</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"reconAlert3\" [(ngModel)]=\"invalidAlert\" name=\"isInvalid\"\r\n                                        (ngModelChange)=\"isInvalidAlert(invalidAlert)\">\r\n                                    <label for=\"reconAlert3\">Invalid</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form_wrap\" *ngIf=\"successAlert\">\r\n                        <p>Success Alert distribution List</p>\r\n                        <div class=\"row\">\r\n                            <div class=\"input_group success col multidrop_container\">\r\n                                <label>Users(TO)</label>\r\n                                <div class=\"selected_text\" (click)=\"isDistSuccessUserTo=!isDistSuccessUserTo\">\r\n                                    {{selectedDistSuccessUserTo}}\r\n                                </div>\r\n                                <div class=\"dropdown_multiselect\" *ngIf=\"isDistSuccessUserTo\">\r\n                                    <ul>\r\n                                        <li *ngFor=\"let distUser of arrDqrSuccessUserListTo\">\r\n                                            <div class=\"checkbox_wrap\">\r\n                                                <div class=\"form-group\">\r\n                                                    <input type=\"checkbox\" id=\"{{distUser.value}}\"\r\n                                                        (change)=\"getDistSuccessUserTo(distUser)\"\r\n                                                        [checked]=\"distUser.isSelected\">\r\n                                                    <label for=\"{{distUser.value}}\">{{distUser.name}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <i class=\"fa fa-plus-circle\" (click)=\"openDqrUserSuccessModalTo()\">Add</i>\r\n                            </div>\r\n                            <div class=\"input_group success col multidrop_container\">\r\n                                <label>Users(CC)</label>\r\n                                <div class=\"selected_text\" (click)=\"isDistSuccessUserCc=!isDistSuccessUserCc\">\r\n                                    {{selectedDistSuccessUserCc}}\r\n                                </div>\r\n                                <div class=\"dropdown_multiselect\" *ngIf=\"isDistSuccessUserCc\">\r\n                                    <ul>\r\n                                        <li *ngFor=\"let distUser of arrDqrSuccessUserListCc\">\r\n                                            <div class=\"checkbox_wrap\">\r\n                                                <div class=\"form-group\">\r\n                                                    <input type=\"checkbox\" id=\"{{distUser.value}}\"\r\n                                                        (change)=\"getDistSuccessUserCc(distUser)\"\r\n                                                        [checked]=\"distUser.isSelected\">\r\n                                                    <label for=\"{{distUser.value}}\">{{distUser.name}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <i class=\"fa fa-plus-circle\" (click)=\"openDqrUserSuccessModalCc()\">Add</i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group mt-2\">\r\n                            <label>Email Body</label>\r\n                            <!-- <div class=\"mt-1\" id=\"html_editor\" [froalaEditor]=\"options\" [(froalaModel)]=\"content\"></div> -->\r\n                            <textarea [froalaEditor] name=\"successDistributionBody\"\r\n                                [(ngModel)]=\"reconAlertDetails.successDistributionBody\">\r\n                            {{reconAlertDetails.successDistributionBody}}</textarea>\r\n                            <!-- <div [froalaView]=\"dqrConfigModel.froalaEditor\"></div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form_wrap\" *ngIf=\"missingAlert\">\r\n                        <p>Missing Alert distribution List</p>\r\n                        <div class=\"row\">\r\n                            <div class=\"input_group missing col multidrop_container\">\r\n                                <label>Users(TO)</label>\r\n                                <div class=\"selected_text\" (click)=\"isDistMissingUserTo=!isDistMissingUserTo\">\r\n                                    {{selectedDistMissingUserTo}}\r\n                                </div>\r\n                                <div class=\"dropdown_multiselect\" *ngIf=\"isDistMissingUserTo\">\r\n                                    <ul>\r\n                                        <li *ngFor=\"let distUser of arrDqrMissingUserListTo\">\r\n                                            <div class=\"checkbox_wrap\">\r\n                                                <div class=\"form-group\">\r\n                                                    <input type=\"checkbox\" id=\"{{distUser.value}}\"\r\n                                                        (change)=\"getDistMissingUserTo(distUser)\"\r\n                                                        [checked]=\"distUser.isSelected\">\r\n                                                    <label for=\"{{distUser.value}}\">{{distUser.name}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <i class=\"fa fa-plus-circle\" (click)=\"openDqrUserMissingModalTo()\">Add</i>\r\n                            </div>\r\n                            <div class=\"input_group missing col multidrop_container\">\r\n                                <label>Users(CC)</label>\r\n                                <div class=\"selected_text\" (click)=\"isDistMissingUserCc=!isDistMissingUserCc\">\r\n                                    {{selectedDistMissingUserCc}}\r\n                                </div>\r\n                                <div class=\"dropdown_multiselect\" *ngIf=\"isDistMissingUserCc\">\r\n                                    <ul>\r\n                                        <li *ngFor=\"let distUser of arrDqrMissingUserListCc\">\r\n                                            <div class=\"checkbox_wrap\">\r\n                                                <div class=\"form-group\">\r\n                                                    <input type=\"checkbox\" id=\"{{distUser.value}}\"\r\n                                                        (change)=\"getDistMissingUserCc(distUser)\"\r\n                                                        [checked]=\"distUser.isSelected\">\r\n                                                    <label for=\"{{distUser.value}}\">{{distUser.name}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <i class=\"fa fa-plus-circle\" (click)=\"openDqrUserMissingModalCc()\">Add</i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group mt-2\">\r\n                            <label>Email Body</label>\r\n                            <!-- <div class=\"mt-1\" id=\"html_editor\" [froalaEditor]=\"options\" [(froalaModel)]=\"content\"></div> -->\r\n                            <textarea [froalaEditor] name=\"missingDistributionBody\"\r\n                                [(ngModel)]=\"reconAlertDetails.missingDistributionBody\">\r\n                            {{reconAlertDetails.missingDistributionBody}}</textarea>\r\n                            <!-- <div [froalaView]=\"dqrConfigModel.froalaEditor\"></div> -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form_wrap\" *ngIf=\"invalidAlert\">\r\n                        <p>Invalid Alert distribution List</p>\r\n                        <div class=\"row\">\r\n                            <div class=\"input_group invalid col multidrop_container\">\r\n                                <label>Users(TO)</label>\r\n                                <div class=\"selected_text\" (click)=\"isDistInvalidUserTo=!isDistInvalidUserTo\">\r\n                                    {{selectedDistInvalidUserTo}}\r\n                                </div>\r\n                                <div class=\"dropdown_multiselect\" *ngIf=\"isDistInvalidUserTo\">\r\n                                    <ul>\r\n                                        <li *ngFor=\"let distUser of arrDqrInvalidUserListTo\">\r\n                                            <div class=\"checkbox_wrap\">\r\n                                                <div class=\"form-group\">\r\n                                                    <input type=\"checkbox\" id=\"{{distUser.value}}\"\r\n                                                        (change)=\"getDistInvalidUserTo(distUser)\"\r\n                                                        [checked]=\"distUser.isSelected\">\r\n                                                    <label for=\"{{distUser.value}}\">{{distUser.name}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <i class=\"fa fa-plus-circle\" (click)=\"openDqrUserInvalidModalTo()\">Add</i>\r\n                            </div>\r\n                            <div class=\"input_group invalid col multidrop_container\">\r\n                                <label>Users(CC)</label>\r\n                                <div class=\"selected_text\" (click)=\"isDistInvalidUserCc=!isDistInvalidUserCc\">\r\n                                    {{selectedDistInvalidUserCc}}\r\n                                </div>\r\n                                <div class=\"dropdown_multiselect\" *ngIf=\"isDistInvalidUserCc\">\r\n                                    <ul>\r\n                                        <li *ngFor=\"let distUser of arrDqrInvalidUserListCc\">\r\n                                            <div class=\"checkbox_wrap\">\r\n                                                <div class=\"form-group\">\r\n                                                    <input type=\"checkbox\" id=\"{{distUser.value}}\"\r\n                                                        (change)=\"getDistInvalidUserCc(distUser)\"\r\n                                                        [checked]=\"distUser.isSelected\">\r\n                                                    <label for=\"{{distUser.value}}\">{{distUser.name}}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                                <i class=\"fa fa-plus-circle\" (click)=\"openDqrUserInvalidModalCc()\">Add</i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group mt-2\">\r\n                            <label>Email Body</label>\r\n                            <!-- <div class=\"mt-1\" id=\"html_editor\" [froalaEditor]=\"options\" [(froalaModel)]=\"content\"></div> -->\r\n                            <textarea [froalaEditor] name=\"invalidDistributionBody\"\r\n                                [(ngModel)]=\"reconAlertDetails.invalidDistributionBody\">\r\n                            {{reconAlertDetails.invalidDistributionBody}}</textarea>\r\n                            <!-- <div [froalaView]=\"dqrConfigModel.froalaEditor\"></div> -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"report_wrap\" *ngIf=\"tabId == '6'\">\r\n                    <input type=\"hidden\" [(ngModel)]=\"reconGeneralDetail.brandId\" name=\"brandId\">\r\n                    <div class=\"form_wrap\">\r\n                        <p>Daily Mail Logs</p>\r\n                        <div class=\"group\">\r\n                            <div class=\"checkbox_wrap\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"dailyErrorLog1\" name=\"logByErrorTypeDaily\"\r\n                                        [(ngModel)]=\"reconReportDetails.logByErrorTypeDaily\">\r\n                                    <label for=\"dailyErrorLog1\">Logs by error types</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"dailyErrorLog2\" name=\"errorSuccessDetailsDaily\"\r\n                                        [(ngModel)]=\"reconReportDetails.errorSuccessDetailsDaily\">\r\n                                    <label for=\"dailyErrorLog2\">Error Success Details</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form_wrap\">\r\n                        <p>Monthly Mail Log</p>\r\n                        <div class=\"group\">\r\n                            <div class=\"checkbox_wrap\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"monthlyErrorLog1\" name=\"logByErrorTypeMonthly\"\r\n                                        [(ngModel)]=\"reconReportDetails.logByErrorTypeMonthly\">\r\n                                    <label for=\"monthlyErrorLog1\">Logs by error types</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"checkbox\" id=\"monthlyLog1\" name=\"logByDayMonthly\"\r\n                                        [(ngModel)]=\"reconReportDetails.logByDayMonthly\">\r\n                                    <label for=\"monthlyLog1\">Logs by Days</label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"setting_wrap\" *ngIf=\"tabId == '7'\">\r\n                    <input type=\"hidden\" [(ngModel)]=\"reconGeneralDetail.brandId\" name=\"brandId\">\r\n                    <mat-accordion>\r\n                        <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                            <mat-expansion-panel-header>\r\n                                <mat-panel-title>\r\n                                    Program Config\r\n                                </mat-panel-title>\r\n                            </mat-expansion-panel-header>\r\n                            <div class=\"form_wrap row\">\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>Point Name</label>\r\n                                    <input type=\"text\" name=\"pointName\" [(ngModel)]=\"configSetting.pointName\"\r\n                                        [disabled]=\"reconGeneralDetail.fileType == 'sale'\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>Point Rate</label>\r\n                                    <input type=\"text\" name=\"pointRate\" [(ngModel)]=\"configSetting.pointRate\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>Recon Type</label>\r\n                                    <select [(ngModel)]=\"configSetting.reconTypeID\" name=\"reconTypeID\"\r\n                                        (change)=\"getReconType()\" id=\"reconTypeSelect\">\r\n                                        <option [ngValue]=\"1\">Mobile</option>\r\n                                        <option [ngValue]=\"3\">Client Id</option>\r\n                                        <option [ngValue]=\"5\">Member Id</option>\r\n                                    </select>\r\n                                    <input type=\"hidden\" name=\"reconType\" [(ngModel)]=\"configSetting.reconType\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form_wrap row\">\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>Recon User</label>\r\n                                    <input type=\"text\" name=\"reconUser\" [(ngModel)]=\"configSetting.reconUser\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>Based on MRP/RSP</label>\r\n                                    <input type=\"text\" name=\"basedOnMRPRSP\" [(ngModel)]=\"configSetting.basedOnMRPRSP\"\r\n                                        [disabled]=\"reconGeneralDetail.fileType == 'sale'\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>Country Code</label>\r\n                                    <input type=\"text\" name=\"countryCode\" [(ngModel)]=\"configSetting.countryCode\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\"\r\n                                    *ngIf=\"reconGeneralDetail.isGV || missingRedemptionByAll\">\r\n                                    <label>GV Name</label>\r\n                                    <input type=\"text\" name=\"gvName\" [(ngModel)]=\"configSetting.gvName\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>POS Type</label>\r\n                                    <input type=\"text\" name=\"POSType\" [(ngModel)]=\"configSetting.POSType\">\r\n                                </div>\r\n                                <!-- <div class=\"input_group col-6\">\r\n                                    <label>Channel</label>\r\n                                    <input type=\"text\" name=\"channel\" [(ngModel)]=\"configSetting.channel\">\r\n                                </div>\r\n                                <div class=\"input_group col-6\">\r\n                                    <label>Customer Type</label>\r\n                                    <input type=\"text\" name=\"customerType\" [(ngModel)]=\"configSetting.customerType\">\r\n                                </div> -->\r\n                                <div class=\"group col-4\">\r\n                                    <div class=\"checkbox_wrap\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"checkbox\" id=\"ReprocessingFlag\" name=\"ReprocessingFlag\"\r\n                                                [(ngModel)]=\"configSetting.ReprocessingFlag\">\r\n                                            <label for=\"ReprocessingFlag\">Reprocessing Flag</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"input_group col-4\" *ngIf=\"configSetting.ReprocessingFlag\">\r\n                                    <label>LookBack Period</label>\r\n                                    <input type=\"number\" name=\"LookBackPeriod\"\r\n                                        [(ngModel)]=\"configSetting.LookBackPeriod\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\" *ngIf=\"configSetting.ReprocessingFlag\">\r\n                                    <label>Tolerance Period</label>\r\n                                    <input type=\"number\" name=\"TolerancePeriod\"\r\n                                        [(ngModel)]=\"configSetting.TolerancePeriod\">\r\n                                </div>\r\n                                <div class=\"group col-4\">\r\n                                    <div class=\"checkbox_wrap\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"checkbox\" id=\"isSuppoortNegative1\" name=\"isSuppoortNegative\"\r\n                                                [(ngModel)]=\"configSetting.isSuppoortNegative\"\r\n                                                [disabled]=\"reconGeneralDetail.fileType != 'sale'\">\r\n                                            <label for=\"isSuppoortNegative1\">Support Negative</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"group col-4 hide\">\r\n                                    <div class=\"checkbox_wrap\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"checkbox\" id=\"isLoyality1\" name=\"isLoyality\"\r\n                                                [(ngModel)]=\"configSetting.isLoyality\">\r\n                                            <label for=\"isLoyality1\">Loyality</label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </mat-expansion-panel>\r\n                        <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                            <mat-expansion-panel-header>\r\n                                <mat-panel-title>\r\n                                    UAT Settings\r\n                                </mat-panel-title>\r\n                            </mat-expansion-panel-header>\r\n                            <div class=\"form_wrap row\">\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>Web API URL</label>\r\n                                    <input type=\"text\" name=\"pilotWebAPIURL\" [(ngModel)]=\"configSetting.pilotWebAPIURL\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>Dummy Store Code</label>\r\n                                    <input type=\"text\" name=\"dummyStorecode\" [(ngModel)]=\"configSetting.dummyStorecode\">\r\n                                </div>\r\n                            </div>\r\n                        </mat-expansion-panel>\r\n                        <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                            <mat-expansion-panel-header>\r\n                                <mat-panel-title>\r\n                                    API Credential\r\n                                </mat-panel-title>\r\n                            </mat-expansion-panel-header>\r\n                            <div class=\"form_wrap row\">\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>App ID</label>\r\n                                    <input type=\"text\" name=\"appid\" [(ngModel)]=\"configSetting.appid\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>Dev ID</label>\r\n                                    <input type=\"text\" name=\"devID\" [(ngModel)]=\"configSetting.devID\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>API Host</label>\r\n                                    <input type=\"text\" name=\"apiHost\" [(ngModel)]=\"configSetting.apiHost\">\r\n                                </div>\r\n                                <!-- <div class=\"input_group col-4\">\r\n                                    <label>API User Name</label>\r\n                                    <input type=\"text\" name=\"apiUserName\"\r\n                                        [(ngModel)]=\"configSetting.apiUserName\">\r\n                                </div> -->\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>API Password</label>\r\n                                    <input type=\"password\" name=\"apiPassword\" [(ngModel)]=\"configSetting.apiPassword\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>API User</label>\r\n                                    <input type=\"text\" name=\"apiUser\" [(ngModel)]=\"configSetting.apiUserName\">\r\n                                </div>\r\n                            </div>\r\n                        </mat-expansion-panel>\r\n                        <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                            <mat-expansion-panel-header>\r\n                                <mat-panel-title>\r\n                                    FTP credential\r\n                                </mat-panel-title>\r\n                            </mat-expansion-panel-header>\r\n                            <div class=\"form_wrap row\">\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>FTP User Name</label>\r\n                                    <input type=\"text\" name=\"ftpUserName\" [(ngModel)]=\"configSetting.ftpUserName\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>FTP Password</label>\r\n                                    <input type=\"password\" name=\"ftpPassword\" [(ngModel)]=\"configSetting.ftpPassword\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>FTP Host Name</label>\r\n                                    <input type=\"text\" name=\"ftpHost\" [(ngModel)]=\"configSetting.ftpHost\">\r\n                                </div>\r\n                            </div>\r\n                        </mat-expansion-panel>\r\n                        <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\"\r\n                            *ngIf=\"sqlConn == 'yes'\">\r\n                            <mat-expansion-panel-header>\r\n                                <mat-panel-title>\r\n                                    Sql Connections\r\n                                </mat-panel-title>\r\n                            </mat-expansion-panel-header>\r\n                            <div class=\"form_wrap row\">\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>Brand Connection</label>\r\n                                    <input type=\"text\" name=\"connectionString\"\r\n                                        [(ngModel)]=\"configSetting.connectionString\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>Master Connection</label>\r\n                                    <input type=\"text\" name=\"reconConnection\"\r\n                                        [(ngModel)]=\"configSetting.reconConnection\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>External Connection</label>\r\n                                    <input type=\"text\" name=\"externalServerConnection\"\r\n                                        [(ngModel)]=\"configSetting.externalServerConnection\">\r\n                                </div>\r\n                            </div>\r\n                        </mat-expansion-panel>\r\n                        <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\"\r\n                            *ngIf=\"sqlConn == 'yes'\">\r\n                            <mat-expansion-panel-header>\r\n                                <mat-panel-title>\r\n                                    Purge Policy\r\n                                </mat-panel-title>\r\n                            </mat-expansion-panel-header>\r\n                            <div class=\"form_wrap row\">\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>No. Of Days</label>\r\n                                    <input type=\"text\" name=\"noOfDays\" [(ngModel)]=\"configSetting.noOfDays\">\r\n                                </div>\r\n                                <div class=\"input_group col-4\">\r\n                                    <label>Proccessing Time(24 hr Format)</label>\r\n                                    <input type=\"text\" name=\"proccessing_time\"\r\n                                        [(ngModel)]=\"configSetting.proccessing_time\">\r\n                                    <img src=\"assets/images/clock.svg\">\r\n                                </div>\r\n                            </div>\r\n                        </mat-expansion-panel>\r\n                    </mat-accordion>\r\n                </div>\r\n\r\n                <div class=\"all_data_wrap\" *ngIf=\"tabId == '8'\">\r\n\r\n\r\n                    <div class='mt-4 dr-table'>\r\n                        <table>\r\n                            <tbody>\r\n                                <tr class=\"table-header\">\r\n                                    <th>Name</th>\r\n                                    <th>Value</th>\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">App ID\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.appid}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Dev ID\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.devID}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">User Name\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.apiUserName}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Password\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.apiPassword}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Program Code\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconGeneralDetails.programCode}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">API User Name\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span\r\n                                            class=\"totalbill_wrap\">{{this.reconSeatingsDetails.apiUserName}}##{{this.reconSeatingsDetails.apiHost}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">API Password\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.apiPassword}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">API User\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.apiUser}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Point Name\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.pointName}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Point Rate\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.pointRate}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">FTP User Name\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.ftpUserName}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">FTP Password\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.ftpPassword}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">FTP Host Name\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.ftpHost}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">FTP Folder Path\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.ftpFolderPath}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Pilot Web API URL(Base URL)\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.pilotWebAPIURL}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <!-- <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Tender Code\r\n                                        </span>\r\n\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.devID}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr> -->\r\n                                <!-- <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Email ID\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.devID}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr> -->\r\n                                <!-- <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Dummy Store Code\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.dummyStorecode}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr> -->\r\n                                <!-- <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Environment\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.devID}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr> -->\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Recon User\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.reconUser}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Recon Type\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.reconType}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Based on MRP or RSP\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.basedOnMRPRSP}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <!-- <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">File Receving Time in FTP\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.devID}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr> -->\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Country Code\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.countryCode}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Channel\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.Channel}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n                                <tr>\r\n\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">Customer Type\r\n                                        </span>\r\n                                    </th>\r\n                                    <th>\r\n                                        <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.customerType}}\r\n                                        </span>\r\n                                    </th>\r\n\r\n\r\n                                </tr>\r\n\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n                <div class=\"action_btn row \">\r\n\r\n\r\n\r\n                    <div class=\"textarea_wrap row \" *ngIf=\"tabId == '8' && !isActiveProgram\">\r\n\r\n                        <div class=\"btn_wrap_cancel\">\r\n                            <button class=\"action_btn_cancel\" (click)=\"isInactive()\">Cancel</button>\r\n                            <!-- <div  id=\"overlay\" class=\"tooltip_wrap\" (click)=\"off()\"> -->\r\n                            <div *ngIf=\"tooltip\" class=\"bottom_arrow\"></div>\r\n                            <div *ngIf=\"tooltip\" class=\"tool_tip\">\r\n                                <h5 class=\"modal_title\">Remarks</h5>\r\n                                <div class=\"modal_body\">\r\n                                    <textarea class=\"textarea_input\" type=\"text\" name=\"feedback\"\r\n                                        [(ngModel)]=\"feedbacktext\" required id=\"feedback_text\"\r\n                                        (keyup)=\"textareaValidation()\"></textarea>\r\n\r\n                                    <span class=\"errortxt\">{{errortext}}</span>\r\n                                </div>\r\n                                <div class=\"modal_footer\" id=\"footer_model\">\r\n                                    <button type=\"button\" class=\"action_btn_cancel\"\r\n                                        (click)=\"closeTooltip()\">Cancel</button>\r\n                                    <button type=\"button\" class=\"action_btn_save\" data-dismiss=\"modal\"\r\n                                        (click)=\"saveRemark()\">Save</button>\r\n                                </div>\r\n                            </div>\r\n                            <!-- </div> -->\r\n\r\n                        </div>\r\n\r\n\r\n                        <div class=\"btn_wrap \">\r\n                            <button class=\"action_btn_save\" type=\"submit\" id=\"saveavtive\" (click)=\"isActive()\">Save\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n\r\n\r\n                    <button type=\"submit\" *ngIf=\"tabId != '8'\">Save & Next</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- <div class=\"tool_tip\">\r\n                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Remarks</h5>\r\n                    <div class=\"modal_body\">\r\n                        <textarea class=\"textarea_input\" type=\"text\" name=\"feedback\" [(ngModel)]=\"feedbacktext\"></textarea>\r\n                    </div>\r\n                    <div class=\"modal_footer\">\r\n                        <button type=\"button\" class=\"action_btn_cancel\" data-dismiss=\"modal\" >Cancel</button>\r\n                        <button type=\"button\" class=\"action_btn_save\" data-dismiss=\"modal\" (click)=\"saveRemark()\">Save</button>\r\n                    </div>\r\n                </div> -->\r\n<!-- \r\n<div class=\"remark_wrap\">\r\n    <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\"\r\n        aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Remarks</h5>\r\n\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <textarea class=\"textarea_input\" type=\"text\" name=\"feedback\" [(ngModel)]=\"feedbacktext\"></textarea>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"action_btn_cancel\" data-dismiss=\"modal\">Cancel</button>\r\n                    <button type=\"button\" class=\"action_btn_save\" data-dismiss=\"modal\"\r\n                        (click)=\"saveRemark()\">Save</button>\r\n                </div>\r\n               \r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- Modal  -->\r\n<div class=\"modal fade\" role=\"dialog\" id=\"dqrUserModalTo\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">DQR Distribution List</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form #dqrUserObjTo=\"ngForm\" name=\"dqrObjForm\"\r\n                    (ngSubmit)=\"dqrUserObjTo.form.valid && addDqrUserTo(dqrUserObjTo)\" novalidate>\r\n                    <div class=\"user_add_wrap row\">\r\n                        <div class=\"input_group col\">\r\n                            <label>Name</label>\r\n                            <input placeholder=\"Enter Name\" type=\"text\" name=\"name\" ngModel required\r\n                                #dqrUserObjName=\"ngModel\" minlength=\"4\">\r\n                            <div\r\n                                *ngIf=\"dqrUserObjTo.submitted || dqrUserObjName.invalid && (dqrUserObjName.dirty || dqrUserObjName.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserObjName.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserObjName.errors?.minlength\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be at least 4 characters long.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col\">\r\n                            <label>Email</label>\r\n                            <input placeholder=\"Enter Email\" type=\"email\" name=\"value\" ngModel\r\n                                #dqrUserObjEmail=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required>\r\n                            <div\r\n                                *ngIf=\"dqrUserObjTo.submitted || dqrUserObjEmail.invalid && (dqrUserObjEmail.dirty || dqrUserObjEmail.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserObjEmail.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Email must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserObjEmail.errors?.pattern\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    This is not a valid Email.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col-3\">\r\n                            <button class=\"fa fa-plus-circle\" type=\"submit\">Add</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Email</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let dqrUser of arrDqrUserListTo; let i = index\">\r\n                            <td>{{dqrUser.name}}</td>\r\n                            <td>{{dqrUser.value}}</td>\r\n                            <td><i class=\"fa fa-trash\" (click)=\"removeDqrEmailTo(i)\"></i></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" role=\"dialog\" id=\"dqrUserModalCc\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">DQR Distribution List</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form #dqrUserObjCc=\"ngForm\" (ngSubmit)=\"dqrUserObjCc.form.valid && addDqrUserCc(dqrUserObjCc)\"\r\n                    novalidate>\r\n                    <div class=\"user_add_wrap row\">\r\n                        <div class=\"input_group col\">\r\n                            <label>Name</label>\r\n                            <input placeholder=\"Enter Name\" type=\"text\" name=\"name\" ngModel required\r\n                                #dqrUserNameCc=\"ngModel\" minlength=\"4\">\r\n                            <div\r\n                                *ngIf=\"dqrUserObjCc.submitted || dqrUserNameCc.invalid && (dqrUserNameCc.dirty || dqrUserNameCc.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserNameCc.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserNameCc.errors?.minlength\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be at least 4 characters long.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col\">\r\n                            <label>Email</label>\r\n                            <input placeholder=\"Enter Email\" type=\"email\" name=\"value\" ngModel required\r\n                                #dqrUserEmailCc=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n                            <div\r\n                                *ngIf=\"dqrUserObjCc.submitted || dqrUserEmailCc.invalid && (dqrUserEmailCc.dirty || dqrUserEmailCc.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserEmailCc.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Email must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserEmailCc.errors?.pattern\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    This is not a valid Email.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col-3\">\r\n                            <button class=\"fa fa-plus-circle\" type=\"submit\">Add</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Email</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let dqrUser of arrDqrUserListCc; let i = index\">\r\n                            <td>{{dqrUser.name}}</td>\r\n                            <td>{{dqrUser.value}}</td>\r\n                            <td><i class=\"fa fa-trash\" (click)=\"removeDqrEmailCc(i)\"></i></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" role=\"dialog\" id=\"dqrUserSuccessModalTo\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Alert Success Distribution List</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form #dqrUserSuccessObjTo=\"ngForm\" name=\"dqrSuccessObjFormTo\"\r\n                    (ngSubmit)=\"dqrUserSuccessObjTo.form.valid && addDqrSuccessUserTo(dqrUserSuccessObjTo)\" novalidate>\r\n                    <div class=\"user_add_wrap row\">\r\n                        <div class=\"input_group col\">\r\n                            <label>Name</label>\r\n                            <input placeholder=\"Enter Name\" type=\"text\" name=\"name\" ngModel required\r\n                                #dqrUserSuccessObjName=\"ngModel\" minlength=\"4\">\r\n                            <div\r\n                                *ngIf=\"dqrUserSuccessObjTo.submitted || dqrUserSuccessObjName.invalid && (dqrUserSuccessObjName.dirty || dqrUserSuccessObjName.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserSuccessObjName.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserSuccessObjName.errors?.minlength\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be at least 4 characters long.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col\">\r\n                            <label>Email</label>\r\n                            <input placeholder=\"Enter Email\" type=\"email\" name=\"value\" ngModel\r\n                                #dqrUserSuccessObjEmail=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n                                required>\r\n                            <div\r\n                                *ngIf=\"dqrUserSuccessObjTo.submitted || dqrUserSuccessObjEmail.invalid && (dqrUserSuccessObjEmail.dirty || dqrUserSuccessObjEmail.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserSuccessObjEmail.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Email must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserSuccessObjEmail.errors?.pattern\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    This is not a valid Email.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col-3\">\r\n                            <button class=\"fa fa-plus-circle\" type=\"submit\">Add</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Email</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let dqrUser of arrDqrSuccessUserListTo; let i = index\">\r\n                            <td>{{dqrUser.name}}</td>\r\n                            <td>{{dqrUser.value}}</td>\r\n                            <td><i class=\"fa fa-trash\" (click)=\"removeDqrSuccessEmailTo(i)\"></i>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" role=\"dialog\" id=\"dqrUserSuccessModalCc\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">DQR Success Distribution List</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form #dqrUserSuccessObjCc=\"ngForm\" name=\"dqrSuccessObjFormCc\"\r\n                    (ngSubmit)=\"dqrUserSuccessObjCc.form.valid && addDqrSuccessUserCc(dqrUserSuccessObjCc)\" novalidate>\r\n                    <div class=\"user_add_wrap row\">\r\n                        <div class=\"input_group col\">\r\n                            <label>Name</label>\r\n                            <input placeholder=\"Enter Name\" type=\"text\" name=\"name\" ngModel required\r\n                                #dqrUserSuccessNameCc=\"ngModel\" minlength=\"4\">\r\n                            <div\r\n                                *ngIf=\"dqrUserSuccessObjCc.submitted || dqrUserSuccessNameCc.invalid && (dqrUserSuccessNameCc.dirty || dqrUserSuccessNameCc.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserSuccessNameCc.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserSuccessNameCc.errors?.minlength\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be at least 4 characters long.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col\">\r\n                            <label>Email</label>\r\n                            <input placeholder=\"Enter Email\" type=\"email\" name=\"value\" ngModel required\r\n                                #dqrUserSuccessEmailCc=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n                            <div\r\n                                *ngIf=\"dqrUserSuccessObjCc.submitted || dqrUserSuccessEmailCc.invalid && (dqrUserSuccessEmailCc.dirty || dqrUserSuccessEmailCc.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserSuccessEmailCc.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Email must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserSuccessEmailCc.errors?.pattern\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    This is not a valid Email.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col-3\">\r\n                            <button class=\"fa fa-plus-circle\" type=\"submit\">Add</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Email</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let dqrUser of arrDqrSuccessUserListCc; let i = index\">\r\n                            <td>{{dqrUser.name}}</td>\r\n                            <td>{{dqrUser.value}}</td>\r\n                            <td><i class=\"fa fa-trash\" (click)=\"removeDqrSuccessEmailCc(i)\"></i>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" role=\"dialog\" id=\"dqrUserMissingModalTo\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Alert Missing Distribution List</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form #dqrUserMissingObjTo=\"ngForm\" name=\"dqrMissingObjFormTo\"\r\n                    (ngSubmit)=\"dqrUserMissingObjTo.form.valid && addDqrMissingUserTo(dqrUserMissingObjTo)\" novalidate>\r\n                    <div class=\"user_add_wrap row\">\r\n                        <div class=\"input_group col\">\r\n                            <label>Name</label>\r\n                            <input placeholder=\"Enter Name\" type=\"text\" name=\"name\" ngModel required\r\n                                #dqrUserMissingObjName=\"ngModel\" minlength=\"4\">\r\n                            <div\r\n                                *ngIf=\"dqrUserMissingObjTo.submitted || dqrUserMissingObjName.invalid && (dqrUserMissingObjName.dirty || dqrUserMissingObjName.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserMissingObjName.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserMissingObjName.errors?.minlength\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be at least 4 characters long.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col\">\r\n                            <label>Email</label>\r\n                            <input placeholder=\"Enter Email\" type=\"email\" name=\"value\" ngModel\r\n                                #dqrUserMissingObjEmail=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n                                required>\r\n                            <div\r\n                                *ngIf=\"dqrUserMissingObjTo.submitted || dqrUserMissingObjEmail.invalid && (dqrUserMissingObjEmail.dirty || dqrUserMissingObjEmail.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserMissingObjEmail.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Email must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserMissingObjEmail.errors?.pattern\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    This is not a valid Email.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col-3\">\r\n                            <button class=\"fa fa-plus-circle\" type=\"submit\">Add</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Email</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let dqrUser of arrDqrMissingUserListTo; let i = index\">\r\n                            <td>{{dqrUser.name}}</td>\r\n                            <td>{{dqrUser.value}}</td>\r\n                            <td><i class=\"fa fa-trash\" (click)=\"removeDqrMissingEmailTo(i)\"></i>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" role=\"dialog\" id=\"dqrUserMissingModalCc\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">DQR Missing Distribution List</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form #dqrUserMissingObjCc=\"ngForm\" name=\"dqrMissingObjFormCc\"\r\n                    (ngSubmit)=\"dqrUserMissingObjCc.form.valid && addDqrMissingUserCc(dqrUserMissingObjCc)\" novalidate>\r\n                    <div class=\"user_add_wrap row\">\r\n                        <div class=\"input_group col\">\r\n                            <label>Name</label>\r\n                            <input placeholder=\"Enter Name\" type=\"text\" name=\"name\" ngModel required\r\n                                #dqrUserMissingNameCc=\"ngModel\" minlength=\"4\">\r\n                            <div\r\n                                *ngIf=\"dqrUserMissingObjCc.submitted || dqrUserMissingNameCc.invalid && (dqrUserMissingNameCc.dirty || dqrUserMissingNameCc.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserMissingNameCc.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserMissingNameCc.errors?.minlength\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be at least 4 characters long.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col\">\r\n                            <label>Email</label>\r\n                            <input placeholder=\"Enter Email\" type=\"email\" name=\"value\" ngModel required\r\n                                #dqrUserMissingEmailCc=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n                            <div\r\n                                *ngIf=\"dqrUserMissingObjCc.submitted || dqrUserMissingEmailCc.invalid && (dqrUserMissingEmailCc.dirty || dqrUserMissingEmailCc.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserMissingEmailCc.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Email must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserMissingEmailCc.errors?.pattern\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    This is not a valid Email.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col-3\">\r\n                            <button class=\"fa fa-plus-circle\" type=\"submit\">Add</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Email</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let dqrUser of arrDqrMissingUserListCc; let i = index\">\r\n                            <td>{{dqrUser.name}}</td>\r\n                            <td>{{dqrUser.value}}</td>\r\n                            <td><i class=\"fa fa-trash\" (click)=\"removeDqrMissingEmailCc(i)\"></i>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"modal fade\" role=\"dialog\" id=\"dqrUserInvalidModalTo\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Alert Invalid Distribution List</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form #dqrUserInvalidObjTo=\"ngForm\" name=\"dqrInvalidObjFormTo\"\r\n                    (ngSubmit)=\"dqrUserInvalidObjTo.form.valid && addDqrInvalidUserTo(dqrUserInvalidObjTo)\" novalidate>\r\n                    <div class=\"user_add_wrap row\">\r\n                        <div class=\"input_group col\">\r\n                            <label>Name</label>\r\n                            <input placeholder=\"Enter Name\" type=\"text\" name=\"name\" ngModel required\r\n                                #dqrUserInvalidObjName=\"ngModel\" minlength=\"4\">\r\n                            <div\r\n                                *ngIf=\"dqrUserInvalidObjTo.submitted || dqrUserInvalidObjName.invalid && (dqrUserInvalidObjName.dirty || dqrUserInvalidObjName.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserInvalidObjName.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserInvalidObjName.errors?.minlength\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be at least 4 characters long.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col\">\r\n                            <label>Email</label>\r\n                            <input placeholder=\"Enter Email\" type=\"email\" name=\"value\" ngModel\r\n                                #dqrUserInvalidObjEmail=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n                                required>\r\n                            <div\r\n                                *ngIf=\"dqrUserInvalidObjTo.submitted || dqrUserInvalidObjEmail.invalid && (dqrUserInvalidObjEmail.dirty || dqrUserInvalidObjEmail.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserInvalidObjEmail.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Email must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserInvalidObjEmail.errors?.pattern\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    This is not a valid Email.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col-3\">\r\n                            <button class=\"fa fa-plus-circle\" type=\"submit\">Add</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Email</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let dqrUser of arrDqrInvalidUserListTo; let i = index\">\r\n                            <td>{{dqrUser.name}}</td>\r\n                            <td>{{dqrUser.value}}</td>\r\n                            <td><i class=\"fa fa-trash\" (click)=\"removeDqrInvalidEmailTo(i)\"></i>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" role=\"dialog\" id=\"dqrUserInvalidModalCc\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">DQR Invalid Distribution List</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form #dqrUserInvalidObjCc=\"ngForm\" name=\"dqrInvalidObjFormCc\"\r\n                    (ngSubmit)=\"dqrUserInvalidObjCc.form.valid && addDqrInvalidUserCc(dqrUserInvalidObjCc)\" novalidate>\r\n                    <div class=\"user_add_wrap row\">\r\n                        <div class=\"input_group col\">\r\n                            <label>Name</label>\r\n                            <input placeholder=\"Enter Name\" type=\"text\" name=\"name\" ngModel required\r\n                                #dqrUserInvalidNameCc=\"ngModel\" minlength=\"4\">\r\n                            <div\r\n                                *ngIf=\"dqrUserInvalidObjCc.submitted || dqrUserInvalidNameCc.invalid && (dqrUserInvalidNameCc.dirty || dqrUserInvalidNameCc.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserInvalidNameCc.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserInvalidNameCc.errors?.minlength\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Name must be at least 4 characters long.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col\">\r\n                            <label>Email</label>\r\n                            <input placeholder=\"Enter Email\" type=\"email\" name=\"value\" ngModel required\r\n                                #dqrUserInvalidEmailCc=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n                            <div\r\n                                *ngIf=\"dqrUserInvalidObjCc.submitted || dqrUserInvalidEmailCc.invalid && (dqrUserInvalidEmailCc.dirty || dqrUserInvalidEmailCc.touched)\">\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserInvalidEmailCc.errors?.required\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    Email must be required.\r\n                                </div>\r\n                                <div class=\"alert alert-danger\" *ngIf=\"dqrUserInvalidEmailCc.errors?.pattern\">\r\n                                    <i class=\"fa fa-info-circle\"></i>\r\n                                    This is not a valid Email.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input_group col-3\">\r\n                            <button class=\"fa fa-plus-circle\" type=\"submit\">Add</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Name</th>\r\n                            <th>Email</th>\r\n                            <th>Action</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let dqrUser of arrDqrInvalidUserListCc; let i = index\">\r\n                            <td>{{dqrUser.name}}</td>\r\n                            <td>{{dqrUser.value}}</td>\r\n                            <td><i class=\"fa fa-trash\" (click)=\"removeDqrInvalidEmailCc(i)\"></i>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"card\">\r\n                    <div class='card-body'>\r\n                        <div class=\"backbuttonSetting d-flex justify-content-end\">\r\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                        </div>\r\n                        <div class=\"all_data_wrap\">\r\n\r\n\r\n                            <div class='mt-4 dr-table'>\r\n                                <table>\r\n                                    <tbody>\r\n                                        <tr class=\"table-header\">\r\n                                            <th>Name</th>\r\n                                            <th>Value</th>\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">App ID\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.appid}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">Dev ID\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.devID}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">User Name\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.apiUserName}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">Password\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.apiPassword}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">Program Code\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconGeneralDetails?.programCode}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">API User Name\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span\r\n                                                    class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.apiUserName}}##{{this.reconSeatingsDetails?.apiHost}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">API Password\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.apiPassword}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">API User\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.apiUser}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">Point Name\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.pointName}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">Point Rate\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.pointRate}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">FTP User Name\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.ftpUserName}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">FTP Password\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.ftpPassword}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">FTP Host Name\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.ftpHost}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">FTP Folder Path\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span\r\n                                                    class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.ftpFolderPath}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">Pilot Web API URL(Base URL)\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span\r\n                                                    class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.pilotWebAPIURL}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <!-- <tr>\r\n    \r\n                                        <th>\r\n                                            <span class=\"totalbill_wrap\">Tender Code\r\n                                            </span>\r\n    \r\n                                        </th>\r\n                                        <th>\r\n                                            <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.devID}}\r\n                                            </span>\r\n                                        </th>\r\n    \r\n    \r\n                                    </tr> -->\r\n                                        <!-- <tr>\r\n    \r\n                                        <th>\r\n                                            <span class=\"totalbill_wrap\">Email ID\r\n                                            </span>\r\n                                        </th>\r\n                                        <th>\r\n                                            <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.devID}}\r\n                                            </span>\r\n                                        </th>\r\n    \r\n    \r\n                                    </tr> -->\r\n                                        <!-- <tr>\r\n    \r\n                                        <th>\r\n                                            <span class=\"totalbill_wrap\">Dummy Store Code\r\n                                            </span>\r\n                                        </th>\r\n                                        <th>\r\n                                            <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.dummyStorecode}}\r\n                                            </span>\r\n                                        </th>\r\n    \r\n    \r\n                                    </tr> -->\r\n                                        <!-- <tr>\r\n    \r\n                                        <th>\r\n                                            <span class=\"totalbill_wrap\">Environment\r\n                                            </span>\r\n                                        </th>\r\n                                        <th>\r\n                                            <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.devID}}\r\n                                            </span>\r\n                                        </th>\r\n    \r\n    \r\n                                    </tr> -->\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">Recon User\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.reconUser}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">Recon Type\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.reconType}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">Based on MRP or RSP\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span\r\n                                                    class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.basedOnMRPRSP}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <!-- <tr>\r\n    \r\n                                        <th>\r\n                                            <span class=\"totalbill_wrap\">File Receving Time in FTP\r\n                                            </span>\r\n                                        </th>\r\n                                        <th>\r\n                                            <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails.devID}}\r\n                                            </span>\r\n                                        </th>\r\n    \r\n    \r\n                                    </tr> -->\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">Country Code\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.countryCode}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">Channel\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.Channel}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n                                        <tr>\r\n\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">Customer Type\r\n                                                </span>\r\n                                            </th>\r\n                                            <th>\r\n                                                <span class=\"totalbill_wrap\">{{this.reconSeatingsDetails?.customerType}}\r\n                                                </span>\r\n                                            </th>\r\n\r\n\r\n                                        </tr>\r\n\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/config/config-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/config/config-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: ConfigRoutingModule */

  /***/
  function srcAppConfigConfigRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigRoutingModule", function () {
      return ConfigRoutingModule;
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


    var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./configuration/configuration.component */
    "./src/app/config/configuration/configuration.component.ts");

    var routes = [{
      path: 'configuration',
      component: _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_3__["ConfigurationComponent"]
    }];

    var ConfigRoutingModule = function ConfigRoutingModule() {
      _classCallCheck(this, ConfigRoutingModule);
    };

    ConfigRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConfigRoutingModule);
    /***/
  },

  /***/
  "./src/app/config/config.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/config/config.module.ts ***!
    \*****************************************/

  /*! exports provided: ConfigModule */

  /***/
  function srcAppConfigConfigModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigModule", function () {
      return ConfigModule;
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


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */


    var _src_app_config_config_routing_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @src/app/config/config-routing.module */
    "./src/app/config/config-routing.module.ts");
    /* harmony import */


    var _src_app_config_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @src/app/config/configuration/configuration.component */
    "./src/app/config/configuration/configuration.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! angular-froala-wysiwyg */
    "./node_modules/angular-froala-wysiwyg/index.js");
    /* harmony import */


    var angular_file_uploader__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! angular-file-uploader */
    "./node_modules/angular-file-uploader/fesm2015/angular-file-uploader.js");

    var ConfigModule = function ConfigModule() {
      _classCallCheck(this, ConfigModule);
    };

    ConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_src_app_config_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_45__["ConfigurationComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _src_app_config_config_routing_module__WEBPACK_IMPORTED_MODULE_44__["ConfigRoutingModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_46__["FormsModule"], angular_file_uploader__WEBPACK_IMPORTED_MODULE_48__["AngularFileUploaderModule"], angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_47__["FroalaEditorModule"].forRoot(), angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_47__["FroalaViewModule"].forRoot()],
      exports: [_src_app_config_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_45__["ConfigurationComponent"]]
    })], ConfigModule);
    /***/
  },

  /***/
  "./src/app/config/configuration/configuration.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/config/configuration/configuration.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppConfigConfigurationConfigurationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* clearfix style */\nimg {\n  max-width: 100%;\n  height: auto;\n}\n/*== start of code for tooltips ==*/\n.page_content .container .top_header {\n  margin-top: 30px;\n  background-color: #ffffff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px 10px;\n}\n.page_content .container .top_header .search_filter {\n  position: relative;\n}\n.page_content .container .top_header .search_filter img {\n  position: absolute;\n  top: 40%;\n  left: 10px;\n  z-index: 99;\n}\n.page_content .container .top_header .search_filter input {\n  background: #f9f9f9;\n  outline: 0;\n  box-shadow: none;\n  border: 1px solid #eeecec;\n  padding: 5px;\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 300;\n  border-radius: 3px;\n  line-height: 29px;\n  margin-bottom: 0;\n  padding-left: 32px;\n}\n.page_content .container .top_header .search_filter input::-webkit-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.page_content .container .top_header .search_filter input::-moz-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.page_content .container .top_header .search_filter input::-ms-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.page_content .container .top_header .search_filter input::placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.page_content .container .top_header .search_filter input::-webkit-inner-spin-button, .page_content .container .top_header .search_filter input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.page_content .container .top_header .btn_wrap button {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  margin-bottom: 0;\n  background-color: #f9f9f9;\n  color: #00B894;\n}\n.page_content .container .top_header .btn_wrap button:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.page_content .container .top_header .btn_wrap button:focus {\n  outline: none;\n}\n.page_content .container .top_header .btn_wrap button:visited {\n  color: #ffffff;\n}\n.page_content .container .top_header .btn_wrap button i {\n  color: #00B894;\n}\n.page_content .container .top_header .btn_wrap .btn_validate {\n  margin-right: 10px;\n}\n.page_content .container .config_table {\n  position: relative;\n}\n.page_content .container .config_table .loading-container {\n  position: absolute;\n  z-index: 999;\n  top: 40%;\n  left: 45%;\n}\n.page_content .container .config_table .table td {\n  vertical-align: middle;\n}\n.page_content .file_container {\n  display: flex;\n  flex-direction: column;\n  background-color: #ffffff;\n  padding: 20px;\n  border-radius: 10px;\n}\n.page_content .file_container .backbtn_wrap {\n  padding-right: 20px;\n}\n.page_content .file_container .backbtn_wrap .close {\n  outline: none;\n}\n.page_content .file_container .file_container_wrap .file_container_form {\n  padding-left: 115px;\n  padding-right: 115px;\n}\n.page_content .file_container .file_container_wrap .file_container_form .form-group {\n  margin-bottom: 0px;\n}\n.page_content .file_container .file_container_wrap .file_container_form .form-group select,\n.page_content .file_container .file_container_wrap .file_container_form .form-group .selected_text {\n  -webkit-appearance: none;\n  -mos-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url('list.svg') right no-repeat;\n  background-position: right 0.7em top 50%, 0 0;\n  color: #4A4A4A;\n  display: inline-block;\n  padding: 5px;\n  outline: none;\n  box-shadow: none;\n  margin: 0 auto;\n  background-color: #f9f9f9;\n  font-size: 16px;\n  font-weight: 300;\n  min-width: 95px;\n  border: 1px solid #eeecec;\n  width: 100%;\n  line-height: 29px;\n  vertical-align: middle;\n  text-transform: capitalize;\n}\n@media (max-width: 576px) {\n  .page_content .file_container .file_container_wrap .file_container_form .form-group select,\n.page_content .file_container .file_container_wrap .file_container_form .form-group .selected_text {\n    margin-bottom: 10px;\n  }\n}\n.page_content .file_container .file_container_wrap .file_container_form .form-group input {\n  background: #f9f9f9;\n  outline: 0;\n  box-shadow: none;\n  border: 1px solid #eeecec;\n  padding: 5px;\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 300;\n  border-radius: 3px;\n  line-height: 29px;\n  margin-bottom: 0;\n}\n.page_content .file_container .file_container_wrap .file_container_form .form-group input::-webkit-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.page_content .file_container .file_container_wrap .file_container_form .form-group input::-moz-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.page_content .file_container .file_container_wrap .file_container_form .form-group input::-ms-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.page_content .file_container .file_container_wrap .file_container_form .form-group input::placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.page_content .file_container .file_container_wrap .file_container_form .form-group input::-webkit-inner-spin-button, .page_content .file_container .file_container_wrap .file_container_form .form-group input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.page_content .file_container .file_container_wrap .file_container_form button {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  margin-bottom: 0;\n}\n.page_content .file_container .file_container_wrap .file_container_form button:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.page_content .file_container .file_container_wrap .file_container_form button:focus {\n  outline: none;\n}\n.page_content .file_container .file_container_wrap .file_container_form button:visited {\n  color: #ffffff;\n}\n.page_content .file_container .file_container_wrap .file_container_form button .spinner-border {\n  stroke: #00B894 !important;\n  color: #ffffff;\n}\n.page_content .file_container .file_container_wrap .output_text_wrap {\n  border: 2px solid #4A4A4A;\n  border-radius: 5px;\n  margin: 0px 25px 25px 25px;\n  padding: 14px;\n  color: #00B894;\n  font-weight: 400;\n}\n.page_content .file_container .file_container_wrap .output_text_wrap .responceError {\n  color: #4a4a4a;\n}\n.page_content .file_container .table_container_wrap {\n  justify-content: center;\n  margin-left: 20px;\n  margin-right: 20px;\n}\n.page_content .file_container .table_container_wrap .dr-table {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.page_content .file_container .table_container_wrap .dr-table table {\n  width: 100%;\n  text-align: left;\n}\n.page_content .file_container .table_container_wrap .dr-table .table-header th {\n  background-color: #00B894;\n  line-height: 25px;\n  color: #ffffff;\n  font-size: 14px;\n  font-weight: 400;\n  vertical-align: middle;\n  padding: 10px 20px 10px 20px;\n  border: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.page_content .file_container .table_container_wrap .dr-table tr {\n  background-color: white;\n  line-height: 30px;\n  color: #959795;\n  font-size: 13px;\n  font-weight: 300;\n}\n.page_content .file_container .table_container_wrap .dr-table tr th {\n  min-width: 100px;\n  background-color: #ffffff;\n  padding: 10px 20px 10px 20px;\n  text-transform: capitalize !important;\n  border-bottom: 1px solid #eeecec !important;\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  vertical-align: middle;\n}\n.page_content .file_container .table_container_wrap .dr-table .button-style {\n  background: none;\n  border: none;\n  outline: none;\n  color: #959795;\n  font-size: 18px;\n}\n.title_output {\n  color: #9a9a9a;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n}\n.createnew_wrap {\n  padding: 25px 0;\n}\n.createnew_wrap .create_new_container {\n  max-width: 961px;\n  background: #ffffff;\n  padding: 40px;\n  margin: 0 auto;\n  border-radius: 10px;\n  position: relative;\n  margin-top: 80px;\n}\n.createnew_wrap .create_new_container .loading-container {\n  position: absolute;\n  left: 50%;\n  top: 20%;\n  z-index: 99;\n}\n.createnew_wrap .create_new_container .top_header {\n  position: absolute;\n  top: -46px;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  z-index: 99;\n}\n.createnew_wrap .create_new_container .top_header ul {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  margin: 0 auto;\n}\n.createnew_wrap .create_new_container .top_header ul li {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  padding: 10px;\n  border-radius: 5px 5px 0 0;\n  margin: 0;\n  background-color: #f9f9f9;\n  min-width: 120px;\n  text-align: center;\n  cursor: pointer;\n}\n@media (max-width: 991px) {\n  .createnew_wrap .create_new_container .top_header ul li {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .createnew_wrap .create_new_container .top_header ul li {\n    font-size: 14px;\n  }\n}\n.createnew_wrap .create_new_container .top_header ul li.active {\n  background-color: #00B894;\n  color: #ffffff;\n}\n.createnew_wrap .create_new_container .close_config_form {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  z-index: 99;\n}\n.createnew_wrap .create_new_container .close_config_form button {\n  font-size: 12px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap {\n  margin-bottom: 10px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group {\n  position: relative;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group label {\n  padding: 0px;\n  margin: 0px;\n  color: #9A9A9A;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  display: block;\n  margin-bottom: 5px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group label.disable {\n  cursor: not-allowed;\n}\n@media (max-width: 576px) {\n  .createnew_wrap .create_new_container .form_section .form_wrap .input_group label {\n    font-size: 14px;\n  }\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group input {\n  background: #f9f9f9;\n  outline: 0;\n  box-shadow: none;\n  border: 1px solid #eeecec;\n  padding: 5px;\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 300;\n  border-radius: 3px;\n  line-height: 29px;\n  width: auto;\n  background: #ffffff;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group input::-webkit-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group input::-moz-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group input::-ms-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group input::placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group input::-webkit-inner-spin-button, .createnew_wrap .create_new_container .form_section .form_wrap .input_group input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group img {\n  position: absolute;\n  right: 25px;\n  top: 35px;\n  z-index: 9;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group button {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  margin-left: 15px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group button:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group button:focus {\n  outline: none;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group button:visited {\n  color: #ffffff;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group select {\n  -webkit-appearance: none;\n  -mos-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url('list.svg') right no-repeat;\n  background-position: right 0.7em top 50%, 0 0;\n  color: #4A4A4A;\n  display: inline-block;\n  padding: 5px;\n  outline: none;\n  box-shadow: none;\n  margin: 0 auto;\n  background-color: #f9f9f9;\n  font-size: 16px;\n  font-weight: 300;\n  min-width: 95px;\n  border: 1px solid #eeecec;\n  width: 100%;\n  line-height: 29px;\n  vertical-align: middle;\n  width: auto;\n  min-width: 250px;\n}\n@media (max-width: 576px) {\n  .createnew_wrap .create_new_container .form_section .form_wrap .input_group select {\n    margin-bottom: 10px;\n  }\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .selected_text {\n  -webkit-appearance: none;\n  -mos-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background: url('list.svg') right no-repeat;\n  background-position: right 0.7em top 50%, 0 0;\n  color: #4A4A4A;\n  display: inline-block;\n  padding: 5px;\n  outline: none;\n  box-shadow: none;\n  margin: 0 auto;\n  background-color: #f9f9f9;\n  font-size: 16px;\n  font-weight: 300;\n  min-width: 95px;\n  border: 1px solid #eeecec;\n  width: 100%;\n  line-height: 29px;\n  vertical-align: middle;\n  height: 41px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 281.11px;\n  padding-right: 25px;\n  cursor: pointer;\n}\n@media (max-width: 576px) {\n  .createnew_wrap .create_new_container .form_section .form_wrap .input_group .selected_text {\n    margin-bottom: 10px;\n  }\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect {\n  position: relative;\n  display: initial;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect ul {\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0.5px;\n  -moz-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0.5px;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #ffffff;\n  position: absolute;\n  width: 281px;\n  top: 32px;\n  z-index: 99;\n  height: 200px;\n  overflow-y: auto;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect ul li {\n  padding: 10px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect ul li .checkbox_wrap {\n  margin: auto;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect ul li .checkbox_wrap input[type=checkbox] {\n  display: none;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect ul li .checkbox_wrap input[type=checkbox] + label {\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  color: #4A4A4A;\n  font-size: 16px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  line-height: 22px;\n  margin: 0 auto;\n  display: inline-block;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect ul li .checkbox_wrap input[type=checkbox] + label:before {\n  content: \"\";\n  display: block;\n  width: 19px;\n  height: 19px;\n  border: 1px solid #00B894;\n  position: absolute;\n  left: 0;\n  top: 2px;\n  opacity: 0.6;\n  transition: all 0.12s, border-color 0.08s;\n  border-radius: 2px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect ul li .checkbox_wrap input[type=checkbox]:checked + label:before {\n  width: 6px;\n  top: 1px;\n  left: 7.5px;\n  border-radius: 0;\n  opacity: 1;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  transform: rotate(45deg);\n  height: 12px;\n  border-bottom-color: #ffffff;\n  border-right-color: #ffffff;\n  z-index: 99;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect ul li .checkbox_wrap input[type=checkbox]:checked + label:after {\n  content: \"\";\n  display: block;\n  width: 19px;\n  height: 19px;\n  border: 1px solid #00B894;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 1;\n  transition: all 0.12s, border-color 0.08s;\n  background: #00B894;\n  border-radius: 2px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect ul li .checkbox_wrap label {\n  width: 100%;\n  padding-left: 0 !important;\n  text-transform: capitalize;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect ul li .checkbox_wrap label:before {\n  left: 93% !important;\n  border: none !important;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect ul li .checkbox_wrap label:after {\n  left: 90% !important;\n  background: none !important;\n  border: none !important;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect ul li .checkbox_wrap .form-group {\n  margin-bottom: 0;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect ul li .checkbox_wrap .form-group input[type=checkbox]:checked + label {\n  color: #00B894;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect ul li .checkbox_wrap .form-group input[type=checkbox]:checked + label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 3px !important;\n  right: 13px !important;\n  width: 7px !important;\n  height: 14px !important;\n  border: solid #00B894 !important;\n  border-width: 0 2px 2px 0 !important;\n  transform: rotate(45deg) !important;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .input_group .dropdown_multiselect ul li:hover {\n  background-color: rgba(0, 184, 148, 0.06);\n}\n.createnew_wrap .create_new_container .form_section .form_wrap p {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  padding: 0;\n}\n@media (max-width: 991px) {\n  .createnew_wrap .create_new_container .form_section .form_wrap p {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .createnew_wrap .create_new_container .form_section .form_wrap p {\n    font-size: 14px;\n  }\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group {\n  display: flex;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .checkbox_wrap {\n  display: flex;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 {\n  margin-top: 10px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .checkbox_wrap,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .checkbox_wrap {\n  margin: auto;\n  margin-left: 0;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .checkbox_wrap input[type=checkbox],\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .checkbox_wrap input[type=checkbox] {\n  display: none;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .checkbox_wrap input[type=checkbox] + label,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .checkbox_wrap input[type=checkbox] + label {\n  display: block;\n  position: relative;\n  padding-left: 25px;\n  cursor: pointer;\n  color: #4A4A4A;\n  font-size: 16px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  line-height: 22px;\n  margin: 0 auto;\n  display: inline-block;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .checkbox_wrap input[type=checkbox] + label:before,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .checkbox_wrap input[type=checkbox] + label:before {\n  content: \"\";\n  display: block;\n  width: 19px;\n  height: 19px;\n  border: 1px solid #00B894;\n  position: absolute;\n  left: 0;\n  top: 2px;\n  opacity: 0.6;\n  transition: all 0.12s, border-color 0.08s;\n  border-radius: 2px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .checkbox_wrap input[type=checkbox]:checked + label:before,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .checkbox_wrap input[type=checkbox]:checked + label:before {\n  width: 6px;\n  top: 1px;\n  left: 7.5px;\n  border-radius: 0;\n  opacity: 1;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  transform: rotate(45deg);\n  height: 12px;\n  border-bottom-color: #ffffff;\n  border-right-color: #ffffff;\n  z-index: 99;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .checkbox_wrap input[type=checkbox]:checked + label:after,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .checkbox_wrap input[type=checkbox]:checked + label:after {\n  content: \"\";\n  display: block;\n  width: 19px;\n  height: 19px;\n  border: 1px solid #00B894;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 1;\n  transition: all 0.12s, border-color 0.08s;\n  background: #00B894;\n  border-radius: 2px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .checkbox_wrap .form-group,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .checkbox_wrap .form-group {\n  margin-right: 15px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .checkbox_wrap .form-group label,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .checkbox_wrap .form-group label {\n  font-size: 14px !important;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .radio_wrap,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .radio_wrap {\n  display: flex;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .radio_wrap .form-group,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .radio_wrap .form-group {\n  position: relative;\n  margin-right: 10px;\n  margin-bottom: 0;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .radio_wrap .form-group [type=radio]:checked, .createnew_wrap .create_new_container .form_section .form_wrap .group .radio_wrap .form-group [type=radio]:not(:checked),\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .radio_wrap .form-group [type=radio]:checked,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .radio_wrap .form-group [type=radio]:not(:checked) {\n  position: absolute;\n  left: 47.8%;\n  opacity: 0;\n  top: 5px;\n  z-index: 99;\n  cursor: pointer;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .radio_wrap .form-group [type=radio]:checked + label, .createnew_wrap .create_new_container .form_section .form_wrap .group .radio_wrap .form-group [type=radio]:not(:checked) + label,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .radio_wrap .form-group [type=radio]:checked + label,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .radio_wrap .form-group [type=radio]:not(:checked) + label {\n  position: relative;\n  padding-left: 28px;\n  cursor: pointer;\n  line-height: 20px;\n  display: inline-block;\n  color: #4A4A4A;\n  font-size: 14px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .radio_wrap .form-group [type=radio]:checked + label:before, .createnew_wrap .create_new_container .form_section .form_wrap .group .radio_wrap .form-group [type=radio]:not(:checked) + label:before,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .radio_wrap .form-group [type=radio]:checked + label:before,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .radio_wrap .form-group [type=radio]:not(:checked) + label:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 18px;\n  height: 18px;\n  border: 1px solid #4A4A4A;\n  border-radius: 100%;\n  background: #ffffff;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .radio_wrap .form-group [type=radio]:checked + label:after,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .radio_wrap .form-group [type=radio]:checked + label:after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background: #00B894;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .radio_wrap .form-group [type=radio]:not(:checked) + label:after,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .radio_wrap .form-group [type=radio]:not(:checked) + label:after {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background: #00B894;\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  border-radius: 100%;\n  transition: all 0.2s ease;\n  opacity: 0;\n  transform: scale(0);\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .group .radio_wrap .form-group [type=radio]:checked + label:after,\n.createnew_wrap .create_new_container .form_section .form_wrap .group_2 .radio_wrap .form-group [type=radio]:checked + label:after {\n  opacity: 1;\n  transform: scale(1);\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .alert {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  margin: 0;\n  padding: 5px;\n  font-size: 12px;\n  background-color: rgba(247, 181, 0, 0.2);\n  border-radius: 3px;\n  display: inline-block;\n}\n@media (max-width: 991px) {\n  .createnew_wrap .create_new_container .form_section .form_wrap .alert {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .createnew_wrap .create_new_container .form_section .form_wrap .alert {\n    font-size: 14px;\n  }\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .alert i {\n  color: #F7B500;\n  margin-right: 5px;\n}\n.createnew_wrap .create_new_container .form_section .form_wrap .user_add_wrap {\n  align-items: flex-end;\n}\n.createnew_wrap .create_new_container .form_section .file_wrap {\n  display: inline-flex;\n}\n.createnew_wrap .create_new_container .form_section .file_wrap .sample_tbl_container {\n  margin: 0 25px;\n}\n.createnew_wrap .create_new_container .form_section .file_wrap .sample_tbl_container table {\n  margin: 0 auto;\n}\n.createnew_wrap .create_new_container .form_section .file_wrap .sample_tbl_container table tr td {\n  font-size: 14px;\n  vertical-align: middle;\n}\n.createnew_wrap .create_new_container .form_section .file_wrap .sample_tbl_container table tr td a {\n  color: #00B894;\n  cursor: pointer;\n}\n.createnew_wrap .create_new_container .form_section .offer_code {\n  background-color: #f9f9f9;\n  border: 1px solid #eeecec;\n  border-radius: 5px;\n  min-width: 330px;\n  display: inline-block;\n  padding: 10px;\n  margin: 15px 0;\n  margin-left: 8%;\n}\n.createnew_wrap .create_new_container .form_section .offer_code label {\n  padding: 0px;\n  margin: 0px;\n  color: #9A9A9A;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  display: block;\n  margin-bottom: 5px;\n}\n.createnew_wrap .create_new_container .form_section .offer_code label.disable {\n  cursor: not-allowed;\n}\n@media (max-width: 576px) {\n  .createnew_wrap .create_new_container .form_section .offer_code label {\n    font-size: 14px;\n  }\n}\n.createnew_wrap .create_new_container .form_section .offer_code input {\n  background: #f9f9f9;\n  outline: 0;\n  box-shadow: none;\n  border: 1px solid #eeecec;\n  padding: 5px;\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 300;\n  border-radius: 3px;\n  line-height: 29px;\n  background-color: #ffffff;\n}\n.createnew_wrap .create_new_container .form_section .offer_code input::-webkit-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.createnew_wrap .create_new_container .form_section .offer_code input::-moz-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.createnew_wrap .create_new_container .form_section .offer_code input::-ms-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.createnew_wrap .create_new_container .form_section .offer_code input::placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.createnew_wrap .create_new_container .form_section .offer_code input::-webkit-inner-spin-button, .createnew_wrap .create_new_container .form_section .offer_code input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.createnew_wrap .create_new_container .form_section .file_format_wrap {\n  background-color: #f9f9f9;\n  border: 1px solid #eeecec;\n  border-radius: 5px;\n  width: 370px;\n  padding: 30px 45px;\n  margin-bottom: 25px;\n}\n.createnew_wrap .create_new_container .form_section .file_format_wrap .form_wrap .input_group {\n  position: relative;\n}\n.createnew_wrap .create_new_container .form_section .file_format_wrap .form_wrap .input_group input {\n  width: 100%;\n  background-color: #ffffff;\n}\n.createnew_wrap .create_new_container .form_section .file_format_wrap .form_wrap .input_group img {\n  position: absolute;\n  right: 9px;\n  top: 35px;\n  z-index: 9;\n}\n.createnew_wrap .create_new_container .form_section .folder_wrap {\n  margin-bottom: 25px;\n}\n.createnew_wrap .create_new_container .form_section .folder_wrap .form_wrap .input_group input {\n  min-width: 420px;\n}\n.createnew_wrap .create_new_container .form_section .alert_wrap,\n.createnew_wrap .create_new_container .form_section .dqr_wrap {\n  margin-bottom: 25px;\n}\n.createnew_wrap .create_new_container .form_section .alert_wrap .form_wrap .input_group .user_add_wrap,\n.createnew_wrap .create_new_container .form_section .dqr_wrap .form_wrap .input_group .user_add_wrap {\n  align-items: center;\n}\n.createnew_wrap .create_new_container .form_section .alert_wrap .form_wrap .input_group i,\n.createnew_wrap .create_new_container .form_section .dqr_wrap .form_wrap .input_group i {\n  color: #00B894;\n  margin: 10px;\n  cursor: pointer;\n}\n.createnew_wrap .create_new_container .form_section .report_wrap {\n  margin-bottom: 25px;\n}\n.createnew_wrap .create_new_container .form_section .setting_wrap {\n  margin-bottom: 25px;\n}\n.createnew_wrap .create_new_container .form_section .setting_wrap .form_wrap .input_group input {\n  width: 100%;\n}\n.createnew_wrap .create_new_container .form_section .setting_wrap mat-panel-title {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  padding: 0;\n}\n@media (max-width: 991px) {\n  .createnew_wrap .create_new_container .form_section .setting_wrap mat-panel-title {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .createnew_wrap .create_new_container .form_section .setting_wrap mat-panel-title {\n    font-size: 14px;\n  }\n}\n.createnew_wrap .create_new_container .form_section .all_data_wrap {\n  margin-bottom: 30px;\n  overflow: overlay;\n  max-height: 390px;\n}\n.createnew_wrap .create_new_container .form_section .all_data_wrap .dr-table table {\n  width: 100%;\n  text-align: left;\n  border: 1px solid #f9f9f9;\n}\n.createnew_wrap .create_new_container .form_section .all_data_wrap .dr-table .table-header th {\n  width: 50%;\n  background-color: #f9f9f9;\n  line-height: 25px;\n  color: #4a4a4a;\n  font-size: 12px;\n  font-weight: 500;\n  vertical-align: middle;\n  padding: 10px 10px 10px 30px;\n  border: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n.createnew_wrap .create_new_container .form_section .all_data_wrap .dr-table tr {\n  background-color: #ffffff;\n  line-height: 30px;\n  color: #959795;\n  font-size: 13px;\n  font-weight: 300;\n}\n.createnew_wrap .create_new_container .form_section .all_data_wrap .dr-table tr th {\n  background-color: #ffffff;\n  padding: 10px 10px 10px 30px;\n  text-transform: capitalize !important;\n  border-bottom: 1px solid #eeecec !important;\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  vertical-align: middle;\n}\n.createnew_wrap .create_new_container .form_section .all_data_wrap .dr-table .button-style {\n  background: none;\n  border: none;\n  outline: none;\n  color: #959795;\n  font-size: 18px;\n}\n.createnew_wrap .create_new_container .form_section .action_btn {\n  display: flex;\n  position: relative;\n}\n.createnew_wrap .create_new_container .form_section .action_btn button {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n}\n.createnew_wrap .create_new_container .form_section .action_btn button:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.createnew_wrap .create_new_container .form_section .action_btn button:focus {\n  outline: none;\n}\n.createnew_wrap .create_new_container .form_section .action_btn button:visited {\n  color: #ffffff;\n}\n.createnew_wrap .create_new_container .form_section .action_btn button:nth-child(2), .createnew_wrap .create_new_container .form_section .action_btn button:last-child {\n  margin-left: auto;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .close {\n  background: transparent;\n  border-color: #eeecec;\n  color: #4A4A4A;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .dr-table {\n  max-height: 300px;\n  overflow: auto;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .dr-table th {\n  font-size: 9px;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .dr-table .table-header {\n  line-height: 15px;\n  color: #959795;\n  font-size: 10px;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .dr-table .mobile-table-tr th {\n  line-height: 15px;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap {\n  width: 100%;\n  justify-content: flex-end;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel {\n  display: flex;\n  align-items: flex-end;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .action_btn_cancel {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  background-color: #ffffff;\n  color: #00B894;\n  margin-right: 15px;\n  margin-bottom: 0px;\n  position: relative;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .action_btn_cancel:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .action_btn_cancel:focus {\n  outline: none;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .action_btn_cancel:visited {\n  color: #ffffff;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .bottom_arrow {\n  position: absolute;\n  width: 0;\n  top: -53%;\n  left: 75%;\n  height: 0;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-bottom: 17px solid #f3f3f3;\n  transform: rotate(180deg);\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .tool_tip {\n  position: absolute;\n  top: -573%;\n  left: 66%;\n  background-color: #f3f3f3;\n  padding: 20px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .tool_tip .modal_title {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .tool_tip .modal_body {\n  display: flex;\n  flex-direction: column;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .tool_tip .modal_body .textarea_input {\n  width: 100%;\n  outline: none;\n  min-height: 90px;\n  padding: 8px;\n  background-color: #ffffff;\n  font-size: 16px;\n  font-weight: 300;\n  color: #4a4a4a;\n  border-radius: 5px;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .tool_tip .modal_body .errortxt {\n  font-size: 10px;\n  text-align: left;\n  color: #E53935;\n  padding: 3px;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .tool_tip .modal_footer {\n  padding-top: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .tool_tip .modal_footer .action_btn_cancel {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  background-color: #ffffff;\n  color: #00B894;\n  margin-bottom: 0px;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .tool_tip .modal_footer .action_btn_cancel:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .tool_tip .modal_footer .action_btn_cancel:focus {\n  outline: none;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .tool_tip .modal_footer .action_btn_cancel:visited {\n  color: #ffffff;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .tool_tip .modal_footer .action_btn_save {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  margin-bottom: 0px;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .tool_tip .modal_footer .action_btn_save:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .tool_tip .modal_footer .action_btn_save:focus {\n  outline: none;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap_cancel .tool_tip .modal_footer .action_btn_save:visited {\n  color: #ffffff;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap {\n  display: flex;\n  align-items: flex-end;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap .action_btn_cancel {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  background-color: #ffffff;\n  color: #00B894;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap .action_btn_cancel:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap .action_btn_cancel:focus {\n  outline: none;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap .action_btn_cancel:visited {\n  color: #ffffff;\n}\n.createnew_wrap .create_new_container .form_section .action_btn .textarea_wrap .btn_wrap .action_btn_save {\n  margin-bottom: 0px;\n}\n.remark_wrap .modal .modal-dialog {\n  max-width: 350px;\n}\n.remark_wrap .modal .modal-dialog .modal-content {\n  position: absolute;\n  left: 103%;\n  top: 53%;\n}\n.remark_wrap .modal .modal-dialog .modal-content .modal-header {\n  padding: 15px 15px 0px 15px;\n  border-bottom: none;\n}\n.remark_wrap .modal .modal-dialog .modal-content .modal-header .modal-title {\n  padding: 0px;\n  margin: 0px;\n  color: #9a9a9a;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  display: block;\n}\n.remark_wrap .modal .modal-dialog .modal-content .modal-header .close {\n  top: 28px;\n  right: 29px;\n}\n.remark_wrap .modal .modal-dialog .modal-content .modal-body {\n  padding: 5px 15px 5px 15px;\n}\n.remark_wrap .modal .modal-dialog .modal-content .modal-body .textarea_input {\n  width: 100%;\n  outline: none;\n  min-height: 90px;\n  padding: 8px;\n  background-color: #f9f9f9;\n  font-size: 16px;\n  font-weight: 300;\n  color: #4a4a4a;\n  border-radius: 5px;\n}\n.remark_wrap .modal .modal-dialog .modal-content .modal-footer {\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 15px 5px 15px;\n  border-top: none;\n}\n.remark_wrap .modal .modal-dialog .modal-content .modal-footer .action_btn_cancel {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  background-color: #ffffff;\n  color: #00B894;\n}\n.remark_wrap .modal .modal-dialog .modal-content .modal-footer .action_btn_cancel:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.remark_wrap .modal .modal-dialog .modal-content .modal-footer .action_btn_cancel:focus {\n  outline: none;\n}\n.remark_wrap .modal .modal-dialog .modal-content .modal-footer .action_btn_cancel:visited {\n  color: #ffffff;\n}\n.remark_wrap .modal .modal-dialog .modal-content .modal-footer .action_btn_save {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n}\n.remark_wrap .modal .modal-dialog .modal-content .modal-footer .action_btn_save:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.remark_wrap .modal .modal-dialog .modal-content .modal-footer .action_btn_save:focus {\n  outline: none;\n}\n.remark_wrap .modal .modal-dialog .modal-content .modal-footer .action_btn_save:visited {\n  color: #ffffff;\n}\n.modal .modal-dialog .modal-content .modal-header {\n  padding: 0;\n  position: relative;\n}\n.modal .modal-dialog .modal-content .modal-header button.close {\n  position: absolute;\n  right: 3px;\n  top: 2px;\n  padding: 5px;\n  background: #ffffff;\n  border-radius: 50%;\n  width: 25px;\n  height: 25px;\n  line-height: 11px;\n  vertical-align: middle;\n}\n.modal .modal-dialog .modal-content .modal-header .modal-title {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  padding: 0;\n}\n@media (max-width: 991px) {\n  .modal .modal-dialog .modal-content .modal-header .modal-title {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .modal .modal-dialog .modal-content .modal-header .modal-title {\n    font-size: 14px;\n  }\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .col-3 {\n  margin-top: 28px;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group label {\n  padding: 0px;\n  margin: 0px;\n  color: #9A9A9A;\n  font-size: 14px;\n  font-weight: 300;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  display: block;\n  margin-bottom: 5px;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group label.disable {\n  cursor: not-allowed;\n}\n@media (max-width: 576px) {\n  .modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group label {\n    font-size: 14px;\n  }\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group input {\n  background: #f9f9f9;\n  outline: 0;\n  box-shadow: none;\n  border: 1px solid #eeecec;\n  padding: 5px;\n  margin-bottom: 10px;\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  font-weight: 300;\n  border-radius: 3px;\n  line-height: 29px;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group input::-webkit-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group input::-moz-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group input::-ms-input-placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group input::placeholder {\n  color: #acacac;\n  font-size: 12px;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group input::-webkit-inner-spin-button, .modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group input::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group button {\n  border: 1px solid #00B894;\n  box-shadow: none;\n  position: relative;\n  font-weight: 500;\n  cursor: pointer;\n  color: #ffffff;\n  display: inline-block;\n  font-size: 14px;\n  padding: 9px 15px 9px;\n  background: #00B894;\n  outline: none;\n  margin-bottom: 10px;\n  border-radius: 3px;\n  min-width: 120px;\n  min-width: auto;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group button:hover {\n  outline: none;\n  text-decoration: none;\n  box-shadow: 0px 17px 10px -10px rgba(0, 184, 148, 0.3);\n  cursor: pointer;\n  transition: all ease-in-out 300ms;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group button:focus {\n  outline: none;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group button:visited {\n  color: #ffffff;\n}\n.modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group .alert {\n  padding: 0px 0 10px 0;\n  color: #4A4A4A;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  padding: 5px;\n  line-height: 1.3;\n  color: #FF4B4B;\n}\n@media (max-width: 991px) {\n  .modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group .alert {\n    text-align: center;\n  }\n}\n@media (max-width: 576px) {\n  .modal .modal-dialog .modal-content .modal-body form .user_add_wrap .input_group .alert {\n    font-size: 14px;\n  }\n}\n.modal .modal-dialog .modal-content .card {\n  border-radius: 1.3rem;\n  border: 1px solid #ffffff;\n}\n.modal .modal-dialog .modal-content .card .card-body {\n  flex: 1 1 auto;\n  /* padding: 1.25rem; */\n  padding: 15px;\n}\n.modal .modal-dialog .modal-content .card .card-body .all_data_wrap {\n  margin-bottom: 30px;\n  overflow: overlay;\n  max-height: 390px;\n}\n.modal .modal-dialog .modal-content .card .card-body .all_data_wrap .dr-table table {\n  width: 100%;\n  text-align: left;\n  border: 1px solid #f9f9f9;\n}\n.modal .modal-dialog .modal-content .card .card-body .all_data_wrap .dr-table .table-header th {\n  width: 50%;\n  background-color: #f9f9f9;\n  line-height: 25px;\n  color: #4a4a4a;\n  font-size: 15px;\n  font-weight: 500;\n  vertical-align: middle;\n  padding: 10px 10px 10px 30px;\n  border: none;\n  position: -webkit-sticky;\n  position: sticky;\n  top: -1px;\n}\n.modal .modal-dialog .modal-content .card .card-body .all_data_wrap .dr-table tr {\n  background-color: #ffffff;\n  line-height: 30px;\n  color: #959795;\n  font-size: 13px;\n  font-weight: 300;\n}\n.modal .modal-dialog .modal-content .card .card-body .all_data_wrap .dr-table tr th {\n  background-color: #ffffff;\n  padding: 10px 10px 10px 30px;\n  text-transform: capitalize !important;\n  border-bottom: 1px solid #eeecec !important;\n  color: #4a4a4a;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 26px;\n  font-family: \"Roboto\", sans-serif;\n  text-align: left;\n  margin: 0 auto;\n  vertical-align: middle;\n}\n.modal .modal-dialog .modal-content .card .card-body .all_data_wrap .dr-table .button-style {\n  background: none;\n  border: none;\n  outline: none;\n  color: #959795;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlnL2NvbmZpZ3VyYXRpb24vRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxzY3NzXFxtaXhpbnMuc2NzcyIsInNyYy9hcHAvY29uZmlnL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29uZmlnL2NvbmZpZ3VyYXRpb24vRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxhcHBcXGNvbmZpZ1xcY29uZmlndXJhdGlvblxcY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29uZmlnL2NvbmZpZ3VyYXRpb24vRDpcXHJlY29uTmV3XFxSZWNvbl9EYXNoYm9hcmQvc3JjXFxzY3NzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBQTtBQWlCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDZkY7QUR3b0JBLG1DQUFBO0FFeG9CSTtFQUNFLGdCQUFBO0VBQ0EseUJDYVE7RURaUixhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FESU47QUNITTtFQUNFLGtCQUFBO0FES1I7QUNKUTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FETVY7QUNKUTtFRndSTixtQkc3UmlCO0VIOFJqQixVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUVqU1EsZ0JBQUE7RUFDQSxrQkFBQTtBRGlCVjtBRGlSRTtFQUNFLGNHN1JnQjtFSDhSaEIsZUFBQTtBQy9RSjtBRDZRRTtFQUNFLGNHN1JnQjtFSDhSaEIsZUFBQTtBQy9RSjtBRDZRRTtFQUNFLGNHN1JnQjtFSDhSaEIsZUFBQTtBQy9RSjtBRDZRRTtFQUNFLGNHN1JnQjtF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Qzh2Q0Y7QUFDRjtBRG4rQ0k7RUUrdkJVO0lGdmhCVixlQUFBO0VDK3ZDRjtBQUNGO0FDenRCTTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUQ0dEJSO0FDM3RCUTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUQ2dEJWO0FDM3RCVTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRDZ0Qlo7QUN4dEJjO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUQwdEJoQjtBQ3Z0QmdCO0VBQ0UsVUFBQTtFQUNBLHlCQ3R6QkM7RUR1ekJELGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFNBQUE7QUR5dEJsQjtBQ3J0QmM7RUFDRSx5QkMvekJGO0VEZzBCRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUR1dEJoQjtBQ3R0QmdCO0VBQ0UseUJDcjBCSjtFRHMwQkksNEJBQUE7RUFDQSxxQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBRHd0QmxCO0FDcHRCYztFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRHN0QmhCIiwiZmlsZSI6InNyYy9hcHAvY29uZmlnL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNsZWFyZml4IHN0eWxlICovXHJcblxyXG4vLyBDbGVhcmZpeCBtaXhpblxyXG4lY2xlYXJmaXgge1xyXG4gICp6b29tOiAxO1xyXG5cclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4vLyBEZWZpbmUgdGhlIGJyZWFrcG9pbnRzXHJcbkBtaXhpbiBicmVha3BvaW50KCRwb2ludCkge1xyXG4gIEBpZiAkcG9pbnQ9PXNtYWxsLWRldmljZSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PW1vYmlsZSB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PXRhYmxldDAge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT10YWJsZXRwcm8ge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1pcGFkIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9IEBlbHNlIGlmICRwb2ludD09bGFwdG9wIHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfSBAZWxzZSBpZiAkcG9pbnQ9PWxhcHRvcG1heCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH0gQGVsc2UgaWYgJHBvaW50PT1kZXNrdG9wIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vbG9hZGVyXHJcbkBtaXhpbiBsb2FkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHotaW5kZXg6IDk5OTk7XHJcbiAgYmFja2dyb3VuZDogJGJsYWNrLW92ZXJsYXk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgfVxyXG59XHJcbi8vIGp1c3RpZnktY29udGVudCBtaXhpblxyXG5cclxuQG1peGluIGp1c3RpZnktY29udGVudCgkanVzdGlmeSkge1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAtbW96LWp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgLW1zLWp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICAtbXMtZmxleC1wYWNrOiAkanVzdGlmeTtcclxufVxyXG5cclxuLy8gYWxpZ24taXRlbXMgbWl4aW5cclxuXHJcbkBtaXhpbiBhbGlnbi1pdGVtcygkYWxpZ24taG9yaXpvbnRhbGx5KSB7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogJGFsaWduLWhvcml6b250YWxseTtcclxuICAtbW96LWFsaWduLWl0ZW1zOiAkYWxpZ24taG9yaXpvbnRhbGx5O1xyXG4gIC1tcy1hbGlnbi1pdGVtczogJGFsaWduLWhvcml6b250YWxseTtcclxuICBhbGlnbi1pdGVtczogJGFsaWduLWhvcml6b250YWxseTtcclxufVxyXG5cclxuLy8gVHJhbnNpdGlvbiBtaXhpblxyXG5cclxuQG1peGluIHRyYW5zaXRpb24oJHRyYW5zaXRpb24pIHtcclxuICAtbW96LXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gIC1vLXRyYW5zaXRpb246ICR0cmFuc2l0aW9uO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbiAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XHJcbn1cclxuXHJcbi8vIFRyYW5zZm9ybSBtaXhpblxyXG5cclxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3JtKSB7XHJcbiAgLW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm07XHJcbiAgLW8tdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3JtO1xyXG4gIHRyYW5zZm9ybTogJHRyYW5zZm9ybTtcclxufVxyXG5cclxuQG1peGluIGZsZXgge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiAtbW96LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuQG1peGluIGJveC1zaGFkb3coJGFyZ3MpIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gIC1tb3otYm94LXNoYWRvdzogJGFyZ3M7XHJcbiAgLW1zLWJveC1zaGFkb3c6ICRhcmdzO1xyXG4gIGJveC1zaGFkb3c6ICRhcmdzO1xyXG59XHJcblxyXG5AbWl4aW4gYm9yZGVyLXJhZGl1cygkcmFkaXVzKSB7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICAtbXMtYm9yZGVyLXJhZGl1czogJHJhZGl1cztcclxuICBib3JkZXItcmFkaXVzOiAkcmFkaXVzO1xyXG59XHJcblxyXG4vL1BhZGRpbmcgbWl4aW5cclxuQG1peGluIHBhZGRpbmcoJHRvcCwgJHJpZ2h0LCAkYm90dG9tLCAkbGVmdCkge1xyXG4gIHBhZGRpbmctdG9wOiAkdG9wO1xyXG4gIHBhZGRpbmctcmlnaHQ6ICRyaWdodDtcclxuICBwYWRkaW5nLWJvdHRvbTogJGJvdHRvbTtcclxuICBwYWRkaW5nLWxlZnQ6ICRsZWZ0O1xyXG59XHJcblxyXG4vL01hcmdpbiBtaXhpblxyXG5AbWl4aW4gbWFyZ2luKCR0b3AsICRyaWdodCwgJGJvdHRvbSwgJGxlZnQpIHtcclxuICBtYXJnaW4tdG9wOiAkdG9wO1xyXG4gIG1hcmdpbi1yaWdodDogJHJpZ2h0O1xyXG4gIG1hcmdpbi1ib3R0b206ICRib3R0b207XHJcbiAgbWFyZ2luLWxlZnQ6ICRsZWZ0O1xyXG59XHJcblxyXG4vL3Bvc2l0aW9uIG1peGluXHJcbkBtaXhpbiBwb3NpdGlvbigkcG9zaXRpb24sICR0b3A6IG51bGwsICRyaWdodDogbnVsbCwgJGJvdHRvbTogbnVsbCwgJGxlZnQ6IG51bGwpIHtcclxuICBwb3NpdGlvbjogJHBvc2l0aW9uO1xyXG4gIHRvcDogJHRvcDtcclxuICByaWdodDogJHJpZ2h0O1xyXG4gIGJvdHRvbTogJGJvdHRvbTtcclxuICBsZWZ0OiAkbGVmdDtcclxufVxyXG5cclxuQG1peGluIGhlYWRpbmctSDEge1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBoZWFkaW5nLUgyIHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gaGVhZGluZy1IMyB7XHJcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICBsaW5lLWhlaWdodDogMS4zO1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yb2JvdG87XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0cHJvKSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGhlYWRpbmctSDQge1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtcmVndWxhcjtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQobW9iaWxlKSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gcGFyYWdyYXBoIHtcclxuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6ICRmb250LXJlZ3VsYXI7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KHRhYmxldHBybykge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludChtb2JpbGUpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb2xvckJveCB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9keS1iZy1jb2xvcjtcclxuICAvLyBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAyMCUpIDBweCAxcHggNHB4IDAuNXB4OyA7XHJcbn1cclxuXHJcbkBtaXhpbiBhbmNob3Ige1xyXG4gIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJvYm90bztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcclxuXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzLFxyXG4gICY6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZGVmYXVsdCBpbnB1dCB0eXBlIGFueVxyXG5AbWl4aW4gaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci1saWdodC1ncmV5O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAkcGxhY2Vob2xkZXItY29sb3I7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLy90ZXh0YXJlYVxyXG5AbWl4aW4gdGV4dGFyZWEge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcblxyXG4gICY6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAkcGxhY2Vob2xkZXItY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBkZWZhdWx0IGJ1dHRvblxyXG5AbWl4aW4gYnV0dG9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDlweCAxNXB4IDlweDtcclxuICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBtaW4td2lkdGg6IDEyMHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBidXR0b24xIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkdGhlbWUtY29sb3I7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDlweCAxNXB4IDlweDtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1pbi13aWR0aDogMTIwcHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxN3B4IDEwcHggLTEwcHggcmdiYSgkdGhlbWUtY29sb3IsIDAuMyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMzAwbXM7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gICY6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gYm94IGRyX3N1bW1hcnlcclxuQG1peGluIGJveCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggMXB4IDRweCAwLjVweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuQG1peGluIG1vbl9uYW1lIHtcclxuICAvLyBwYWRkaW5nOiAwcHggMCAwcHggMTVweDtcclxuXHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5AbWl4aW4gbW9uX25vIHtcclxuICBwYWRkaW5nOiAwcHggMCAwcHggMTBweDtcclxuICAvLyBjb2xvcjogIzRhNGE0YTtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gZGVmYXVsdCBwcm9kdWN0LWJ1dHRvblxyXG5AbWl4aW4gcHJvZHVjdC1idXR0b24ge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDVweCAxNHB4IDZweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggMnB4IHRyYW5zcGFyZW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDJweCB0cmFuc3BhcmVudDtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDJweCAycHggdHJhbnNwYXJlbnQ7XHJcbiAgLW8tYm94LXNoYWRvdzogMCAycHggMnB4IDJweCB0cmFuc3BhcmVudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCAycHggJGJveC1zaGFkb3ctY29sb3I7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMnB4IDJweCAkYm94LXNoYWRvdy1jb2xvcjtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgLW8tYm94LXNoYWRvdzogMHB4IDJweCAycHggMnB4ICRib3gtc2hhZG93LWNvbG9yO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogJHRoZW1lLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHJpZ2h0IHdoaXRlIGFycm93IGluIGJ1dHRvblxyXG4vLyBAbWl4aW4gYnRuX3JpZ2h0X2Fycm93IHtcclxuLy8gICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG5cclxuLy8gICAmOmFmdGVyIHtcclxuLy8gICAgIGJhY2tncm91bmQ6IHVybCgpIG5vLXJlcGVhdDtcclxuLy8gICAgIHdpZHRoOiAyMHB4O1xyXG4vLyAgICAgaGVpZ2h0OiAxN3B4O1xyXG4vLyAgICAgY29udGVudDogXCJcIjtcclxuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHJpZ2h0OiA3cHg7XHJcbi8vICAgICB0b3A6IDEwcHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vL2ZvciBoNCB3aXRoIGJvdHRvbSBsaW5lXHJcbkBtaXhpbiB0ZXh0X3VuZGVybGluZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMnB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludCh0YWJsZXRwcm8pIHtcclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9mb3Igc2VsZWN0IHRhZ1xyXG5cclxuQG1peGluIHNlbGVjdEJveCB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3MtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvbGlzdC5zdmcpIHJpZ2h0IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAwLjdlbSB0b3AgNTAlLCAwIDA7XHJcbiAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBtaW4td2lkdGg6IDk1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBsaW5lLWhlaWdodDogMjlweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi8vbGFiZWxcclxuQG1peGluIGxhYmVsIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgY29sb3I6ICRjb2xvci1kYXJrLWdyZXk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcclxuICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICYuZGlzYWJsZSB7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxuICBAaW5jbHVkZSBicmVha3BvaW50KG1vYmlsZSkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy9pbWFnZSBib3ggc2hhZG93XHJcbkBtaXhpbiBpbWctYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3ctY29sb3IgMHB4IDFweCA0cHggMC41cHg7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAkYm94LXNoYWRvdy1jb2xvciAwcHggMXB4IDRweCAwLjVweDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6ICRib3gtc2hhZG93LWNvbG9yIDBweCAxcHggNHB4O1xyXG59XHJcblxyXG4vL2NoZWNrYm94XHJcblxyXG5AbWl4aW4gY2hlY2tib3gge1xyXG4gIG1hcmdpbjogYXV0bztcclxuXHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAkY29sb3ItbGlnaHQtYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtcm9ib3RvO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDJweDtcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgIHRvcDogMXB4O1xyXG4gICAgICBsZWZ0OiA3LjVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vdG9vbC10aXBcclxuXHJcbi8qPT0gc3RhcnQgb2YgY29kZSBmb3IgdG9vbHRpcHMgPT0qL1xyXG5AbWl4aW4gZGVmYXVsdC10b29sLXRpcCB7XHJcbiAgY3Vyc29yOiBoZWxwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTAwO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgICY6YmVmb3JlLFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcclxuICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNikgMC4ycztcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNjVzIGN1YmljLWJlemllcigwLjg0LCAtMC4xOCwgMC4zMSwgMS4yNik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxZW0gMC43NWVtIDAgMC43NWVtO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmFiYmJiIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMC41ZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC42NXMgY3ViaWMtYmV6aWVyKDAuODQsIC0wLjE4LCAwLjMxLCAxLjI2KSwgb3BhY2l0eSAwLjY1cyAwLjVzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoLTkwJSk7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNiYWJiYmI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgICBib3R0b206IDE4MCU7XHJcbiAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXRpcCk7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogLTguNzVlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjZweDtcclxuICAgIC8vIHBhZGRpbmc6IDVweDtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjY1cyBjdWJpYy1iZXppZXIoMC44NCwgLTAuMTgsIDAuMzEsIDEuMjYpIDAuMnM7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNikgdHJhbnNsYXRlWSg1MCUpO1xyXG4gICAgLy8gd2lkdGg6IDE3LjVlbTtcclxuICAgIG1pbi13aWR0aDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIGJyZWFrcG9pbnQodGFibGV0KSB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgZm9udC1zaXplOiAwLjc1ZW07XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNWVtO1xyXG4gICAgICB3aWR0aDogMTBlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vbGlzdCBzdHlsZVxyXG5cclxuQG1peGluIGxpc3RzdHlsZSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDE4cHg7XHJcblxyXG4gICY6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiLlwiO1xyXG4gICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBsaW5lLWhlaWdodDogMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiA0MXB4O1xyXG4gIH1cclxufVxyXG5cclxuLy9maWxlIHVwbG9hZCBpbnB1dFxyXG5AbWl4aW4gZmlsZV9pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBAaW5jbHVkZSBidXR0b247XHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi8vZm9yIGJsb2NrIG1peGluXHJcbkBtaXhpbiBibG9ja0FsbFRleHQge1xyXG4gIGgxIHtcclxuICAgIEBpbmNsdWRlIGhlYWRpbmctSDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIEBpbmNsdWRlIGhlYWRpbmctSDI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIEBpbmNsdWRlIGhlYWRpbmctSDM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGg0IHtcclxuICAgIEBpbmNsdWRlIGhlYWRpbmctSDQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAmOmVtcHR5IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIEBpbmNsdWRlIGFuY2hvcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAmOmVtcHR5IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjplbXB0eSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIEBpbmNsdWRlIGFuY2hvcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICY6ZW1wdHkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGJyZWFkY3J1bWIge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBhbmNob3I7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi8vcmFkaW8gYnV0dG9uXHJcblxyXG5AbWl4aW4gcmFkaW8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgW3R5cGU9XCJyYWRpb1wiXSB7XHJcbiAgICAmOmNoZWNrZWQsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIC8vIGxlZnQ6IDQ3LjglO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCxcclxuICAgICY6bm90KDpjaGVja2VkKSArIGxhYmVsIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgY29sb3I6ICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1saWdodC1ibGFjaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgIGxlZnQ6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1peGluIHJhZGlvMSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgICY6Y2hlY2tlZCxcclxuICAgICY6bm90KDpjaGVja2VkKSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogNDcuOCU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRvcDogNXB4O1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgICY6Y2hlY2tlZCArIGxhYmVsLFxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwsXHJcbiAgICAmOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogM3B4O1xyXG4gICAgICAgIGxlZnQ6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoOmNoZWNrZWQpICsgbGFiZWwge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNHB4O1xyXG4gICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLy9kZWZhdWx0IHRhYmxlXHJcbkBtaXhpbiB0YWJsZSB7XHJcbiAgdGFibGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgdGhlYWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICAgICAgdHIge1xyXG4gICAgICAgIHRoIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAuaWNvbi1pbmZvLXRvb2x0aXAge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBkZWZhdWx0LXRvb2wtdGlwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrYm94X3dyYXAge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBjaGVja2JveDtcclxuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGJvZHkge1xyXG4gICAgICB0ciB7XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXItY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3VjY2VzcyxcclxuICAgICAgICAgIC5lcnJvcixcclxuICAgICAgICAgIC5tYXBwZWQge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Y2Nlc3Mge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR0aGVtZS1jb2xvciwgMC4wNSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmRpc2FibGUge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZXJyb3Ige1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvci1yZWQsIDAuMDUpO1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXJlZDtcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1yZWQ7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLmRpc2FibGUge1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWFwcGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3ItbGlnaHQtYmxhY2ssIDAuMDUpO1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5kaXNhYmxlIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNoZWNrYm94X3dyYXAge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBjaGVja2JveDtcclxuICAgICAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGFuY2hvcjtcclxuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGltZy1ib3gtc2hhZG93O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHRoZW1lLWNvbG9yLCAwLjA1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pY29uLWluZm8tdG9vbHRpcCB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBkZWZhdWx0LXRvb2wtdGlwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKiBjbGVhcmZpeCBzdHlsZSAqL1xuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qPT0gc3RhcnQgb2YgY29kZSBmb3IgdG9vbHRpcHMgPT0qL1xuLnBhZ2VfY29udGVudCAuY29udGFpbmVyIC50b3BfaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5wYWdlX2NvbnRlbnQgLmNvbnRhaW5lciAudG9wX2hlYWRlciAuc2VhcmNoX2ZpbHRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYWdlX2NvbnRlbnQgLmNvbnRhaW5lciAudG9wX2hlYWRlciAuc2VhcmNoX2ZpbHRlciBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiAxMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cbi5wYWdlX2NvbnRlbnQgLmNvbnRhaW5lciAudG9wX2hlYWRlciAuc2VhcmNoX2ZpbHRlciBpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVjZWM7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG59XG4ucGFnZV9jb250ZW50IC5jb250YWluZXIgLnRvcF9oZWFkZXIgLnNlYXJjaF9maWx0ZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhY2FjYWM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5wYWdlX2NvbnRlbnQgLmNvbnRhaW5lciAudG9wX2hlYWRlciAuc2VhcmNoX2ZpbHRlciBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgLnBhZ2VfY29udGVudCAuY29udGFpbmVyIC50b3BfaGVhZGVyIC5zZWFyY2hfZmlsdGVyIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5wYWdlX2NvbnRlbnQgLmNvbnRhaW5lciAudG9wX2hlYWRlciAuYnRuX3dyYXAgYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQjg5NDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOXB4IDE1cHggOXB4O1xuICBiYWNrZ3JvdW5kOiAjMDBCODk0O1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGNvbG9yOiAjMDBCODk0O1xufVxuLnBhZ2VfY29udGVudCAuY29udGFpbmVyIC50b3BfaGVhZGVyIC5idG5fd3JhcCBidXR0b246aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAxN3B4IDEwcHggLTEwcHggcmdiYSgwLCAxODQsIDE0OCwgMC4zKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMzAwbXM7XG59XG4ucGFnZV9jb250ZW50IC5jb250YWluZXIgLnRvcF9oZWFkZXIgLmJ0bl93cmFwIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucGFnZV9jb250ZW50IC5jb250YWluZXIgLnRvcF9oZWFkZXIgLmJ0bl93cmFwIGJ1dHRvbjp2aXNpdGVkIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucGFnZV9jb250ZW50IC5jb250YWluZXIgLnRvcF9oZWFkZXIgLmJ0bl93cmFwIGJ1dHRvbiBpIHtcbiAgY29sb3I6ICMwMEI4OTQ7XG59XG4ucGFnZV9jb250ZW50IC5jb250YWluZXIgLnRvcF9oZWFkZXIgLmJ0bl93cmFwIC5idG5fdmFsaWRhdGUge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucGFnZV9jb250ZW50IC5jb250YWluZXIgLmNvbmZpZ190YWJsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYWdlX2NvbnRlbnQgLmNvbnRhaW5lciAuY29uZmlnX3RhYmxlIC5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICB0b3A6IDQwJTtcbiAgbGVmdDogNDUlO1xufVxuLnBhZ2VfY29udGVudCAuY29udGFpbmVyIC5jb25maWdfdGFibGUgLnRhYmxlIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5wYWdlX2NvbnRlbnQgLmZpbGVfY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wYWdlX2NvbnRlbnQgLmZpbGVfY29udGFpbmVyIC5iYWNrYnRuX3dyYXAge1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLnBhZ2VfY29udGVudCAuZmlsZV9jb250YWluZXIgLmJhY2tidG5fd3JhcCAuY2xvc2Uge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnBhZ2VfY29udGVudCAuZmlsZV9jb250YWluZXIgLmZpbGVfY29udGFpbmVyX3dyYXAgLmZpbGVfY29udGFpbmVyX2Zvcm0ge1xuICBwYWRkaW5nLWxlZnQ6IDExNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMTVweDtcbn1cbi5wYWdlX2NvbnRlbnQgLmZpbGVfY29udGFpbmVyIC5maWxlX2NvbnRhaW5lcl93cmFwIC5maWxlX2NvbnRhaW5lcl9mb3JtIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnBhZ2VfY29udGVudCAuZmlsZV9jb250YWluZXIgLmZpbGVfY29udGFpbmVyX3dyYXAgLmZpbGVfY29udGFpbmVyX2Zvcm0gLmZvcm0tZ3JvdXAgc2VsZWN0LFxuLnBhZ2VfY29udGVudCAuZmlsZV9jb250YWluZXIgLmZpbGVfY29udGFpbmVyX3dyYXAgLmZpbGVfY29udGFpbmVyX2Zvcm0gLmZvcm0tZ3JvdXAgLnNlbGVjdGVkX3RleHQge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3MtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvbGlzdC5zdmcpIHJpZ2h0IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMC43ZW0gdG9wIDUwJSwgMCAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1pbi13aWR0aDogOTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWNlYztcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAyOXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAucGFnZV9jb250ZW50IC5maWxlX2NvbnRhaW5lciAuZmlsZV9jb250YWluZXJfd3JhcCAuZmlsZV9jb250YWluZXJfZm9ybSAuZm9ybS1ncm91cCBzZWxlY3QsXG4ucGFnZV9jb250ZW50IC5maWxlX2NvbnRhaW5lciAuZmlsZV9jb250YWluZXJfd3JhcCAuZmlsZV9jb250YWluZXJfZm9ybSAuZm9ybS1ncm91cCAuc2VsZWN0ZWRfdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuLnBhZ2VfY29udGVudCAuZmlsZV9jb250YWluZXIgLmZpbGVfY29udGFpbmVyX3dyYXAgLmZpbGVfY29udGFpbmVyX2Zvcm0gLmZvcm0tZ3JvdXAgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlY2VjO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5wYWdlX2NvbnRlbnQgLmZpbGVfY29udGFpbmVyIC5maWxlX2NvbnRhaW5lcl93cmFwIC5maWxlX2NvbnRhaW5lcl9mb3JtIC5mb3JtLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWNhY2FjO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucGFnZV9jb250ZW50IC5maWxlX2NvbnRhaW5lciAuZmlsZV9jb250YWluZXJfd3JhcCAuZmlsZV9jb250YWluZXJfZm9ybSAuZm9ybS1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgLnBhZ2VfY29udGVudCAuZmlsZV9jb250YWluZXIgLmZpbGVfY29udGFpbmVyX3dyYXAgLmZpbGVfY29udGFpbmVyX2Zvcm0gLmZvcm0tZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuLnBhZ2VfY29udGVudCAuZmlsZV9jb250YWluZXIgLmZpbGVfY29udGFpbmVyX3dyYXAgLmZpbGVfY29udGFpbmVyX2Zvcm0gYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQjg5NDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOXB4IDE1cHggOXB4O1xuICBiYWNrZ3JvdW5kOiAjMDBCODk0O1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucGFnZV9jb250ZW50IC5maWxlX2NvbnRhaW5lciAuZmlsZV9jb250YWluZXJfd3JhcCAuZmlsZV9jb250YWluZXJfZm9ybSBidXR0b246aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJveC1zaGFkb3c6IDBweCAxN3B4IDEwcHggLTEwcHggcmdiYSgwLCAxODQsIDE0OCwgMC4zKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMzAwbXM7XG59XG4ucGFnZV9jb250ZW50IC5maWxlX2NvbnRhaW5lciAuZmlsZV9jb250YWluZXJfd3JhcCAuZmlsZV9jb250YWluZXJfZm9ybSBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnBhZ2VfY29udGVudCAuZmlsZV9jb250YWluZXIgLmZpbGVfY29udGFpbmVyX3dyYXAgLmZpbGVfY29udGFpbmVyX2Zvcm0gYnV0dG9uOnZpc2l0ZWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5wYWdlX2NvbnRlbnQgLmZpbGVfY29udGFpbmVyIC5maWxlX2NvbnRhaW5lcl93cmFwIC5maWxlX2NvbnRhaW5lcl9mb3JtIGJ1dHRvbiAuc3Bpbm5lci1ib3JkZXIge1xuICBzdHJva2U6ICMwMEI4OTQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ucGFnZV9jb250ZW50IC5maWxlX2NvbnRhaW5lciAuZmlsZV9jb250YWluZXJfd3JhcCAub3V0cHV0X3RleHRfd3JhcCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0QTRBNEE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAwcHggMjVweCAyNXB4IDI1cHg7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIGNvbG9yOiAjMDBCODk0O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnBhZ2VfY29udGVudCAuZmlsZV9jb250YWluZXIgLmZpbGVfY29udGFpbmVyX3dyYXAgLm91dHB1dF90ZXh0X3dyYXAgLnJlc3BvbmNlRXJyb3Ige1xuICBjb2xvcjogIzRhNGE0YTtcbn1cbi5wYWdlX2NvbnRlbnQgLmZpbGVfY29udGFpbmVyIC50YWJsZV9jb250YWluZXJfd3JhcCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnBhZ2VfY29udGVudCAuZmlsZV9jb250YWluZXIgLnRhYmxlX2NvbnRhaW5lcl93cmFwIC5kci10YWJsZSB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnBhZ2VfY29udGVudCAuZmlsZV9jb250YWluZXIgLnRhYmxlX2NvbnRhaW5lcl93cmFwIC5kci10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnBhZ2VfY29udGVudCAuZmlsZV9jb250YWluZXIgLnRhYmxlX2NvbnRhaW5lcl93cmFwIC5kci10YWJsZSAudGFibGUtaGVhZGVyIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwQjg5NDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufVxuLnBhZ2VfY29udGVudCAuZmlsZV9jb250YWluZXIgLnRhYmxlX2NvbnRhaW5lcl93cmFwIC5kci10YWJsZSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6ICM5NTk3OTU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5wYWdlX2NvbnRlbnQgLmZpbGVfY29udGFpbmVyIC50YWJsZV9jb250YWluZXJfd3JhcCAuZHItdGFibGUgdHIgdGgge1xuICBtaW4td2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWNlYyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzRhNGE0YTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnBhZ2VfY29udGVudCAuZmlsZV9jb250YWluZXIgLnRhYmxlX2NvbnRhaW5lcl93cmFwIC5kci10YWJsZSAuYnV0dG9uLXN0eWxlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzk1OTc5NTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGl0bGVfb3V0cHV0IHtcbiAgY29sb3I6ICM5YTlhOWE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jcmVhdGVuZXdfd3JhcCB7XG4gIHBhZGRpbmc6IDI1cHggMDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDk2MXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAubG9hZGluZy1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAyMCU7XG4gIHotaW5kZXg6IDk5O1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAudG9wX2hlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNDZweDtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gIHotaW5kZXg6IDk5O1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAudG9wX2hlYWRlciB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLnRvcF9oZWFkZXIgdWwgbGkge1xuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLnRvcF9oZWFkZXIgdWwgbGkge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLnRvcF9oZWFkZXIgdWwgbGkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAudG9wX2hlYWRlciB1bCBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCODk0O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmNsb3NlX2NvbmZpZ19mb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICB6LWluZGV4OiA5OTtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmNsb3NlX2NvbmZpZ19mb3JtIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCBsYWJlbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjOUE5QTlBO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmlucHV0X2dyb3VwIGxhYmVsLmRpc2FibGUge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuaW5wdXRfZ3JvdXAgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlY2VjO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgd2lkdGg6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuaW5wdXRfZ3JvdXAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhY2FjYWM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmlucHV0X2dyb3VwIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNXB4O1xuICB0b3A6IDM1cHg7XG4gIHotaW5kZXg6IDk7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuaW5wdXRfZ3JvdXAgYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQjg5NDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOXB4IDE1cHggOXB4O1xuICBiYWNrZ3JvdW5kOiAjMDBCODk0O1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmlucHV0X2dyb3VwIGJ1dHRvbjpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKDAsIDE4NCwgMTQ4LCAwLjMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmlucHV0X2dyb3VwIGJ1dHRvbjp2aXNpdGVkIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuaW5wdXRfZ3JvdXAgc2VsZWN0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW9zLWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL2xpc3Quc3ZnKSByaWdodCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDAuN2VtIHRvcCA1MCUsIDAgMDtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtaW4td2lkdGg6IDk1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVjZWM7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogMjUwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmlucHV0X2dyb3VwIHNlbGVjdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmlucHV0X2dyb3VwIC5zZWxlY3RlZF90ZXh0IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW9zLWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL2xpc3Quc3ZnKSByaWdodCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IDAuN2VtIHRvcCA1MCUsIDAgMDtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtaW4td2lkdGg6IDk1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVjZWM7XG4gIHdpZHRoOiAxMDAlO1xuICBsaW5lLWhlaWdodDogMjlweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA0MXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgbWF4LXdpZHRoOiAyODEuMTFweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCAuc2VsZWN0ZWRfdGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmlucHV0X2dyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5pdGlhbDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMHB4IDFweCA0cHggMC41cHg7XG4gIC1tb3otYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAxcHggNHB4IDAuNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwcHggMXB4IDRweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyODFweDtcbiAgdG9wOiAzMnB4O1xuICB6LWluZGV4OiA5OTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmlucHV0X2dyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmlucHV0X2dyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmlucHV0X2dyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCODk0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMnB4O1xuICBvcGFjaXR5OiAwLjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuaW5wdXRfZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xuICB3aWR0aDogNnB4O1xuICB0b3A6IDFweDtcbiAgbGVmdDogNy41cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiA5OTtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxOXB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEI4OTQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xMnMsIGJvcmRlci1jb2xvciAwLjA4cztcbiAgYmFja2dyb3VuZDogIzAwQjg5NDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmlucHV0X2dyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCBsYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuaW5wdXRfZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpIC5jaGVja2JveF93cmFwIGxhYmVsOmJlZm9yZSB7XG4gIGxlZnQ6IDkzJSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgbGFiZWw6YWZ0ZXIge1xuICBsZWZ0OiA5MCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmlucHV0X2dyb3VwIC5kcm9wZG93bl9tdWx0aXNlbGVjdCB1bCBsaSAuY2hlY2tib3hfd3JhcCAuZm9ybS1ncm91cCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWwge1xuICBjb2xvcjogIzAwQjg5NDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCAuZHJvcGRvd25fbXVsdGlzZWxlY3QgdWwgbGkgLmNoZWNrYm94X3dyYXAgLmZvcm0tZ3JvdXAgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDEzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBzb2xpZCAjMDBCODk0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDAgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpICFpbXBvcnRhbnQ7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuaW5wdXRfZ3JvdXAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxODQsIDE0OCwgMC4wNik7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCBwIHtcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5ncm91cCAuY2hlY2tib3hfd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXBfMiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXAgLmNoZWNrYm94X3dyYXAsXG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXBfMiAuY2hlY2tib3hfd3JhcCB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXAgLmNoZWNrYm94X3dyYXAgaW5wdXRbdHlwZT1jaGVja2JveF0sXG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXBfMiAuY2hlY2tib3hfd3JhcCBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXAgLmNoZWNrYm94X3dyYXAgaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbCxcbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5ncm91cF8yIC5jaGVja2JveF93cmFwIGlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXAgLmNoZWNrYm94X3dyYXAgaW5wdXRbdHlwZT1jaGVja2JveF0gKyBsYWJlbDpiZWZvcmUsXG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXBfMiAuY2hlY2tib3hfd3JhcCBpbnB1dFt0eXBlPWNoZWNrYm94XSArIGxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTlweDtcbiAgaGVpZ2h0OiAxOXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCODk0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMnB4O1xuICBvcGFjaXR5OiAwLjY7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXAgLmNoZWNrYm94X3dyYXAgaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSxcbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5ncm91cF8yIC5jaGVja2JveF93cmFwIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUge1xuICB3aWR0aDogNnB4O1xuICB0b3A6IDFweDtcbiAgbGVmdDogNy41cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiA5OTtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5ncm91cCAuY2hlY2tib3hfd3JhcCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIsXG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXBfMiAuY2hlY2tib3hfd3JhcCBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE5cHg7XG4gIGhlaWdodDogMTlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQjg5NDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTJzLCBib3JkZXItY29sb3IgMC4wOHM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjEycywgYm9yZGVyLWNvbG9yIDAuMDhzO1xuICBiYWNrZ3JvdW5kOiAjMDBCODk0O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXAgLmNoZWNrYm94X3dyYXAgLmZvcm0tZ3JvdXAsXG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXBfMiAuY2hlY2tib3hfd3JhcCAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5ncm91cCAuY2hlY2tib3hfd3JhcCAuZm9ybS1ncm91cCBsYWJlbCxcbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5ncm91cF8yIC5jaGVja2JveF93cmFwIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXAgLnJhZGlvX3dyYXAsXG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXBfMiAucmFkaW9fd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXAgLnJhZGlvX3dyYXAgLmZvcm0tZ3JvdXAsXG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXBfMiAucmFkaW9fd3JhcCAuZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmdyb3VwIC5yYWRpb193cmFwIC5mb3JtLWdyb3VwIFt0eXBlPXJhZGlvXTpjaGVja2VkLCAuY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXAgLnJhZGlvX3dyYXAgLmZvcm0tZ3JvdXAgW3R5cGU9cmFkaW9dOm5vdCg6Y2hlY2tlZCksXG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXBfMiAucmFkaW9fd3JhcCAuZm9ybS1ncm91cCBbdHlwZT1yYWRpb106Y2hlY2tlZCxcbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5ncm91cF8yIC5yYWRpb193cmFwIC5mb3JtLWdyb3VwIFt0eXBlPXJhZGlvXTpub3QoOmNoZWNrZWQpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0Ny44JTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiA1cHg7XG4gIHotaW5kZXg6IDk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXAgLnJhZGlvX3dyYXAgLmZvcm0tZ3JvdXAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbCwgLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmdyb3VwIC5yYWRpb193cmFwIC5mb3JtLWdyb3VwIFt0eXBlPXJhZGlvXTpub3QoOmNoZWNrZWQpICsgbGFiZWwsXG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXBfMiAucmFkaW9fd3JhcCAuZm9ybS1ncm91cCBbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsLFxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmdyb3VwXzIgLnJhZGlvX3dyYXAgLmZvcm0tZ3JvdXAgW3R5cGU9cmFkaW9dOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXAgLnJhZGlvX3dyYXAgLmZvcm0tZ3JvdXAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDpiZWZvcmUsIC5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5ncm91cCAucmFkaW9fd3JhcCAuZm9ybS1ncm91cCBbdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSArIGxhYmVsOmJlZm9yZSxcbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5ncm91cF8yIC5yYWRpb193cmFwIC5mb3JtLWdyb3VwIFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmdyb3VwXzIgLnJhZGlvX3dyYXAgLmZvcm0tZ3JvdXAgW3R5cGU9cmFkaW9dOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRBNEE0QTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5ncm91cCAucmFkaW9fd3JhcCAuZm9ybS1ncm91cCBbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmFmdGVyLFxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmdyb3VwXzIgLnJhZGlvX3dyYXAgLmZvcm0tZ3JvdXAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIGJhY2tncm91bmQ6ICMwMEI4OTQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmdyb3VwIC5yYWRpb193cmFwIC5mb3JtLWdyb3VwIFt0eXBlPXJhZGlvXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YWZ0ZXIsXG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuZ3JvdXBfMiAucmFkaW9fd3JhcCAuZm9ybS1ncm91cCBbdHlwZT1yYWRpb106bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYmFja2dyb3VuZDogIzAwQjg5NDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgbGVmdDogNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5ncm91cCAucmFkaW9fd3JhcCAuZm9ybS1ncm91cCBbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVsOmFmdGVyLFxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmdyb3VwXzIgLnJhZGlvX3dyYXAgLmZvcm0tZ3JvdXAgW3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9ybV93cmFwIC5hbGVydCB7XG4gIHBhZGRpbmc6IDBweCAwIDEwcHggMDtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDcsIDE4MSwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmFsZXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAuYWxlcnQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb3JtX3dyYXAgLmFsZXJ0IGkge1xuICBjb2xvcjogI0Y3QjUwMDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZvcm1fd3JhcCAudXNlcl9hZGRfd3JhcCB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZmlsZV93cmFwIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZpbGVfd3JhcCAuc2FtcGxlX3RibF9jb250YWluZXIge1xuICBtYXJnaW46IDAgMjVweDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZmlsZV93cmFwIC5zYW1wbGVfdGJsX2NvbnRhaW5lciB0YWJsZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5maWxlX3dyYXAgLnNhbXBsZV90YmxfY29udGFpbmVyIHRhYmxlIHRyIHRkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5maWxlX3dyYXAgLnNhbXBsZV90YmxfY29udGFpbmVyIHRhYmxlIHRyIHRkIGEge1xuICBjb2xvcjogIzAwQjg5NDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5vZmZlcl9jb2RlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWNlYztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDMzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTVweCAwO1xuICBtYXJnaW4tbGVmdDogOCU7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLm9mZmVyX2NvZGUgbGFiZWwge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogIzlBOUE5QTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAub2ZmZXJfY29kZSBsYWJlbC5kaXNhYmxlIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLm9mZmVyX2NvZGUgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5vZmZlcl9jb2RlIGlucHV0IHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWNlYztcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLm9mZmVyX2NvZGUgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNhY2FjYWM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAub2ZmZXJfY29kZSBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5vZmZlcl9jb2RlIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZmlsZV9mb3JtYXRfd3JhcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVjZWM7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDM3MHB4O1xuICBwYWRkaW5nOiAzMHB4IDQ1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZpbGVfZm9ybWF0X3dyYXAgLmZvcm1fd3JhcCAuaW5wdXRfZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmZpbGVfZm9ybWF0X3dyYXAgLmZvcm1fd3JhcCAuaW5wdXRfZ3JvdXAgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZmlsZV9mb3JtYXRfd3JhcCAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA5cHg7XG4gIHRvcDogMzVweDtcbiAgei1pbmRleDogOTtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZm9sZGVyX3dyYXAge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5mb2xkZXJfd3JhcCAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCBpbnB1dCB7XG4gIG1pbi13aWR0aDogNDIwcHg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFsZXJ0X3dyYXAsXG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmRxcl93cmFwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuYWxlcnRfd3JhcCAuZm9ybV93cmFwIC5pbnB1dF9ncm91cCAudXNlcl9hZGRfd3JhcCxcbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuZHFyX3dyYXAgLmZvcm1fd3JhcCAuaW5wdXRfZ3JvdXAgLnVzZXJfYWRkX3dyYXAge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5hbGVydF93cmFwIC5mb3JtX3dyYXAgLmlucHV0X2dyb3VwIGksXG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmRxcl93cmFwIC5mb3JtX3dyYXAgLmlucHV0X2dyb3VwIGkge1xuICBjb2xvcjogIzAwQjg5NDtcbiAgbWFyZ2luOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLnJlcG9ydF93cmFwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuc2V0dGluZ193cmFwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuc2V0dGluZ193cmFwIC5mb3JtX3dyYXAgLmlucHV0X2dyb3VwIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLnNldHRpbmdfd3JhcCBtYXQtcGFuZWwtdGl0bGUge1xuICBwYWRkaW5nOiAwcHggMCAxMHB4IDA7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5zZXR0aW5nX3dyYXAgbWF0LXBhbmVsLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLnNldHRpbmdfd3JhcCBtYXQtcGFuZWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5hbGxfZGF0YV93cmFwIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XG4gIG1heC1oZWlnaHQ6IDM5MHB4O1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5hbGxfZGF0YV93cmFwIC5kci10YWJsZSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjlmOWY5O1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5hbGxfZGF0YV93cmFwIC5kci10YWJsZSAudGFibGUtaGVhZGVyIHRoIHtcbiAgd2lkdGg6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5hbGxfZGF0YV93cmFwIC5kci10YWJsZSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzk1OTc5NTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5hbGxfZGF0YV93cmFwIC5kci10YWJsZSB0ciB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlY2VjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNGE0YTRhO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFsbF9kYXRhX3dyYXAgLmRyLXRhYmxlIC5idXR0b24tc3R5bGUge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjOTU5Nzk1O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQjg5NDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOXB4IDE1cHggOXB4O1xuICBiYWNrZ3JvdW5kOiAjMDBCODk0O1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gYnV0dG9uOmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoMCwgMTg0LCAxNDgsIDAuMyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5hY3Rpb25fYnRuIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gYnV0dG9uOnZpc2l0ZWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuYWN0aW9uX2J0biBidXR0b246bnRoLWNoaWxkKDIpLCAuY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gYnV0dG9uOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuYWN0aW9uX2J0biAuY2xvc2Uge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAjZWVlY2VjO1xuICBjb2xvcjogIzRBNEE0QTtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuYWN0aW9uX2J0biAuZHItdGFibGUge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gLmRyLXRhYmxlIHRoIHtcbiAgZm9udC1zaXplOiA5cHg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gLmRyLXRhYmxlIC50YWJsZS1oZWFkZXIge1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgY29sb3I6ICM5NTk3OTU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuYWN0aW9uX2J0biAuZHItdGFibGUgLm1vYmlsZS10YWJsZS10ciB0aCB7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5hY3Rpb25fYnRuIC50ZXh0YXJlYV93cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gLnRleHRhcmVhX3dyYXAgLmJ0bl93cmFwX2NhbmNlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuYWN0aW9uX2J0biAudGV4dGFyZWFfd3JhcCAuYnRuX3dyYXBfY2FuY2VsIC5hY3Rpb25fYnRuX2NhbmNlbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEI4OTQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDlweCAxNXB4IDlweDtcbiAgYmFja2dyb3VuZDogIzAwQjg5NDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogIzAwQjg5NDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuYWN0aW9uX2J0biAudGV4dGFyZWFfd3JhcCAuYnRuX3dyYXBfY2FuY2VsIC5hY3Rpb25fYnRuX2NhbmNlbDpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKDAsIDE4NCwgMTQ4LCAwLjMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuYWN0aW9uX2J0biAudGV4dGFyZWFfd3JhcCAuYnRuX3dyYXBfY2FuY2VsIC5hY3Rpb25fYnRuX2NhbmNlbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gLnRleHRhcmVhX3dyYXAgLmJ0bl93cmFwX2NhbmNlbCAuYWN0aW9uX2J0bl9jYW5jZWw6dmlzaXRlZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5hY3Rpb25fYnRuIC50ZXh0YXJlYV93cmFwIC5idG5fd3JhcF9jYW5jZWwgLmJvdHRvbV9hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIHRvcDogLTUzJTtcbiAgbGVmdDogNzUlO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDE3cHggc29saWQgI2YzZjNmMztcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuYWN0aW9uX2J0biAudGV4dGFyZWFfd3JhcCAuYnRuX3dyYXBfY2FuY2VsIC50b29sX3RpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNTczJTtcbiAgbGVmdDogNjYlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMzAwcHg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gLnRleHRhcmVhX3dyYXAgLmJ0bl93cmFwX2NhbmNlbCAudG9vbF90aXAgLm1vZGFsX3RpdGxlIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gLnRleHRhcmVhX3dyYXAgLmJ0bl93cmFwX2NhbmNlbCAudG9vbF90aXAgLm1vZGFsX2JvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5hY3Rpb25fYnRuIC50ZXh0YXJlYV93cmFwIC5idG5fd3JhcF9jYW5jZWwgLnRvb2xfdGlwIC5tb2RhbF9ib2R5IC50ZXh0YXJlYV9pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBtaW4taGVpZ2h0OiA5MHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuYWN0aW9uX2J0biAudGV4dGFyZWFfd3JhcCAuYnRuX3dyYXBfY2FuY2VsIC50b29sX3RpcCAubW9kYWxfYm9keSAuZXJyb3J0eHQge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjRTUzOTM1O1xuICBwYWRkaW5nOiAzcHg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gLnRleHRhcmVhX3dyYXAgLmJ0bl93cmFwX2NhbmNlbCAudG9vbF90aXAgLm1vZGFsX2Zvb3RlciB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gLnRleHRhcmVhX3dyYXAgLmJ0bl93cmFwX2NhbmNlbCAudG9vbF90aXAgLm1vZGFsX2Zvb3RlciAuYWN0aW9uX2J0bl9jYW5jZWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDBCODk0O1xuICBib3gtc2hhZG93OiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiA5cHggMTVweCA5cHg7XG4gIGJhY2tncm91bmQ6ICMwMEI4OTQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgY29sb3I6ICMwMEI4OTQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuYWN0aW9uX2J0biAudGV4dGFyZWFfd3JhcCAuYnRuX3dyYXBfY2FuY2VsIC50b29sX3RpcCAubW9kYWxfZm9vdGVyIC5hY3Rpb25fYnRuX2NhbmNlbDpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKDAsIDE4NCwgMTQ4LCAwLjMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuYWN0aW9uX2J0biAudGV4dGFyZWFfd3JhcCAuYnRuX3dyYXBfY2FuY2VsIC50b29sX3RpcCAubW9kYWxfZm9vdGVyIC5hY3Rpb25fYnRuX2NhbmNlbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gLnRleHRhcmVhX3dyYXAgLmJ0bl93cmFwX2NhbmNlbCAudG9vbF90aXAgLm1vZGFsX2Zvb3RlciAuYWN0aW9uX2J0bl9jYW5jZWw6dmlzaXRlZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5hY3Rpb25fYnRuIC50ZXh0YXJlYV93cmFwIC5idG5fd3JhcF9jYW5jZWwgLnRvb2xfdGlwIC5tb2RhbF9mb290ZXIgLmFjdGlvbl9idG5fc2F2ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEI4OTQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDlweCAxNXB4IDlweDtcbiAgYmFja2dyb3VuZDogIzAwQjg5NDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gLnRleHRhcmVhX3dyYXAgLmJ0bl93cmFwX2NhbmNlbCAudG9vbF90aXAgLm1vZGFsX2Zvb3RlciAuYWN0aW9uX2J0bl9zYXZlOmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoMCwgMTg0LCAxNDgsIDAuMyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5hY3Rpb25fYnRuIC50ZXh0YXJlYV93cmFwIC5idG5fd3JhcF9jYW5jZWwgLnRvb2xfdGlwIC5tb2RhbF9mb290ZXIgLmFjdGlvbl9idG5fc2F2ZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gLnRleHRhcmVhX3dyYXAgLmJ0bl93cmFwX2NhbmNlbCAudG9vbF90aXAgLm1vZGFsX2Zvb3RlciAuYWN0aW9uX2J0bl9zYXZlOnZpc2l0ZWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuYWN0aW9uX2J0biAudGV4dGFyZWFfd3JhcCAuYnRuX3dyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4uY3JlYXRlbmV3X3dyYXAgLmNyZWF0ZV9uZXdfY29udGFpbmVyIC5mb3JtX3NlY3Rpb24gLmFjdGlvbl9idG4gLnRleHRhcmVhX3dyYXAgLmJ0bl93cmFwIC5hY3Rpb25fYnRuX2NhbmNlbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEI4OTQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDlweCAxNXB4IDlweDtcbiAgYmFja2dyb3VuZDogIzAwQjg5NDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogIzAwQjg5NDtcbn1cbi5jcmVhdGVuZXdfd3JhcCAuY3JlYXRlX25ld19jb250YWluZXIgLmZvcm1fc2VjdGlvbiAuYWN0aW9uX2J0biAudGV4dGFyZWFfd3JhcCAuYnRuX3dyYXAgLmFjdGlvbl9idG5fY2FuY2VsOmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3gtc2hhZG93OiAwcHggMTdweCAxMHB4IC0xMHB4IHJnYmEoMCwgMTg0LCAxNDgsIDAuMyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5hY3Rpb25fYnRuIC50ZXh0YXJlYV93cmFwIC5idG5fd3JhcCAuYWN0aW9uX2J0bl9jYW5jZWw6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5hY3Rpb25fYnRuIC50ZXh0YXJlYV93cmFwIC5idG5fd3JhcCAuYWN0aW9uX2J0bl9jYW5jZWw6dmlzaXRlZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmNyZWF0ZW5ld193cmFwIC5jcmVhdGVfbmV3X2NvbnRhaW5lciAuZm9ybV9zZWN0aW9uIC5hY3Rpb25fYnRuIC50ZXh0YXJlYV93cmFwIC5idG5fd3JhcCAuYWN0aW9uX2J0bl9zYXZlIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ucmVtYXJrX3dyYXAgLm1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xufVxuLnJlbWFya193cmFwIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDMlO1xuICB0b3A6IDUzJTtcbn1cbi5yZW1hcmtfd3JhcCAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtaGVhZGVyIHtcbiAgcGFkZGluZzogMTVweCAxNXB4IDBweCAxNXB4O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLnJlbWFya193cmFwIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6ICM5YTlhOWE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJlbWFya193cmFwIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgdG9wOiAyOHB4O1xuICByaWdodDogMjlweDtcbn1cbi5yZW1hcmtfd3JhcCAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xufVxuLnJlbWFya193cmFwIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IC50ZXh0YXJlYV9pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICBtaW4taGVpZ2h0OiA5MHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5yZW1hcmtfd3JhcCAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cbi5yZW1hcmtfd3JhcCAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtZm9vdGVyIC5hY3Rpb25fYnRuX2NhbmNlbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEI4OTQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDlweCAxNXB4IDlweDtcbiAgYmFja2dyb3VuZDogIzAwQjg5NDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBjb2xvcjogIzAwQjg5NDtcbn1cbi5yZW1hcmtfd3JhcCAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtZm9vdGVyIC5hY3Rpb25fYnRuX2NhbmNlbDpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKDAsIDE4NCwgMTQ4LCAwLjMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcbn1cbi5yZW1hcmtfd3JhcCAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtZm9vdGVyIC5hY3Rpb25fYnRuX2NhbmNlbDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucmVtYXJrX3dyYXAgLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWZvb3RlciAuYWN0aW9uX2J0bl9jYW5jZWw6dmlzaXRlZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnJlbWFya193cmFwIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1mb290ZXIgLmFjdGlvbl9idG5fc2F2ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMEI4OTQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDlweCAxNXB4IDlweDtcbiAgYmFja2dyb3VuZDogIzAwQjg5NDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4td2lkdGg6IDEyMHB4O1xufVxuLnJlbWFya193cmFwIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1mb290ZXIgLmFjdGlvbl9idG5fc2F2ZTpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKDAsIDE4NCwgMTQ4LCAwLjMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcbn1cbi5yZW1hcmtfd3JhcCAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtZm9vdGVyIC5hY3Rpb25fYnRuX3NhdmU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnJlbWFya193cmFwIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1mb290ZXIgLmFjdGlvbl9idG5fc2F2ZTp2aXNpdGVkIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1oZWFkZXIge1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtaGVhZGVyIGJ1dHRvbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDNweDtcbiAgdG9wOiAycHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG59XG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSBmb3JtIC51c2VyX2FkZF93cmFwIC5jb2wtMyB7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSBmb3JtIC51c2VyX2FkZF93cmFwIC5pbnB1dF9ncm91cCBsYWJlbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiAjOUE5QTlBO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgZm9ybSAudXNlcl9hZGRfd3JhcCAuaW5wdXRfZ3JvdXAgbGFiZWwuZGlzYWJsZSB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgZm9ybSAudXNlcl9hZGRfd3JhcCAuaW5wdXRfZ3JvdXAgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgZm9ybSAudXNlcl9hZGRfd3JhcCAuaW5wdXRfZ3JvdXAgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlY2VjO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBsaW5lLWhlaWdodDogMjlweDtcbn1cbi5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IGZvcm0gLnVzZXJfYWRkX3dyYXAgLmlucHV0X2dyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYWNhY2FjO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSBmb3JtIC51c2VyX2FkZF93cmFwIC5pbnB1dF9ncm91cCBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiwgLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgZm9ybSAudXNlcl9hZGRfd3JhcCAuaW5wdXRfZ3JvdXAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgZm9ybSAudXNlcl9hZGRfd3JhcCAuaW5wdXRfZ3JvdXAgYnV0dG9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwQjg5NDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOXB4IDE1cHggOXB4O1xuICBiYWNrZ3JvdW5kOiAjMDBCODk0O1xuICBvdXRsaW5lOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1pbi13aWR0aDogYXV0bztcbn1cbi5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IGZvcm0gLnVzZXJfYWRkX3dyYXAgLmlucHV0X2dyb3VwIGJ1dHRvbjpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm94LXNoYWRvdzogMHB4IDE3cHggMTBweCAtMTBweCByZ2JhKDAsIDE4NCwgMTQ4LCAwLjMpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAzMDBtcztcbn1cbi5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IGZvcm0gLnVzZXJfYWRkX3dyYXAgLmlucHV0X2dyb3VwIGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAubW9kYWwtYm9keSBmb3JtIC51c2VyX2FkZF93cmFwIC5pbnB1dF9ncm91cCBidXR0b246dmlzaXRlZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgZm9ybSAudXNlcl9hZGRfd3JhcCAuaW5wdXRfZ3JvdXAgLmFsZXJ0IHtcbiAgcGFkZGluZzogMHB4IDAgMTBweCAwO1xuICBjb2xvcjogIzRBNEE0QTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiAjRkY0QjRCO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5tb2RhbC1ib2R5IGZvcm0gLnVzZXJfYWRkX3dyYXAgLmlucHV0X2dyb3VwIC5hbGVydCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLm1vZGFsLWJvZHkgZm9ybSAudXNlcl9hZGRfd3JhcCAuaW5wdXRfZ3JvdXAgLmFsZXJ0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxLjNyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XG59XG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgZmxleDogMSAxIGF1dG87XG4gIC8qIHBhZGRpbmc6IDEuMjVyZW07ICovXG4gIHBhZGRpbmc6IDE1cHg7XG59XG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAuY2FyZCAuY2FyZC1ib2R5IC5hbGxfZGF0YV93cmFwIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XG4gIG1heC1oZWlnaHQ6IDM5MHB4O1xufVxuLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLmNhcmQgLmNhcmQtYm9keSAuYWxsX2RhdGFfd3JhcCAuZHItdGFibGUgdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y5ZjlmOTtcbn1cbi5tb2RhbCAubW9kYWwtZGlhbG9nIC5tb2RhbC1jb250ZW50IC5jYXJkIC5jYXJkLWJvZHkgLmFsbF9kYXRhX3dyYXAgLmRyLXRhYmxlIC50YWJsZS1oZWFkZXIgdGgge1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgY29sb3I6ICM0YTRhNGE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IC0xcHg7XG59XG4ubW9kYWwgLm1vZGFsLWRpYWxvZyAubW9kYWwtY29udGVudCAuY2FyZCAuY2FyZC1ib2R5IC5hbGxfZGF0YV93cmFwIC5kci10YWJsZSB0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBjb2xvcjogIzk1OTc5NTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLmNhcmQgLmNhcmQtYm9keSAuYWxsX2RhdGFfd3JhcCAuZHItdGFibGUgdHIgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWNlYyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzRhNGE0YTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm1vZGFsIC5tb2RhbC1kaWFsb2cgLm1vZGFsLWNvbnRlbnQgLmNhcmQgLmNhcmQtYm9keSAuYWxsX2RhdGFfd3JhcCAuZHItdGFibGUgLmJ1dHRvbi1zdHlsZSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICM5NTk3OTU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iLCJAaW1wb3J0IFwic3JjL3Njc3MvdmFyaWFibGVzLnNjc3NcIjtcclxuQGltcG9ydCBcInNyYy9zY3NzL21peGlucy5zY3NzXCI7XHJcbi5wYWdlX2NvbnRlbnQge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgLnRvcF9oZWFkZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgIC5zZWFyY2hfZmlsdGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNDAlO1xyXG4gICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBpbnB1dDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5idG5fd3JhcCB7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbjtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICAgICAgICAgIGNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bl92YWxpZGF0ZSB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29uZmlnX3RhYmxlIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAubG9hZGluZy1jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgICAgdG9wOiA0MCU7XHJcbiAgICAgICAgbGVmdDogNDUlO1xyXG4gICAgICB9XHJcbiAgICAgIC50YWJsZSB7XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5maWxlX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLmJhY2tidG5fd3JhcCB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICAgIC5jbG9zZXtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmlsZV9jb250YWluZXJfd3JhcCB7XHJcbiAgICAgIC5maWxlX2NvbnRhaW5lcl9mb3Jte1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTE1cHg7XHJcbiAgICAgICAgLmZvcm0tZ3JvdXAge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgc2VsZWN0LFxyXG4gICAgICAgICAgLnNlbGVjdGVkX3RleHQge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBzZWxlY3RCb3g7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBpbnB1dDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbjtcclxuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuc3Bpbm5lci1ib3JkZXIge1xyXG4gICAgICAgICAgICBzdHJva2U6ICR0aGVtZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLm91dHB1dF90ZXh0X3dyYXB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBtYXJnaW46IDBweCAyNXB4IDI1cHggMjVweCA7XHJcbiAgICAgICAgcGFkZGluZzogMTRweDtcclxuICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgLnJlc3BvbmNlRXJyb3J7XHJcbiAgICAgICAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgICAgICAgIC8vIG1hcmdpbjogMHB4IDI1cHggcHggMjVweCA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGFibGVfY29udGFpbmVyX3dyYXB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAuZHItdGFibGUge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICAgICAgICAgY29sb3I6ICM5NTk3OTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlY2VjICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNGE0YTRhO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b24tc3R5bGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzk1OTc5NTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50aXRsZV9vdXRwdXQge1xyXG4gIGNvbG9yOiAjOWE5YTlhO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLy8gY3JlYXRlIG9yIGVkaXRcclxuXHJcbi5jcmVhdGVuZXdfd3JhcCB7XHJcbiAgcGFkZGluZzogMjVweCAwO1xyXG4gIC5jcmVhdGVfbmV3X2NvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDk2MXB4O1xyXG4gICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICAubG9hZGluZy1jb250YWluZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdG9wOiAyMCU7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgfVxyXG4gICAgLnRvcF9oZWFkZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTQ2cHg7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhlbWUtY29sb3I7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2xvc2VfY29uZmlnX2Zvcm0ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICB0b3A6IDEwcHg7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvcm1fc2VjdGlvbiB7XHJcbiAgICAgIC5mb3JtX3dyYXAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgLmlucHV0X2dyb3VwIHtcclxuICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbGFiZWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGlucHV0O1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMjVweDtcclxuICAgICAgICAgICAgdG9wOiAzNXB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgYnV0dG9uO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHNlbGVjdEJveDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc2VsZWN0ZWRfdGV4dCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHNlbGVjdEJveDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyODEuMTFweDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRyb3Bkb3duX211bHRpc2VsZWN0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgaW1nLWJveC1zaGFkb3c7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyODFweDtcclxuICAgICAgICAgICAgICB0b3A6IDMycHg7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAuY2hlY2tib3hfd3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGNoZWNrYm94O1xyXG4gICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGVmdDogOTMlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgJHRoZW1lLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdGhlbWUtY29sb3IsIDAuMDYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncm91cCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgLmNoZWNrYm94X3dyYXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JvdXBfMiB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JvdXAsXHJcbiAgICAgICAgLmdyb3VwXzIge1xyXG4gICAgICAgICAgLmNoZWNrYm94X3dyYXAge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBjaGVja2JveDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucmFkaW9fd3JhcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICAgICAgICBAaW5jbHVkZSByYWRpbzE7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmFsZXJ0IHtcclxuICAgICAgICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLWluZm8sIDAuMik7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1pbmZvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnVzZXJfYWRkX3dyYXAge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZmlsZV93cmFwIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAuc2FtcGxlX3RibF9jb250YWluZXIge1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDI1cHg7XHJcbiAgICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5vZmZlcl9jb2RlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBtaW4td2lkdGg6IDMzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4JTtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBsYWJlbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgQGluY2x1ZGUgaW5wdXQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5maWxlX2Zvcm1hdF93cmFwIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItbGlnaHQtZ3JleTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB3aWR0aDogMzcwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCA0NXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgLmZvcm1fd3JhcCB7XHJcbiAgICAgICAgICAuaW5wdXRfZ3JvdXAge1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDlweDtcclxuICAgICAgICAgICAgICB0b3A6IDM1cHg7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZm9sZGVyX3dyYXAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAgICAgLmZvcm1fd3JhcCB7XHJcbiAgICAgICAgICAuaW5wdXRfZ3JvdXAge1xyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA0MjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuYWxlcnRfd3JhcCxcclxuICAgICAgLmRxcl93cmFwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIC5mb3JtX3dyYXAge1xyXG4gICAgICAgICAgLmlucHV0X2dyb3VwIHtcclxuICAgICAgICAgICAgLnVzZXJfYWRkX3dyYXAge1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yZXBvcnRfd3JhcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNldHRpbmdfd3JhcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICAuZm9ybV93cmFwIHtcclxuICAgICAgICAgIC5pbnB1dF9ncm91cCB7XHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtYXQtcGFuZWwtdGl0bGUge1xyXG4gICAgICAgICAgQGluY2x1ZGUgcGFyYWdyYXBoO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hbGxfZGF0YV93cmFwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBvdmVybGF5O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDM5MHB4O1xyXG5cclxuICAgICAgICAuZHItdGFibGUge1xyXG4gICAgICAgICAgLy8gbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAvLyBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgdGFibGUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAudGFibGUtaGVhZGVyIHtcclxuICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWxpZ2h0LWdyZXk7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM0YTRhNGE7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM5NTk3OTU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAzMHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVjZWMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnV0dG9uLXN0eWxlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogIzk1OTc5NTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmFjdGlvbl9idG4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBidXR0b247XHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgyKSxcclxuICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xvc2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogJGNvbG9yLWxpZ2h0LWJsYWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRyLXRhYmxlIHtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzk1OTc5NTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gLm1vYmlsZS10YWJsZXtcclxuXHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAubW9iaWxlLXRhYmxlLXRyIHtcclxuICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0YXJlYV93cmFwIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgIC5idG5fd3JhcF9jYW5jZWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIC5hY3Rpb25fYnRuX2NhbmNlbCB7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgYnV0dG9uO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAudG9vbHRpcF93cmFwe1xyXG5cclxuICAgICAgICAgICAgLy8gICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIC8vICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgLy8gICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgLy8gICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIC8vICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAvLyAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIC8vICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIC8vICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuICAgICAgICAgICAgLy8gICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAvLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgLmJvdHRvbV9hcnJvdyB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgIHRvcDogLTUzJTtcclxuICAgICAgICAgICAgICBsZWZ0OiA3NSU7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxN3B4IHNvbGlkICNmM2YzZjM7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudG9vbF90aXAge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IC01NzMlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDY2JTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgICAgICAgIC5tb2RhbF90aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5tb2RhbF9ib2R5IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgLnRleHRhcmVhX2lucHV0IHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmVycm9ydHh0IHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXZhbGlkLWVycm9yO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5tb2RhbF9mb290ZXIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgICAgIC5hY3Rpb25fYnRuX2NhbmNlbCB7XHJcbiAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbjtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmFjdGlvbl9idG5fc2F2ZSB7XHJcbiAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbjtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYnRuX3dyYXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIC5hY3Rpb25fYnRuX2NhbmNlbCB7XHJcbiAgICAgICAgICAgICAgQGluY2x1ZGUgYnV0dG9uO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFjdGlvbl9idG5fc2F2ZSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5yZW1hcmtfd3JhcCB7XHJcbiAgLm1vZGFsIHtcclxuICAgIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAubW9kYWwtY29udGVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDEwMyU7XHJcbiAgICAgICAgdG9wOiA1MyU7XHJcbiAgICAgICAgLm1vZGFsLWhlYWRlciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMHB4IDE1cHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgLm1vZGFsLXRpdGxlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgY29sb3I6ICM5YTlhOWE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNsb3NlIHtcclxuICAgICAgICAgICAgdG9wOiAyOHB4O1xyXG4gICAgICAgICAgICByaWdodDogMjlweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XHJcbiAgICAgICAgICAudGV4dGFyZWFfaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNGE0YTRhO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbC1mb290ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgICAgIC5hY3Rpb25fYnRuX2NhbmNlbCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3Rpb25fYnRuX3NhdmUge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBidXR0b247XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAubW9kYWwtaGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBidXR0b24uY2xvc2Uge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDNweDtcclxuICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbC10aXRsZSB7XHJcbiAgICAgICAgICBAaW5jbHVkZSBwYXJhZ3JhcGg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAudXNlcl9hZGRfd3JhcCB7XHJcbiAgICAgICAgICAgIC5jb2wtMyB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5wdXRfZ3JvdXAge1xyXG4gICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGxhYmVsO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBpbnB1dDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJ1dHRvbjtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmFsZXJ0IHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHBhcmFncmFwaDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXJlZDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1vZGFsIHtcclxuICAubW9kYWwtZGlhbG9nIHtcclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgLmNhcmQge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuM3JlbTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgICAvKiBwYWRkaW5nOiAxLjI1cmVtOyAqL1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweDtcclxuXHJcbiAgICAgICAgICAuYWxsX2RhdGFfd3JhcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBvdmVybGF5O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzOTBweDtcclxuXHJcbiAgICAgICAgICAgIC5kci10YWJsZSB7XHJcbiAgICAgICAgICAgICAgLy8gbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgLy8gb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtZ3JleTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRhYmxlLWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodC1ncmV5O1xyXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICM0YTRhNGE7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMzBweDtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgICAgICAgICAgICB0b3A6IC0xcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICB0ciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTU5Nzk1O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIHRoIHtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWNlYyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmJ1dHRvbi1zdHlsZSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTU5Nzk1O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJcclxuLy8gZ2xvYmFsLXZhcmlhYmxlXHJcbiRoZWFkZXItY29sb3I6ICMyNjI2MjY7XHJcbiRib2R5LWJnLWNvbG9yOiAjRjNGM0YzO1xyXG4kdGhlbWUtY29sb3I6ICMwMEI4OTQ7XHJcbiRjb2xvci1yZWQ6ICNGRjRCNEI7XHJcbiRjb2xvci12YWxpZC1lcnJvcjojRTUzOTM1O1xyXG4kY29sb3ItaW52YWxpZC1lcnJvcjojQjcxYzFjO1xyXG4kY29sb3ItbWFnZW50YTogI2JjNjQ5YztcclxuJGNvbG9yLXBpbms6ICNmNDk0Yzg7XHJcbiRjb2xvci1ncmVlbjogIzg0QzE0MDtcclxuJGNvbG9yLWxpZ2h0LWdyZWVuOiAjQkNENTMzO1xyXG4kY29sb3ItYmx1ZTogIzk0ZDBlYTtcclxuJGNvbG9yLWRhcmstZ3JleTogIzlBOUE5QTtcclxuJGNvbG9yLWxpZ2h0LWdyZXk6ICNmOWY5Zjk7XHJcbiRjb2xvci1leHRyYS1saWdodC1ncmV5OiAjRjRGNEY0O1xyXG4kY29sb3Itb3JhbmdlOiAjRTM3ODI2O1xyXG4kY29sb3ItbGlnaHQtb3JhbmdlOiAjRUI5ODIyO1xyXG4kY29sb3ItZXh0cmEtbGlnaHQtb3JhbmdlOiAjRkNBRjE3O1xyXG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XHJcbiRib3JkZXItY29sb3I6ICNlZWVjZWM7XHJcbiRub3RpZmljYXRpb24tYmc6ICNjZWUzZjA7XHJcbiRjb2xvci1saWdodC1ibGFjazogIzRBNEE0QTtcclxuJGNvbG9yLWJsYWNrOiAjMDAwMDAwO1xyXG4kY29sb3IteWVsbG93OiAjZjllOTA3O1xyXG4kYm94LXNoYWRvdy1jb2xvcjogcmdiYSgwLDAsMCwuMik7XHJcbiRibGFjay1vdmVybGF5OiByZ2JhKDAsMCwwLDAuNyk7XHJcbiR3aGl0ZS1vdmVybGF5OiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XHJcbiRwbGFjZWhvbGRlci1jb2xvcjogI2FjYWNhYztcclxuJGNvbG9yLWJhY2tncm91bmQ6ICNlMWZiZmE7XHJcbiRjb2xvci1pbmZvOiAjRjdCNTAwO1xyXG4kZm9udC1yb2JvdG86ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1saWdodDogMzAwO1xyXG4kZm9udC1yZWd1bGFyOiA0MDA7XHJcbiRmb250LWJvbGQ6IDcwMDtcclxuJGZvbnQtaDE6IDM0cHg7XHJcbiRmb250LWgyOiAzMHB4O1xyXG4kZm9udC1oMzogMjRweDtcclxuJGZvbnQtaDQ6IDE4cHg7XHJcbiRmb250LWg1OiAxNnB4O1xyXG4kZm9udC1oNjogMTRweDtcclxuXHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/config/configuration/configuration.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/config/configuration/configuration.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ConfigurationComponent */

  /***/
  function srcAppConfigConfigurationConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function () {
      return ConfigurationComponent;
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


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _src_app_service_global_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @src/app/service/global.service */
    "./src/app/service/global.service.ts");
    /* harmony import */


    var froala_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! froala-editor */
    "./node_modules/froala-editor/js/froala_editor.min.js");
    /* harmony import */


    var froala_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(froala_editor__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var froala_editor_css_third_party_embedly_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! froala-editor/css/third_party/embedly.min.css */
    "./node_modules/froala-editor/css/third_party/embedly.min.css");
    /* harmony import */


    var froala_editor_js_third_party_embedly_min_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! froala-editor/js/third_party/embedly.min.js */
    "./node_modules/froala-editor/js/third_party/embedly.min.js");
    /* harmony import */


    var froala_editor_js_third_party_embedly_min_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(froala_editor_js_third_party_embedly_min_js__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @src/app/service/utility.service */
    "./src/app/service/utility.service.ts"); // import { MatButtonModule } from '@angular/material/button';
    // import { MatCardModule } from '@angular/material/card';
    // import { MatToolbarModule } from '@angular/material/toolbar';
    // import { MdePopoverModule } from '@material-extended/mde';


    var ConfigurationComponent = /*#__PURE__*/function () {
      function ConfigurationComponent(dataService, router, globalService, utilityService) {
        _classCallCheck(this, ConfigurationComponent);

        this.dataService = dataService;
        this.router = router;
        this.globalService = globalService;
        this.utilityService = utilityService; //temp

        this.formData = new FormData();
        this.loadingData = false;
        this.isActiveProgram = false;
        this.fileTypeSelect = "";
        this.active = false;
        this.tooltip = false;
        this.remarkSaved = true;
        this.isPointOnMissingRedemption = true;
        this.missingRedemptionByAll = false;
        this.ftpCredential = [];
        this.sqlCredential = [];
        this.purgeDetails = [];
        this.apiCredential = [];
        this.uatSetting = [];
        this.reconReportDetails = [];
        this.progConfigDetails = [];
        this.reconGeneralDetail = [];
        this.fileConfigDetail = [];
        this.folderConfigDetail = [];
        this.dqrConfigModel = [];
        this.reconAlertDetails = [];
        this.configSetting = [];
        this.isCreateNew = false;
        this.arrConfigEdit = [];
        this.tabId = '1';
        this.panelOpenState = false;
        this.isAddFormDqr = false;
        this.arrDqrUserListTo = [];
        this.arrDqrUserListCc = []; // fileToUpload: File | null = null;
        // filesArray: any = [];

        this.file1 = false;
        this.file2 = false;
        this.displayFileData = false;
        this.displayFileError = false;
        this.displayFileRes = false;
        this.fileUploadResponceError = [];
        this.reconDataList = [];
        this.dqrDateRange = [];
        this.displayedColumns = ['brandName', 'headerFile', 'skuBill', 'skuTenderItem', 'lastModifiedBy', 'lastModifiedOn', 'action'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.isCreateConfig = false;
        this.internalError = false;
        this.isEditConfig = false;
        this.openValidateSec = false;
        this.objCreateConfigEdit = {};
        this.userDetails = [];
        this.moduleRoleRightDetailWithKey = [];
        this.successAlert = false;
        this.missingAlert = false;
        this.invalidAlert = false;
        this.arrselectedDqrEmailTo = [];
        this.arrselectedDqrEmailCc = [];
        this.arrDqrSuccessUserListTo = [];
        this.arrSelectedSuccessUserListTo = [];
        this.arrSelectedSuccessUserListCc = [];
        this.arrDqrSuccessUserListCc = [];
        this.arrDqrMissingUserListTo = [];
        this.arrSelectedMissingUserListTo = [];
        this.arrSelectedMissingUserListCc = [];
        this.arrDqrMissingUserListCc = [];
        this.arrDqrInvalidUserListTo = [];
        this.arrSelectedInvalidUserListTo = [];
        this.arrSelectedInvalidUserListCc = [];
        this.arrDqrInvalidUserListCc = [];
        this.isbrandsTable = false;
        this.afuConfig = {
          uploadAPI: {
            url: "https://example-file-upload-api"
          }
        }; // Depending on your screen size you may want to use a specific toolbar dimension or all of them.

        this.options = {
          charCounterCount: true,
          toolbarButtons: [['bold', 'italic', 'underline', 'paragraphFormat', 'alert'], ['embedly', 'html']],
          toolbarButtonsXS: [['bold', 'italic', 'underline', 'paragraphFormat', 'alert'], ['embedly', 'html']],
          toolbarButtonsSM: [['bold', 'italic', 'underline', 'paragraphFormat', 'alert'], ['embedly', 'html']],
          toolbarButtonsMD: [['bold', 'italic', 'underline', 'paragraphFormat', 'alert'], ['embedly', 'html']]
        };
      }

      _createClass(ConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
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
          }); // $(document).ready(function() {
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
          });
          var details = JSON.parse(localStorage.getItem('userInfo'));
          this.userDetails = details[0].moduleRoleRightDetail; // console.log('useer detail config', this.userDetails);

          for (var i = 0; i < this.userDetails.length; i++) {
            this.moduleRoleRightDetailWithKey[this.userDetails[i].moduleCode] = this.userDetails[i];
          } // console.log("this.moduleRoleRightDetailWithKey ",this.moduleRoleRightDetailWithKey,'==',this.moduleRoleRightDetailWithKey.SETTING.view)


          this.sqlConn = this.moduleRoleRightDetailWithKey.SETTING.view; // console.log(" this.sqlConn", this.moduleRoleRightDetailWithKey.CONFIGURATION.view);

          if (localStorage.getItem('userInfo') == null) {
            this.router.navigate(['/login']);
          }

          var total = 29;

          for (var i = 1; i < total; i++) {
            this.dqrDateRange.push(i);
          }

          froala_editor__WEBPACK_IMPORTED_MODULE_8___default.a.DefineIcon('alert', {
            SVG_KEY: 'help'
          });
          froala_editor__WEBPACK_IMPORTED_MODULE_8___default.a.RegisterCommand('alert', {
            title: 'Giphy',
            icon: 'giphyIcon',
            undo: true,
            popup: true,
            plugin: 'giphyPlugin',
            showOnMobile: true,
            refreshAfterCallback: true,
            callback: function callback() {
              /* Toggle the giphy button */
              if (!this.popups.isVisible('giphyPlugin.popup')) {
                this.giphyPlugin.showPopup();
                this.$tb.find("input.giphy_search_field").focus();
              } else {
                if (this.$el.find('.fr-marker')) {
                  this.events.disableBlur();
                  this.selection.restore();
                }

                this.popups.hide('giphyPlugin.popup');
              }
            }
          });
        }
      }, {
        key: "isInactive",
        value: function isInactive() {
          // document.getElementById("overlay").style.display = "block";
          this.active = false;

          if (this.tooltip == false) {
            this.tooltip = true;
          } else {
            this.tooltip = false;
          }
        } // off(){
        //   document.getElementById("overlay").style.display = "none";
        // }

      }, {
        key: "closeTooltip",
        value: function closeTooltip() {
          this.tooltip = false;
        }
      }, {
        key: "isActive",
        value: function isActive() {
          var _this3 = this;

          this.active = true;
          this.feedbacktext = "";
          this.dataService.SaveFeedback(parseInt(this.newBrandId), this.feedbacktext, this.active).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);

            if (resJSON.messageCode == '1') {
              _this3.feedbacktext = "";
              alert("Brand saved Successfully");

              _this3.calculateTabId();
            } else {
              alert(resJSON.message);
            }
          });
        }
      }, {
        key: "textareaValidation",
        value: function textareaValidation() {
          if ($("#feedback_text").val().length >= 1) {
            $("#footer_model").css("padding-top", "10px");
            this.errortext = "";
            return;
          }
        }
      }, {
        key: "saveRemark",
        value: function saveRemark() {
          var _this4 = this;

          // console.log("tab 8",this.feedbacktext,this.active)
          if ($("#feedback_text").val().trim().length < 1) {
            $("#footer_model").css("padding-top", "0px");
            this.errortext = 'Please enter remark';
            return;
          } else {
            this.dataService.SaveFeedback(parseInt(this.newBrandId), this.feedbacktext, this.active).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJSON = JSON.parse(resSTR);

              if (resJSON.messageCode == '1') {
                _this4.feedbacktext = "";
                alert("Brand saved Successfully");
                _this4.remarkSaved = false;

                _this4.calculateTabId();
              } else {
                alert(resJSON.message);
              }
            });
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "getbrands",
        value: function getbrands() {
          var _this5 = this;

          this.responceMsg = '';
          this.applyFilter('');
          this.dataService.getBrandsBasicDetails().subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR); //  console.log(' getbrands resJSON basic detail',resJSON);

            if (resJSON.messageCode == '1') {
              _this5.responceMsg = _this5.utilityService.getMessageFromResponce(resJSON);
              _this5.dataSource.data = resJSON.data; // console.log(' getbrands  basic detail', this.dataSource.data);

              _this5.isbrandsTable = true;
              _this5.internalError = false;
            } else {
              _this5.responceMsg = _this5.utilityService.getMessageFromResponce(resJSON);
              _this5.internalError = true;
            }
          });
        }
      }, {
        key: "getReconType",
        value: function getReconType() {
          var reconTypeSelect = $('#reconTypeSelect option:selected').text();
          $(this).next('input').val(reconTypeSelect);
        }
      }, {
        key: "getDqrEmailTo",
        value: function getDqrEmailTo(dqrUser) {
          if (!dqrUser.isSelected) {
            dqrUser.isSelected = true;
          } else {
            dqrUser.isSelected = false;
          }

          this.selectDqrEmailTo();
        }
      }, {
        key: "selectDqrEmailTo",
        value: function selectDqrEmailTo() {
          this.arrselectedDqrEmailTo = [];
          var arrEmail = [];

          for (var i = 0; i < this.arrDqrUserListTo.length; i++) {
            if (this.arrDqrUserListTo[i].isSelected) {
              this.arrselectedDqrEmailTo.push(this.arrDqrUserListTo[i]);
              arrEmail.push(this.arrDqrUserListTo[i].value);
            }
          }

          this.selectedDqrEmailTo = arrEmail.join();
        }
      }, {
        key: "getDqrEmailCc",
        value: function getDqrEmailCc(dqrUser) {
          if (!dqrUser.isSelected) {
            dqrUser.isSelected = true;
          } else {
            dqrUser.isSelected = false;
          }

          this.selectDqrEmailCc();
        }
      }, {
        key: "selectDqrEmailCc",
        value: function selectDqrEmailCc() {
          this.arrselectedDqrEmailCc = [];
          var arrEmail = [];

          for (var i = 0; i < this.arrDqrUserListCc.length; i++) {
            if (this.arrDqrUserListCc[i].isSelected) {
              this.arrselectedDqrEmailCc.push(this.arrDqrUserListCc[i]);
              arrEmail.push(this.arrDqrUserListCc[i].value);
            }
          }

          this.selectedDqrEmailCc = arrEmail.join();
        }
      }, {
        key: "selectDqrSuccessEmailTo",
        value: function selectDqrSuccessEmailTo() {
          this.arrSelectedSuccessUserListTo = [];
          var arrEmail = [];

          for (var i = 0; i < this.arrDqrSuccessUserListTo.length; i++) {
            if (this.arrDqrSuccessUserListTo[i].isSelected) {
              this.arrSelectedSuccessUserListTo.push(this.arrDqrSuccessUserListTo[i]);
              arrEmail.push(this.arrDqrSuccessUserListTo[i].value);
            }
          }

          this.selectedDistSuccessUserTo = arrEmail.join();
        }
      }, {
        key: "getDistSuccessUserTo",
        value: function getDistSuccessUserTo(distUser) {
          if (!distUser.isSelected) {
            distUser.isSelected = true;
          } else {
            distUser.isSelected = false;
          }

          this.selectDqrSuccessEmailTo();
        }
      }, {
        key: "selectDqrSuccessEmailCc",
        value: function selectDqrSuccessEmailCc() {
          this.arrSelectedSuccessUserListCc = [];
          var arrEmail = [];

          for (var i = 0; i < this.arrDqrSuccessUserListCc.length; i++) {
            if (this.arrDqrSuccessUserListCc[i].isSelected) {
              this.arrSelectedSuccessUserListCc.push(this.arrDqrSuccessUserListCc[i]);
              arrEmail.push(this.arrDqrSuccessUserListCc[i].value);
            }
          }

          this.selectedDistSuccessUserCc = arrEmail.join();
        }
      }, {
        key: "getDistSuccessUserCc",
        value: function getDistSuccessUserCc(distUser) {
          if (!distUser.isSelected) {
            distUser.isSelected = true;
          } else {
            distUser.isSelected = false;
          }

          this.selectDqrSuccessEmailCc();
        }
      }, {
        key: "selectDqrMissingEmailTo",
        value: function selectDqrMissingEmailTo() {
          this.arrSelectedMissingUserListTo = [];
          var arrEmail = [];

          for (var i = 0; i < this.arrDqrMissingUserListTo.length; i++) {
            if (this.arrDqrMissingUserListTo[i].isSelected) {
              this.arrSelectedMissingUserListTo.push(this.arrDqrMissingUserListTo[i]);
              arrEmail.push(this.arrDqrMissingUserListTo[i].value);
            }
          }

          this.selectedDistMissingUserTo = arrEmail.join();
        }
      }, {
        key: "getDistMissingUserTo",
        value: function getDistMissingUserTo(distUser) {
          if (!distUser.isSelected) {
            distUser.isSelected = true;
          } else {
            distUser.isSelected = false;
          }

          this.selectDqrMissingEmailTo();
        }
      }, {
        key: "selectDqrMissingEmailCc",
        value: function selectDqrMissingEmailCc() {
          this.arrSelectedMissingUserListCc = [];
          var arrEmail = [];

          for (var i = 0; i < this.arrDqrMissingUserListCc.length; i++) {
            if (this.arrDqrMissingUserListCc[i].isSelected) {
              this.arrSelectedMissingUserListCc.push(this.arrDqrMissingUserListCc[i]);
              arrEmail.push(this.arrDqrMissingUserListCc[i].value);
            }
          }

          this.selectedDistMissingUserCc = arrEmail.join();
        }
      }, {
        key: "getDistMissingUserCc",
        value: function getDistMissingUserCc(distUser) {
          if (!distUser.isSelected) {
            distUser.isSelected = true;
          } else {
            distUser.isSelected = false;
          }

          this.selectDqrMissingEmailCc();
        }
      }, {
        key: "selectDqrInvalidEmailTo",
        value: function selectDqrInvalidEmailTo() {
          this.arrSelectedInvalidUserListTo = [];
          var arrEmail = [];

          for (var i = 0; i < this.arrDqrInvalidUserListTo.length; i++) {
            if (this.arrDqrInvalidUserListTo[i].isSelected) {
              this.arrSelectedInvalidUserListTo.push(this.arrDqrInvalidUserListTo[i]);
              arrEmail.push(this.arrDqrInvalidUserListTo[i].value);
            }
          }

          this.selectedDistInvalidUserTo = arrEmail.join();
        }
      }, {
        key: "getDistInvalidUserTo",
        value: function getDistInvalidUserTo(distUser) {
          if (!distUser.isSelected) {
            distUser.isSelected = true;
          } else {
            distUser.isSelected = false;
          }

          this.selectDqrInvalidEmailTo();
        }
      }, {
        key: "selectDqrInvalidEmailCc",
        value: function selectDqrInvalidEmailCc() {
          this.arrSelectedInvalidUserListCc = [];
          var arrEmail = [];

          for (var i = 0; i < this.arrDqrInvalidUserListCc.length; i++) {
            if (this.arrDqrInvalidUserListCc[i].isSelected) {
              this.arrSelectedInvalidUserListCc.push(this.arrDqrInvalidUserListCc[i]);
              arrEmail.push(this.arrDqrInvalidUserListCc[i].value);
            }
          }

          this.selectedDistInvalidUserCc = arrEmail.join();
        }
      }, {
        key: "getDistInvalidUserCc",
        value: function getDistInvalidUserCc(distUser) {
          if (!distUser.isSelected) {
            distUser.isSelected = true;
          } else {
            distUser.isSelected = false;
          }

          this.selectDqrInvalidEmailCc();
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim();
          filterValue = filterValue.toLowerCase();
          this.dataSource.filter = filterValue;
        }
      }, {
        key: "editReconSetting",
        value: function editReconSetting(brandId) {
          var _this6 = this;

          this.dataService.getReconSetupDetails(brandId).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR); // console.log('editReconSetting', resJSON)

            if (resJSON.messageCode == '1') {
              if (resJSON.message == 'Success') {
                _this6.isEditConfigLoader = false;
              } else {
                _this6.isEditConfigLoader = true;
                _this6.arrConfigEdit = [];
                _this6.reconGeneralDetail = [];
                _this6.fileConfigDetail = [];
                _this6.folderConfigDetail = [];
                _this6.dqrConfigModel = [];
                _this6.reconAlertDetails = [];
                _this6.configSetting = [];
                _this6.progConfigDetails = [];
                _this6.reconReportDetails = [];
                _this6.uatSetting = [];
                _this6.apiCredential = [];
                _this6.ftpCredential = [];
                _this6.sqlCredential = [];
                _this6.purgeDetails = [];
                _this6.arrDqrUserListTo = [];
                _this6.arrDqrUserListCc = [];
                _this6.arrSelectedSuccessUserListTo = [];
                _this6.arrSelectedSuccessUserListCc = [];
                _this6.selectedDistSuccessUserCc = '';
                _this6.selectedDistSuccessUserTo = '';
                _this6.selectedDqrEmailTo = '';
                _this6.selectedDqrEmailCc = '';
                _this6.arrSelectedMissingUserListTo = [];
                _this6.arrSelectedMissingUserListCc = [];
                _this6.selectedDistMissingUserCc = '';
                _this6.selectedDistMissingUserTo = '';
                _this6.arrSelectedInvalidUserListTo = [];
                _this6.arrSelectedInvalidUserListCc = [];
                _this6.selectedDistInvalidUserCc = '';
                _this6.selectedDistInvalidUserTo = '';
              }

              _this6.arrConfigEdit = resJSON.data;
              _this6.reconGeneralDetail = resJSON.data.reconGeneralDetail;
              _this6.isPointOnMissingRedemption = resJSON.data.reconGeneralDetail.isPointOnMissingRedemption;

              if (_this6.reconGeneralDetail.brandId) {
                _this6.newBrandId = _this6.reconGeneralDetail.brandId;
              }

              _this6.fileConfigDetail = resJSON.data.fileConfigDetail;
              _this6.folderConfigDetail = resJSON.data.folderConfigDetail;
              _this6.dqrConfigModel = resJSON.data.dqrConfigModel;
              _this6.reconAlertDetails = resJSON.data.reconAlertDetails;

              if (resJSON.data.reconAlertDetails.toSuccessDistribution) {
                _this6.arrDqrSuccessUserListTo = resJSON.data.reconAlertDetails.toSuccessDistribution;

                _this6.selectDqrSuccessEmailTo();
              }

              if (resJSON.data.reconAlertDetails.ccSuccessDistribution) {
                _this6.arrDqrSuccessUserListCc = resJSON.data.reconAlertDetails.ccSuccessDistribution;

                _this6.selectDqrSuccessEmailCc();
              }

              if (resJSON.data.reconAlertDetails.toMissingDistribution) {
                _this6.arrDqrMissingUserListTo = resJSON.data.reconAlertDetails.toMissingDistribution;

                _this6.selectDqrMissingEmailTo();
              }

              if (resJSON.data.reconAlertDetails.ccMissingDistribution) {
                _this6.arrDqrMissingUserListCc = resJSON.data.reconAlertDetails.ccMissingDistribution;

                _this6.selectDqrMissingEmailCc();
              }

              if (resJSON.data.reconAlertDetails.toInvalidDistribution) {
                _this6.arrDqrInvalidUserListTo = resJSON.data.reconAlertDetails.toInvalidDistribution;

                _this6.selectDqrInvalidEmailTo();
              }

              if (resJSON.data.reconAlertDetails.ccInvalidDistribution) {
                _this6.arrDqrInvalidUserListCc = resJSON.data.reconAlertDetails.ccInvalidDistribution;

                _this6.selectDqrInvalidEmailCc();
              }

              _this6.configSetting = resJSON.data.configSetting;
              _this6.progConfigDetails = resJSON.data.configSetting.progConfigDetails;
              _this6.reconReportDetails = resJSON.data.reconReportDetails;
              _this6.uatSetting = resJSON.data.configSetting.uatSetting;
              _this6.apiCredential = resJSON.data.configSetting.apiCredential;
              _this6.ftpCredential = resJSON.data.configSetting.ftpCredential;
              _this6.sqlCredential = resJSON.data.configSetting.connectionDetail;
              _this6.purgeDetails = resJSON.data.configSetting.purgeDetails;

              if (resJSON.data.dqrConfigModel.toEmail) {
                _this6.arrDqrUserListTo = resJSON.data.dqrConfigModel.toEmail;

                _this6.selectDqrEmailTo();
              }

              if (resJSON.data.dqrConfigModel.ccEmail) {
                _this6.arrDqrUserListCc = resJSON.data.dqrConfigModel.ccEmail;

                _this6.selectDqrEmailCc();
              }

              if (_this6.reconAlertDetails.isSuccess) {
                _this6.successAlert = true;
              } else {
                _this6.successAlert = false;
              }

              if (_this6.reconAlertDetails.isMissing) {
                _this6.missingAlert = true;
              } else {
                _this6.missingAlert = false;
              }

              if (_this6.reconAlertDetails.isInvalid) {
                _this6.invalidAlert = true;
              } else {
                _this6.invalidAlert = false;
              }
            } else {
              _this6.internalError = true;
              _this6.isEditConfigLoader = true;
              _this6.arrConfigEdit = [];
              _this6.reconGeneralDetail = [];
              _this6.fileConfigDetail = [];
              _this6.folderConfigDetail = [];
              _this6.dqrConfigModel = [];
              _this6.reconAlertDetails = [];
              _this6.configSetting = [];
              _this6.progConfigDetails = [];
              _this6.reconReportDetails = [];
              _this6.uatSetting = [];
              _this6.apiCredential = [];
              _this6.ftpCredential = [];
              _this6.sqlCredential = [];
              _this6.purgeDetails = [];
              _this6.arrDqrUserListTo = [];
              _this6.arrDqrUserListCc = [];
              _this6.arrSelectedSuccessUserListTo = [];
              _this6.arrSelectedSuccessUserListCc = [];
              _this6.selectedDistSuccessUserCc = '';
              _this6.selectedDistSuccessUserTo = '';
              _this6.selectedDqrEmailTo = '';
              _this6.selectedDqrEmailCc = '';
              _this6.arrSelectedMissingUserListTo = [];
              _this6.arrSelectedMissingUserListCc = [];
              _this6.selectedDistMissingUserCc = '';
              _this6.selectedDistMissingUserTo = '';
              _this6.arrSelectedInvalidUserListTo = [];
              _this6.arrSelectedInvalidUserListCc = [];
              _this6.selectedDistInvalidUserCc = '';
              _this6.selectedDistInvalidUserTo = '';
            }
          });
        }
      }, {
        key: "createNewConfig",
        value: function createNewConfig(type, program) {
          //  console.log("edit")
          // console.log('type ,program,reconGeneralDetail', type, program.isActive, this.reconGeneralDetail);
          this.isActiveProgram = program.isActive; // console.log('program active', this.isActiveProgram)

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
            this.isPointOnMissingRedemption = true; // console.log('else createnewconfig',this.reconGeneralDetail);
          }
        }
      }, {
        key: "openValidateSection",
        value: function openValidateSection() {
          this.openValidateSec = true;
        }
      }, {
        key: "backButton",
        value: function backButton() {
          this.openValidateSec = false;
          this.displayFileRes = false;
          this.displayFileError = false;
          this.displayFileData = false;
        }
      }, {
        key: "selectFileType",
        value: function selectFileType(fileType) {
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
      }, {
        key: "handleFile1Input",
        value: function handleFile1Input(files) {
          this.formData.append("request1", files.item(0));
          this.file1 = true;
        }
      }, {
        key: "handleFile2Input",
        value: function handleFile2Input(files) {
          this.formData.append("request1", files.item(0));
          this.file2 = true;
        }
      }, {
        key: "validateFile",
        value: function validateFile() {
          var _this7 = this;

          this.displayFileRes = false;
          this.displayFileError = false;
          this.displayFileData = false;

          if (this.fileTypeSelect === "") {
            alert("Please Select Program");
          } else if (!this.file1) {
            alert("Please Select File1");
          } else if (!this.file2) {
            alert("Please Select File2");
          } else {
            this.loadingData = true;
            this.dataService.RecondashboardFileUpload(this.fileTypeSelect, this.formData).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJSON = JSON.parse(resSTR);

              _this7.formData["delete"]('request1');

              _this7.fileTypeSelect = "";
              $('#file1').val('');
              $('#file2').val('');
              $('#FileTypeSelect').val('');

              if (resJSON.responseCode == '200') {
                _this7.loadingData = false;
                _this7.displayFileRes = true;
                _this7.fileUploadResponce = resJSON.message; // this.reconDataList =resJSON.recondataList
              } else if (resJSON.responseCode == '500') {
                _this7.fileTypeSelect = "";
                _this7.loadingData = false;
                _this7.displayFileError = true;
                _this7.fileUploadResponceError = resJSON.message.split(';');

                _this7.fileUploadResponceError.splice(6, 1);

                console.log('this.fileUploadResponceError', _this7.fileUploadResponceError); // this.reconDataList =resJSON.recondataList
              } else if (resJSON.responseCode == '501') {
                _this7.fileTypeSelect = "";
                _this7.loadingData = false;
                _this7.displayFileRes = true;
                _this7.displayFileData = true;
                _this7.fileUploadResponce = resJSON.message;
                _this7.reconDataList = resJSON.recondataList;
              } else {
                _this7.loadingData = false;
              }
            });
          }
        }
      }, {
        key: "viewAllData",
        value: function viewAllData(id, product) {
          var _this8 = this;

          // console.log("id,product config",id,product)
          this.dataService.getReconSetupDetails(parseInt(id)).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);
            _this8.reconGeneralDetails = resJSON.data.reconGeneralDetail;
            _this8.reconFileDetails = resJSON.data.fileConfigDetail;
            _this8.reconFolderDetails = resJSON.data.folderConfigDetail;
            _this8.reconAlertsDetails = resJSON.data.reconAlertDetails;
            _this8.reconReportsDetails = resJSON.data.reconReportDetails;
            _this8.reconSeatingsDetails = resJSON.data.configSetting; // console.log(" this.reconFolderDetails",  this.reconFolderDetails)
          });
        }
      }, {
        key: "activeProgram",
        value: function activeProgram(brandId, isActive, isEnable, isDeleted) {
          this.dataService.EditReconBasicDetailsByBrandID(brandId, isActive, isEnable, isDeleted).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR);

            if (resJSON.messageCode == '1') {
              alert(resJSON.message);
            } else {
              alert(resJSON.message);
            }
          });
        }
      }, {
        key: "openDqrUserModalTo",
        value: function openDqrUserModalTo() {
          $("#dqrUserModalTo").modal('show');
        }
      }, {
        key: "openDqrUserModalCc",
        value: function openDqrUserModalCc() {
          $("#dqrUserModalCc").modal('show');
        }
      }, {
        key: "openDqrUserSuccessModalTo",
        value: function openDqrUserSuccessModalTo() {
          $("#dqrUserSuccessModalTo").modal('show');
        }
      }, {
        key: "openDqrUserSuccessModalCc",
        value: function openDqrUserSuccessModalCc() {
          $("#dqrUserSuccessModalCc").modal('show');
        }
      }, {
        key: "openDqrUserMissingModalTo",
        value: function openDqrUserMissingModalTo() {
          $("#dqrUserMissingModalTo").modal('show');
        }
      }, {
        key: "openDqrUserMissingModalCc",
        value: function openDqrUserMissingModalCc() {
          $("#dqrUserMissingModalCc").modal('show');
        }
      }, {
        key: "openDqrUserInvalidModalTo",
        value: function openDqrUserInvalidModalTo() {
          $("#dqrUserInvalidModalTo").modal('show');
        }
      }, {
        key: "openDqrUserInvalidModalCc",
        value: function openDqrUserInvalidModalCc() {
          $("#dqrUserInvalidModalCc").modal('show');
        }
      }, {
        key: "addDqrUserTo",
        value: function addDqrUserTo(dqrUserObj) {
          dqrUserObj.value.isSelected = true;
          var arrUser = [];
          arrUser.push(dqrUserObj.value);
          this.arrDqrUserListTo = arrUser.concat(this.arrDqrUserListTo);
          dqrUserObj.resetForm();
          this.selectDqrEmailTo();
        }
      }, {
        key: "addDqrUserCc",
        value: function addDqrUserCc(dqrUserObj) {
          dqrUserObj.value.isSelected = true;
          var arrUser = [];
          arrUser.push(dqrUserObj.value);
          this.arrDqrUserListCc = arrUser.concat(this.arrDqrUserListCc);
          dqrUserObj.resetForm();
          this.selectDqrEmailCc();
        }
      }, {
        key: "addDqrSuccessUserTo",
        value: function addDqrSuccessUserTo(dqrUserSuccessObjTo) {
          dqrUserSuccessObjTo.value.isSelected = true;
          var arrUser = [];
          arrUser.push(dqrUserSuccessObjTo.value);
          this.arrDqrSuccessUserListTo = arrUser.concat(this.arrDqrSuccessUserListTo);
          dqrUserSuccessObjTo.resetForm();
          this.selectDqrSuccessEmailTo();
        }
      }, {
        key: "addDqrSuccessUserCc",
        value: function addDqrSuccessUserCc(dqrUserSuccessObj) {
          dqrUserSuccessObj.value.isSelected = true;
          var arrUser = [];
          arrUser.push(dqrUserSuccessObj.value);
          this.arrDqrSuccessUserListCc = arrUser.concat(this.arrDqrSuccessUserListCc);
          dqrUserSuccessObj.resetForm();
          this.selectDqrSuccessEmailCc();
        }
      }, {
        key: "addDqrMissingUserTo",
        value: function addDqrMissingUserTo(dqrUserMissingObjTo) {
          dqrUserMissingObjTo.value.isSelected = true;
          var arrUser = [];
          arrUser.push(dqrUserMissingObjTo.value);
          this.arrDqrMissingUserListTo = arrUser.concat(this.arrDqrMissingUserListTo);
          dqrUserMissingObjTo.resetForm();
          this.selectDqrMissingEmailTo();
        }
      }, {
        key: "addDqrMissingUserCc",
        value: function addDqrMissingUserCc(dqrUserMissingObj) {
          dqrUserMissingObj.value.isSelected = true;
          var arrUser = [];
          arrUser.push(dqrUserMissingObj.value);
          this.arrDqrMissingUserListCc = arrUser.concat(this.arrDqrMissingUserListCc);
          dqrUserMissingObj.resetForm();
          this.selectDqrMissingEmailCc();
        }
      }, {
        key: "addDqrInvalidUserTo",
        value: function addDqrInvalidUserTo(dqrUserInvalidObjTo) {
          dqrUserInvalidObjTo.value.isSelected = true;
          var arrUser = [];
          arrUser.push(dqrUserInvalidObjTo.value);
          this.arrDqrInvalidUserListTo = arrUser.concat(this.arrDqrInvalidUserListTo);
          dqrUserInvalidObjTo.resetForm();
          this.selectDqrInvalidEmailTo();
        }
      }, {
        key: "addDqrInvalidUserCc",
        value: function addDqrInvalidUserCc(dqrUserInvalidObj) {
          dqrUserInvalidObj.value.isSelected = true;
          var arrUser = [];
          arrUser.push(dqrUserInvalidObj.value);
          this.arrDqrInvalidUserListCc = arrUser.concat(this.arrDqrInvalidUserListCc);
          dqrUserInvalidObj.resetForm();
          this.selectDqrInvalidEmailCc();
        }
      }, {
        key: "isSuccessAlert",
        value: function isSuccessAlert(isSuccess) {
          this.successAlert = isSuccess;
        }
      }, {
        key: "isMissingAlert",
        value: function isMissingAlert(isMissing) {
          this.missingAlert = isMissing;
        }
      }, {
        key: "isInvalidAlert",
        value: function isInvalidAlert(isInvalid) {
          this.invalidAlert = isInvalid;
        }
      }, {
        key: "closeConfig",
        value: function closeConfig() {
          this.getbrands();
          this.newBrandId = '';
          this.isCreateConfig = false;
          this.tabId = '1';
        }
      }, {
        key: "calculateTabId",
        value: function calculateTabId() {
          if (this.tabId != '8') {
            this.getbrands();
            this.tabId = parseInt(this.tabId) + 1;
          } else {
            this.closeConfig();
          }
        }
      }, {
        key: "getConfigObject",
        value: function getConfigObject(configObject) {
          var _this9 = this;

          if (this.tabId == '1') {
            this.arrConfigEdit['reconGeneralDetail'] = configObject.value;
            this.dataService.SaveGeneralSetting(this.arrConfigEdit).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJSON = JSON.parse(resSTR);

              if (resJSON.messageCode == '1') {
                _this9.newBrandId = resJSON.brandID;

                _this9.editReconSetting(resJSON.brandID); // console.log("brand id", resJSON.brandID);


                alert("Successfully saved.");

                _this9.calculateTabId();
              } else {
                alert(resJSON.message);
              }
            });
          } else if (this.tabId == '2') {
            if (!configObject.value.brandId) {
              configObject.value.brandId = this.newBrandId;
            }

            this.arrConfigEdit['fileConfigDetail'] = configObject.value;
            this.dataService.SaveFileSetting(this.arrConfigEdit).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJSON = JSON.parse(resSTR);

              if (resJSON.messageCode == '1') {
                alert("Successfully saved.");

                _this9.calculateTabId();
              } else {
                alert(resJSON.message);
              }
            });
          } else if (this.tabId == '3') {
            this.arrConfigEdit['folderConfigDetail'] = configObject.value;
            this.dataService.SaveFolderSetting(this.arrConfigEdit).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJSON = JSON.parse(resSTR);

              if (resJSON.messageCode == '1') {
                alert("Successfully saved.");

                _this9.calculateTabId();
              } else {
                alert(resJSON.message);
              }
            });
          } else if (this.tabId == '4') {
            configObject.value['toEmail'] = this.arrselectedDqrEmailTo;
            configObject.value['ccEmail'] = this.arrselectedDqrEmailCc;
            this.arrConfigEdit['dqrConfigModel'] = configObject.value;
            this.dataService.SaveDQRSettingDetails(this.arrConfigEdit).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJSON = JSON.parse(resSTR);

              if (resJSON.messageCode == '1') {
                alert("Successfully saved.");

                _this9.calculateTabId();
              } else {
                alert(resJSON.message);
              }
            });
          } else if (this.tabId == '5') {
            configObject.value['toSuccessDistribution'] = this.arrSelectedSuccessUserListTo;
            configObject.value['ccSuccessDistribution'] = this.arrSelectedSuccessUserListCc;
            configObject.value['toMissingDistribution'] = this.arrSelectedMissingUserListTo;
            configObject.value['ccMissingDistribution'] = this.arrSelectedMissingUserListCc;
            configObject.value['toInvalidDistribution'] = this.arrSelectedInvalidUserListTo;
            configObject.value['ccInvalidDistribution'] = this.arrSelectedInvalidUserListCc;
            this.arrConfigEdit['reconAlertDetails'] = configObject.value;
            this.dataService.SaveReconAlertSetting(this.arrConfigEdit).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJSON = JSON.parse(resSTR);

              if (resJSON.messageCode == '1') {
                alert("Successfully saved.");

                _this9.calculateTabId();
              } else {
                alert(resJSON.message);
              }
            });
          } else if (this.tabId == '6') {
            this.arrConfigEdit['reconReportDetails'] = configObject.value;
            this.dataService.SaveReconReportSetting(this.arrConfigEdit).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJSON = JSON.parse(resSTR);

              if (resJSON.messageCode == '1') {
                alert("Successfully saved.");

                _this9.calculateTabId();
              } else {
                alert(resJSON.message);
              }
            });
          } else if (this.tabId == '7') {
            this.arrConfigEdit['configSetting'] = configObject.value;
            this.dataService.SaveConfigSetting(this.arrConfigEdit).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJSON = JSON.parse(resSTR);

              if (resJSON.messageCode == '1') {
                alert("Successfully saved.");

                _this9.calculateTabId();
              } else {
                alert(resJSON.message);
              }
            });
            this.dataService.getReconSetupDetails(parseInt(this.newBrandId)).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJSON = JSON.parse(resSTR); // console.log("brand detail ", resJSON.data.reconGeneralDetail)

              _this9.reconGeneralDetails = resJSON.data.reconGeneralDetail;
              _this9.reconFileDetails = resJSON.data.fileConfigDetail;
              _this9.reconFolderDetails = resJSON.data.folderConfigDetail;
              _this9.reconAlertsDetails = resJSON.data.reconAlertDetails;
              _this9.reconReportsDetails = resJSON.data.reconReportDetails;
              _this9.reconSeatingsDetails = resJSON.data.configSetting;
            });
          } else if (this.tabId == '8') {
            // console.log("this.tabId ", this.tabId)
            this.dataService.getReconSetupDetails(parseInt(this.newBrandId)).subscribe(function (res) {
              var resSTR = JSON.stringify(res);
              var resJSON = JSON.parse(resSTR); // console.log("brand detail ", resJSON.data.reconGeneralDetail)

              _this9.reconGeneralDetails = resJSON.data.reconGeneralDetail;
              _this9.reconFileDetails = resJSON.data.fileConfigDetail;
              _this9.reconFolderDetails = resJSON.data.folderConfigDetail;
              _this9.reconAlertsDetails = resJSON.data.reconAlertDetails;
              _this9.reconReportsDetails = resJSON.data.reconReportDetails;
              _this9.reconSeatingsDetails = resJSON.data.configSetting;
            });
          }
        }
      }, {
        key: "getDetailById",
        value: function getDetailById() {
          var _this10 = this;

          this.dataService.getReconSetupDetails(parseInt(this.newBrandId)).subscribe(function (res) {
            var resSTR = JSON.stringify(res);
            var resJSON = JSON.parse(resSTR); // console.log("brand detail ", resJSON.data.reconGeneralDetail)

            _this10.reconGeneralDetails = resJSON.data.reconGeneralDetail;
            _this10.reconFileDetails = resJSON.data.fileConfigDetail;
            _this10.reconFolderDetails = resJSON.data.folderConfigDetail;
            _this10.reconAlertsDetails = resJSON.data.reconAlertDetails;
            _this10.reconReportsDetails = resJSON.data.reconReportDetails;
            _this10.reconSeatingsDetails = resJSON.data.configSetting;
          });
        }
      }, {
        key: "removeDqrEmailTo",
        value: function removeDqrEmailTo(index) {
          this.arrDqrUserListTo.splice(index, 1);
          this.selectDqrEmailTo();
        }
      }, {
        key: "removeDqrEmailCc",
        value: function removeDqrEmailCc(index) {
          this.arrDqrUserListCc.splice(index, 1);
          this.selectDqrEmailCc();
        }
      }, {
        key: "removeDqrSuccessEmailTo",
        value: function removeDqrSuccessEmailTo(index) {
          this.arrDqrSuccessUserListTo.splice(index, 1);
          this.selectDqrSuccessEmailTo();
        }
      }, {
        key: "removeDqrSuccessEmailCc",
        value: function removeDqrSuccessEmailCc(index) {
          this.arrDqrSuccessUserListCc.splice(index, 1);
          this.selectDqrSuccessEmailCc();
        }
      }, {
        key: "removeDqrMissingEmailTo",
        value: function removeDqrMissingEmailTo(index) {
          this.arrDqrMissingUserListTo.splice(index, 1);
          this.selectDqrMissingEmailTo();
        }
      }, {
        key: "removeDqrMissingEmailCc",
        value: function removeDqrMissingEmailCc(index) {
          this.arrDqrMissingUserListCc.splice(index, 1);
          this.selectDqrMissingEmailCc();
        }
      }, {
        key: "removeDqrInvalidEmailTo",
        value: function removeDqrInvalidEmailTo(index) {
          this.arrDqrInvalidUserListTo.splice(index, 1);
          this.selectDqrInvalidEmailTo();
        }
      }, {
        key: "removeDqrInvalidEmailCc",
        value: function removeDqrInvalidEmailCc(index) {
          this.arrDqrInvalidUserListCc.splice(index, 1);
          this.selectDqrInvalidEmailCc();
        }
      }]);

      return ConfigurationComponent;
    }();

    ConfigurationComponent.ctorParameters = function () {
      return [{
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _src_app_service_global_service__WEBPACK_IMPORTED_MODULE_7__["GlobalService"]
      }, {
        type: _src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_11__["UtilityService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], {
      "static": false
    })], ConfigurationComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
      "static": false
    })], ConfigurationComponent.prototype, "sort", void 0);
    ConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-configuration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./configuration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/config/configuration/configuration.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./configuration.component.scss */
      "./src/app/config/configuration/configuration.component.scss"))["default"]]
    })], ConfigurationComponent);
    /***/
  }
}]);
//# sourceMappingURL=config-config-module-es5.js.map