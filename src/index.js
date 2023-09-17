import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footerpage/Footer';
import { AuthProvider } from './context/AuthContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   { 
   <AuthProvider>
   <BrowserRouter>
    <App/>
    <Footer />
    </BrowserRouter> 
    </AuthProvider>
   }
  </React.StrictMode>
);


