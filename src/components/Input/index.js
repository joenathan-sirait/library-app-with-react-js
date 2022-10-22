import React from "react";

import { InputStyled } from "../../styles/components/InputStyle";



const Input = (props) => {
    const {onChange, type, placeholder} = props

    return <InputStyled type={type} placeholder={placeholder} onChange={onChange}></InputStyled>
}

export default Input;