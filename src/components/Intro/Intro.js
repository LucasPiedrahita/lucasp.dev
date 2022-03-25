import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from '@mui/material'
import { Navbar } from '..'
import { useWindowDimensions } from '../../hooks'
import { ReactComponent as JavaScriptIcon } from '../../assets/js-square.svg'
import { ReactComponent as ReactIcon } from '../../assets/react.svg'
import { ReactComponent as HtmlIcon } from '../../assets/html5.svg'
import { ReactComponent as CssIcon } from '../../assets/css3-alt.svg'

const styles = {
  introContainer: {
    flexGrow: 1,
    m: 'auto',
    width: 1,
    px: {
      xs: 2,
      sm: 3,
    },
    maxWidth: 800,
    '& svg': {
      width: {
        xs: 32,
        sm: 40,
      },
      height: {
        xs: 32,
        sm: 40,
      },
    },
    '& li': {
      py: {
        sx: 1,
        sm: 2,
      },
    },
  },
  subtitle: {
    m: 0,
    maxWidth: 600,
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
  marginBottom: {
    mb: {
      xs: 2,
      sm: 3,
    },
  },
}

function Intro() {
  const { height } = useWindowDimensions()
  return (
    <Grid container sx={{ minHeight: height }} direction='column' wrap='nowrap'>
      <Grid sx={styles.marginBottom}>
        <Navbar />
      </Grid>
      <Grid
        component='section'
        container
        sx={styles.introContainer}
        direction='column'
        rowSpacing={{ xs: 1, sm: 2 }}
      >
        <Grid item>
          <Typography sx={styles.subtitle}>Hi, my name is</Typography>
          <Typography variant='h1' sx={styles.h1}>
            Lucas Piedrahita.
          </Typography>
          <Typography sx={styles.subtitle}>
            I'm a professional front-end developer who loves to build productivity-enhancing user
            interfaces with
          </Typography>
        </Grid>
        <Grid item>
          <List>
            <ListItem disableGutters>
              <ListItemIcon>
                <SvgIcon component={JavaScriptIcon} viewBox='0 0 448 512' />
              </ListItemIcon>
              <ListItemText primary='JavaScript' primaryTypographyProps={{ sx: styles.subtitle }} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <SvgIcon component={ReactIcon} viewBox='0 0 512 512' />
              </ListItemIcon>
              <ListItemText primary='React' primaryTypographyProps={{ sx: styles.subtitle }} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <SvgIcon component={HtmlIcon} viewBox='0 0 384 512' />
              </ListItemIcon>
              <ListItemText primary='HTML' primaryTypographyProps={{ sx: styles.subtitle }} />
            </ListItem>
            <ListItem disableGutters>
              <ListItemIcon>
                <SvgIcon component={CssIcon} viewBox='0 0 384 512' />
              </ListItemIcon>
              <ListItemText primary='CSS' primaryTypographyProps={{ sx: styles.subtitle }} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Intro
