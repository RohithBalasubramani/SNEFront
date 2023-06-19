import React from 'react'
import './Whychooseus1.css'
import styled from 'styled-components'
import { AssignmentTurnedIn, Login, ReceiptLong, RequestQuote } from '@mui/icons-material';

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-flow: wrap;
  margin: 0;
  height: 100%;
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
  position: relative;
  border-left: 10vh;
  border-right: auto;


`;

const Howbtob = () => {
  return (
    <>
    <div class="feat bg-gray pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="section-head col-sm-12">
          <h4><span>How to place </span> Bulk-Orders</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, explicabo repellat magni ab laudantium consectetur fugit sit similique ratione, quod aut dolorem quae dolores perspiciatis temporibus quisquam natus assumenda earum.</p>
        </div>
        <Container>
        <Wrapper>
          <div class="item"> <span class="icon feature_box_col_one"><i class="fa fa-globe"><Login sx={{zindex:"10", fontSize: 45, alignContent:"center" }}/></i></span>
            <h6>Log In</h6>
            <p>Inorder to place Bulk orders place login/Signup to your b2b account.</p>
          </div>
        </Wrapper>
        <Wrapper>
          <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-anchor"><RequestQuote sx={{zindex:"10", fontSize: 45, alignContent:"center" }}/></i></span>
            <h6>Request Quotes</h6>
            <p>Request quote by clicking place bulk order button on the product menu</p>
          </div>
        </Wrapper>
        <Wrapper>
          <div class="item"> <span class="icon feature_box_col_three"><i class="fa fa-hourglass-half"><ReceiptLong sx={{zindex:"10", fontSize: 45, alignContent:"center" }}/></i></span>
            <h6>Receive Quotes</h6>
            <p>You will receive a quote within 24hrs of placing order</p>
          </div>
        </Wrapper>
        <Wrapper>
          <div class="item"> <span class="icon feature_box_col_four"><i class="fa fa-database"><AssignmentTurnedIn sx={{zindex:"10", fontSize: 45, alignContent:"center" }}/></i></span>
            <h6>Finalize</h6>
            <p>After receiving the quote you can finilize the order and will be be delivered to you within the assured time</p>
          </div>
        </Wrapper>

        </Container>
      </div>
    </div>
  </div>
      
    </>
  )
}

export default Howbtob
