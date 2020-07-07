import React from 'react'
import styled from 'styled-components'
import MainTemplate from '../templates/MainTemplate'
import Header from '../components/Header'
import bg from '../assets/bg.svg'
import BestSellers from '../components/BestSellers'

const StyledContainer = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'header header'
    'best-sellers accessories';
  padding: 1rem 6rem;
  height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: auto calc(100vh - 2rem);
  background-position: 1rem 1rem;
`

const Home = () => {
  return (
    <MainTemplate>
      <StyledContainer>
        <Header />
        <BestSellers />
      </StyledContainer>
    </MainTemplate>
  )
}

export default Home
