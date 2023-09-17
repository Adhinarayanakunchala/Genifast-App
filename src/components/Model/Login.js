import React, { useState} from 'react';
import './Login.css';
import Loginoffice from '../../assets/images/loginoffice.jpeg';
import { FaTimes } from 'react-icons/fa';
import './Login.css';
import { useAuth } from '../../context/AuthContext';
import { NavLink} from 'react-router-dom';
import axios from 'axios';
const Login =()=>{
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [message,setMessage]=useState(null);
  const [status, setStatus] = useState(0);
  const {isLogin,setIsLogin ,modal, setModal,login} = useAuth();
 

  const toggleModal =()=>{
    setModal(prev=>!prev);
  }
  const toggalePage=()=>{
    setModal(false);
  }

  const handleLoginSuccess = () =>{
    setIsLogin(true);
   
  }
  

  const SubmitHandler = async (e) => {
    
    e.preventDefault();
    try {
      const response = await axios.post(`http://3.7.83.114:3000/api/users/login`, {
        mobileNumber: mobileNumber,
      });

      const data = response.data;
      console.log(data);
      if (data.Status === 1) {
        setStatus(1);
        setMessage('OTP sent Successfully');
      } else {
        setMessage('Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending mobile number:', error);
      setMessage('Error sending mobile number');
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://3.7.83.114:3000/api/users/login/verifyotp`, {
        mobileNumber: mobileNumber,
        OTP: otp,
      });
      
      const data = response.data;
      if (data.Status === 1) {
        localStorage.setItem('Token', data.Token)
        console.log(data);
        console.log(localStorage)
        setStatus(1);
        setMessage('Login Successful');
        handleLoginSuccess();
        toggalePage();
      } else {
        console.error('Login failed');
        setMessage('Login failed');
      }

    } catch (error) {
      console.error('Error sending OTP:', error);
      setMessage('Error sending OTP');
    }
  };
    return (
      <>
       {modal && (
         <div className="modal">
        <div  onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <img src={Loginoffice} alt='Login image'/>
          <div className='Login'>
          <form >
          <h2>Login</h2>
            {
            status === 0 ? ( 
           <>
              <input type="text" value={mobileNumber} placeholder=' mobile '
              onChange={(e) => setMobileNumber(e.target.value)}/>
              <button onClick={SubmitHandler}>Send OTP</button><hr></hr>
              <NavLink to='#'>Create Your Account</NavLink>
            </>):( <>
              <input type="text" value={mobileNumber} disabled placeholder=' mobile '
              onChange={(e) => setMobileNumber(e.target.value)}/>
              <input type="text" value={otp} placeholder=' OTP '
              onChange={(e) => setOtp(e.target.value)}/>
              <p>{message }</p>
              <button onClick={(e)=>{handleOtpSubmit(e);login("Token")}}>Login</button><hr></hr>
              <NavLink to='#'>Create Your Account</NavLink>
            </>)
            }
            </form>
          </div>
          <button className="closebutton" onClick={toggleModal} >
            <FaTimes/>
          </button>
        </div>
      </div>)}
    </>
  );
  }
export default Login;
