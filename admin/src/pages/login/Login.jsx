import React, { useState } from "react";
import { useDispatch } from "react-redux";

//local imports
import { login } from "../../redux/apiCalls";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="loginContainer">
      <input
        type="text"
        placeholder="username"
        className="input"
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="input"
        placeholder="password"
        onChange={e => setPassword(e.target.value)}
      />
      <button className="btn-login" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
