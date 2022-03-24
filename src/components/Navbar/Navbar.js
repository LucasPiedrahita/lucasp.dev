import { useCallback, useState } from 'react'
import { Grid, Avatar, IconButton, Drawer } from '@mui/material'
import { Menu } from '@mui/icons-material'

import avatarImage from '../../assets/lucas-piedrahita-196.jpeg'
import { SocialLinks } from '../'

const styles = {
  container: {
    p: 2,
  },
  avatar: {
    width: 52,
    height: 52,
  },
}

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleDrawer = useCallback(() => setIsDrawerOpen(!isDrawerOpen), [isDrawerOpen])
  return (
    <>
      <Grid container justifyContent='space-between' alignItems='center' sx={styles.container}>
        <Avatar alt='Lucas Piedrahita' src={avatarImage} sx={styles.avatar} />
        <IconButton onClick={toggleDrawer} size='large' aria-label='open navigation menu'>
          <Menu fontSize='inherit' />
        </IconButton>
      </Grid>
      <Drawer anchor='bottom' open={isDrawerOpen} onClose={toggleDrawer}>
        <SocialLinks />
      </Drawer>
    </>
  )
}

export default Navbar
