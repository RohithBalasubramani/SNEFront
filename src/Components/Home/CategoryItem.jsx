import { ReadMore, ShoppingCart } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../../responsive";


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
  border-radius:20px;
`;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 40vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  border-radius:20px;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:20px;

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
    color: #ffffff;
    margin-bottom:1vh;
    margin-top:auto;
    border-radius:20px;
    margin-bottom: 20px;
    text-shadow: 2px 2px #151546;
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

const CategoryItem = ({ item }) => {
  return (
    <Container>

      <Image src={item.img} />
      <Info2>
      <Title>{item.title}</Title>
      </Info2>
      <Info>

      <Icon>
          <ReadMore/>
        </Icon>



      </Info>
    </Container>
  );
};

export default CategoryItem;
