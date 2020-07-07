import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Roboto:wght@400;500;700&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        font-family: "Roboto", sans-serif;
        margin: 0;
    }
`

export default GlobalStyles
