import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
// import "firebase/auth";
import axios from "axios";
import image from "../images/Mobile-login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { toast, Toaster } from "react-hot-toast";
function Signup() {
  const [email, setemail] = useState("");
  // const [error, setError] = useState(false);
  const [dob, setDob] = useState("");
  const [name, setName] = useState("");
  const [phoneno, setPhone] = useState("");
  const navigate = useNavigate();
  const handlebuttonclick = async (e) => {
    e.preventDefault();
    toast.dismiss();
    let isValid = true;
    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      toast.error("Invalid Email Address !", { position: "top-center" });
      isValid = false;
    }
    if (!password || password.length < 8) {
      toast.error("Password must be at least 8 characters !", {
        position: "top-center",
      });
      isValid = false;
    } else if (isValid) {
      console.log(email, password);
      try {
        const response = await axios.post("http://localhost:5000/register", {
          email,
          password,
          name,
          dob,
          phoneno,
        });
        if (response.status === 201) {
          // Handle successful registration
          toast.success("User registered successfully", {
            position: "top-center",
          });
          navigate("/signin");
          console.log("User registered successfully");
        } else {
          toast.error("Registration failed", {
            position: "top-center",
          });
          // Handle registration failure
          console.error("Registration failed");
        }
      } catch (error) {
        toast.error("Registration failed", {
          position: "top-center",
        });
        console.error("Registration error:", error);
      }
    }
  };

  const [password, setPassword] = useState("");
  const [showPass, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckboxChange = () => {
    setShowPassword(!showPass);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5, type: "linear" }}
    >
      <div
        className="container-fluid d-flex justify-content-center align-items-center"
        style={{ padding: 0, margin: 0 }}
      >
        <Toaster position="top-center" reverseOrder={false} />
        <div
          className="maindiv1 d-flex  shadow w-100"
          style={{ boxSizing: "border-box" }}
        >
          <div className="leftdiv ">
            <img src={image} alt="" />
          </div>
          <div className="rightdiv d-flex flex-column justify-content-center align-items-center gap-2">
            <h2 className="mb-4">Sign Up</h2>
            <div className="custom-width d-flex flex-column gap-2">
              <input
                type="text"
                placeholder="Enter Name "
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                style={{ borderRadius: "20px" }}
              />
              <input
                type="email"
                placeholder="Email Address"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                style={{ borderRadius: "20px" }}
              />
              <input
                type={showPass ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
                style={{ borderRadius: "20px" }}
              />
              <input
                type="date"
                placeholder="Date Of Birth "
                value={dob}
                onChange={(e) => {
                  setDob(e.target.value);
                }}
                style={{ borderRadius: "20px" }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phoneno}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                maxLength="10"
                pattern="[0-9]{10}"
                style={{ borderRadius: "20px" }}
              />
            </div>
            <Button
              // radius=""
              className="custom-width btn"
              onClick={handlebuttonclick}
              style={{
                borderRadius: "20px",
                backgroundColor: "#FF4F5A",
                color: "white",
              }}
            >
              Sign Up
            </Button>
            <div className="d-flex custom-width px-1 align-items-center justify-content-between">
              <div className="custom-width d-flex flex-column gap-2">
                <p style={{ fontSize: "13px" }}>
                  Already have an account ?{" "}
                  <span style={{ color: "#002c92", cursor: "pointer" }} />
                  <Link to="/signin" style={{ textDecoration: "None" }}>
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Signup;
