import { Box } from '@mui/material'
import { Intro, About, Projects } from '../'

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
        <About />
        <Projects />
      </main>
    </Box>
  )
}

export default App
