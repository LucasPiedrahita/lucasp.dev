import { Typography, Box, useTheme } from '@mui/material'
import { SocialLinks } from '../'

const getStyles = (theme) => ({
  outerContainer: {
    backgroundImage: theme.overrides.background.footer.mainGradient,
    color: theme.overrides.background.footer.textColor,
  },
  innerContainer: {
    ...theme.overrides.section,
    maxWidth: theme.overrides.maxWidth.large,
    pb: 5,
    display: 'flex',
    flexDirection: {
      xs: 'column',
      md: 'row-reverse',
    },
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

function Footer() {
  const theme = useTheme()
  const styles = getStyles(theme)
  const currentYear = new Date().getFullYear()
  return (
    <Box id='Footer' component='footer' sx={styles.outerContainer}>
      <Box sx={styles.innerContainer}>
        <Box mb={{ xs: 5, md: 0 }}>
          <SocialLinks horizontal resumeLinkColor='inherit' />
        </Box>
        <Box>
          <Typography align='center'>
            Designed &#38; built by Lucas Piedrahita &copy; {currentYear}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
