import PropTypes from 'prop-types'
import { Box, Grid, Typography, IconButton, Chip, Paper } from '@mui/material'
import { GitHub, OpenInNew } from '@mui/icons-material'

const styles = {
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
    borderRadius: 1,
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
      py: 0,
      px: 1,
    },
  },
  imageContainer: {
    gridArea: 'image',
    alignSelf: 'flex-start',
    width: 1,
    '& img': {
      border: 1,
      borderColor: 'divider',
      borderRadius: 1,
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
    '& li': {
      m: 0.5,
    },
  },
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  technology: PropTypes.arrayOf(PropTypes.string),
  links: PropTypes.shape({
    demo: PropTypes.string,
    github: PropTypes.string,
  }),
}
function Project({ title, description, imageSrc, imageAlt, technology = null, links = null }) {
  return (
    <Paper sx={styles.container} elevation={2}>
      <Grid container justifyContent='space-between' wrap='nowrap' sx={styles.title}>
        <Typography variant='h4' component='h3' sx={styles.titleText}>
          {title}
        </Typography>
        <Box sx={styles.linksContainer}>
          {links?.github && (
            <IconButton
              key='github'
              component='a'
              href={links.github}
              target='_blank'
              rel='noreferrer'
              aria-label='open project source code in GitHub'
            >
              <GitHub />
            </IconButton>
          )}
          {links?.demo && (
            <IconButton
              key='demo'
              component='a'
              href={links.demo}
              target='_blank'
              rel='noreferrer'
              aria-label='open the live project'
            >
              <OpenInNew />
            </IconButton>
          )}
        </Box>
      </Grid>
      <Grid container alignItems='center' justifyContent='center' sx={styles.imageContainer}>
        <a href={links?.demo} target='_blank' rel='noreferrer'>
          <img src={imageSrc} alt={imageAlt} />
        </a>
      </Grid>
      <Typography sx={styles.description}>{description}</Typography>
      <Box sx={styles.techContainer} component='ul'>
        {technology?.map((tech) => (
          <Chip key={tech} component='li' label={tech} />
        ))}
      </Box>
    </Paper>
  )
}

export default Project
