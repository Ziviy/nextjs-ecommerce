async function getToken() {
    let url:string = "https://dummyjson.com/auth/login";
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: 'kdulyt',
            password: '5t6q4KC7O'
        })
    })
    return 
}