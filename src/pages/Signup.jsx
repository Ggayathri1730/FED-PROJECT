import React, { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

function Signup() {
  const navigate =
    useNavigate();

  const [formData,
    setFormData] =
    useState({
      fullName: "",
      email: "",
      dob: "",
      profession:
        "",
      studyField:
        "",
      otherProfession:
        "",
      password: "",
      confirmPassword:
        "",
    });

  const handleChange =
    (e) => {
      setFormData({
        ...formData,
        [e.target.name]:
          e.target.value,
      });
    };

  const handleSignup =
    (e) => {
      e.preventDefault();

      // Password match check
      if (
        formData.password !==
        formData.confirmPassword
      ) {
        alert(
          "Passwords do not match!"
        );
        return;
      }

      // Get previous users
      const oldUsers =
        JSON.parse(
          localStorage.getItem(
            "users"
          )
        ) || [];

      // Check duplicate email
      const existingUser =
        oldUsers.find(
          (user) =>
            user.email ===
            formData.email
        );

      if (
        existingUser
      ) {
        alert(
          "Account already exists!"
        );
        return;
      }

      // Save new user
      oldUsers.push(
        formData
      );

      localStorage.setItem(
        "users",
        JSON.stringify(
          oldUsers
        )
      );

      // Auto Login User
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(
          formData
        )
      );

      alert(
        "Signup Successful!"
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
          Create
          Account
        </h1>

        <p>
          Sign up to
          start
          plagiarism
          analysis
        </p>

        <form
          onSubmit={
            handleSignup
          }
        >
          <input
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={
              formData.fullName
            }
            onChange={
              handleChange
            }
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            required
          />

          <input
            type="date"
            name="dob"
            value={
              formData.dob
            }
            onChange={
              handleChange
            }
            required
          />

          <select
            name="profession"
            value={
              formData.profession
            }
            onChange={
              handleChange
            }
            required
            style={{
              width:
                "100%",
              padding:
                "18px",
              borderRadius:
                "15px",
              border:
                "1px solid #334155",
              background:
                "#0f172a",
              color:
                "white",
              fontSize:
                "16px",
              outline:
                "none",
              marginBottom:
                "20px",
            }}
          >
            <option value="">
              Select
              Profession
            </option>

            <option value="Student">
              Student
            </option>

            <option value="Teacher">
              Teacher
            </option>

            <option value="Developer">
              Developer
            </option>

            <option value="Researcher">
              Researcher
            </option>

            <option value="Content Creator">
              Content
              Creator
            </option>

            <option value="Business Owner">
              Business
              Owner
            </option>

            <option value="Other">
              Other
            </option>
          </select>

          {/* Student field */}
          {formData.profession ===
            "Student" && (
            <select
              name="studyField"
              value={
                formData.studyField
              }
              onChange={
                handleChange
              }
              required
              style={{
                width:
                  "100%",
                padding:
                  "18px",
                borderRadius:
                  "15px",
                border:
                  "1px solid #334155",
                background:
                  "#0f172a",
                color:
                  "white",
                fontSize:
                  "16px",
                outline:
                  "none",
                marginBottom:
                  "20px",
              }}
            >
              <option value="">
                What are
                you
                studying?
              </option>

              <option value="B.Tech">
                B.Tech
              </option>

              <option value="BCA">
                BCA
              </option>

              <option value="MBA">
                MBA
              </option>

              <option value="Intermediate">
                Intermediate
              </option>

              <option value="Degree">
                Degree
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          )}

          {/* Other profession */}
          {formData.profession ===
            "Other" && (
            <input
              type="text"
              name="otherProfession"
              placeholder="Enter Profession"
              value={
                formData.otherProfession
              }
              onChange={
                handleChange
              }
              required
            />
          )}

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={
              formData.password
            }
            onChange={
              handleChange
            }
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={
              formData.confirmPassword
            }
            onChange={
              handleChange
            }
            required
          />

          <button
            type="submit"
            className="auth-btn"
          >
            Sign Up
          </button>
        </form>

        <p className="auth-text">
          Already have
          an account?
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