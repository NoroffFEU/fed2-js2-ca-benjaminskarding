import { API_SOCIAL_POSTS } from "../constants"
import { headers } from "../headers"

export async function createPost({ title, body, tags, media }) {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        console.error("No access token found.");
        throw new Error("No access token found. Please log in.");
    }

    try {
        const response = await fetch (API_SOCIAL_POSTS, {
            method: "POST",
            headers: headers(accessToken, "application/json"),
            body: JSON.stringify({title, body, tags, media}),
        });

        const data = await response.json();

        if(!response.ok) {
            throw new Error(data.message || "Create post failed");
        }

        return data;
    } catch (error) {
        console.error("Error details:", error);
        throw new Error (error.message || "Something went wrong during create post");
    }


    
}
