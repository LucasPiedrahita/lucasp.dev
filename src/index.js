import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import reportWebVitals from './reportWebVitals'
import { App } from './components'

const theme = createTheme({
  typography: {
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.7,
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
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
