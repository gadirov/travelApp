import React from "react";
import "./ForgotPassword.css";
import Logo from "..//..//assets/Logo.svg";
import signinbackarrow from "..//..//assets/signin-back-arrow.svg";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <div className="right">
      <div className="right-section forgot-password">
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
          <h1 className="forgotpassword-h1">
            Looking to change your password ?
          </h1>
          <span>
            Enter your email below and we'll send you instructions on how to
            reset your password
          </span>
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
          <p></p>
          <div className="submit">Reset my Password</div>
        </main>
      </div>
    </div>
  );
}
