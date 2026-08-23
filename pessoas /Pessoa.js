// projeto/pessoas/Pessoa.js
export default class Pessoa {
    #nome;
    #email;

    constructor() {
        this.#nome = "";
        this.#email = "";
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        if (nome && nome.trim() !== "") {
            this.#nome = nome;
            return true;
        }
        return false;
    }

    getEmail() {
        return this.#email;
    }

    setEmail(email) {
        if (email && email.trim() !== "" && email.includes("@")) {
            this.#email = email;
            return true;
        }
        return false;
    }
}