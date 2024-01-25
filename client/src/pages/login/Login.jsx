import React from "react";
import "./Login.scss";

//IMAGE
import Image from "../../Images/download.jpeg";

const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={Image} alt="" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign in</h1>
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button className="LoginButton">Sign In</button>
          <span>
            New to MovieTime? <b>Sign up Now</b>
          </span>
          <small>
            This Page is protected by Google reCAPTCHA to ensure you're note a
            robot. <b>Learn More</b>
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
