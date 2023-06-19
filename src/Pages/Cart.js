import React from 'react'
import CartTab2 from '../Components/Cart/CartTab2';
import styled from 'styled-components'


const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  margin: 0;
  height: 100%;
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
  position: relative;
  border-left: 10vh;
  border-right: auto;


`;

const Cart = () => {
  return (
    <>
    <Container>

    <CartTab2/>
    </Container>
      
    </>
  )
}

export default Cart
