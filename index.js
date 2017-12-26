/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Performy = function () {
  function Performy() {
    _classCallCheck(this, Performy);
  }

  _createClass(Performy, [{
    key: '_log',


    // executeOnce, executeAvg
    // compareOnce, compareAvg
    // rest operator

    // constructor() {
    //   if (Performance.prototype.now) {
    //       throw new Error('Probably you use and old browser')
    //   }
    // }

    value: function _log(fname, time) {
      console.log('%c The function ' + fname + ' fulfilled with a time of ' + time + ' seconds ', 'color: #d65a5a');

      console.log('%c The function ' + fname + ' fulfilled with a time of ' + time + ' seconds ', 'color: #005cc5');

      console.log('%c The function ' + fname + ' fulfilled with a time of ' + time + ' seconds ', '\n            background-color: rgba(212,221,228,.25);\n            border: solid rgba(212,221,228,.25);\n            font-size: 12px;\n            color: #6f42c1');
    }
  }, {
    key: '_runFunction',
    value: function _runFunction(func, params) {
      var start = performance.now();
      func.apply(null, params);
      var end = performance.now();

      return end - start;
    }
  }, {
    key: 'executeOnce',
    value: function executeOnce(func, params) {
      var result = this._runFunction(func, params);
      this._log(func.name, result);
    }
  }, {
    key: 'executeAvg',
    value: function executeAvg(func, params) {
      var avg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;

      var accum = 0;
      for (var i = 0; i <= avg; i++) {
        accum += this._runFunction(func, params);
      }

      var result = accum / avg;

      this._log(func.name, result);
    }
  }]);

  return Performy;
}();

module.exports = new Performy();

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map