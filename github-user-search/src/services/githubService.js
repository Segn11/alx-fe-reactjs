import axios from 'axios';

const API_URL = 'https://api.github.com/search/users';

export const fetchUserData = async ({ username, location, minRepos }) => {
  const params = new URLSearchParams();
  
  if (username) params.append('q', `type:user ${username}`);
  if (location) params.append('location', location);
  if (minRepos) params.append('repos:>=', minRepos);
  
  try {
    const response = await axios.get(`${API_URL}?${params.toString()}`);
    return response.data.items; // Return the users matching the criteria
  } catch (error) {
    throw error;
  }
};
