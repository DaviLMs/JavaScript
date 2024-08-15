const { log } = require("console");

class Carro {
    constructor(ano, marca, cor, tamanho) {
        this.ano = ano;
        this.marca = marca;
        this.cor = cor;
        this.tamanho = tamanho; // Adicionando a propriedade tamanho
    }

    ligar() {
        log(`Ligando o ${this.marca}, cor ${this.cor}, ano ${this.ano}, tamanho ${this.tamanho}`);
    }
}

class Motor {
    constructor(cilindros, potencia) {
        this.cilindros = cilindros;
        this.potencia = potencia;
    }

    ligar() {
        log(`Ligando o motor com ${this.cilindros} cilindros e ${this.potencia} potência`);
    }
}

// Criando uma instância da classe Motor
const m1 = new Motor(4, '100cv');

// Chamando o método ligar na instância do motor
m1.ligar();

// Criando uma instância da classe Carro
const carro1 = new Carro(2021, 'Uno', 'azul', 'compacto');

// Chamando o método ligar na instância do carro
carro1.ligar();
