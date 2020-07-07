import React from 'react'
import styled from 'styled-components'
import searchIcon from '../assets/search-icon.svg'

const StyledInput = styled.input`
  width: 20rem;
  height: 3rem;
  padding: 1em;
  margin-right: 6rem;
  border-radius: 1.1em;
  border: 1px solid #e7e7e7;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 95% center;
  font-size: ${({ theme }) => theme.fs.m};
  color: ${({ theme }) => theme.colors.accentDark};

  ::placeholder {
    color: ${({ theme }) => theme.colors.accentDark};
  }
`

const SearchInput = () => {
  return <StyledInput placeholder="Search" />
}

export default SearchInput
