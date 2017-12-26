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

  // TODO compareOnce, compareAvg
  // TODO now() ----- now()

  function Performy() {
    _classCallCheck(this, Performy);

    this.timer = null;

    if (Performance.prototype.now) {
      this.timer = performance;
    } else if (Date.now) {
      this.timer = Date;
    } else {
      throw new Error('Module Performy should be executed only in the browser.');
    }
  }

  /* eslint-disable */

  _createClass(Performy, [{
    key: '_log',
    value: function _log(fname, time) {
      console.log('%c Performance test started', 'color: #d65a5a; font-style: italic;');
      console.log('%c The function [' + fname + '] fulfilled in ' + time.toFixed(4) + ' ms ', 'color: #005cc5');
      console.log('%c Performance test completed', 'color: #d65a5a; font-style: italic;');
    }
  }, {
    key: '_runFunction',
    value: function _runFunction(func, params) {
      var start = this.timer.now();
      func.apply(null, params);
      var end = this.timer.now();

      return end - start;
    }
  }, {
    key: 'executeOnce',
    value: function executeOnce(func) {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      this._log(func.name, this._runFunction(func, params));
    }
  }, {
    key: 'executeAvg',
    value: function executeAvg(func) {
      var avg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

      var accumulator = 0;

      for (var _len2 = arguments.length, params = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        params[_key2 - 2] = arguments[_key2];
      }

      for (var i = 0; i <= avg; i++) {
        accumulator += this._runFunction(func, params);
      }

      this._log(func.name, accumulator / avg);
    }
  }]);

  return Performy;
}();

module.exports.Performy = new Performy();

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map