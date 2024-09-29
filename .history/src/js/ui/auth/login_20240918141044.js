import { getKey } from "../../api/auth/key";
import { login } from "../../api/auth/login";

export async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData (event.target);
    const userData = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    try {
        const result = await login (userData); 
        
        localStorage.setItem("accessToken", result.accessToken);

        const apiKey = await getKey(result.accessToken)

        localStorage.setItem("userApiKey", apiKey);

        alert("Logged in and API key created! Taking you to feed page...");

        setTimeout(() => {
            window.location.href = "/";
        }, 2000);
    } catch (error) {
        console.error("Login failed:", error);
    }

}
