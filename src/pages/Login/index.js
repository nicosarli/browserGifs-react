import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import useUser from "../../hooks/useUser";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, pushLocation] = useLocation();
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();

  useEffect(() => {
    if (isLogged) pushLocation("/");
  }, [isLogged, pushLocation]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    login({ username, password });
  };

  if (isLoginLoading) return;

  const handleChangeUsername = (evt) => {
    setUsername(evt.target.value);
  };

  const handleChangePassword = (evt) => {
    setPassword(evt.target.value);
  };

  return (
    <>
      <h2>Login</h2>
      {isLoginLoading && <strong>Checking credentials...</strong>}
      {!isLoginLoading && (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            value={username}
            onChange={handleChangeUsername}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={handleChangePassword}
          />
          <button>Login</button>
        </form>
      )}
      {hasLoginError && <strong>Credentials are invalid</strong>}
    </>
  );
};

export default Login;
