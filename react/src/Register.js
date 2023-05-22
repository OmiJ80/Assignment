import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import RegistrationService from './RegisterService';
import 'bootstrap/dist/css/bootstrap.min.css';
const Register = () => {
    const [username, setUsername] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const navigate=useNavigate(); 
    
 const handleSubmit =(e) =>{
    console.log(username);
    const r={username,email,password};
    RegistrationService.createLogin(r).then((response)=>{
        console.log(response.data)
    })
    navigate("/login")
 }

 
    return (
        <div>
        <h1>Registration Form</h1>
        <form>
          <div className="form-group">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary"onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
        <div className="mt-3">
          <p>If you are already registered, please <a href="/login">login</a> to access your account.</p>
          <p>Click here for Admin login <a href="/admin"><b>Admin Login</b></a> to access your account.</p>
        </div>
      </div>
      
    )
 
}
export default  Register;