import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
    color: white;
    text-shadow: 1px 0 10px black;
    padding: 5px;
    margin: 0;
`;



export default function Title ({ title }) {
    return (
        <Header>
            {title}
        </Header>
    );
}