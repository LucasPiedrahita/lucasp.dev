import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

Navbar.propTypes = {
  title: PropTypes.string,
}
function Navbar({ title = null }) {
  return <Typography variant='h1'>{title}</Typography>
}

export default Navbar
