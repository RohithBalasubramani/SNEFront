import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  Divider,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "../Drawer";
import {
  AccountCircle,
  FavoriteBorder,
  PlaceOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { useSelector } from "react-redux";
import HeaderCart from "./HeaderCart";
import HeaderFav from "./HeaderFav";
import styled from "styled-components";
import SearchBar from "./SearchBar";

const Container = styled.div`
  margin: 3px;
  height: auto;
  width: 60vh;
`;

const SearchCon = styled.div`
  width: 55%;
  margin-right: 10%;
`;

const Dropbtn = styled.div`
  color: white;
  border: none;
`;

const Dropdowncontent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 65vh;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  &:hover {
    background-color: #ddd;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 0;
  direction: rtl;
  width: auto;
  &:hover ${Dropdowncontent} {
    display: block;
  }
  &:hover ${Dropbtn} {
    background-color: #3e8e41;
  }
`;

const Dropdownontenta = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #ddd;
  }
`;

const Header = () => {
  const cart = useSelector((state) => state.cartreducer.carts);
  let cartlen = cart.length;

  const favo = useSelector((state) => state.favreducer.fav);
  let favlen = favo.length;
  //cart

  console.log(HeaderCart);

  const [anchorEl, setAnchorEl] = useState(null);
  const opencart = Boolean(anchorEl);
  const handleClickcart = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosecart = () => {
    setAnchorEl(null);
  };

  //wishlist

  console.log(HeaderCart);

  const [anchorE2, setAnchorE2] = useState(null);
  const openfav = Boolean(anchorE2);
  const handleChangefav = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar position="sticky" sx={{ background: "#063970" }}>
        <Toolbar>
          <Link to="/">
            <AddBusinessRoundedIcon
              sx={{ transform: "scale(2)", color: "white" }}
            />
          </Link>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                SNE
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <IconButton
                variant="outlined"
                aria-label={100}
                onClick={handleClickOpen}
                sx={{
                  color: "white",
                  fontSize: 15,
                  marginLeft: "150px",
                  width: "120px",
                  height: "50px",
                  borderRadius: "5%",
                  alignItems: "left",
                  alignVerticle: "Left",
                  display: "flex",
                  justifyContent: "flex-start",
                  border: "2px solid white",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                }}
              >
                <PlaceOutlined sx={{ fontSize: 30, color: "white" }} />
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ bgcolor: "white", marginRight: "5px" }}
                />
                Enter <br /> Pincode
              </IconButton>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Pincode</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Please enter the pincode to check the delivery
                  </DialogContentText>

                  <TextField
                    Outlined
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Pincode"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose}>Submit</Button>
                </DialogActions>
              </Dialog>

              <SearchCon>
                <SearchBar />
              </SearchCon>

              {/* Wishlist */}

              <Dropdown>
                <Dropbtn>
                  <IconButton aria-label={100}>
                    <Badge
                      badgeContent={favlen}
                      color="secondary"
                      id="basic-button"
                      aria-controls={openfav ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={openfav ? "true" : undefined}
                      onClick={HeaderFav}
                    >
                      <FavoriteBorder sx={{ fontSize: 30, color: "white" }} />
                    </Badge>
                  </IconButton>
                </Dropbtn>
                <Dropdowncontent>
                  <Dropdownontenta>
                    <HeaderFav />
                  </Dropdownontenta>
                </Dropdowncontent>
              </Dropdown>

              {/* <TooltipCard>
        <TooltipText>
        <IconButton aria-label={100}>
                <Badge badgeContent={cartlen} color="secondary" 
                id="basic-button"
                aria-controls={opencart ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={opencart ? 'true' : undefined}
                onClick={HeaderCart}
                >
                  <ShoppingCartOutlined sx={{ fontSize: 30, color:"white" }}/>
                </Badge>
              </IconButton>
        </TooltipText>
        <TooltipBox>
          <HeaderCart/>

        </TooltipBox>
      </TooltipCard> */}

              {/* Cart */}
              <Dropdown>
                <Dropbtn>
                  <Link to="/cart">
                    <IconButton aria-label={100}>
                      <Badge
                        badgeContent={cartlen}
                        color="secondary"
                        id="basic-button"
                        aria-controls={opencart ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={opencart ? "true" : undefined}
                        onClick={HeaderCart}
                      >
                        <ShoppingCartOutlined
                          sx={{ fontSize: 30, color: "white" }}
                        />
                      </Badge>
                    </IconButton>
                  </Link>
                </Dropbtn>
                <Dropdowncontent>
                  <Dropdownontenta>
                    <HeaderCart />
                  </Dropdownontenta>
                </Dropdowncontent>
              </Dropdown>

              <Link to="/login">
                <IconButton
                  aria-label={100}
                  sx={{ color: "white", fontSize: 15, borderRadius: "0%" }}
                >
                  <AccountCircle sx={{ fontSize: 30, color: "white" }} />
                  Login /Register
                </IconButton>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
