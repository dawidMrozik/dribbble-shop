import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import SearchInput from './SearchInput'
import CartIcon from './CartIcon'
import MoreIcon from './MoreIcon'

const StyledHeader = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <StyledContainer>
        <SearchInput />
        <CartIcon />
        <MoreIcon />
      </StyledContainer>
    </StyledHeader>
  )
}

export default Header
