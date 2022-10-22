import React from "react";
import Logo from "../../components/Logo";
import Terms from "../../components/Terms";
import { Wrapper } from "../../styles/layouts/authSyle";

const LayoutAuth = (props) => {
  const { children } = props;

  return (
    
    <Wrapper className="layout-wrapper">
      <div className="left">
        <h1>Welcome, user!</h1>
      </div>
      <div className="right">
      <Logo></Logo>
      
        {children}
        <Terms></Terms>
        
        </div>
    </Wrapper>
  );
};

export default LayoutAuth;