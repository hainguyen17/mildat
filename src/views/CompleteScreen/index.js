import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../Common/Button';
import Label from '../Common/Label';
import CheckButton from '../Common/CheckButton';
import './index.css';

const CompleteScreen = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/main-screen');
  };

  return (
    <div className="container">
      <div className="subtitle">
        {/* <CheckButton /> */}
        <Label title="Hồ sơ đã được lưu lại" type="label1" />
        <Label
          title="Thông tin đã lưu có thể được truy cập lại trong KHO DỮ LIỆU"
          type="label2"
        />
      </div>
      <Button onClick={handleClick} title="VỀ TRANG CHỦ" small />
      <Button title="KHO DỮ LIỆU" small transparent />
    </div>
  );
};

export default CompleteScreen;
