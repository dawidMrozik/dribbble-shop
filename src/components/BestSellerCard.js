import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BestSellerDetails from './BestSellerDetails'

const StyledCard = styled.div`
  width: 20rem;
  height: 55vh;
  background: white;
  border-radius: 2em;
  box-shadow: 0 1.5em 2em 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  &:first-of-type {
    margin-right: 3em;
  }
`
const StyledCardImgWrapper = styled.div`
  padding: 2em;
  height: 66%;
  width: 100%;
  background-image: url('https://via.placeholder.com/400x400/E7DDF2/473889?text=Product');
  background-size: 80% 80%;
  background-repeat: no-repeat;
  background-position: center;
`

const BestSellerCard = ({ card }) => {
  return (
    <StyledCard>
      <StyledCardImgWrapper />
      <BestSellerDetails card={card} isActive={card.id === 1} />
    </StyledCard>
  )
}

BestSellerCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
}

export default BestSellerCard
