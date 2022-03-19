import React from 'react';
import styled from 'styled-components';
import { category } from '../../data';
import CategoryItem from './CategoryItem';
import { mobile } from "../../responsive";


const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection:"column" })}
`


const Categories = () => {

    return (
        <Container>
            {
                category.map((item) => (
                    <CategoryItem key={item.id} item={item}/>
                ))
            }
            
        </Container>
    );
};

export default Categories;