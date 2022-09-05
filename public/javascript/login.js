async function signupFormHandler(event) {
    event.preventDefault();
    console.log("clicked signup button")

    const username = document.querySelector('#email-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        })
        
        if (response.ok) {
            document.location.replace('/dashboard')
            conseold.log('success');
        }
        else
        { alert(response.statusText); }

    }
}

async function loginFormHandler(event) {
    event.preventDefault();
    console.log("clicked login button")
    const password = document.querySelector('#password-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        })
        
        response.ok ? document.location.replace('/') : alert(response.statusText);

    }
}

document.querySelector('#signup-btn').addEventListener('click', signupFormHandler);
document.querySelector('#login-btn').addEventListener('click', loginFormHandler);
