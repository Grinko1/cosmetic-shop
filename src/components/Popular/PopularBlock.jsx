import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { data } from '../../db';
import PopularProducts from './PopularProducts';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Title = styled.h1`
  text-align: center;
  color: gray;
  padding: 20px 0;
`;
const PopularBlock = () => {
 
  const care = data.care.slice(0, 2);
  const hair = data.hair.slice(0, 2);
  const make = data.makeup.slice(0, 2);
  const popular = care.concat(hair, make);

  const [products, setProducts] = useState(popular);
  return (
    <>
      <Title>Популярные продукты </Title>
      <Container>
        {products.map((item) => (
          <PopularProducts key={item.id} item={item} />
        ))}
      </Container>
    </>
  );
};

export default PopularBlock;
