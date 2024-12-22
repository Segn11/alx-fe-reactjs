import axios from 'axios';

const apiKey = process.env.REACT_APP_GITHUB_API_KEY;

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${apiKey}`, // Use API key if required
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};
