const express = require('express');
const router = express.Router();

router.get('/todos', async (req, res) => {

    let fetch = (await import('node-fetch')).default

    try {
        fetch('https://dummyjson.com/user/login')
            .then(res => res.json())
            .then(console.log);
        res.status(200).json({
            status: 200,
            message: `Todos os Documentos encontrados com sucesso`
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error
        })
    }
})

module.exports = router