import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'

const styles = {
  container: {},
}

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
}
function SectionHeader({ title }) {
  return (
    <Grid sx={styles.container}>
      <Typography variant='h2' sx={{ pb: 5 }}>
        {title}
      </Typography>
    </Grid>
  )
}

export default SectionHeader
