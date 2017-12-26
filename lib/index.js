class Performy {

  // TODO compareOnce, compareAvg
  // TODO now() ----- now()

  constructor() {
    this.timer = null;

    if (Performance.prototype.now) {
      this.timer = performance;

    } else if (Date.now) {
      this.timer = Date;

    } else {
      throw new Error('Module Performy should be executed only in the browser.')
    }
  }

  /* eslint-disable */

  _log(fname, time) {
    console.log(`%c Performance test started`, 'color: #d65a5a; font-style: italic;');
    console.log(`%c The function [${fname}] fulfilled in ${time.toFixed(4)} ms `, 'color: #005cc5');
    console.log(`%c Performance test completed`, 'color: #d65a5a; font-style: italic;');
  }

  _runFunction(func, params) {
    const start = this.timer.now();
    func.apply(null, params);
    const end = this.timer.now();

    return end - start;
  }

  executeOnce(func, ...params) {
    this._log(
      func.name,
      this._runFunction(func, params)
    );
  }

  executeAvg(func, avg = 10, ...params) {
    let accumulator = 0;
    for (let i = 0; i <= avg; i++) {
      accumulator += this._runFunction(func, params);
    }

    this._log(
      func.name,
      accumulator / avg
    );
  }
}

module.exports.Performy = new Performy();
