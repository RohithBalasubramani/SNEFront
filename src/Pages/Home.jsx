import React from "react";
import Categories from "../Components/Home/Categories";
import Slider from "../Components/Home/Slider";
import styled from "styled-components";
import Newsletter from "../Components/Home/Newsletter";
import Testi2 from "../Components/Home/Testi2";
import Benefit from "../Components/Home/Benefits";
import Whychooseus from "../Components/Home/Whychooseus/Whychooseus";
import Product from "../Components/Home/Product/Product";




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
    margin-bottom: 3vh;

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

const Home = () => {
  return (
    <>
      <Slider />
      <Title>Browse Major Categories</Title>
      <Categories />
      <Title>Trending Products</Title>
      <Product/>
      <Title>Testimonials</Title>
      <Testi2/>
      <Whychooseus/>
      <Newsletter/>


    </>
  );
};

export default Home;
