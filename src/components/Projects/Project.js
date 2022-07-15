import PropTypes from 'prop-types'
import { Box, Grid, Typography, IconButton, Chip, Paper, useTheme } from '@mui/material'
import { GitHub, OpenInNew } from '@mui/icons-material'

const getStyles = (theme) => ({
  container: {
    display: 'grid',
    gridTemplateAreas: {
      xs: `'title'
          'image'
          'desc'
          'tech'`,
      sm: `'image title'
          'image desc'
          'image tech'`,
      md: `'title'
            'image'
            'desc'
            'tech'`,
    },
    gridTemplateColumns: {
      xs: 'auto',
      sm: '1fr 1fr',
      md: 'auto',
    },
    gridTemplateRows: {
      xs: 'auto',
      sm: 'auto 1fr auto',
      md: 'auto auto 1fr auto',
    },
    alignItems: 'center',
    gap: 2,
    p: 2,
    borderRadius: theme.shape.borderRadius,
    bgcolor: '#ffffff20',
    color: 'inherit',
  },
  title: {
    gridArea: 'title',
    alignSelf: 'flex-start',
  },
  titleText: {
    fontSize: {
      xs: 'h6.fontSize',
      sm: 'h5.fontSize',
    },
    fontWeight: 'fontWeightBold',
  },
  linksContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    '& a': {
      p: 0,
      ml: 1.5,
      color: 'inherit',
    },
  },
  imageContainer: {
    gridArea: 'image',
    alignSelf: 'flex-start',
    width: 1,
    '& video': {
      border: 1,
      borderColor: 'divider',
      borderRadius: 3,
      width: 1,
      height: 1,
      maxWidth: 392,
      objectFit: 'contain',
    },
  },
  description: {
    gridArea: 'desc',
    alignSelf: 'flex-start',
  },
  techContainer: {
    gridArea: 'tech',
    display: 'flex',
    justifyContent: 'flex-end',
    listStyle: 'none',
    flexWrap: 'wrap',
    m: 0,
    p: 0,
    '& .MuiChip-root': {
      m: 0.5,
      color: 'inherit',
    },
  },
})

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoSources: PropTypes.shape({
    webp: PropTypes.string.isRequired,
    webm: PropTypes.string,
    mp4: PropTypes.string,
  }).isRequired,
  videoAlt: PropTypes.string.isRequired,
  technology: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.shape({
    demo: PropTypes.string,
    github: PropTypes.string,
  }),
}
function Project({ title, description, videoSources, videoAlt, technology = null, links = null }) {
  const theme = useTheme()
  const styles = getStyles(theme)
  const VideoContainerTag = links.demo ? 'a' : 'div'
  return (
    <Paper sx={styles.container} elevation={2}>
      <Grid container justifyContent='space-between' wrap='nowrap' sx={styles.title}>
        <Typography variant='h4' component='h3' sx={styles.titleText}>
          {title}
        </Typography>
        <Box sx={styles.linksContainer}>
          {links.github && (
            <IconButton
              key='github'
              component='a'
              href={links.github}
              target='_blank'
              rel='noreferrer'
              aria-label='open project source code in GitHub'
              disableFocusRipple
              title='View GitHub repo'
            >
              <GitHub />
            </IconButton>
          )}
          {links.demo && (
            <IconButton
              key='demo'
              component='a'
              href={links.demo}
              target='_blank'
              rel='noreferrer'
              aria-label='open the live project'
              disableFocusRipple
              title='View live demo'
            >
              <OpenInNew />
            </IconButton>
          )}
        </Box>
      </Grid>
      <Grid container alignItems='center' justifyContent='center' sx={styles.imageContainer}>
        <VideoContainerTag
          {...(links.demo
            ? { href: links.demo, target: '_blank', rel: 'noreferrer', title: 'View live demo' }
            : {})}
        >
          <video muted autoPlay loop playsInline poster={videoSources.webp}>
            <source src={videoSources.webm} type='video/webm' />
            <source src={videoSources.mp4} type='video/mp4' />
            <img src={videoSources.webp} alt={videoAlt} />
          </video>
        </VideoContainerTag>
      </Grid>
      <Typography sx={styles.description}>{description}</Typography>
      <Box sx={styles.techContainer} component='ul'>
        {technology?.map((tech) => (
          <Chip key={tech} component='li' label={tech} variant='outlined' />
        ))}
      </Box>
    </Paper>
  )
}

export default Project
