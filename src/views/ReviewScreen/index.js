import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Common/Button';
import Label from '../Common/Label';
import './index.css';

const ReviewScreen = () => {
  const history = useHistory();

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
        <div className="review-img"></div>
        <div className="review-img"></div>
        <div className="review-img"></div>
      </div>
      <Button onClick={handleClick} title="LƯU" small />
    </div>
  );
};

export default ReviewScreen;
