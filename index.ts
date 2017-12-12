class Performy {
    constructor() {
        if (Performance.prototype.now) {
            throw new Error('Probably you use and old browser')
        }
    }

    private _log(fname: string, time: number) {
        console.log(`%c The function fulfilled with a time of 10 seconds ${100}`, 'color: #005cc5');
        console.log(`%c The function fulfilled with a time of 10 seconds `, `
            background-color: rgba(212,221,228,.25);
            border: solid rgba(212,221,228,.25);
            font-size: 12px;
            color: #6f42c1`
        );
    }

    private _runFunction (func: any, params: Array<any>): number {
        let start = performance.now();
        func.apply(null, params);
        let end = performance.now();

        return end - start;
    }

    public executeOnce (func: any, params: Array<any>): void {
        let result = this._runFunction(func, params);
        this._log(func.name, result);
    }

    public executeAvg (func, params, avg = 10): void {
        let accum = 0;
        for (let i = 0; i <= avg; i++) {
            accum += this._runFunction(func, params);
        }

        let result: number = accum / avg;

        this._log(func.name, result);
    }
}

export default Performy;