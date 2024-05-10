import React, { useEffect, useState } from "react";
import { fetchAllUsers } from "../src/api";
import { NavLink, Navigate } from "react-router-dom";

const SignIn = ({ currentUser, setCurrentUser }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [invalidUser, setInvalidUser] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");

  useEffect(() => {
    fetchAllUsers().then(({ users }) => {
      setAllUsers(users);
    });
  }, []);

  const handleSubmit = (e) => {
    setInvalidUser(false);
    e.preventDefault();
    const userExists = allUsers.some((user) => user.username === usernameInput);
    if (userExists) {
      setCurrentUser(usernameInput);
    } else {
      setInvalidUser(true);
    }
    setUsernameInput("");
  };

  const handleGuest = (e) => {
    setCurrentUser("guest");
  };

  if (currentUser !== "") {
    return <Navigate to="/" />;
  }

  const handleUsername = (e) => {
    setUsernameInput(e.target.value);
  };

  return (
    <main>
      <div className="login-container">
        <h1>Sign In!</h1>
        <form onSubmit={handleSubmit}>
          <div className="username-input">
            <input id="username" onChange={handleUsername} placeholder="Username"/>
          </div>
          <div className="password-input">
            <input id="password" placeholder="Password"/>
          </div>
          <button type="submit">Sign In</button>
          <button type="button" onClick={handleGuest}>
            Sign in as Guest
          </button>
          <NavLink to="/sign-up">Sign Up</NavLink>
          {invalidUser && (
            <div className="error">Invalid username or password!</div>
          )}
        </form>
      </div>
    </main>
  );
};

export default SignIn;
