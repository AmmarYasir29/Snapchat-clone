import React from "react";
import { Avatar } from "@material-ui/core";
import "../styles/chat.css";
import StopIcon from "@material-ui/icons/Stop";
import TimeAgo from "react-timeago";
import { db } from "../firebase";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { selectImage } from "../store/appSlice";

export const Chat = (props: any) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const open = () => {
    dispatch(selectImage(props.imageUrl));
    history.push("/chats/view");
  };

  return (
    <div className="chat" onClick={open}>
      <Avatar src={props.profilePic} className="chat__pic" />
      <div className="chat__info">
        <h4>{props.username}</h4>
        <p>
          tap to view- <TimeAgo date={props.timestamp.toString()} />
        </p>
      </div>
      {!props.read && <StopIcon className="chat__readIcon" />}
    </div>
  );
};
