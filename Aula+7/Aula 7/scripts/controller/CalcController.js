class CalcController {

    constructor() {

        this.displayCalc = "0";
        this._dataAtual;  //O underscore _ indica atributo privado

    }

    get displayCalc() {
        return this.displayCalc;

    }

    set displayCalc(valor){
        this.displayCalc = valor;
    }

    get dataAtual() {
        return this._dataAtual;
    }

    set dataAtual(valor) {
        return this._dataAtual;
    }

}