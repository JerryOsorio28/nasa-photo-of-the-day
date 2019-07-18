import React from 'react';
import styled from'styled-components';

const Header = styled.h1`
    border: 1px solid red;
`;


export default function Title ({ title }) {
    return (
        <Header>
            <h1>{ title}</h1>
        </Header>
    );
}