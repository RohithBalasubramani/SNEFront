import React from 'react'
import './Whychooseus1.css'
import styled from 'styled-components'
import { CachedTwoTone, LocalShipping, SupportAgent, WorkspacePremium } from '@mui/icons-material';

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

const Whychooseus = () => {
  return (
    <>
        <div class="feat bg-gray pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="section-head col-sm-12">
          <h4><span>Why Choose</span> Us?</h4>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, exercitationem. Temporibus dolorem, tempore necessitatibus iusto obcaecati a ipsam eum placeat consequatur repellendus! Laudantium quasi rem distinctio blanditiis temporibus adipisci fugit!</p>
        </div>
        <Container>
        <Wrapper>
          <div class="item"> <span class="icon feature_box_col_one"><i class="fa fa-globe"><CachedTwoTone sx={{zindex:"10", fontSize: 45, alignContent:"center" }}/></i></span>
            <h6>Easy Replacement</h6>
            <p>Get easy replacement within a week of receiving your oeder </p>
          </div>
        </Wrapper>
        <Wrapper>
          <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-anchor"><LocalShipping sx={{zindex:"10", fontSize: 45, alignContent:"center" }}/></i></span>
            <h6>Get Free Delivery</h6>
            <p>Get Free Delivery on orders above Rs. 3000</p>
          </div>
        </Wrapper>
        <Wrapper>
          <div class="item"> <span class="icon feature_box_col_three"><i class="fa fa-hourglass-half"><SupportAgent sx={{zindex:"10", fontSize: 45, alignContent:"center" }}/></i></span>
            <h6>24 x 7 User Support</h6>
            <p>If our customer has any problem and any query we are always happy to help then.</p>
          </div>
        </Wrapper>
        <Wrapper>
          <div class="item"> <span class="icon feature_box_col_four"><i class="fa fa-database"><WorkspacePremium sx={{zindex:"10", fontSize: 45, alignContent:"center" }}/></i></span>
            <h6>100% ORIGINAL</h6>
            <p>guarantee for all products at snelectric.com</p>
          </div>
        </Wrapper>

        </Container>
      </div>
    </div>
  </div>
      
    </>
  )
}

export default Whychooseus
