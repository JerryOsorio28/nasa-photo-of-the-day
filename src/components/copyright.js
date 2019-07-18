import React from 'react';
import styled from 'styled-components';

const CopyrightStyle = styled.p`
    color: white;
    text-shadow: 1px 0 10px black;
    padding: 5px;
    margin: 0;
`;

export default function Copyright ({copyright}){

    return (
        <CopyrightStyle>
            Copyright © 2008 React App
        </CopyrightStyle>

    )
}