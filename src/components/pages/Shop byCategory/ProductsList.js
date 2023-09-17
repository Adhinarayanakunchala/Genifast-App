import React, { useState } from "react";
import { CiHeart } from 'react-icons/ci';
import { GrFormSearch } from 'react-icons/gr';
import { TiShoppingCart } from 'react-icons/ti';
import './Product.css';
import { useAuth } from "../../../context/AuthContext";
import Login from "../../Model/Login";
import ReactPaginate from "react-paginate";
const ProductsList = (props) => {
    const { products, categoryName } = props;
    const { modal, setModal,cartModel,setCartModel,productId,setProductId, isLogin } = useAuth();
    // const [currentPage, setCurrentPage] = useState(0);
    // const itemsPerPage = 12; 

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

    // const handlePageChange = ({ selected }) => {
    //     setCurrentPage(selected);
    //   };
    
    //   const startIndex = currentPage * itemsPerPage;
    //   const endIndex = startIndex + itemsPerPage;
    //   const displayedCategories = products.slice(startIndex, endIndex);
    return (
        <>
            {modal && <Login />}
            <div className="ProductData">
                {categoryName && <h2 className="categoryName">{categoryName}</h2>}
                <div className="products">
                    {
                        products.map((element, index) => {
                            return (
                                <div key={index} className="cards">
                                   <div className="pimages"> <img src={element.imageUrl} alt={element.productName} /></div>
                                    <div className="productnames">
                                       <h3>{element.productName}</h3>
                                        <p>
                                            {element.url}</p>
                                           <p> Company: {element.manufacturedBy}</p>
                                           <p> Packing Size: {element.packing}</p>
                                           <p> Expiry: {element.expiry}</p>
                                            <div className="addcartbt">
                                            <button type="submit" onClick={()=>{tooglePage(); handleLogin()}}>Add to Cort</button>
                                            </div>
                                    </div>
                                    <div className="panel">
                                        <button type='submit' className="icon" onClick={(e) => { e.preventDefault(); handleLogin(1) }}><CiHeart /></button>
                                        <button type='submit' className="icon" onClick={(e) => { e.preventDefault(); }}><GrFormSearch /></button>
                                        <button type='submit' className="icon" onClick={(e) => { e.preventDefault(); handleLogin();tooglePage(productId) }}><TiShoppingCart /></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* <ReactPaginate
        previousLabel='<<prev'
        nextLabel='next>>'
        breakLabel='...'
        pageCount={Math.ceil(products.length / itemsPerPage)}
        marginPagesDisplayed={2}
        renderOnZeroPageCount={null}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName='pagination'
        pageClassName='page-num'
        activeClassName='active'
        
      /> */}
        </>
    )
};
export default ProductsList;