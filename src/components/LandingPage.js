import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Our App</h1>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </div>
  );
}

export default LandingPage;
