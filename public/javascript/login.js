async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

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
        
        response.ok ? document.location.replace('/dashboard') : alert(response.statusText);

    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
