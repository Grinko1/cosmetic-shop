import React from 'react';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import styled from 'styled-components';
import { mobile } from "../responsive"


const Container = styled.div`
height: 60vh;
background-color: #f8e3e3;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;

`
const Description = styled.div`
font-size: 24px;
font-weight: 300;
${mobile({ textAlign: "center" })}


`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgrey;
${mobile({ width: "80%" })}


`
const Input = styled.input`
border: none;
flex:8;
padding-left: 20px;
`
const Button = styled.button`
flex:1;
border: none;
background-color: teal;
color: white;
`




const NewLetter = () => {
    return (
        <Container>
            <Title>Узнайте первыми!</Title>
            <Description>Получать новости о ваших любимых товарах и акциях</Description>
            <InputContainer>
            <Input placeholder='your email'/>
            <Button>
            <SendOutlinedIcon/>
            </Button>
            </InputContainer>
            
        </Container>
    );
};

export default NewLetter;