import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CiHeart } from 'react-icons/ci';
import { GrFormSearch } from 'react-icons/gr';
import { TiShoppingCart } from 'react-icons/ti';
import {MdOutlineArrowBackIos} from 'react-icons/md';
import {MdOutlineArrowForwardIos} from 'react-icons/md';
import './ContentSlider.css';
import axios from 'axios';
import { useAuth } from '../../../context/AuthContext';
import Login from '../../Model/Login';
const ContentSlider = () => {

    const [expiryProducts, setExpiryProducts] = useState([]); 
    const {productId,setProductId,cartModel,setCartModel}=useAuth();

    const {
      isLogin,
      setIsLogin,
      modal,
      setModal } = useAuth();
  const handleLogin = () => {
      console.log(isLogin)
      if (!isLogin) { toggleModal() }
      // else if (type == 1) {

      //     Navigate("/whislist")
      // }
      // else if (type == 2) {

      //     Navigate("/cart")
      // }
     
  }
  
  const toggleModal = () => {
      setModal(!modal);
  }

  const togglePage =()=>{
    setCartModel(!cartModel);
  }
   
    useEffect(() => {
        axios.get(`https://xapi.genifast.in/api/users/webhomepage/1`)
            .then((response) => {
                const { data } = response;
                const { ExpiryProducts } = data;
                setExpiryProducts(ExpiryProducts);
                console.log(data);
            })
            .catch((error) => {
                console.log("Error fetching data:", error);
            });
    }, []);
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 5,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  initialSlide:4
                }
              },  
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide:2,
              infinite:false
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide:1
            }
          },
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    return (
        <>
        {modal && <Login />}
        <div className="slider-container">
        <Slider {...settings}>
                {
                    expiryProducts.map((element, index) => {
                        return (
                          <div key={index} className="cards">
                          <img src={element.imageUrl} alt={element.productName}/>
                          <div className="productnames">{element.productName}
                              <p>
                                  {element.url}<br />
                                  Company: {element.manufacturedBy}<br />
                                  Packing Size: {element.packing}<br />
                                  Expiry: {element.expiry}
                                  <br />
                                  <button type="submit" onClick={()=>{togglePage();handleLogin()}}>Add to Cort</button>
                              </p>
                          </div>
                                <div className="panel">
                                <button type='submit' className="icon" onClick={(e) => { e.preventDefault(); handleLogin(1) }}><CiHeart /></button>
                                <button type='submit' className="icon" onClick={(e) => { e.preventDefault();}}><GrFormSearch /></button>
                                <button type='submit' className="icon" onClick={(e) => { e.preventDefault(); handleLogin() ;togglePage()}}><TiShoppingCart /></button>
                                
                            </div>
                            </div>
                        )
                    })
                }
        </Slider>
        </div>
        </>
    );
};
export default ContentSlider


const NextArrow = (props) => (
    <div className={props.className} onClick={props.onClick}>
      
      <button className='btn'> <MdOutlineArrowForwardIos/></button>
     
    </div>
);

const PrevArrow = (props) => (
    <div className={props.className} onClick={props.onClick}>
   <button className='btn'>< MdOutlineArrowBackIos /> </button>
    </div>
);