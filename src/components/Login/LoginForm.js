import React, { useRef, useEffect, useState, useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import {
  LoginContainer,
  LoginWrap,
  LoginFormWrap,
  MailorMobileInput,
  PassInput,
  LoginInputs,
  LoginButton,
  LoginH,
  LoginP,
  LoginTextWrap,
} from "./LoginElements";
import LoginBG from "../../images/LoginBG.png";
import axios from "../../api/axios";

//need Login Url from backend
const LOGIN_URL = "";

const LoginForm = () => {
  const { setAuth } = useContext(AuthContext);
  const mobileRef = useRef();
  const errRef = useRef();
  const [mobileNum, setMobileNum] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    mobileRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [mobileNum, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ mobileNum, pwd }),
        {
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ mobileNum, pwd, roles, accessToken });
      setMobileNum("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      } 
      errRef.current.focus()
    }
  };

  const navigate = useNavigate();
  return (
    <>
      {success ? (
        navigate("/overview")
      ) : (
        <LoginContainer>
          <LoginWrap src={LoginBG} />
          <LoginFormWrap>
            <LoginTextWrap>
              <LoginH>ADMIN</LoginH>
              <LoginP>
                Please return to the previous screen if you are not an
                authorized administrator
                <br /> Otherwise , Input your Details .
              </LoginP>
            </LoginTextWrap>
            <div className="errdiv">
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
            </div>
            <LoginInputs onSubmit={handleSubmit} className="form-floating ">
              <MailorMobileInput
                ref={mobileRef}
                onChange={(e) => setMobileNum(e.target.value)}
                style={{ height: "70px", fontSize: "24px",  }}
                className="form-control"
                id="mobileNum"
                type="tel"
                autoComplete="off"
                placeholder="*"
                value={mobileNum}
                required
              ></MailorMobileInput>
              <label
                htmlFor="mobileNum"
                style={{ fontSize: 20, color: "grey" }}
                for="mobileNum"
              >
                Mobile Number
              </label>
              <br />
              <div class="form-floating">
                <PassInput
                  onChange={(e) => setPwd(e.target.value)}
                  style={{ height: "70px", paddingBottom: "-5px" }}
                  type="password"
                  value={pwd}
                  className="form-control"
                  placeholder="***"
                  id="password"
                />
                <label
                  htmlFor="password"
                  style={{ fontSize: 20, color: "grey" , }}
                  for="password"
                >
                  Password
                </label>
              </div>
              <LoginButton>LOGIN</LoginButton>
            </LoginInputs>
          </LoginFormWrap>
        </LoginContainer>
      )}
    </>
  );
};

export default LoginForm;
