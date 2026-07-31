import "./ResetPassword.css";

function ResetPassword() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Reset Password</h1>

        <p>Create a new password for your account.</p>

        <form>

          <input
            type="password"
            placeholder="New Password"
          />

          <input
            type="password"
            placeholder="Confirm Password"
          />

          <button type="submit">
            Reset Password
          </button>

        </form>

      </div>
    </div>
  );
}

export default ResetPassword;