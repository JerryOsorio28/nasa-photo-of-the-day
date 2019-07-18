import React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
    width: 100px;
    height: 100px;
`;

export default function LogoImage (){
    return (
        <Logo>
            <img src='https://www.logolynx.com/images/logolynx/f6/f6e5b06f6aad7910506686b3c81137b8.png'></img>
        </Logo>
    )
}
