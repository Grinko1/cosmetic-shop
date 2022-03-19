import React from 'react';
import styled from 'styled-components';
import PopularProducts from '../../components/Popular/PopularProducts'

const Container = styled.div`
  padding: 20px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const EachProduct = ({ cat, filteredProducts}) => {


  return (
    <Container>
      {
        filteredProducts.map(item => (
          <PopularProducts key={item.id} item={item} cat={cat} />
        ))
      }

    </Container>
  );
};

export default EachProduct;
