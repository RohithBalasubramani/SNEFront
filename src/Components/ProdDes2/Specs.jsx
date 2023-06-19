import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';

function createData(key,val) {
  return { key,val};
}

const rows = [
  createData("Brand", "Havells"),
  createData('Series', "Euro-II"),
  createData('Curve Type', "C"),
  createData('Country of origin', "India"),
  createData('Applications', "Protection against overload & short circuit for Motor and other Inductive loads"),
  createData("Current Rating", "63 Amp"),
  createData('Number of Poles', "Single Pole"),
  createData('Customer Care Number', "1800-103-1313"),
  createData('Breaking Capacity', "10kA"),
  createData('Standards', "IS/IEC 60898-1"),
];

const Container = styled.div`
width: 100%;
height: 80%;
margin-top: 0.5vh;
background-color: #ffffff;
margin-left: auto;
margin-right: auto;
text-align: left;
align-items: center;
align-content: center;
border-radius: 20px;
padding: 2vh;

`;

export default function Specs() {
  return (
    <Container>
    <TableContainer component={Paper} sx={{ textAlign:"Left"}}>
      <Table sx={{ minWidth: 650 , textAlign:"Left"}} size="small" aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.key}</TableCell>
              <TableCell align="left">{row.val}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
