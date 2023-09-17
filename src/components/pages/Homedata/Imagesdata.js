import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Imagesdata.css';

const Imagesdata = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20; 

  useEffect(() => {
    axios.get(`https://xapi.genifast.in/api/users/webhomepage/1`)
      .then((response) => {
        const { data } = response;
        const { categories } = data;
        setCategories(categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCategories = categories.slice(startIndex, endIndex);

  return (
    <>
      <h1>Checkout the most popular categories</h1>
      <div className="popular-categories">
        {displayedCategories.map((element, index) => (
          <div key={index} className="image-item">
            <img  className="popular" src={element.imageUrl} alt={element.categoryName} />
            <div className="category-name">{element.categoryName}</div>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel='<<prev'
        nextLabel='next>>'
        breakLabel='...'
        pageCount={Math.ceil(categories.length / itemsPerPage)}
        marginPagesDisplayed={2}
        renderOnZeroPageCount={null}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName='pagination'
        pageClassName='page-num'
        activeClassName='active'
        
      />
    </>
  );
};

export default Imagesdata;
