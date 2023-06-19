import styled from "styled-components";
import { Products4 } from "../../../data";
import { mobile } from "../../../responsive";
import ProductItem from "./ProductItems";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Product = () => {
  return (
    <Container>
      {Products4.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Product;
