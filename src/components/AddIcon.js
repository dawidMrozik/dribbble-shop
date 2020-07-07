import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import addIcon from '../assets/add-icon.svg'

const StyledIcon = styled.button`
  border: none;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.accentDark : 'white'};
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AddIcon = ({ isActive }) => {
  return (
    <StyledIcon isActive={isActive}>
      <img src={addIcon} alt="add to cart" />
    </StyledIcon>
  )
}

AddIcon.propTypes = {
  isActive: PropTypes.bool,
}

AddIcon.defaultProps = {
  isActive: false,
}

export default AddIcon
