import React, {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function Login() {
  const navigate =
    useNavigate();

  const [email,
    setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const handleLogin =
    (e) => {
      e.preventDefault();

      // Get all users
      const users =
        JSON.parse(
          localStorage.getItem(
            "users"
          )
        ) || [];

      // Find matching user
      const user =
        users.find(
          (u) =>
            u.email ===
              email &&
            u.password ===
              password
        );

      if (!user) {
        alert(
          "Invalid Email or Password!"
        );
        return;
      }

      // Save login status
      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      // Save current logged user
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(
          user
        )
      );

      alert(
        "Login Successful!"
      );

      // Open dashboard
      navigate(
        "/dashboard"
      );
    };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>
          Welcome
          Back
        </h1>

        <p>
          Login to
          continue
          plagiarism
          analysis
        </p>

        <form
          onSubmit={
            handleLogin
          }
        >
          <input
            type="email"
            placeholder="Enter Email"
            value={
              email
            }
            onChange={(
              e
            ) =>
              setEmail(
                e.target
                  .value
              )
            }
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={
              password
            }
            onChange={(
              e
            ) =>
              setPassword(
                e.target
                  .value
              )
            }
            required
          />

          <button
            type="submit"
            className="auth-btn"
          >
            Login
          </button>
        </form>

        <p className="auth-text">
          Don’t have
          an account?
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