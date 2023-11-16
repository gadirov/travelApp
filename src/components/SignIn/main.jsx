import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools";
import InputTypeEmail from "./InputTypeEmail";
import InputTypePassword from "./InputTypePassword";
import Logo from "..//..//assets/Logo.svg";
import appleIcon from "..//..//assets/apple-icon.svg";
import googleIcon from "..//..//assets/google-icon.svg";
import fbIcon from "..//..//assets/fb-icon.svg";
import signinbackarrow from "..//..//assets/signin-back-arrow.svg";
import "./Signin.css";


export default function Main() {
  const navigate = useNavigate();
  const methods = useForm({

    defaultValues:{
      email:"",
      password: "",
    }
  });
  const submitHandler = (value) => {
    console.log(value);
  }
  return (
    <FormProvider {...methods}>
        <div className="right">
          <div className="right-section">
            <div className="topLogoSection">
              <img src={signinbackarrow} alt="signinbackarrow" className="signinbackarrow" onClick={() => navigate(-1)}/>
              <img src={Logo} alt="" />
            </div>
            <form onSubmit={methods.handleSubmit(submitHandler)}>
              <h1>Sign in for your exciting journey</h1>
              < InputTypeEmail />
              < InputTypePassword />
              <p className="forgot-password">
                <Link to="forgot-password">Forgot password?</Link>
              </p>
              <input type="submit" className="submit" value="Sign in"/>
            </form >
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
        <DevTool control={methods.control} />
    </FormProvider> 
  );
}
