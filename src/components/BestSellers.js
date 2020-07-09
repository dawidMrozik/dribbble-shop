import React from 'react'
import styled from 'styled-components'
import SortIcon from './SortIcon'
import BestSellerCard from './BestSellerCard'

const StyledSection = styled.section`
  grid-area: best-sellers;
`
const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 15rem;
`

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.accentDark};
  font-size: ${({ theme }) => theme.fs.xxl};
  margin-right: 1em;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const StyledWrapper = styled.div`
  display: flex;
`

const mockupData = [
  {
    id: 1,
    name: 'Face Mask',
    desc: 'Grape Fruit',
    price: '$16,00',
  },
  {
    id: 2,
    name: 'Rice Cream',
    desc: 'Rice Bran Oil',
    price: '$19,00',
  },
]

const BestSellers = () => {
  return (
    <StyledSection>
      <StyledHeader>
        <StyledTitle>Best Sellers</StyledTitle>
        <SortIcon />
      </StyledHeader>
      <StyledWrapper>
        {mockupData.map((card) => (
          <BestSellerCard card={card} key={card.name} />
        ))}
      </StyledWrapper>
    </StyledSection>
  )
}

export default BestSellers
