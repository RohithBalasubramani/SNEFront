import React from 'react'
import styled from 'styled-components'


const Container =styled.div`
  text-align: left;
  width: 80%;
  padding-left: 5vh;
  color: #2d2d2d;
  font-style: italic;
  font-weight:200;


`

const Bullets =styled.ul`
  list-style-type: circle;
  font-size: large;
`

const Features = () => {
  return (
    <Container>
        <Bullets>

       <li> Safety Terminals.</li>
       <li> Trip free mechanism.</li>
       <li> Large Cable Terminals.</li>
       <li> Cooler Operation.</li>
       <li> Precise hammer action.</li>
       <li> Low power consumption.</li>
       <li> 13 Plates Arc Chute for effective arc quenching.</li>
       <li> Every device is provided with a dual position DIN rail clip.</li>


        </Bullets>

      
    </Container>
  )
}

export default Features
