import React, { useEffect } from "react";
import WebcamCapture from "./components/WebcamCapture";
import "./styles/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Preview from "./components/Preview";
import Chats from "./components/Chats";
import ChatView from "./components/ChatView";
import { login, selectUser } from "./store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import LoginPage from "./components/LoginPage";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(
          login({
            username: user.displayName,
            profilePic: user.photoURL,
            id: user.uid,
          })
        );
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginPage />
        ) : (
          <Switch>
            <Route path="/chats/view">
              <ChatView />
            </Route>
            <Route path="/chats">
              <Chats />
            </Route>
            <Route exact path="/">
              <WebcamCapture />
            </Route>
            <Route exact path="/preview">
              <Preview />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
