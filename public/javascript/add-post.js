import { modalAlerts } from './utils.js'

async function newFormHandler(event) {
    event.preventDefault();

    console.log(event);

    const title = document.querySelector('input[name="post-title"').value;
    const post_text = document.querySelector('#post-text').value;

    const alert = document.querySelector('#post-modal-alert')

        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            modalAlerts(alert, 'success', 'Post created successfully!')
            document.location.replace('/dashboard');
        }
        else {
            modalAlerts(alert, 'error', 'All fields must be completed to submit');
            resetModalHandler();
        }

}

function resetModalHandler() {
    setTimeout(() => {
        const alert = document.querySelector('#login-modal-alert');
        modalAlerts(alert, 'info', 'Give your post a title and type away!');
    },2000)
}

document.querySelector('#create-post-btn').addEventListener('click', newFormHandler);