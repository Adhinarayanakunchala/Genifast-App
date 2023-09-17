import React, { useEffect, useState } from "react";
import "./ShopbyCat.css"
import axios from "axios";
import ProductsList from "./ProductsList";

const ShopbyCategory = () => {
    const [category, setCategory] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [selectedCategoryName, setSelectedCategoryName] = useState(null);
    const [activeCategory, setActiveCategory]=useState(42);
    const [products,setProducts]=useState([]);



    useEffect(() => {

        const token = () => {
            return localStorage.getItem("Token");
        }
        // console.log(token())
        const config = {
            headers: {
                'Authorization': `Bearer ${token()}`
            }
        }
        axios.get(
            `http://3.7.83.114:3000/api/users/categorieslist`,config)
            .then((response) => {
                const { data } = response;
                const { categories } = data;
                setCategory(categories);
                if(categories.length>0){
                    
                setSelectedCategoryId(categories[0].categoryId)
                }
            
            })
            .catch((error) => {
                console.log(error)
            });
    }, [])

    useEffect(()=>{

        const token = () => {
            return localStorage.getItem("Token");
        }
        console.log(token())
        const config = {
            headers: {
                'Authorization': `Bearer ${token()}`
            }
        }

        if (selectedCategoryId !== null) {
    axios.get(`http://3.7.83.114:3000/api/products/user/bycategory/${selectedCategoryId}/1/Telangana`,config)
        .then((response)=>{
            const {data}=response;
            const{Products}=data;
            setProducts(Products);
            console.log(Products);
            
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    },[selectedCategoryId]);
    const handleCategoryClick = (categoryId,categoryName) => {
        setSelectedCategoryId(categoryId);
        setSelectedCategoryName(categoryName);
        setActiveCategory(categoryId);
        
    };

    return (
        <div className="Categories">
            <div className="Categori">
            <h1 id="shop">Shop</h1>
            <h4 id="cato">Categories</h4>
            {
                category.map((element, index) => {
                    return (
                        <div className="category" key={element.categoryId}>
                            <button
                              className={`active-btn ${element.categoryId === activeCategory ? 'active' : ''}`}
                             onClick={() => handleCategoryClick(element.categoryId, element.categoryName)}
                             >{element.categoryName}</button>
                        </div>
                    )})
            }
            </div>
            <div> 
            {
            selectedCategoryId !== null && (
        <ProductsList  products={products} categoryName={selectedCategoryName} className="products"/>
      )}
      </div>
        </div>
    )
};

export default ShopbyCategory;