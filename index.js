"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Performy = (function () {
    function Performy() {
        if (Performance.prototype.now) {
            throw new Error('Probably you use and old browser');
        }
    }
    Performy.prototype._log = function (fname, time) {
        console.log("%c The function fulfilled with a time of 10 seconds " + 100, 'color: #005cc5');
        console.log("%c The function fulfilled with a time of 10 seconds ", "\n            background-color: rgba(212,221,228,.25);\n            border: solid rgba(212,221,228,.25);\n            font-size: 12px;\n            color: #6f42c1");
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
exports.default = Performy;
