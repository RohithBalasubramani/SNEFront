import React, { useState } from "react";
import {
  AppBar,
  Badge,
  Button,
  InputBase,
  Paper,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PropTypes from 'prop-types'
import styled from "styled-components";

import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer"
import { AccountCircle, FavoriteBorder, HomeRounded, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { IconButton } from '@mui/material'
import { Link } from "react-router-dom";

const Toolba = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  console.log(value);

  function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 2}}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };


  const Wrapper = styled.div`
  width: 145vh;
  height:60vh ;
  background-color: #FFF7E9;
  margin-left:20%;
  margin-right: 50%;
  align-items: center;
  justify-content: center;
  margin-top: 0%;
  text-align: center;
  z-index:10;
  position: absolute;
  opacity: 0.9;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  
  
`; 

  return (
    <React.Fragment>
      <AppBar position="static" sx={{ background: "#042e5c"}}  >
        <Toolbar variant="dense">
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Link to="/">
              
              <IconButton aria-label={100} sx={{color:"white", fontSize: 15, marginLeft: "0%", marginRight:"15px", borderRadius:"0%" }}>
              <HomeRounded sx={{ fontSize: 30, color:"white" }}/>
              </IconButton>

              </Link>


              <Tabs
                sx={{ marginLeft: "auto", marginRight:"auto"}}
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                onMouseOver={(e, value) => setValue(value)}
              >
                <Tab label="Categories" />
                <Tab label="Brands" />
                <Tab label="Industries" />
                <Tab label="B2B Query" />
                <Tab label="Track Order"/>
                <Tab label="Contact Us"/>


              </Tabs>



            </>
          )}
        </Toolbar>
      </AppBar>

                {value === 0 && <TabContainer><Wrapper>Category</Wrapper></TabContainer>}
                {value === 1  && <TabContainer><Wrapper>Brand</Wrapper></TabContainer>}
               {value === 2 && <TabContainer><Wrapper>Industry</Wrapper></TabContainer>}
               
               

    </React.Fragment>
    
  );
};

export default Toolba;
