import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { login } from '../redux/apiCalls';
import {mobile} from "../responsive";
import {Link} from 'react-router-dom'

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)
), url('https://static-cse.canva.com/blob/572026/removingbackgroundimages_Unsplash.jpeg');
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
width: 25%;
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
flex-direction: column;

`
const Input = styled.input`
flex:1;
min-width: 40%;
margin:  10px  0 ;
padding: 10px;
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
margin-bottom: 10px;
&:disabled{
    color: green;
    cursor: not-allowed;
}
`
const Error = styled.span`
color: red;
`

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('initialState')
    const dispatch = useDispatch()
    const {isFetching, error} = useSelector(state => state.user)

    const handleClick = (e) => {
        e.preventDefault()
       login(dispatch, {userName, password})
    }
    return (
        <>
        <Navbar/>
        <Container>
            <Wrapper>
                <Title>Войти</Title>
                <Form>
                    <Input placeholder='Username' onChange={(e) => setUserName(e.target.value)} />
                    <Input placeholder='Пароль ' type='password' onChange={(e) => setPassword(e.target.value)}/>
                    <Button disabled={isFetching} onClick={handleClick}>Войти</Button>
                    {error && <Error>Что-то пошло не так . . . </Error>}
                    <Link  to='/register' style={LinkStyle}>Создать новый аккаунт</Link>
                    
                    
                </Form>
            </Wrapper>
            
        </Container>
        </>
    );
};

export default Login;