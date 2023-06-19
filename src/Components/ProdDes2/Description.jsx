import React from "react";
import styled, { keyframes } from "styled-components";
import { mobile } from "../../responsive";
import {
  Add,
  Favorite,
  FavoriteBorder,
  Remove,
  Star,
} from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import Specs from "./Specs";

const Container = styled.div`
  width: auto;
  margin: 10vh;
  margin-top: 0%;
`;

const Title = styled.h2`
  text-align: left;
  margin-top: 1vh;
`;

const RatingLine = styled.div`
  display: inline-flex;
  gap: 1vh;
  font-size: medium;
  color: #949494;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

const StockLine = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 2%;
  padding-top: 1vh;
`;

const StockAni = keyframes`
              0% {
                opacity: 0;
            }
  
            50% {
                opacity: 0.7;
            }
  
            100% {
                opacity: 0;
            }
`;

const Stock = styled.div`
  display: inline-flex;
  padding: 0.3vh;
  font-size: large;
  font-weight: 600;
  color: #26960a;
  align-items: flex-start;
  width: max-content;
  height: auto;
  border-width: 0.5vh;
  border-color: #26960a;
  border-style: solid;
  border-radius: 20px;
  margin-bottom: 2%;
  text-transform: uppercase;
  animation-name: ${StockAni};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
`;

const Rating = styled.div`
  background-color: #225722;
  width: min-content;
  height: min-content;
  color: white;
  display: inline-flex;
  border-radius: 10%;
  padding: 0.5vh;
`;

const Price = styled.div`
  display: -webkit-box;
  width: 100%;
  align-content: left;
  text-align: left;
  margin-left: 0;
  margin-right: auto;
  margin-bottom: 5vh;
`;

const ProdPrice = styled.div`
  font-size: 3.5vh;
  color: #fbb72c;
  font-weight: 600;
  display: inline-block;
`;
const ProdPriceOld = styled.small`
  font-size: 1.75vh;
  font-weight: 500;
  text-decoration: dotted 0.2vh;
  text-decoration-line: line-through;
  display: inline-block;
  margin-right: 5px;
  color: #868585;
`;
const ProdPriceSmall = styled.small`
  font-size: 2vh;
  font-weight: 500;
  display: inline-block;
  margin-right: 5px;
  color: #676767;
`;
const QuantityLine = styled.div`
  width: 100%;
  background-color: #ffffff;
  font-weight: 600;
  display: inline-flex;
  font-size: 3.5vh;
  margin-bottom: 2vh;
`;
const Button = styled.button`
  border: 0.3vh;
  background-color: ${(props) => props.inputBG || "teal"};
  color: ${(props) => props.inputColor || "white"};
  width: 60%;
  height: max-content;
  padding: 1vh;
  font-size: 3vh;
  border-radius: 15px;
  text-transform: uppercase;
  font-weight: 550;
  margin: 0.5vh;
  cursor: pointer;
  &:hover {
    outline-width: 2px;
    outline: ${(props) => props.inputHoverOutline || "blue"};
    background-color: ${(props) => props.inputHoverBG || "yellow"};
    color: white;
  }
`;

const ButtonCont = styled.div`
  border: none;
  display: flex;
  color: white;
  width: 100%;
  height: auto;
  gap: 5%;
  margin-bottom: 2vh;
`;

const BulkContainer = styled.div`
  border: none;
  color: #ffffff;
  width: 100%;
  height: auto;
  background-color: #575665;
  padding: 1vh;
  padding-bottom: 2vh;
  border-radius: 20px;
  font-size: large;
  font-weight: 600;
`;

const Refno = styled.span`
  display: block;
  font-size: 1.75vh;
  font-weight: 700;
  text-transform: uppercase;
  color: #afadad;
  margin-top: 3vh;
  text-align: left;
  width: 100%;
`;

//Quant button
const Quant = styled.div`
  display: inline;
  outline-color: black;
`;
const ValueButtonDecrease = styled.button`
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  padding: 11px 0;
  background: #eee;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
  margin-left: 1vh;

  &:hover {
    cursor: pointer;
  }
`;

const ValueButtonIncrease = styled.button`
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  padding: 11px 0;
  background: #eee;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-left: -4px;
  border-radius: 0 8px 8px 0;

  &:hover {
    cursor: pointer;
  }
`;

const Inp = styled.input`
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 38px;
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Description = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container>
      <Refno>Reference No.: 18902384</Refno>

      <Title>
        Havells Euro-II 63A Single Pole C Curve MCB, DHMGCSPF063
        <Checkbox
          icon={<FavoriteBorder />}
          checked={checked}
          onChange={handleChange}
          checkedIcon={<Favorite />}
        />
      </Title>
      <RatingLine>
        <Rating>
          <Star fontSize="small" sx={{ marginRight: "1vh" }} />
          4.3
        </Rating>
        (24)
        <br />
      </RatingLine>

      <StockLine>
        <Stock>In Stock</Stock>
      </StockLine>

      <Price>
        <ProdPriceSmall>₹ 11,800 (Incl. of all taxes)</ProdPriceSmall>
        <br />
        <ProdPrice>₹ 10,000</ProdPrice>
        <ProdPriceSmall>+₹ 1800 GST</ProdPriceSmall>
        <br />
        <b>MRP </b>
        <ProdPriceOld>₹ 12,000</ProdPriceOld>
      </Price>
      <QuantityLine>
        Quantity :
        <Quant>
          <ValueButtonDecrease>-</ValueButtonDecrease>
          <Inp value="0"></Inp>
          <ValueButtonIncrease>+</ValueButtonIncrease>
        </Quant>
      </QuantityLine>

      <ButtonCont>
        <Button
          inputColor="white"
          inputBG="#bd9042"
          inputHoverBG="#916519"
          inputHoverOutline="white"
        >
          Add to Cart
        </Button>
        <Button
          inputColor="white"
          inputBG="#c26e36"
          inputHoverBG="#7f4119"
          inputHoverOutline="white"
        >
          Buy Now
        </Button>
      </ButtonCont>
      <BulkContainer>
        Buy in Bulk
        <br />
        <Button
          inputColor="white"
          inputBG="#9ba256"
          inputHoverBG="#505716"
          inputHoverOutline="white"
        >
          Bulk Order
        </Button>
      </BulkContainer>
    </Container>
  );
};

export default Description;
