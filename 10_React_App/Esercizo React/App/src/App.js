import jwt_decode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import './App.css';
import Biography from './components/Biography';
import Contacts from './components/Contacts';
import EditProfile from './components/EditProfile';
import Header from './components/Header';
import Login from './components/Login';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Register from './components/Register';
import Skills from './components/Skills';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [isRegistering, setIsRegistering] = useState(false);
  const [userData, setUserData] = useState(() => {
    const token = localStorage.getItem('token');
    return token ? jwt_decode(token) : null;
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      setUserData(jwt_decode(token));
    }
  }, []);

  const handleLogin = (token) => {
    const decoded = jwt_decode(token);
    setUserData(decoded);
    setIsAuthenticated(true);
    localStorage.setItem('token', token);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData(null);
    localStorage.removeItem('token');
  };
  
  const handleRegisterSuccess = () => {
    setIsRegistering(false);
  };

  const handleProfileUpdate = (newName) => {
    setUserData({ ...userData, name: newName });
};


  return (
    <div className="App">
      <Header />

      {isAuthenticated ? (
    <>
        <button onClick={handleLogout}>Logout</button>
        <Profile user={userData} />
        <EditProfile user={userData} onUpdate={handleProfileUpdate} />
        <Biography />
        <Projects />
        <Skills />
        <Contacts />
    </>
) :  isRegistering ? (
        <Register onRegisterSuccess={handleRegisterSuccess} />
      ) : (
        <div>
          <Login onLogin={handleLogin} />
          <button onClick={() => setIsRegistering(true)}>Register</button>
        </div>
      )}
    </div>
  );
}

export default App;