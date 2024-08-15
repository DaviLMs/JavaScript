const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverse(texto) {
    return texto.split("").reverse().join("");
}

function toUpperCase(texto) {
    return texto.toUpperCase();
}

// Adicione outras funções aqui...

const functions = {
    'reverse': reverse,
    'toUpperCase': toUpperCase,
    // Adicione outras funções aqui...
};

rl.question('Digite a função que deseja usar (reverse, toUpperCase, etc.): ', (funcName) => {
    if (functions[funcName]) {
        rl.question('Digite o texto: ', (input) => {
            console.log(`Resultado: ${functions[funcName](input)}`);
            rl.close();
        });
    } else {
        console.log('Função não reconhecida.');
        rl.close();
    }
});


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// //reverso
// function reverse(texto) {
//     return texto.split("").reverse().join("");
// }

// rl.question('Digite a palavra que você deseja inverter: ', (input) => {
//     console.log(`Palavra invertida: ${reverse(input)}`);
//     rl.close();
// });