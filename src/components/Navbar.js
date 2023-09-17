import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Genifast from '../assets/images/Genifast.png';
import { FiHeart } from 'react-icons/fi';
import { BsCart3 } from 'react-icons/bs';
import { FaDropbox, FaRegUser } from 'react-icons/fa';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import Searchbar from "./pages/Searchbar";
import { useAuth } from "../context/AuthContext";
import Login from "./Model/Login";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-dropdown";
import { MdArrowDropDown } from "react-icons/md";

const options = [
    { label: 'My Orders', value: 'myOrders', link: '/my-orders', type: "link" },
    { label: 'Manage Address', value: 'manageAddress', link: '/manage-address', type: "link" },
    { label: 'Profile', value: 'profile', link: '/profile', type: "link" },
    { label: 'Wishlist', value: 'wishlist', link: '/wishlist', type: "link" },
    { label: 'Help', value: 'help', link: '/help', type: "link" },
    { label: 'Logout', value: 'logout', link: '/logout', type: "button" },
];
const Navbar = () => {
    const Navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const {
        isLogin,
        setIsLogin,
        modal,
        setModal, setLogModel } = useAuth();
    const handleLogin = (type) => {
        console.log(isLogin)
        if (!isLogin) { toggleModal() }
        else if (type == 1) {

            Navigate("/whislist")
        }
        else if (type == 2) {

            Navigate("/cart")
        }

    }
    const toggleModal = () => {
        setModal(!modal);
    }

    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);
    }
    const handleDropdownItemClik = (link, type) => {
        console.log(type)
        if (type == "link") {
            Navigate(link);
            setDropdownOpen(false);
        } else {
            console.log('11')
            setLogModel(true);
        }
    }
    return (
        <>

            {modal && <Login />}

            <div className="app">
                <div className="mainheader">
                    <div className="logo">
                        <img src={Genifast} alt="Medical Store"></img>
                    </div>
                    <select >
                        <option disabled value={1}>Warehose</option>
                        <option >Hyderabad</option>
                    </select>

                    <i><Searchbar /></i>

                    <div className="icons">
                        <button type="submit" className="bt" onClick={(e) => { e.preventDefault(); handleLogin(1) }} >
                            <FiHeart />
                        </button>
                        <button type="submit" className="bt" onClick={(e) => { e.preventDefault(); handleLogin(2) }}>
                            <BsCart3 />
                        </button>
                        {
                            isLogin ? (<div className="user-dropdown-menu"> <button type="button" className="bt" onClick={(e) => { e.preventDefault(); handleLogin(); handleDropdownToggle(); }}>
                                <FaRegUser /></button>
                                {dropdownOpen && (
                                    <div className="user-dropdown">
                                        {options.map((option) => (
                                            <div
                                                key={option.value.type}
                                                className="dropdown-item"
                                                onClick={() => handleDropdownItemClik(option.link, option.type)}
                                            >
                                                {option.label}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>) : (<button type="button" className="bt" onClick={(e) => { e.preventDefault(); handleLogin(); handleDropdownToggle(); }}>
                                <FaRegUser /></button>)
                        }

                        <button className="menubar" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? (<FaTimes />) : (<FaBars />)}
                        </button>
                    </div>
                </div>
                <div className="menu2">
                    <nav className={menuOpen ? "open" : ""}>
                        <ul className="menu-items">
                            <li><NavLink to="/" className="active">Home</NavLink></li>
                            <li><NavLink to="/shop">Shop by Category</NavLink></li>
                            <li><NavLink to="/about-us">About us</NavLink></li>
                            <li><NavLink to="contact">Contact us</NavLink></li>
                            <li><NavLink to="/blog">Blog</NavLink></li>
                        </ul>
                    </nav>
                    <p>Need help? 8886-6602-01</p>
                </div>
            </div>
        </>
    )
};
export default Navbar;
