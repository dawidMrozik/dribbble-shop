import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconWrapper = styled.button`
  border-radius: 50%;
  border: 1px solid
    ${(props) => (props.isActive ? props.theme.colors.gray : 'transparent')};
  background: none;
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const RightArrowIcon = ({ isActive }) => {
  const color = isActive ? 'rgba(70, 65, 133, 1)' : 'rgba(70, 65, 133, 0.2)'

  return (
    <IconWrapper isActive={isActive} disabled={!isActive}>
      <svg
        width="22"
        height="18"
        viewBox="0 0 22 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 9H20" stroke={color} strokeWidth="2" />
        <path
          d="M13 2L20 9L13 16"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="square"
        />
      </svg>
    </IconWrapper>
  )
}

RightArrowIcon.propTypes = {
  isActive: PropTypes.bool,
}

RightArrowIcon.defaultProps = {
  isActive: false,
}

export default RightArrowIcon
