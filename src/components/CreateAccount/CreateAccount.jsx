import React from 'react'
import { useNavigate } from "react-router-dom";
import Logo from "..//..//assets/Logo.svg";
import appleIcon from "..//..//assets/apple-icon.svg";
import googleIcon from "..//..//assets/google-icon.svg";
import fbIcon from "..//..//assets/fb-icon.svg";
import signinbackarrow from "..//..//assets/signin-back-arrow.svg";
import './CreateAccount.css'
export default function CreateAccount() {
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
            <h1>Create an account to start trip planning</h1>
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
            <p>
            </p>
            <div className="submit">Start trip planning</div>
          </main>
          <p>Sign up with</p>
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
            <p>By creating an account, you agree to elsewhere's</p>
            <div><span> Terms of Use</span> and <span>Privacy Policy.</span></div>
          </div>
        </div>
      </div>
    );
}
