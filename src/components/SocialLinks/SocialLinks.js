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
    fontStyle: 'normal',
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

const getHorizontalStyles = (resumeLinkColor) => {
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
        color: 'inherit',
      },
      '& .MuiListItemButton-root': {
        p: 0,
      },
    },
    resumeLink: {
      color: resumeLinkColor,
      border: 2,
      borderRadius: 2,
      borderColor: resumeLinkColor,
      '& > div': {
        mx: 1.5,
        my: 1,
      },
    },
  }
}
SocialLinks.propTypes = {
  horizontal: PropTypes.bool,
  resumeLinkColor: PropTypes.string,
}
function SocialLinks({ horizontal = false, resumeLinkColor = 'primary.dark' }) {
  const styles = horizontal ? getHorizontalStyles(resumeLinkColor) : verticalStyles
  return (
    <Box sx={styles.container} component='address'>
      <List>
        <ListItem disablePadding>
          <ListItemButton
            component='a'
            href='https://www.linkedin.com/in/lucas-piedrahita/'
            disableGutters={horizontal}
            title='Visit my LinkedIn profile'
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
            title='Visit my GitHub profile'
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
            title='Email me'
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
          <ListItemButton
            component='a'
            href='tel:+19192745369'
            disableGutters={horizontal}
            title='Call me'
          >
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
            title='View my resume'
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
