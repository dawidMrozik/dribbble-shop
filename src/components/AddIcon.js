import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
  box-shadow: 0 1.5em 2em 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
`

const AddIcon = ({ isActive }) => {
  const color = isActive ? 'white' : '#413382'

  return (
    <StyledIcon isActive={isActive}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 1V21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="square"
        />
        <path
          d="M21 11H1"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
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
