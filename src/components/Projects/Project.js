import PropTypes from 'prop-types'
import { Box, Grid, Typography } from '@mui/material'

const styles = {}

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
    <Box>
      <Typography variant='h3'>{title}</Typography>
      <Typography>{description}</Typography>
      {/* TODO: finish individual project */}
    </Box>
  )
}

export default Project
