import { FavoriteBorder, RemoveShoppingCart, ShoppingCart } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../../responsive"; 
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { ADD } from '../../../Redux/actions/action';
import { IconButton } from "@mui/material";

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
  flex: 1;
  margin: 3px;
  height: 60vh;
  width:40vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;

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
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
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

const badge =styled.div`
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

`
const ProdBotDetDiv = styled.div`
    float: left;
    width: 50%;

`
const ProdPrice = styled.div`
    font-size: 18px;
    color: #fbb72c;
    font-weight: 600;

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
  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }



  return (
    <>
    <Container>

      <Image src={item.img} />
      <Info2>
      <Title>{item.title}</Title>
      </Info2>
      <Info>

      <IconButton onClick={()=> send(item)} >
          <ShoppingCart/>

        </IconButton>
        <Icon>
          <FavoriteBorder/>
        </Icon>
        <Icon>
          <RemoveShoppingCart/>
        </Icon>



      </Info>
    

    <ProdDetails>
      <ProdCat>rwedea</ProdCat>
      <ProdName>daedad</ProdName>
      <ProdBotDet>
        <ProdBotDetDiv>
          <ProdPrice>Rs. 56</ProdPrice>
          <br/>
          <ProdPriceSmall>Rs. 25</ProdPriceSmall>
        </ProdBotDetDiv>

        <IconButton onClick={()=> send(item)} >
          <ShoppingCart/>

        </IconButton>
        <Icon>
          <FavoriteBorder/>
        </Icon>

      </ProdBotDet>
    </ProdDetails>
    </Container>
    </>
  );
};

export default ProductItem;
