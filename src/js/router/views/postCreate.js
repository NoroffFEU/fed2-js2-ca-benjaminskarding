import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";
import { toggleLogoutButton } from "../../utilities/toggleVisibilityOfElements";

authGuard();
toggleLogoutButton();

const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);
