const readline = require('readline');

const expireInSeconds = 18;
const expireInMilliseconds = expireInSeconds * 1000;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const handleTimeout = () => {
    console.log('Tempo expirado! O programa será encerrado.');
    rl.close();
};

const promptUser = () => {
    rl.question('Digite alguma coisa: ', (input) => {
        console.log(`Você digitou: ${input}`);

        promptUser();
    });
};


setTimeout(handleTimeout, expireInMilliseconds);


promptUser();
