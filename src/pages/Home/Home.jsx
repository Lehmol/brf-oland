import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

const Home = () => {

    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Kunde inte logga ut:', error);
        }
    };

  return (
    <>
        <h1>Välkommen till brf öland 2</h1>
        <button onClick={handleLogout}> Logga ut </button>
    </>
  )
}

export default Home;