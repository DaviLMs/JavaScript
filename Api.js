// Função assíncrona para fazer login
async function login() {
    try {
        // Faz uma requisição POST para o endpoint de login
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST', // Método HTTP usado na requisição
            headers: { 'Content-Type': 'application/json' }, // Define o tipo de conteúdo como JSON
            body: JSON.stringify({ // Envia os dados de login no corpo da requisição
                username: 'abigailr', // Nome de usuário
                password: 'abigailrpass', // Senha
                expiresInMins: 30, // Tempo de expiração em minutos
            })
        });

        // Verifica se a resposta da requisição foi bem-sucedida
        if (!response.ok) {
            // Se a resposta não for bem-sucedida, exibe o status HTTP no console
            console.log(`Erro: ${response.status}`);
        } else {
            // Se a resposta for bem-sucedida, converte o corpo da resposta para JSON
            const resposta = await response.json();
            // Exibe a resposta no console
            console.log(resposta);
        }
    } catch (error) {
        // Se ocorrer um erro durante a requisição, exibe o erro no console
        console.error('Erro ao fazer login:', error);
    }
}

// Chama a função login para executar o processo de login
login();

// Função assíncrona para obter comentários
async function Comentrios() {
    try {
        // Faz uma requisição GET para o endpoint de comentários
        const response = await fetch('https://dummyjson.com/comments/2', {
            method: 'GET', // Método HTTP usado na requisição
        });

        // Verifica se a resposta da requisição foi bem-sucedida
        if (!response.ok) {
            // Se a resposta não for bem-sucedida, exibe o status HTTP no console
            console.log(`Erro: ${response.status}`);
        } else {
            // Se a resposta for bem-sucedida, converte o corpo da resposta para JSON
            const resposta = await response.json();
            // Exibe a resposta no console
            console.log(resposta);
        }
    } catch (error) {
        // Se ocorrer um erro durante a requisição, exibe o erro no console
        console.error('Erro ao obter comentários:', error);
    }
}

// Chama a função Comentrios para executar o processo de obtenção de comentários
Comentrios();

fetch('https://dummyjson.com/carts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        userId: 1,
        products: [
            {
                id: 144,
                quantity: 4,
            },
            {
                id: 98,
                quantity: 1,
            },
        ]
    })
})
