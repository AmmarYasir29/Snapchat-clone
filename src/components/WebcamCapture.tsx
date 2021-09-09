import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import "../styles/webcamCapture.css";
import { useDispatch } from "react-redux";
import { setImg } from "../store/captureSlice";
import { useHistory } from "react-router-dom";

const WebcamCapture = () => {
  const webcamRef = useRef<any>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setImg(imageSrc));
    history.push("/preview");
  }, [webcamRef]);
  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />
      <RadioButtonUncheckedIcon className="capture" onClick={capture} />
    </div>
  );
};

export default WebcamCapture;
