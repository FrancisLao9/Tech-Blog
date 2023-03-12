//sign up button
const signupHandler = async function(event) {
    event.preventDefault();

    const userEl = document.querySelector('#user-signup');
    const passEl = document.querySelector('#pass-signup');

    const response = await fetch('api/user', {
        method: 'POST',
        body: JSON.stringify({
            username: userEl.value,
            password: passEl.value
        }),
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to log in...');
    }
};


document.querySelector('#signup-form').addEventListener('submit', signupHandler);