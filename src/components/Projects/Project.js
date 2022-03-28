import PropTypes from 'prop-types'
import { Box, Grid, Typography, IconButton, Chip, Paper } from '@mui/material'
import { GitHub, OpenInNew } from '@mui/icons-material'

const styles = {
  container: {
    display: 'grid',
    gridTemplateAreas: `
    'title links'
    'image image'
    'desc desc'
    'tech tech'`,
    gridTemplateColumns: '1fr auto',
    gridTemplateRows: 'auto',
    alignItems: 'center',
    gap: 2,
    p: {
      xs: 2,
      sm: 3,
    },
    borderRadius: 1,
  },
  title: {
    gridArea: 'title',
    fontSize: {
      xs: 'h6.fontSize',
      sm: 'h5.fontSize',
      md: 'h4.fontSize',
    },
    fontWeight: 'fontWeightBold',
  },
  linksContainer: {
    gridArea: 'links',
    display: 'flex',
  },
  imageContainer: {
    gridArea: 'image',
    width: 1,
    '& img': {
      width: 1,
      height: 1,
      maxWidth: 392,
      objectFit: 'contain',
    },
  },
  description: {
    gridArea: 'desc',
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
      <Typography variant='h4' component='h3' sx={styles.title}>
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
