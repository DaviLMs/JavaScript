const express = require('express');

const router = express.Router();

router.get('/buscar', async (req, res) => {

    let fetch = (await import('node-fetch')).default

    try {
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(console.log);

        res.status(200).json({
            status: 200,
            message: `Pessoa encontrada com sucesso`
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error
        })
    }
})

router.get('/login', async (req, res) => {

    let fetch = (await import('node-fetch')).default

    try {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                username: 'emilys',
                password: 'emilyspass',
                expiresInMins: 30,
            })
        })
            .then(res => res.json())
            .then(console.log);
        res.status(200).json({
            status: 200,
            message: 'Pessoa encontrada'
        })
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error
        })
    }
})


module.exports = router

