import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVEFAV } from '../../Redux/actions/action';
import styled from 'styled-components';
import Menu from '@mui/icons-material/Menu';
import { IconButton, Tab, Table, TableRow, TableCell, TableBody, TableHead} from '@mui/material';
import { Delete } from '@mui/icons-material';
import heartgif from "../../Assets/heartgif.gif"


const Container=styled.div`
  margin: 3px;
  height: auto;
  width: 60vh;

`

const HeaderFav = () => {

    const [price,setPrice] = useState(0);
    // console.log(price);

    const getdata = useSelector((state)=> state.favreducer.fav);
    console.log(getdata);

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const rmv = (id)=>{
        dispatch(REMOVEFAV(id))
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
                        <div className='card_details' style={{width:"24rem",padding:10}}>
                            <Table>
                            <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell align="right">Product</TableCell>
                                <TableCell align="right">Price</TableCell>
                                  <TableCell align="right">Remove</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {getdata.map((row) => (
                                <TableRow
                                key={row.rname}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    
                                    <img src='${row.img}?w=164&h=164&fit=crop&auto=format'/>
                                </TableCell>
                                <TableCell align="right">{row.rname}</TableCell>
                                <TableCell align="right">₹ {row.price}</TableCell>
                                <TableCell align="right"> <IconButton sx={{color:"red",fontSize:20,cursor:"pointer"}}  onClick={()=>rmv(row.id)}><Delete/> </IconButton>  </TableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                            Total :₹ {price}

                            </TableRow>
                            </TableBody>

  
                            </Table>
                        </div>:
                        
                   <div className='card_details d-flex justify-content-center align-items-center' style={{width:"24rem",padding:10,position:"relative"}}>
                    <i className='fas fa-close smallclose'
                    onClick={handleClose}
                     style={{position:"absolute",top:2,right:20,fontSize:23,cursor:"pointer"}}></i>
                    <p style={{fontSize:22}}>You have no liked products</p>
                    <img src={heartgif} alt="" className='emptycart_img' style={{width:"9rem",padding:10}} />
                   </div>
                    }

      
                </Container>
      
    </div>
  )
}

export default HeaderFav
