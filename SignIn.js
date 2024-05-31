import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
// import "firebase/auth";
import axios from "axios";
import image from "../images/6310507.jpg";
import { Link, useNavigate } from "react-router-dom";
// import { BsGoogle } from "react-icons/bs";
// import { FcGoogle } from "react-icons/fc";
// import LazyLoad from "re";

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
// import Header from "../components/Header";
import { toast, Toaster } from "react-hot-toast";
// import { doc, setDoc } from "firebase/firestore";
// import { database } from "./firebase";
function Signin() {
  const [email, setemail] = useState("");
  // const [error, setError] = useState(false);
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
        const response = await axios.post("http://localhost:5000/login", {
          email,
          password,
        });

        if (response.status === 200 && response.data.msg === "Success") {
          toast.success("Login Successful", {
            position: "top-center",
          });
          const { email, name, dob, age } = response.data.user;
          localStorage.setItem("userEmail", email);
          localStorage.setItem("userName", name);
          localStorage.setItem("userDOB", dob);
          localStorage.setItem("userAge", age);
          navigate("/home");
        } else {
          toast.error("Login Failed !", {
            position: "top-center",
          });
        }
      } catch (error) {
        toast.error("Email or Password is Incorrect", {
          position: "top-center",
        });
        console.error("Login error:", error);
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
            <h2 className="mb-4">Sign In</h2>
            <div className="custom-width d-flex flex-column gap-2">
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
            </div>
            <div className="d-flex custom-width px-1 align-items-center justify-content-between">
              <div className="d-flex justify-content-center align-items-center  ">
                <input
                  className="rounded-0"
                  type="checkbox"
                  checked={showPass}
                  onChange={handleCheckboxChange}
                />
                <label
                  className="form-check-label"
                  style={{ fontSize: "13px" }}
                >
                  Show Password
                </label>
              </div>
            </div>
            <Button
              // radius=""
              className="custom-width btn"
              onClick={handlebuttonclick}
              style={{
                borderRadius: "20px",
                backgroundColor: "rgb(0, 128, 255)",
                color: "white",
              }}
            >
              Login
            </Button>
            <div className="custom-width d-flex flex-column gap-2">
              <p style={{ fontSize: "13px" }}>
                Don't have an account ?{" "}
                <span style={{ color: "#002c92", cursor: "pointer" }} />
                <Link to="/signup" style={{ textDecoration: "None" }}>
                  Create An Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Signin;
