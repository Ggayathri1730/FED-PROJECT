import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Welcome Back</h1>

        <p>
          Login to continue
          plagiarism analysis
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
          />

          <input
            type="password"
            placeholder="Enter Password"
          />

          <button
            type="submit"
            className="auth-btn"
          >
            Login
          </button>
        </form>

        <p className="auth-text">
          Don’t have an account?
          <Link to="/signup">
            {" "}
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;