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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var Performy = /** @class */ (function () {
    function Performy() {
        console.log('asd');
        if (Performance.prototype.now) {
            throw new Error('Probably you use and old browser');
        }
    }
    Performy.prototype._log = function (fname, time) {
        console.log("%c The function " + fname + " fulfilled with a time of " + time + " seconds ", 'color: #d65a5a');
        console.log("%c The function " + fname + " fulfilled with a time of " + time + " seconds ", 'color: #005cc5');
        console.log("%c The function " + fname + " fulfilled with a time of " + time + " seconds ", "\n            background-color: rgba(212,221,228,.25);\n            border: solid rgba(212,221,228,.25);\n            font-size: 12px;\n            color: #6f42c1");
    };
    Performy.prototype._runFunction = function (func, params) {
        var start = performance.now();
        func.apply(null, params);
        var end = performance.now();
        return end - start;
    };
    Performy.prototype.executeOnce = function (func, params) {
        var result = this._runFunction(func, params);
        this._log(func.name, result);
    };
    Performy.prototype.executeAvg = function (func, params, avg) {
        if (avg === void 0) { avg = 10; }
        var accum = 0;
        for (var i = 0; i <= avg; i++) {
            accum += this._runFunction(func, params);
        }
        var result = accum / avg;
        this._log(func.name, result);
    };
    return Performy;
}());
/* harmony default export */ __webpack_exports__["default"] = (Performy);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTM5ZjJiM2Q2NDAzMGJlNjA0MmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQUE7SUFDSTtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUM7UUFDdkQsQ0FBQztJQUNMLENBQUM7SUFFTyx1QkFBSSxHQUFaLFVBQWEsS0FBYSxFQUFFLElBQVk7UUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBbUIsS0FBSyxrQ0FBNkIsSUFBSSxjQUFXLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUVwRyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFtQixLQUFLLGtDQUE2QixJQUFJLGNBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXBHLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLEtBQUssa0NBQTZCLElBQUksY0FBVyxFQUFFLG9LQUkvRCxDQUNsQixDQUFDO0lBQ04sQ0FBQztJQUVPLCtCQUFZLEdBQXBCLFVBQXNCLElBQVMsRUFBRSxNQUFrQjtRQUMvQyxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxHQUFHLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRTVCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSw4QkFBVyxHQUFsQixVQUFvQixJQUFTLEVBQUUsTUFBa0I7UUFDN0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSw2QkFBVSxHQUFqQixVQUFtQixJQUFTLEVBQUUsTUFBa0IsRUFBRSxHQUFRO1FBQVIsOEJBQVE7UUFDdEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QixLQUFLLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUVELElBQUksTUFBTSxHQUFXLEtBQUssR0FBRyxHQUFHLENBQUM7UUFFakMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQztBQUVELCtEQUFlLFFBQVEsRUFBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDEzOWYyYjNkNjQwMzBiZTYwNDJlIiwiY2xhc3MgUGVyZm9ybXkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnYXNkJyk7XG4gICAgICAgIGlmIChQZXJmb3JtYW5jZS5wcm90b3R5cGUubm93KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2JhYmx5IHlvdSB1c2UgYW5kIG9sZCBicm93c2VyJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2xvZyhmbmFtZTogc3RyaW5nLCB0aW1lOiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coYCVjIFRoZSBmdW5jdGlvbiAke2ZuYW1lfSBmdWxmaWxsZWQgd2l0aCBhIHRpbWUgb2YgJHt0aW1lfSBzZWNvbmRzIGAsICdjb2xvcjogI2Q2NWE1YScpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGAlYyBUaGUgZnVuY3Rpb24gJHtmbmFtZX0gZnVsZmlsbGVkIHdpdGggYSB0aW1lIG9mICR7dGltZX0gc2Vjb25kcyBgLCAnY29sb3I6ICMwMDVjYzUnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhgJWMgVGhlIGZ1bmN0aW9uICR7Zm5hbWV9IGZ1bGZpbGxlZCB3aXRoIGEgdGltZSBvZiAke3RpbWV9IHNlY29uZHMgYCwgYFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsMjIxLDIyOCwuMjUpO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCByZ2JhKDIxMiwyMjEsMjI4LC4yNSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogIzZmNDJjMWBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9ydW5GdW5jdGlvbiAoZnVuYzogYW55LCBwYXJhbXM6IEFycmF5PGFueT4pOiBudW1iZXIge1xuICAgICAgICBsZXQgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgZnVuYy5hcHBseShudWxsLCBwYXJhbXMpO1xuICAgICAgICBsZXQgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICAgICAgcmV0dXJuIGVuZCAtIHN0YXJ0O1xuICAgIH1cblxuICAgIHB1YmxpYyBleGVjdXRlT25jZSAoZnVuYzogYW55LCBwYXJhbXM6IEFycmF5PGFueT4pOiB2b2lkIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuX3J1bkZ1bmN0aW9uKGZ1bmMsIHBhcmFtcyk7XG4gICAgICAgIHRoaXMuX2xvZyhmdW5jLm5hbWUsIHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcHVibGljIGV4ZWN1dGVBdmcgKGZ1bmM6IGFueSwgcGFyYW1zOiBBcnJheTxhbnk+LCBhdmcgPSAxMCk6IHZvaWQge1xuICAgICAgICBsZXQgYWNjdW0gPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBhdmc7IGkrKykge1xuICAgICAgICAgICAgYWNjdW0gKz0gdGhpcy5fcnVuRnVuY3Rpb24oZnVuYywgcGFyYW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQ6IG51bWJlciA9IGFjY3VtIC8gYXZnO1xuXG4gICAgICAgIHRoaXMuX2xvZyhmdW5jLm5hbWUsIHJlc3VsdCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJmb3JteTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9