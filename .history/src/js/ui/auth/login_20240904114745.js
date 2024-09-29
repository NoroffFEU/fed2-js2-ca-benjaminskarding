export async function onLogin(event) {
    event.preventDefault();

    const form = event.target;

    const email = form.elements['email'].value;
    const password = form.elements['password'].value;

    const userData = {
        email,
        password
    };

    try {
        const response = await login ({ email, password});
        console.log ('Login Successful:', response);

        alert("Login Successfull!");
    } catch (error) {
        console.error('Login Failed:', error);

        alert(`Login Failed: ${error.message}`);
    }
}

