import { useContext, useState, useRef, useEffect } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useNavigate, redirect } from "react-router-dom";

import axios from "axios";


//Import icon
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import "./auth.scss";


export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const { dispatch, error, isFetching } = useContext(AuthContext);

  const history = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const avatarRef = "/images/default-ava.png";

  const handleLogin = (e) => {
    e.preventDefault();
      login({ username, password }, dispatch);
      redirect("/home")

  };


  const handleFinish = async (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    setAvatar(avatarRef);
    if(email!==""){
      try {
        await axios.post("/api/auth/register", { email,username, password, avatar });
        redirect("/home")
      } catch (err) {
      }
    }
  };

  //Animation
  useEffect(() => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
    });
  });

  return (
    <>
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <div className="logo-ami">
              <img src="/assets/logo1.svg" alt="" />
              {/*<div className="logo-title">*/}
              {/*  PACARD*/}
              {/*</div>*/}
            </div>
            <form className="sign-in-form">
              <h2 className="title">????NG NH???P</h2>
              <div className="input-field">
                <AccountCircleIcon className="icon"/>
                <input type="text" placeholder="T??n ng?????i d??ng" onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="input-field">
                <LockIcon className="icon"/>
                <input type="password" placeholder="M???t kh???u" onChange={(e) => setPassword(e.target.value)} />

              </div>
              <input type="submit" value="????ng nh???p" className="btn solid" onClick={handleLogin} />
                {error &&  <Stack sx={{ width: '45%' }}>
                  <Alert severity="error">Something Wrong?!</Alert>
                </Stack>}
                {isFetching && <Box sx={{ width: '50%' }}>
                  <LinearProgress />
                </Box>}
            </form>
            <form className="sign-up-form">
            <h2 className="title">????NG K??</h2>
            <div className="input-field">
              <EmailIcon className="icon"/>
              <input type="email"  placeholder="Email" ref={emailRef} />
            </div>
            <div className="input-field">
              <AccountCircleIcon className="icon"/>
              <input type="text" placeholder="T??n ng?????i d??ng" ref={usernameRef} />
            </div>
            <div className="input-field">
              <LockIcon className="icon"/>
              <input type="password" placeholder="M???t kh???u" ref={passwordRef} />

            </div>
            <input type="submit" className="btn" value="????ng k??" onClick={handleFinish} />
          </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>B???n ch??a c?? t??i kho???n?</h3>
              <p>
                V???y th?? c??n ch???n ch??? g?? n???a m?? kh??ng ????ng k?? ngay ????? c?? nh???ng tr???i nghi???m tuy???t v???i c??ng MEMOCARD
              </p>
                <button className="btn transparent" id="sign-up-btn" >
                  ????ng k?? ngay!
                </button>

            </div>
            <img src="/assets/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
            <h3>B???n ???? c?? t??i kho???n?</h3>
            <p>
                ????ng nh???p ngay ????? tr???i nghi???m nh???ng t??nh n??ng tuy???t v???i c???a MEMOCARD
            </p>
                <button className="btn transparent" id="sign-in-btn">
                    ????ng nh???p ngay!
                </button>
            </div>
            <img src="/assets/register.svg" className="image" alt=""/>
          </div>
        </div>
      </div>
    </>
  );
}
