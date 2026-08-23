// projeto/objetos/IE.mjs
import PJ from '../pessoas/PJ.mjs';

// --- 1. CLASSE (IEclss) ---
export default class IEclss {
    #numero;
    #estado;
    #dataRegistro;
    #pj;

    constructor(numero, estado) {
        this.#numero = numero;
        this.#estado = estado;
        this.#dataRegistro = new Date();
        this.#pj = null;
    }

    getNumero() { return this.#numero; }
    setNumero(num) { this.#numero = num; }

    getEstado() { return this.#estado; }
    setEstado(est) { this.#estado = est; }

    getDataRegistro() { return this.#dataRegistro; }
    setDataRegistro(data) { this.#dataRegistro = data; }

    getPJ() { return this.#pj; }

    setPJ(pj) {
        // Validação principal: só aceita se for uma instância legítima de PJ
        if (pj instanceof PJ) {
            this.#pj = pj;
            return true;
        }
        return false;
    }
}

// --- 2. FUNÇÃO FÁBRICA (IEfunc) ---
export function IEfunc(numero, estado) {
    let _numero = numero || "";
    let _estado = estado || "";
    let _dataRegistro = new Date();
    let _pj = null;

    return {
        getNumero: () => _numero,
        setNumero: (num) => { _numero = num; },
        getEstado: () => _estado,
        setEstado: (est) => { _estado = est; },
        getDataRegistro: () => _dataRegistro,
        setDataRegistro: (data) => { _dataRegistro = data; },
        getPJ: () => _pj,
        setPJ: (pj) => {
            if (pj instanceof PJ) {
                _pj = pj;
                return true;
            }
            return false;
        }
    };
}

// --- 3. OBJETO LITERAL (IEjson) ---
export const IEjson = {
    _numero: "",
    _estado: "",
    _dataRegistro: new Date(),
    _pj: null,

    getNumero() { return this._numero; },
    setNumero(num) { this._numero = num; },

    getEstado() { return this._estado; },
    setEstado(est) { this._estado = est; },

    getDataRegistro() { return this._dataRegistro; },
    setDataRegistro(data) { this._dataRegistro = data; },

    getPJ() { return this._pj; },
    setPJ(pj) {
        if (pj instanceof PJ) {
            this._pj = pj;
            return true;
        }
        return false;
    }
};