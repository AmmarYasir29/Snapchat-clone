import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { selectSelectedImage, restImage } from "../store/appSlice";
import "../styles/chatView.css";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

const ChatView = () => {
  const selectedImg = useSelector(selectSelectedImage);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!selectedImg) history.replace("/");
  }, []);
  const exit = () => {
    dispatch(restImage());
    history.replace("/chats");
  };
  return (
    <div className="chatview">
      <CancelPresentationIcon className="exitIcon" onClick={exit} />
      <img className="chatview__img" src={selectedImg} alt="" onClick={exit} />
    </div>
  );
};

export default ChatView;
