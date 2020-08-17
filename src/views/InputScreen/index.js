import React from 'react';
import { useHistory } from 'react-router-dom';
// import Button from '../Common/Button';
import Label from '../Common/Label';
import Form from '../Common/Form';
import './index.css';

const InputScreen = () => {
  const history = useHistory();

  // const handleClick = () => {
  //   history.push('/face-screen');
  // };

  return (
    <div className="container">            
      <Label type="label1" title="Bước 1: Nhập thông tin" />
      <Label title="Vui lòng nhập các thông tin dưới đây" type="label2" />
      <Form />
      {/* <Button onClick={handleClick} title="Tiếp" small/> */}
    </div>
  );
};

export default InputScreen;
