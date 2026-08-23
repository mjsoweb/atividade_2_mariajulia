// projeto/pessoas/PJ.mjs
import Pessoa from './Pessoa.js';

export default class PJ extends Pessoa {
    #cnpj;
    #razaoSocial;

    constructor() {
        super(); // Aciona o construtor da classe pai (Pessoa)
        this.#cnpj = "";
        this.#razaoSocial = "";
    }

    getCNPJ() {
        return this.#cnpj;
    }

    setCNPJ(cnpj) {
        if (!cnpj) return false;
        // Remove pontuações para contar apenas os números (Desafio Extra 1)
        const cnpjLimpo = String(cnpj).replace(/\D/g, '');
        
        // Valida se possui exatamente 14 dígitos
        if (cnpjLimpo.length === 14) {
            this.#cnpj = cnpj;
            return true;
        }
        return false;
    }

    getRazaoSocial() {
        return this.#razaoSocial;
    }

    setRazaoSocial(razaoSocial) {
        if (razaoSocial && razaoSocial.trim() !== "") {
            this.#razaoSocial = razaoSocial;
            return true;
        }
        return false;
    }
}