import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Announcement from '../../components/Announcement';
import NewLetter from '../../components/NewLetter';
import Footer from '../../components/Footer';
import { mobile } from '../../responsive';
import EachProduct from './EachProduct';
import { allProducts, data } from '../../db';

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

const ProductAll = () => {
  const [cat, setCat] = useState('all');
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    setCat(e.target.value);
  };

  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    if (cat === 'hair') {
      setFilteredProducts(data.hair);
    } else if (cat === 'care') {
      setFilteredProducts(data.care);
    } else if (cat === 'makeup') {
      setFilteredProducts(data.makeup);
    } else if (cat === 'all') {
      setFilteredProducts(allProducts);
    }
  }, [cat]);

  useEffect(() => {
    if (sort === 'max') {
      setFilteredProducts(filteredProducts.sort((a, b) => b.price - a.price));
    } else if (sort === 'min') {
      setFilteredProducts(filteredProducts.sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts(filteredProducts);
    }
  }, [sort]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>
        {(cat === 'care' && 'Уход за кожей') ||
          (cat === 'hair' && 'Для волос') ||
          (cat === 'makeup' && 'Макияж') ||
          (cat === 'all' && 'Все продукты') ||
          (cat === 'popular' && 'Популярное')}
      </Title>
      <FilterContainer>
        <Filter>
          <FilterText>Фильтр:</FilterText>
          <Select name="category" defaultValue="all" onChange={handleFilters}>
            <Option disabled>Категория</Option>
            <Option value="all">все</Option>
            <Option value="hair">для волос</Option>
            <Option value="makeup">макияж</Option>
            <Option value="care">уход за кожей</Option>
            <Option value="popular">популярное</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Сортировка:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Новое</Option>
            <Option value="min">по цене (min)</Option>
            <Option value="max">по цене (max)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <EachProduct cat={cat} filteredProducts={filteredProducts} sort={sort} />
      <NewLetter />
      <Footer />
    </Container>
  );
};

export default ProductAll;
