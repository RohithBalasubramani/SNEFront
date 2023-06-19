import { FavoriteBorder, RemoveShoppingCart, ShoppingCart } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../../responsive"; 
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { ADD, FAV, REMOVEFAV } from '../../../Redux/actions/action';
import { IconButton } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite';
import { useState } from "react";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
    width: 50vh;
    height: min-content;
    position: relative;
    box-shadow: 0 2px 7px #dfdfdf;
    margin: 50px auto;
    background: #fafafa;


`;

const Imagebg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
    padding: 7vh;
    background: #f0f0f0;

`;

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;

`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`

  border: none;
  background-color: teal;
  color: white;
  width: auto;
  height: auto;
  padding: 1vh;
  font-size: 2.5vh;
  cursor: pointer;
  &:hover {
    outline-width: 2px;
    outline: blue;
    background-color: #f38933;
    color: white;
  }
  
`;

const Info2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Badge =styled.div`
    position: absolute;
    left: 0;
    top: 20px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    background: red;
    color: #fff;
    padding: 3px 10px;
  

`
const ProdDetails = styled.div`
      padding: 30px;
      height: 50%;

`
const ProdCat = styled.span`
    display: block;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #ccc;
    margin-bottom: 18px;

`
const ProdName = styled.h4`
    font-weight: 500;
    display: block;
    margin-bottom: 18px;
    text-transform: uppercase;
    color: #363636;
    text-decoration: none;
    transition: 0.3s;

`
const ProdDet= styled.div`
    overflow: hidden;
    border-top: 1px solid #eee;
    padding-top: 20px;

`
const ProdBotDet = styled.div`
    overflow: hidden;
    border-top: 1px solid #eee;
    padding-top: 20px;
    display: flex;

`
const ProdBotDetDiv = styled.div`
    float: left;
    width: 20%;

`
const ProdBotDetDivRight = styled.div`
    float: right;
    width: 60%;
    display: flex;
    margin-left: auto;
    margin-right: 1vh;
    

`
const ProdPrice = styled.div`
    font-size: 18px;
    color: #fbb72c;
    font-weight: 600;
    display: inline-block;

`
const ProdPriceSmall = styled.small`
    font-size: 80%;
    font-weight: 400;
    text-decoration: line-through;
    display: inline-block;
    margin-right: 5px;

`



const ProductItem = ({ item }) => {

  const dispatch = useDispatch();
  const sendfav = (e)=>{
    // console.log(e);
    dispatch(FAV(e));

  }
  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));

  }

  const [checked, setChecked] = useState(true);
  const handleChange = (event,e) => {
    setChecked(event.target.checked);
    if (checked === true) {
      dispatch(FAV(e))      
    }
    else{
      dispatch(REMOVEFAV(e))
    }
  
  };



  return (
    <>
    <Container>
    <Badge>Trending</Badge>
      <Imagebg>
        <Image src={item.img} />
      </Imagebg>

    

    <ProdDetails>
      <ProdCat>Ref no.:{item.refno}</ProdCat>
      <ProdName>{item.rname}</ProdName>
      <ProdBotDet>
        <ProdBotDetDiv>
          <ProdPrice>Rs.{item.price}</ProdPrice>
          <ProdPriceSmall>Rs. {item.oldprice}</ProdPriceSmall>
        </ProdBotDetDiv>

        <ProdBotDetDivRight>

        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} checked={checked} onChange={handleChange}/>

        <Button onClick={()=> send(item)} >
          Add to Cart
        </Button>

        </ProdBotDetDivRight>

      </ProdBotDet>
    </ProdDetails>
    </Container>
    </>
  );
};

export default ProductItem;
