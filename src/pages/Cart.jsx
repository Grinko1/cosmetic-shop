import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import styled from 'styled-components';
import AddOutlined from '@mui/icons-material/AddOutlined';
import RemoveOutlined from '@mui/icons-material/RemoveOutlined';
import { mobile } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addProduct, getTotals, removeOne } from '../redux/cartRedux';

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
const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
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
const ProductId = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })}
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 10px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const LinkStyle = {
  margin: "5px 0px",
  textDecoration: "underline",
  cursor: "pointer",
  color:"black"
  }
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const products = useSelector((state) => state.favorite.products);



  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTotals());
  }, []);

  const increaseQuantity = (product) => {
    dispatch(addProduct({ ...product }));
    dispatch(getTotals());
  };
  const decreaseQuantity = (product) => {
    dispatch(removeOne({ ...product }));
    dispatch(getTotals());
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Ваша корзина</Title>
        <Top>
          <Link to="/">
            <TopButton>Продолжить покупки</TopButton>
          </Link>
          <TopTexts>
            <TopText>В корзине ({cart.cartTotalQuantity})</TopText>
            <Link to='/favorite' style={LinkStyle} >
            <TopText>Избранное({products.length})</TopText>
            </Link>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product key={product.id}>
                <ProductDetails>
                  <Image src={product.image} />
                  <Details>
                    <ProductName>
                      <b>Название</b> {product.name}
                    </ProductName>
                    <ProductId>
                      <b>ID</b> {product.id}
                    </ProductId>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                  <ProductAmountContainer>
                    <RemoveOutlined onClick={() => decreaseQuantity(product)} />
                    <ProductAmount>{product.cartQuantity}</ProductAmount>
                    <AddOutlined onClick={() => increaseQuantity(product)} />
                  </ProductAmountContainer>
                  <ProductPrice>{product.price * product.cartQuantity} p</ProductPrice>
                </PriceDetails>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Сумма Заказа</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Сумма</SummaryItemText>
              <SummaryItemPrice>{cart.cartTotalAmount}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Доставка</SummaryItemText>
              <SummaryItemPrice>700</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              {cart.cartTotalAmount >= 3000 ? (
                <>
                  <SummaryItemText>Бесплатная доставка</SummaryItemText>
                  <SummaryItemPrice>-700</SummaryItemPrice>
                </>
              ) : (
                ''
              )}
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText> Общая сумма</SummaryItemText>
              <SummaryItemPrice>{cart.cartTotalAmount <= 3000 ?cart.cartTotalAmount + 700 : cart.cartTotalAmount  }</SummaryItemPrice>
            </SummaryItem>
            <Button>Купить сейчас</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
