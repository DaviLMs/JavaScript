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
                    const imcResult = functions[funcName](
                        (peso), parseFloat(altura));
                    console.log(`IMC: ${imcResult}`);
                    if (imcResult < 18.5) {
                        console.log('Abaixo do peso');
                    } else if (imcResult >= 18.5 && imcResult <= 24.9) {
                        console.log('Peso normal');
                    } else if (imcResult >= 25 && imcResult <= 29.9) {
                        console.log('Acima do peso');
                    } else if (imcResult >= 30) {
                        console.log('Obeso')
                    }
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
