import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './Form.css';
import './Button.css';

const initialState = {
  name: "",
  dob: undefined,
  isMale: true,
  address: "",
  company: "",
  jobTitle: "",
};

const Form = () => {
  const history = useHistory();

  const state = useRef(initialState);
  
  const handleChange = (event) => {
    if (event.target.name === 'gender') {
      event.target.id === 'male' ? state.current['isMale'] = true : state.current['isMale'] = false;
    } else {
      state.current[event.target.name] = event.target.value;
    }
    
  };
  
  const handleSubmit = (event) => {
    // console.log(state);
    history.push('/face-screen');
  }
  

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="label">
          <div className="input-name">Tên: (*)</div>
            <input type="text" name="name" onChange={handleChange} className="input-field" placeholder="Họ và Tên" required/>
        </label>
        
      <br/>  
        <label className="label">
          <div className="input-name">Ngày sinh: (*)</div>
          <input type="date" name="dob" onChange={handleChange} className="input-field" required/>
        </label>
      <br/>
              
        <label className="label">
          <div className="input-name">Giới tính: (*)</div>
          <input type="radio" id="male" name="gender" value="male" onChange={handleChange} checked></input>
          <label for="male" style={{marginRight: '10px', fontWeight: '400'}}>Nam</label>
          <input type="radio" id="female" name="gender" value="female" onChange={handleChange}></input>
          <label for="female" style={{fontWeight: '400'}}>Nữ</label>
        </label>
        
        <br/>
        <label className="label">
          <div className="input-name">Địa chỉ:</div>
            <input type="text" onChange={handleChange} className="input-field" placeholder="Địa chỉ nhà"/>
        </label>

        <br/>
        <label className="label">
          <div className="input-name">Công ty:</div>
            <input type="text" onChange={handleChange} className="input-field" placeholder="Tên công ty"/>
        </label>

        <br/>
        <label className="label">
          <div className="input-name">Chức vụ:</div>
            <input type="text" onChange={handleChange} className="input-field" placeholder="Chức vụ tại công ty"/>
        </label>

        <br/>
        <input type="submit" className="small-button" value="TIẾP" style={{marginLeft: 'calc((100% - 20vw)/2)', marginTop: '30px'}}/>

      </form>
    </div>
    )
}

export default Form;