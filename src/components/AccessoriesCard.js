import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${({ isActive }) => (isActive ? '1.5rem' : '5rem')};
  width: ${({ isActive }) => (isActive ? '90%' : '80%')};
  height: 15vh;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.accentLight : 'white'};
  border: 1px solid
    ${(props) => (props.isActive ? 'transparent' : props.theme.colors.gray)};
  border-radius: 2em;
  cursor: pointer;
  transition: all 300ms ease-out;

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

const StyledImg = styled.img`
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  margin-right: 5rem;
`

const StyledPriceWrapper = styled.div`
  width: 2.5rem;
  height: 6rem;
  border-radius: 2em;
  background-color: ${({ theme }) => theme.colors.accentDark};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5rem;
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: ${({ theme }) => theme.fw.light};
  font-size: ${({ theme }) => theme.fs.xs};
`

const StyledFlippedPrice = styled.p`
  transform: rotate(-90deg);
`

const AccessoriesCard = ({ card, isActive, setActiveCard }) => {
  return (
    <CardWrapper isActive={isActive} onClick={() => setActiveCard(card.id)}>
      {isActive && (
        <StyledPriceWrapper>
          <StyledFlippedPrice>{card.price}</StyledFlippedPrice>
        </StyledPriceWrapper>
      )}
      <StyledImg src="https://via.placeholder.com/400x400/E7DDF2/473889?text=Product" />
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
  setActiveCard: PropTypes.func,
}

AccessoriesCard.defaultProps = {
  isActive: false,
  setActiveCard: () => {},
}

export default AccessoriesCard
