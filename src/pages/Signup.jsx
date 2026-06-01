import {
  Link,
  useNavigate,
} from "react-router-dom";

function Signup() {
  const navigate =
    useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Redirect to login
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>
          Create Account
        </h1>

        <p>
          Sign up to start
          plagiarism analysis
        </p>

        <form
          onSubmit={
            handleSignup
          }
        >
          <input
            type="text"
            placeholder="Enter Full Name"
          />

          <input
            type="email"
            placeholder="Enter Email"
          />

          <input
            type="password"
            placeholder="Create Password"
          />

          <button
            type="submit"
            className="auth-btn"
          >
            Sign Up
          </button>
        </form>

        <p className="auth-text">
          Already have an
          account?
          <Link to="/login">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;