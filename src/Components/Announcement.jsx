import styled from "styled-components";
import {Typography } from '@mui/material'
import {Link} from "react-router-dom"

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  
  return <Container><Link to="/bulkquery" >
                     Click here for bulk order query
                </Link>
                </Container>;
};

export default Announcement;
