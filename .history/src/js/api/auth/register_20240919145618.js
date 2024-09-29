import { API_AUTH_REGISTER } from "../constants";

export async function registerUser(userData) {
    try {
        const response = await fetch(API_AUTH_REGISTER, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Registration failed");
        }

        return data;
    } catch (error) {
        throw new Error(error.message || "Something went wrong during registration");
    }
}

