import React, {useState} from 'react';
import styled from "styled-components";
import {mobile} from "../responsive";
import covo from "../Assets/cov.webp"

import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';



import {Link} from "react-router-dom"


const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
const headerStyle = { margin: 0 }
const avatarStyle = { backgroundColor: '#1bbd7e' }
const marginTop = { marginTop: "0.9vh", borderRadius:"200px"}


const Container = styled.div`
  width: 100%;
  height: 150vh;
  background: linear-gradient(
    #f1f8ff,
      #1a4568
    ),
    url("C:/Users/Rohith Balasubramani/Desktop/MaterialUI-Navbar-master/MaterialUI-Navbar-master/src/Assets/cov.webp")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
const GenCon =styled.div`
    
    display: flex;
    height: auto;
    width: max-content;
    border-radius: 20px;
    font-weight: 800;
    margin: 5px;
    padding: 1.25vh;
    color: #212b45;
    border: 0.3vh solid #212b45;
    font-size: 2.5vh;



`


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

const form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const LinkDeco = styled.a`
  color: #213363;
  font-weight: 600;
    &:hover{
      color: #929dbd;;
    }
`;



const Signup = () => {
  const [alignment, setAlignment] = useState('b2b');

const handleChange2 = (event2, newAlignment) => {
  setAlignment(newAlignment);
};
  return (
    <Container>
      <Wrapper2/>
      <Wrapper>
      <Grid>

                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>

                    <br/>
                    <ToggleButtonGroup
                  color="primary"
                  value={alignment}
                  exclusive
                  onChange={handleChange2}
                  aria-label="Platform"
                >
                  <Link to="/signup" >
                  <ToggleButton value="b2c" color='primary' sx={{borderBottomLeftRadius:"20px", backgroundColor:"lightblue"  ,borderTopLeftRadius:"20px", "&:active":{backgroundColor:"lightblue"}}}>Consumer Account</ToggleButton>
                  </Link>
                  <Link to="/signupbtob" >
                  <ToggleButton value="b2b" color='primary' sx={{borderBottomRightRadius:"20px", borderTopRightRadius:"20px", "&:active":{backgroundColor:"lightblue"}}}>Buisness Account</ToggleButton>
                  </Link>
                </ToggleButtonGroup>
                <GenCon>
                Create a Consumer Account
                </GenCon>

                </Grid>
                <br/>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your full-name" />
                    <TextField fullWidth label='Email' placeholder="Enter your email" style={marginTop}/>
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" style={marginTop} />
                    <TextField fullWidth label='Password' type='password' placeholder="Enter your password" style={marginTop}/>
                    <TextField fullWidth label='Confirm Password' type='password' placeholder="Confirm your password" style={marginTop}/>

                    <br/>
                    <Button fullWidth type='submit' variant='contained' color='primary'sx={{marginTop:"2vh"}} >Sign up</Button>
                    <FormControlLabel sx={{width:"100%", marginLeft:"0", marginRight:"auto"}}
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                </form>
                <br/>
                <Typography > Already have an account?
                  <LinkDeco>
                     <Link to="/login" >
                     Sign In
                </Link>
                </LinkDeco>
                </Typography>
                <Typography > 
                  <LinkDeco>
                     <Link to="/signupbtob" >
                     Create a B2B Account
                </Link>
                </LinkDeco>
                </Typography>

        </Grid>
       </Wrapper>

    </Container>

  );
};

export default Signup;
