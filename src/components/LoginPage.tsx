import React from "react";
import { Button } from "@material-ui/core";
import "../styles/LoginPage.css";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../store/appSlice";

const LoginPage = () => {
  const dispatch = useDispatch();

  const logIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        dispatch(
          login({
            username: user.displayName,
            profilePic: user.photoURL,
            id: user.uid,
            email: user.email,
            number: user.phoneNumber,
            // refreshToken: user.stsTokenManager.refreshToken,
            // accessToken: user.stsTokenManager.accessToken,
          })
        );
      })
      .catch(error => alert(error.message));
  };
  return (
    <div className="login">
      <img
        src="https://uploads-ssl.webflow.com/5dbfa12e9bf13e036e5438a3/5de4ecded41c9b591ed3bac8_Snapchat-logo.png"
        alt=""
      />
      <Button variant="outlined" onClick={logIn}>
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
