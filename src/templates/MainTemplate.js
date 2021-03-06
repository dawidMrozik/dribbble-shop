import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../theme/globalStyles'
import theme from '../theme/theme'

const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}

export default MainTemplate
