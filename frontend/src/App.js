// import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Signin from "./components/SignIn";
import Signup from "./components/Signup";
import Landing from "./components/Landing";

import { AnimatePresence } from "framer-motion";
import { NextUIProvider } from "@nextui-org/react";
import TestSignIn from "./components/TestSignIn";
import Home from "./components/Home";

function App() {
  const location = useLocation();
  return (
    <NextUIProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/test" element={<TestSignIn />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </NextUIProvider>
  );
}

export default App;
