import { useCallback, useState } from 'react'
import { Grid, Avatar, IconButton, Drawer, useTheme, useMediaQuery } from '@mui/material'
import { Menu } from '@mui/icons-material'

import avatarImage from '../../assets/lucas-piedrahita-196.jpeg'
import { SocialLinks } from '../'

const getStyles = (theme) => ({
  container: {
    maxWidth: theme.overrides.maxWidth.large,
    mx: 'auto',
    p: {
      xs: 2,
      sm: 3,
    },
  },
  avatar: {
    width: 52,
    height: 52,
  },
  drawerPaper: {
    '&:focus-visible': {
      outline: '0 !important',
      backgroundColor: `${theme.palette.background.paper} !important`,
    },
  },
})

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleDrawer = useCallback(() => setIsDrawerOpen(!isDrawerOpen), [isDrawerOpen])
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'))
  const styles = getStyles(theme)

  return (
    <Grid container justifyContent='space-between' sx={styles.container}>
      <Avatar alt='Lucas Piedrahita' src={avatarImage} sx={styles.avatar} />
      {isLargeScreen && <SocialLinks horizontal={isLargeScreen} />}
      {!isLargeScreen && (
        <>
          <IconButton onClick={toggleDrawer} size='large' aria-label='open navigation menu'>
            <Menu fontSize='inherit' />
          </IconButton>
          <Drawer
            PaperProps={{ sx: styles.drawerPaper }}
            anchor='bottom'
            open={isDrawerOpen}
            onClose={toggleDrawer}
          >
            <SocialLinks />
          </Drawer>
        </>
      )}
    </Grid>
  )
}

export default Navbar
