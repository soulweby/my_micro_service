import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <img src="./react.svg" className="logo" alt="logo netflix" />
      </Link>

      <nav className="navLinks">
        <Link to="/login" className='link'>
          LOGIN
        </Link>
        <Link to="/register" className='link'>
          REGISTER
        </Link>
      </nav>
    </div>
  );
}
