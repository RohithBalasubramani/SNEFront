import React from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import covo from "../Assets/cov.webp"

import { Grid,Paper, Avatar, TextField, Button, Typography, InputAdornment } from '@mui/material'

import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

import {Link} from "react-router-dom"
import { AccountCircle, Key, Lock, Password, PasswordRounded } from '@mui/icons-material';

const paperStyle={width: "auto", padding: "20px", height:"0px", marginLeft: 0, marginRight: 0, alignItems: "center", justifyContent: "center", textAlign: "center",   backgroundColor: "white"}
const avatarStyle={backgroundColor:'darkblue', height:"4rem", width:"4rem"}
const btnstyle={margin:'8px 0'}


const Container = styled.div`
  width: 100%;
  height: 120vh;
  background: linear-gradient(
    #f1f8ff, #1a4568
    ),
    url("C:/Users/Rohith Balasubramani/Desktop/MaterialUI-Navbar-master/MaterialUI-Navbar-master/src/Assets/cov.webp")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Wrapper = styled.div`
  width: 35%;
  padding: 20px;
  height:75% ;
  background-color: white;
  ${mobile({ width: "75%" })}
  margin-left: 0; 
  margin-right: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  
`;

const Wrapper2 =styled.div`
  width: 45%;
  padding: 20px;
  height:75% ;
  background-color: white;
  background-image: url(${covo});
  ${mobile({ width: "75%" })}
  margin-left: auto; 
  margin-right: 0%;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const LinkDeco = styled.a`
  color: #213363;
  font-weight: 600;
    &:hover{
      color: #929dbd;;
    }
`;



const Login = () => {
  return (
    <Container>
      <Wrapper2/>
      <Wrapper>
      <Grid>
                <Grid align='center'>
                     <Avatar style={avatarStyle}></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField sx={{margin:"0.75vh"}} label='Username' placeholder='Enter username' fullWidth required 
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <AccountCircle />
                            </InputAdornment>
                          ),
                        }}
                
                />
                <br/>
                <TextField sx={{margin:"0.75vh"}} label='Password' placeholder='Enter password' type='password' fullWidth required
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Lock />
                            </InputAdornment>
                          ),
                        }}

                />
                <FormControlLabel sx={{width:"100%", marginLeft:"0", marginRight:"auto"}}
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"

                    
                 />

                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                  <LinkDeco>
                     <Link to="/signup" >
                        Forgot password ?
                </Link>
                </LinkDeco>
                </Typography>
                <Typography > Do you have an account ?
                  <LinkDeco>
                     <Link to="/signup" >
                        Sign Up 
                </Link>
                </LinkDeco>
                </Typography>
        </Grid>
       </Wrapper>

    </Container>

  );
};

export default Login;
