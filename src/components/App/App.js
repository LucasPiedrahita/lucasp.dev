import { Box } from '@mui/material'
import { Navbar, About } from '../'

const styles = {
  root: {
    width: 1,
  },
}

function App() {
  return (
    <Box sx={styles.root}>
      <Navbar />
      <About />
    </Box>
  )
}

export default App
