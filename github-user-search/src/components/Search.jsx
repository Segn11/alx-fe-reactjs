import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [formData, setFormData] = useState({ username: '', location: '', minRepos: '' });
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);
    try {
      const results = await fetchUserData(searchParams);
      setUsers(results);
    } catch (err) {
      setError('Looks like we can’t find the user.');
    }
    setLoading(false);
  };
  
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          className="input"
        />
        <input
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="input"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={formData.minRepos}
          onChange={(e) => setFormData({ ...formData, minRepos: e.target.value })}
          className="input"
        />
        <button type="submit" onClick={() => handleSearch(formData)} className="btn">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      {users.length > 0 && (
        <div>
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar_url} alt={user.login} />
              <p>{user.login}</p>
              <p>Location: {user.location}</p>
              <p>Repos: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
