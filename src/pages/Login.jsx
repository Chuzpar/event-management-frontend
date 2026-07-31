import "./Login.css";

function Login() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <h1>Welcome Back</h1>

        <p>Sign in to continue managing your events.</p>

        <form>

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="auth-links">

          <a href="/forgot-password">
            Forgot Password?
          </a>

          <a href="/register">
            Create Account
          </a>

        </div>

      </div>

    </div>
  );
}

export default Login;