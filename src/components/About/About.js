import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { ReactComponent as JavaScriptIcon } from '../../assets/js-square.svg'
import { ReactComponent as ReactIcon } from '../../assets/react.svg'

const styles = {
  container: {
    m: 'auto',
    width: 1,
    p: {
      xs: 2,
      sm: 3,
    },
    minHeight: '100vh - 52px',
    maxWidth: 800,
  },
  subtitle: {
    m: 0,
    fontSize: {
      xs: 'h6.fontSize',
      sm: 'h5.fontSize',
    },
  },
  h1: {
    my: 3,
    fontSize: {
      xs: 'h3.fontSize',
      sm: 'h1.fontSize',
    },
  },
  '& svg': {
    // TODO: figure out how to make these smaller
    width: 40,
    height: 40,
  },
}

function Navbar() {
  return (
    <Grid container sx={styles.container} direction='column' alignItems='center'>
      <Box sx={{ width: 1 }}>
        <Typography sx={styles.subtitle}>Hi, my name is</Typography>
        <Typography variant='h1' sx={styles.h1}>
          Lucas Piedrahita.
        </Typography>
        <Typography sx={styles.subtitle}>
          I'm a professional front-end developer who loves to build productivity-enhancing user
          interfaces with
        </Typography>
      </Box>
      <List>
        <ListItem disablePadding>
          <ListItemIcon>
            <JavaScriptIcon />
          </ListItemIcon>
          <ListItemText primary='JavaScript' />
        </ListItem>
        <ListItem disablePadding>
          <ListItemIcon>
            <ReactIcon />
          </ListItemIcon>
          <ListItemText primary='React' />
        </ListItem>
      </List>
    </Grid>
  )
}

export default Navbar
