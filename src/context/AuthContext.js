
import React, { useEffect } from 'react';
import { useContext, useState } from 'react';

const AuthContext = React.createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);
    const [modal,setModal]=useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [productId, setProductId]=useState();
    const [cartModel,setCartModel]=useState(false);
    const [tokens,setTokens]=useState(null);
    const [logModel,setLogModel]=useState(false);
   
useEffect(()=>{
const storedToken = localStorage.getItem('Token');
if(storedToken){
  setTokens(storedToken);
  setIsLogin(true);
}
},[]);

const login =(Token) =>{
  localStorage.setItem('Token',Token);
  setTokens(Token);
  setIsLogin(true);
  
};
    const addToCart = (product, quantity) => {
      
      const existingItem = cartItems.find((item) => item.product.id === product.id);
  
      if (existingItem) {
       
        const updatedCart = cartItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        setCartItems(updatedCart);
      } else {
        setCartItems([...cartItems, { product, quantity }]);
      }
    };
    
   const value={
    isLogin,
    login,
    setIsLogin,
    modal,
    setModal,
    cartItems,
    addToCart,
    cartModel,
    setCartModel,
    productId,
    setProductId,
    logModel,
    setLogModel,
    setTokens
    
   }

  return (
    <AuthContext.Provider value={ value}>{children}
  </AuthContext.Provider>
  );
};

export default AuthContext;
