import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginService from './LoginService';

export default function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestData = { name, password };

    LoginService.getLoginbyid(requestData)
      .then((response) => {
        console.log(response.data);
        navigate('/portal');
      })
      .catch((error) => {
        console.log(error);
        // Handle error
      });
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
         <div className="form-group">
           <label htmlFor="name">Name:</label>
           <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Login</button>
      </form>
      <br></br>
      <a href="/"><b>Logout</b></a> 
    </div>
  );
}
