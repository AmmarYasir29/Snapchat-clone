import React, { useEffect } from "react";
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

const Preview = () => {
  const cameraImg = useSelector(selectCapture);
  const history = useHistory();
  const dispatch = useDispatch();
  const closeHandle = () => {
    dispatch(resetImg());
  };
  useEffect(() => {
    if (!cameraImg) history.replace("/");
  }, [cameraImg, history]);
  return (
    <div className="preview">
      <img src={cameraImg} alt="" />
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
    </div>
  );
};

export default Preview;
