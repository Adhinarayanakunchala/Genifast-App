import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { FaTimes } from "react-icons/fa";
import './Logout.css';
import { useNavigate } from "react-router-dom";
const LogOut =()=>{
  const Navigate=useNavigate()

  const {logModel,setLogModel,setIsLogin,setTokens}=useAuth();
  

  const toggleModal =()=>{
    setLogModel(!logModel);
  }
  const toggalePage=()=>{
    setLogModel(false);
  }
  const logout =()=>{
    localStorage.removeItem('Token');
    setTokens(null);
    setIsLogin(false);
    toggalePage();
    Navigate('/')
  };
return(
  <>

  <div className='logmodal'>
            <div onClick={toggleModal} className='overlay'></div>
                <div className='content'>
                <h2 id='logo'>Log Out</h2>
                <div className='addcontent'>
            <span>Are you Sure you wnat to logout?</span>
            </div>
            <div className='bottom'>
            <button  className="close" onClick={toggleModal}>Cancel</button>
            <button  className="logout" onClick={logout}>Logout</button>
            </div>
            <button className="close-modal" onClick={toggleModal} >
            <FaTimes/>
          </button>
                </div>  
            </div>

    </>
)
};
export default LogOut;