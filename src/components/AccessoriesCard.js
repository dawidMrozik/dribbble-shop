import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${({ isActive }) => (isActive ? '90%' : '80%')};
  height: 15vh;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.accentLight : 'white'};
  border: 1px solid
    ${(props) => (props.isActive ? 'transparent' : props.theme.colors.gray)};
  border-radius: 2em;

  &:not(:last-of-type) {
    margin-bottom: 5vh;
  }
`

const StyledTitle = styled.h4`
  font-size: ${({ theme }) => theme.fs.l};
  color: ${(props) =>
    props.isActive ? 'white' : props.theme.colors.accentDark};
  margin: 0 0 0.25em 0;
`

const StyledDesc = styled.p`
  font-size: ${({ theme }) => theme.fs.xs};
  color: ${(props) =>
    props.isActive ? 'white' : props.theme.colors.accentDark};
  margin: 0;
`

const AccessoriesCard = ({ card, isActive }) => {
  return (
    <CardWrapper isActive={isActive}>
      <div>
        <StyledTitle isActive={isActive}>{card.name}</StyledTitle>
        <StyledDesc isActive={isActive}>{card.desc}</StyledDesc>
      </div>
    </CardWrapper>
  )
}

AccessoriesCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  isActive: PropTypes.bool,
}

AccessoriesCard.defaultProps = {
  isActive: false,
}

export default AccessoriesCard
