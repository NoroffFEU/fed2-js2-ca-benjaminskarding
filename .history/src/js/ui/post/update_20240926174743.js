import { updatePost } from "../../api/post/update";


export async function onUpdatePost(event) {
    event.preventDefault();
    const id = formElement.getAttribute('data-post-id');

    const form = new FormData(event.target);

    const editedData = {
        title: form.get('title'),
        body: form.get('body'),
    };

    try {
        const result = await updatePost(id, editedData);
        alert("Post updated successfully!");
        setTimeout(() => {
            window.location.href = `/`;  /* FIX DET HER */
        }, 3000);
    } catch (error) {
        console.error("Error updating post:", error);
        alert("Failed to update post.");
    }
}


