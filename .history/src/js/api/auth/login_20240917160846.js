import { API_AUTH_LOGIN } from "../constants";

export async function login({ email, password }) {
    try {
        const response = await fetch(API_AUTH_LOGIN, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer $API_KEY`,
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if(!response.ok) {
            throw new Error(data.message || "Login failed:");
        } 

        return data;
    } catch (error) {
        console.error('Error Details:', error);
        throw new Error (error.message || "Something went wrong during login");
    }
}


document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
  }

  function logout() {
    localStorage.removeItem("authToken");
    window.location.href = "/auth/login/";
  }
});