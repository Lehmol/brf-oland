import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../../firebase/auth.js';

import oolandImage from '../../assets/ooland2.png';
import "./Login.css";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await loginUser(email, password);
            navigate('/home');
        } catch(error) {
            setError('Fel email eller lösenord');
        }
    };

  return (
    <div className="login-container">
        <div className="image-card">
            <img src={oolandImage} alt="brf öland 2" />
        </div>
        <form className="form-card" onSubmit={handleSubmit}>
            <h1>Logga in</h1>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <input 
                placeholder="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input 
                placeholder="lösenord"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">
                Logga in
            </button>
            <p>
                Har du inget konto? <Link to="/register">Registrera dig här!</Link>
            </p>
        </form>
    </div>
  )
}

export default Login;