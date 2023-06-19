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
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer"
import { AccountCircle, FavoriteBorder, HomeRounded, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { IconButton } from '@mui/material'

const Toolba = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

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
              <IconButton aria-label={100} sx={{color:"white", fontSize: 15, marginLeft: "0%", marginRight:"15px", borderRadius:"0%" }}>
              <HomeRounded sx={{ fontSize: 30, color:"white" }}/>
              </IconButton>
              <Tabs
                sx={{ marginLeft: "auto", marginRight:"auto"}}
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
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
    </React.Fragment>
  );
};

export default Toolba;
