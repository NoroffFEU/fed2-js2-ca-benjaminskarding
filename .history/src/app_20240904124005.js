
import "/src/css/style.css";

import router from "./js/router/index.js";

await router(window.location.pathname);

console.log("API Key:", API_KEY);