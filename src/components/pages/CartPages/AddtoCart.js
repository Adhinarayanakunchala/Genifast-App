import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { toast } from 'react-toastify';
import './AddToCart.css';
import { FaTimes } from 'react-icons/fa';
import Login from '../../Model/Login';
import { useNavigate } from 'react-router-dom';

const AddtoCart =({productId})=>{

const [quantity,setQuantity]=useState(null);
const [isItemAdded,setIsItemAdded]=useState(false);
const {isLogin,setISLogin,addToCart,cartModel,setCartModel}=useAuth();
const navigate =useNavigate();

const toggleModal = (e) => {
  e.stopPropagation();
  setCartModel(prev => !prev);
}
const handleAddToCart =(e)=>{
    e.preventDefault();
    const token =()=> {
        return localStorage.getItem("Token");
    }
    // console.log(token())
    const config = {
        headers: {
            'Authorization': `Bearer ${token()}`
        }
    }
    const data = {
        productId: productId,
        quantity: quantity
    };
axios.post(`http://3.7.83.114:3000/api/cart/addcart`,data,config)
.then((response)=>{
    console.log(response);
    toast.success('Item added succesfully');
    addToCart({ product: { id: productId }, quantity });
      setIsItemAdded(true);
    // toggalePage();
})
.catch((error)=>{
    console.log(error);
    toast.error('Error adding item to cart');
});
}
useEffect(() => {
    if (isItemAdded) {
      toggleModal();
    }
  }, [isItemAdded]);


  const toggleLogin =(e)=>{

    setISLogin(!isLogin);
    navigate("/");
  }
return(
    <>
    {
      isLogin?(<div className='modal'>
        <div></div>
      <div onClick={toggleModal} className='overlayar'></div>
          <div className='content'>
          <div className='header'>Add to Cart</div>
          <div className='addcontent'>
          <label>Quantity</label>
      <input type="text" value={quantity} placeholder=' Enter Quantity'
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      </div>
      <div className='bottom'>
      <button  className="addcart" onClick={(e)=>{handleAddToCart(e)}}>Add To Cart</button>
      <button  className="close" onClick={toggleModal}>Cancel</button>
      </div>
      <button className="close-modal" onClick={toggleModal} >
      <FaTimes/>
    </button>
          </div>
  </div> ):(<Login/>)
    }
    
    </>
)
};
export default AddtoCart;