import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Register from "./Register";
import Login from "./Login";
import JobPortal from "./portal";
import Thanks from "./Thanks";
import Adminlogin from "./adminlogin";
import View from "./view"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>




          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portal" element={<JobPortal/>}/>
          <Route path="/Thanks" element={<Thanks/>}/>
          <Route path="/admin" element={<Adminlogin/>} />
          <Route path="/view" element={<View />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
