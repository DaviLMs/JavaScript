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

function toLowerCase(texto) {
    return texto.toLowerCase();
}

function IMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

const functions = {
    'reverse': reverse,
    'toUpperCase': toUpperCase,
    'toLowerCase': toLowerCase,
    'IMC': IMC
};

rl.question('Digite a função que deseja usar (reverse, toUpperCase, toLowerCase, IMC): ', (funcName) => {
    if (functions[funcName]) {
        if (funcName === 'IMC') {
            rl.question('Digite o peso (em kg): ', (peso) => {
                rl.question('Digite a altura (em metros): ', (altura) => {
                    const imcResult = functions[funcName](parseFloat(peso), parseFloat(altura));
                    console.log(`IMC: ${imcResult}`);
                    rl.close();
                });
            });
        } else {
            rl.question('Digite o texto: ', (input) => {
                console.log(`Resultado: ${functions[funcName](input)}`);
                rl.close();
            });
        }
    } else {
        console.log('Função não reconhecida.');
        rl.close();
    }
});
