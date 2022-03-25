import { Box } from '@mui/material'
import { About } from '../'

const styles = {
  root: {
    width: 1,
  },
}

function App() {
  return (
    <Box sx={styles.root}>
      <main>
        <About />
      </main>
    </Box>
  )
}

export default App
