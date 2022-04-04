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
    width: 1,
    '& svg': {
      width: 32,
      height: 32,
    },
  },
  linkText: {
    fontSize: {
      xs: 'h6.fontSize',
      sm: 'body1.fontSize',
    },
  },
}

const getHorizontalStyles = (iconColor, resumeLinkColor) => {
  return {
    ...verticalStyles,
    container: {
      ...verticalStyles.container,
      width: 'auto',
      '& ul': {
        p: 0,
        display: 'flex',
        gap: 3.5,
      },
      '& .MuiListItemIcon-root': {
        minWidth: 0,
        color: iconColor,
      },
    },
    resumeLink: {
      color: resumeLinkColor,
      border: 2,
      borderRadius: 2,
      borderColor: resumeLinkColor,
      px: 1.5,
      py: 0.5,
    },
  }
}
SocialLinks.propTypes = {
  horizontal: PropTypes.bool,
  iconColor: PropTypes.string,
  resumeLinkColor: PropTypes.string,
}
function SocialLinks({
  horizontal = false,
  iconColor = 'inherit',
  resumeLinkColor = 'primary.main',
}) {
  const styles = horizontal ? getHorizontalStyles(iconColor, resumeLinkColor) : verticalStyles
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
            {!horizontal && (
              <ListItemText primary='LinkedIn' primaryTypographyProps={{ sx: styles.linkText }} />
            )}
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
            {!horizontal && (
              <ListItemText primary='GitHub' primaryTypographyProps={{ sx: styles.linkText }} />
            )}
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
            {!horizontal && (
              <ListItemText primary='Email' primaryTypographyProps={{ sx: styles.linkText }} />
            )}
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='tel:+19192745369' disableGutters={horizontal}>
            <ListItemIcon>
              <PhoneIphone />
            </ListItemIcon>
            {!horizontal && (
              <ListItemText primary='Call' primaryTypographyProps={{ sx: styles.linkText }} />
            )}
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
            <ListItemText primary='Resume' primaryTypographyProps={{ sx: styles.linkText }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default SocialLinks
