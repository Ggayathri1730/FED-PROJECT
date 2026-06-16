import React, {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function Navbar() {
  const navigate =
    useNavigate();

  const [showDropdown,
    setShowDropdown] =
    useState(false);

  const loggedInUser =
    JSON.parse(
      localStorage.getItem(
        "loggedInUser"
      )
    );

  const users =
    JSON.parse(
      localStorage.getItem(
        "users"
      )
    ) || [];

  const isLoggedIn =
    localStorage.getItem(
      "isLoggedIn"
    );

  const handleLogout =
    () => {
      localStorage.removeItem(
        "isLoggedIn"
      );

      localStorage.removeItem(
        "loggedInUser"
      );

      alert(
        "Logged Out Successfully!"
      );

      navigate(
        "/login"
      );
    };

  const switchAccount =
    (user) => {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(
          user
        )
      );

      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      window.location.reload();
    };

  return (
    <nav className="navbar">
      <div className="logo-section">
        <h2 className="logo">
          Plagiarism
          Checker
        </h2>
      </div>

      <div className="nav-links">
        <Link to="/">
          Home
        </Link>

        <Link to="/features">
        Features
        </Link>

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/reports">
          Reports
        </Link>

        {/* Before Login */}
        {!isLoggedIn && (
          <>
            <Link to="/login">
              Login
            </Link>

            <Link
              to="/signup"
              className="signup-btn"
            >
              Sign Up
            </Link>
          </>
        )}

        {/* After Login */}
        {isLoggedIn &&
          loggedInUser && (
            <div
              style={{
                position:
                  "relative",
                marginLeft:
                  "20px",
              }}
            >
              {/* Profile Button */}
              <div
                onClick={() =>
                  setShowDropdown(
                    !showDropdown
                  )
                }
                style={{
                  display:
                    "flex",
                  alignItems:
                    "center",
                  gap: "12px",
                  cursor:
                    "pointer",
                }}
              >
                {/* Profile Circle */}
                <div
                  style={{
                    width:
                      "45px",
                    height:
                      "45px",
                    borderRadius:
                      "50%",
                    background:
                      "linear-gradient(135deg,#8b5cf6,#6366f1)",
                    color:
                      "white",
                    display:
                      "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    fontWeight:
                      "bold",
                    fontSize:
                      "20px",
                  }}
                >
                  {loggedInUser.fullName?.charAt(
                    0
                  )}
                </div>

                <span
                  style={{
                    color:
                      "white",
                    fontWeight:
                      "500",
                  }}
                >
                  {
                    loggedInUser.fullName
                  }
                </span>
              </div>

              {/* Dropdown */}
              {showDropdown && (
                <div
                  style={{
                    position:
                      "absolute",
                    top: "65px",
                    right:
                      "0",
                    background:
                      "#0f172a",
                    border:
                      "1px solid rgba(255,255,255,0.1)",
                    borderRadius:
                      "20px",
                    padding:
                      "20px",
                    width:
                      "320px",
                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.4)",
                    zIndex:
                      1000,
                  }}
                >
                  {/* Profile Header */}
                  <div
                    style={{
                      display:
                        "flex",
                      alignItems:
                        "center",
                      gap: "15px",
                      marginBottom:
                        "18px",
                    }}
                  >
                    <div
                      style={{
                        width:
                          "60px",
                        height:
                          "60px",
                        borderRadius:
                          "50%",
                        background:
                          "linear-gradient(135deg,#8b5cf6,#6366f1)",
                        color:
                          "white",
                        display:
                          "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "center",
                        fontWeight:
                          "bold",
                        fontSize:
                          "24px",
                      }}
                    >
                      {loggedInUser.fullName?.charAt(
                        0
                      )}
                    </div>

                    <div>
                      <h3
                        style={{
                          color:
                            "white",
                          margin: 0,
                        }}
                      >
                        {
                          loggedInUser.fullName
                        }
                      </h3>

                      <p
                        style={{
                          color:
                            "#94a3b8",
                          margin:
                            "4px 0",
                          fontSize:
                            "14px",
                        }}
                      >
                        {
                          loggedInUser.email
                        }
                      </p>
                    </div>
                  </div>

                  <hr
                    style={{
                      border:
                        "0.5px solid rgba(255,255,255,0.1)",
                    }}
                  />

                  {/* User Details */}
                  <div
                    style={{
                      background:
                        "#111827",
                      borderRadius:
                        "12px",
                      padding:
                        "15px",
                      margin:
                        "15px 0",
                    }}
                  >
                    <p
                      style={{
                        color:
                          "white",
                        margin:
                          "0 0 8px",
                      }}
                    >
                      <strong>
                        Profession:
                      </strong>{" "}
                      {
                        loggedInUser.profession
                      }
                    </p>

                    {loggedInUser.studyField && (
                      <p
                        style={{
                          color:
                            "white",
                          margin: 0,
                        }}
                      >
                        <strong>
                          Studying:
                        </strong>{" "}
                        {
                          loggedInUser.studyField
                        }
                      </p>
                    )}
                  </div>

                  {/* Other Accounts */}
                  <h4
                    style={{
                      color:
                        "#94a3b8",
                      marginBottom:
                        "10px",
                    }}
                  >
                    Other Accounts
                  </h4>

                  {users
                    .filter(
                      (
                        user
                      ) =>
                        user.email !==
                        loggedInUser.email
                    )
                    .map(
                      (
                        user,
                        index
                      ) => (
                        <div
                          key={
                            index
                          }
                          onClick={() =>
                            switchAccount(
                              user
                            )
                          }
                          style={{
                            display:
                              "flex",
                            alignItems:
                              "center",
                            gap:
                              "12px",
                            padding:
                              "10px",
                            borderRadius:
                              "12px",
                            cursor:
                              "pointer",
                            marginBottom:
                              "8px",
                            background:
                              "#111827",
                          }}
                        >
                          <div
                            style={{
                              width:
                                "40px",
                              height:
                                "40px",
                              borderRadius:
                                "50%",
                              background:
                                "#8b5cf6",
                              color:
                                "white",
                              display:
                                "flex",
                              alignItems:
                                "center",
                              justifyContent:
                                "center",
                              fontWeight:
                                "bold",
                            }}
                          >
                            {user.fullName?.charAt(
                              0
                            )}
                          </div>

                          <div>
                            <p
                              style={{
                                color:
                                  "white",
                                margin:
                                  0,
                                fontWeight:
                                  "600",
                              }}
                            >
                              {
                                user.fullName
                              }
                            </p>

                            <p
                              style={{
                                color:
                                  "#94a3b8",
                                margin:
                                  0,
                                fontSize:
                                  "13px",
                              }}
                            >
                              {
                                user.email
                              }
                            </p>
                          </div>
                        </div>
                      )
                    )}

                  {/* Add Account */}
                  <button
                    onClick={() =>
                      navigate(
                        "/signup"
                      )
                    }
                    style={{
                      width:
                        "100%",
                      padding:
                        "12px",
                      border:
                        "1px solid #334155",
                      borderRadius:
                        "12px",
                      background:
                        "transparent",
                      color:
                        "white",
                      cursor:
                        "pointer",
                      marginTop:
                        "10px",
                    }}
                  >
                    + Add Another
                    Account
                  </button>

                  {/* Logout */}
                  <button
                    onClick={
                      handleLogout
                    }
                    style={{
                      width:
                        "100%",
                      padding:
                        "14px",
                      marginTop:
                        "15px",
                      background:
                        "linear-gradient(135deg,#ef4444,#dc2626)",
                      border:
                        "none",
                      borderRadius:
                        "12px",
                      color:
                        "white",
                      fontWeight:
                        "600",
                      fontSize:
                        "16px",
                      cursor:
                        "pointer",
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
      </div>
    </nav>
  );
}

export default Navbar;