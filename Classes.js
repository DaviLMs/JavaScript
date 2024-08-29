// Importa a função 'log' do módulo 'console' para exibir mensagens no console
const { log } = require("console");

// Define a classe 'Carro'
class Carro {
    // O construtor é usado para criar uma nova instância de Carro
    constructor(ano, marca, cor, tamanho) {
        this.ano = ano;          // Define o ano do carro
        this.marca = marca;      // Define a marca do carro
        this.cor = cor;          // Define a cor do carro
        this.tamanho = tamanho; // Define o tamanho do carro
    }

    // O método 'ligar' exibe uma mensagem quando o carro é ligado
    ligar() {
        log(`Ligando o ${this.marca}, cor ${this.cor}, ano ${this.ano}, tamanho ${this.tamanho}`);
    }
}

// Define a classe 'Motor'
class Motor {
    // O construtor é usado para criar uma nova instância de Motor
    constructor(cilindros, potencia) {
        this.cilindros = cilindros; // Define o número de cilindros do motor
        this.potencia = potencia;   // Define a potência do motor
    }

    // O método 'ligar' exibe uma mensagem quando o motor é ligado
    ligar() {
        log(`Ligando o motor com ${this.cilindros} cilindros e ${this.potencia} potência`);
    }
}

// Cria uma nova instância da classe Motor
const m1 = new Motor(4, '100cv'); // Motor com 4 cilindros e 100 cavalos de potência

// Liga o motor e exibe a mensagem
m1.ligar();

// Cria uma nova instância da classe Carro
const carro1 = new Carro('2010', 'Uno', 'azul', 'pequeno'); // Carro ano 2010, marca Uno, cor azul e tamanho pequeno

// Liga o carro e exibe a mensagem
carro1.ligar();

fetch('https://dummyjson.com/http/404/Hello_Peter')
    .then(res => res.json())
    .then(console.log);
