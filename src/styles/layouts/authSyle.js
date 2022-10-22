import styled from "styled-components";

export const Wrapper = styled.div`
  &.layout-wrapper {
    display: flex;
    height: 100vh;
 
  }
  &.layout-wrapper .left  {
    width: 55%;
    background-image: url(https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  &.layout-wrapper .left h1 {
    margin: 30px;
    color: white;
  }
  
  &.layout-wrapper .right {
    flex: 1;
  }
  
`;


