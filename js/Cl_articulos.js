export default class Cl_articulos {
    constructor(costo) {
        this.costo = +costo;
    }
    set costo (costo) {
        this._costo = +costo;
    }
    get costo () {
        return this._costo;
    }
    ganacia() {
        return this.costo * 0.5;
    }
}