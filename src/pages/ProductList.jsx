import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import NewLetter from '../components/NewLetter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router';

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  margin: 20px;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`;
const Option = styled.option``;
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };


  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat === 'care' && 'Уход за кожей'|| cat === 'hair' && 'Для волос' || cat ==='makeup' && 'Макияж'}</Title>
      <FilterContainer>

        <Filter>
          <FilterText>Сортировка:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Новое</Option>
            <Option value="min">по цене (min)</Option>
            <Option value="max">по цене (max)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
