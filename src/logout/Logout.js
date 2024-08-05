
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout logic here (e.g., clear tokens, log out the user)
    const logoutUser = () => {
      // Example: Clear user data from local storage
      localStorage.removeItem('userToken');
      
      // Optionally, clear any other user data or perform API call to log out
    };

    logoutUser();
    
    // Redirect to the login or home page after logout
    navigate('/login'); // Adjust to your desired route

  }, [navigate]);

  return (
    <div className="logout">
      <h1>Logging you out...</h1>
      <p>You will be redirected shortly.</p>
    </div>
  );
};

export default Logout;
