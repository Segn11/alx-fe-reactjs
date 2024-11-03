// src/App.jsx

import './App.css';
import WelcomeMessage from './components/WelcomeMessage'; // Import WelcomeMessage component (Already present)
import UserProfile from './components/UserProfile';       // Import UserProfile component (Task 3)
import Header from './components/Header';                 // Import Header component (Task 2)
import MainContent from './components/MainContent';        // Import MainContent component (Task 2)
import Footer from './components/Footer';                 // Import Footer component (Task 2)

function App() {
    return (
        <div className="App">
            {/* Task 2 Components */}
            <Header />              {/* Header from Task 2 */}
            <MainContent />         {/* Main Content from Task 2 */}
            <Footer />              {/* Footer from Task 2 */}
            
            {/* Existing Components */}
            <WelcomeMessage />      {/* Already included component */}
            
            {/* Task 3 Component */}
            <UserProfile 
                name="Alice" 
                age="25" 
                bio="Loves hiking and photography" 
            />
        </div>
    );
}

export default App;
