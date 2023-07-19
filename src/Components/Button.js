import React from 'react'
import { styled } from 'styled-components'

const Button = ({name,bg,width,onClick}) => {
  return (
    <ButtonStyled style={{
        background:bg,
        width:width,
    }} onClick={onClick}>
      {name}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
    outline:none;
    border:none;
    cursor:pointer;
    color:white;
    box-sizing:border-box;
    font-size:15px;
    margin:30px 0;
    border-radius:12px;
    padding:18px 20px;
`;

export default Button


