async function newFormHandler(event) {
    event.preventDefault();

    console.log(event);

    const title = document.querySelector('input[name="post-title"').value;
    const post_text = document.querySelector('#post-text').value;

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
        document.location.replace('/dashboard');
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector('#create-post-btn').addEventListener('click', newFormHandler);