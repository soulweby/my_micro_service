import React from "react";
import { useState, useEffect } from "react";

export default function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  //   const errors = {
  //     useremail: "invalid userEmail",
  //     pass: "invalid password",
  //   };
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
          <form>
            <div className="input-container">
              <label>Email </label>
              <input type="email" name="uname" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
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
