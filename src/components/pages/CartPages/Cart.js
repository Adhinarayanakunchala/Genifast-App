import React, { useEffect, useState } from 'react';
import EmptyCart from '../../../assets/images/emptycart.webp';
import { NavLink } from 'react-router-dom';
import './Cart.css';
import axios from 'axios';
import { useAuth } from '../../../context/AuthContext';
const Cart = () => {
    const [cartItem, setCartItem] = useState([]);
    const {cartItems,addToCart}=useAuth();

    useEffect(() => {

        const token= ()=>{
            return localStorage.getItem("Token");
        }
        const config = {
            headers: {
                'Authorization': `Bearer ${token()}`
            }
        }
        axios.get(`http://3.7.83.114:3000/api/cart/mycart/1`,config)
            .then((response) => {
                const { data } = response;
                const { Cart } = data;
                const { cartItems } = Cart;
                setCartItem(cartItems);
            })
            .catch((error) => {
                console.log(error);
            })
    },[])

   
    return (
        <>
            <div className='cart-container'>
                {
                    cartItems.length !=0 ?( <div className='cart-model'>
                    <div className='cart-content'>
                        <h3>MyCart(1)</h3>
                        {
                            cartItem.map((element, index) => {
                                return (
                                    <div key={index}>
                                        <img src={element.imageUrl} alt={element.productName} />
                                        <div className="productnames">{element.productName}
                                            {element.url}<br />
                                            Company: {element.manufacturedBy}<br />
                                            Packing Size: {element.packing}<br />
                                            Expiry: {element.expiry}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>):(<div className='cart-model'>
                    <div className='cart-content'>
                        <h3>My Cart</h3>
                        <img src={EmptyCart} alt='Cart.' />
                        <h2>Your Cart is Empty!</h2>
                        <span>Add items to it now</span>
                        <NavLink to='/shop'><button type='submit'>Shop now</button></NavLink>
                    </div>
                </div>)
                }
                </div>
        </>

    )
};
export default Cart;