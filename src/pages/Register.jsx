import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { mobile } from "../responsive";


const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
), url('https://images5.alphacoders.com/321/321303.jpg');
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color:white ;
${mobile({ width: "75%" })}
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`
const Form = styled.form`
display: flex;
flex-wrap: wrap;

`
const Input = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0 0 ;
padding: 10px;
`
const Info = styled.div`
display:flex;
flex-direction:column;
`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`
const ToLogin = styled.p`
font-size: 12px;
margin: 10px 0px;
`
const LinkStyle = {
    margin: "5px 0px",
    fontSize: "12px",
    textDecoration: "underline",
    cursor: "pointer",
    color:"black"
    }
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`

const Register = () => {
    return (
        <>
        <Navbar/>
        <Container>
            <Wrapper>
                <Title>Создать аккаунт</Title>
                <Form>
                    <Input placeholder='Имя'/>
                    <Input placeholder='Фамилия'/>
                    <Input placeholder='Username'/>
                    <Input placeholder='email'/>
                    <Input placeholder='Пароль '/>
                    <Input placeholder='Подтвердите пароль'/>
                    <Info>
                    <Agreement>Создавая аккаунт ,я ознакомлен с обработкой персональных данных, и согласен с <p>ПОЛИТИКОЙ БЕЗОПАСНОСТИ</p>  </Agreement>
                    
                    
                        <ToLogin>Уже есть аккаунт <Link to='/login' style={LinkStyle}>ВОЙТИ</Link></ToLogin>
                        
                        </Info>
                    <Button>Создать</Button>
                </Form>
            </Wrapper>
            
        </Container>
        </>
    );
};

export default Register;