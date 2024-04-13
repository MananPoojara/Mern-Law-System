import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import law from "../image/law.mp4";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Reset previous errors
    setNameError("");
    setEmailError("");
    setPasswordError("");

    // Validate form fields
    if (!name) {
      setNameError("Please enter your name");
      return;
    }
    if (!email) {
      setEmailError("Please enter your email");
      return;
    }
    if (!password) {
      setPasswordError("Please enter your password");
      return;
    }

    try {
      // Send sign-up request to the server
      await axios.post("http://localhost:5000/auth/signup", {
        name,
        email,
        password,
      });
      // Redirect to sign-in page after successful sign-up
      window.location.href = "/signin";
    } catch (error) {
      // Handle sign-up error
      console.error("Sign-up error:", error.response.data.message);
      // Display error message to the user
      // For example:
      // setEmailError("Email is already in use");
    }
  };

  return (
    <div className="w-full h-screen">
      <video
        autoPlay
        muted
        loop
        className="sm:block absolute w-full h-full object-cover"
      >
        <source src={law} type="video/mp4" />
      </video>
      <div className="fixed -top-7 left-0 w-full h-screen">
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto text-white bg-black/15 backdrop-filter backdrop-blur-md rounded-3xl">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                className="w-full flex flex-col py-4"
                onSubmit={handleSignUp}
              >
                <input
                  className="p-4 my-3 text-white bg-transparent border-b-2 rounded outline-none placeholder:text-white"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && <p className="text-orange-500">{nameError}</p>}
                <input
                  className="p-4 my-3 text-white bg-transparent border-b-2 rounded outline-none placeholder:text-white"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="text-orange-500">{emailError}</p>}
                <input
                  className="p-4 my-3 text-white bg-transparent border-b-2 rounded outline-none placeholder:text-white"
                  type="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && (
                  <p className="text-orange-500">{passwordError}</p>
                )}
                <button
                  className="bg-white text-black py-3 my-6 rounded font-bold"
                  type="submit"
                >
                  Sign Up
                </button>
                <div className="flex justify-center text-sm text-white">
                  <p className="cursor-pointer underline">
                    <Link to="/signin">Already have an account? Sign In</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
