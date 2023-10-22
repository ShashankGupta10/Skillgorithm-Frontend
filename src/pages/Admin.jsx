/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Admin.css";
import { useDispatch } from "react-redux";
import {setLogin} from "../redux/state"
import axios from "axios";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  LinearProgress,
  Snackbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import auth3 from "../../assets/people-fundraising.svg";
// import auth2 from "../../assets/person.svg";
import auth1 from "../assets/auth1.svg";
import logo from "../assets/group3.svg";

const Admin = () => {
  const [activeInput, setActiveInput] = useState(null);
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const [showOptSec, setShowOptSec] = useState(false);
  const [showErrorSnack, setShowErrorSnack] = useState(false);
  const [showSuccessSnack, setShowSuccessSnack] = useState(false);
  const [snackMsg, setSnackMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [getOTPInputs, setOTPInputs] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loginformData, LoginSetFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowSuccessSnack(false);
    setShowErrorSnack(false);
  };

  const handleSigninChange = (e) => {
    const { name, value } = e.target;
    LoginSetFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/v1/auth/signup", {
        ...formData,
      })
      .then((res) => {
        console.log(res.data)
        setShowSuccessSnack(true);
          setSnackMsg("Signup successful");
          setTimeout(() => {
            document.querySelector(".toggle2").click();
          }, 2000);
      })
      .catch((err) => console.log(err));
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/v1/auth/login", {
        ...loginformData,
      })
      .then((res) => {
        console.log(res.data)
          setShowSuccessSnack(true);
          setSnackMsg("Signin successful");
          dispatch(setLogin(res.data))
          setTimeout(() => {
            navigate("/admindash")
          }, 2000);
      })
      .catch((err) => console.log(err));
  };

  const handleBulletClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <>
      <main className={!isSignUpMode ? "sign-up-mode" : ""}>
        <div className="box">
          <div className="inner-box">
            <div className="forms-wrap">
              {!isSignUpMode ? (
                <>
                  <form
                    onSubmit={handleSignInSubmit}
                    action="index.html"
                    autoComplete="off"
                    className="sign-up-form pranav-mc-bsdk-form"
                  >
                    <div className="logo">
                      <img src={logo} />
                      <Typography variant="h6">Skillgorithm</Typography>
                    </div>

                    <div className="heading">
                      <Typography
                        variant="h4"
                      >
                        Admin
                      </Typography>
                      <Typography mb={5} fontSize={"small"} variant="body4">
                        Not registered yet?{" "}
                        <a
                          href="#"
                          className="toggle2"
                          // onClick={() => setIsSignUpMode(!isSignUpMode)}
                        >
                          Sign Up
                        </a>
                      </Typography>
                    </div>

                    <div className="actual-form">
                      <div className="input-wrap">
                        <input
                          placeholder="Email"
                          onChange={handleSigninChange}
                          type="email"
                          name="email"
                          className={`input-field ${activeInput === 0 ? "active" : ""
                            }`}
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="input-wrap">
                        <input
                          placeholder="Password"
                          onChange={handleSigninChange}
                          type="password"
                          name="password"
                          className={`input-field ${activeInput === 1 ? "active" : ""
                            }`}
                          autoComplete="off"
                          required
                        />
                      </div>

                      {!showOptSec ? (
                        <>
                          <Box display={"flex"} gap={"30px"}>
                            <Button
                              type="submit"
                              className="sign-btn"
                              sx={{
                                backgroundColor: "#4caf4f",
                                color: "white",
                                marginBottom: "10px",
                              }}
                              onclick={()=>{}}
                            >
                              Sign In
                            </Button>
                            {isLoading ? <CircularProgress size={30} /> : ""}
                          </Box>
                        </>
                      ) : (
                        ""
                      )}

                      {!showOptSec ? (
                        <p className="text">
                          Forgot your password or you login details?
                          <a href="#"> Get help</a> signing in
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <form
                    action="index.html"
                    autoComplete="off"
                    className="sign-in-form pranav-mc-bsdk-form"
                    onSubmit={handleSignupSubmit}
                  >
                    <div className="logo">
                      <img src={logo} alt="easyclass" />
                      <Typography variant="h6">Skillgorithm</Typography>
                    </div>

                    <div className="heading">
                      <Typography variant="h4">Get Started</Typography>
                      <Typography mb={2} variant="body3" fontSize={"small"}>
                        Already have an account?{" "}
                        <a
                          onClick={() => setIsSignUpMode(!isSignUpMode)}
                          className="toggle2"
                        >
                          Sign in
                        </a>
                      </Typography>
                    </div>

                    <div className="actual-form">
                      <div className="input-wrap">
                        <input
                          placeholder="Full Name"
                          onChange={handleChange}
                          type="text"
                          name="name"
                          minLength="4"
                          className="input-field"
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="input-wrap">
                        <input
                          placeholder="Email"
                          onChange={handleChange}
                          type="email"
                          className="input-field"
                          autoComplete="off"
                          required
                          name="email"
                        />
                        {/* <label>Email</label> */}
                      </div>

                      <div className="input-wrap">
                        <input
                          placeholder="Password"
                          onChange={handleChange}
                          type="text"
                          name="password"
                          minLength="8"
                          className="input-field"
                          autoComplete="off"
                          required
                        />
                      </div>
                      {!showSuccessSnack && !showErrorSnack ? (
                        <>
                          <Box display={"flex"} gap={"30px"}>
                            <Button
                              type="submit"
                              value="Sign Up"
                              className="sign-btn"
                              sx={{
                                background: "#4caf4f",
                                color: "white",
                                marginBottom: "10px",
                              }}
                            >
                              Sign Up
                            </Button>
                            {isLoading ? (
                              <CircularProgress
                                sx={{
                                  width: "60%",
                                  margin: "auto",
                                  marginTop: "10px",
                                }}
                              />
                            ) : (
                              ""
                            )}
                          </Box>
                        </>
                      ) : showSuccessSnack ? (
                        <Typography
                          variant="body1"
                          mb={3}
                          fontWeight={600}
                          color={"green"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          Signup Successful
                        </Typography>
                      ) : (
                        <Typography
                          variant="body1"
                          mb={3}
                          fontWeight={600}
                          color={"crimson"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          Signup Failed
                        </Typography>
                      )}
                      <p className="text">
                        By signing up, I agree to the
                        <a href="#"> Terms of Services</a> and
                        <a href="#"> Privacy Policy</a>
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
            <Snackbar
              open={showSuccessSnack || showErrorSnack}
              autoHideDuration={3100}
              onClose={() => handleClose()}
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
              <Alert
                onClose={() => handleClose()}
                severity={"info"}
                sx={{ width: "100%" }}
              >
                {snackMsg}
              </Alert>
            </Snackbar>

            <div
              className="carousell"
            >
              <div className="images-wrapper">
                <img
                  src={auth1}
                  className={`image img-1 ${activeSlide === 1 ? "show" : ""}`}
                  alt=""
                />
              </div>

              <div className="text-slider">
                <div className="text-wrap">
                  <div style={{ color: "black" }} className="text-group">
                    {activeSlide === 1 && (
                      <>
                        <Typography color={"black"} variant="h6">
                          A better way for a learning and growing
                        </Typography>
                      </>
                    )}
                    {activeSlide === 2 && (
                      <>
                        <Typography color={"#fff"} variant="h6">
                          The Future of Charity
                        </Typography>
                      </>
                    )}
                    {activeSlide === 3 && (
                      <>
                        <Typography color={"#fff"} variant="h6">
                          Easy and simple Interface
                        </Typography>
                      </>
                    )}
                  </div>
                </div>

                <div className="bullets">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <span
                      key={index + 1}
                      className={activeSlide === index + 1 ? "active" : ""}
                      onClick={() => handleBulletClick(index + 1)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Admin;
