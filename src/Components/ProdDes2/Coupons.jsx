import React from 'react'
import styled from 'styled-components'
import { EventRepeat, LocalOffer } from '@mui/icons-material';


const Container = styled.div`
width: 100%;
height: 80%;
margin-top: 3vh;
background-color: #ffffff;
margin-left: auto;
margin-right: auto;
text-align: left;
align-items: center;
align-content: center;
border-radius: 20px;

`;

const Wrapper = styled.button`
width: 95%;
height: auto;
background-color: white;
color: #353642;
display: flex;
font-size: medium;
border: 0.35vh solid #eee;
border-radius: 20px;
margin-left: 2.5%;
margin-right: auto;
margin-top: 0%;
margin-bottom: 1.5vh;
text-align: left;
&:hover {
        color:olivedrab;


    }

`;
const Bold = styled.div`
font-weight: 600;
padding-right: 0.5vh;
padding-left: 0.5vh;
display: inline;



`;

const Link = styled.div`
font-weight: 600;
padding-right: 0.5vh;
padding-left: 0.5vh;
color: blue;
&:hover {
        color:blueviolet;


    }



`;


const Coupons = () => {
  return (
    <Container>
        <Wrapper><LocalOffer/><Bold>Bank Offer</Bold>5% Cashback on  Axis Bank Card<Link>T & C</Link></Wrapper>
        <Wrapper><LocalOffer/><Bold>Bank Offer</Bold>15% Cashback on  SBI Bank Card<Link>T & C</Link></Wrapper>
        <Wrapper><LocalOffer/><Bold>Partner Offer</Bold>Buy this product and get upto ₹500 off on SN Electric Gadgets<Link>Know more</Link></Wrapper>
        <Wrapper><EventRepeat/><Bold>No cost EMI</Bold> Standard EMI also available from ₹1000/month.<Link>View Plans</Link></Wrapper>
    </Container>
  )
}

export default Coupons
