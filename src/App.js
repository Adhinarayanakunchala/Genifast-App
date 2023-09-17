import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, } from "react-router-dom";
import Homepage from "./components/pages/Homedata/Homepage";
import Imagesdata from "./components/pages/Homedata/Imagesdata";
import WhishList from "./components/Model/Whishlist";
import ShopbyCategory from "./components/pages/Shop byCategory/ShopbyCategory";
import { useAuth } from "./context/AuthContext";
import About from "./components/AboutPage/About";
import Cart from "./components/pages/CartPages/Cart";
import AddtoCart from "./components/pages/CartPages/AddtoCart";
import LogOut from "./components/pages/UserPages/LogOut";
const App = () => {

  const { 
    isLogin,
    setIsLogin,
    cartModel,
    setCartModel,logModel,setLogModel } = useAuth();
    const toggleModal=()=>{
      setCartModel(!cartModel);
    }
    const toggleLogin =()=>{
      setLogModel(!logModel);
    }


  return (
    <>
     
{ cartModel&&<AddtoCart/>}
{ logModel&&<LogOut/>}

   
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopbyCategory />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/image" element={<Imagesdata />} />
          <Route path="/whislist" element={<WhishList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/#" />
        </Routes>

      </div>


    </>
  );
}

export default App;
