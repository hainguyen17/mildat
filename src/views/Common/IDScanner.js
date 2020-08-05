import React from 'react';
import Webcam from 'react-webcam';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeId, resetId } from '../../actions/appData';
import Button from './Button';
import CheckAnimation from './CheckAnimation';
import './Webcam.css';

const IDScanner = () => {
  const webcamRef = React.useRef(null);
  const { idSrc } = useSelector((state) => state.appData);
  const dispatch = useDispatch();

  const history = useHistory();

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(changeId(imageSrc));
  };

  const handleNext = () => {
    history.push('/review-screen');
  };

  const handleRecapture = () => {
    dispatch(resetId());
  };

  return (
    <>
      {idSrc && (
        <>
          <CheckAnimation height="62px" width="62px">
            <img className="frame" src={idSrc} alt="webcam-frame" />
          </CheckAnimation>
          <div className="webcam-button-container">
            <Button
              onClick={handleRecapture}
              title="CHỤP LẠI"
              small
              transparent
            />
            <Button onClick={handleNext} title="TIẾP" small />
          </div>
        </>
      )}
      <div style={idSrc ? { display: 'none' } : {}}>
        <Webcam
          className="frame"
          screenshotQuality={1}
          mirrored
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/png"
          height={360}
        />
        <Button onClick={capture} title="CHỤP ẢNH" small />
      </div>
    </>
  );
};
// https://www.npmjs.com/package/react-webcam

export default IDScanner;