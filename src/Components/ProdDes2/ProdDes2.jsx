import React from 'react'
import "./Prodess.css"
import { Container } from "@mui/material";
import Gallery from './Gallery';
import Description from './Description';
import { Products3 } from '../../data';
import styled from 'styled-components';
import Coupons from './Coupons';
import IconBreadcrumbs from './BreadCrumbs';
import ReturnPolicy from './ReturnPolicy';
import Product from '../Home/Product/Product';
import Features from './Features';
import Specs from './Specs';



const Contain = styled.div`


    background-color: #848ea9;
    display: block;

    
    


    

`
const BreadCrumbsCont = styled.div`
    
    width: 95%;
    padding: 1vh;
`



const Cont = styled.section`
    display: flex;
    align-items: flex-start;
    width: 97%;
    margin: auto;
    margin-top: auto;
    margin-bottom: 5vh;    
    background-color: white;

    

`



const GalleryItems = styled.section`

    width: 40%;
    padding-left: 5vh;
    margin-right: 2vh;
    position: relative;


`

const Info = styled.section`
    border-left: 1px solid #cfcfcf;
    width: 60%;
    padding-left: 4vh;
    height: max-content;

`
const GenCon =styled.div`
    

    height: 50%;
    margin: 10vh;
    width: 85%;
    margin-top: 5%;
    border-radius: 20px;
    font-size: 3vh;
    font-weight: 600;
    color: #232323;
    text-align: left;


`
const GenCon2 = styled.div`

    height: 50%;
    margin: 10vh;
    width: 85%;
    margin-top: 5%;
    border-radius: 20px;
    text-align: left;
    font-size: 3vh;
    font-weight: 600;
    color: #30325b;
    

`;

const GenCon3 = styled.div`

    margin: 10vh;
    height: auto;
    width: 97%;
    margin-top: 5%;
    background-color: #fafafa;
    margin-bottom: 5vh;  
    margin-left: 1.5%;
    color: #30325b;

`;

const Title = styled.h1`
  position:relative;
   font-size:20px; 
   font-weight:700;  
   letter-spacing:0px; 
   text-transform:uppercase; 
   width:45vh; 
   text-align:center; 
   margin:auto;
   margin-top: 2vh; 
   white-space:pre-wrap;
    border:2px solid #222;
    padding:5px 11px 3px 11px;
    margin-bottom: 0.5vh;

    &:after {
      background-color: #c50000;
    position:absolute; 
    content: '';
    height: 7px;
    width: 7px; 
    border-radius:50%;
    bottom: 12px;
    right:-20px;

    }
    &:before {
      background-color: #c50000;
    position:absolute; 
    content: '';
    height: 7px;

    width: 7px; border-radius:50%;
    bottom: 12px;
    left:-20px;
      
    }
`;

const ProdDes2 = () => {
    
  return (
    <main className="App">

        <Contain>
            <BreadCrumbsCont>
                <IconBreadcrumbs/>
            </BreadCrumbsCont>
        <Cont>
            <GalleryItems>
                <Gallery />
            </GalleryItems>
            <Info>
                <Description/>
                <GenCon>Coupons <Coupons/></GenCon>
                
                <GenCon>
                    <h3>Features</h3>
                <Features/>
                </GenCon>
                
                <GenCon>
                <h3>Return Policy</h3>
                <ReturnPolicy/>
                </GenCon>

                <GenCon>
                    Specification
                    <Specs/>
                </GenCon>
            </Info>

        </Cont>
        <GenCon3>
            <Title>
            Similar Products
            </Title>
        <Product/>
        </GenCon3>
        </Contain>






    </main>
  )
}

export default ProdDes2
