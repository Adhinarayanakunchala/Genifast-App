import React from 'react';
import EmptyCart from "../../assets/images/emptycart.webp";
import { NavLink } from 'react-router-dom';

const WhishList =()=>{
    return(
     <div className='cart-container'>
    <div className='cart-model'> 
    <div className='cart-content'>
     <h3>WhishList</h3>
     <img src={EmptyCart} alt='Cart.'/>
     <h2>Your Cart is Empty!</h2>
     <span>Add items to it now</span>
     <NavLink to='/shop'><button type='submit'>Shop now</button></NavLink>
    </div>
    </div>
    </div>
    )
};
export default WhishList;