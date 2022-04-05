import { Grid, Typography, Box, useTheme } from '@mui/material'
import { SectionHeader } from '../'
import image from '../../assets/lucas-piedrahita-392.jpeg'

const getStyles = (theme) => ({
  container: {
    ...theme.overrides.section,
  },
  gridContainer: {
    '& .MuiTypography-gutterBottom': {
      ...theme.overrides.MuiTypography.gutterBottom,
    },
    '& > div + div': {
      pb: {
        xs: 3,
        sm: 5,
        md: 0,
      },
      pl: {
        xs: 0,
        md: 5,
      },
    },
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
})

function About() {
  const theme = useTheme()
  const styles = getStyles(theme)
  return (
    <Box id='About' component='section' sx={styles.container}>
      <SectionHeader title='About Me' />
      <Grid
        container
        sx={styles.gridContainer}
        direction={{ xs: 'column-reverse', md: 'row' }}
        alignItems={{ xs: 'center', sm: 'flex-start', md: 'center' }}
      >
        <Grid item xs={12} md={7}>
          <Typography gutterBottom>
            Fully committed to the philosophy of life-long learning, I've developed a deep passion
            for JavaScript, React and all things web development. The unique combination of
            creativity, logic, technology and always having something new to learn drives my
            excitement for the front-end.
          </Typography>
          <Typography gutterBottom>
            My interest in software development stemmed from a desire to enhance the productivity of
            myself and those around me when I created my first application to record field data on a
            tablet. Sure, that app may have been written in Excel's VBA, but since then I have
            focused on honing my front-end skills to develop modern, accessible web applications.
          </Typography>
          <Typography>
            I approach complex problems holistically and strive to create simple, maintainable
            solutions from conception to implementation. I hold myself to a high standard, have a
            strong attention to detail and lean on partnerships and communication to deliver useful
            products to meet customer needs.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Grid container alignItems='center' justifyContent='center' sx={styles.imageContainer}>
            <img src={image} alt='Headshot of Lucas Piedrahita' />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default About
