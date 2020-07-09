import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconWrapper = styled.button`
  border-radius: 50%;
  border: 1px solid
    ${(props) => (props.isActive ? props.theme.colors.gray : 'none')};
  background: none;
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
  margin-right: 1em;
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LeftArrowIcon = ({ isActive }) => {
  const color = isActive ? 'rgba(70, 65, 133, 1)' : 'rgba(70, 65, 133, 0.2)'

  return (
    <IconWrapper isActive={isActive}>
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 9H2" stroke={color} strokeWidth="2" />
        <path
          d="M9 16L2 9L9 2"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    </IconWrapper>
  )
}

LeftArrowIcon.propTypes = {
  isActive: PropTypes.bool,
}

LeftArrowIcon.defaultProps = {
  isActive: false,
}

export default LeftArrowIcon
