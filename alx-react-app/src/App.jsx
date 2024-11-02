// src/App.jsx

import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile'; // Import the UserProfile component

function App() {
    return (
        <div className="App">
            <WelcomeMessage />
            <UserProfile 
                name="Alice" 
                age="25" 
                bio="Loves hiking and photography" 
            />
        </div>
    );
}

export default App;
