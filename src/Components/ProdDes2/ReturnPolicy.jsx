import { BrokenImage, CachedRounded, Inventory2, ThumbDown } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container =styled.div`
    display: flex;
    width: 80%;
    gap: 20%;
    padding-left: 5vh;
    color:black;
    font-size: large;
    font-weight: 200;
    font-style: oblique;


`
const Wrapper =styled.div`
    display: block;
    &:hover {
        color:olivedrab;


    }


`



const ReturnPolicy = () => {
  return (
    <Container>
        <Wrapper><CachedRounded fontSize='large'/><br/> Return Within a week</Wrapper>
        <Wrapper><Inventory2 fontSize='large'/><br/> Wrong Product</Wrapper>
        <Wrapper><BrokenImage fontSize='large'/><br/> Damaged Product</Wrapper>
        <Wrapper><ThumbDown fontSize='large'/><br/> Defective Product</Wrapper>
      
    </Container>
  )
}

export default ReturnPolicy
