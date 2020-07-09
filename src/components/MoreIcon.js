import React from 'react'
import styled from 'styled-components'
import moreIcon from '../assets/more-icon.svg'

const StyledButton = styled.button`
  border: none;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const MoreIcon = () => {
  return (
    <StyledButton>
      <img src={moreIcon} alt="show more" />
    </StyledButton>
  )
}

export default MoreIcon
