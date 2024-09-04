const express = require('express');
const app = express();
const port = 5000;


app.use(express.json());

const pessoa = require('./api/pessoa'); // Importa o arquivo 'pessoa.js'
const documento = require('./api/documento');

app.use("/api/pessoa", pessoa);
app.use("/api/documento", documento);


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`); // Imprime uma mensagem no console
});