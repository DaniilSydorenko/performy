class Performy {
    constructor() {
        this.TEST_STARTED = '----- [performance test begin] -----';
        this.TEST_FINISHED = '----- [performance test end] -----';
        this.INFO_TEXT_STYLES = 'color: #d65a5a; font-style: italic; font-weight: bold';
        this.RESULT_TEXT_STYLES = 'color: #005cc5; font-weight: bold';
        if (performance) {
            this._timer = performance;
        }
        else {
            this._timer = Date;
        }
    }
    get timer() {
        return this._timer;
    }
    _showLog(fname, time) {
        console.log(`%c ${this.TEST_STARTED}`, this.INFO_TEXT_STYLES);
        console.log(`%c Function "${fname}" fulfilled in ${time} ms`, this.RESULT_TEXT_STYLES);
        console.log(`%c ${this.TEST_FINISHED}`, this.INFO_TEXT_STYLES);
    }
    _timerExec(func, params) {
        const start = this._timer.now();
        func.apply(null, params);
        const end = this._timer.now();
        return +((end - start).toFixed(5));
    }
    ;
    executeOnce(func, ...params) {
        this._showLog(func.name, this._timerExec(func, params));
    }
    ;
    executeAvg(func, avg = 10, ...params) {
        let accumulator = 0;
        for (let i = 0; i <= avg; i++) {
            accumulator += this._timerExec(func, params);
        }
        this._showLog(func.name, +((accumulator / avg).toFixed(5)));
    }
}
export default new Performy();
