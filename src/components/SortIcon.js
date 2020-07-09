import React from 'react'
import styled from 'styled-components'
import sortIcon from '../assets/sort-icon.svg'

const StyledIcon = styled.button`
  border: none;
  border-radius: 50%;
  background: white;
  width: 4rem;
  height: 4rem;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1.5em 2em 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
`

const SortIcon = () => {
  return (
    <StyledIcon>
      <img src={sortIcon} alt="sort" />
    </StyledIcon>
  )
}

export default SortIcon
