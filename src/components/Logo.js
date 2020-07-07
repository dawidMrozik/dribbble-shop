import React from 'react'
import styled from 'styled-components'
import logoIcon from '../assets/logo.svg'

const StyledLogo = styled.figure`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fs.l};
  font-weight: ${({ theme }) => theme.fw.bold};
  color: ${({ theme }) => theme.colors.accentDark};
  margin: 0;
`
const StyledFigcaption = styled.figcaption`
  margin-right: 0.5em;
`

const Logo = () => {
  return (
    <StyledLogo>
      <StyledFigcaption>Ladies</StyledFigcaption>
      <img src={logoIcon} alt="Logo" />
    </StyledLogo>
  )
}

export default Logo
