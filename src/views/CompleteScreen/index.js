import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Common/Button';
import Label from '../Common/Label';
import CheckButton from '../Common/CheckButton'
import './index.css';

const CompleteScreen = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/main-screen');
  };

  return (
    <div className="container">
      <CheckButton />
      <Label title="Hồ sơ đã được lưu lại" type="label1" />
      <Label
        title="Thông tin đã lưu có thể được truy cập lại trong KHO DỮ LIỆU"
        type="label2"
      />
      
      <Button onClick={handleClick} title="VỀ TRANG CHỦ" />
      <Button title="KHO DỮ LIỆU" />
    </div>
  );
};

export default CompleteScreen;
