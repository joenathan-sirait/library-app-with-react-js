import styled from "styled-components";

export const ButtonStyled = styled.a`
    &.parent {
        background-color: ${props => props.primary ? "white" : "black"};
        border: ${props => props.primary ? "groove" : "none"};
        padding: 15px 32px;
        text-align: center;
        display: inline-block;
        font-size: 16px;
        margin-right: 20px;
        margin-top: 20px;
        text-decoration: none;
        border: 1px grey solid;
        border-radius: 12px;
    }
    &.parent .link {    
        color: ${props => props.primary ? "black" : "white"};
        text-decoration: none;
        
    
    }




`;
