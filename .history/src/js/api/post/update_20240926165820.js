import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function updatePost(id, { title, body }) {
    id = new URLSearchParams(window.location.search).get('id');
    const accessToken = localStorage.getItem('accessToken');
    try {
        console.log("Starting updatePost function with ID:", id);
        console.log("Data being sent:", { title, body });

        const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
            method: 'PUT',
            headers: headers(accessToken, "application/json"),
            body: JSON.stringify({ title, body })
        });

        console.log("Response received:", response);

        if (!response.ok) {
            alert('Bad times: Failed to update the post');
        }

        if (response.ok) {
            alert('Post successfully updated');
        }

        const data = await response.json();
        console.log("Response data:", data);
        return data;
    } catch (error) {
        console.error('Failed to update the post:', error);
        alert('Error occurred while updating the post');
    }
}