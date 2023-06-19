import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT, ADD, REMOVE } from '../../Redux/actions/action';
import styled from 'styled-components';
import Menu from '@mui/icons-material/Menu';
import { IconButton, Tab, Table, TableRow, TableCell, TableBody, TableHead, Input} from '@mui/material';
import { Add, Delete, Remove } from '@mui/icons-material';
import cartgif from "../../Assets/cart.gif"
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';


const Container=styled.div`
  margin: 3px;
  height: auto;
  width: 90%;

`
const Quant=styled.div`
  display: inline;
  outline-color: black;

`
const ValueButtonDecrease= styled.button`
        display: inline-block;
    border: 1px solid #ddd;
    margin: 0px;
    width: 40px;
    height: 40px;
    text-align: center;
    vertical-align: middle;
    padding: 11px 0;
    background: #eee;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-right: -4px;
    border-radius: 8px 0 0 8px;

    &:hover {
        cursor: pointer;


    }


`

const ValueButtonIncrease= styled.button`
        display: inline-block;
    border: 1px solid #ddd;
    margin: 0px;
    width: 40px;
    height: 40px;
    text-align: center;
    vertical-align: middle;
    padding: 11px 0;
    background: #eee;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-left: -4px;
    border-radius: 0 8px 8px 0;

    &:hover {
        cursor: pointer;


    }


`


const Inp= styled.input`
    text-align: center;
    border: none;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin: 0px;
    width: 40px;
    height: 40px;
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
`


const CartTab = () => {

    const [price,setPrice] = useState(0);
    // console.log(price);

    const getdata = useSelector((state)=> state.cartreducer.carts);
    // console.log(getdata);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const dlt = (id)=>{
        dispatch(DLT(id))
    }

    const add = (id)=>{
        dispatch(ADD(id))
    }

    const rmv = (id)=>{
        dispatch(REMOVE(id))
    }

    
    const total = ()=>{
        let price = 0;
        getdata.map((ele,k)=>{
            price = ele.price * ele.qnty + price
        });
        setPrice(price);
    };

    useEffect(()=>{
        total();
    },[total])



  return (


    <div>
        <Container>

                    {
                        getdata.length ? 
                        <div className='card_details' style={{width:"auto",padding:10}}>
                            <Table>
                            <TableHead>
                            <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell align="right">Product Details</TableCell>
                            <TableCell align="right"sx={{width:"20vh"}}>Quantity</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Delete</TableCell>
                                
                                
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {getdata.map((row) => (
                                <TableRow
                                key={row.rname}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                <TableCell component="th" scope="row"> 
                                <Avatar
                                    alt="Remy Sharp"
                                    src={row.img}
                                    sx={{ width: "20vh", height: "20vh" }}
                                />                                  
                                </TableCell>


                                <TableCell align="right">
                                    {row.rname}
                                    <br/>
                                    Ref no. :{row.refno}
                                    <br/>
                                    Price:₹ {row.price}
                                
                                </TableCell>                               
                                <TableCell align="right">
                               

                                <Quant>
                                <ValueButtonDecrease  onClick={row.qnty <=1 ? ()=>dlt(row.id) : ()=>rmv(row)}>-</ValueButtonDecrease>
                                <Inp value={row.qnty}/>
                                <ValueButtonIncrease  onClick={()=>add(row)}>+</ValueButtonIncrease>
                                </Quant>


                                    {/* <Box sx={{display:"inline", border: '3px black' }}>
                                    <IconButton sx={{size:"small", zIndex:10, paddingRight:"3vh", backgroundColor:'orange'}} onClick={row.qnty <=1 ? ()=>dlt(row.id) : ()=>rmv(row)}><Remove/></IconButton>
                                    {row.qnty}
                                    <IconButton sx={{size:"small", zIndex:10, paddingLeft:"3vh", backgroundColor:'orange'}} onClick={()=>add(row)}><Add/></IconButton>
                                    </Box> */}

                                    


                                
                                </TableCell>
                                <TableCell align="right">₹  {Math.ceil(row.price * row.qnty)}</TableCell>
                                         

                                <TableCell align="right"> <IconButton sx={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>dlt(row.id)}><Delete/> </IconButton>  </TableCell>


                                </TableRow>
                            ))}

                            </TableBody>

  
                            </Table>
                        </div>:
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"100%",padding:10,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:22}}>Your carts is empty</p>
                    <img src={cartgif} alt="" className='emptycart_img' style={{width:"5rem",padding:10}} />
                   </div>
                    }

      
                </Container>
      
    </div>
  )
}

export default CartTab
