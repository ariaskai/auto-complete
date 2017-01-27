(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/http"), require("rxjs/add/operator/map"), require("@angular/common"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/http", "rxjs/add/operator/map", "@angular/common", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["ng2-auto-complete"] = factory(require("@angular/core"), require("@angular/http"), require("rxjs/add/operator/map"), require("@angular/common"), require("@angular/forms"));
	else
		root["ng2-auto-complete"] = factory(root["@angular/core"], root["@angular/http"], root["rxjs/add/operator/map"], root["@angular/common"], root["@angular/forms"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ng2_auto_complete_1 = __webpack_require__(1);
	exports.Ng2AutoComplete = ng2_auto_complete_1.Ng2AutoComplete;
	var ng2_auto_complete_module_1 = __webpack_require__(5);
	exports.Ng2AutoCompleteModule = ng2_auto_complete_module_1.Ng2AutoCompleteModule;
	var ng2_auto_complete_component_1 = __webpack_require__(8);
	exports.Ng2AutoCompleteComponent = ng2_auto_complete_component_1.Ng2AutoCompleteComponent;
	var ng2_auto_complete_directive_1 = __webpack_require__(9);
	exports.Ng2AutoCompleteDirective = ng2_auto_complete_directive_1.Ng2AutoCompleteDirective;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var http_1 = __webpack_require__(3);
	__webpack_require__(4);
	/**
	 * provides auto-complete related utility functions
	 */
	var Ng2AutoComplete = (function () {
	    function Ng2AutoComplete(http) {
	        this.http = http;
	        // ...
	    }
	    Ng2AutoComplete.prototype.filter = function (list, keyword) {
	        return list.filter(function (el) {
	            return !!JSON.stringify(el).match(new RegExp(keyword, "i"));
	        });
	    };
	    /**
	     * return remote data from the given source and options, and data path
	     */
	    Ng2AutoComplete.prototype.getRemoteData = function (keyword) {
	        var _this = this;
	        if (typeof this.source !== 'string') {
	            throw "Invalid type of source, must be a string. e.g. http://www.google.com?q=:my_keyword";
	        }
	        else if (!this.http) {
	            throw "Http is required.";
	        }
	        var matches = this.source.match(/:[a-zA-Z_]+/);
	        if (matches === null) {
	            throw "Replacement word is missing.";
	        }
	        var replacementWord = matches[0];
	        var url = this.source.replace(replacementWord, keyword);
	        return this.http.get(url)
	            .map(function (resp) { return resp.json(); })
	            .map(function (resp) {
	            var list = resp.data || resp;
	            if (_this.pathToData) {
	                var paths = _this.pathToData.split(".");
	                paths.forEach(function (prop) { return list = list[prop]; });
	            }
	            return list;
	        });
	    };
	    ;
	    Ng2AutoComplete = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Optional()), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], Ng2AutoComplete);
	    return Ng2AutoComplete;
	}());
	exports.Ng2AutoComplete = Ng2AutoComplete;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var common_1 = __webpack_require__(6);
	var forms_1 = __webpack_require__(7);
	var ng2_auto_complete_component_1 = __webpack_require__(8);
	var ng2_auto_complete_directive_1 = __webpack_require__(9);
	var ng2_auto_complete_1 = __webpack_require__(1);
	var Ng2AutoCompleteModule = (function () {
	    function Ng2AutoCompleteModule() {
	    }
	    Ng2AutoCompleteModule.forRoot = function () {
	        return {
	            ngModule: Ng2AutoCompleteModule,
	            providers: [ng2_auto_complete_1.Ng2AutoComplete]
	        };
	    };
	    Ng2AutoCompleteModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule],
	            declarations: [ng2_auto_complete_component_1.Ng2AutoCompleteComponent, ng2_auto_complete_directive_1.Ng2AutoCompleteDirective],
	            exports: [ng2_auto_complete_component_1.Ng2AutoCompleteComponent, ng2_auto_complete_directive_1.Ng2AutoCompleteDirective],
	            entryComponents: [ng2_auto_complete_component_1.Ng2AutoCompleteComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Ng2AutoCompleteModule);
	    return Ng2AutoCompleteModule;
	}());
	exports.Ng2AutoCompleteModule = Ng2AutoCompleteModule;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ng2_auto_complete_1 = __webpack_require__(1);
	/**
	 * show a selected date in monthly calendar
	 * Each filteredList item has the following property in addition to data itself
	 *   1. displayValue as string e.g. Allen Kim
	 *   2. dataValue as any e.g.
	 */
	var Ng2AutoCompleteComponent = (function () {
	    /**
	     * constructor
	     */
	    function Ng2AutoCompleteComponent(elementRef, autoComplete) {
	        var _this = this;
	        this.autoComplete = autoComplete;
	        this.minChars = 0;
	        this.valuePropertyName = "id";
	        this.displayPropertyName = "value";
	        this.loadingText = "Loading";
	        this.showInputTag = true;
	        this.valueSelected = new core_1.EventEmitter();
	        this.inputChanged = new core_1.EventEmitter();
	        this.dropdownVisible = false;
	        this.isLoading = false;
	        this.filteredList = [];
	        this.minCharsEntered = false;
	        this.itemIndex = 0;
	        this.reloadListInDelay = function (evt) {
	            var delayMs = _this.isSrcArr() ? 10 : 500;
	            var keyword = evt.target.value;
	            // executing after user stopped typing
	            _this.delay(function () { return _this.reloadList(keyword); }, delayMs);
	            _this.inputChanged.emit(keyword);
	        };
	        this.inputElKeyHandler = function (evt) {
	            var totalNumItem = _this.filteredList.length;
	            switch (evt.keyCode) {
	                case 27:
	                    //this.hideDropdownList();
	                    break;
	                case 38:
	                    _this.itemIndex = (totalNumItem + _this.itemIndex - 1) % totalNumItem;
	                    break;
	                case 40:
	                    _this.dropdownVisible = true;
	                    _this.itemIndex = (totalNumItem + _this.itemIndex + 1) % totalNumItem;
	                    break;
	                case 13:
	                    if (_this.filteredList.length > 0) {
	                        _this.selectOne(_this.filteredList[_this.itemIndex]);
	                    }
	                    evt.preventDefault();
	                    break;
	            }
	        };
	        this.delay = (function () {
	            var timer = 0;
	            return function (callback, ms) {
	                clearTimeout(timer);
	                timer = setTimeout(callback, ms);
	            };
	        })();
	        this.el = elementRef.nativeElement;
	    }
	    Ng2AutoCompleteComponent.prototype.isSrcArr = function () {
	        return (this.source.constructor.name === "Array");
	    };
	    /**
	     * user enters into input el, shows list to select, then select one
	     */
	    Ng2AutoCompleteComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.autoComplete.source = this.source;
	        this.autoComplete.pathToData = this.pathToData;
	        setTimeout(function () {
	            if (_this.autoCompleteInput) {
	                _this.autoCompleteInput.nativeElement.focus();
	            }
	        });
	    };
	    Ng2AutoCompleteComponent.prototype.showDropdownList = function (event) {
	        this.dropdownVisible = true;
	        this.reloadList(event.target.value);
	    };
	    Ng2AutoCompleteComponent.prototype.hideDropdownList = function () {
	        this.dropdownVisible = false;
	    };
	    Ng2AutoCompleteComponent.prototype.reloadList = function (keyword) {
	        var _this = this;
	        this.filteredList = [];
	        if (keyword.length < (this.minChars || 0)) {
	            this.minCharsEntered = false;
	            return;
	        }
	        else {
	            this.minCharsEntered = true;
	        }
	        if (this.isSrcArr()) {
	            this.isLoading = false;
	            this.filteredList = this.autoComplete.filter(this.source, keyword);
	            if (this.maxNumList) {
	                this.filteredList = this.filteredList.slice(0, this.maxNumList);
	            }
	        }
	        else {
	            this.isLoading = true;
	            if (typeof this.source === "function") {
	                // custom function that returns observable
	                this.source(keyword).subscribe(function (resp) {
	                    if (_this.pathToData) {
	                        var paths = _this.pathToData.split(".");
	                        paths.forEach(function (prop) { return resp = resp[prop]; });
	                    }
	                    _this.filteredList = resp;
	                    if (_this.maxNumList) {
	                        _this.filteredList = _this.filteredList.slice(0, _this.maxNumList);
	                    }
	                }, function (error) { return null; }, function () { return _this.isLoading = false; } // complete
	                );
	            }
	            else {
	                // remote source
	                this.autoComplete.getRemoteData(keyword).subscribe(function (resp) {
	                    _this.filteredList = resp;
	                    if (_this.maxNumList) {
	                        _this.filteredList = _this.filteredList.slice(0, _this.maxNumList);
	                    }
	                }, function (error) { return null; }, function () { return _this.isLoading = false; } // complete
	                );
	            }
	        }
	    };
	    Ng2AutoCompleteComponent.prototype.selectOne = function (data) {
	        this.valueSelected.emit(data);
	    };
	    ;
	    Ng2AutoCompleteComponent.prototype.getFormattedList = function (data) {
	        var formatter = this.listFormatter || this.defaultListFormatter;
	        return formatter.apply(this, [data]);
	    };
	    Object.defineProperty(Ng2AutoCompleteComponent.prototype, "emptyList", {
	        get: function () {
	            return !(this.isLoading ||
	                (this.minCharsEntered && !this.isLoading && !this.filteredList.length) ||
	                (this.filteredList.length));
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Ng2AutoCompleteComponent.prototype.defaultListFormatter = function (data) {
	        var html = "";
	        html += data[this.valuePropertyName] ? "<b>(" + data[this.valuePropertyName] + ")</b>" : "";
	        html += data[this.displayPropertyName] ? "<span>" + data[this.displayPropertyName] + "</span>" : data;
	        return html;
	    };
	    __decorate([
	        core_1.Input("list-formatter"), 
	        __metadata('design:type', Function)
	    ], Ng2AutoCompleteComponent.prototype, "listFormatter", void 0);
	    __decorate([
	        core_1.Input("source"), 
	        __metadata('design:type', Object)
	    ], Ng2AutoCompleteComponent.prototype, "source", void 0);
	    __decorate([
	        core_1.Input("path-to-data"), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteComponent.prototype, "pathToData", void 0);
	    __decorate([
	        core_1.Input("min-chars"), 
	        __metadata('design:type', Number)
	    ], Ng2AutoCompleteComponent.prototype, "minChars", void 0);
	    __decorate([
	        core_1.Input("value-property-name"), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteComponent.prototype, "valuePropertyName", void 0);
	    __decorate([
	        core_1.Input("display-property-name"), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteComponent.prototype, "displayPropertyName", void 0);
	    __decorate([
	        core_1.Input("placeholder"), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteComponent.prototype, "placeholder", void 0);
	    __decorate([
	        core_1.Input("blank-option-text"), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteComponent.prototype, "blankOptionText", void 0);
	    __decorate([
	        core_1.Input("no-match-found-text"), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteComponent.prototype, "noMatchFoundText", void 0);
	    __decorate([
	        core_1.Input("accept-user-input"), 
	        __metadata('design:type', Boolean)
	    ], Ng2AutoCompleteComponent.prototype, "acceptUserInput", void 0);
	    __decorate([
	        core_1.Input("loading-text"), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteComponent.prototype, "loadingText", void 0);
	    __decorate([
	        core_1.Input("max-num-list"), 
	        __metadata('design:type', Number)
	    ], Ng2AutoCompleteComponent.prototype, "maxNumList", void 0);
	    __decorate([
	        core_1.Input("show-input-tag"), 
	        __metadata('design:type', Boolean)
	    ], Ng2AutoCompleteComponent.prototype, "showInputTag", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], Ng2AutoCompleteComponent.prototype, "valueSelected", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], Ng2AutoCompleteComponent.prototype, "inputChanged", void 0);
	    __decorate([
	        core_1.ViewChild('autoCompleteInput'), 
	        __metadata('design:type', core_1.ElementRef)
	    ], Ng2AutoCompleteComponent.prototype, "autoCompleteInput", void 0);
	    Ng2AutoCompleteComponent = __decorate([
	        core_1.Component({
	            selector: "ng2-auto-complete",
	            template: "\n  <div class=\"ng2-auto-complete\">\n\n    <!-- keyword input -->\n    <input *ngIf=\"showInputTag\"\n           #autoCompleteInput class=\"keyword\"\n           placeholder=\"{{placeholder}}\"\n           (focus)=\"showDropdownList($event)\"\n           (blur)=\"hideDropdownList()\"\n           (keydown)=\"inputElKeyHandler($event)\"\n           (input)=\"reloadListInDelay($event)\"\n           [(ngModel)]=\"keyword\" />\n\n    <!-- dropdown that user can select -->\n    <ul *ngIf=\"dropdownVisible\" [class.empty]=\"emptyList\">\n      <li *ngIf=\"isLoading\" class=\"loading\">{{loadingText}}</li>\n      <li *ngIf=\"minCharsEntered && !isLoading && !filteredList.length\"\n           (mousedown)=\"selectOne('')\"\n           class=\"blank-item\">{{noMatchFoundText || 'No Result Found'}}</li>\n      <li *ngIf=\"blankOptionText && filteredList.length\"\n          (mousedown)=\"selectOne('')\"\n          class=\"blank-item\">{{blankOptionText}}</li>\n      <li class=\"item\"\n          *ngFor=\"let item of filteredList; let i=index\"\n          (mousedown)=\"selectOne(item)\"\n          [ngClass]=\"{selected: i === itemIndex}\"\n          [innerHtml]=\"getFormattedList(item)\">\n      </li>\n    </ul>\n\n  </div>",
	            providers: [ng2_auto_complete_1.Ng2AutoComplete],
	            styles: ["\n  @keyframes slideDown {\n    0% {\n      transform:  translateY(-10px);\n    }\n    100% {\n      transform: translateY(0px);\n    }\n  }\n  .ng2-auto-complete {\n    background-color: transparent;\n  }\n  .ng2-auto-complete > input {\n    outline: none;\n    border: 0;\n    padding: 2px; \n    box-sizing: border-box;\n    background-clip: content-box;\n  }\n\n  .ng2-auto-complete > ul {\n    background-color: #fff;\n    margin: 0;\n    width : 100%;\n    overflow-y: auto;\n    list-style-type: none;\n    padding: 0;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    animation: slideDown 0.1s;\n  }\n  .ng2-auto-complete > ul.empty {\n    display: none;\n  }\n\n  .ng2-auto-complete > ul li {\n    padding: 2px 5px;\n    border-bottom: 1px solid #eee;\n  }\n\n  .ng2-auto-complete > ul li.selected {\n    background-color: #ccc;\n  }\n\n  .ng2-auto-complete > ul li:last-child {\n    border-bottom: none;\n  }\n\n  .ng2-auto-complete > ul li:hover {\n    background-color: #ccc;\n  }"
	            ],
	            encapsulation: core_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, ng2_auto_complete_1.Ng2AutoComplete])
	    ], Ng2AutoCompleteComponent);
	    return Ng2AutoCompleteComponent;
	}());
	exports.Ng2AutoCompleteComponent = Ng2AutoCompleteComponent;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var ng2_auto_complete_component_1 = __webpack_require__(8);
	var forms_1 = __webpack_require__(7);
	/**
	 * display auto-complete section with input and dropdown list when it is clicked
	 */
	var Ng2AutoCompleteDirective = (function () {
	    function Ng2AutoCompleteDirective(resolver, renderer, viewContainerRef, parentForm) {
	        var _this = this;
	        this.resolver = resolver;
	        this.renderer = renderer;
	        this.viewContainerRef = viewContainerRef;
	        this.parentForm = parentForm;
	        this.loadingText = "Loading";
	        this.ngModelChange = new core_1.EventEmitter();
	        this.valueChanged = new core_1.EventEmitter();
	        this.hideAutoCompleteDropdown = function (event) {
	            if (_this.componentRef) {
	                if (event && event.type === "click" &&
	                    event.target.tagName !== "INPUT" && !_this.elementIn(event.target, _this.acDropdownEl)) {
	                    _this.componentRef.destroy();
	                    _this.componentRef = undefined;
	                }
	                else if (!event) {
	                    _this.componentRef.destroy();
	                    _this.componentRef = undefined;
	                }
	            }
	        };
	        this.styleAutoCompleteDropdown = function () {
	            if (_this.componentRef) {
	                var component = _this.componentRef.instance;
	                /* setting width/height auto complete */
	                var thisElBCR = _this.el.getBoundingClientRect();
	                var thisInputElBCR = _this.inputEl.getBoundingClientRect();
	                var closeToBottom = thisInputElBCR.bottom + 100 > window.innerHeight;
	                _this.acDropdownEl.style.width = thisElBCR.width + "px";
	                _this.acDropdownEl.style.position = "absolute";
	                _this.acDropdownEl.style.zIndex = "1";
	                _this.acDropdownEl.style.left = "0";
	                _this.acDropdownEl.style.display = "inline-block";
	                if (closeToBottom) {
	                    _this.acDropdownEl.style.bottom = thisInputElBCR.height + "px";
	                }
	                else {
	                    _this.acDropdownEl.style.top = thisInputElBCR.height + "px";
	                }
	            }
	        };
	        this.componentInputChanged = function (val) {
	            if (_this.acceptUserInput !== false) {
	                _this.inputEl.value = val;
	                if ((_this.parentForm && _this.formControlName) || _this.extFormControl) {
	                    _this.formControl.patchValue(val);
	                }
	                (val !== _this.ngModel) && _this.ngModelChange.emit(val);
	                _this.valueChanged.emit(val);
	            }
	        };
	        this.selectNewValue = function (val) {
	            if (val !== '') {
	                val = _this.addToStringFunction(val);
	            }
	            if ((_this.parentForm && _this.formControlName) || _this.extFormControl) {
	                if (!!val) {
	                    _this.formControl.patchValue(val);
	                }
	            }
	            (val !== _this.ngModel) && _this.ngModelChange.emit(val);
	            _this.valueChanged.emit(val);
	            _this.inputEl && (_this.inputEl.value = '' + val);
	            _this.hideAutoCompleteDropdown();
	        };
	        this.keydownEventHandler = function (evt) {
	            if (_this.componentRef) {
	                var component = _this.componentRef.instance;
	                component.inputElKeyHandler(evt);
	            }
	        };
	        this.inputEventHandler = function (evt) {
	            if (_this.componentRef) {
	                var component = _this.componentRef.instance;
	                component.dropdownVisible = true;
	                component.reloadListInDelay(evt);
	            }
	            else {
	                _this.showAutoCompleteDropdown();
	            }
	        };
	        this.el = this.viewContainerRef.element.nativeElement;
	    }
	    Ng2AutoCompleteDirective.prototype.ngOnInit = function () {
	        // wrap this element with <div class="ng2-auto-complete">
	        var divEl = document.createElement("div");
	        divEl.className = "ng2-auto-complete-wrapper";
	        divEl.style.position = "relative";
	        this.el.parentElement.insertBefore(divEl, this.el.nextSibling);
	        divEl.appendChild(this.el);
	        // apply toString() method for the object
	        this.selectNewValue(this.ngModel);
	        //Check if we were supplied with a [formControlName] and it is inside a [form]
	        //else check if we are supplied with a [FormControl] regardless if it is inside a [form] tag
	        if (this.parentForm && this.formControlName) {
	            if (this.parentForm['form']) {
	                this.formControl = this.parentForm['form'].get(this.formControlName);
	            }
	        }
	        else if (this.extFormControl) {
	            this.formControl = this.extFormControl;
	        }
	        // when somewhere else clicked, hide this autocomplete
	        document.addEventListener("click", this.hideAutoCompleteDropdown);
	    };
	    Ng2AutoCompleteDirective.prototype.ngOnDestroy = function () {
	        if (this.componentRef) {
	            this.componentRef.instance.valueSelected.unsubscribe();
	            this.componentRef.instance.inputChanged.unsubscribe();
	        }
	        document.removeEventListener("click", this.hideAutoCompleteDropdown);
	    };
	    Ng2AutoCompleteDirective.prototype.ngOnChanges = function (changes) {
	        if (changes['ngModel']) {
	            this.ngModel = this.addToStringFunction(changes['ngModel'].currentValue);
	        }
	    };
	    //show auto-complete list below the current element
	    Ng2AutoCompleteDirective.prototype.showAutoCompleteDropdown = function () {
	        var _this = this;
	        var factory = this.resolver.resolveComponentFactory(ng2_auto_complete_component_1.Ng2AutoCompleteComponent);
	        this.componentRef = this.viewContainerRef.createComponent(factory);
	        var component = this.componentRef.instance;
	        component.showInputTag = false; //Do NOT display autocomplete input tag separately
	        component.listFormatter = this.listFormatter;
	        component.pathToData = this.pathToData;
	        component.minChars = this.minChars;
	        component.valuePropertyName = this.valuePropertyName || "id";
	        component.displayPropertyName = this.displayPropertyName || "value";
	        component.source = this.source;
	        component.placeholder = this.autoCompletePlaceholder;
	        component.blankOptionText = this.blankOptionText;
	        component.noMatchFoundText = this.noMatchFoundText;
	        component.acceptUserInput = this.acceptUserInput;
	        component.loadingText = this.loadingText;
	        component.maxNumList = parseInt(this.maxNumList, 10);
	        component.valueSelected.subscribe(this.selectNewValue);
	        component.inputChanged.subscribe(this.componentInputChanged);
	        this.acDropdownEl = this.componentRef.location.nativeElement;
	        this.acDropdownEl.style.display = "none";
	        // if this element is not an input tag, move dropdown after input tag
	        // so that it displays correctly
	        this.moveAutocompleteDropDownAfterInputEl();
	        setTimeout(function () {
	            component.reloadList(_this.inputEl.value);
	            _this.styleAutoCompleteDropdown();
	            component.dropdownVisible = true;
	        });
	    };
	    Ng2AutoCompleteDirective.prototype.addToStringFunction = function (val) {
	        if (val && typeof val === "object") {
	            var displayVal_1 = val[this.displayPropertyName || "value"];
	            val.toString = function () {
	                return displayVal_1;
	            };
	        }
	        return val;
	    };
	    Ng2AutoCompleteDirective.prototype.moveAutocompleteDropDownAfterInputEl = function () {
	        this.inputEl = this.el;
	        if (this.el.tagName !== "INPUT" && this.acDropdownEl) {
	            this.inputEl = this.el.querySelector("input");
	            this.inputEl.parentElement.insertBefore(this.acDropdownEl, this.inputEl.nextSibling);
	        }
	    };
	    Ng2AutoCompleteDirective.prototype.elementIn = function (el, containerEl) {
	        while (el = el.parentNode) {
	            if (el === containerEl) {
	                return true;
	            }
	        }
	        return false;
	    };
	    __decorate([
	        core_1.Input("auto-complete-placeholder"), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteDirective.prototype, "autoCompletePlaceholder", void 0);
	    __decorate([
	        core_1.Input("list-formatter"), 
	        __metadata('design:type', Function)
	    ], Ng2AutoCompleteDirective.prototype, "listFormatter", void 0);
	    __decorate([
	        core_1.Input("source"), 
	        __metadata('design:type', Object)
	    ], Ng2AutoCompleteDirective.prototype, "source", void 0);
	    __decorate([
	        core_1.Input("path-to-data"), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteDirective.prototype, "pathToData", void 0);
	    __decorate([
	        core_1.Input("min-chars"), 
	        __metadata('design:type', Number)
	    ], Ng2AutoCompleteDirective.prototype, "minChars", void 0);
	    __decorate([
	        core_1.Input("value-property-name"), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteDirective.prototype, "valuePropertyName", void 0);
	    __decorate([
	        core_1.Input("display-property-name"), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteDirective.prototype, "displayPropertyName", void 0);
	    __decorate([
	        core_1.Input("blank-option-text"), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteDirective.prototype, "blankOptionText", void 0);
	    __decorate([
	        core_1.Input("no-match-found-text"), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteDirective.prototype, "noMatchFoundText", void 0);
	    __decorate([
	        core_1.Input("accept-user-input"), 
	        __metadata('design:type', Boolean)
	    ], Ng2AutoCompleteDirective.prototype, "acceptUserInput", void 0);
	    __decorate([
	        core_1.Input("loading-text"), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteDirective.prototype, "loadingText", void 0);
	    __decorate([
	        core_1.Input("max-num-list"), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteDirective.prototype, "maxNumList", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteDirective.prototype, "ngModel", void 0);
	    __decorate([
	        core_1.Input('formControlName'), 
	        __metadata('design:type', String)
	    ], Ng2AutoCompleteDirective.prototype, "formControlName", void 0);
	    __decorate([
	        core_1.Input('formControl'), 
	        __metadata('design:type', forms_1.FormControl)
	    ], Ng2AutoCompleteDirective.prototype, "extFormControl", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], Ng2AutoCompleteDirective.prototype, "ngModelChange", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], Ng2AutoCompleteDirective.prototype, "valueChanged", void 0);
	    Ng2AutoCompleteDirective = __decorate([
	        core_1.Directive({
	            selector: "[auto-complete], [ng2-auto-complete]",
	            host: {
	                "(focus)": "showAutoCompleteDropdown()",
	                "(blur)": "hideAutoCompleteDropdown()",
	                "(keydown)": "keydownEventHandler($event)",
	                "(input)": "inputEventHandler($event)"
	            }
	        }),
	        __param(3, core_1.Optional()),
	        __param(3, core_1.Host()),
	        __param(3, core_1.SkipSelf()), 
	        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, core_1.Renderer, core_1.ViewContainerRef, forms_1.ControlContainer])
	    ], Ng2AutoCompleteDirective);
	    return Ng2AutoCompleteDirective;
	}());
	exports.Ng2AutoCompleteDirective = Ng2AutoCompleteDirective;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-auto-complete.umd.js.map