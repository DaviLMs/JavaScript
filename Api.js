
async function login() {
    const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: 'abigailr',
            password: 'abigailrpass',
            expiresInMins: 30,
        })
    });

    if (!response.ok) {
        console.log(response.status);


    } else {
        const resposta = await response.json();
        console.log(resposta);
    }

}

login()
