import React, { useState, useRef } from "react";
import "./Register.scss";

//IMAGE
import Image from "../../Images/download.jpeg";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={Image} alt="" />
          <button className="loginButton">Sign in</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited Movies, TV Shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to Watch? Enter your email to create or restart your membership
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Started
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
