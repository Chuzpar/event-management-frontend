import "./ForgotPassword.css";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Forgot Password</h1>

        <p>
          Enter your email address and we'll send you a password reset link.
        </p>

        <form>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button type="submit">
            Send Reset Link
          </button>

        </form>

        <br />

        <Link to="/login">
          Back to Login
        </Link>

      </div>
    </div>
  );
}

export default ForgotPassword;