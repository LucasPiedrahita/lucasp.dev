import PropTypes from 'prop-types'
import { Box, Grid, Typography } from '@mui/material'

const styles = {
  container: {
    bgcolor: 'primary.main',
  },
  imageContainer: {
    width: 1,
    '& img': {
      width: 1,
      height: 1,
      maxWidth: 392,
      objectFit: 'contain',
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
  // Figure out image & CSS grid-template areas
  return (
    <Box sx={styles.container}>
      <Grid container alignItems='center' justifyContent='center' sx={styles.imageContainer}>
        <img src={imageSrc} alt={imageAlt} />
      </Grid>

      <Typography variant='h3'>{title}</Typography>
      <Typography>{description}</Typography>
      {/* TODO: finish individual project */}
    </Box>
  )
}

export default Project
