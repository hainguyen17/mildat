import React from 'react';
import { useHistory } from 'react-router-dom';
import AppLogo from '../Common/AppLogo';
import Button from '../Common/Button';
import './index.css';

const MainScreen = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/input-screen');
  };

  return (
    <div className="background-img">
      <div className="app-logo">
        <AppLogo /> 
      </div>
      <div className="button-holder">
        <Button onClick={handleClick} title="Tạo Hồ Sơ" />
        <Button title="Kho Dữ Liệu" />
        <Button title="Sao Lưu Trên Hệ Thống" />
      </div>
    </div>
  );
};

export default MainScreen;
