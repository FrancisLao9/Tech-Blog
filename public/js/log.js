//login button

const loginHandler = async function(event) {
    event.preventDefault();

    const userEl = document.querySelector('#user-login');
    const passEl = document.querySelector('#pass-login');

    const response = await fetch('api/user/login', {
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


document.querySelector('#login-form').addEventListener('submit', loginHandler);