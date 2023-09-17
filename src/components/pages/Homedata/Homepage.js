import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import './Home.css';
import {CiHeart} from 'react-icons/ci';
import {GrFormSearch} from 'react-icons/gr';
import {TiShoppingCart} from 'react-icons/ti';
import ContentSlider from "./ContentSlider";
import Slide from "../Slide";
import { useAuth } from "../../../context/AuthContext";
import Login from "../../Model/Login";
const Homepage = () => {
    const [categories, setCategories] = useState([]);
    const [dealsoftheDay, setDealsoftheDay] = useState([]);

    const {isLogin,modal,setModal,productId,setProductId,cartModel,setCartModel}=useAuth();

    const handleLogin = () => {
        console.log(isLogin)
        if (!isLogin) { toggleModal() }
        // else if (type == 1) {

        //     Navigate("/whislist")
        // }
    }
    const tooglePage = () =>{
       setCartModel(!cartModel);
    }
    const toggleModal = () => {
        setModal(!modal);
    }

    useEffect(() => {
        axios.get(`https://xapi.genifast.in/api/users/webhomepage/1`)
            .then((response) => {
                const { data } = response;
                const { categories, DealsoftheDay } = data;

                setCategories(categories);
                setDealsoftheDay(DealsoftheDay);
                console.log(data);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
            });
    }, []);

    const filteredArr = categories.slice(0, 5);

    return (
        <>
         {modal && <Login/>}
        <Slide/>
            <h2>Checkout the most popular categories</h2>
            <div className="nav-container">
                <NavLink className="viewall" to='/image'>View All</NavLink>
            </div>
            <div className="popular-categories">
                {
                    filteredArr.map((element, index) =>{
                        return(
                        <div key={index} className="image-item">
                            <img className="popular" src={element.imageUrl} alt={element.categoryName} />
                            <div className="category-name">{element.categoryName}</div>
                        </div>
                    )})
                }
            </div>
            <div>
                <h2>Deals of the Day</h2>
                <div className="container">
                {
                    dealsoftheDay.map((element, index) => {
                        return(
                            
                        <div key={index} className="card">
                            <img src={element.imageUrl} alt={element.productName} />
                            <div className="productname">{element.productName}
                            <p>
                                {element.url}<br />
                                Company: {element.manufacturedBy}<br />
                                Packing Size: {element.packing}<br />
                                Expiry: {element.expiry}
                               <br/>
                                <button type="submit" onClick={()=>{handleLogin(); tooglePage(); }}>Add to Cort</button>
                            </p>
                        </div>
                        <div className="panel">
                        <button type='submit' className="icon" onClick={(e) => { e.preventDefault(); handleLogin(1) }}><CiHeart /></button>
                                        <button type='submit' className="icon" onClick={(e) => { e.preventDefault(); }}><GrFormSearch /></button>
                                        <button type='submit' className="icon" onClick={(e) => { e.preventDefault(); handleLogin();tooglePage(productId)}}><TiShoppingCart /></button>
                            </div>
                        </div>
                      )})
                }
                </div>
            </div>
<br/>
                <h2>Near Expiry Products</h2>
                <ContentSlider/>
        </>
    );
};

export default Homepage;
