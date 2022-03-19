import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { allProducts, data } from '../db';

const Container = styled.div`
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Products = ({ cat, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);



useEffect(() => {
  if(cat === 'hair'){
    setProducts(data.hair)
  } else if (cat === 'care'){
    setProducts(data.care)
  }else if(cat === 'makeup'){
    setProducts(data.makeup)
  }else if(cat === 'all'){
    setProducts(allProducts)
  }

}, [cat])





  useEffect(()=>{
      if((sort === 'newest')){
          setFilteredProducts(products)
      } else if ((sort === 'min')){
          setFilteredProducts(products.sort((a, b) => a.price - b.price)
          )
      }else {
        setFilteredProducts(products.sort((a, b) => b.price - a.price)
        )
      }
  },[sort])


  return (
    <Container>
      {
        products.map(item => (
          <Product key={item.id} item={item} cat={cat} />
        ))
      }

    </Container>
  );
};

export default Products;
