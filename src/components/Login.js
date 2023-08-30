import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="cover"
        />
      </div>
      <form className="bg-slate-950 p-12 absolute w-3/12 my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold  py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && ( <input
          type="text"
          placeholder="Enter your Full Name"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />)}
       
        <input
          type="text"
          placeholder="Enter your Email"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button  className="p-4 my-6 bg-red-700 w-full rounded-lg">
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={() => toggleSignInForm()}>
        {isSignInForm ? "New to Netflix ? SignUp Now" : "Already Registred ? SignIn Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
