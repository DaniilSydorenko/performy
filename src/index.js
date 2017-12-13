"use strict";
exports.__esModule = true;
var Performy = /** @class */ (function () {
    function Performy() {
        console.log('asd');
        if (Performance.prototype.now) {
            throw new Error('Probably you use and old browser');
        }
    }
    Performy.prototype._log = function (fname, time) {
        console.log("%c The function " + fname + " fulfilled with a time of " + time + " seconds ", 'color: #005cc5'); // #d65a5a
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
exports["default"] = Performy;
