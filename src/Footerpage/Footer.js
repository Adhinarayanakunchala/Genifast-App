import React from "react";
import Logo from "../assets/images/Genifast.png";
import {IoIosCall} from 'react-icons/io';
import {HiOutlineMail} from 'react-icons/hi';
import './Footer.css';
import {NavLink} from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className="Container">
                <div className="keka">
                    <img src={Logo} alt="Medicine image"></img>
                    <spans>#105, Plot No A-1, GBS Enclave,
                        Moti Valley, Trimulgherry,
                        Secunderabad - 500015
                        Hyderabad, Telangana, India</spans>
                </div>

                <div>
                <h3>Need Help</h3><br/>
                <h3><IoIosCall/> 8886-6602-01</h3>
                <span>Monday – Friday: 9:00-20:00
                 Saturday: 11:00 – 15:00</span>
                 <hr></hr>
                 <h4><HiOutlineMail/> info@genifast.in</h4>
                </div>

                <div>
                    <h3>Information</h3><br/>
                    <li><NavLink to="#">About us</NavLink></li>
                    <li><NavLink to="#">Shipping Policy</NavLink></li>
                    <li><NavLink to="#">Privacy policy</NavLink></li>
                    <li><NavLink to="#">Return Policy</NavLink></li>
                    <li><NavLink to="#">Terms and conditions</NavLink></li>
                </div>
                <div>
                    <h3>Account</h3><br/>
                    <li><NavLink to="#">My Account</NavLink></li>
                    <li><NavLink to="#">My Orders</NavLink></li>
                    <li><NavLink to="#">Wishlist</NavLink></li>
                </div>
            </div>
            <div className="Container2">
                <p>Genifast Is A Product Of Vaishanvi Biotech</p>
                <span>Copyright © 2021 Genifast All Right Reserved</span>
            </div>
        </>
    )
};
export default Footer;