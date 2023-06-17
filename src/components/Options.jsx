import React from 'react'
import { styled } from 'styled-components';

import Dropdown from './Dropdown'
import Breadcrumb from './Breadcrumb';


const Options = () => {
  return (
    <OptionsWrapper>
    <Dropdown/>
    <Search>
        <Input type='text' placeholder="Search"/>
    </Search>
    <Breadcrumb />
    </OptionsWrapper>
  )
}

export default Options;


const OptionsWrapper = styled.div`
display: flex;
position: sticky;
top: 0;
z-index: 10;
padding: 1.25rem;
align-items: center;
gap: 1rem;
flex-direction: row;
`


const Search = styled.div`
rounded: 5px;
`

const Input = styled.input`
height: 45px;
display: inline-flex;
width: 150px;
align-items: center;
justify-content: center;
font-family: 'Mukta', sans-serif;
font-size: 1rem;
white-space: nowrap;
border-radius: 5px;
border: 1px solid #F476C3;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

&::placeholder{
    color: #F476C3;
    font-family: 'Mukta', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    padding-left: 0.5rem;
}
`