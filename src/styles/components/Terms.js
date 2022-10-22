import styled from "styled-components";

export const TermsStyled = styled.p`
    &.parent {
        position: absolute;
        bottom: 0;
        text-align: center;
        color: black;
        margin-left: 180px;
        
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
           position: absolute;
           bottom: 0;
           left: 70px;    
        }
  
    }
    &.parent .link {    
        color: grey;
    }
    




`;
