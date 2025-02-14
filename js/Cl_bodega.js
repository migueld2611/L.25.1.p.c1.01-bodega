export default class Cl_bodega{
    constructor(){
        this.acGanancia = 0;
    }
    procesarArticulo (a) {
        this.acGanancia += a.ganacia();
    }
    totalGanancia() {
        return this.acGanancia;
    }

}