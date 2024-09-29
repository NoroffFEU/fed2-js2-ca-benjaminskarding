import { updatePost } from "../../api/post/update";

export async function onUpdatePost(event) {
    event.preventDefault();
    const id = new URLSearchParams(window.location.search).get('id');

    const form = new FormData(event.target);

    const editedData = {
        title: form.get('title'),
        body: form.get('body'),
    };

    console.log("Formed new Data:", editedData); 
    console.log("Updating post with ID:", id);
    console.log("Post Data being sent:", editedData);


    updatePost(id, editedData)
}


