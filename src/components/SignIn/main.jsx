import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "..//..//assets/Logo.svg";
import appleIcon from "..//..//assets/apple-icon.svg";
import googleIcon from "..//..//assets/google-icon.svg";
import fbIcon from "..//..//assets/fb-icon.svg";
import signinbackarrow from "..//..//assets/signin-back-arrow.svg";
import "./Signin.css";
export default function Main() {
  const navigate = useNavigate();
  return (
    <div className="right">
      <div className="right-section">
        <div className="topLogoSection">
          <img
            src={signinbackarrow}
            alt="signinbackarrow"
            className="signinbackarrow"
            onClick={() => navigate(-1)}
          />
          <img src={Logo} alt="" />
        </div>
        <main>
          <h1>Sign in for your exciting journey</h1>
          <div className="input">
            <div className="label">
              <label htmlFor="">Email</label>
            </div>
            <input
              type="text"
              name="text"
              className="text"
              placeholder="someone@example.com"
            />
          </div>
          <div className="input">
            <div className="label">
              <label htmlFor="">Password</label>
            </div>
            <input
              type="password"
              name="password"
              className="text"
              placeholder="********"
            />
          </div>
          <p className="forgot-password">
            <Link to="forgot-password">Forgot password?</Link>
          </p>
          <div className="submit">Sign in</div>
        </main>
        <p>or use one of this</p>
        <div className="icons">
          <div className="icon">
            <img src={googleIcon} alt="" />
          </div>
          <div className="icon">
            <img src={appleIcon} alt="" />
          </div>
          <div className="icon">
            <img src={fbIcon} alt="" />
          </div>
        </div>
        <div className="create-account">
          <p>Don’t have an account?</p>
          <span>
            {" "}
            <Link to="create-account">Create one for new adventure!</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
