import React from 'react';
import styled from 'styled-components'

const DateStyle = styled.h6`

    text-align: left;
    padding-left: 10px;
    color: #D3D3D3;
    text-shadow: 1px 0 10px black;

`;

export default function Date ({ date }) {
    return (
        <DateStyle>
            Date: {date}
        </DateStyle>
    );
}