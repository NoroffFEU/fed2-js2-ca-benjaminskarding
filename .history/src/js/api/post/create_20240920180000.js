import { API_SOCIAL_POSTS } from "../constants"
import { headers } from "../headers"

export async function createPost({ title, body, tags, media }) {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
        throw new Error("No access token found. Please log in.");
    }

    try {
        const response = await fetch (API_SOCIAL_POSTS, {
            method: "POST",
            headers: 
        })
    }


    
}
