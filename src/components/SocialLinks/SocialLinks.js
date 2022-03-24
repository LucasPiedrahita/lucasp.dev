import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import {
  GitHub,
  LinkedIn,
  MailOutline,
  PhoneIphone,
  ContactPageOutlined,
} from '@mui/icons-material'
import resume from '../../assets/Piedrahita_Lucas_Resume.pdf'

const styles = {
  container: {
    width: '100%',
    bgcolor: 'background.paper',
  },
  avatar: {
    width: 52,
    height: 52,
  },
}

function Navbar() {
  return (
    <Box sx={styles.container}>
      <nav aria-label='contact information'>
        <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='https://www.linkedin.com/in/lucas-piedrahita/'>
              <ListItemIcon>
                <LinkedIn />
              </ListItemIcon>
              <ListItemText primary='LinkedIn' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='https://github.com/LucasPiedrahita'>
              <ListItemIcon>
                <GitHub />
              </ListItemIcon>
              <ListItemText primary='GitHub' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='mailto:lpiedrahita96@gmail.com'>
              <ListItemIcon>
                <MailOutline />
              </ListItemIcon>
              <ListItemText primary='Email' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='tel:+19192745369'>
              <ListItemIcon>
                <PhoneIphone />
              </ListItemIcon>
              <ListItemText primary='Call' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href={resume} target='_blank'>
              <ListItemIcon>
                <ContactPageOutlined />
              </ListItemIcon>
              <ListItemText primary='Resume' />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  )
}

export default Navbar
