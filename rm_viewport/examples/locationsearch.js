/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"locationsearch": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([22,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/locationsearch.css":
/*!*************************************!*\
  !*** ./examples/locationsearch.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./examples/locationsearch.css?");

/***/ }),

/***/ "./examples/locationsearch.js":
/*!************************************!*\
  !*** ./examples/locationsearch.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _locationsearch_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locationsearch.css */ \"./examples/locationsearch.css\");\n/* harmony import */ var _locationsearch_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_locationsearch_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/map/module.js */ \"./src/map/module.js\");\n/* harmony import */ var ngeo_search_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/search/module.js */ \"./src/search/module.js\");\n/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/proj.js */ \"./node_modules/ol/proj.js\");\n/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Map.js */ \"./node_modules/ol/Map.js\");\n/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/View.js */ \"./node_modules/ol/View.js\");\n/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/layer/Tile.js */ \"./node_modules/ol/layer/Tile.js\");\n/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/source/OSM.js */ \"./node_modules/ol/source/OSM.js\");\nSearchController.$inject = [\"ngeoCreateLocationSearchBloodhound\"];\n\n\n\n\n\n\n\n\n\nvar appmodule = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].name, ngeo_search_module_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].name]);\nvar locationSearchComponent = {\n  bindings: {\n    'map': '=appSearchMap'\n  },\n  controller: 'AppSearchController',\n  template: '<input type=\"text\" placeholder=\"Search…\" ' + 'ngeo-search=\"$ctrl.options\" ' + 'ngeo-search-datasets=\"$ctrl.datasets\" ' + 'ngeo-search-listeners=\"$ctrl.listeners\">'\n};\nappmodule.component('appLocationSearch', locationSearchComponent);\n\nfunction SearchController(ngeoCreateLocationSearchBloodhound) {\n  var _this = this;\n\n  this.map = null;\n  var limit = 10;\n  var bloodhoundEngine = this.createAndInitBloodhound_(ngeoCreateLocationSearchBloodhound, limit);\n  this.options = {\n    highlight: true,\n    hint: undefined,\n    minLength: undefined\n  };\n  this.datasets = [{\n    source: bloodhoundEngine.ttAdapter(),\n    limit: limit,\n    display: function display(suggestion) {\n      var feature = suggestion;\n      return feature.get('label_no_html');\n    },\n    templates: {\n      header: function header() {\n        return '<div class=\"ngeo-header\">Locations</div>';\n      },\n      suggestion: function suggestion(_suggestion) {\n        var feature = _suggestion;\n        return \"<p>\" + feature.get('label') + \"</p>\";\n      }\n    }\n  }];\n  this.listeners = {\n    select: function select(event, suggestion, dataset) {\n      if (!_this.map) {\n        throw new Error('Missing map');\n      }\n\n      var feature = suggestion;\n      var bbox = feature.get('bbox');\n\n      var size = _this.map.getSize();\n\n      if (!size) {\n        throw new Error('issing size');\n      }\n\n      var maxZoom = 16;\n\n      _this.map.getView().fit(bbox, {\n        size: size,\n        maxZoom: maxZoom\n      });\n    }\n  };\n}\n\nSearchController.prototype.createAndInitBloodhound_ = function (ngeoCreateLocationSearchBloodhound, limit) {\n  var epsg3857 = ol_proj_js__WEBPACK_IMPORTED_MODULE_4__[\"get\"]('EPSG:3857');\n\n  if (!epsg3857) {\n    throw new Error('Missing epsg3857');\n  }\n\n  var bloodhound = ngeoCreateLocationSearchBloodhound({\n    targetProjection: epsg3857,\n    limit: limit,\n    origins: 'gazetteer',\n    prepare: function prepare(query, settings) {\n      var lang = 'fr';\n      settings.url += \"&lang=\" + lang;\n      return settings;\n    }\n  });\n  bloodhound.initialize();\n  return bloodhound;\n};\n\nappmodule.controller('AppSearchController', SearchController);\n\nfunction MainController() {\n  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]({\n      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]()\n    })],\n    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n      center: [0, 0],\n      zoom: 4\n    })\n  });\n}\n\nappmodule.controller('MainController', MainController);\n/* harmony default export */ __webpack_exports__[\"default\"] = (module);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./examples/locationsearch.js?");

/***/ }),

/***/ 22:
/*!***********************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/locationsearch.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./examples/common_dependencies.js */\"./examples/common_dependencies.js\");\n__webpack_require__(/*! ngeo/mainmodule.js */\"./src/mainmodule.js\");\nmodule.exports = __webpack_require__(/*! ./examples/locationsearch.js */\"./examples/locationsearch.js\");\n\n\n//# sourceURL=webpack:///multi_./examples/common_dependencies.js_ngeo/mainmodule.js_./examples/locationsearch.js?");

/***/ }),

/***/ "dll-reference vendor":
/*!*************************!*\
  !*** external "vendor" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor;\n\n//# sourceURL=webpack:///external_%22vendor%22?");

/***/ })

/******/ });