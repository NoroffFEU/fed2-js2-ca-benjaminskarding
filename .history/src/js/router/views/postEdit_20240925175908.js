import { authGuard } from "../../utilities/authGuard";
import { toggleVisibilityOfElements } from "../../utilities/toggleVisibilityOfElements";
import { getPostId } from "./post";
import { onUpdatePost } from "../../ui/post/update";
import { readPost } from "../../api/post/read";

toggleVisibilityOfElements();
authGuard();


async function loadPostForEditing() {
    const postId = getPostId();
  
    if (!postId) {
        alert("No post ID found.");
        return;
    }
  
    try {
        const post = await readPost(postId); 

        const title = document.getElementById("postTitle");
        const body = document.getElementById("postBody");
        const tags = document.getElementById("postTags");
        const mediaUrl = document.getElementById("postMedia");
        const mediaAlt = document.getElementById("mediaAlt");


        if (title) {
            title.value = post.title || "";
        }
        
        if (body) {
            body.value = post.body || "";
        }
        
        if (tags) {
            tags.value = post.tags?.join(", ") || "";
        }
        
        if (mediaUrl) {
            mediaUrl.value = post.media?.url || "";
        }
        
        if (mediaAlt) {
            mediaAlt.value = post.media?.alt || "";
        }
  
        const form = document.getElementById("editPostForm");
        if (form) {
            form.setAttribute("data-post-id", postId);
        }
    } catch (error) {
        console.error("Error loading post:", error);
        alert("Failed to load post data.");
    }
}

loadPostForEditing();

document.getElementById("editPostForm").addEventListener("submit", onUpdatePost); 
