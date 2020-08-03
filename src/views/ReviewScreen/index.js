import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../Common/Button';
import Label from '../Common/Label';
import './index.css';

const ReviewScreen = () => {
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
    history.push('/complete-screen');
  };

  return (
    <div className="container">
      <Label title="Bước 4: Kiểm tra thông tin" type="label1" />
      <Label
        className="subtitle"
        title="Vui lòng kiểm tra kĩ thông tin trước khi lưu"
        type="label2"
      />
      <div className="review-img-container">
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
