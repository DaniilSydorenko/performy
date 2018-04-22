class Performy {
    private readonly TEST_STARTED: string = '----- [performance test begin] -----';
    private readonly TEST_FINISHED: string = '----- [performance test end] -----';
    private readonly INFO_TEXT_STYLES: string = 'color: #d65a5a; font-style: italic; font-weight: bold';
    private readonly RESULT_TEXT_STYLES: string = 'color: #005cc5; font-weight: bold';
    private _timer: any;

    constructor() {
        if (performance) {
            this._timer = performance;
        } else {
            this._timer = Date;
        }
    }

    get timer(): any {
        return this._timer;
    }

    _showLog(fname: string, time: number): void {
        console.log(`%c ${this.TEST_STARTED}`, this.INFO_TEXT_STYLES);
        console.log(`%c Function "${fname}" fulfilled in ${time} ms`, this.RESULT_TEXT_STYLES);
        console.log(`%c ${this.TEST_FINISHED}`, this.INFO_TEXT_STYLES);
    }
    
    _timerExec(func: any, params: Array<any>): number {
        const start = this._timer.now();
        func.apply(null, params);
        const end = this._timer.now();
        return +((end - start).toFixed(5));
    };

    executeOnce(func: any, ...params: Array<any>): void {
        this._showLog(
            func.name,
            this._timerExec(func, params)
        );
    };

    executeAvg(func: any, avg: number = 10, ...params: Array<any>): void {
        let accumulator = 0;
        for (let i = 0; i <= avg; i++) {
            accumulator += this._timerExec(func, params);
        }
        this._showLog(func.name, +((accumulator / avg).toFixed(5)));
    }
}

export default new Performy();
