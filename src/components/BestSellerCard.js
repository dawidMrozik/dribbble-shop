import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BestSellerDetails from './BestSellerDetails'

const StyledCard = styled.div`
  width: 20rem;
  height: 50vh;
  background: white;
  border-radius: 2em;
  box-shadow: 0 1.5em 2em 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  &:first-of-type {
    margin-right: 3em;
  }
`
const StyledCardImgWrapper = styled.div`
  padding: 2em;
  height: 66%;
  background-image: url('https://cdn.pixabay.com/photo/2014/04/03/10/02/erlenmeyer-flask-309689_960_720.png');
  background-size: 66%;
  background-repeat: no-repeat;
  background-position: center;
`

const BestSellerCard = ({ card }) => {
  return (
    <StyledCard>
      <StyledCardImgWrapper />
      <BestSellerDetails card={card} isActive />
    </StyledCard>
  )
}

BestSellerCard.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
}

export default BestSellerCard
