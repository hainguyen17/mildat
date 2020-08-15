import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../Common/Button';
import Label from '../Common/Label';
import './index.css';
import { submitData } from '../../actions/appData';

const ReviewScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { imgSrc, fingerprintSrc, idSrc } = useSelector(
    (state) => state.appData,
  );

  const { image, fingerprint, id } = {
    image: imgSrc || `${process.env.PUBLIC_URL}/person.svg`,
    fingerprint: fingerprintSrc || `${process.env.PUBLIC_URL}/ColoredFrame.svg`,
    id: idSrc || `${process.env.PUBLIC_URL}/id.svg`,
  };
  
  const handleClick = () => {
    dispatch(submitData());
    history.push('/complete-screen');
  };

  return (
    <div className="container">
      <Label title="Bước 5: Kiểm tra thông tin" type="label1" />
      <Label
        className="subtitle"
        title="Vui lòng kiểm tra kĩ thông tin trước khi lưu"
        type="label2"
      />
      <div className="frame review-img-container">
        <div className="review-img">
          <img className="image" src={image} alt="webcam-preview" />
        </div>
        <div className="review-img">
          <img className="image" src={fingerprint} alt="fingerprint-preview" />
        </div>
        <div className="review-img">
          <img className="image" src={id} alt="id-preview" />
        </div>
      </div>
      <Button onClick={handleClick} title="LƯU" small />
    </div>
  );
};

export default ReviewScreen;
