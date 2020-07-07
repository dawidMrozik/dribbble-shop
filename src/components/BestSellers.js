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
  margin: 1em 0;
`

const StyledTitle = styled.h2`
  color: ${({ theme }) => theme.colors.accentDark};
  font-size: ${({ theme }) => theme.fs.xxl};
  margin-right: 1em;
`

const StyledWrapper = styled.div`
  display: flex;
`

const mockupData = [
  {
    name: 'Face Mask',
    desc: 'Grape Fruit',
    price: '$16,00',
  },
  {
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
