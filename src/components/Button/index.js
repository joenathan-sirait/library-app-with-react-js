import React from "react";
import { Link } from "react-router-dom";
import { ButtonStyled } from "../../styles/components/ButtonStyle";

const Button = (props) => {
  const { buttonName, onClick, primary , to} = props;

  return <ButtonStyled 
  className="parent" 
  to={to} 
  primary={primary} 
  onClick={onClick}>
    <Link className="link" to={to}>{buttonName}</Link>
    </ButtonStyled>
  ;
};

export default Button;
