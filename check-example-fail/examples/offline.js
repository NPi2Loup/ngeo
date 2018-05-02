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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/ 		"offline": 0
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
/******/ 	deferredModules.push([30,"commons"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./examples/offline.css":
/*!******************************!*\
  !*** ./examples/offline.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./examples/offline.js":
/*!*****************************!*\
  !*** ./examples/offline.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_free_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/fontawesome.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _offline_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offline.css */ "./examples/offline.css");
/* harmony import */ var _offline_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_offline_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_dependencies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common_dependencies.js */ "./examples/common_dependencies.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/OSM.js */ "./node_modules/ol/source/OSM.js");
/* harmony import */ var ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngeo/map/module.js */ "./src/map/module.js");
/* harmony import */ var ngeo_offline_module_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngeo/offline/module.js */ "./src/offline/module.js");
/* harmony import */ var ngeo_offline_Configuration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngeo/offline/Configuration.js */ "./src/offline/Configuration.js");
/* harmony import */ var ngeo_offline_ServiceManager_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/offline/ServiceManager.js */ "./src/offline/ServiceManager.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_11__);













var MainController = function MainController(ngeoFeatureOverlayMgr, ngeoNetworkStatus, ngeoOfflineServiceManager) {
  this.offlineExtentSize = 10000;
  this.ngeoNetworkStatus = ngeoNetworkStatus;
  this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
    layers: [new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
      source: new ol_source_OSM_js__WEBPACK_IMPORTED_MODULE_6__["default"]()
    })],
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      center: [352379, 5172733],
      zoom: 4
    })
  });
  ngeoFeatureOverlayMgr.init(this.map);
  ngeoOfflineServiceManager.setSaveService('offlineDownloader');
  ngeoOfflineServiceManager.setRestoreService('ngeoOfflineRestorer');
};

MainController.$inject = ["ngeoFeatureOverlayMgr", "ngeoNetworkStatus", "ngeoOfflineServiceManager"];
MainController.$inject = ["ngeoFeatureOverlayMgr", "ngeoNetworkStatus", "ngeoOfflineServiceManager"];
MainController.module = angular__WEBPACK_IMPORTED_MODULE_11___default.a.module('app', ['gettext', ngeo_map_module_js__WEBPACK_IMPORTED_MODULE_7__["default"].name, ngeo_offline_module_js__WEBPACK_IMPORTED_MODULE_8__["default"].name, ngeo_offline_ServiceManager_js__WEBPACK_IMPORTED_MODULE_10__["default"].module.name]);
MainController.module.value('ngeoOfflineTestUrl', '../../src/offline/component.html');
ngeo_offline_module_js__WEBPACK_IMPORTED_MODULE_8__["default"].service('ngeoOfflineConfiguration', ngeo_offline_Configuration_js__WEBPACK_IMPORTED_MODULE_9__["default"]);
MainController.module.controller('MainController', MainController);
/* harmony default export */ __webpack_exports__["default"] = (MainController);

/***/ }),

/***/ "./node_modules/localforage/src/localforage.js":
/*!*****************************************************************************************!*\
  !*** delegated ./node_modules/localforage/src/localforage.js from dll-reference vendor ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(1031);

/***/ }),

/***/ "./node_modules/ol/tilegrid.js":
/*!*************************************************************************!*\
  !*** delegated ./node_modules/ol/tilegrid.js from dll-reference vendor ***!
  \*************************************************************************/
/*! exports provided: getForProjection, wrapX, createForExtent, createXYZ, createForProjection, extentFromProjection */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(74);

/***/ }),

/***/ "./node_modules/ol/tilegrid/TileGrid.js":
/*!**********************************************************************************!*\
  !*** delegated ./node_modules/ol/tilegrid/TileGrid.js from dll-reference vendor ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference vendor */ "dll-reference vendor"))(182);

/***/ }),

/***/ "./src/offline/AbstractLocalforageWrapper.js":
/*!***************************************************!*\
  !*** ./src/offline/AbstractLocalforageWrapper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Action;

var exports = function () {
  function AbstractLocalforageWrapper() {
    this.waitingPromises_ = new Map();
    this.currentId_ = 0;
  }

  var _proto = AbstractLocalforageWrapper.prototype;

  _proto.setItem = function setItem() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return this.createAction.apply(this, ['setItem'].concat(args));
  };

  _proto.getItem = function getItem() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return this.createAction.apply(this, ['getItem'].concat(args));
  };

  _proto.clear = function clear() {
    return this.createAction('clear');
  };

  _proto.config = function config() {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    return this.createAction.apply(this, ['config'].concat(args));
  };

  _proto.createAction = function createAction(command) {
    var id = ++this.currentId_;

    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    var action = {
      'plugin': 'localforage',
      'command': command,
      'args': args,
      'id': id
    };
    var waitingPromise = {
      resolve: function resolve() {},
      reject: function reject() {}
    };
    var promise = new Promise(function (resolve, reject) {
      waitingPromise.resolve = resolve;
      waitingPromise.reject = reject;
    });
    this.waitingPromises_.set(id, waitingPromise);
    this.postToBackend(action);
    return promise;
  };

  _proto.receiveMessage = function receiveMessage(event) {
    var action = event['data'];
    var id = action['id'];
    var command = action['command'];
    var args = action['args'] || [];
    var context = action['context'];
    var msg = action['msg'];
    var waitingPromise = this.waitingPromises_.get(id);

    if (command === 'error') {
      console.error(msg, args, context);

      if (waitingPromise) {
        waitingPromise.reject(args, context);
        this.waitingPromises_["delete"](id);
      }
    } else if (command === 'response') {
      waitingPromise.resolve.apply(waitingPromise, args);
      this.waitingPromises_["delete"](id);
    } else {
      console.error('Unhandled command', JSON.stringify(action, null, '\t'));
    }
  };

  _proto.postToBackend = function postToBackend(action) {};

  return AbstractLocalforageWrapper;
}();

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/Configuration.js":
/*!**************************************!*\
  !*** ./src/offline/Configuration.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var ol_Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/Observable.js */ "./node_modules/ol/Observable.js");
/* harmony import */ var ol_layer_Layer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/layer/Layer.js */ "./node_modules/ol/layer/Layer.js");
/* harmony import */ var ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/layer/Vector.js */ "./node_modules/ol/layer/Vector.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");
/* harmony import */ var ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer/Image.js */ "./node_modules/ol/layer/Image.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_source_Image_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/source/Image.js */ "./node_modules/ol/source/Image.js");
/* harmony import */ var ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/source/ImageWMS.js */ "./node_modules/ol/source/ImageWMS.js");
/* harmony import */ var ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/source/TileWMS.js */ "./node_modules/ol/source/TileWMS.js");
/* harmony import */ var ol_tilegrid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/tilegrid.js */ "./node_modules/ol/tilegrid.js");
/* harmony import */ var ngeo_offline_SerializerDeserializer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngeo/offline/SerializerDeserializer.js */ "./src/offline/SerializerDeserializer.js");
/* harmony import */ var ngeo_offline_LocalforageCordovaWrapper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngeo/offline/LocalforageCordovaWrapper.js */ "./src/offline/LocalforageCordovaWrapper.js");
/* harmony import */ var ngeo_offline_LocalforageAndroidWrapper_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngeo/offline/LocalforageAndroidWrapper.js */ "./src/offline/LocalforageAndroidWrapper.js");
/* harmony import */ var ngeo_offline_LocalforageIosWrapper_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngeo/offline/LocalforageIosWrapper.js */ "./src/offline/LocalforageIosWrapper.js");
/* harmony import */ var ngeo_CustomEvent_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngeo/CustomEvent.js */ "./src/CustomEvent.js");
/* harmony import */ var ngeo_offline_utils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngeo/offline/utils.js */ "./src/offline/utils.js");
/* harmony import */ var localforage_src_localforage_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! localforage/src/localforage.js */ "./node_modules/localforage/src/localforage.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



















var _default = function (_olObservable) {
  _default.$inject = ["$rootScope", "ngeoBackgroundLayerMgr", "ngeoOfflineGutter"];

  _inheritsLoose(_default, _olObservable);

  function _default($rootScope, ngeoBackgroundLayerMgr, ngeoOfflineGutter) {
    var _this;

    _this = _olObservable.call(this) || this;
    _this.localforage_ = _this.createLocalforage();

    _this.configureLocalforage();

    _this.rootScope_ = $rootScope;
    _this.hasData = false;

    _this.initializeHasOfflineData();

    _this.ngeoBackgroundLayerMgr_ = ngeoBackgroundLayerMgr;
    _this.serDes_ = new ngeo_offline_SerializerDeserializer_js__WEBPACK_IMPORTED_MODULE_10__["default"]({
      gutter: ngeoOfflineGutter
    });
    _this.gutter_ = ngeoOfflineGutter;
    return _this;
  }

  var _proto = _default.prototype;

  _proto.dispatchProgress_ = function dispatchProgress_(progress) {
    this.dispatchEvent(new ngeo_CustomEvent_js__WEBPACK_IMPORTED_MODULE_14__["default"]('progress', {
      'progress': progress
    }));
  };

  _proto.initializeHasOfflineData = function initializeHasOfflineData() {
    var _this2 = this;

    this.getItem('offline_content').then(function (value) {
      return _this2.setHasOfflineData(!!value);
    });
  };

  _proto.hasOfflineData = function hasOfflineData() {
    return this.hasData;
  };

  _proto.setHasOfflineData = function setHasOfflineData(value) {
    var needDigest = value !== this.hasData;
    this.hasData = value;

    if (needDigest) {
      this.rootScope_.$applyAsync();
    }
  };

  _proto.traceGetSetItem = function traceGetSetItem(msg, key, promise) {
    return promise;
  };

  _proto.createLocalforage = function createLocalforage() {
    if (location.search.includes('localforage=cordova')) {
      console.log('Using cordova localforage');
      return new ngeo_offline_LocalforageCordovaWrapper_js__WEBPACK_IMPORTED_MODULE_11__["default"]();
    } else if (location.search.includes('localforage=android')) {
      console.log('Using android localforage');
      return new ngeo_offline_LocalforageAndroidWrapper_js__WEBPACK_IMPORTED_MODULE_12__["default"]();
    } else if (location.search.includes('localforage=ios')) {
      console.log('Using ios localforage');
      return new ngeo_offline_LocalforageIosWrapper_js__WEBPACK_IMPORTED_MODULE_13__["default"]();
    }

    return localforage_src_localforage_js__WEBPACK_IMPORTED_MODULE_16__["default"];
  };

  _proto.configureLocalforage = function configureLocalforage() {
    this.localforage_.config({
      'name': 'ngeoOfflineStorage',
      'version': 1.0,
      'storeName': 'offlineStorage'
    });
  };

  _proto.getItem = function getItem(key) {
    var promise = this.localforage_['getItem'](key);
    return this.traceGetSetItem('getItem', key, promise);
  };

  _proto.removeItem = function removeItem(key) {
    var promise = this.localforage_['removeItem'](key);
    return this.traceGetSetItem('removeItem', key, promise);
  };

  _proto.setItem = function setItem(key, value) {
    var promise = this.localforage_['setItem'](key, value);
    return this.traceGetSetItem('setItem', key, promise);
  };

  _proto.clear = function clear() {
    this.setHasOfflineData(false);
    var promise = this.localforage_['clear']();
    return this.traceGetSetItem('clear', '', promise);
  };

  _proto.estimateLoadDataSize = function estimateLoadDataSize(map) {
    return 50;
  };

  _proto.getLayerKey = function getLayerKey(layerItem) {
    return layerItem.layer.get('label');
  };

  _proto.onTileDownloadSuccess = function onTileDownloadSuccess(progress, tile) {
    this.dispatchProgress_(progress);

    if (tile.response) {
      return this.setItem(Object(ngeo_offline_utils_js__WEBPACK_IMPORTED_MODULE_15__["normalizeURL"])(tile.url), tile.response);
    }

    return Promise.resolve();
  };

  _proto.onTileDownloadError = function onTileDownloadError(progress) {
    this.dispatchProgress_(progress);
    return Promise.resolve();
  };

  _proto.getExtentByZoom = function getExtentByZoom(map, layer, ancestors, userExtent) {
    var currentZoom = map.getView().getZoom();

    if (currentZoom === undefined) {
      throw new Error('Missing currentZoom');
    }

    var results = [];
    [0, 1, 2, 3, 4].forEach(function (dz) {
      results.push({
        zoom: currentZoom + dz,
        extent: userExtent
      });
    });
    return results;
  };

  _proto.sourceImageWMSToTileWMS = function sourceImageWMSToTileWMS(source, projection) {
    if (source instanceof ol_source_ImageWMS_js__WEBPACK_IMPORTED_MODULE_7__["default"] && source.getUrl() && source.getImageLoadFunction() === ol_source_Image_js__WEBPACK_IMPORTED_MODULE_6__["defaultImageLoadFunction"]) {
      var tileGrid = Object(ol_tilegrid_js__WEBPACK_IMPORTED_MODULE_9__["createForProjection"])(source.getProjection() || projection, 42, 256);
      var attributions = source.getAttributions() || '';
      var url = source.getUrl();

      if (!url || !attributions) {
        throw new Error('Invalid values');
      }

      source = new ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
        gutter: this.gutter_,
        url: url,
        tileGrid: tileGrid,
        attributions: attributions,
        projection: source.getProjection(),
        params: source.getParams()
      });
    }

    return source;
  };

  _proto.createLayerMetadatas = function createLayerMetadatas(map, userExtent) {
    var _this3 = this;

    var layersItems = [];

    var visitLayer = function visitLayer(layer, ancestors) {
      if (layer instanceof ol_layer_Layer_js__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        var extentByZoom = _this3.getExtentByZoom(map, layer, ancestors, userExtent);

        var projection = ol_proj_js__WEBPACK_IMPORTED_MODULE_5__["get"](map.getView().getProjection());

        var source = _this3.sourceImageWMSToTileWMS(layer.getSource(), projection);

        var layerType;
        var layerSerialization;

        if (layer instanceof ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_3__["default"] || layer instanceof ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_4__["default"]) {
          layerType = 'tile';
          layerSerialization = _this3.serDes_.serializeTileLayer(layer, source);
        } else if (layer instanceof ol_layer_Vector_js__WEBPACK_IMPORTED_MODULE_2__["default"]) {
          layerType = 'vector';
        }

        var backgroundLayer = _this3.ngeoBackgroundLayerMgr_.get(map) === layer;
        layersItems.push({
          backgroundLayer: backgroundLayer,
          map: map,
          extentByZoom: extentByZoom,
          layerType: layerType,
          layerSerialization: layerSerialization,
          layer: layer,
          source: source,
          ancestors: ancestors
        });
      }

      return true;
    };

    map.getLayers().forEach(function (root) {
      Object(ngeo_offline_utils_js__WEBPACK_IMPORTED_MODULE_15__["traverseLayer"])(root, [], visitLayer);
    });
    return layersItems;
  };

  _proto.createTileLoadFunction_ = function createTileLoadFunction_(offlineLayer) {
    var _this4 = this;

    var tileLoadFunction = function tileLoadFunction(imageTile, src) {
      _this4.getItem(Object(ngeo_offline_utils_js__WEBPACK_IMPORTED_MODULE_15__["normalizeURL"])(src)).then(function (content) {
        if (!content) {
          content = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
        }

        imageTile.getImage().src = content;
      });
    };

    return tileLoadFunction;
  };

  _proto.recreateOfflineLayer = function recreateOfflineLayer(offlineLayer) {
    if (offlineLayer.layerType === 'tile') {
      var serialization = offlineLayer.layerSerialization;

      if (serialization) {
        var tileLoadFunction = this.createTileLoadFunction_(offlineLayer);
        var layer = this.serDes_.deserializeTileLayer(serialization, tileLoadFunction);
        return layer;
      }
    }

    return null;
  };

  _proto.getMaxNumberOfParallelDownloads = function getMaxNumberOfParallelDownloads() {
    return 11;
  };

  return _default;
}(ol_Observable_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/offline/Downloader.js":
/*!***********************************!*\
  !*** ./src/offline/Downloader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/has.js */ "./node_modules/ol/has.js");
/* harmony import */ var ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/source/TileWMS.js */ "./node_modules/ol/source/TileWMS.js");
/* harmony import */ var ol_source_WMTS_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/source/WMTS.js */ "./node_modules/ol/source/WMTS.js");
/* harmony import */ var ngeo_offline_TilesDownloader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/offline/TilesDownloader.js */ "./src/offline/TilesDownloader.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_4__);






function magnitude2(a, b) {
  var magnitudeSquared = 0;

  for (var i = 0; i < a.length; ++i) {
    magnitudeSquared += Math.pow(a[i] - b[i], 2);
  }

  return magnitudeSquared;
}

var Downloader = function () {
  Downloader.$inject = ["ngeoOfflineConfiguration"];

  function Downloader(ngeoOfflineConfiguration) {
    this.configuration_ = ngeoOfflineConfiguration;
    this.tileDownloader_ = null;
  }

  var _proto = Downloader.prototype;

  _proto.cancel = function cancel() {
    if (this.tileDownloader_) {
      this.tileDownloader_.cancel();
    }
  };

  _proto.queueLayerTiles_ = function queueLayerTiles_(layerMetadata, queue) {
    var source = layerMetadata.source;
    var map = layerMetadata.map,
        extentByZoom = layerMetadata.extentByZoom;

    if (!source) {
      return;
    }

    console.assert(source instanceof ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_1__["default"] || source instanceof ol_source_WMTS_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
    var projection = map.getView().getProjection();
    var tileGrid = source.getTileGrid();
    var tileUrlFunction = source.getTileUrlFunction();
    console.assert(extentByZoom);

    var _loop = function _loop() {
      if (_isArray) {
        if (_i >= _iterator.length) return "break";
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) return "break";
        _ref = _i.value;
      }

      var extentZoom = _ref;
      var z = extentZoom.zoom;
      var extent = extentZoom.extent;
      var queueByZ = [];
      var minX = void 0;
      var minY = void 0;
      var maxX = void 0;
      var maxY = void 0;
      tileGrid.forEachTileCoord(extent, z, function (coord) {
        maxX = coord[1];
        maxY = coord[2];

        if (minX === undefined || minY === undefined) {
          minX = coord[1];
          minY = coord[2];
        }

        var url = tileUrlFunction(coord, ol_has_js__WEBPACK_IMPORTED_MODULE_0__["DEVICE_PIXEL_RATIO"], projection);
        console.assert(url);

        if (url) {
          var tile = {
            coord: coord,
            url: url,
            response: null
          };
          queueByZ.push(tile);
        }
      });
      var centerTileCoord = [z, (minX + maxX) / 2, (minY + maxY) / 2];
      queueByZ.sort(function (a, b) {
        return magnitude2(a.coord, centerTileCoord) - magnitude2(b.coord, centerTileCoord);
      });
      queue.push.apply(queue, queueByZ);
    };

    for (var _iterator = extentByZoom, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      var _ret = _loop();

      if (_ret === "break") break;
    }
  };

  _proto.save = function save(extent, map) {
    var _this = this;

    var layersMetadatas = this.configuration_.createLayerMetadatas(map, extent);
    var persistentLayers = [];
    var queue = [];
    var zooms = [];

    for (var _iterator2 = layersMetadatas, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var layerItem = _ref2;

      if (layerItem.layerType === 'tile') {
        var tiles = [];
        this.queueLayerTiles_(layerItem, tiles);
        queue.push.apply(queue, tiles);
      }

      persistentLayers.push({
        backgroundLayer: layerItem.backgroundLayer,
        layerType: layerItem.layerType,
        layerSerialization: layerItem.layerSerialization,
        key: this.configuration_.getLayerKey(layerItem)
      });
      layerItem.extentByZoom.forEach(function (obj) {
        var zoom = obj.zoom;

        if (!zooms.includes(zoom)) {
          zooms.push(zoom);
        }
      });
    }

    var persistentObject = {
      extent: extent,
      layers: persistentLayers,
      zooms: zooms.sort(function (a, b) {
        return a < b ? -1 : 1;
      })
    };
    var setOfflineContentPromise = this.configuration_.setItem('offline_content', persistentObject);
    var maxDownloads = this.configuration_.getMaxNumberOfParallelDownloads();
    this.tileDownloader_ = new ngeo_offline_TilesDownloader_js__WEBPACK_IMPORTED_MODULE_3__["default"](queue, this.configuration_, maxDownloads);
    var tileDownloadPromise = this.tileDownloader_.download();
    var allPromise = Promise.all([setOfflineContentPromise, tileDownloadPromise]);

    var setHasOfflineData = function setHasOfflineData() {
      return _this.configuration_.setHasOfflineData(true);
    };

    allPromise.then(setHasOfflineData, setHasOfflineData);
    return allPromise;
  };

  return Downloader;
}();

var name = 'offlineDownloader';
Downloader.module = angular__WEBPACK_IMPORTED_MODULE_4___default.a.module(name, []).service(name, Downloader);
var exports = Downloader;
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/LocalforageAndroidWrapper.js":
/*!**************************************************!*\
  !*** ./src/offline/LocalforageAndroidWrapper.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/AbstractLocalforageWrapper.js */ "./src/offline/AbstractLocalforageWrapper.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var exports = function (_AbstractWrapper) {
  _inheritsLoose(AndroidWrapper, _AbstractWrapper);

  function AndroidWrapper() {
    var _this;

    _this = _AbstractWrapper.call(this) || this;
    window.androidWrapper = _assertThisInitialized(_this);
    return _this;
  }

  var _proto = AndroidWrapper.prototype;

  _proto.postToBackend = function postToBackend(action) {
    var stringified = JSON.stringify(action);
    window.ngeoHost.postMessageToAndroid(stringified);
  };

  _proto.receiveFromAndroid = function receiveFromAndroid(actionString) {
    var action = JSON.parse(actionString);
    this.receiveMessage({
      'data': action
    });
  };

  return AndroidWrapper;
}(ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/LocalforageCordovaWrapper.js":
/*!**************************************************!*\
  !*** ./src/offline/LocalforageCordovaWrapper.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/AbstractLocalforageWrapper.js */ "./src/offline/AbstractLocalforageWrapper.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var exports = function (_AbstractWrapper) {
  _inheritsLoose(CordovaWrapper, _AbstractWrapper);

  function CordovaWrapper() {
    var _this;

    _this = _AbstractWrapper.call(this) || this;
    window.addEventListener('message', _this.receiveMessage.bind(_assertThisInitialized(_this)), false);
    return _this;
  }

  var _proto = CordovaWrapper.prototype;

  _proto.postToBackend = function postToBackend(action) {
    window['parent'].postMessage(action, '*');
  };

  return CordovaWrapper;
}(ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/LocalforageIosWrapper.js":
/*!**********************************************!*\
  !*** ./src/offline/LocalforageIosWrapper.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/AbstractLocalforageWrapper.js */ "./src/offline/AbstractLocalforageWrapper.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }



var exports = function (_AbstractWrapper) {
  _inheritsLoose(IosWrapper, _AbstractWrapper);

  function IosWrapper() {
    var _this;

    _this = _AbstractWrapper.call(this) || this;
    window.iosWrapper = _assertThisInitialized(_this);
    return _this;
  }

  var _proto = IosWrapper.prototype;

  _proto.postToBackend = function postToBackend(action) {
    if (action['command'] === 'setItem') {
      action['args'][1] = JSON.stringify(action['args'][1]);
    }

    var stringified = JSON.stringify(action);
    window.webkit.messageHandlers.ios.postMessage(stringified);
  };

  _proto.receiveFromIos = function receiveFromIos(actionString) {
    var action = JSON.parse(actionString);
    var args = action['args'] || [];
    action['args'] = args.map(function (item) {
      return JSON.parse(item);
    });
    this.receiveMessage({
      'data': action
    });
  };

  return IosWrapper;
}(ngeo_offline_AbstractLocalforageWrapper_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/Mode.js":
/*!*****************************!*\
  !*** ./src/offline/Mode.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);


var Mode = function () {
  Mode.$inject = ["ngeoOfflineConfiguration"];

  function Mode(ngeoOfflineConfiguration) {
    this.enabled_ = false;
    this.component_ = null;
    this.ngeoOfflineConfiguration_ = ngeoOfflineConfiguration;
  }

  var _proto = Mode.prototype;

  _proto.isEnabled = function isEnabled() {
    return this.enabled_;
  };

  _proto.enable = function enable() {
    this.enabled_ = true;
  };

  _proto.registerComponent = function registerComponent(component) {
    this.component_ = component;
  };

  _proto.activateOfflineMode = function activateOfflineMode() {
    if (!this.component_) {
      throw new Error('The component is not registered');
    }

    this.component_.activateOfflineMode();
  };

  _proto.hasData = function hasData() {
    return this.ngeoOfflineConfiguration_.hasOfflineData();
  };

  return Mode;
}();

var module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoOfflineMode', []);
module.service('ngeoOfflineMode', Mode);
Mode.module = module;
/* harmony default export */ __webpack_exports__["default"] = (Mode);

/***/ }),

/***/ "./src/offline/NetworkStatus.js":
/*!**************************************!*\
  !*** ./src/offline/NetworkStatus.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/misc/debounce.js */ "./src/misc/debounce.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);



var Service = function () {
  Service.$inject = ["$document", "$window", "$timeout", "$rootScope", "ngeoOfflineTestUrl"];

  function Service($document, $window, $timeout, $rootScope, ngeoOfflineTestUrl) {
    this.$document_ = $document;
    this.$window_ = $window;
    this.$timeout_ = $timeout;
    this.$rootScope_ = $rootScope;
    this.ngeoOfflineTestUrl_ = ngeoOfflineTestUrl;
    this.count_ = 0;
    this.offline_;
    this.promise_;
    this.initialize_();
  }

  var _proto = Service.prototype;

  _proto.initialize_ = function initialize_() {
    var _this = this;

    this.offline_ = !this.$window_.navigator.onLine;
    this.$window_.addEventListener('offline', function () {
      _this.triggerChangeStatusEvent_(true);
    });
    this.$window_.addEventListener('online', function () {
      _this.check(undefined);
    });

    if (this.$document_.ajaxError) {
      var onAjaxError = function onAjaxError(evt, jqxhr, settings, thrownError) {
        if (!/^(canceled|abort)$/.test(thrownError)) {
          _this.check(2000);
        }
      };

      this.$document_.ajaxError(onAjaxError);
    }
  };

  _proto.check = function check(timeout) {
    var _this2 = this;

    if (this.promise_) {
      this.$timeout_.cancel(this.promise_);
      this.promise_ = undefined;
    }

    if (timeout !== undefined) {
      this.count_++;
      this.promise_ = this.$timeout_(function () {
        return _this2.check();
      }, timeout);
      return;
    }

    $.ajax({
      method: 'GET',
      url: this.ngeoOfflineTestUrl_,
      timeout: 1000,
      success: function success() {
        _this2.count_ = 0;

        if (_this2.offline_) {
          _this2.triggerChangeStatusEvent_(false);
        }
      },
      error: function error() {
        _this2.count_++;

        if (_this2.count_ > 2 && !_this2.offline_) {
          _this2.triggerChangeStatusEvent_(true);
        }
      }
    });
  };

  _proto.triggerChangeStatusEvent_ = function triggerChangeStatusEvent_(offline) {
    this.offline_ = offline;
    this.$rootScope_.$digest();
  };

  _proto.isDisconnected = function isDisconnected() {
    return !!this.offline_;
  };

  return Service;
}();

var name = 'ngeoNetworkStatus';
Service.module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module(name, [ngeo_misc_debounce_js__WEBPACK_IMPORTED_MODULE_0__["default"].name]);
Service.module.service(name, Service);

var httpInterceptor = function httpInterceptor($q, ngeoDebounce, ngeoNetworkStatus) {
  var debouncedCheck = ngeoDebounce(function () {
    return ngeoNetworkStatus.check(undefined);
  }, 2000, false);
  return {
    request: function request(config) {
      return config;
    },
    requestError: function requestError(rejection) {
      return $q.reject(rejection);
    },
    response: function response(_response) {
      return _response;
    },
    responseError: function responseError(rejection) {
      debouncedCheck();
      return $q.reject(rejection);
    }
  };
};

httpInterceptor.$inject = ["$q", "ngeoDebounce", "ngeoNetworkStatus"];
httpInterceptor.$inject = ["$q", "ngeoDebounce", "ngeoNetworkStatus"];
Service.module.factory('httpInterceptor', httpInterceptor);

Service.module.configFunction_ = function ($httpProvider) {
  $httpProvider.interceptors.push('httpInterceptor');
};

Service.module.configFunction_.$inject = ["$httpProvider"];
Service.module.config(Service.module.configFunction_);
Service.module.value('ngeoOfflineTestUrl', '');
var exports = Service;
/* harmony default export */ __webpack_exports__["default"] = (exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/offline/Restorer.js":
/*!*********************************!*\
  !*** ./src/offline/Restorer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_map_BackgroundLayerMgr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/map/BackgroundLayerMgr.js */ "./src/map/BackgroundLayerMgr.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);



var Restorer = function () {
  Restorer.$inject = ["ngeoOfflineConfiguration", "ngeoBackgroundLayerMgr"];

  function Restorer(ngeoOfflineConfiguration, ngeoBackgroundLayerMgr) {
    this.configuration_ = ngeoOfflineConfiguration;
    this.ngeoBackgroundLayerMgr_ = ngeoBackgroundLayerMgr;
  }

  var _proto = Restorer.prototype;

  _proto.restore = function restore(map) {
    var _this = this;

    return this.configuration_.getItem('offline_content').then(function (offlineContent) {
      return _this.doRestore(map, offlineContent);
    });
  };

  _proto.doRestore = function doRestore(map, offlineContent) {
    map.getLayerGroup().getLayers().clear();

    for (var _iterator = offlineContent.layers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var offlineLayer = _ref;
      var layer = this.configuration_.recreateOfflineLayer(offlineLayer);

      if (layer) {
        map.addLayer(layer);

        if (offlineLayer.backgroundLayer) {
          this.ngeoBackgroundLayerMgr_.set(map, layer);
        }
      }
    }

    return offlineContent.extent;
  };

  return Restorer;
}();

var name = 'ngeoOfflineRestorer';
Restorer.module = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module(name, [ngeo_map_BackgroundLayerMgr_js__WEBPACK_IMPORTED_MODULE_0__["default"].name]).service(name, Restorer);
var exports = Restorer;
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/SerializerDeserializer.js":
/*!***********************************************!*\
  !*** ./src/offline/SerializerDeserializer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ol_tilegrid_TileGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/tilegrid/TileGrid.js */ "./node_modules/ol/tilegrid/TileGrid.js");
/* harmony import */ var ol_tilegrid_WMTS_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/tilegrid/WMTS.js */ "./node_modules/ol/tilegrid/WMTS.js");
/* harmony import */ var ol_proj_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/proj.js */ "./node_modules/ol/proj.js");
/* harmony import */ var ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/TileWMS.js */ "./node_modules/ol/source/TileWMS.js");
/* harmony import */ var ol_source_WMTS_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/source/WMTS.js */ "./node_modules/ol/source/WMTS.js");
/* harmony import */ var ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/layer/Tile.js */ "./node_modules/ol/layer/Tile.js");







var SerDes = function () {
  function SerDes(_ref) {
    var gutter = _ref.gutter;
    this.gutter_ = gutter;
  }

  var _proto = SerDes.prototype;

  _proto.createBaseObject_ = function createBaseObject_(olObject) {
    var properties = olObject.getProperties();
    var obj = {};

    for (var key in properties) {
      var value = properties[key];
      var typeOf = typeof value;

      if (typeOf === 'string' || typeOf === 'number') {
        obj[key] = value;
      }
    }

    return obj;
  };

  _proto.serializeTilegrid = function serializeTilegrid(tilegrid) {
    var obj = {};
    obj.extent = tilegrid.getExtent();
    obj.minZoom = tilegrid.getMinZoom();
    obj.origin = tilegrid.getOrigin(0);
    obj.resolutions = tilegrid.getResolutions();
    obj.tileSize = tilegrid.getTileSize(tilegrid.getMinZoom());
    return JSON.stringify(obj);
  };

  _proto.deserializeTilegrid = function deserializeTilegrid(serialization) {
    var options = JSON.parse(serialization);
    return new ol_tilegrid_TileGrid_js__WEBPACK_IMPORTED_MODULE_0__["default"](options);
  };

  _proto.serializeTilegridWMTS = function serializeTilegridWMTS(tilegrid) {
    if (!tilegrid) {
      return undefined;
    }

    var obj = {};
    var resolutions = tilegrid.getResolutions();
    obj.extent = tilegrid.getExtent();
    obj.minZoom = tilegrid.getMinZoom();
    obj.matrixIds = tilegrid.getMatrixIds();
    obj.resolutions = resolutions;
    obj.origins = [];

    for (var z = 0; z < resolutions.length; ++z) {
      obj.origins.push(tilegrid.getOrigin(z));
    }

    return JSON.stringify(obj);
  };

  _proto.deserializeTilegridWMTS = function deserializeTilegridWMTS(serialization) {
    var options = JSON.parse(serialization);
    return new ol_tilegrid_WMTS_js__WEBPACK_IMPORTED_MODULE_1__["default"](options);
  };

  _proto.serializeSourceTileWMS = function serializeSourceTileWMS(source) {
    var obj = this.createBaseObject_(source);
    obj.params = source.getParams();
    obj.urls = source.getUrls();
    obj.tileGrid = this.serializeTilegrid(source.getTileGrid());
    var projection = source.getProjection();

    if (projection) {
      obj.projection = ol_proj_js__WEBPACK_IMPORTED_MODULE_2__["get"](source.getProjection()).getCode();
    }

    return JSON.stringify(obj);
  };

  _proto.deserializeSourceTileWMS = function deserializeSourceTileWMS(serialization, tileLoadFunction) {
    var options = JSON.parse(serialization);
    options.tileLoadFunction = tileLoadFunction;

    if (options.tileGrid) {
      options.tileGrid = this.deserializeTilegrid(options.tileGrid);
    }

    options.gutter = this.gutter_;
    return new ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_3__["default"](options);
  };

  _proto.serializeSourceWMTS = function serializeSourceWMTS(source) {
    var obj = this.createBaseObject_(source);
    obj.dimensions = source.getDimensions();
    obj.format = source.getFormat();
    obj.urls = source.getUrls();
    obj.version = source.getVersion();
    obj.layer = source.getLayer();
    obj.style = source.getStyle();
    obj.matrixSet = source.getMatrixSet();
    var tileGridWMTS = source.getTileGrid();
    obj.tileGrid = this.serializeTilegridWMTS(tileGridWMTS);
    obj.requestEncoding = source.getRequestEncoding();
    var projection = source.getProjection();

    if (projection) {
      obj.projection = ol_proj_js__WEBPACK_IMPORTED_MODULE_2__["get"](source.getProjection()).getCode();
    }

    return JSON.stringify(obj);
  };

  _proto.deserializeSourceWMTS = function deserializeSourceWMTS(serialization, tileLoadFunction) {
    var options = JSON.parse(serialization);
    options.tileLoadFunction = tileLoadFunction;

    if (options.tileGrid) {
      options.tileGrid = this.deserializeTilegridWMTS(options.tileGrid);
    }

    return new ol_source_WMTS_js__WEBPACK_IMPORTED_MODULE_4__["default"](options);
  };

  _proto.makeInfinitySerializable_ = function makeInfinitySerializable_(number) {
    if (number === Infinity) {
      return 1000;
    }

    return number;
  };

  _proto.serializeTileLayer = function serializeTileLayer(layer, source) {
    var obj = this.createBaseObject_(layer);
    obj.opacity = layer.getOpacity();
    obj.visible = layer.getVisible();
    obj.minResolution = layer.getMinResolution();
    obj.maxResolution = this.makeInfinitySerializable_(layer.getMaxResolution());
    obj.zIndex = layer.getZIndex();
    source = source || layer.getSource();

    if (source instanceof ol_source_TileWMS_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      obj.source = this.serializeSourceTileWMS(source);
      obj.sourceType = 'tileWMS';
    } else if (source instanceof ol_source_WMTS_js__WEBPACK_IMPORTED_MODULE_4__["default"]) {
      obj.source = this.serializeSourceWMTS(source);
      obj.sourceType = 'WMTS';
    }

    return JSON.stringify(obj);
  };

  _proto.deserializeTileLayer = function deserializeTileLayer(serialization, tileLoadFunction) {
    var options = JSON.parse(serialization);
    var sourceType = options.sourceType;

    if (sourceType === 'tileWMS') {
      options.source = this.deserializeSourceTileWMS(options.source, tileLoadFunction);
    } else if (sourceType === 'WMTS') {
      options.source = this.deserializeSourceWMTS(options.source, tileLoadFunction);
    }

    return new ol_layer_Tile_js__WEBPACK_IMPORTED_MODULE_5__["default"](options);
  };

  return SerDes;
}();

var exports = SerDes;
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/ServiceManager.js":
/*!***************************************!*\
  !*** ./src/offline/ServiceManager.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_0__);


var ServiceManager = function () {
  ServiceManager.$inject = ["$injector"];

  function ServiceManager($injector) {
    this.$injector_ = $injector;
    this.saveService_ = null;
    this.restoreService_ = null;
  }

  var _proto = ServiceManager.prototype;

  _proto.getOfflineService_ = function getOfflineService_(serviceLike, method) {
    if (typeof serviceLike === 'string') {
      if (!this.$injector_.has(serviceLike)) {
        console.error("The offline " + method + " service could not be found");
        return;
      }

      var service = this.$injector_.get(serviceLike);

      if (!service[method]) {
        console.error("The offline service " + serviceLike + " does not have a " + method + " method");
        return;
      }

      return service;
    }

    if (!serviceLike[method]) {
      console.error("The provided offline service does not have a " + method + " method");
      return;
    }

    return serviceLike;
  };

  _proto.setSaveService = function setSaveService(saveLikeService) {
    this.saveService_ = this.getOfflineService_(saveLikeService, 'save');
  };

  _proto.setRestoreService = function setRestoreService(restoreLikeService) {
    this.restoreService_ = this.getOfflineService_(restoreLikeService, 'restore');
  };

  _proto.cancel = function cancel() {
    if (!this.saveService_) {
      console.warn('You must register a saveService first');
      return;
    }

    this.saveService_.cancel();
  };

  _proto.save = function save(extent, map) {
    if (!this.saveService_) {
      console.warn('You must register a saveService first');
      return;
    }

    this.saveService_.save(extent, map);
  };

  _proto.restore = function restore(map) {
    if (!this.restoreService_) {
      console.warn('You must register a restoreService first');
      return Promise.reject();
    }

    return this.restoreService_.restore(map);
  };

  return ServiceManager;
}();

ServiceManager.module = angular__WEBPACK_IMPORTED_MODULE_0___default.a.module('ngeoOfflineServiceManager', []);
ServiceManager.module.service('ngeoOfflineServiceManager', ServiceManager);
/* harmony default export */ __webpack_exports__["default"] = (ServiceManager);

/***/ }),

/***/ "./src/offline/TilesDownloader.js":
/*!****************************************!*\
  !*** ./src/offline/TilesDownloader.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TileDownloader; });
function blobToDataUrl(blob) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

var TileDownloader = function () {
  function TileDownloader(tiles, callbacks, workers) {
    this.maxNumberOfWorkers_ = workers;
    this.wasStarted_ = false;
    this.tiles_ = tiles;
    this.callbacks_ = callbacks;
    this.allCount_ = 0;
    this.okCount_ = 0;
    this.koCount_ = 0;
    this.requestedCount_ = 0;
    this.resolvePromise_ = null;
    this.promise_ = null;
    this.tileIndex_ = 0;
    this.cancel_ = false;
  }

  var _proto = TileDownloader.prototype;

  _proto.cancel = function cancel() {
    this.cancel_ = true;
  };

  _proto.download = function download() {
    var _this = this;

    if (this.promise_) {
      return this.promise_;
    }

    this.promise_ = new Promise(function (resolve, reject) {
      _this.resolvePromise_ = resolve;
    });
    console.assert(this.tiles_);

    if (this.tiles_.length === 0) {
      this.callbacks_.onTileDownloadError(1);

      if (this.resolvePromise_) {
        this.resolvePromise_();
      }
    } else {
      for (var i = 0; i < this.maxNumberOfWorkers_; ++i) {
        this.downloadTile_();
      }
    }

    return this.promise_;
  };

  _proto.downloadTile_ = function downloadTile_() {
    var _this2 = this;

    if (this.cancel_ || this.tileIndex_ >= this.tiles_.length) {
      return;
    }

    var tile = this.tiles_[this.tileIndex_++];
    var tileUrl = tile.url;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', tileUrl, true);
    xhr.responseType = 'blob';

    var onTileDownloaded = function onTileDownloaded() {
      if (_this2.allCount_ === _this2.tiles_.length && _this2.resolvePromise_) {
        _this2.resolvePromise_();
      }

      _this2.downloadTile_();
    };

    var errorCallback = function errorCallback(_) {
      if (_this2.cancel_) {
        return;
      }

      ++_this2.allCount_;
      ++_this2.koCount_;
      var progress = _this2.allCount_ / _this2.tiles_.length;

      _this2.callbacks_.onTileDownloadError(progress).then(onTileDownloaded, onTileDownloaded);
    };

    var onloadCallback = function onloadCallback(e) {
      var response = xhr.response;

      if (response && response.size !== 0) {
        blobToDataUrl(response).then(function (dataUrl) {
          if (_this2.cancel_) {
            return;
          }

          ++_this2.allCount_;
          ++_this2.okCount_;
          tile.response = dataUrl;
          var progress = _this2.allCount_ / _this2.tiles_.length;

          _this2.callbacks_.onTileDownloadSuccess(progress, tile).then(onTileDownloaded, onTileDownloaded);
        }, function () {
          if (_this2.cancel_) {
            return;
          }

          errorCallback(e);
        });
      } else {
        if (_this2.cancel_) {
          return;
        }

        ++_this2.allCount_;
        ++_this2.okCount_;

        _this2.callbacks_.onTileDownloadSuccess(_this2.allCount_ / _this2.tiles_.length, tile).then(onTileDownloaded, onTileDownloaded);
      }
    };

    xhr.onload = onloadCallback;
    xhr.onerror = errorCallback;
    xhr.onabort = errorCallback;
    xhr.ontimeout = errorCallback;
    xhr.send();
    ++this.requestedCount_;
  };

  return TileDownloader;
}();



/***/ }),

/***/ "./src/offline/component.html":
/*!************************************!*\
  !*** ./src/offline/component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<div class="main-button">\n  <span ng-if="!$ctrl.hasData()">\n    <div class="no-data" ng-click="$ctrl.toggleViewExtentSelection()"></div>\n  </span>\n  <span ng-if="$ctrl.hasData()">\n    <div class="with-data" ng-click="$ctrl.showMenu()"></div>\n  </span>\n</div>\n\n<div ng-if="$ctrl.selectingExtent && !$ctrl.networkStatus.isDisconnected()" class="validate-extent btn btn-primary">\n  <div ng-if="!$ctrl.downloading" ng-click="$ctrl.computeSizeAndDisplayAlertLoadData()" translate>Save map</div>\n  <div ng-if="$ctrl.downloading" ng-click="$ctrl.askAbortDownload()" translate>Abort</div>\n</div>\n\n\n<div ng-if="$ctrl.downloading" class="in-progress">\n  <div>{{$ctrl.progressPercents}}%</div>\n</div>\n\n<ngeo-modal ng-model="$ctrl.menuDisplayed">\n  <div class="modal-header">\n    <button type="button" class="close"\n              data-dismiss="modal"\n              aria-label="{{\'Close\' | translate}}">\n      <span aria-hidden="true">&times;</span>\n    </button>\n    <h4 class="modal-title" translate>Offline map</h4>\n  </div>\n  <div class="modal-body">\n    <div ng-if="$ctrl.hasData()">\n      <button type="button" class="extent-zoom btn btn-default"\n              ng-if="!$ctrl.offlineMode.isEnabled()"\n              ng-click="$ctrl.activateOfflineMode()"\n              translate>Activate offline mode\n      </button>\n      <button type="button" class="extent-zoom btn btn-default"\n              ng-if="$ctrl.offlineMode.isEnabled() && !$ctrl.networkStatus.isDisconnected()"\n              ng-click="$ctrl.deactivateOfflineMode()"\n              translate>Deactivate offline mode\n      </button>\n\n      <button type="button" class="extent-show btn btn-default"\n              ng-if="$ctrl.offlineMode.isEnabled()"\n              ng-click="$ctrl.toggleExtentVisibility()">\n        <span ng-if="$ctrl.isExtentVisible()" translate>Hide extent</span>\n        <span ng-if="!$ctrl.isExtentVisible()" translate >Show extent</span>\n      </button>\n      <button type="button" class="delete btn btn-default"\n              ng-if="!$ctrl.networkStatus.isDisconnected()"\n              ng-click="$ctrl.displayAlertDestroyData = true"\n              translate>Delete data\n      </button>\n    </div>\n    <div ng-if="!$ctrl.hasData() && !$ctrl.networkStatus.isDisconnected()">\n      <button type="button" class="new-data btn btn-default"\n              ng-click="$ctrl.toggleViewExtentSelection()"\n              translate>Save new map\n      </button>\n    </div>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertLoadData">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n      <p translate>~{{$ctrl.estimatedLoadDataSize}}MB of maps will be downloaded (until scale 1:25\'000) - Don\'t lock your device or navigate away from this site during the download process. Deactivate "private" mode of your browser.</p>\n      <button type="button" class="validate btn btn-primary"\n              data-dismiss="modal"\n              ng-click="$ctrl.validateExtent()"\n              translate>Ok\n      </button>\n      <button type="button" class="delete btn btn-default"\n              data-dismiss="modal"\n              translate>Cancel\n      </button>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertNoLayer">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n      <p translate>No maps selected for saving.</p>\n      <button type="button" class="delete btn btn-default"\n              data-dismiss="modal"\n              translate>Ok\n      </button>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertDestroyData">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n      <p translate>Do you really want to remove your data ?</p>\n      <button type="button" class="validate btn btn-primary"\n              data-dismiss="modal"\n              ng-click="$ctrl.deleteData()"\n              translate>Ok\n      </button>\n      <button type="button" class="delete btn btn-default"\n              data-dismiss="modal"\n              translate>Cancel\n      </button>\n  </div>\n</ngeo-modal>\n\n<ngeo-modal ng-model="$ctrl.displayAlertAbortDownload">\n  <div class="modal-header">\n    <h4 class="modal-title" translate>Warning</h4>\n  </div>\n  <div class="modal-body">\n      <p translate>Do you really want to remove your data ?</p>\n      <button type="button" class="validate btn btn-primary"\n              data-dismiss="modal"\n              ng-click="$ctrl.abortDownload()"\n              translate>Ok\n      </button>\n      <button type="button" class="delete btn btn-default"\n              data-dismiss="modal"\n              ng-click="$ctrl.followDownloadProgression_()"\n              translate>Cancel\n      </button>\n  </div>\n</ngeo-modal>\n';

}
return __p
}

/***/ }),

/***/ "./src/offline/component.js":
/*!**********************************!*\
  !*** ./src/offline/component.js ***!
  \**********************************/
/*! exports provided: Controller, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var ngeo_map_FeatureOverlayMgr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/map/FeatureOverlayMgr.js */ "./src/map/FeatureOverlayMgr.js");
/* harmony import */ var ngeo_message_modalComponent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/message/modalComponent.js */ "./src/message/modalComponent.js");
/* harmony import */ var ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/utils.js */ "./src/utils.js");
/* harmony import */ var ol_Collection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/Collection.js */ "./node_modules/ol/Collection.js");
/* harmony import */ var ol_Observable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Observable.js */ "./node_modules/ol/Observable.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/geom/Polygon.js */ "./node_modules/ol/geom/Polygon.js");
/* harmony import */ var ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/geom/GeometryLayout.js */ "./node_modules/ol/geom/GeometryLayout.js");
/* harmony import */ var ol_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/has.js */ "./node_modules/ol/has.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_9__);










var module = angular__WEBPACK_IMPORTED_MODULE_9___default.a.module('ngeoOffline', [ngeo_map_FeatureOverlayMgr_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, ngeo_message_modalComponent_js__WEBPACK_IMPORTED_MODULE_1__["default"].name]);
module.value('ngeoOfflineTemplateUrl', function (element, attrs) {
  var templateUrl = attrs['ngeoOfflineTemplateurl'];
  return templateUrl !== undefined ? templateUrl : 'ngeo/offline/component.html';
});
module.run(["$templateCache", function ($templateCache) {
  $templateCache.put('ngeo/offline/component.html', __webpack_require__(/*! ./component.html */ "./src/offline/component.html"));
}]);
ngeoOfflineTemplateUrl.$inject = ["$element", "$attrs", "ngeoOfflineTemplateUrl"];

function ngeoOfflineTemplateUrl($element, $attrs, ngeoOfflineTemplateUrl) {
  return ngeoOfflineTemplateUrl($element, $attrs);
}

var component = {
  bindings: {
    'map': '<ngeoOfflineMap',
    'extentSize': '<?ngeoOfflineExtentsize',
    'maskMargin': '<?ngeoOfflineMaskMargin',
    'minZoom': '<?ngeoOfflineMinZoom',
    'maxZoom': '<?ngeoOfflineMaxZoom'
  },
  controller: 'ngeoOfflineController',
  templateUrl: ngeoOfflineTemplateUrl
};
module.component('ngeoOffline', component);
var Controller = function () {
  Controller.$inject = ["$timeout", "ngeoFeatureOverlayMgr", "ngeoOfflineServiceManager", "ngeoOfflineConfiguration", "ngeoOfflineMode", "ngeoNetworkStatus"];

  function Controller($timeout, ngeoFeatureOverlayMgr, ngeoOfflineServiceManager, ngeoOfflineConfiguration, ngeoOfflineMode, ngeoNetworkStatus) {
    var _this = this;

    this.$timeout_ = $timeout;
    this.ngeoOfflineServiceManager_ = ngeoOfflineServiceManager;
    this.ngeoOfflineConfiguration_ = ngeoOfflineConfiguration;
    this.offlineMode = ngeoOfflineMode;
    this.networkStatus = ngeoNetworkStatus;
    this.map;
    this.extentSize = 0;
    this.featuresOverlay_ = ngeoFeatureOverlayMgr.getFeatureOverlay();
    this.overlayCollection_ = new ol_Collection_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.featuresOverlay_.setFeatures(this.overlayCollection_);
    this.postcomposeListener_ = this.createMaskPostcompose_();
    this.postComposeListenerKey_ = null;
    this.dataPolygon_ = null;
    this.selectingExtent = false;
    this.downloading = false;
    this.progressPercents = 0;
    this.menuDisplayed = false;
    this.displayAlertAbortDownload = false;
    this.displayAlertLoadData = false;
    this.displayAlertNoLayer = false;
    this.maskMargin = 0;
    this.minZoom = 0;
    this.maxZoom = 0;
    this.originalMinZoom = 0;
    this.originalMaxZoom = 0;
    this.estimatedLoadDataSize = 0;

    this.progressCallback_ = function (event) {
      var progress = event.detail['progress'];
      _this.progressPercents = Math.floor(progress * 100);

      if (progress === 1) {
        _this.finishDownload_();
      }

      _this.$timeout_(function () {}, 0);
    };
  }

  var _proto = Controller.prototype;

  _proto.$onInit = function $onInit() {
    this.offlineMode.registerComponent(this);
    this.ngeoOfflineConfiguration_.on('progress', this.progressCallback_);
    this.maskMargin = this.maskMargin || 100;
    this.minZoom = this.minZoom || 10;
    this.maxZoom = this.maxZoom || 15;
  };

  _proto.$onDestroy = function $onDestroy() {
    this.ngeoOfflineConfiguration_.un('progress', this.progressCallback_);
  };

  _proto.hasData = function hasData() {
    return this.ngeoOfflineConfiguration_.hasOfflineData();
  };

  _proto.computeSizeAndDisplayAlertLoadData = function computeSizeAndDisplayAlertLoadData() {
    this.estimatedLoadDataSize = this.ngeoOfflineConfiguration_.estimateLoadDataSize(this.map);

    if (this.estimatedLoadDataSize > 0) {
      this.displayAlertLoadData = true;
    } else {
      this.displayAlertNoLayer = true;
    }
  };

  _proto.toggleViewExtentSelection = function toggleViewExtentSelection(finished) {
    this.menuDisplayed = false;
    this.selectingExtent = !this.selectingExtent;

    if (this.postComposeListenerKey_) {
      Object(ol_Observable_js__WEBPACK_IMPORTED_MODULE_4__["unByKey"])(this.postComposeListenerKey_);
      this.postComposeListenerKey_ = null;
      this.removeZoomConstraints_();
    }

    if (this.selectingExtent && !this.postComposeListenerKey_) {
      this.addZoomConstraints_();
      this.postComposeListenerKey_ = this.map.on('postcompose', this.postcomposeListener_);
    }

    this.map.render();
  };

  _proto.validateExtent = function validateExtent() {
    this.progressPercents = 0;
    var extent = this.getDowloadExtent_();
    this.downloading = true;
    this.ngeoOfflineServiceManager_.save(extent, this.map);
  };

  _proto.finishDownload_ = function finishDownload_() {
    this.downloading = false;
    this.toggleViewExtentSelection(true);
  };

  _proto.askAbortDownload = function askAbortDownload() {
    this.displayAlertAbortDownload = true;
  };

  _proto.abortDownload = function abortDownload() {
    this.downloading = false;
    this.ngeoOfflineServiceManager_.cancel();
    this.deleteData();
  };

  _proto.showMenu = function showMenu() {
    this.menuDisplayed = true;
  };

  _proto.activateOfflineMode = function activateOfflineMode() {
    var _this2 = this;

    this.ngeoOfflineServiceManager_.restore(this.map).then(function (extent) {
      _this2.dataPolygon_ = _this2.createPolygonFromExtent_(extent);

      var size = _this2.map.getSize();

      if (size === undefined) {
        throw new Error('Missing size');
      }

      _this2.map.getView().fit(extent, {
        size: size
      });

      _this2.menuDisplayed = false;

      _this2.displayExtent_();

      _this2.offlineMode.enable();
    });
  };

  _proto.deactivateOfflineMode = function deactivateOfflineMode() {
    window.location.reload();
  };

  _proto.toggleExtentVisibility = function toggleExtentVisibility() {
    if (this.isExtentVisible()) {
      this.overlayCollection_.clear();
    } else {
      this.displayExtent_();
    }
  };

  _proto.isExtentVisible = function isExtentVisible() {
    return this.overlayCollection_.getLength() > 0;
  };

  _proto.deleteData = function deleteData() {
    var _this3 = this;

    this.overlayCollection_.clear();
    this.dataPolygon_ = null;

    if (this.networkStatus.isDisconnected()) {
      this.menuDisplayed = false;
    }

    var reloadIfInOfflineMode = function reloadIfInOfflineMode() {
      if (_this3.offlineMode.isEnabled()) {
        _this3.deactivateOfflineMode();
      }
    };

    this.ngeoOfflineConfiguration_.clear().then(reloadIfInOfflineMode);
  };

  _proto.displayExtent_ = function displayExtent_() {
    if (!this.isExtentVisible() && this.dataPolygon_) {
      var feature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_5__["default"](this.dataPolygon_);
      this.overlayCollection_.push(feature);
    }
  };

  _proto.addZoomConstraints_ = function addZoomConstraints_() {
    var view = this.map.getView();
    var zoom = view.getZoom() || 0;
    this.originalMinZoom = view.getMinZoom();
    this.originalMaxZoom = view.getMaxZoom();

    if (zoom < this.minZoom) {
      view.setZoom(this.minZoom);
    } else if (zoom > this.maxZoom) {
      view.setZoom(this.maxZoom);
    }

    view.setMaxZoom(this.maxZoom);
    view.setMinZoom(this.minZoom);
  };

  _proto.removeZoomConstraints_ = function removeZoomConstraints_() {
    var view = this.map.getView();
    view.setMaxZoom(this.originalMaxZoom);
    view.setMinZoom(this.originalMinZoom);
  };

  _proto.createMaskPostcompose_ = function createMaskPostcompose_() {
    var _this4 = this;

    return function (evt) {
      var context = evt.context;
      var frameState = evt.frameState;

      if (!context || !frameState) {
        throw new Error('Missing context or frameState');
      }

      var resolution = frameState.viewState.resolution;
      var viewportWidth = frameState.size[0] * frameState.pixelRatio;
      var viewportHeight = frameState.size[1] * frameState.pixelRatio;
      var extentLength = _this4.extentSize ? _this4.extentSize / resolution * ol_has_js__WEBPACK_IMPORTED_MODULE_8__["DEVICE_PIXEL_RATIO"] : Math.min(viewportWidth, viewportHeight) - _this4.maskMargin * 2;
      var extentHalfLength = Math.ceil(extentLength / 2);
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(viewportWidth, 0);
      context.lineTo(viewportWidth, viewportHeight);
      context.lineTo(0, viewportHeight);
      context.lineTo(0, 0);
      context.closePath();

      var extent = _this4.createExtent_([viewportWidth / 2, viewportHeight / 2], extentHalfLength);

      context.moveTo(extent[0], extent[1]);
      context.lineTo(extent[0], extent[3]);
      context.lineTo(extent[2], extent[3]);
      context.lineTo(extent[2], extent[1]);
      context.lineTo(extent[0], extent[1]);
      context.closePath();
      context.fillStyle = 'rgba(0, 5, 25, 0.5)';
      context.fill();
    };
  };

  _proto.createPolygonFromExtent_ = function createPolygonFromExtent_(extent) {
    var projExtent = this.map.getView().getProjection().getExtent();
    return new ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_6__["default"]([Object(ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__["extentToRectangle"])(projExtent), Object(ngeo_utils_js__WEBPACK_IMPORTED_MODULE_2__["extentToRectangle"])(extent)], ol_geom_GeometryLayout_js__WEBPACK_IMPORTED_MODULE_7__["default"].XY);
  };

  _proto.createExtent_ = function createExtent_(center, halfLength) {
    var minx = center[0] - halfLength;
    var miny = center[1] - halfLength;
    var maxx = center[0] + halfLength;
    var maxy = center[1] + halfLength;
    return [minx, miny, maxx, maxy];
  };

  _proto.getDowloadExtent_ = function getDowloadExtent_() {
    var center = this.map.getView().getCenter();
    var halfLength = Math.ceil(this.extentSize || this.getExtentSize_()) / 2;
    return this.createExtent_(center, halfLength);
  };

  _proto.getExtentSize_ = function getExtentSize_() {
    var mapSize = this.map.getSize() || [150, 150];
    var maskSizePixel = ol_has_js__WEBPACK_IMPORTED_MODULE_8__["DEVICE_PIXEL_RATIO"] * Math.min(mapSize[0], mapSize[1]) - this.maskMargin * 2;
    var maskSizeMeter = maskSizePixel * (this.map.getView().getResolution() || 1) / ol_has_js__WEBPACK_IMPORTED_MODULE_8__["DEVICE_PIXEL_RATIO"];
    return maskSizeMeter;
  };

  return Controller;
}();
module.controller('ngeoOfflineController', Controller);
/* harmony default export */ __webpack_exports__["default"] = (module);

/***/ }),

/***/ "./src/offline/module.js":
/*!*******************************!*\
  !*** ./src/offline/module.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ngeo_offline_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngeo/offline/component.js */ "./src/offline/component.js");
/* harmony import */ var ngeo_offline_NetworkStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngeo/offline/NetworkStatus.js */ "./src/offline/NetworkStatus.js");
/* harmony import */ var ngeo_offline_ServiceManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngeo/offline/ServiceManager.js */ "./src/offline/ServiceManager.js");
/* harmony import */ var ngeo_offline_Downloader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngeo/offline/Downloader.js */ "./src/offline/Downloader.js");
/* harmony import */ var ngeo_offline_Restorer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngeo/offline/Restorer.js */ "./src/offline/Restorer.js");
/* harmony import */ var ngeo_offline_Mode_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngeo/offline/Mode.js */ "./src/offline/Mode.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_6__);







var exports = angular__WEBPACK_IMPORTED_MODULE_6___default.a.module('ngeoOfflineModule', [ngeo_offline_component_js__WEBPACK_IMPORTED_MODULE_0__["default"].name, ngeo_offline_NetworkStatus_js__WEBPACK_IMPORTED_MODULE_1__["default"].module.name, ngeo_offline_ServiceManager_js__WEBPACK_IMPORTED_MODULE_2__["default"].module.name, ngeo_offline_Downloader_js__WEBPACK_IMPORTED_MODULE_3__["default"].module.name, ngeo_offline_Restorer_js__WEBPACK_IMPORTED_MODULE_4__["default"].module.name, ngeo_offline_Mode_js__WEBPACK_IMPORTED_MODULE_5__["default"].module.name]);
exports.value('ngeoOfflineGutter', 96);
/* harmony default export */ __webpack_exports__["default"] = (exports);

/***/ }),

/***/ "./src/offline/utils.js":
/*!******************************!*\
  !*** ./src/offline/utils.js ***!
  \******************************/
/*! exports provided: traverseLayer, normalizeURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "traverseLayer", function() { return traverseLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeURL", function() { return normalizeURL; });
/* harmony import */ var ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ol/layer/Group.js */ "./node_modules/ol/layer/Group.js");

function traverseLayer(layer, ancestors, visitor) {
  var descend = visitor(layer, ancestors);

  if (descend && layer instanceof ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    layer.getLayers().forEach(function (childLayer) {
      traverseLayer(childLayer, [].concat(ancestors, [layer]), visitor);
    });
  }
}
var extractor = new RegExp('[^/]*//[^/]+/(.*)');
function normalizeURL(url) {
  var matches = url.match(extractor);

  if (!matches) {
    throw new Error('Could not normalize url ' + url);
  }

  return matches[1];
}

/***/ }),

/***/ 30:
/*!****************************************************************************************!*\
  !*** multi ./examples/common_dependencies.js ngeo/mainmodule.js ./examples/offline.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./examples/common_dependencies.js */"./examples/common_dependencies.js");
__webpack_require__(/*! ngeo/mainmodule.js */"./src/mainmodule.js");
module.exports = __webpack_require__(/*! ./examples/offline.js */"./examples/offline.js");


/***/ }),

/***/ "dll-reference vendor":
/*!*************************!*\
  !*** external "vendor" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = vendor;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmbGluZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9vZmZsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL0Fic3RyYWN0TG9jYWxmb3JhZ2VXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL0NvbmZpZ3VyYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvRG93bmxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9Mb2NhbGZvcmFnZUFuZHJvaWRXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL0xvY2FsZm9yYWdlQ29yZG92YVdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvTG9jYWxmb3JhZ2VJb3NXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL01vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvTmV0d29ya1N0YXR1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9SZXN0b3Jlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9TZXJpYWxpemVyRGVzZXJpYWxpemVyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL1NlcnZpY2VNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL1RpbGVzRG93bmxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvb2ZmbGluZS9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29mZmxpbmUvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9vZmZsaW5lL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJvZmZsaW5lXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzMwLFwiY29tbW9uc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2ZvbnRhd2Vzb21lLm1pbi5jc3MnO1xuaW1wb3J0ICcuL29mZmxpbmUuY3NzJztcbmltcG9ydCAnLi9jb21tb25fZGVwZW5kZW5jaWVzLmpzJztcbmltcG9ydCBvbE1hcCBmcm9tICdvbC9NYXAuanMnO1xuaW1wb3J0IG9sVmlldyBmcm9tICdvbC9WaWV3LmpzJztcbmltcG9ydCBvbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlLmpzJztcbmltcG9ydCBvbFNvdXJjZU9TTSBmcm9tICdvbC9zb3VyY2UvT1NNLmpzJztcbmltcG9ydCBuZ2VvTWFwTW9kdWxlIGZyb20gJ25nZW8vbWFwL21vZHVsZS5qcyc7XG5pbXBvcnQgbmdlb09mZmxpbmVNb2R1bGUgZnJvbSAnbmdlby9vZmZsaW5lL21vZHVsZS5qcyc7XG5pbXBvcnQgbmdlb09mZmxpbmVDb25maWd1cmF0aW9uIGZyb20gJ25nZW8vb2ZmbGluZS9Db25maWd1cmF0aW9uLmpzJztcbmltcG9ydCBOZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyIGZyb20gJ25nZW8vb2ZmbGluZS9TZXJ2aWNlTWFuYWdlci5qcyc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcblxudmFyIE1haW5Db250cm9sbGVyID0gZnVuY3Rpb24gTWFpbkNvbnRyb2xsZXIobmdlb0ZlYXR1cmVPdmVybGF5TWdyLCBuZ2VvTmV0d29ya1N0YXR1cywgbmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlcikge1xuICB0aGlzLm9mZmxpbmVFeHRlbnRTaXplID0gMTAwMDA7XG4gIHRoaXMubmdlb05ldHdvcmtTdGF0dXMgPSBuZ2VvTmV0d29ya1N0YXR1cztcbiAgdGhpcy5tYXAgPSBuZXcgb2xNYXAoe1xuICAgIGxheWVyczogW25ldyBvbExheWVyVGlsZSh7XG4gICAgICBzb3VyY2U6IG5ldyBvbFNvdXJjZU9TTSgpXG4gICAgfSldLFxuICAgIHZpZXc6IG5ldyBvbFZpZXcoe1xuICAgICAgY2VudGVyOiBbMzUyMzc5LCA1MTcyNzMzXSxcbiAgICAgIHpvb206IDRcbiAgICB9KVxuICB9KTtcbiAgbmdlb0ZlYXR1cmVPdmVybGF5TWdyLmluaXQodGhpcy5tYXApO1xuICBuZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyLnNldFNhdmVTZXJ2aWNlKCdvZmZsaW5lRG93bmxvYWRlcicpO1xuICBuZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyLnNldFJlc3RvcmVTZXJ2aWNlKCduZ2VvT2ZmbGluZVJlc3RvcmVyJyk7XG59O1xuXG5NYWluQ29udHJvbGxlci4kaW5qZWN0ID0gW1wibmdlb0ZlYXR1cmVPdmVybGF5TWdyXCIsIFwibmdlb05ldHdvcmtTdGF0dXNcIiwgXCJuZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyXCJdO1xuTWFpbkNvbnRyb2xsZXIuJGluamVjdCA9IFtcIm5nZW9GZWF0dXJlT3ZlcmxheU1nclwiLCBcIm5nZW9OZXR3b3JrU3RhdHVzXCIsIFwibmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlclwiXTtcbk1haW5Db250cm9sbGVyLm1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ2dldHRleHQnLCBuZ2VvTWFwTW9kdWxlLm5hbWUsIG5nZW9PZmZsaW5lTW9kdWxlLm5hbWUsIE5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXIubW9kdWxlLm5hbWVdKTtcbk1haW5Db250cm9sbGVyLm1vZHVsZS52YWx1ZSgnbmdlb09mZmxpbmVUZXN0VXJsJywgJy4uLy4uL3NyYy9vZmZsaW5lL2NvbXBvbmVudC5odG1sJyk7XG5uZ2VvT2ZmbGluZU1vZHVsZS5zZXJ2aWNlKCduZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb24nLCBuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb24pO1xuTWFpbkNvbnRyb2xsZXIubW9kdWxlLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgTWFpbkNvbnRyb2xsZXIpO1xuZXhwb3J0IGRlZmF1bHQgTWFpbkNvbnRyb2xsZXI7IiwidmFyIEFjdGlvbjtcblxudmFyIGV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEFic3RyYWN0TG9jYWxmb3JhZ2VXcmFwcGVyKCkge1xuICAgIHRoaXMud2FpdGluZ1Byb21pc2VzXyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLmN1cnJlbnRJZF8gPSAwO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEFic3RyYWN0TG9jYWxmb3JhZ2VXcmFwcGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uc2V0SXRlbSA9IGZ1bmN0aW9uIHNldEl0ZW0oKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUFjdGlvbi5hcHBseSh0aGlzLCBbJ3NldEl0ZW0nXS5jb25jYXQoYXJncykpO1xuICB9O1xuXG4gIF9wcm90by5nZXRJdGVtID0gZnVuY3Rpb24gZ2V0SXRlbSgpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVBY3Rpb24uYXBwbHkodGhpcywgWydnZXRJdGVtJ10uY29uY2F0KGFyZ3MpKTtcbiAgfTtcblxuICBfcHJvdG8uY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVBY3Rpb24oJ2NsZWFyJyk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbmZpZyA9IGZ1bmN0aW9uIGNvbmZpZygpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVBY3Rpb24uYXBwbHkodGhpcywgWydjb25maWcnXS5jb25jYXQoYXJncykpO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVBY3Rpb24gPSBmdW5jdGlvbiBjcmVhdGVBY3Rpb24oY29tbWFuZCkge1xuICAgIHZhciBpZCA9ICsrdGhpcy5jdXJyZW50SWRfO1xuXG4gICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgIGFyZ3NbX2tleTQgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgfVxuXG4gICAgdmFyIGFjdGlvbiA9IHtcbiAgICAgICdwbHVnaW4nOiAnbG9jYWxmb3JhZ2UnLFxuICAgICAgJ2NvbW1hbmQnOiBjb21tYW5kLFxuICAgICAgJ2FyZ3MnOiBhcmdzLFxuICAgICAgJ2lkJzogaWRcbiAgICB9O1xuICAgIHZhciB3YWl0aW5nUHJvbWlzZSA9IHtcbiAgICAgIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoKSB7fSxcbiAgICAgIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KCkge31cbiAgICB9O1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgd2FpdGluZ1Byb21pc2UucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB3YWl0aW5nUHJvbWlzZS5yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG4gICAgdGhpcy53YWl0aW5nUHJvbWlzZXNfLnNldChpZCwgd2FpdGluZ1Byb21pc2UpO1xuICAgIHRoaXMucG9zdFRvQmFja2VuZChhY3Rpb24pO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIF9wcm90by5yZWNlaXZlTWVzc2FnZSA9IGZ1bmN0aW9uIHJlY2VpdmVNZXNzYWdlKGV2ZW50KSB7XG4gICAgdmFyIGFjdGlvbiA9IGV2ZW50WydkYXRhJ107XG4gICAgdmFyIGlkID0gYWN0aW9uWydpZCddO1xuICAgIHZhciBjb21tYW5kID0gYWN0aW9uWydjb21tYW5kJ107XG4gICAgdmFyIGFyZ3MgPSBhY3Rpb25bJ2FyZ3MnXSB8fCBbXTtcbiAgICB2YXIgY29udGV4dCA9IGFjdGlvblsnY29udGV4dCddO1xuICAgIHZhciBtc2cgPSBhY3Rpb25bJ21zZyddO1xuICAgIHZhciB3YWl0aW5nUHJvbWlzZSA9IHRoaXMud2FpdGluZ1Byb21pc2VzXy5nZXQoaWQpO1xuXG4gICAgaWYgKGNvbW1hbmQgPT09ICdlcnJvcicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobXNnLCBhcmdzLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHdhaXRpbmdQcm9taXNlKSB7XG4gICAgICAgIHdhaXRpbmdQcm9taXNlLnJlamVjdChhcmdzLCBjb250ZXh0KTtcbiAgICAgICAgdGhpcy53YWl0aW5nUHJvbWlzZXNfW1wiZGVsZXRlXCJdKGlkKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbW1hbmQgPT09ICdyZXNwb25zZScpIHtcbiAgICAgIHdhaXRpbmdQcm9taXNlLnJlc29sdmUuYXBwbHkod2FpdGluZ1Byb21pc2UsIGFyZ3MpO1xuICAgICAgdGhpcy53YWl0aW5nUHJvbWlzZXNfW1wiZGVsZXRlXCJdKGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIGNvbW1hbmQnLCBKU09OLnN0cmluZ2lmeShhY3Rpb24sIG51bGwsICdcXHQnKSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5wb3N0VG9CYWNrZW5kID0gZnVuY3Rpb24gcG9zdFRvQmFja2VuZChhY3Rpb24pIHt9O1xuXG4gIHJldHVybiBBYnN0cmFjdExvY2FsZm9yYWdlV3JhcHBlcjtcbn0oKTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0czsiLCJmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IG9sT2JzZXJ2YWJsZSBmcm9tICdvbC9PYnNlcnZhYmxlLmpzJztcbmltcG9ydCBvbExheWVyTGF5ZXIgZnJvbSAnb2wvbGF5ZXIvTGF5ZXIuanMnO1xuaW1wb3J0IG9sTGF5ZXJWZWN0b3IgZnJvbSAnb2wvbGF5ZXIvVmVjdG9yLmpzJztcbmltcG9ydCBvbExheWVyVGlsZSBmcm9tICdvbC9sYXllci9UaWxlLmpzJztcbmltcG9ydCBvbExheWVySW1hZ2UgZnJvbSAnb2wvbGF5ZXIvSW1hZ2UuanMnO1xuaW1wb3J0ICogYXMgb2xQcm9qIGZyb20gJ29sL3Byb2ouanMnO1xuaW1wb3J0IHsgZGVmYXVsdEltYWdlTG9hZEZ1bmN0aW9uIH0gZnJvbSAnb2wvc291cmNlL0ltYWdlLmpzJztcbmltcG9ydCBvbFNvdXJjZUltYWdlV01TIGZyb20gJ29sL3NvdXJjZS9JbWFnZVdNUy5qcyc7XG5pbXBvcnQgb2xTb3VyY2VUaWxlV01TIGZyb20gJ29sL3NvdXJjZS9UaWxlV01TLmpzJztcbmltcG9ydCB7IGNyZWF0ZUZvclByb2plY3Rpb24gYXMgY3JlYXRlVGlsZUdyaWRGb3JQcm9qZWN0aW9uIH0gZnJvbSAnb2wvdGlsZWdyaWQuanMnO1xuaW1wb3J0IFNlcmlhbGl6ZXJEZXNlcmlhbGl6ZXIgZnJvbSAnbmdlby9vZmZsaW5lL1NlcmlhbGl6ZXJEZXNlcmlhbGl6ZXIuanMnO1xuaW1wb3J0IExvY2FsZm9yYWdlQ29yZG92YVdyYXBwZXIgZnJvbSAnbmdlby9vZmZsaW5lL0xvY2FsZm9yYWdlQ29yZG92YVdyYXBwZXIuanMnO1xuaW1wb3J0IExvY2FsZm9yYWdlQW5kcm9pZFdyYXBwZXIgZnJvbSAnbmdlby9vZmZsaW5lL0xvY2FsZm9yYWdlQW5kcm9pZFdyYXBwZXIuanMnO1xuaW1wb3J0IExvY2FsZm9yYWdlSW9zV3JhcHBlciBmcm9tICduZ2VvL29mZmxpbmUvTG9jYWxmb3JhZ2VJb3NXcmFwcGVyLmpzJztcbmltcG9ydCBuZ2VvQ3VzdG9tRXZlbnQgZnJvbSAnbmdlby9DdXN0b21FdmVudC5qcyc7XG5pbXBvcnQgeyBub3JtYWxpemVVUkwsIHRyYXZlcnNlTGF5ZXIgfSBmcm9tICduZ2VvL29mZmxpbmUvdXRpbHMuanMnO1xuaW1wb3J0IGxvY2FsZm9yYWdlIGZyb20gJ2xvY2FsZm9yYWdlL3NyYy9sb2NhbGZvcmFnZS5qcyc7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIChfb2xPYnNlcnZhYmxlKSB7XG4gIF9kZWZhdWx0LiRpbmplY3QgPSBbXCIkcm9vdFNjb3BlXCIsIFwibmdlb0JhY2tncm91bmRMYXllck1nclwiLCBcIm5nZW9PZmZsaW5lR3V0dGVyXCJdO1xuXG4gIF9pbmhlcml0c0xvb3NlKF9kZWZhdWx0LCBfb2xPYnNlcnZhYmxlKTtcblxuICBmdW5jdGlvbiBfZGVmYXVsdCgkcm9vdFNjb3BlLCBuZ2VvQmFja2dyb3VuZExheWVyTWdyLCBuZ2VvT2ZmbGluZUd1dHRlcikge1xuICAgIHZhciBfdGhpcztcblxuICAgIF90aGlzID0gX29sT2JzZXJ2YWJsZS5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMubG9jYWxmb3JhZ2VfID0gX3RoaXMuY3JlYXRlTG9jYWxmb3JhZ2UoKTtcblxuICAgIF90aGlzLmNvbmZpZ3VyZUxvY2FsZm9yYWdlKCk7XG5cbiAgICBfdGhpcy5yb290U2NvcGVfID0gJHJvb3RTY29wZTtcbiAgICBfdGhpcy5oYXNEYXRhID0gZmFsc2U7XG5cbiAgICBfdGhpcy5pbml0aWFsaXplSGFzT2ZmbGluZURhdGEoKTtcblxuICAgIF90aGlzLm5nZW9CYWNrZ3JvdW5kTGF5ZXJNZ3JfID0gbmdlb0JhY2tncm91bmRMYXllck1ncjtcbiAgICBfdGhpcy5zZXJEZXNfID0gbmV3IFNlcmlhbGl6ZXJEZXNlcmlhbGl6ZXIoe1xuICAgICAgZ3V0dGVyOiBuZ2VvT2ZmbGluZUd1dHRlclxuICAgIH0pO1xuICAgIF90aGlzLmd1dHRlcl8gPSBuZ2VvT2ZmbGluZUd1dHRlcjtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gX2RlZmF1bHQucHJvdG90eXBlO1xuXG4gIF9wcm90by5kaXNwYXRjaFByb2dyZXNzXyA9IGZ1bmN0aW9uIGRpc3BhdGNoUHJvZ3Jlc3NfKHByb2dyZXNzKSB7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBuZ2VvQ3VzdG9tRXZlbnQoJ3Byb2dyZXNzJywge1xuICAgICAgJ3Byb2dyZXNzJzogcHJvZ3Jlc3NcbiAgICB9KSk7XG4gIH07XG5cbiAgX3Byb3RvLmluaXRpYWxpemVIYXNPZmZsaW5lRGF0YSA9IGZ1bmN0aW9uIGluaXRpYWxpemVIYXNPZmZsaW5lRGF0YSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMuZ2V0SXRlbSgnb2ZmbGluZV9jb250ZW50JykudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBfdGhpczIuc2V0SGFzT2ZmbGluZURhdGEoISF2YWx1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmhhc09mZmxpbmVEYXRhID0gZnVuY3Rpb24gaGFzT2ZmbGluZURhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzRGF0YTtcbiAgfTtcblxuICBfcHJvdG8uc2V0SGFzT2ZmbGluZURhdGEgPSBmdW5jdGlvbiBzZXRIYXNPZmZsaW5lRGF0YSh2YWx1ZSkge1xuICAgIHZhciBuZWVkRGlnZXN0ID0gdmFsdWUgIT09IHRoaXMuaGFzRGF0YTtcbiAgICB0aGlzLmhhc0RhdGEgPSB2YWx1ZTtcblxuICAgIGlmIChuZWVkRGlnZXN0KSB7XG4gICAgICB0aGlzLnJvb3RTY29wZV8uJGFwcGx5QXN5bmMoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnRyYWNlR2V0U2V0SXRlbSA9IGZ1bmN0aW9uIHRyYWNlR2V0U2V0SXRlbShtc2csIGtleSwgcHJvbWlzZSkge1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVMb2NhbGZvcmFnZSA9IGZ1bmN0aW9uIGNyZWF0ZUxvY2FsZm9yYWdlKCkge1xuICAgIGlmIChsb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoJ2xvY2FsZm9yYWdlPWNvcmRvdmEnKSkge1xuICAgICAgY29uc29sZS5sb2coJ1VzaW5nIGNvcmRvdmEgbG9jYWxmb3JhZ2UnKTtcbiAgICAgIHJldHVybiBuZXcgTG9jYWxmb3JhZ2VDb3Jkb3ZhV3JhcHBlcigpO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCdsb2NhbGZvcmFnZT1hbmRyb2lkJykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBhbmRyb2lkIGxvY2FsZm9yYWdlJyk7XG4gICAgICByZXR1cm4gbmV3IExvY2FsZm9yYWdlQW5kcm9pZFdyYXBwZXIoKTtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcygnbG9jYWxmb3JhZ2U9aW9zJykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2luZyBpb3MgbG9jYWxmb3JhZ2UnKTtcbiAgICAgIHJldHVybiBuZXcgTG9jYWxmb3JhZ2VJb3NXcmFwcGVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsZm9yYWdlO1xuICB9O1xuXG4gIF9wcm90by5jb25maWd1cmVMb2NhbGZvcmFnZSA9IGZ1bmN0aW9uIGNvbmZpZ3VyZUxvY2FsZm9yYWdlKCkge1xuICAgIHRoaXMubG9jYWxmb3JhZ2VfLmNvbmZpZyh7XG4gICAgICAnbmFtZSc6ICduZ2VvT2ZmbGluZVN0b3JhZ2UnLFxuICAgICAgJ3ZlcnNpb24nOiAxLjAsXG4gICAgICAnc3RvcmVOYW1lJzogJ29mZmxpbmVTdG9yYWdlJ1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5nZXRJdGVtID0gZnVuY3Rpb24gZ2V0SXRlbShrZXkpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMubG9jYWxmb3JhZ2VfWydnZXRJdGVtJ10oa2V5KTtcbiAgICByZXR1cm4gdGhpcy50cmFjZUdldFNldEl0ZW0oJ2dldEl0ZW0nLCBrZXksIHByb21pc2UpO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVJdGVtID0gZnVuY3Rpb24gcmVtb3ZlSXRlbShrZXkpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMubG9jYWxmb3JhZ2VfWydyZW1vdmVJdGVtJ10oa2V5KTtcbiAgICByZXR1cm4gdGhpcy50cmFjZUdldFNldEl0ZW0oJ3JlbW92ZUl0ZW0nLCBrZXksIHByb21pc2UpO1xuICB9O1xuXG4gIF9wcm90by5zZXRJdGVtID0gZnVuY3Rpb24gc2V0SXRlbShrZXksIHZhbHVlKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLmxvY2FsZm9yYWdlX1snc2V0SXRlbSddKGtleSwgdmFsdWUpO1xuICAgIHJldHVybiB0aGlzLnRyYWNlR2V0U2V0SXRlbSgnc2V0SXRlbScsIGtleSwgcHJvbWlzZSk7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgdGhpcy5zZXRIYXNPZmZsaW5lRGF0YShmYWxzZSk7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLmxvY2FsZm9yYWdlX1snY2xlYXInXSgpO1xuICAgIHJldHVybiB0aGlzLnRyYWNlR2V0U2V0SXRlbSgnY2xlYXInLCAnJywgcHJvbWlzZSk7XG4gIH07XG5cbiAgX3Byb3RvLmVzdGltYXRlTG9hZERhdGFTaXplID0gZnVuY3Rpb24gZXN0aW1hdGVMb2FkRGF0YVNpemUobWFwKSB7XG4gICAgcmV0dXJuIDUwO1xuICB9O1xuXG4gIF9wcm90by5nZXRMYXllcktleSA9IGZ1bmN0aW9uIGdldExheWVyS2V5KGxheWVySXRlbSkge1xuICAgIHJldHVybiBsYXllckl0ZW0ubGF5ZXIuZ2V0KCdsYWJlbCcpO1xuICB9O1xuXG4gIF9wcm90by5vblRpbGVEb3dubG9hZFN1Y2Nlc3MgPSBmdW5jdGlvbiBvblRpbGVEb3dubG9hZFN1Y2Nlc3MocHJvZ3Jlc3MsIHRpbGUpIHtcbiAgICB0aGlzLmRpc3BhdGNoUHJvZ3Jlc3NfKHByb2dyZXNzKTtcblxuICAgIGlmICh0aWxlLnJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRJdGVtKG5vcm1hbGl6ZVVSTCh0aWxlLnVybCksIHRpbGUucmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfTtcblxuICBfcHJvdG8ub25UaWxlRG93bmxvYWRFcnJvciA9IGZ1bmN0aW9uIG9uVGlsZURvd25sb2FkRXJyb3IocHJvZ3Jlc3MpIHtcbiAgICB0aGlzLmRpc3BhdGNoUHJvZ3Jlc3NfKHByb2dyZXNzKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH07XG5cbiAgX3Byb3RvLmdldEV4dGVudEJ5Wm9vbSA9IGZ1bmN0aW9uIGdldEV4dGVudEJ5Wm9vbShtYXAsIGxheWVyLCBhbmNlc3RvcnMsIHVzZXJFeHRlbnQpIHtcbiAgICB2YXIgY3VycmVudFpvb20gPSBtYXAuZ2V0VmlldygpLmdldFpvb20oKTtcblxuICAgIGlmIChjdXJyZW50Wm9vbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY3VycmVudFpvb20nKTtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgIFswLCAxLCAyLCAzLCA0XS5mb3JFYWNoKGZ1bmN0aW9uIChkeikge1xuICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgem9vbTogY3VycmVudFpvb20gKyBkeixcbiAgICAgICAgZXh0ZW50OiB1c2VyRXh0ZW50XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBfcHJvdG8uc291cmNlSW1hZ2VXTVNUb1RpbGVXTVMgPSBmdW5jdGlvbiBzb3VyY2VJbWFnZVdNU1RvVGlsZVdNUyhzb3VyY2UsIHByb2plY3Rpb24pIHtcbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2Ygb2xTb3VyY2VJbWFnZVdNUyAmJiBzb3VyY2UuZ2V0VXJsKCkgJiYgc291cmNlLmdldEltYWdlTG9hZEZ1bmN0aW9uKCkgPT09IGRlZmF1bHRJbWFnZUxvYWRGdW5jdGlvbikge1xuICAgICAgdmFyIHRpbGVHcmlkID0gY3JlYXRlVGlsZUdyaWRGb3JQcm9qZWN0aW9uKHNvdXJjZS5nZXRQcm9qZWN0aW9uKCkgfHwgcHJvamVjdGlvbiwgNDIsIDI1Nik7XG4gICAgICB2YXIgYXR0cmlidXRpb25zID0gc291cmNlLmdldEF0dHJpYnV0aW9ucygpIHx8ICcnO1xuICAgICAgdmFyIHVybCA9IHNvdXJjZS5nZXRVcmwoKTtcblxuICAgICAgaWYgKCF1cmwgfHwgIWF0dHJpYnV0aW9ucykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFsdWVzJyk7XG4gICAgICB9XG5cbiAgICAgIHNvdXJjZSA9IG5ldyBvbFNvdXJjZVRpbGVXTVMoe1xuICAgICAgICBndXR0ZXI6IHRoaXMuZ3V0dGVyXyxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIHRpbGVHcmlkOiB0aWxlR3JpZCxcbiAgICAgICAgYXR0cmlidXRpb25zOiBhdHRyaWJ1dGlvbnMsXG4gICAgICAgIHByb2plY3Rpb246IHNvdXJjZS5nZXRQcm9qZWN0aW9uKCksXG4gICAgICAgIHBhcmFtczogc291cmNlLmdldFBhcmFtcygpXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc291cmNlO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVMYXllck1ldGFkYXRhcyA9IGZ1bmN0aW9uIGNyZWF0ZUxheWVyTWV0YWRhdGFzKG1hcCwgdXNlckV4dGVudCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgdmFyIGxheWVyc0l0ZW1zID0gW107XG5cbiAgICB2YXIgdmlzaXRMYXllciA9IGZ1bmN0aW9uIHZpc2l0TGF5ZXIobGF5ZXIsIGFuY2VzdG9ycykge1xuICAgICAgaWYgKGxheWVyIGluc3RhbmNlb2Ygb2xMYXllckxheWVyKSB7XG4gICAgICAgIHZhciBleHRlbnRCeVpvb20gPSBfdGhpczMuZ2V0RXh0ZW50Qnlab29tKG1hcCwgbGF5ZXIsIGFuY2VzdG9ycywgdXNlckV4dGVudCk7XG5cbiAgICAgICAgdmFyIHByb2plY3Rpb24gPSBvbFByb2ouZ2V0KG1hcC5nZXRWaWV3KCkuZ2V0UHJvamVjdGlvbigpKTtcblxuICAgICAgICB2YXIgc291cmNlID0gX3RoaXMzLnNvdXJjZUltYWdlV01TVG9UaWxlV01TKGxheWVyLmdldFNvdXJjZSgpLCBwcm9qZWN0aW9uKTtcblxuICAgICAgICB2YXIgbGF5ZXJUeXBlO1xuICAgICAgICB2YXIgbGF5ZXJTZXJpYWxpemF0aW9uO1xuXG4gICAgICAgIGlmIChsYXllciBpbnN0YW5jZW9mIG9sTGF5ZXJUaWxlIHx8IGxheWVyIGluc3RhbmNlb2Ygb2xMYXllckltYWdlKSB7XG4gICAgICAgICAgbGF5ZXJUeXBlID0gJ3RpbGUnO1xuICAgICAgICAgIGxheWVyU2VyaWFsaXphdGlvbiA9IF90aGlzMy5zZXJEZXNfLnNlcmlhbGl6ZVRpbGVMYXllcihsYXllciwgc291cmNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXllciBpbnN0YW5jZW9mIG9sTGF5ZXJWZWN0b3IpIHtcbiAgICAgICAgICBsYXllclR5cGUgPSAndmVjdG9yJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBiYWNrZ3JvdW5kTGF5ZXIgPSBfdGhpczMubmdlb0JhY2tncm91bmRMYXllck1ncl8uZ2V0KG1hcCkgPT09IGxheWVyO1xuICAgICAgICBsYXllcnNJdGVtcy5wdXNoKHtcbiAgICAgICAgICBiYWNrZ3JvdW5kTGF5ZXI6IGJhY2tncm91bmRMYXllcixcbiAgICAgICAgICBtYXA6IG1hcCxcbiAgICAgICAgICBleHRlbnRCeVpvb206IGV4dGVudEJ5Wm9vbSxcbiAgICAgICAgICBsYXllclR5cGU6IGxheWVyVHlwZSxcbiAgICAgICAgICBsYXllclNlcmlhbGl6YXRpb246IGxheWVyU2VyaWFsaXphdGlvbixcbiAgICAgICAgICBsYXllcjogbGF5ZXIsXG4gICAgICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICAgICAgYW5jZXN0b3JzOiBhbmNlc3RvcnNcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICBtYXAuZ2V0TGF5ZXJzKCkuZm9yRWFjaChmdW5jdGlvbiAocm9vdCkge1xuICAgICAgdHJhdmVyc2VMYXllcihyb290LCBbXSwgdmlzaXRMYXllcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGxheWVyc0l0ZW1zO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVUaWxlTG9hZEZ1bmN0aW9uXyA9IGZ1bmN0aW9uIGNyZWF0ZVRpbGVMb2FkRnVuY3Rpb25fKG9mZmxpbmVMYXllcikge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIHRpbGVMb2FkRnVuY3Rpb24gPSBmdW5jdGlvbiB0aWxlTG9hZEZ1bmN0aW9uKGltYWdlVGlsZSwgc3JjKSB7XG4gICAgICBfdGhpczQuZ2V0SXRlbShub3JtYWxpemVVUkwoc3JjKSkudGhlbihmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICBjb250ZW50ID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBUUFBQUMxSEF3Q0FBQUFDMGxFUVZSNDJtTmtZQUFBQUFZQUFqQ0IwQzhBQUFBQVNVVk9SSzVDWUlJPSc7XG4gICAgICAgIH1cblxuICAgICAgICBpbWFnZVRpbGUuZ2V0SW1hZ2UoKS5zcmMgPSBjb250ZW50O1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aWxlTG9hZEZ1bmN0aW9uO1xuICB9O1xuXG4gIF9wcm90by5yZWNyZWF0ZU9mZmxpbmVMYXllciA9IGZ1bmN0aW9uIHJlY3JlYXRlT2ZmbGluZUxheWVyKG9mZmxpbmVMYXllcikge1xuICAgIGlmIChvZmZsaW5lTGF5ZXIubGF5ZXJUeXBlID09PSAndGlsZScpIHtcbiAgICAgIHZhciBzZXJpYWxpemF0aW9uID0gb2ZmbGluZUxheWVyLmxheWVyU2VyaWFsaXphdGlvbjtcblxuICAgICAgaWYgKHNlcmlhbGl6YXRpb24pIHtcbiAgICAgICAgdmFyIHRpbGVMb2FkRnVuY3Rpb24gPSB0aGlzLmNyZWF0ZVRpbGVMb2FkRnVuY3Rpb25fKG9mZmxpbmVMYXllcik7XG4gICAgICAgIHZhciBsYXllciA9IHRoaXMuc2VyRGVzXy5kZXNlcmlhbGl6ZVRpbGVMYXllcihzZXJpYWxpemF0aW9uLCB0aWxlTG9hZEZ1bmN0aW9uKTtcbiAgICAgICAgcmV0dXJuIGxheWVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIF9wcm90by5nZXRNYXhOdW1iZXJPZlBhcmFsbGVsRG93bmxvYWRzID0gZnVuY3Rpb24gZ2V0TWF4TnVtYmVyT2ZQYXJhbGxlbERvd25sb2FkcygpIHtcbiAgICByZXR1cm4gMTE7XG4gIH07XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShvbE9ic2VydmFibGUpO1xuXG5leHBvcnQgeyBfZGVmYXVsdCBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IHsgREVWSUNFX1BJWEVMX1JBVElPIH0gZnJvbSAnb2wvaGFzLmpzJztcbmltcG9ydCBvbFNvdXJjZVRpbGVXTVMgZnJvbSAnb2wvc291cmNlL1RpbGVXTVMuanMnO1xuaW1wb3J0IG9sU291cmNlV01UUyBmcm9tICdvbC9zb3VyY2UvV01UUy5qcyc7XG5pbXBvcnQgVGlsZXNEb3dubG9hZGVyIGZyb20gJ25nZW8vb2ZmbGluZS9UaWxlc0Rvd25sb2FkZXIuanMnO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5cbmZ1bmN0aW9uIG1hZ25pdHVkZTIoYSwgYikge1xuICB2YXIgbWFnbml0dWRlU3F1YXJlZCA9IDA7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhLmxlbmd0aDsgKytpKSB7XG4gICAgbWFnbml0dWRlU3F1YXJlZCArPSBNYXRoLnBvdyhhW2ldIC0gYltpXSwgMik7XG4gIH1cblxuICByZXR1cm4gbWFnbml0dWRlU3F1YXJlZDtcbn1cblxudmFyIERvd25sb2FkZXIgPSBmdW5jdGlvbiAoKSB7XG4gIERvd25sb2FkZXIuJGluamVjdCA9IFtcIm5nZW9PZmZsaW5lQ29uZmlndXJhdGlvblwiXTtcblxuICBmdW5jdGlvbiBEb3dubG9hZGVyKG5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuY29uZmlndXJhdGlvbl8gPSBuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy50aWxlRG93bmxvYWRlcl8gPSBudWxsO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IERvd25sb2FkZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMudGlsZURvd25sb2FkZXJfKSB7XG4gICAgICB0aGlzLnRpbGVEb3dubG9hZGVyXy5jYW5jZWwoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnF1ZXVlTGF5ZXJUaWxlc18gPSBmdW5jdGlvbiBxdWV1ZUxheWVyVGlsZXNfKGxheWVyTWV0YWRhdGEsIHF1ZXVlKSB7XG4gICAgdmFyIHNvdXJjZSA9IGxheWVyTWV0YWRhdGEuc291cmNlO1xuICAgIHZhciBtYXAgPSBsYXllck1ldGFkYXRhLm1hcCxcbiAgICAgICAgZXh0ZW50Qnlab29tID0gbGF5ZXJNZXRhZGF0YS5leHRlbnRCeVpvb207XG5cbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnNvbGUuYXNzZXJ0KHNvdXJjZSBpbnN0YW5jZW9mIG9sU291cmNlVGlsZVdNUyB8fCBzb3VyY2UgaW5zdGFuY2VvZiBvbFNvdXJjZVdNVFMpO1xuICAgIHZhciBwcm9qZWN0aW9uID0gbWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCk7XG4gICAgdmFyIHRpbGVHcmlkID0gc291cmNlLmdldFRpbGVHcmlkKCk7XG4gICAgdmFyIHRpbGVVcmxGdW5jdGlvbiA9IHNvdXJjZS5nZXRUaWxlVXJsRnVuY3Rpb24oKTtcbiAgICBjb25zb2xlLmFzc2VydChleHRlbnRCeVpvb20pO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoKSB7XG4gICAgICBpZiAoX2lzQXJyYXkpIHtcbiAgICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIHJldHVybiBcImJyZWFrXCI7XG4gICAgICAgIF9yZWYgPSBfaXRlcmF0b3JbX2krK107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmIChfaS5kb25lKSByZXR1cm4gXCJicmVha1wiO1xuICAgICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBleHRlbnRab29tID0gX3JlZjtcbiAgICAgIHZhciB6ID0gZXh0ZW50Wm9vbS56b29tO1xuICAgICAgdmFyIGV4dGVudCA9IGV4dGVudFpvb20uZXh0ZW50O1xuICAgICAgdmFyIHF1ZXVlQnlaID0gW107XG4gICAgICB2YXIgbWluWCA9IHZvaWQgMDtcbiAgICAgIHZhciBtaW5ZID0gdm9pZCAwO1xuICAgICAgdmFyIG1heFggPSB2b2lkIDA7XG4gICAgICB2YXIgbWF4WSA9IHZvaWQgMDtcbiAgICAgIHRpbGVHcmlkLmZvckVhY2hUaWxlQ29vcmQoZXh0ZW50LCB6LCBmdW5jdGlvbiAoY29vcmQpIHtcbiAgICAgICAgbWF4WCA9IGNvb3JkWzFdO1xuICAgICAgICBtYXhZID0gY29vcmRbMl07XG5cbiAgICAgICAgaWYgKG1pblggPT09IHVuZGVmaW5lZCB8fCBtaW5ZID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBtaW5YID0gY29vcmRbMV07XG4gICAgICAgICAgbWluWSA9IGNvb3JkWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHVybCA9IHRpbGVVcmxGdW5jdGlvbihjb29yZCwgREVWSUNFX1BJWEVMX1JBVElPLCBwcm9qZWN0aW9uKTtcbiAgICAgICAgY29uc29sZS5hc3NlcnQodXJsKTtcblxuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgdmFyIHRpbGUgPSB7XG4gICAgICAgICAgICBjb29yZDogY29vcmQsXG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIHJlc3BvbnNlOiBudWxsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBxdWV1ZUJ5Wi5wdXNoKHRpbGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHZhciBjZW50ZXJUaWxlQ29vcmQgPSBbeiwgKG1pblggKyBtYXhYKSAvIDIsIChtaW5ZICsgbWF4WSkgLyAyXTtcbiAgICAgIHF1ZXVlQnlaLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIG1hZ25pdHVkZTIoYS5jb29yZCwgY2VudGVyVGlsZUNvb3JkKSAtIG1hZ25pdHVkZTIoYi5jb29yZCwgY2VudGVyVGlsZUNvb3JkKTtcbiAgICAgIH0pO1xuICAgICAgcXVldWUucHVzaC5hcHBseShxdWV1ZSwgcXVldWVCeVopO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBleHRlbnRCeVpvb20sIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgdmFyIF9yZXQgPSBfbG9vcCgpO1xuXG4gICAgICBpZiAoX3JldCA9PT0gXCJicmVha1wiKSBicmVhaztcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNhdmUgPSBmdW5jdGlvbiBzYXZlKGV4dGVudCwgbWFwKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBsYXllcnNNZXRhZGF0YXMgPSB0aGlzLmNvbmZpZ3VyYXRpb25fLmNyZWF0ZUxheWVyTWV0YWRhdGFzKG1hcCwgZXh0ZW50KTtcbiAgICB2YXIgcGVyc2lzdGVudExheWVycyA9IFtdO1xuICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgIHZhciB6b29tcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IGxheWVyc01ldGFkYXRhcywgX2lzQXJyYXkyID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IyKSwgX2kyID0gMCwgX2l0ZXJhdG9yMiA9IF9pc0FycmF5MiA/IF9pdGVyYXRvcjIgOiBfaXRlcmF0b3IyW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICB2YXIgX3JlZjI7XG5cbiAgICAgIGlmIChfaXNBcnJheTIpIHtcbiAgICAgICAgaWYgKF9pMiA+PSBfaXRlcmF0b3IyLmxlbmd0aCkgYnJlYWs7XG4gICAgICAgIF9yZWYyID0gX2l0ZXJhdG9yMltfaTIrK107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfaTIgPSBfaXRlcmF0b3IyLm5leHQoKTtcbiAgICAgICAgaWYgKF9pMi5kb25lKSBicmVhaztcbiAgICAgICAgX3JlZjIgPSBfaTIudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBsYXllckl0ZW0gPSBfcmVmMjtcblxuICAgICAgaWYgKGxheWVySXRlbS5sYXllclR5cGUgPT09ICd0aWxlJykge1xuICAgICAgICB2YXIgdGlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5xdWV1ZUxheWVyVGlsZXNfKGxheWVySXRlbSwgdGlsZXMpO1xuICAgICAgICBxdWV1ZS5wdXNoLmFwcGx5KHF1ZXVlLCB0aWxlcyk7XG4gICAgICB9XG5cbiAgICAgIHBlcnNpc3RlbnRMYXllcnMucHVzaCh7XG4gICAgICAgIGJhY2tncm91bmRMYXllcjogbGF5ZXJJdGVtLmJhY2tncm91bmRMYXllcixcbiAgICAgICAgbGF5ZXJUeXBlOiBsYXllckl0ZW0ubGF5ZXJUeXBlLFxuICAgICAgICBsYXllclNlcmlhbGl6YXRpb246IGxheWVySXRlbS5sYXllclNlcmlhbGl6YXRpb24sXG4gICAgICAgIGtleTogdGhpcy5jb25maWd1cmF0aW9uXy5nZXRMYXllcktleShsYXllckl0ZW0pXG4gICAgICB9KTtcbiAgICAgIGxheWVySXRlbS5leHRlbnRCeVpvb20uZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHZhciB6b29tID0gb2JqLnpvb207XG5cbiAgICAgICAgaWYgKCF6b29tcy5pbmNsdWRlcyh6b29tKSkge1xuICAgICAgICAgIHpvb21zLnB1c2goem9vbSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBwZXJzaXN0ZW50T2JqZWN0ID0ge1xuICAgICAgZXh0ZW50OiBleHRlbnQsXG4gICAgICBsYXllcnM6IHBlcnNpc3RlbnRMYXllcnMsXG4gICAgICB6b29tczogem9vbXMuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gYSA8IGIgPyAtMSA6IDE7XG4gICAgICB9KVxuICAgIH07XG4gICAgdmFyIHNldE9mZmxpbmVDb250ZW50UHJvbWlzZSA9IHRoaXMuY29uZmlndXJhdGlvbl8uc2V0SXRlbSgnb2ZmbGluZV9jb250ZW50JywgcGVyc2lzdGVudE9iamVjdCk7XG4gICAgdmFyIG1heERvd25sb2FkcyA9IHRoaXMuY29uZmlndXJhdGlvbl8uZ2V0TWF4TnVtYmVyT2ZQYXJhbGxlbERvd25sb2FkcygpO1xuICAgIHRoaXMudGlsZURvd25sb2FkZXJfID0gbmV3IFRpbGVzRG93bmxvYWRlcihxdWV1ZSwgdGhpcy5jb25maWd1cmF0aW9uXywgbWF4RG93bmxvYWRzKTtcbiAgICB2YXIgdGlsZURvd25sb2FkUHJvbWlzZSA9IHRoaXMudGlsZURvd25sb2FkZXJfLmRvd25sb2FkKCk7XG4gICAgdmFyIGFsbFByb21pc2UgPSBQcm9taXNlLmFsbChbc2V0T2ZmbGluZUNvbnRlbnRQcm9taXNlLCB0aWxlRG93bmxvYWRQcm9taXNlXSk7XG5cbiAgICB2YXIgc2V0SGFzT2ZmbGluZURhdGEgPSBmdW5jdGlvbiBzZXRIYXNPZmZsaW5lRGF0YSgpIHtcbiAgICAgIHJldHVybiBfdGhpcy5jb25maWd1cmF0aW9uXy5zZXRIYXNPZmZsaW5lRGF0YSh0cnVlKTtcbiAgICB9O1xuXG4gICAgYWxsUHJvbWlzZS50aGVuKHNldEhhc09mZmxpbmVEYXRhLCBzZXRIYXNPZmZsaW5lRGF0YSk7XG4gICAgcmV0dXJuIGFsbFByb21pc2U7XG4gIH07XG5cbiAgcmV0dXJuIERvd25sb2FkZXI7XG59KCk7XG5cbnZhciBuYW1lID0gJ29mZmxpbmVEb3dubG9hZGVyJztcbkRvd25sb2FkZXIubW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmFtZSwgW10pLnNlcnZpY2UobmFtZSwgRG93bmxvYWRlcik7XG52YXIgZXhwb3J0cyA9IERvd25sb2FkZXI7XG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IEFic3RyYWN0V3JhcHBlciBmcm9tICduZ2VvL29mZmxpbmUvQWJzdHJhY3RMb2NhbGZvcmFnZVdyYXBwZXIuanMnO1xuXG52YXIgZXhwb3J0cyA9IGZ1bmN0aW9uIChfQWJzdHJhY3RXcmFwcGVyKSB7XG4gIF9pbmhlcml0c0xvb3NlKEFuZHJvaWRXcmFwcGVyLCBfQWJzdHJhY3RXcmFwcGVyKTtcblxuICBmdW5jdGlvbiBBbmRyb2lkV3JhcHBlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9BYnN0cmFjdFdyYXBwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgIHdpbmRvdy5hbmRyb2lkV3JhcHBlciA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBBbmRyb2lkV3JhcHBlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnBvc3RUb0JhY2tlbmQgPSBmdW5jdGlvbiBwb3N0VG9CYWNrZW5kKGFjdGlvbikge1xuICAgIHZhciBzdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGFjdGlvbik7XG4gICAgd2luZG93Lm5nZW9Ib3N0LnBvc3RNZXNzYWdlVG9BbmRyb2lkKHN0cmluZ2lmaWVkKTtcbiAgfTtcblxuICBfcHJvdG8ucmVjZWl2ZUZyb21BbmRyb2lkID0gZnVuY3Rpb24gcmVjZWl2ZUZyb21BbmRyb2lkKGFjdGlvblN0cmluZykge1xuICAgIHZhciBhY3Rpb24gPSBKU09OLnBhcnNlKGFjdGlvblN0cmluZyk7XG4gICAgdGhpcy5yZWNlaXZlTWVzc2FnZSh7XG4gICAgICAnZGF0YSc6IGFjdGlvblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBBbmRyb2lkV3JhcHBlcjtcbn0oQWJzdHJhY3RXcmFwcGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwb3J0czsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBBYnN0cmFjdFdyYXBwZXIgZnJvbSAnbmdlby9vZmZsaW5lL0Fic3RyYWN0TG9jYWxmb3JhZ2VXcmFwcGVyLmpzJztcblxudmFyIGV4cG9ydHMgPSBmdW5jdGlvbiAoX0Fic3RyYWN0V3JhcHBlcikge1xuICBfaW5oZXJpdHNMb29zZShDb3Jkb3ZhV3JhcHBlciwgX0Fic3RyYWN0V3JhcHBlcik7XG5cbiAgZnVuY3Rpb24gQ29yZG92YVdyYXBwZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQWJzdHJhY3RXcmFwcGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIF90aGlzLnJlY2VpdmVNZXNzYWdlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBmYWxzZSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENvcmRvdmFXcmFwcGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucG9zdFRvQmFja2VuZCA9IGZ1bmN0aW9uIHBvc3RUb0JhY2tlbmQoYWN0aW9uKSB7XG4gICAgd2luZG93WydwYXJlbnQnXS5wb3N0TWVzc2FnZShhY3Rpb24sICcqJyk7XG4gIH07XG5cbiAgcmV0dXJuIENvcmRvdmFXcmFwcGVyO1xufShBYnN0cmFjdFdyYXBwZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsImZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IEFic3RyYWN0V3JhcHBlciBmcm9tICduZ2VvL29mZmxpbmUvQWJzdHJhY3RMb2NhbGZvcmFnZVdyYXBwZXIuanMnO1xuXG52YXIgZXhwb3J0cyA9IGZ1bmN0aW9uIChfQWJzdHJhY3RXcmFwcGVyKSB7XG4gIF9pbmhlcml0c0xvb3NlKElvc1dyYXBwZXIsIF9BYnN0cmFjdFdyYXBwZXIpO1xuXG4gIGZ1bmN0aW9uIElvc1dyYXBwZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQWJzdHJhY3RXcmFwcGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICB3aW5kb3cuaW9zV3JhcHBlciA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBJb3NXcmFwcGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucG9zdFRvQmFja2VuZCA9IGZ1bmN0aW9uIHBvc3RUb0JhY2tlbmQoYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvblsnY29tbWFuZCddID09PSAnc2V0SXRlbScpIHtcbiAgICAgIGFjdGlvblsnYXJncyddWzFdID0gSlNPTi5zdHJpbmdpZnkoYWN0aW9uWydhcmdzJ11bMV0pO1xuICAgIH1cblxuICAgIHZhciBzdHJpbmdpZmllZCA9IEpTT04uc3RyaW5naWZ5KGFjdGlvbik7XG4gICAgd2luZG93LndlYmtpdC5tZXNzYWdlSGFuZGxlcnMuaW9zLnBvc3RNZXNzYWdlKHN0cmluZ2lmaWVkKTtcbiAgfTtcblxuICBfcHJvdG8ucmVjZWl2ZUZyb21Jb3MgPSBmdW5jdGlvbiByZWNlaXZlRnJvbUlvcyhhY3Rpb25TdHJpbmcpIHtcbiAgICB2YXIgYWN0aW9uID0gSlNPTi5wYXJzZShhY3Rpb25TdHJpbmcpO1xuICAgIHZhciBhcmdzID0gYWN0aW9uWydhcmdzJ10gfHwgW107XG4gICAgYWN0aW9uWydhcmdzJ10gPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoaXRlbSk7XG4gICAgfSk7XG4gICAgdGhpcy5yZWNlaXZlTWVzc2FnZSh7XG4gICAgICAnZGF0YSc6IGFjdGlvblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBJb3NXcmFwcGVyO1xufShBYnN0cmFjdFdyYXBwZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBleHBvcnRzOyIsImltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG52YXIgTW9kZSA9IGZ1bmN0aW9uICgpIHtcbiAgTW9kZS4kaW5qZWN0ID0gW1wibmdlb09mZmxpbmVDb25maWd1cmF0aW9uXCJdO1xuXG4gIGZ1bmN0aW9uIE1vZGUobmdlb09mZmxpbmVDb25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5lbmFibGVkXyA9IGZhbHNlO1xuICAgIHRoaXMuY29tcG9uZW50XyA9IG51bGw7XG4gICAgdGhpcy5uZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25fID0gbmdlb09mZmxpbmVDb25maWd1cmF0aW9uO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1vZGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5pc0VuYWJsZWQgPSBmdW5jdGlvbiBpc0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW5hYmxlZF87XG4gIH07XG5cbiAgX3Byb3RvLmVuYWJsZSA9IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICB0aGlzLmVuYWJsZWRfID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8ucmVnaXN0ZXJDb21wb25lbnQgPSBmdW5jdGlvbiByZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICB0aGlzLmNvbXBvbmVudF8gPSBjb21wb25lbnQ7XG4gIH07XG5cbiAgX3Byb3RvLmFjdGl2YXRlT2ZmbGluZU1vZGUgPSBmdW5jdGlvbiBhY3RpdmF0ZU9mZmxpbmVNb2RlKCkge1xuICAgIGlmICghdGhpcy5jb21wb25lbnRfKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjb21wb25lbnQgaXMgbm90IHJlZ2lzdGVyZWQnKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudF8uYWN0aXZhdGVPZmZsaW5lTW9kZSgpO1xuICB9O1xuXG4gIF9wcm90by5oYXNEYXRhID0gZnVuY3Rpb24gaGFzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5uZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25fLmhhc09mZmxpbmVEYXRhKCk7XG4gIH07XG5cbiAgcmV0dXJuIE1vZGU7XG59KCk7XG5cbnZhciBtb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgnbmdlb09mZmxpbmVNb2RlJywgW10pO1xubW9kdWxlLnNlcnZpY2UoJ25nZW9PZmZsaW5lTW9kZScsIE1vZGUpO1xuTW9kZS5tb2R1bGUgPSBtb2R1bGU7XG5leHBvcnQgZGVmYXVsdCBNb2RlOyIsImltcG9ydCBuZ2VvTWlzY0RlYm91bmNlIGZyb20gJ25nZW8vbWlzYy9kZWJvdW5jZS5qcyc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcblxudmFyIFNlcnZpY2UgPSBmdW5jdGlvbiAoKSB7XG4gIFNlcnZpY2UuJGluamVjdCA9IFtcIiRkb2N1bWVudFwiLCBcIiR3aW5kb3dcIiwgXCIkdGltZW91dFwiLCBcIiRyb290U2NvcGVcIiwgXCJuZ2VvT2ZmbGluZVRlc3RVcmxcIl07XG5cbiAgZnVuY3Rpb24gU2VydmljZSgkZG9jdW1lbnQsICR3aW5kb3csICR0aW1lb3V0LCAkcm9vdFNjb3BlLCBuZ2VvT2ZmbGluZVRlc3RVcmwpIHtcbiAgICB0aGlzLiRkb2N1bWVudF8gPSAkZG9jdW1lbnQ7XG4gICAgdGhpcy4kd2luZG93XyA9ICR3aW5kb3c7XG4gICAgdGhpcy4kdGltZW91dF8gPSAkdGltZW91dDtcbiAgICB0aGlzLiRyb290U2NvcGVfID0gJHJvb3RTY29wZTtcbiAgICB0aGlzLm5nZW9PZmZsaW5lVGVzdFVybF8gPSBuZ2VvT2ZmbGluZVRlc3RVcmw7XG4gICAgdGhpcy5jb3VudF8gPSAwO1xuICAgIHRoaXMub2ZmbGluZV87XG4gICAgdGhpcy5wcm9taXNlXztcbiAgICB0aGlzLmluaXRpYWxpemVfKCk7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU2VydmljZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmluaXRpYWxpemVfID0gZnVuY3Rpb24gaW5pdGlhbGl6ZV8oKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHRoaXMub2ZmbGluZV8gPSAhdGhpcy4kd2luZG93Xy5uYXZpZ2F0b3Iub25MaW5lO1xuICAgIHRoaXMuJHdpbmRvd18uYWRkRXZlbnRMaXN0ZW5lcignb2ZmbGluZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLnRyaWdnZXJDaGFuZ2VTdGF0dXNFdmVudF8odHJ1ZSk7XG4gICAgfSk7XG4gICAgdGhpcy4kd2luZG93Xy5hZGRFdmVudExpc3RlbmVyKCdvbmxpbmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5jaGVjayh1bmRlZmluZWQpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuJGRvY3VtZW50Xy5hamF4RXJyb3IpIHtcbiAgICAgIHZhciBvbkFqYXhFcnJvciA9IGZ1bmN0aW9uIG9uQWpheEVycm9yKGV2dCwganF4aHIsIHNldHRpbmdzLCB0aHJvd25FcnJvcikge1xuICAgICAgICBpZiAoIS9eKGNhbmNlbGVkfGFib3J0KSQvLnRlc3QodGhyb3duRXJyb3IpKSB7XG4gICAgICAgICAgX3RoaXMuY2hlY2soMjAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuJGRvY3VtZW50Xy5hamF4RXJyb3Iob25BamF4RXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2hlY2sgPSBmdW5jdGlvbiBjaGVjayh0aW1lb3V0KSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5wcm9taXNlXykge1xuICAgICAgdGhpcy4kdGltZW91dF8uY2FuY2VsKHRoaXMucHJvbWlzZV8pO1xuICAgICAgdGhpcy5wcm9taXNlXyA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAodGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmNvdW50XysrO1xuICAgICAgdGhpcy5wcm9taXNlXyA9IHRoaXMuJHRpbWVvdXRfKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5jaGVjaygpO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6IHRoaXMubmdlb09mZmxpbmVUZXN0VXJsXyxcbiAgICAgIHRpbWVvdXQ6IDEwMDAsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgICBfdGhpczIuY291bnRfID0gMDtcblxuICAgICAgICBpZiAoX3RoaXMyLm9mZmxpbmVfKSB7XG4gICAgICAgICAgX3RoaXMyLnRyaWdnZXJDaGFuZ2VTdGF0dXNFdmVudF8oZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgICAgICBfdGhpczIuY291bnRfKys7XG5cbiAgICAgICAgaWYgKF90aGlzMi5jb3VudF8gPiAyICYmICFfdGhpczIub2ZmbGluZV8pIHtcbiAgICAgICAgICBfdGhpczIudHJpZ2dlckNoYW5nZVN0YXR1c0V2ZW50Xyh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by50cmlnZ2VyQ2hhbmdlU3RhdHVzRXZlbnRfID0gZnVuY3Rpb24gdHJpZ2dlckNoYW5nZVN0YXR1c0V2ZW50XyhvZmZsaW5lKSB7XG4gICAgdGhpcy5vZmZsaW5lXyA9IG9mZmxpbmU7XG4gICAgdGhpcy4kcm9vdFNjb3BlXy4kZGlnZXN0KCk7XG4gIH07XG5cbiAgX3Byb3RvLmlzRGlzY29ubmVjdGVkID0gZnVuY3Rpb24gaXNEaXNjb25uZWN0ZWQoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5vZmZsaW5lXztcbiAgfTtcblxuICByZXR1cm4gU2VydmljZTtcbn0oKTtcblxudmFyIG5hbWUgPSAnbmdlb05ldHdvcmtTdGF0dXMnO1xuU2VydmljZS5tb2R1bGUgPSBhbmd1bGFyLm1vZHVsZShuYW1lLCBbbmdlb01pc2NEZWJvdW5jZS5uYW1lXSk7XG5TZXJ2aWNlLm1vZHVsZS5zZXJ2aWNlKG5hbWUsIFNlcnZpY2UpO1xuXG52YXIgaHR0cEludGVyY2VwdG9yID0gZnVuY3Rpb24gaHR0cEludGVyY2VwdG9yKCRxLCBuZ2VvRGVib3VuY2UsIG5nZW9OZXR3b3JrU3RhdHVzKSB7XG4gIHZhciBkZWJvdW5jZWRDaGVjayA9IG5nZW9EZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5nZW9OZXR3b3JrU3RhdHVzLmNoZWNrKHVuZGVmaW5lZCk7XG4gIH0sIDIwMDAsIGZhbHNlKTtcbiAgcmV0dXJuIHtcbiAgICByZXF1ZXN0OiBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9LFxuICAgIHJlcXVlc3RFcnJvcjogZnVuY3Rpb24gcmVxdWVzdEVycm9yKHJlamVjdGlvbikge1xuICAgICAgcmV0dXJuICRxLnJlamVjdChyZWplY3Rpb24pO1xuICAgIH0sXG4gICAgcmVzcG9uc2U6IGZ1bmN0aW9uIHJlc3BvbnNlKF9yZXNwb25zZSkge1xuICAgICAgcmV0dXJuIF9yZXNwb25zZTtcbiAgICB9LFxuICAgIHJlc3BvbnNlRXJyb3I6IGZ1bmN0aW9uIHJlc3BvbnNlRXJyb3IocmVqZWN0aW9uKSB7XG4gICAgICBkZWJvdW5jZWRDaGVjaygpO1xuICAgICAgcmV0dXJuICRxLnJlamVjdChyZWplY3Rpb24pO1xuICAgIH1cbiAgfTtcbn07XG5cbmh0dHBJbnRlcmNlcHRvci4kaW5qZWN0ID0gW1wiJHFcIiwgXCJuZ2VvRGVib3VuY2VcIiwgXCJuZ2VvTmV0d29ya1N0YXR1c1wiXTtcbmh0dHBJbnRlcmNlcHRvci4kaW5qZWN0ID0gW1wiJHFcIiwgXCJuZ2VvRGVib3VuY2VcIiwgXCJuZ2VvTmV0d29ya1N0YXR1c1wiXTtcblNlcnZpY2UubW9kdWxlLmZhY3RvcnkoJ2h0dHBJbnRlcmNlcHRvcicsIGh0dHBJbnRlcmNlcHRvcik7XG5cblNlcnZpY2UubW9kdWxlLmNvbmZpZ0Z1bmN0aW9uXyA9IGZ1bmN0aW9uICgkaHR0cFByb3ZpZGVyKSB7XG4gICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goJ2h0dHBJbnRlcmNlcHRvcicpO1xufTtcblxuU2VydmljZS5tb2R1bGUuY29uZmlnRnVuY3Rpb25fLiRpbmplY3QgPSBbXCIkaHR0cFByb3ZpZGVyXCJdO1xuU2VydmljZS5tb2R1bGUuY29uZmlnKFNlcnZpY2UubW9kdWxlLmNvbmZpZ0Z1bmN0aW9uXyk7XG5TZXJ2aWNlLm1vZHVsZS52YWx1ZSgnbmdlb09mZmxpbmVUZXN0VXJsJywgJycpO1xudmFyIGV4cG9ydHMgPSBTZXJ2aWNlO1xuZXhwb3J0IGRlZmF1bHQgZXhwb3J0czsiLCJpbXBvcnQgbmdlb01hcEJhY2tncm91bmRMYXllck1nciBmcm9tICduZ2VvL21hcC9CYWNrZ3JvdW5kTGF5ZXJNZ3IuanMnO1xuaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5cbnZhciBSZXN0b3JlciA9IGZ1bmN0aW9uICgpIHtcbiAgUmVzdG9yZXIuJGluamVjdCA9IFtcIm5nZW9PZmZsaW5lQ29uZmlndXJhdGlvblwiLCBcIm5nZW9CYWNrZ3JvdW5kTGF5ZXJNZ3JcIl07XG5cbiAgZnVuY3Rpb24gUmVzdG9yZXIobmdlb09mZmxpbmVDb25maWd1cmF0aW9uLCBuZ2VvQmFja2dyb3VuZExheWVyTWdyKSB7XG4gICAgdGhpcy5jb25maWd1cmF0aW9uXyA9IG5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbjtcbiAgICB0aGlzLm5nZW9CYWNrZ3JvdW5kTGF5ZXJNZ3JfID0gbmdlb0JhY2tncm91bmRMYXllck1ncjtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBSZXN0b3Jlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlc3RvcmUgPSBmdW5jdGlvbiByZXN0b3JlKG1hcCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uXy5nZXRJdGVtKCdvZmZsaW5lX2NvbnRlbnQnKS50aGVuKGZ1bmN0aW9uIChvZmZsaW5lQ29udGVudCkge1xuICAgICAgcmV0dXJuIF90aGlzLmRvUmVzdG9yZShtYXAsIG9mZmxpbmVDb250ZW50KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZG9SZXN0b3JlID0gZnVuY3Rpb24gZG9SZXN0b3JlKG1hcCwgb2ZmbGluZUNvbnRlbnQpIHtcbiAgICBtYXAuZ2V0TGF5ZXJHcm91cCgpLmdldExheWVycygpLmNsZWFyKCk7XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBvZmZsaW5lQ29udGVudC5sYXllcnMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICAgIGlmIChfaSA+PSBfaXRlcmF0b3IubGVuZ3RoKSBicmVhaztcbiAgICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9pID0gX2l0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgICBfcmVmID0gX2kudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBvZmZsaW5lTGF5ZXIgPSBfcmVmO1xuICAgICAgdmFyIGxheWVyID0gdGhpcy5jb25maWd1cmF0aW9uXy5yZWNyZWF0ZU9mZmxpbmVMYXllcihvZmZsaW5lTGF5ZXIpO1xuXG4gICAgICBpZiAobGF5ZXIpIHtcbiAgICAgICAgbWFwLmFkZExheWVyKGxheWVyKTtcblxuICAgICAgICBpZiAob2ZmbGluZUxheWVyLmJhY2tncm91bmRMYXllcikge1xuICAgICAgICAgIHRoaXMubmdlb0JhY2tncm91bmRMYXllck1ncl8uc2V0KG1hcCwgbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZmxpbmVDb250ZW50LmV4dGVudDtcbiAgfTtcblxuICByZXR1cm4gUmVzdG9yZXI7XG59KCk7XG5cbnZhciBuYW1lID0gJ25nZW9PZmZsaW5lUmVzdG9yZXInO1xuUmVzdG9yZXIubW9kdWxlID0gYW5ndWxhci5tb2R1bGUobmFtZSwgW25nZW9NYXBCYWNrZ3JvdW5kTGF5ZXJNZ3IubmFtZV0pLnNlcnZpY2UobmFtZSwgUmVzdG9yZXIpO1xudmFyIGV4cG9ydHMgPSBSZXN0b3JlcjtcbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHM7IiwiaW1wb3J0IE9sVGlsZWdyaWRUaWxlR3JpZCBmcm9tICdvbC90aWxlZ3JpZC9UaWxlR3JpZC5qcyc7XG5pbXBvcnQgT2xUaWxlZ3JpZFdNVFMgZnJvbSAnb2wvdGlsZWdyaWQvV01UUy5qcyc7XG5pbXBvcnQgKiBhcyBvbFByb2ogZnJvbSAnb2wvcHJvai5qcyc7XG5pbXBvcnQgT2xTb3VyY2VUaWxlV01TIGZyb20gJ29sL3NvdXJjZS9UaWxlV01TLmpzJztcbmltcG9ydCBPbFNvdXJjZVdNVFMgZnJvbSAnb2wvc291cmNlL1dNVFMuanMnO1xuaW1wb3J0IE9sTGF5ZXJUaWxlIGZyb20gJ29sL2xheWVyL1RpbGUuanMnO1xuXG52YXIgU2VyRGVzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXJEZXMoX3JlZikge1xuICAgIHZhciBndXR0ZXIgPSBfcmVmLmd1dHRlcjtcbiAgICB0aGlzLmd1dHRlcl8gPSBndXR0ZXI7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU2VyRGVzLnByb3RvdHlwZTtcblxuICBfcHJvdG8uY3JlYXRlQmFzZU9iamVjdF8gPSBmdW5jdGlvbiBjcmVhdGVCYXNlT2JqZWN0XyhvbE9iamVjdCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0gb2xPYmplY3QuZ2V0UHJvcGVydGllcygpO1xuICAgIHZhciBvYmogPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICB2YXIgdmFsdWUgPSBwcm9wZXJ0aWVzW2tleV07XG4gICAgICB2YXIgdHlwZU9mID0gdHlwZW9mIHZhbHVlO1xuXG4gICAgICBpZiAodHlwZU9mID09PSAnc3RyaW5nJyB8fCB0eXBlT2YgPT09ICdudW1iZXInKSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBfcHJvdG8uc2VyaWFsaXplVGlsZWdyaWQgPSBmdW5jdGlvbiBzZXJpYWxpemVUaWxlZ3JpZCh0aWxlZ3JpZCkge1xuICAgIHZhciBvYmogPSB7fTtcbiAgICBvYmouZXh0ZW50ID0gdGlsZWdyaWQuZ2V0RXh0ZW50KCk7XG4gICAgb2JqLm1pblpvb20gPSB0aWxlZ3JpZC5nZXRNaW5ab29tKCk7XG4gICAgb2JqLm9yaWdpbiA9IHRpbGVncmlkLmdldE9yaWdpbigwKTtcbiAgICBvYmoucmVzb2x1dGlvbnMgPSB0aWxlZ3JpZC5nZXRSZXNvbHV0aW9ucygpO1xuICAgIG9iai50aWxlU2l6ZSA9IHRpbGVncmlkLmdldFRpbGVTaXplKHRpbGVncmlkLmdldE1pblpvb20oKSk7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG4gIH07XG5cbiAgX3Byb3RvLmRlc2VyaWFsaXplVGlsZWdyaWQgPSBmdW5jdGlvbiBkZXNlcmlhbGl6ZVRpbGVncmlkKHNlcmlhbGl6YXRpb24pIHtcbiAgICB2YXIgb3B0aW9ucyA9IEpTT04ucGFyc2Uoc2VyaWFsaXphdGlvbik7XG4gICAgcmV0dXJuIG5ldyBPbFRpbGVncmlkVGlsZUdyaWQob3B0aW9ucyk7XG4gIH07XG5cbiAgX3Byb3RvLnNlcmlhbGl6ZVRpbGVncmlkV01UUyA9IGZ1bmN0aW9uIHNlcmlhbGl6ZVRpbGVncmlkV01UUyh0aWxlZ3JpZCkge1xuICAgIGlmICghdGlsZWdyaWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIHZhciByZXNvbHV0aW9ucyA9IHRpbGVncmlkLmdldFJlc29sdXRpb25zKCk7XG4gICAgb2JqLmV4dGVudCA9IHRpbGVncmlkLmdldEV4dGVudCgpO1xuICAgIG9iai5taW5ab29tID0gdGlsZWdyaWQuZ2V0TWluWm9vbSgpO1xuICAgIG9iai5tYXRyaXhJZHMgPSB0aWxlZ3JpZC5nZXRNYXRyaXhJZHMoKTtcbiAgICBvYmoucmVzb2x1dGlvbnMgPSByZXNvbHV0aW9ucztcbiAgICBvYmoub3JpZ2lucyA9IFtdO1xuXG4gICAgZm9yICh2YXIgeiA9IDA7IHogPCByZXNvbHV0aW9ucy5sZW5ndGg7ICsreikge1xuICAgICAgb2JqLm9yaWdpbnMucHVzaCh0aWxlZ3JpZC5nZXRPcmlnaW4oeikpO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICB9O1xuXG4gIF9wcm90by5kZXNlcmlhbGl6ZVRpbGVncmlkV01UUyA9IGZ1bmN0aW9uIGRlc2VyaWFsaXplVGlsZWdyaWRXTVRTKHNlcmlhbGl6YXRpb24pIHtcbiAgICB2YXIgb3B0aW9ucyA9IEpTT04ucGFyc2Uoc2VyaWFsaXphdGlvbik7XG4gICAgcmV0dXJuIG5ldyBPbFRpbGVncmlkV01UUyhvcHRpb25zKTtcbiAgfTtcblxuICBfcHJvdG8uc2VyaWFsaXplU291cmNlVGlsZVdNUyA9IGZ1bmN0aW9uIHNlcmlhbGl6ZVNvdXJjZVRpbGVXTVMoc291cmNlKSB7XG4gICAgdmFyIG9iaiA9IHRoaXMuY3JlYXRlQmFzZU9iamVjdF8oc291cmNlKTtcbiAgICBvYmoucGFyYW1zID0gc291cmNlLmdldFBhcmFtcygpO1xuICAgIG9iai51cmxzID0gc291cmNlLmdldFVybHMoKTtcbiAgICBvYmoudGlsZUdyaWQgPSB0aGlzLnNlcmlhbGl6ZVRpbGVncmlkKHNvdXJjZS5nZXRUaWxlR3JpZCgpKTtcbiAgICB2YXIgcHJvamVjdGlvbiA9IHNvdXJjZS5nZXRQcm9qZWN0aW9uKCk7XG5cbiAgICBpZiAocHJvamVjdGlvbikge1xuICAgICAgb2JqLnByb2plY3Rpb24gPSBvbFByb2ouZ2V0KHNvdXJjZS5nZXRQcm9qZWN0aW9uKCkpLmdldENvZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgfTtcblxuICBfcHJvdG8uZGVzZXJpYWxpemVTb3VyY2VUaWxlV01TID0gZnVuY3Rpb24gZGVzZXJpYWxpemVTb3VyY2VUaWxlV01TKHNlcmlhbGl6YXRpb24sIHRpbGVMb2FkRnVuY3Rpb24pIHtcbiAgICB2YXIgb3B0aW9ucyA9IEpTT04ucGFyc2Uoc2VyaWFsaXphdGlvbik7XG4gICAgb3B0aW9ucy50aWxlTG9hZEZ1bmN0aW9uID0gdGlsZUxvYWRGdW5jdGlvbjtcblxuICAgIGlmIChvcHRpb25zLnRpbGVHcmlkKSB7XG4gICAgICBvcHRpb25zLnRpbGVHcmlkID0gdGhpcy5kZXNlcmlhbGl6ZVRpbGVncmlkKG9wdGlvbnMudGlsZUdyaWQpO1xuICAgIH1cblxuICAgIG9wdGlvbnMuZ3V0dGVyID0gdGhpcy5ndXR0ZXJfO1xuICAgIHJldHVybiBuZXcgT2xTb3VyY2VUaWxlV01TKG9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5zZXJpYWxpemVTb3VyY2VXTVRTID0gZnVuY3Rpb24gc2VyaWFsaXplU291cmNlV01UUyhzb3VyY2UpIHtcbiAgICB2YXIgb2JqID0gdGhpcy5jcmVhdGVCYXNlT2JqZWN0Xyhzb3VyY2UpO1xuICAgIG9iai5kaW1lbnNpb25zID0gc291cmNlLmdldERpbWVuc2lvbnMoKTtcbiAgICBvYmouZm9ybWF0ID0gc291cmNlLmdldEZvcm1hdCgpO1xuICAgIG9iai51cmxzID0gc291cmNlLmdldFVybHMoKTtcbiAgICBvYmoudmVyc2lvbiA9IHNvdXJjZS5nZXRWZXJzaW9uKCk7XG4gICAgb2JqLmxheWVyID0gc291cmNlLmdldExheWVyKCk7XG4gICAgb2JqLnN0eWxlID0gc291cmNlLmdldFN0eWxlKCk7XG4gICAgb2JqLm1hdHJpeFNldCA9IHNvdXJjZS5nZXRNYXRyaXhTZXQoKTtcbiAgICB2YXIgdGlsZUdyaWRXTVRTID0gc291cmNlLmdldFRpbGVHcmlkKCk7XG4gICAgb2JqLnRpbGVHcmlkID0gdGhpcy5zZXJpYWxpemVUaWxlZ3JpZFdNVFModGlsZUdyaWRXTVRTKTtcbiAgICBvYmoucmVxdWVzdEVuY29kaW5nID0gc291cmNlLmdldFJlcXVlc3RFbmNvZGluZygpO1xuICAgIHZhciBwcm9qZWN0aW9uID0gc291cmNlLmdldFByb2plY3Rpb24oKTtcblxuICAgIGlmIChwcm9qZWN0aW9uKSB7XG4gICAgICBvYmoucHJvamVjdGlvbiA9IG9sUHJvai5nZXQoc291cmNlLmdldFByb2plY3Rpb24oKSkuZ2V0Q29kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICB9O1xuXG4gIF9wcm90by5kZXNlcmlhbGl6ZVNvdXJjZVdNVFMgPSBmdW5jdGlvbiBkZXNlcmlhbGl6ZVNvdXJjZVdNVFMoc2VyaWFsaXphdGlvbiwgdGlsZUxvYWRGdW5jdGlvbikge1xuICAgIHZhciBvcHRpb25zID0gSlNPTi5wYXJzZShzZXJpYWxpemF0aW9uKTtcbiAgICBvcHRpb25zLnRpbGVMb2FkRnVuY3Rpb24gPSB0aWxlTG9hZEZ1bmN0aW9uO1xuXG4gICAgaWYgKG9wdGlvbnMudGlsZUdyaWQpIHtcbiAgICAgIG9wdGlvbnMudGlsZUdyaWQgPSB0aGlzLmRlc2VyaWFsaXplVGlsZWdyaWRXTVRTKG9wdGlvbnMudGlsZUdyaWQpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgT2xTb3VyY2VXTVRTKG9wdGlvbnMpO1xuICB9O1xuXG4gIF9wcm90by5tYWtlSW5maW5pdHlTZXJpYWxpemFibGVfID0gZnVuY3Rpb24gbWFrZUluZmluaXR5U2VyaWFsaXphYmxlXyhudW1iZXIpIHtcbiAgICBpZiAobnVtYmVyID09PSBJbmZpbml0eSkge1xuICAgICAgcmV0dXJuIDEwMDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfTtcblxuICBfcHJvdG8uc2VyaWFsaXplVGlsZUxheWVyID0gZnVuY3Rpb24gc2VyaWFsaXplVGlsZUxheWVyKGxheWVyLCBzb3VyY2UpIHtcbiAgICB2YXIgb2JqID0gdGhpcy5jcmVhdGVCYXNlT2JqZWN0XyhsYXllcik7XG4gICAgb2JqLm9wYWNpdHkgPSBsYXllci5nZXRPcGFjaXR5KCk7XG4gICAgb2JqLnZpc2libGUgPSBsYXllci5nZXRWaXNpYmxlKCk7XG4gICAgb2JqLm1pblJlc29sdXRpb24gPSBsYXllci5nZXRNaW5SZXNvbHV0aW9uKCk7XG4gICAgb2JqLm1heFJlc29sdXRpb24gPSB0aGlzLm1ha2VJbmZpbml0eVNlcmlhbGl6YWJsZV8obGF5ZXIuZ2V0TWF4UmVzb2x1dGlvbigpKTtcbiAgICBvYmouekluZGV4ID0gbGF5ZXIuZ2V0WkluZGV4KCk7XG4gICAgc291cmNlID0gc291cmNlIHx8IGxheWVyLmdldFNvdXJjZSgpO1xuXG4gICAgaWYgKHNvdXJjZSBpbnN0YW5jZW9mIE9sU291cmNlVGlsZVdNUykge1xuICAgICAgb2JqLnNvdXJjZSA9IHRoaXMuc2VyaWFsaXplU291cmNlVGlsZVdNUyhzb3VyY2UpO1xuICAgICAgb2JqLnNvdXJjZVR5cGUgPSAndGlsZVdNUyc7XG4gICAgfSBlbHNlIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBPbFNvdXJjZVdNVFMpIHtcbiAgICAgIG9iai5zb3VyY2UgPSB0aGlzLnNlcmlhbGl6ZVNvdXJjZVdNVFMoc291cmNlKTtcbiAgICAgIG9iai5zb3VyY2VUeXBlID0gJ1dNVFMnO1xuICAgIH1cblxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICB9O1xuXG4gIF9wcm90by5kZXNlcmlhbGl6ZVRpbGVMYXllciA9IGZ1bmN0aW9uIGRlc2VyaWFsaXplVGlsZUxheWVyKHNlcmlhbGl6YXRpb24sIHRpbGVMb2FkRnVuY3Rpb24pIHtcbiAgICB2YXIgb3B0aW9ucyA9IEpTT04ucGFyc2Uoc2VyaWFsaXphdGlvbik7XG4gICAgdmFyIHNvdXJjZVR5cGUgPSBvcHRpb25zLnNvdXJjZVR5cGU7XG5cbiAgICBpZiAoc291cmNlVHlwZSA9PT0gJ3RpbGVXTVMnKSB7XG4gICAgICBvcHRpb25zLnNvdXJjZSA9IHRoaXMuZGVzZXJpYWxpemVTb3VyY2VUaWxlV01TKG9wdGlvbnMuc291cmNlLCB0aWxlTG9hZEZ1bmN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKHNvdXJjZVR5cGUgPT09ICdXTVRTJykge1xuICAgICAgb3B0aW9ucy5zb3VyY2UgPSB0aGlzLmRlc2VyaWFsaXplU291cmNlV01UUyhvcHRpb25zLnNvdXJjZSwgdGlsZUxvYWRGdW5jdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBPbExheWVyVGlsZShvcHRpb25zKTtcbiAgfTtcblxuICByZXR1cm4gU2VyRGVzO1xufSgpO1xuXG52YXIgZXhwb3J0cyA9IFNlckRlcztcbmV4cG9ydCBkZWZhdWx0IGV4cG9ydHM7IiwiaW1wb3J0IGFuZ3VsYXIgZnJvbSAnYW5ndWxhcic7XG5cbnZhciBTZXJ2aWNlTWFuYWdlciA9IGZ1bmN0aW9uICgpIHtcbiAgU2VydmljZU1hbmFnZXIuJGluamVjdCA9IFtcIiRpbmplY3RvclwiXTtcblxuICBmdW5jdGlvbiBTZXJ2aWNlTWFuYWdlcigkaW5qZWN0b3IpIHtcbiAgICB0aGlzLiRpbmplY3Rvcl8gPSAkaW5qZWN0b3I7XG4gICAgdGhpcy5zYXZlU2VydmljZV8gPSBudWxsO1xuICAgIHRoaXMucmVzdG9yZVNlcnZpY2VfID0gbnVsbDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTZXJ2aWNlTWFuYWdlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldE9mZmxpbmVTZXJ2aWNlXyA9IGZ1bmN0aW9uIGdldE9mZmxpbmVTZXJ2aWNlXyhzZXJ2aWNlTGlrZSwgbWV0aG9kKSB7XG4gICAgaWYgKHR5cGVvZiBzZXJ2aWNlTGlrZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICghdGhpcy4kaW5qZWN0b3JfLmhhcyhzZXJ2aWNlTGlrZSkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBvZmZsaW5lIFwiICsgbWV0aG9kICsgXCIgc2VydmljZSBjb3VsZCBub3QgYmUgZm91bmRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNlcnZpY2UgPSB0aGlzLiRpbmplY3Rvcl8uZ2V0KHNlcnZpY2VMaWtlKTtcblxuICAgICAgaWYgKCFzZXJ2aWNlW21ldGhvZF0pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZSBvZmZsaW5lIHNlcnZpY2UgXCIgKyBzZXJ2aWNlTGlrZSArIFwiIGRvZXMgbm90IGhhdmUgYSBcIiArIG1ldGhvZCArIFwiIG1ldGhvZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2VydmljZTtcbiAgICB9XG5cbiAgICBpZiAoIXNlcnZpY2VMaWtlW21ldGhvZF0pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgcHJvdmlkZWQgb2ZmbGluZSBzZXJ2aWNlIGRvZXMgbm90IGhhdmUgYSBcIiArIG1ldGhvZCArIFwiIG1ldGhvZFwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VydmljZUxpa2U7XG4gIH07XG5cbiAgX3Byb3RvLnNldFNhdmVTZXJ2aWNlID0gZnVuY3Rpb24gc2V0U2F2ZVNlcnZpY2Uoc2F2ZUxpa2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5zYXZlU2VydmljZV8gPSB0aGlzLmdldE9mZmxpbmVTZXJ2aWNlXyhzYXZlTGlrZVNlcnZpY2UsICdzYXZlJyk7XG4gIH07XG5cbiAgX3Byb3RvLnNldFJlc3RvcmVTZXJ2aWNlID0gZnVuY3Rpb24gc2V0UmVzdG9yZVNlcnZpY2UocmVzdG9yZUxpa2VTZXJ2aWNlKSB7XG4gICAgdGhpcy5yZXN0b3JlU2VydmljZV8gPSB0aGlzLmdldE9mZmxpbmVTZXJ2aWNlXyhyZXN0b3JlTGlrZVNlcnZpY2UsICdyZXN0b3JlJyk7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAoIXRoaXMuc2F2ZVNlcnZpY2VfKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1lvdSBtdXN0IHJlZ2lzdGVyIGEgc2F2ZVNlcnZpY2UgZmlyc3QnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNhdmVTZXJ2aWNlXy5jYW5jZWwoKTtcbiAgfTtcblxuICBfcHJvdG8uc2F2ZSA9IGZ1bmN0aW9uIHNhdmUoZXh0ZW50LCBtYXApIHtcbiAgICBpZiAoIXRoaXMuc2F2ZVNlcnZpY2VfKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1lvdSBtdXN0IHJlZ2lzdGVyIGEgc2F2ZVNlcnZpY2UgZmlyc3QnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNhdmVTZXJ2aWNlXy5zYXZlKGV4dGVudCwgbWFwKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdG9yZSA9IGZ1bmN0aW9uIHJlc3RvcmUobWFwKSB7XG4gICAgaWYgKCF0aGlzLnJlc3RvcmVTZXJ2aWNlXykge1xuICAgICAgY29uc29sZS53YXJuKCdZb3UgbXVzdCByZWdpc3RlciBhIHJlc3RvcmVTZXJ2aWNlIGZpcnN0Jyk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXN0b3JlU2VydmljZV8ucmVzdG9yZShtYXApO1xuICB9O1xuXG4gIHJldHVybiBTZXJ2aWNlTWFuYWdlcjtcbn0oKTtcblxuU2VydmljZU1hbmFnZXIubW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ25nZW9PZmZsaW5lU2VydmljZU1hbmFnZXInLCBbXSk7XG5TZXJ2aWNlTWFuYWdlci5tb2R1bGUuc2VydmljZSgnbmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlcicsIFNlcnZpY2VNYW5hZ2VyKTtcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VNYW5hZ2VyOyIsImZ1bmN0aW9uIGJsb2JUb0RhdGFVcmwoYmxvYikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG4gICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgfTtcblxuICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGJsb2IpO1xuICB9KTtcbn1cblxudmFyIFRpbGVEb3dubG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUaWxlRG93bmxvYWRlcih0aWxlcywgY2FsbGJhY2tzLCB3b3JrZXJzKSB7XG4gICAgdGhpcy5tYXhOdW1iZXJPZldvcmtlcnNfID0gd29ya2VycztcbiAgICB0aGlzLndhc1N0YXJ0ZWRfID0gZmFsc2U7XG4gICAgdGhpcy50aWxlc18gPSB0aWxlcztcbiAgICB0aGlzLmNhbGxiYWNrc18gPSBjYWxsYmFja3M7XG4gICAgdGhpcy5hbGxDb3VudF8gPSAwO1xuICAgIHRoaXMub2tDb3VudF8gPSAwO1xuICAgIHRoaXMua29Db3VudF8gPSAwO1xuICAgIHRoaXMucmVxdWVzdGVkQ291bnRfID0gMDtcbiAgICB0aGlzLnJlc29sdmVQcm9taXNlXyA9IG51bGw7XG4gICAgdGhpcy5wcm9taXNlXyA9IG51bGw7XG4gICAgdGhpcy50aWxlSW5kZXhfID0gMDtcbiAgICB0aGlzLmNhbmNlbF8gPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBUaWxlRG93bmxvYWRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICB0aGlzLmNhbmNlbF8gPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5kb3dubG9hZCA9IGZ1bmN0aW9uIGRvd25sb2FkKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5wcm9taXNlXykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvbWlzZV87XG4gICAgfVxuXG4gICAgdGhpcy5wcm9taXNlXyA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIF90aGlzLnJlc29sdmVQcm9taXNlXyA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgY29uc29sZS5hc3NlcnQodGhpcy50aWxlc18pO1xuXG4gICAgaWYgKHRoaXMudGlsZXNfLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5jYWxsYmFja3NfLm9uVGlsZURvd25sb2FkRXJyb3IoMSk7XG5cbiAgICAgIGlmICh0aGlzLnJlc29sdmVQcm9taXNlXykge1xuICAgICAgICB0aGlzLnJlc29sdmVQcm9taXNlXygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWF4TnVtYmVyT2ZXb3JrZXJzXzsgKytpKSB7XG4gICAgICAgIHRoaXMuZG93bmxvYWRUaWxlXygpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb21pc2VfO1xuICB9O1xuXG4gIF9wcm90by5kb3dubG9hZFRpbGVfID0gZnVuY3Rpb24gZG93bmxvYWRUaWxlXygpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGlmICh0aGlzLmNhbmNlbF8gfHwgdGhpcy50aWxlSW5kZXhfID49IHRoaXMudGlsZXNfLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0aWxlID0gdGhpcy50aWxlc19bdGhpcy50aWxlSW5kZXhfKytdO1xuICAgIHZhciB0aWxlVXJsID0gdGlsZS51cmw7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKCdHRVQnLCB0aWxlVXJsLCB0cnVlKTtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuXG4gICAgdmFyIG9uVGlsZURvd25sb2FkZWQgPSBmdW5jdGlvbiBvblRpbGVEb3dubG9hZGVkKCkge1xuICAgICAgaWYgKF90aGlzMi5hbGxDb3VudF8gPT09IF90aGlzMi50aWxlc18ubGVuZ3RoICYmIF90aGlzMi5yZXNvbHZlUHJvbWlzZV8pIHtcbiAgICAgICAgX3RoaXMyLnJlc29sdmVQcm9taXNlXygpO1xuICAgICAgfVxuXG4gICAgICBfdGhpczIuZG93bmxvYWRUaWxlXygpO1xuICAgIH07XG5cbiAgICB2YXIgZXJyb3JDYWxsYmFjayA9IGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2soXykge1xuICAgICAgaWYgKF90aGlzMi5jYW5jZWxfKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgKytfdGhpczIuYWxsQ291bnRfO1xuICAgICAgKytfdGhpczIua29Db3VudF87XG4gICAgICB2YXIgcHJvZ3Jlc3MgPSBfdGhpczIuYWxsQ291bnRfIC8gX3RoaXMyLnRpbGVzXy5sZW5ndGg7XG5cbiAgICAgIF90aGlzMi5jYWxsYmFja3NfLm9uVGlsZURvd25sb2FkRXJyb3IocHJvZ3Jlc3MpLnRoZW4ob25UaWxlRG93bmxvYWRlZCwgb25UaWxlRG93bmxvYWRlZCk7XG4gICAgfTtcblxuICAgIHZhciBvbmxvYWRDYWxsYmFjayA9IGZ1bmN0aW9uIG9ubG9hZENhbGxiYWNrKGUpIHtcbiAgICAgIHZhciByZXNwb25zZSA9IHhoci5yZXNwb25zZTtcblxuICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnNpemUgIT09IDApIHtcbiAgICAgICAgYmxvYlRvRGF0YVVybChyZXNwb25zZSkudGhlbihmdW5jdGlvbiAoZGF0YVVybCkge1xuICAgICAgICAgIGlmIChfdGhpczIuY2FuY2VsXykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICsrX3RoaXMyLmFsbENvdW50XztcbiAgICAgICAgICArK190aGlzMi5va0NvdW50XztcbiAgICAgICAgICB0aWxlLnJlc3BvbnNlID0gZGF0YVVybDtcbiAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSBfdGhpczIuYWxsQ291bnRfIC8gX3RoaXMyLnRpbGVzXy5sZW5ndGg7XG5cbiAgICAgICAgICBfdGhpczIuY2FsbGJhY2tzXy5vblRpbGVEb3dubG9hZFN1Y2Nlc3MocHJvZ3Jlc3MsIHRpbGUpLnRoZW4ob25UaWxlRG93bmxvYWRlZCwgb25UaWxlRG93bmxvYWRlZCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX3RoaXMyLmNhbmNlbF8pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvckNhbGxiYWNrKGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChfdGhpczIuY2FuY2VsXykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICsrX3RoaXMyLmFsbENvdW50XztcbiAgICAgICAgKytfdGhpczIub2tDb3VudF87XG5cbiAgICAgICAgX3RoaXMyLmNhbGxiYWNrc18ub25UaWxlRG93bmxvYWRTdWNjZXNzKF90aGlzMi5hbGxDb3VudF8gLyBfdGhpczIudGlsZXNfLmxlbmd0aCwgdGlsZSkudGhlbihvblRpbGVEb3dubG9hZGVkLCBvblRpbGVEb3dubG9hZGVkKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgeGhyLm9ubG9hZCA9IG9ubG9hZENhbGxiYWNrO1xuICAgIHhoci5vbmVycm9yID0gZXJyb3JDYWxsYmFjaztcbiAgICB4aHIub25hYm9ydCA9IGVycm9yQ2FsbGJhY2s7XG4gICAgeGhyLm9udGltZW91dCA9IGVycm9yQ2FsbGJhY2s7XG4gICAgeGhyLnNlbmQoKTtcbiAgICArK3RoaXMucmVxdWVzdGVkQ291bnRfO1xuICB9O1xuXG4gIHJldHVybiBUaWxlRG93bmxvYWRlcjtcbn0oKTtcblxuZXhwb3J0IHsgVGlsZURvd25sb2FkZXIgYXMgZGVmYXVsdCB9OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqKSB7XG5vYmogfHwgKG9iaiA9IHt9KTtcbnZhciBfX3QsIF9fcCA9ICcnO1xud2l0aCAob2JqKSB7XG5fX3AgKz0gJzxkaXYgY2xhc3M9XCJtYWluLWJ1dHRvblwiPlxcbiAgPHNwYW4gbmctaWY9XCIhJGN0cmwuaGFzRGF0YSgpXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJuby1kYXRhXCIgbmctY2xpY2s9XCIkY3RybC50b2dnbGVWaWV3RXh0ZW50U2VsZWN0aW9uKClcIj48L2Rpdj5cXG4gIDwvc3Bhbj5cXG4gIDxzcGFuIG5nLWlmPVwiJGN0cmwuaGFzRGF0YSgpXCI+XFxuICAgIDxkaXYgY2xhc3M9XCJ3aXRoLWRhdGFcIiBuZy1jbGljaz1cIiRjdHJsLnNob3dNZW51KClcIj48L2Rpdj5cXG4gIDwvc3Bhbj5cXG48L2Rpdj5cXG5cXG48ZGl2IG5nLWlmPVwiJGN0cmwuc2VsZWN0aW5nRXh0ZW50ICYmICEkY3RybC5uZXR3b3JrU3RhdHVzLmlzRGlzY29ubmVjdGVkKClcIiBjbGFzcz1cInZhbGlkYXRlLWV4dGVudCBidG4gYnRuLXByaW1hcnlcIj5cXG4gIDxkaXYgbmctaWY9XCIhJGN0cmwuZG93bmxvYWRpbmdcIiBuZy1jbGljaz1cIiRjdHJsLmNvbXB1dGVTaXplQW5kRGlzcGxheUFsZXJ0TG9hZERhdGEoKVwiIHRyYW5zbGF0ZT5TYXZlIG1hcDwvZGl2PlxcbiAgPGRpdiBuZy1pZj1cIiRjdHJsLmRvd25sb2FkaW5nXCIgbmctY2xpY2s9XCIkY3RybC5hc2tBYm9ydERvd25sb2FkKClcIiB0cmFuc2xhdGU+QWJvcnQ8L2Rpdj5cXG48L2Rpdj5cXG5cXG5cXG48ZGl2IG5nLWlmPVwiJGN0cmwuZG93bmxvYWRpbmdcIiBjbGFzcz1cImluLXByb2dyZXNzXCI+XFxuICA8ZGl2Pnt7JGN0cmwucHJvZ3Jlc3NQZXJjZW50c319JTwvZGl2PlxcbjwvZGl2PlxcblxcbjxuZ2VvLW1vZGFsIG5nLW1vZGVsPVwiJGN0cmwubWVudURpc3BsYXllZFwiPlxcbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCJcXG4gICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ7e1xcJ0Nsb3NlXFwnIHwgdHJhbnNsYXRlfX1cIj5cXG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxcbiAgICA8L2J1dHRvbj5cXG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiB0cmFuc2xhdGU+T2ZmbGluZSBtYXA8L2g0PlxcbiAgPC9kaXY+XFxuICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxcbiAgICA8ZGl2IG5nLWlmPVwiJGN0cmwuaGFzRGF0YSgpXCI+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJleHRlbnQtem9vbSBidG4gYnRuLWRlZmF1bHRcIlxcbiAgICAgICAgICAgICAgbmctaWY9XCIhJGN0cmwub2ZmbGluZU1vZGUuaXNFbmFibGVkKClcIlxcbiAgICAgICAgICAgICAgbmctY2xpY2s9XCIkY3RybC5hY3RpdmF0ZU9mZmxpbmVNb2RlKClcIlxcbiAgICAgICAgICAgICAgdHJhbnNsYXRlPkFjdGl2YXRlIG9mZmxpbmUgbW9kZVxcbiAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZXh0ZW50LXpvb20gYnRuIGJ0bi1kZWZhdWx0XCJcXG4gICAgICAgICAgICAgIG5nLWlmPVwiJGN0cmwub2ZmbGluZU1vZGUuaXNFbmFibGVkKCkgJiYgISRjdHJsLm5ldHdvcmtTdGF0dXMuaXNEaXNjb25uZWN0ZWQoKVwiXFxuICAgICAgICAgICAgICBuZy1jbGljaz1cIiRjdHJsLmRlYWN0aXZhdGVPZmZsaW5lTW9kZSgpXCJcXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT5EZWFjdGl2YXRlIG9mZmxpbmUgbW9kZVxcbiAgICAgIDwvYnV0dG9uPlxcblxcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZXh0ZW50LXNob3cgYnRuIGJ0bi1kZWZhdWx0XCJcXG4gICAgICAgICAgICAgIG5nLWlmPVwiJGN0cmwub2ZmbGluZU1vZGUuaXNFbmFibGVkKClcIlxcbiAgICAgICAgICAgICAgbmctY2xpY2s9XCIkY3RybC50b2dnbGVFeHRlbnRWaXNpYmlsaXR5KClcIj5cXG4gICAgICAgIDxzcGFuIG5nLWlmPVwiJGN0cmwuaXNFeHRlbnRWaXNpYmxlKClcIiB0cmFuc2xhdGU+SGlkZSBleHRlbnQ8L3NwYW4+XFxuICAgICAgICA8c3BhbiBuZy1pZj1cIiEkY3RybC5pc0V4dGVudFZpc2libGUoKVwiIHRyYW5zbGF0ZSA+U2hvdyBleHRlbnQ8L3NwYW4+XFxuICAgICAgPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkZWxldGUgYnRuIGJ0bi1kZWZhdWx0XCJcXG4gICAgICAgICAgICAgIG5nLWlmPVwiISRjdHJsLm5ldHdvcmtTdGF0dXMuaXNEaXNjb25uZWN0ZWQoKVwiXFxuICAgICAgICAgICAgICBuZy1jbGljaz1cIiRjdHJsLmRpc3BsYXlBbGVydERlc3Ryb3lEYXRhID0gdHJ1ZVwiXFxuICAgICAgICAgICAgICB0cmFuc2xhdGU+RGVsZXRlIGRhdGFcXG4gICAgICA8L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgbmctaWY9XCIhJGN0cmwuaGFzRGF0YSgpICYmICEkY3RybC5uZXR3b3JrU3RhdHVzLmlzRGlzY29ubmVjdGVkKClcIj5cXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5ldy1kYXRhIGJ0biBidG4tZGVmYXVsdFwiXFxuICAgICAgICAgICAgICBuZy1jbGljaz1cIiRjdHJsLnRvZ2dsZVZpZXdFeHRlbnRTZWxlY3Rpb24oKVwiXFxuICAgICAgICAgICAgICB0cmFuc2xhdGU+U2F2ZSBuZXcgbWFwXFxuICAgICAgPC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9uZ2VvLW1vZGFsPlxcblxcbjxuZ2VvLW1vZGFsIG5nLW1vZGVsPVwiJGN0cmwuZGlzcGxheUFsZXJ0TG9hZERhdGFcIj5cXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cXG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiB0cmFuc2xhdGU+V2FybmluZzwvaDQ+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxuICAgICAgPHAgdHJhbnNsYXRlPn57eyRjdHJsLmVzdGltYXRlZExvYWREYXRhU2l6ZX19TUIgb2YgbWFwcyB3aWxsIGJlIGRvd25sb2FkZWQgKHVudGlsIHNjYWxlIDE6MjVcXCcwMDApIC0gRG9uXFwndCBsb2NrIHlvdXIgZGV2aWNlIG9yIG5hdmlnYXRlIGF3YXkgZnJvbSB0aGlzIHNpdGUgZHVyaW5nIHRoZSBkb3dubG9hZCBwcm9jZXNzLiBEZWFjdGl2YXRlIFwicHJpdmF0ZVwiIG1vZGUgb2YgeW91ciBicm93c2VyLjwvcD5cXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInZhbGlkYXRlIGJ0biBidG4tcHJpbWFyeVwiXFxuICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXFxuICAgICAgICAgICAgICBuZy1jbGljaz1cIiRjdHJsLnZhbGlkYXRlRXh0ZW50KClcIlxcbiAgICAgICAgICAgICAgdHJhbnNsYXRlPk9rXFxuICAgICAgPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkZWxldGUgYnRuIGJ0bi1kZWZhdWx0XCJcXG4gICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT5DYW5jZWxcXG4gICAgICA8L2J1dHRvbj5cXG4gIDwvZGl2Plxcbjwvbmdlby1tb2RhbD5cXG5cXG48bmdlby1tb2RhbCBuZy1tb2RlbD1cIiRjdHJsLmRpc3BsYXlBbGVydE5vTGF5ZXJcIj5cXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cXG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiB0cmFuc2xhdGU+V2FybmluZzwvaDQ+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxuICAgICAgPHAgdHJhbnNsYXRlPk5vIG1hcHMgc2VsZWN0ZWQgZm9yIHNhdmluZy48L3A+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkZWxldGUgYnRuIGJ0bi1kZWZhdWx0XCJcXG4gICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT5Pa1xcbiAgICAgIDwvYnV0dG9uPlxcbiAgPC9kaXY+XFxuPC9uZ2VvLW1vZGFsPlxcblxcbjxuZ2VvLW1vZGFsIG5nLW1vZGVsPVwiJGN0cmwuZGlzcGxheUFsZXJ0RGVzdHJveURhdGFcIj5cXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cXG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiB0cmFuc2xhdGU+V2FybmluZzwvaDQ+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxuICAgICAgPHAgdHJhbnNsYXRlPkRvIHlvdSByZWFsbHkgd2FudCB0byByZW1vdmUgeW91ciBkYXRhID88L3A+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ2YWxpZGF0ZSBidG4gYnRuLXByaW1hcnlcIlxcbiAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxcbiAgICAgICAgICAgICAgbmctY2xpY2s9XCIkY3RybC5kZWxldGVEYXRhKClcIlxcbiAgICAgICAgICAgICAgdHJhbnNsYXRlPk9rXFxuICAgICAgPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkZWxldGUgYnRuIGJ0bi1kZWZhdWx0XCJcXG4gICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT5DYW5jZWxcXG4gICAgICA8L2J1dHRvbj5cXG4gIDwvZGl2Plxcbjwvbmdlby1tb2RhbD5cXG5cXG48bmdlby1tb2RhbCBuZy1tb2RlbD1cIiRjdHJsLmRpc3BsYXlBbGVydEFib3J0RG93bmxvYWRcIj5cXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cXG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIiB0cmFuc2xhdGU+V2FybmluZzwvaDQ+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XFxuICAgICAgPHAgdHJhbnNsYXRlPkRvIHlvdSByZWFsbHkgd2FudCB0byByZW1vdmUgeW91ciBkYXRhID88L3A+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ2YWxpZGF0ZSBidG4gYnRuLXByaW1hcnlcIlxcbiAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxcbiAgICAgICAgICAgICAgbmctY2xpY2s9XCIkY3RybC5hYm9ydERvd25sb2FkKClcIlxcbiAgICAgICAgICAgICAgdHJhbnNsYXRlPk9rXFxuICAgICAgPC9idXR0b24+XFxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkZWxldGUgYnRuIGJ0bi1kZWZhdWx0XCJcXG4gICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcXG4gICAgICAgICAgICAgIG5nLWNsaWNrPVwiJGN0cmwuZm9sbG93RG93bmxvYWRQcm9ncmVzc2lvbl8oKVwiXFxuICAgICAgICAgICAgICB0cmFuc2xhdGU+Q2FuY2VsXFxuICAgICAgPC9idXR0b24+XFxuICA8L2Rpdj5cXG48L25nZW8tbW9kYWw+XFxuJztcblxufVxucmV0dXJuIF9fcFxufSIsImltcG9ydCBuZ2VvTWFwRmVhdHVyZU92ZXJsYXlNZ3IgZnJvbSAnbmdlby9tYXAvRmVhdHVyZU92ZXJsYXlNZ3IuanMnO1xuaW1wb3J0IG5nZW9NZXNzYWdlTW9kYWxDb21wb25lbnQgZnJvbSAnbmdlby9tZXNzYWdlL21vZGFsQ29tcG9uZW50LmpzJztcbmltcG9ydCB7IGV4dGVudFRvUmVjdGFuZ2xlIH0gZnJvbSAnbmdlby91dGlscy5qcyc7XG5pbXBvcnQgb2xDb2xsZWN0aW9uIGZyb20gJ29sL0NvbGxlY3Rpb24uanMnO1xuaW1wb3J0IHsgdW5CeUtleSB9IGZyb20gJ29sL09ic2VydmFibGUuanMnO1xuaW1wb3J0IEZlYXR1cmUgZnJvbSAnb2wvRmVhdHVyZS5qcyc7XG5pbXBvcnQgUG9seWdvbiBmcm9tICdvbC9nZW9tL1BvbHlnb24uanMnO1xuaW1wb3J0IG9sR2VvbUdlb21ldHJ5TGF5b3V0IGZyb20gJ29sL2dlb20vR2VvbWV0cnlMYXlvdXQuanMnO1xuaW1wb3J0IHsgREVWSUNFX1BJWEVMX1JBVElPIH0gZnJvbSAnb2wvaGFzLmpzJztcbmltcG9ydCBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xudmFyIG1vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCduZ2VvT2ZmbGluZScsIFtuZ2VvTWFwRmVhdHVyZU92ZXJsYXlNZ3IubmFtZSwgbmdlb01lc3NhZ2VNb2RhbENvbXBvbmVudC5uYW1lXSk7XG5tb2R1bGUudmFsdWUoJ25nZW9PZmZsaW5lVGVtcGxhdGVVcmwnLCBmdW5jdGlvbiAoZWxlbWVudCwgYXR0cnMpIHtcbiAgdmFyIHRlbXBsYXRlVXJsID0gYXR0cnNbJ25nZW9PZmZsaW5lVGVtcGxhdGV1cmwnXTtcbiAgcmV0dXJuIHRlbXBsYXRlVXJsICE9PSB1bmRlZmluZWQgPyB0ZW1wbGF0ZVVybCA6ICduZ2VvL29mZmxpbmUvY29tcG9uZW50Lmh0bWwnO1xufSk7XG5tb2R1bGUucnVuKFtcIiR0ZW1wbGF0ZUNhY2hlXCIsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJ25nZW8vb2ZmbGluZS9jb21wb25lbnQuaHRtbCcsIHJlcXVpcmUoJy4vY29tcG9uZW50Lmh0bWwnKSk7XG59XSk7XG5uZ2VvT2ZmbGluZVRlbXBsYXRlVXJsLiRpbmplY3QgPSBbXCIkZWxlbWVudFwiLCBcIiRhdHRyc1wiLCBcIm5nZW9PZmZsaW5lVGVtcGxhdGVVcmxcIl07XG5cbmZ1bmN0aW9uIG5nZW9PZmZsaW5lVGVtcGxhdGVVcmwoJGVsZW1lbnQsICRhdHRycywgbmdlb09mZmxpbmVUZW1wbGF0ZVVybCkge1xuICByZXR1cm4gbmdlb09mZmxpbmVUZW1wbGF0ZVVybCgkZWxlbWVudCwgJGF0dHJzKTtcbn1cblxudmFyIGNvbXBvbmVudCA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICAnbWFwJzogJzxuZ2VvT2ZmbGluZU1hcCcsXG4gICAgJ2V4dGVudFNpemUnOiAnPD9uZ2VvT2ZmbGluZUV4dGVudHNpemUnLFxuICAgICdtYXNrTWFyZ2luJzogJzw/bmdlb09mZmxpbmVNYXNrTWFyZ2luJyxcbiAgICAnbWluWm9vbSc6ICc8P25nZW9PZmZsaW5lTWluWm9vbScsXG4gICAgJ21heFpvb20nOiAnPD9uZ2VvT2ZmbGluZU1heFpvb20nXG4gIH0sXG4gIGNvbnRyb2xsZXI6ICduZ2VvT2ZmbGluZUNvbnRyb2xsZXInLFxuICB0ZW1wbGF0ZVVybDogbmdlb09mZmxpbmVUZW1wbGF0ZVVybFxufTtcbm1vZHVsZS5jb21wb25lbnQoJ25nZW9PZmZsaW5lJywgY29tcG9uZW50KTtcbmV4cG9ydCB2YXIgQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgQ29udHJvbGxlci4kaW5qZWN0ID0gW1wiJHRpbWVvdXRcIiwgXCJuZ2VvRmVhdHVyZU92ZXJsYXlNZ3JcIiwgXCJuZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyXCIsIFwibmdlb09mZmxpbmVDb25maWd1cmF0aW9uXCIsIFwibmdlb09mZmxpbmVNb2RlXCIsIFwibmdlb05ldHdvcmtTdGF0dXNcIl07XG5cbiAgZnVuY3Rpb24gQ29udHJvbGxlcigkdGltZW91dCwgbmdlb0ZlYXR1cmVPdmVybGF5TWdyLCBuZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyLCBuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb24sIG5nZW9PZmZsaW5lTW9kZSwgbmdlb05ldHdvcmtTdGF0dXMpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy4kdGltZW91dF8gPSAkdGltZW91dDtcbiAgICB0aGlzLm5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXJfID0gbmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlcjtcbiAgICB0aGlzLm5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbl8gPSBuZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb247XG4gICAgdGhpcy5vZmZsaW5lTW9kZSA9IG5nZW9PZmZsaW5lTW9kZTtcbiAgICB0aGlzLm5ldHdvcmtTdGF0dXMgPSBuZ2VvTmV0d29ya1N0YXR1cztcbiAgICB0aGlzLm1hcDtcbiAgICB0aGlzLmV4dGVudFNpemUgPSAwO1xuICAgIHRoaXMuZmVhdHVyZXNPdmVybGF5XyA9IG5nZW9GZWF0dXJlT3ZlcmxheU1nci5nZXRGZWF0dXJlT3ZlcmxheSgpO1xuICAgIHRoaXMub3ZlcmxheUNvbGxlY3Rpb25fID0gbmV3IG9sQ29sbGVjdGlvbigpO1xuICAgIHRoaXMuZmVhdHVyZXNPdmVybGF5Xy5zZXRGZWF0dXJlcyh0aGlzLm92ZXJsYXlDb2xsZWN0aW9uXyk7XG4gICAgdGhpcy5wb3N0Y29tcG9zZUxpc3RlbmVyXyA9IHRoaXMuY3JlYXRlTWFza1Bvc3Rjb21wb3NlXygpO1xuICAgIHRoaXMucG9zdENvbXBvc2VMaXN0ZW5lcktleV8gPSBudWxsO1xuICAgIHRoaXMuZGF0YVBvbHlnb25fID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdGluZ0V4dGVudCA9IGZhbHNlO1xuICAgIHRoaXMuZG93bmxvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnByb2dyZXNzUGVyY2VudHMgPSAwO1xuICAgIHRoaXMubWVudURpc3BsYXllZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheUFsZXJ0QWJvcnREb3dubG9hZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzcGxheUFsZXJ0TG9hZERhdGEgPSBmYWxzZTtcbiAgICB0aGlzLmRpc3BsYXlBbGVydE5vTGF5ZXIgPSBmYWxzZTtcbiAgICB0aGlzLm1hc2tNYXJnaW4gPSAwO1xuICAgIHRoaXMubWluWm9vbSA9IDA7XG4gICAgdGhpcy5tYXhab29tID0gMDtcbiAgICB0aGlzLm9yaWdpbmFsTWluWm9vbSA9IDA7XG4gICAgdGhpcy5vcmlnaW5hbE1heFpvb20gPSAwO1xuICAgIHRoaXMuZXN0aW1hdGVkTG9hZERhdGFTaXplID0gMDtcblxuICAgIHRoaXMucHJvZ3Jlc3NDYWxsYmFja18gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBwcm9ncmVzcyA9IGV2ZW50LmRldGFpbFsncHJvZ3Jlc3MnXTtcbiAgICAgIF90aGlzLnByb2dyZXNzUGVyY2VudHMgPSBNYXRoLmZsb29yKHByb2dyZXNzICogMTAwKTtcblxuICAgICAgaWYgKHByb2dyZXNzID09PSAxKSB7XG4gICAgICAgIF90aGlzLmZpbmlzaERvd25sb2FkXygpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy4kdGltZW91dF8oZnVuY3Rpb24gKCkge30sIDApO1xuICAgIH07XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQ29udHJvbGxlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLiRvbkluaXQgPSBmdW5jdGlvbiAkb25Jbml0KCkge1xuICAgIHRoaXMub2ZmbGluZU1vZGUucmVnaXN0ZXJDb21wb25lbnQodGhpcyk7XG4gICAgdGhpcy5uZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25fLm9uKCdwcm9ncmVzcycsIHRoaXMucHJvZ3Jlc3NDYWxsYmFja18pO1xuICAgIHRoaXMubWFza01hcmdpbiA9IHRoaXMubWFza01hcmdpbiB8fCAxMDA7XG4gICAgdGhpcy5taW5ab29tID0gdGhpcy5taW5ab29tIHx8IDEwO1xuICAgIHRoaXMubWF4Wm9vbSA9IHRoaXMubWF4Wm9vbSB8fCAxNTtcbiAgfTtcblxuICBfcHJvdG8uJG9uRGVzdHJveSA9IGZ1bmN0aW9uICRvbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5uZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25fLnVuKCdwcm9ncmVzcycsIHRoaXMucHJvZ3Jlc3NDYWxsYmFja18pO1xuICB9O1xuXG4gIF9wcm90by5oYXNEYXRhID0gZnVuY3Rpb24gaGFzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5uZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25fLmhhc09mZmxpbmVEYXRhKCk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXB1dGVTaXplQW5kRGlzcGxheUFsZXJ0TG9hZERhdGEgPSBmdW5jdGlvbiBjb21wdXRlU2l6ZUFuZERpc3BsYXlBbGVydExvYWREYXRhKCkge1xuICAgIHRoaXMuZXN0aW1hdGVkTG9hZERhdGFTaXplID0gdGhpcy5uZ2VvT2ZmbGluZUNvbmZpZ3VyYXRpb25fLmVzdGltYXRlTG9hZERhdGFTaXplKHRoaXMubWFwKTtcblxuICAgIGlmICh0aGlzLmVzdGltYXRlZExvYWREYXRhU2l6ZSA+IDApIHtcbiAgICAgIHRoaXMuZGlzcGxheUFsZXJ0TG9hZERhdGEgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlBbGVydE5vTGF5ZXIgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG9nZ2xlVmlld0V4dGVudFNlbGVjdGlvbiA9IGZ1bmN0aW9uIHRvZ2dsZVZpZXdFeHRlbnRTZWxlY3Rpb24oZmluaXNoZWQpIHtcbiAgICB0aGlzLm1lbnVEaXNwbGF5ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGVjdGluZ0V4dGVudCA9ICF0aGlzLnNlbGVjdGluZ0V4dGVudDtcblxuICAgIGlmICh0aGlzLnBvc3RDb21wb3NlTGlzdGVuZXJLZXlfKSB7XG4gICAgICB1bkJ5S2V5KHRoaXMucG9zdENvbXBvc2VMaXN0ZW5lcktleV8pO1xuICAgICAgdGhpcy5wb3N0Q29tcG9zZUxpc3RlbmVyS2V5XyA9IG51bGw7XG4gICAgICB0aGlzLnJlbW92ZVpvb21Db25zdHJhaW50c18oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3RpbmdFeHRlbnQgJiYgIXRoaXMucG9zdENvbXBvc2VMaXN0ZW5lcktleV8pIHtcbiAgICAgIHRoaXMuYWRkWm9vbUNvbnN0cmFpbnRzXygpO1xuICAgICAgdGhpcy5wb3N0Q29tcG9zZUxpc3RlbmVyS2V5XyA9IHRoaXMubWFwLm9uKCdwb3N0Y29tcG9zZScsIHRoaXMucG9zdGNvbXBvc2VMaXN0ZW5lcl8pO1xuICAgIH1cblxuICAgIHRoaXMubWFwLnJlbmRlcigpO1xuICB9O1xuXG4gIF9wcm90by52YWxpZGF0ZUV4dGVudCA9IGZ1bmN0aW9uIHZhbGlkYXRlRXh0ZW50KCkge1xuICAgIHRoaXMucHJvZ3Jlc3NQZXJjZW50cyA9IDA7XG4gICAgdmFyIGV4dGVudCA9IHRoaXMuZ2V0RG93bG9hZEV4dGVudF8oKTtcbiAgICB0aGlzLmRvd25sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLm5nZW9PZmZsaW5lU2VydmljZU1hbmFnZXJfLnNhdmUoZXh0ZW50LCB0aGlzLm1hcCk7XG4gIH07XG5cbiAgX3Byb3RvLmZpbmlzaERvd25sb2FkXyA9IGZ1bmN0aW9uIGZpbmlzaERvd25sb2FkXygpIHtcbiAgICB0aGlzLmRvd25sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy50b2dnbGVWaWV3RXh0ZW50U2VsZWN0aW9uKHRydWUpO1xuICB9O1xuXG4gIF9wcm90by5hc2tBYm9ydERvd25sb2FkID0gZnVuY3Rpb24gYXNrQWJvcnREb3dubG9hZCgpIHtcbiAgICB0aGlzLmRpc3BsYXlBbGVydEFib3J0RG93bmxvYWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5hYm9ydERvd25sb2FkID0gZnVuY3Rpb24gYWJvcnREb3dubG9hZCgpIHtcbiAgICB0aGlzLmRvd25sb2FkaW5nID0gZmFsc2U7XG4gICAgdGhpcy5uZ2VvT2ZmbGluZVNlcnZpY2VNYW5hZ2VyXy5jYW5jZWwoKTtcbiAgICB0aGlzLmRlbGV0ZURhdGEoKTtcbiAgfTtcblxuICBfcHJvdG8uc2hvd01lbnUgPSBmdW5jdGlvbiBzaG93TWVudSgpIHtcbiAgICB0aGlzLm1lbnVEaXNwbGF5ZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by5hY3RpdmF0ZU9mZmxpbmVNb2RlID0gZnVuY3Rpb24gYWN0aXZhdGVPZmZsaW5lTW9kZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHRoaXMubmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlcl8ucmVzdG9yZSh0aGlzLm1hcCkudGhlbihmdW5jdGlvbiAoZXh0ZW50KSB7XG4gICAgICBfdGhpczIuZGF0YVBvbHlnb25fID0gX3RoaXMyLmNyZWF0ZVBvbHlnb25Gcm9tRXh0ZW50XyhleHRlbnQpO1xuXG4gICAgICB2YXIgc2l6ZSA9IF90aGlzMi5tYXAuZ2V0U2l6ZSgpO1xuXG4gICAgICBpZiAoc2l6ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBzaXplJyk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzMi5tYXAuZ2V0VmlldygpLmZpdChleHRlbnQsIHtcbiAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgfSk7XG5cbiAgICAgIF90aGlzMi5tZW51RGlzcGxheWVkID0gZmFsc2U7XG5cbiAgICAgIF90aGlzMi5kaXNwbGF5RXh0ZW50XygpO1xuXG4gICAgICBfdGhpczIub2ZmbGluZU1vZGUuZW5hYmxlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmRlYWN0aXZhdGVPZmZsaW5lTW9kZSA9IGZ1bmN0aW9uIGRlYWN0aXZhdGVPZmZsaW5lTW9kZSgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH07XG5cbiAgX3Byb3RvLnRvZ2dsZUV4dGVudFZpc2liaWxpdHkgPSBmdW5jdGlvbiB0b2dnbGVFeHRlbnRWaXNpYmlsaXR5KCkge1xuICAgIGlmICh0aGlzLmlzRXh0ZW50VmlzaWJsZSgpKSB7XG4gICAgICB0aGlzLm92ZXJsYXlDb2xsZWN0aW9uXy5jbGVhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc3BsYXlFeHRlbnRfKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5pc0V4dGVudFZpc2libGUgPSBmdW5jdGlvbiBpc0V4dGVudFZpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheUNvbGxlY3Rpb25fLmdldExlbmd0aCgpID4gMDtcbiAgfTtcblxuICBfcHJvdG8uZGVsZXRlRGF0YSA9IGZ1bmN0aW9uIGRlbGV0ZURhdGEoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLm92ZXJsYXlDb2xsZWN0aW9uXy5jbGVhcigpO1xuICAgIHRoaXMuZGF0YVBvbHlnb25fID0gbnVsbDtcblxuICAgIGlmICh0aGlzLm5ldHdvcmtTdGF0dXMuaXNEaXNjb25uZWN0ZWQoKSkge1xuICAgICAgdGhpcy5tZW51RGlzcGxheWVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHJlbG9hZElmSW5PZmZsaW5lTW9kZSA9IGZ1bmN0aW9uIHJlbG9hZElmSW5PZmZsaW5lTW9kZSgpIHtcbiAgICAgIGlmIChfdGhpczMub2ZmbGluZU1vZGUuaXNFbmFibGVkKCkpIHtcbiAgICAgICAgX3RoaXMzLmRlYWN0aXZhdGVPZmZsaW5lTW9kZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLm5nZW9PZmZsaW5lQ29uZmlndXJhdGlvbl8uY2xlYXIoKS50aGVuKHJlbG9hZElmSW5PZmZsaW5lTW9kZSk7XG4gIH07XG5cbiAgX3Byb3RvLmRpc3BsYXlFeHRlbnRfID0gZnVuY3Rpb24gZGlzcGxheUV4dGVudF8oKSB7XG4gICAgaWYgKCF0aGlzLmlzRXh0ZW50VmlzaWJsZSgpICYmIHRoaXMuZGF0YVBvbHlnb25fKSB7XG4gICAgICB2YXIgZmVhdHVyZSA9IG5ldyBGZWF0dXJlKHRoaXMuZGF0YVBvbHlnb25fKTtcbiAgICAgIHRoaXMub3ZlcmxheUNvbGxlY3Rpb25fLnB1c2goZmVhdHVyZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5hZGRab29tQ29uc3RyYWludHNfID0gZnVuY3Rpb24gYWRkWm9vbUNvbnN0cmFpbnRzXygpIHtcbiAgICB2YXIgdmlldyA9IHRoaXMubWFwLmdldFZpZXcoKTtcbiAgICB2YXIgem9vbSA9IHZpZXcuZ2V0Wm9vbSgpIHx8IDA7XG4gICAgdGhpcy5vcmlnaW5hbE1pblpvb20gPSB2aWV3LmdldE1pblpvb20oKTtcbiAgICB0aGlzLm9yaWdpbmFsTWF4Wm9vbSA9IHZpZXcuZ2V0TWF4Wm9vbSgpO1xuXG4gICAgaWYgKHpvb20gPCB0aGlzLm1pblpvb20pIHtcbiAgICAgIHZpZXcuc2V0Wm9vbSh0aGlzLm1pblpvb20pO1xuICAgIH0gZWxzZSBpZiAoem9vbSA+IHRoaXMubWF4Wm9vbSkge1xuICAgICAgdmlldy5zZXRab29tKHRoaXMubWF4Wm9vbSk7XG4gICAgfVxuXG4gICAgdmlldy5zZXRNYXhab29tKHRoaXMubWF4Wm9vbSk7XG4gICAgdmlldy5zZXRNaW5ab29tKHRoaXMubWluWm9vbSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZVpvb21Db25zdHJhaW50c18gPSBmdW5jdGlvbiByZW1vdmVab29tQ29uc3RyYWludHNfKCkge1xuICAgIHZhciB2aWV3ID0gdGhpcy5tYXAuZ2V0VmlldygpO1xuICAgIHZpZXcuc2V0TWF4Wm9vbSh0aGlzLm9yaWdpbmFsTWF4Wm9vbSk7XG4gICAgdmlldy5zZXRNaW5ab29tKHRoaXMub3JpZ2luYWxNaW5ab29tKTtcbiAgfTtcblxuICBfcHJvdG8uY3JlYXRlTWFza1Bvc3Rjb21wb3NlXyA9IGZ1bmN0aW9uIGNyZWF0ZU1hc2tQb3N0Y29tcG9zZV8oKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgdmFyIGNvbnRleHQgPSBldnQuY29udGV4dDtcbiAgICAgIHZhciBmcmFtZVN0YXRlID0gZXZ0LmZyYW1lU3RhdGU7XG5cbiAgICAgIGlmICghY29udGV4dCB8fCAhZnJhbWVTdGF0ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgY29udGV4dCBvciBmcmFtZVN0YXRlJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXNvbHV0aW9uID0gZnJhbWVTdGF0ZS52aWV3U3RhdGUucmVzb2x1dGlvbjtcbiAgICAgIHZhciB2aWV3cG9ydFdpZHRoID0gZnJhbWVTdGF0ZS5zaXplWzBdICogZnJhbWVTdGF0ZS5waXhlbFJhdGlvO1xuICAgICAgdmFyIHZpZXdwb3J0SGVpZ2h0ID0gZnJhbWVTdGF0ZS5zaXplWzFdICogZnJhbWVTdGF0ZS5waXhlbFJhdGlvO1xuICAgICAgdmFyIGV4dGVudExlbmd0aCA9IF90aGlzNC5leHRlbnRTaXplID8gX3RoaXM0LmV4dGVudFNpemUgLyByZXNvbHV0aW9uICogREVWSUNFX1BJWEVMX1JBVElPIDogTWF0aC5taW4odmlld3BvcnRXaWR0aCwgdmlld3BvcnRIZWlnaHQpIC0gX3RoaXM0Lm1hc2tNYXJnaW4gKiAyO1xuICAgICAgdmFyIGV4dGVudEhhbGZMZW5ndGggPSBNYXRoLmNlaWwoZXh0ZW50TGVuZ3RoIC8gMik7XG4gICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgY29udGV4dC5tb3ZlVG8oMCwgMCk7XG4gICAgICBjb250ZXh0LmxpbmVUbyh2aWV3cG9ydFdpZHRoLCAwKTtcbiAgICAgIGNvbnRleHQubGluZVRvKHZpZXdwb3J0V2lkdGgsIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgIGNvbnRleHQubGluZVRvKDAsIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgIGNvbnRleHQubGluZVRvKDAsIDApO1xuICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcblxuICAgICAgdmFyIGV4dGVudCA9IF90aGlzNC5jcmVhdGVFeHRlbnRfKFt2aWV3cG9ydFdpZHRoIC8gMiwgdmlld3BvcnRIZWlnaHQgLyAyXSwgZXh0ZW50SGFsZkxlbmd0aCk7XG5cbiAgICAgIGNvbnRleHQubW92ZVRvKGV4dGVudFswXSwgZXh0ZW50WzFdKTtcbiAgICAgIGNvbnRleHQubGluZVRvKGV4dGVudFswXSwgZXh0ZW50WzNdKTtcbiAgICAgIGNvbnRleHQubGluZVRvKGV4dGVudFsyXSwgZXh0ZW50WzNdKTtcbiAgICAgIGNvbnRleHQubGluZVRvKGV4dGVudFsyXSwgZXh0ZW50WzFdKTtcbiAgICAgIGNvbnRleHQubGluZVRvKGV4dGVudFswXSwgZXh0ZW50WzFdKTtcbiAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDUsIDI1LCAwLjUpJztcbiAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIH07XG4gIH07XG5cbiAgX3Byb3RvLmNyZWF0ZVBvbHlnb25Gcm9tRXh0ZW50XyA9IGZ1bmN0aW9uIGNyZWF0ZVBvbHlnb25Gcm9tRXh0ZW50XyhleHRlbnQpIHtcbiAgICB2YXIgcHJvakV4dGVudCA9IHRoaXMubWFwLmdldFZpZXcoKS5nZXRQcm9qZWN0aW9uKCkuZ2V0RXh0ZW50KCk7XG4gICAgcmV0dXJuIG5ldyBQb2x5Z29uKFtleHRlbnRUb1JlY3RhbmdsZShwcm9qRXh0ZW50KSwgZXh0ZW50VG9SZWN0YW5nbGUoZXh0ZW50KV0sIG9sR2VvbUdlb21ldHJ5TGF5b3V0LlhZKTtcbiAgfTtcblxuICBfcHJvdG8uY3JlYXRlRXh0ZW50XyA9IGZ1bmN0aW9uIGNyZWF0ZUV4dGVudF8oY2VudGVyLCBoYWxmTGVuZ3RoKSB7XG4gICAgdmFyIG1pbnggPSBjZW50ZXJbMF0gLSBoYWxmTGVuZ3RoO1xuICAgIHZhciBtaW55ID0gY2VudGVyWzFdIC0gaGFsZkxlbmd0aDtcbiAgICB2YXIgbWF4eCA9IGNlbnRlclswXSArIGhhbGZMZW5ndGg7XG4gICAgdmFyIG1heHkgPSBjZW50ZXJbMV0gKyBoYWxmTGVuZ3RoO1xuICAgIHJldHVybiBbbWlueCwgbWlueSwgbWF4eCwgbWF4eV07XG4gIH07XG5cbiAgX3Byb3RvLmdldERvd2xvYWRFeHRlbnRfID0gZnVuY3Rpb24gZ2V0RG93bG9hZEV4dGVudF8oKSB7XG4gICAgdmFyIGNlbnRlciA9IHRoaXMubWFwLmdldFZpZXcoKS5nZXRDZW50ZXIoKTtcbiAgICB2YXIgaGFsZkxlbmd0aCA9IE1hdGguY2VpbCh0aGlzLmV4dGVudFNpemUgfHwgdGhpcy5nZXRFeHRlbnRTaXplXygpKSAvIDI7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlRXh0ZW50XyhjZW50ZXIsIGhhbGZMZW5ndGgpO1xuICB9O1xuXG4gIF9wcm90by5nZXRFeHRlbnRTaXplXyA9IGZ1bmN0aW9uIGdldEV4dGVudFNpemVfKCkge1xuICAgIHZhciBtYXBTaXplID0gdGhpcy5tYXAuZ2V0U2l6ZSgpIHx8IFsxNTAsIDE1MF07XG4gICAgdmFyIG1hc2tTaXplUGl4ZWwgPSBERVZJQ0VfUElYRUxfUkFUSU8gKiBNYXRoLm1pbihtYXBTaXplWzBdLCBtYXBTaXplWzFdKSAtIHRoaXMubWFza01hcmdpbiAqIDI7XG4gICAgdmFyIG1hc2tTaXplTWV0ZXIgPSBtYXNrU2l6ZVBpeGVsICogKHRoaXMubWFwLmdldFZpZXcoKS5nZXRSZXNvbHV0aW9uKCkgfHwgMSkgLyBERVZJQ0VfUElYRUxfUkFUSU87XG4gICAgcmV0dXJuIG1hc2tTaXplTWV0ZXI7XG4gIH07XG5cbiAgcmV0dXJuIENvbnRyb2xsZXI7XG59KCk7XG5tb2R1bGUuY29udHJvbGxlcignbmdlb09mZmxpbmVDb250cm9sbGVyJywgQ29udHJvbGxlcik7XG5leHBvcnQgZGVmYXVsdCBtb2R1bGU7IiwiaW1wb3J0IG5nZW9PZmZsaW5lQ29tcG9uZW50IGZyb20gJ25nZW8vb2ZmbGluZS9jb21wb25lbnQuanMnO1xuaW1wb3J0IG5nZW9PZmZsaW5lTmV0d29ya1N0YXR1cyBmcm9tICduZ2VvL29mZmxpbmUvTmV0d29ya1N0YXR1cy5qcyc7XG5pbXBvcnQgbmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlciBmcm9tICduZ2VvL29mZmxpbmUvU2VydmljZU1hbmFnZXIuanMnO1xuaW1wb3J0IGRvd25sb2FkZXIgZnJvbSAnbmdlby9vZmZsaW5lL0Rvd25sb2FkZXIuanMnO1xuaW1wb3J0IHJlc3RvcmVyIGZyb20gJ25nZW8vb2ZmbGluZS9SZXN0b3Jlci5qcyc7XG5pbXBvcnQgbW9kZSBmcm9tICduZ2VvL29mZmxpbmUvTW9kZS5qcyc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcbnZhciBleHBvcnRzID0gYW5ndWxhci5tb2R1bGUoJ25nZW9PZmZsaW5lTW9kdWxlJywgW25nZW9PZmZsaW5lQ29tcG9uZW50Lm5hbWUsIG5nZW9PZmZsaW5lTmV0d29ya1N0YXR1cy5tb2R1bGUubmFtZSwgbmdlb09mZmxpbmVTZXJ2aWNlTWFuYWdlci5tb2R1bGUubmFtZSwgZG93bmxvYWRlci5tb2R1bGUubmFtZSwgcmVzdG9yZXIubW9kdWxlLm5hbWUsIG1vZGUubW9kdWxlLm5hbWVdKTtcbmV4cG9ydHMudmFsdWUoJ25nZW9PZmZsaW5lR3V0dGVyJywgOTYpO1xuZXhwb3J0IGRlZmF1bHQgZXhwb3J0czsiLCJpbXBvcnQgb2xMYXllckdyb3VwIGZyb20gJ29sL2xheWVyL0dyb3VwLmpzJztcbmV4cG9ydCBmdW5jdGlvbiB0cmF2ZXJzZUxheWVyKGxheWVyLCBhbmNlc3RvcnMsIHZpc2l0b3IpIHtcbiAgdmFyIGRlc2NlbmQgPSB2aXNpdG9yKGxheWVyLCBhbmNlc3RvcnMpO1xuXG4gIGlmIChkZXNjZW5kICYmIGxheWVyIGluc3RhbmNlb2Ygb2xMYXllckdyb3VwKSB7XG4gICAgbGF5ZXIuZ2V0TGF5ZXJzKCkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRMYXllcikge1xuICAgICAgdHJhdmVyc2VMYXllcihjaGlsZExheWVyLCBbXS5jb25jYXQoYW5jZXN0b3JzLCBbbGF5ZXJdKSwgdmlzaXRvcik7XG4gICAgfSk7XG4gIH1cbn1cbnZhciBleHRyYWN0b3IgPSBuZXcgUmVnRXhwKCdbXi9dKi8vW14vXSsvKC4qKScpO1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVVSTCh1cmwpIHtcbiAgdmFyIG1hdGNoZXMgPSB1cmwubWF0Y2goZXh0cmFjdG9yKTtcblxuICBpZiAoIW1hdGNoZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBub3JtYWxpemUgdXJsICcgKyB1cmwpO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXNbMV07XG59Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVLQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25UQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9