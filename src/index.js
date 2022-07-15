import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline, GlobalStyles } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import reportWebVitals from './reportWebVitals'
import { App } from './components'

const theme = createTheme({
  typography: {
    body1: {
      fontSize: '1.2rem',
      lineHeight: 1.7,
    },
  },
  palette: {
    primary: {
      main: '#42b348',
    },
  },
  overrides: {
    MuiTypography: {
      gutterBottom: {
        mb: {
          xs: 2,
          sm: 3,
        },
      },
    },
    section: {
      px: {
        xs: 2,
        sm: 3,
      },
      py: 10,
      maxWidth: 1000,
      mx: 'auto',
    },
    maxWidth: {
      default: 1000,
      large: 1200,
    },
    background: {
      intro: {
        mainGradient: 'linear-gradient(330deg, #ffffff 0%, #ffffff 100%)',
        transitionFront: '#2e7d32',
        transitionMiddle: '#5bab5f',
        transitionBack: '#a2dea5',
        textColor: '#000000de',
      },
      about: {
        mainGradient: 'linear-gradient(180deg, #2e7d32 0%, #1f3012 100%)',
        textColor: '#ffffffee',
      },
      projects: {
        mainGradient: 'linear-gradient(180deg, #1f3012 0%, #161809 100%)',
        textColor: '#ffffffde',
      },
      footer: {
        mainGradient: 'linear-gradient(180deg, #161809 0%, #161809 100%)',
        textColor: '#ffffffde',
      },
    },
  },
})

const globalStyles = (
  <GlobalStyles
    styles={{
      ':focus-visible': {
        outline: '2px auto #42b348 !important',
        outlineOffset: '3px',
        backgroundColor: 'transparent !important',
      },
      '.MuiButtonBase-root:hover': {
        backgroundColor: 'transparent !important',
      },
    }}
  />
)

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {globalStyles}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
