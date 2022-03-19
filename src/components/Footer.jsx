import React from 'react';
import styled from 'styled-components';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { mobile } from "../responsive";


const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;

`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;
const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MakeUpStore</Logo>
        <Desc>
          Даже не выходя из дома, ты можешь насладиться шоппингом в MakeUpStore! В интернет-магазине
          тебя ждут марки, представленные только в нашей сети, выгодные предложения и эксклюзивные
          подарки!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTubeIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <MailOutlinedIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Полезные ссылки</Title>
        <List>
          <ListItem>О MakeUpStore</ListItem>
          <ListItem>Бренды</ListItem>
          <ListItem>Доставка</ListItem>
          <ListItem>Мой аккаунт</ListItem>
          <ListItem>Акции</ListItem>
          <ListItem>Оплата</ListItem>
          <ListItem>Обработка персональных данных</ListItem>
          <ListItem>Пользовательское соглашение</ListItem>
    
        </List>
      </Center>
      <Right>
          <Title>Контакты</Title>
            <ContactItem> <RoomOutlinedIcon style={{marginRight:'10px'}}/>Артика, ул.Белого Медведя д.1</ContactItem>
            <ContactItem><LocalPhoneOutlinedIcon style={{marginRight:'10px'}}/>88005553535</ContactItem>
            <ContactItem><EmailOutlinedIcon  style={{marginRight:'10px'}}/>makeupstore@mail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  );
};

export default Footer;
