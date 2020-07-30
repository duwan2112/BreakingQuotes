import React from 'react'
import styled from 'styled-components';

const ContainerFraseStyled = styled.div`
 width: 50%;
 background: white;
 margin: 0 auto;
 color: black;
 border-radius: 5px;
 padding: 3rem;
 margin-top: 3rem;
h2{ 

    color: rgba(0,0,0,.5)

    
}
`;


export default function ContainerFrase({quote}) {

    return (
        <ContainerFraseStyled>
           <h1>{ quote.quote   }</h1><h2>-{quote.author}</h2>
        </ContainerFraseStyled>
    )
}
