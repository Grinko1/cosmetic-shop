import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addProduct, getTotals } from '../redux/cartRedux';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeFromFavorite } from '../redux/favoriteRedux';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) => (props.type === 'filled' ? 'black' : 'tranparent')};
  color: ${(props) => props.type === 'filled' && 'white'};
`;


const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const Info = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;
const ProductDetails = styled.div`
  display: flex;
  flex: 2;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;


const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}
`;

const ButtonToCart = styled.button`
  padding: 15px;
  width:150px;
  height:50px;
  margin:auto;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const ButtonDelete = styled.button`
  padding: 15px;
  width:150px;
  height:50px;
  margin:auto;
  border:none;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

`;
const Favorited = () => {
  const favorite = useSelector((state) => state.favorite);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTotals());
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addProduct({ ...product }));
    dispatch(getTotals());
  };

  const handleRemove = (product) => {
    dispatch(removeFromFavorite(product))
  }


 
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Избранное</Title> 
        <Top>
          <Link to="/">
            <TopButton>Продолжить покупки</TopButton>
          </Link>
  
        </Top>
        <Bottom>
          <Info>
            {favorite?.products.map((product) => (
              <Product key={product.id}>
                <ProductDetails>
                  <Image src={product.image} />
                  <Details>
                    <ProductName>
                      <b>Название</b> {product.name}
                    </ProductName>
                
                  </Details>
                </ProductDetails>
                <PriceDetails>
         
                  <ProductPrice>{product.price} p</ProductPrice>
                </PriceDetails>
                <ButtonToCart onClick={()=>handleAddToCart(product)}>ADD TO CART</ButtonToCart>
                <ButtonDelete onClick={() => handleRemove(product)}>
                    <DeleteIcon style={{color:'red', }}/>
                </ButtonDelete>
              
              </Product>
            ))}
            <Hr />
          </Info>
      
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Favorited;
