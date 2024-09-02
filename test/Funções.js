// Importa o módulo 'readline' para interagir com o usuário via linha de comando
const readline = require('readline');

// Cria uma interface de leitura de dados do usuário
const rl = readline.createInterface({
    input: process.stdin,  // Define a entrada como o fluxo de dados padrão (teclado)
    output: process.stdout // Define a saída como o fluxo de dados padrão (console)
});

// Função para reverter o texto
function reverse(texto) {
    return texto.split("").reverse().join(""); // Separa o texto em caracteres, inverte a ordem e junta novamente
}

// Função para converter o texto para maiúsculas
function toUpperCase(texto) {
    return texto.toUpperCase(); // Converte todos os caracteres para maiúsculas
}

// Função para converter o texto para minúsculas
function toLowerCase(texto) {
    return texto.toLowerCase(); // Converte todos os caracteres para minúsculas
}

// Função para calcular o IMC (Índice de Massa Corporal)
function IMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2); // Calcula o IMC e formata o resultado com duas casas decimais
}

// Mapeia as funções para seus nomes
const functions = {
    'reverse': reverse,
    'toUpperCase': toUpperCase,
    'toLowerCase': toLowerCase,
    'IMC': IMC
};

// Pergunta ao usuário qual função ele deseja usar
rl.question('Digite a função que deseja usar (reverse, toUpperCase, toLowerCase, IMC): ', (funcName) => {
    // Verifica se a função digitada pelo usuário existe
    if (functions[funcName]) {
        // Se a função for 'IMC'
        if (funcName === 'IMC') {
            // Pergunta ao usuário o peso em kg
            rl.question('Digite o peso (em kg): ', (peso) => {
                // Pergunta ao usuário a altura em metros
                rl.question('Digite a altura (em metros): ', (altura) => {
                    // Calcula o IMC usando as entradas fornecidas
                    const imcResult = functions[funcName](
                        parseFloat(peso), parseFloat(altura));
                    // Exibe o resultado do IMC
                    console.log(`IMC: ${imcResult}`);
                    // Avalia o resultado e fornece a classificação do IMC
                    if (imcResult < 18.5) {
                        console.log('Abaixo do peso');
                    } else if (imcResult >= 18.5 && imcResult <= 24.9) {
                        console.log('Peso normal');
                    } else if (imcResult >= 25 && imcResult <= 29.9) {
                        console.log('Acima do peso');
                    } else if (imcResult >= 30) {
                        console.log('Obeso');
                    }
                    // Fecha a interface de leitura
                    rl.close();
                });
            });
        } else {
            // Se a função não for 'IMC', pede um texto ao usuário
            rl.question('Digite o texto: ', (input) => {
                // Executa a função escolhida com o texto fornecido e exibe o resultado
                console.log(`Resultado: ${functions[funcName](input)}`);
                // Fecha a interface de leitura
                rl.close();
            });
        }
    } else {
        // Se a função digitada não for reconhecida
        console.log('Função não reconhecida.');
        // Fecha a interface de leitura
        rl.close();
    }
});
