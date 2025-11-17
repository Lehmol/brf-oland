import { Link } from 'react-router-dom';
import oolandImage from '../../assets/ooland2.png';
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
        <div className="image-card">
            <img src={oolandImage} alt="brf öland 2" />
        </div>
        <form className="form-card">
            <h1>Logga in</h1>
            <input 
                placeholder="email"
                type="email"
                autoComplete="email"
                required
            />
            <input 
                placeholder="lösenord"
                type="password"
                autoComplete="current-password"
                required
            />
            <button type="submit">
                Logga in
            </button>
            <p>
                Har du inget konto? Registrera dig här!
            </p>
        </form>
    </div>
  )
}

export default Login;