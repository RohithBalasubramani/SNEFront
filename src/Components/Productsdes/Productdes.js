import { Container } from '@mui/system'
import React from 'react'
import Gallery from './Gallery'
import styled from 'styled-components'


const Cont = styled.div`
text-align: center;
`
const Core = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 100px auto;
  gap: 100px;
  @media (max-width: 992px) {
      gap: 70px;
  }
  @media (max-width: 768px) {
    
      width: unset;
      margin: unset;
      flex-direction: column;
      gap: unset;
      margin-bottom: 100px;
    
  }
`


const Productdes = () => {
  return (
    <Cont>

    <Core>
    <Container component="section" maxWidth={"lg"}>

    <Gallery/>

    </Container>
    </Core>

      
    </Cont>
  )
}

export default Productdes
