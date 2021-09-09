import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { resetImg, selectCapture } from "../store/captureSlice";
import CloseIcon from "@material-ui/icons/Close";
import "../styles/preview.css";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import CreateIcon from "@material-ui/icons/Create";
import NoteIcon from "@material-ui/icons/Note";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CropIcon from "@material-ui/icons/Crop";
import TimerIcon from "@material-ui/icons/Timer";
import SendIcon from "@material-ui/icons/Send";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "../firebase";
import firebase from "firebase";
import { selectUser } from "../store/appSlice";

const Preview = () => {
  const cameraImg = useSelector(selectCapture);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const closeHandle = () => {
    dispatch(resetImg());
  };
  //must have referance in firebase
  const imgRef = useRef(null);

  const sendImg = () => {
    const id = uuidv4();
    //jsut upload file to storge of firebase with name of ref...
    const uploadTask = storage
      .ref(`posts/${id}`)
      .putString(cameraImg, "data_url");
    //when finish upload (state changed)
    uploadTask.on(
      "state_changed",
      null,
      error => console.log("The error when upload to storage  " + error),
      () => {
        //save the url (fiel that complete upload) to db
        storage
          .ref("posts")
          .child(id)
          .getDownloadURL()
          .then(url => {
            db.collection("images").add({
              imageUrl: url,
              username: user.username,
              read: false,
              profilePic: user.profilePic,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              email: user.email,
              // number: user.phoneNumber,
              // refreshToken: user.stsTokenManager.refreshToken,
              // accessToken: user.stsTokenManager.accessToken,
            });
            history.replace("/chats");
          });
      }
    );
  };
  useEffect(() => {
    if (!cameraImg) history.replace("/");
  }, [cameraImg, history]);
  return (
    <div className="preview">
      <img ref={imgRef} src={cameraImg} alt="" />
      <CloseIcon className="closeIcon" onClick={closeHandle} />
      <div className="preview_icon">
        <TextFieldsIcon className="icon" />
        <CreateIcon className="icon" />
        <NoteIcon className="icon" />
        <MusicNoteIcon className="icon" />
        <AttachFileIcon className="icon" />
        <CropIcon className="icon" />
        <TimerIcon className="icon" />
      </div>
      <div className="onSend" onClick={sendImg}>
        <h2>Send Now</h2>
        <SendIcon className="sendIcon" />
      </div>
    </div>
  );
};

export default Preview;
