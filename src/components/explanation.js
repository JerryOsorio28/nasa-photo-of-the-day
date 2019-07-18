import React from 'react';
import styled from 'styled-components';

const ExplanationStyle = styled.p `
    text-align: justify;
    background-color: #D3D3D3;
    padding: 10px 30px;
    margin: 0 10px;
`;


export default function Explanation ({ explanation }) {
    return (
        <ExplanationStyle>
            {explanation}
        </ExplanationStyle>
        
    );
}