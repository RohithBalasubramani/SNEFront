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
      <AppBar position="sticky" sx={{ background: "#063970"}}  >
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
                sx={{ display: 'flex', alignItems: 'center', width: "30%", marginLeft:"35px", borderRadius: "30px", height:"35px", borderStyle:"groove" }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search SN Electrical"
                  inputProps={{ 'aria-label': 'SNEsearch' }}
                />
              <Button sx={{ marginLeft: "auto", borderRadius:"30px", height:"35px", marginRight:"0", paddingRight:"0", borderRight:"0"}} variant="contained"  startIcon={<SearchOutlined/>}>
        
              </Button>
              </Paper>

              <IconButton aria-label={100} sx={{ marginLeft: "80px", borderRadius:"30px", height:"35px", marginRight:"0", paddingRight:"0"}}>
                <Badge badgeContent={10} color="secondary">
                  <FavoriteBorder/>
                </Badge>
              </IconButton>

              <IconButton aria-label={100}>
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartOutlined/>
                </Badge>
              </IconButton>
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
