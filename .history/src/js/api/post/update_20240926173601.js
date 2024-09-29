import { API_SOCIAL_POSTS } from "../constants";
import { headers } from "../headers";

export async function updatePost(id, { title, body }) {
    const response = await fetch(`${API_SOCIAL_POSTS}/${id}`, {
      method: 'PUT',
      headers: headers(),
      body: JSON.stringify({ title, body }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to update the post');
    }
  
    const data = await response.json();
    return data;
  }