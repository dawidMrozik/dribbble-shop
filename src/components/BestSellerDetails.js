import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AddIcon from './AddIcon'

const BestSellerDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 33%;
  width: 96%;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.accentLight : props.theme.colors.gray};
  border-radius: 2em;
  color: ${(props) =>
    props.isActive ? 'white' : props.theme.colors.accentDark};
  padding: 1.5em;
`

const BestSellerDetailsTitle = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fs.l};
`

const BestSellerDetailsDesc = styled.p`
  margin-top: 0.5em;
  font-size: ${({ theme }) => theme.fs.xs};
`

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BestSellerDetailsPrice = styled.p`
  margin: 0;
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: ${({ theme }) => theme.fw.light};
  font-size: ${({ theme }) => theme.fs.xs};
`

const BestSellerDetails = ({ card, isActive }) => {
  return (
    <BestSellerDetailsWrapper isActive={isActive}>
      <div>
        <BestSellerDetailsTitle>{card.name}</BestSellerDetailsTitle>
        <BestSellerDetailsDesc>{card.desc}</BestSellerDetailsDesc>
      </div>
      <BottomWrapper>
        <BestSellerDetailsPrice>{card.price}</BestSellerDetailsPrice>
        <AddIcon isActive={isActive} />
      </BottomWrapper>
    </BestSellerDetailsWrapper>
  )
}

BestSellerDetails.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  isActive: PropTypes.bool,
}

BestSellerDetails.defaultProps = {
  isActive: false,
}

export default BestSellerDetails
