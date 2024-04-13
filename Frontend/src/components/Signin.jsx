import React, { useState } from "react";
import axios from "axios";
import law from "../image/lawvideo.mp4";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      if (email === "admin@gmail.com" && password === "admin") {
        // Perform actions for admin login
        window.open("/admin", "_blank");
        return;
      }
      const response = await axios.post("http://localhost:5000/auth/signin", {
        email,
        password,
      });
      console.log(response.data);
      window.location.href = "/home"; // Redirect to Homepage
    } catch (error) {
      console.error("Sign-in error:", error.response.data.message);
      setEmailError("Invalid Email or Password");
      setPasswordError("Invalid Email or Password");
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
      <div className="fixed top-0 left-0 w-full h-screen">
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[550px] mx-auto text-white bg-black/15 backdrop-filter backdrop-blur-md rounded-3xl">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <form
                className="w-full flex flex-col py-4"
                onSubmit={handleSignIn}
              >
                <input
                  className="p-4 my-3 text-white bg-transparent border-b-2 rounded outline-none placeholder:text-white"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="text-red-500">{emailError}</p>}
                <input
                  className="p-4 my-3 text-white bg-transparent border-b-2 rounded outline-none placeholder:text-white"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && (
                  <p className="text-red-500">{passwordError}</p>
                )}
                <button
                  className="bg-white text-black py-3 my-6 rounded font-bold"
                  type="submit"
                >
                  Sign In
                </button>
                <p className="py-8">
                  <span className="text-white">
                    New To Here?
                    <span className="font-bold underline ms-1 cursor-pointer">
                      <Link to="/signup">Sign Up</Link>
                    </span>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
