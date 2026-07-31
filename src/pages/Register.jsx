import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Create Account</h1>

        <p>Join Eventide and start discovering amazing events.</p>

        <form>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Register
          </button>

        </form>

        <div className="auth-links">
          <Link to="/login">
            Already have an account? Login
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Register;