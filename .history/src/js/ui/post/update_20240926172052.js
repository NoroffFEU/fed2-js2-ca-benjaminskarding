import { updatePost } from "../../api/post/update";
const id = new URLSearchParams(window.location.search).get('id');

export async function onUpdatePost(event) {
    event.preventDefault();
    

    const form = new FormData(event.target);

    const editedData = {
        title: form.get('title'),
        body: form.get('body'),
    };

    console.log("Formed new Data:", editedData);
    console.log("Updating post with ID:", id);
    console.log("Post Data being sent:", editedData);

    try {
        const result =  updatePost(id, editedData);
        alert("Post updated successfully!");
        setTimeout(() => {
            window.location.href = `/`;
        }, 3000);
    } catch (error) {
        console.error("Error updating post:", error);
        alert("Failed to update post.");
    }
}


