import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../../firebase/auth.js';

import oolandImage from '../../assets/ooland2.png';
import "./Register.css";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await registerUser(email, password);
            setSuccess('Du är registrerad! Du kan nu logga in');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            setError('Kunde inte registrera användare');
        }
    };

  return (
    <div className="register-container">
            <div className="image-card">
                <img src={oolandImage} alt="brf öland 2" />
            </div>
            <form className="form-card" onSubmit={handleSubmit}>
                <h1>Registrera dig</h1>
                {error && <p style={{color: 'red'}}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
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
                <button type="register">
                    Registrera
                </button>
                <p>
                    Har du redan ett konto? <Link to="/login">Logga in!</Link>
                </p>
            </form>
        </div>
  )
}

export default Register;