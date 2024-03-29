import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
  useTheme,
} from '@mui/material'
import { Navbar } from '..'
import { useWindowDimensions } from '../../hooks'
import { ReactComponent as JavaScriptIcon } from '../../assets/js-square.svg'
import { ReactComponent as ReactIcon } from '../../assets/react.svg'
import { ReactComponent as HtmlIcon } from '../../assets/html5.svg'
import { ReactComponent as CssIcon } from '../../assets/css3-alt.svg'
import TransitionSvg from './TransitionSvg'

const getStyles = (theme) => ({
  outerContainer: {
    backgroundImage: theme.overrides.background.intro.mainGradient,
    color: theme.overrides.background.intro.textColor,
  },
  introContainer: {
    ...theme.overrides.section,
    flexGrow: 1,
    py: 0,
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
    fontWeight: 'fontWeightBold',
  },
  navbarContainer: {
    mb: {
      xs: 2,
      sm: 3,
    },
  },
  transitionContainer: {
    display: 'flex',
    mt: -10,
  },
  javaScriptItem: {
    '&:hover svg, &:focus svg': {
      color: '#ddb700',
    },
  },
  reactItem: {
    '&:hover svg, &:focus svg': {
      color: '#06a5d1',
    },
  },
  htmlItem: {
    '&:hover svg, &:focus svg': {
      color: '#e34c26',
    },
  },
  cssItem: {
    '&:hover svg, &:focus svg': {
      color: '#1873ba',
    },
  },
})

function Intro() {
  const { height } = useWindowDimensions()
  const theme = useTheme()
  const styles = getStyles(theme)
  return (
    <Grid
      container
      sx={{ ...styles.outerContainer, minHeight: height }}
      direction='column'
      wrap='nowrap'
    >
      <Grid sx={styles.navbarContainer}>
        <Navbar />
      </Grid>
      <Grid
        component='section'
        container
        sx={styles.introContainer}
        direction='column'
        justifyContent='center'
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
            <ListItem disableGutters sx={styles.javaScriptItem}>
              <ListItemIcon>
                <SvgIcon component={JavaScriptIcon} viewBox='0 0 448 512' />
              </ListItemIcon>
              <ListItemText
                primary='JavaScript (ES6+)'
                primaryTypographyProps={{ sx: styles.subtitle }}
              />
            </ListItem>
            <ListItem disableGutters sx={styles.reactItem}>
              <ListItemIcon>
                <SvgIcon component={ReactIcon} viewBox='0 0 512 512' />
              </ListItemIcon>
              <ListItemText primary='React' primaryTypographyProps={{ sx: styles.subtitle }} />
            </ListItem>
            <ListItem disableGutters sx={styles.htmlItem}>
              <ListItemIcon>
                <SvgIcon component={HtmlIcon} viewBox='0 0 384 512' />
              </ListItemIcon>
              <ListItemText primary='HTML' primaryTypographyProps={{ sx: styles.subtitle }} />
            </ListItem>
            <ListItem disableGutters sx={styles.cssItem}>
              <ListItemIcon>
                <SvgIcon component={CssIcon} viewBox='0 0 384 512' />
              </ListItemIcon>
              <ListItemText primary='CSS' primaryTypographyProps={{ sx: styles.subtitle }} />
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid sx={styles.transitionContainer}>
        <TransitionSvg />
      </Grid>
    </Grid>
  )
}

export default Intro
