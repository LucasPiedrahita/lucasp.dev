import { Box } from '@mui/material'
import { Intro, About, Projects, Footer } from '../'

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
      <Footer />
    </Box>
  )
}

export default App
