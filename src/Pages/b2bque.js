import React from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import covo from "../Assets/cov.webp"
import Signintocont from '../Components/B2BQuery/Signintocont';
import Howbtob from '../Components/B2BQuery/Howbtob/Howbtob';
import Custes from '../Components/B2BQuery/Custes';
import Accordion from '../Components/B2BQuery/Accordion';


import { Grid, Paper, Avatar, Typography, TextField, Button, Box } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';



import {Link} from "react-router-dom"


const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
const headerStyle = { margin: 0 }
const avatarStyle = { backgroundColor: '#1bbd7e' }
const marginTop = { marginTop: 5}


const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    #f1f8ff,
      #1a4568
    ),
    url("C:/Users/Rohith Balasubramani/Desktop/MaterialUI-Navbar-master/MaterialUI-Navbar-master/src/Assets/cov.webp")
      center;
  background-size: cover;
  align-items: center;
  justify-content: center;
  margin: auto;
  
`;

const Wrapper = styled.div`
  width: 100%;

  height:100% ;
  background-color: white;
  ${mobile({ width: "75%" })}
  margin-top: "auto"; 
  margin-bottom: auto;
  align-items: center;
  justify-content: center;
  text-align: center;

`;

const Wrapper2 =styled.div`
  width: 100%;

  height:50vh ;
  background-color: white;
  background-image: url(${covo});
  ${mobile({ width: "75%" })}
  margin-top: 0%; 
  margin-bottom: "auto";

`;


const form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
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

const Queryb2b = () => {
  return (
    <Container>
      <Wrapper2/>
      <Wrapper>
        <Signintocont/>
        <Howbtob/>
        <Title>Customer Testimonials</Title>
        <Custes/>
        
        <Title>FAQ</Title>
        <Box sx={{marginRight:"8%", marginLeft:"8%", marginBottom:"2vh"}} >
        <Accordion/>
        </Box>

       </Wrapper>

    </Container>

  );
};

export default Queryb2b;
