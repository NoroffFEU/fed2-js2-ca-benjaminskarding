import { onLogout } from '../auth/logout.js';

export function setLogoutListener() {
    console.log("Setting up logout listener...");

  // Ensure the DOM is fully loaded before attaching the listener
  document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {
      console.log("Logout button found, adding event listener");
      logoutBtn.addEventListener("click", onLogout);
    } else {
      console.log("Logout button not found in the DOM");
    }
  });
}
