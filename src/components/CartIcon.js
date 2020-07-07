import React from 'react'
import styled from 'styled-components'
import cartIcon from '../assets/cart-icon.svg'

const StyledIcon = styled.button`
  border: none;
  background: none;
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CartIcon = () => {
  return (
    <StyledIcon>
      <img src={cartIcon} alt="cart icon" />
    </StyledIcon>
  )
}

export default CartIcon
