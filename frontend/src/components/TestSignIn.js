import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Button } from "@nextui-org/react";
function TestSignIn() {
  return (
    <div
      className="container-fluid d-flex"
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="container d-flex"
        style={{
          //   justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "rgb(0,194,188)",
          background:
            "linear-gradient(0deg, rgba(0,194,188,1) 0%, rgba(0,116,130,1) 100%)",
          width: "40%",
        }}
      >
        <div
          className="d-flex"
          style={{
            flexDirection: "column",
            background: "rgb(116,132,175)",
            background:
              "linear-gradient(180deg, rgba(116,132,175,1) 0%, rgba(29,44,79,1) 37%, rgba(29,44,79,1) 100%)",
            // justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            width: "25vw",
            borderRadius: "10px",
            // padding: "2rem",
            margin: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#00F5E1",
              padding: ".5rem 2.5rem",
              //   width: "50%",
              marginTop: "-1rem",
            }}
          >
            <h5>SIGN IN</h5>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5rem",
            }}
          >
            <CgProfile style={{ fontSize: "6rem", color: "#7A839E" }} />
          </div>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FaUser
                style={{ fontSize: "1.5rem", margin: "1rem", color: "#7A839E" }}
              />
              {/* <p style={{ fontSize: "2rem" }}>|</p> */}
              <input type="text" placeholder="Username" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <RiLockPasswordFill
                style={{ fontSize: "1.5rem", margin: "1rem", color: "#7A839E" }}
              />
              {/* <p style={{ fontSize: "2rem" }}>|</p> */}
              <input type="password" placeholder="Password" />
            </div>
            <div
              className="container"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // width: "100%",
              }}
            >
              <div className="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  style={{ color: "#00F5E1" }}
                />
                <p
                  //   class="form-check-label"
                  //   for="flexCheckDefault"
                  style={{ color: "#00F5E1", fontSize: "8px", margin: "1px" }}
                >
                  Remember Me
                </p>
              </div>
              <>
                <p style={{ color: "#00F5E1", fontSize: "8px" }}>
                  Forgot Your Password?
                </p>
              </>
            </div>
          </div>
          <Button
            // radius=""
            className="custom-width btn"
            //   onClick={handlebuttonclick}
            style={{
              borderRadius: "10px",
              backgroundColor: "#00F5E1",
              //   color: "white",
            }}
          >
            Login
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default TestSignIn;
