import React from 'react'
import styled from 'styled-components'
import LeftArrowIcon from './LeftArrowIcon'
import RightArrowIcon from './RightArrowIcon'
import AccessoriesCard from './AccessoriesCard'

const StyledSection = styled.section`
  grid-area: accessories;
  display: flex;
  height: 100%;
`

const StyledHeader = styled.h2`
  color: ${({ theme }) => theme.colors.accentDark};
  font-size: ${({ theme }) => theme.fs.l};
  margin: 0;
  padding-left: 6rem;
  height: 15rem;
  display: flex;
  align-items: center;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ArrowsWrapper = styled.div`
  display: flex;
  height: 15rem;
  align-items: center;
  margin-right: 8rem;
`

const CardsWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;
`

const mockupData = [
  {
    id: 1,
    name: 'Comb 2.0',
    desc: 'Original Version',
    price: '$50.00',
  },
  {
    id: 2,
    name: 'Watch+',
    desc: 'Trending 2020',
    price: '$19.00',
  },
  {
    id: 3,
    name: 'Camera®',
    desc: 'Classic 1992',
    price: '$29.99',
  },
]

const Accessories = () => {
  return (
    <StyledSection>
      <ArrowsWrapper>
        <LeftArrowIcon isActive />
        <RightArrowIcon />
      </ArrowsWrapper>
      <StyledContainer>
        <StyledHeader>Accessories</StyledHeader>
        <CardsWrapper>
          {mockupData.map((card) => (
            <AccessoriesCard card={card} isActive={card.id === 2} />
          ))}
        </CardsWrapper>
      </StyledContainer>
    </StyledSection>
  )
}

export default Accessories
