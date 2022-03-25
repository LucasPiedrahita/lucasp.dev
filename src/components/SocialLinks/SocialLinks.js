import PropTypes from 'prop-types'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import {
  GitHub,
  LinkedIn,
  MailOutline,
  PhoneIphone,
  ContactPageOutlined,
} from '@mui/icons-material'
import resume from '../../assets/Piedrahita_Lucas_Resume.pdf'

const verticalStyles = {
  container: {
    width: '100%',
    bgcolor: 'background.paper',
  },
  resumeLink: {},
}

const horizontalStyles = {
  container: {
    ...verticalStyles.container,
    width: 'auto',
    '& ul': {
      p: 0,
      display: 'flex',
      gap: 3,
    },
    '& .MuiListItemIcon-root': {
      minWidth: 0,
      '& svg': {
        width: '1.75rem',
        height: '1.75rem',
      },
    },
  },
  resumeLink: {
    color: 'primary.main',
    border: 2,
    borderRadius: 2,
    borderColor: 'primary.main',
    px: 1.5,
    py: 0.5,
  },
}
SocialLinks.propTypes = {
  horizontal: PropTypes.bool,
}
function SocialLinks({ horizontal = false }) {
  const styles = horizontal ? horizontalStyles : verticalStyles
  return (
    <Box sx={styles.container} component='nav' aria-label='contact information'>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component='a'
            href='https://www.linkedin.com/in/lucas-piedrahita/'
            disableGutters={horizontal}
          >
            <ListItemIcon>
              <LinkedIn />
            </ListItemIcon>
            {!horizontal && <ListItemText primary='LinkedIn' />}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component='a'
            href='https://github.com/LucasPiedrahita'
            disableGutters={horizontal}
          >
            <ListItemIcon>
              <GitHub />
            </ListItemIcon>
            {!horizontal && <ListItemText primary='GitHub' />}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component='a'
            href='mailto:lpiedrahita96@gmail.com'
            disableGutters={horizontal}
          >
            <ListItemIcon>
              <MailOutline />
            </ListItemIcon>
            {!horizontal && <ListItemText primary='Email' />}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='tel:+19192745369' disableGutters={horizontal}>
            <ListItemIcon>
              <PhoneIphone />
            </ListItemIcon>
            {!horizontal && <ListItemText primary='Call' />}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component='a'
            href={resume}
            target='_blank'
            disableGutters={horizontal}
            sx={styles.resumeLink}
          >
            {!horizontal && (
              <ListItemIcon>
                <ContactPageOutlined />
              </ListItemIcon>
            )}
            <ListItemText primary='Resume' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default SocialLinks
