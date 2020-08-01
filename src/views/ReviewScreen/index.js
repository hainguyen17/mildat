import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Common/Button';
import Label from '../Common/Label';
import Frame from '../Common/Frame';
import './index.css';

const ReviewScreen = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/face-screen/face-confirm');
  };

  return (
    <div className="container">
      <Label title="Bước 4: Kiểm tra thông tin" type="label1" />
      <Label
        title="Vui lòng kiểm tra kĩ thông tin trước khi lưu"
        type="label2"
      />
      <div className="review-img-container">
        <div className="review-img"></div>
        <div className="review-img"></div>
        <div className="review-img"></div>
      </div>
      <Button onClick={handleClick} title="LƯU" />
    </div>
  );
};

export default ReviewScreen;
