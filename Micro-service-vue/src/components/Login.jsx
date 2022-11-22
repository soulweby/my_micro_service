import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import auth from "../Auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "user@rest.com",
    password: "password",
  });

  let navigate = useNavigate();

  const updateStateLogin = (e) => {
    // console.log(credentials);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fetchData = async () => {
      const result = await auth.get(`http://localhost:8000/user/1`);

      navigate('/');
      console.log(result);
    };

    fetchData();  
  };

  //   };
  return (
    <div className="app-login">
      <div className="login-form">
        <div className="title">Connexion</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                required
                onChange={updateStateLogin}
              />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input
                type="password"
                name="password"
                required
                value={credentials.password}
                onChange={updateStateLogin}
              />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
{
}
