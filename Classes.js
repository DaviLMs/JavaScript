const { log } = require("console")

class carro {
    constructor(ano, marca, cor, tamanho) {
        this.ano = ano
        this.marca = marca
        this.cor = cor
        this.tamanho = tamanho
    }

    ligar() {
        log(`Ligando o ${this.marca}, cor ${this.cor}, tamanho ${this.tamanho} quando o ano ${this.ano}`)
    }
}

const m1 = new carro(2021, 'Uno', 'azul', 'medio');
m1.ligar()
