import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
  background-color: #edfbff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  margin: 0;
  height: 100%;
`;

const Snip = styled.figure`
  font-family: 'Raleway', Arial, sans-serif;
  background-color: #ffffff;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 220px;
  max-width: 310px;
  width: 100%;
  color: #333;
  text-align: left;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  *{

	-webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  transition: all 0.35s cubic-bezier(0.25, 0.5, 0.5, 0.9);

  }
`;

const Image = styled.div`
  max-width: 100%;
  vertical-align: middle;

    
`;

const Blockquote = styled.blockquote`
  position: relative;
  background-color: #ffffff;
  padding: 25px 50px 25px 50px;
  font-size: 0.8em;
  font-weight: 500;
  text-align: left;
  margin: 0;
  line-height: 1.6em;
  font-style: italic;
  &:after {
	font-family: 'FontAwesome';
  content: "\201C";
  position: absolute;
  font-size: 50px;
  opacity: 0.3;
  font-style: normal;
  content: "\201D";
  right: 20px;
  bottom: 0;

    }
    &:before {
		font-family: 'FontAwesome';
  content: "\201C";
  position: absolute;
  font-size: 50px;
  opacity: 0.3;
  font-style: normal;
  content: "\201D";
  right: 20px;
  bottom: 0;
  top: 25px;
  left: 20px;

      
    }
`;

const Arrow = styled.div`
  background-color: #ffffff;
  top: 100%;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 25px solid transparent;
  border-top: 25px solid #ffffff;
  margin: 0;
  position: absolute;
`
const Author = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 5px 25px;
  color: #000000;
  background-color: #ffffff;
  margin: 0;
  text-transform: uppercase;
`


const Heading =styled.h5`
  opacity: 0.8;
  margin: 0;
  font-weight: 800;
`

const Span =styled.span`
  font-weight: 400;
  text-transform: none;
  padding-left: 5px;



`

const Layer = styled.div`
	position: absolute;
	top: calc(100% - 3px);
	width:100%;
	height:100%;
	left:0;
	background:linear-gradient(#03a9f4, #e81dd3);
	z-index:1;
	transition:0.5s;
`;

const Testi = () => {
  return (
    <>
     <Container>

			<Snip>
		<Blockquote>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.
    <Arrow/>

  </Blockquote>

  <Image>
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg" alt="sample3"/>
  </Image>
  <Author>
	<Heading>Peloicca<Span>-sankdlan</Span></Heading>
  </Author>
  </Snip>

		<figure>
			<Snip>
		<Blockquote>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.
    <Arrow/>
  </Blockquote>
  <Image>
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg" alt="sample3"/>
  </Image>
  <Author>
	<Heading>Peloicca<Span>-sankdlan</Span></Heading>
  </Author>
  </Snip>
		</figure>
    <Snip>
		<Blockquote>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.
    <Arrow/>

  </Blockquote>

  <Image>
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg" alt="sample3"/>
  </Image>
  <Author>
	<Heading>Peloicca<Span>-sankdlan</Span></Heading>
  </Author>
  </Snip>

		<figure>
			<Snip>
		<Blockquote>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.
    <Arrow/>
  </Blockquote>
  <Image>
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg" alt="sample3"/>
  </Image>
  <Author>
	<Heading>Peloicca<Span>-sankdlan</Span></Heading>
  </Author>
  </Snip>
		</figure>


        </Container>   
    
      
    </>
  )
}

export default Testi
