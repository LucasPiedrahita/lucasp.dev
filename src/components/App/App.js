import { Box } from '@mui/material'
import { Intro } from '../'

const styles = {
  root: {
    width: 1,
  },
}

function App() {
  return (
    <Box sx={styles.root}>
      <main>
        <Intro />
      </main>
    </Box>
  )
}

export default App
