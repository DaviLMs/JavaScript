const { log } = require("console");

class Carro {
    constructor(ano, marca, cor, tamanho) {
        this.ano = ano;
        this.marca = marca;
        this.cor = cor;
        this.tamanho = tamanho;
    }

    ligar() {
        log(`Ligando o ${this.marca}, cor ${this.cor}, ano ${this.ano}, tamanho ${this.tamanho}`);
    }
}

class Motor {
    constructor(cilindros, potencia) {
        this.cilindros = cilindros
        this.potencia = potencia;
    }

    ligar() {
        log(`Ligando o motor com ${this.cilindros} cilindros e ${this.potencia} potência`);
    }
}

const m1 = new Motor(4, '100cv');

m1.ligar();

const carro1 = new Carro('2010', 'Uno', 'azul', 'pequeno');

carro1.ligar();
