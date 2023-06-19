import React, { useState } from "react";
import {
  AppBar,
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
import DrawerComp from "./Drawer";
import { AccountCircle, FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import { IconButton } from '@mui/material'

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(2)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                SNE 
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="primary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Categories" />
                <Tab label="Brands" />
                <Tab label="Industries" />
                <Tab label="B2B Query" />
              </Tabs>

              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "30%", marginLeft:"30px", borderRadius: "30px" }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search SN Electrical"
                  inputProps={{ 'aria-label': 'SNEsearch' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                  <SearchOutlined />
                </IconButton>
              </Paper>

              <Button sx={{ marginLeft: "auto" }} variant="contained" startIcon={<FavoriteBorder/>}>
                Liked
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained" startIcon={<ShoppingCartOutlined/>}>
                Cart
              </Button>
              <Button sx={{ marginLeft: "10px" }} startIcon={<AccountCircle />}>
                Login
              </Button>

            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
