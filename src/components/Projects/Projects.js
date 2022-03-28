import { Box, useTheme } from '@mui/material'
import { SectionHeader } from '../'
import Project from './Project'
import pollingPlaceImage from '../../assets/polling-place-lookup-480.gif'
import technicalDocumentationImage from '../../assets/technical-documentation-page-480.gif'
import personalWebsiteImage from '../../assets/personal-website-392.png'

const getStyles = (theme) => ({
  container: {
    ...theme.overrides.section,
    bgcolor: 'grey.100',
  },
  gridContainer: {
    display: 'grid',
    gridRowGap: theme.spacing(5),
    gridColumnGap: theme.spacing(3),
  },
})

const projects = [
  {
    id: '01',
    title: 'Polling Place Lookup',
    description:
      'A mobile-first web application residents of Wake County, NC can use to identify their assigned polling place. Input your address and the app zooms the map to show your address and polling place with info including directions to and pictures of your polling place.',
    imageSrc: pollingPlaceImage,
    imageAlt: 'Gif of the polling place lookup app being used',
    technology: ['ArcGIS API for JS', 'JS', 'CSS3'],
    links: {
      demo: 'https://lucaspiedrahita.github.io/polling-place-lookup/',
      github: 'https://github.com/LucasPiedrahita/polling-place-lookup',
    },
  },
  {
    id: '02',
    title: 'React Docs Clone',
    description:
      "A clone of React's docs built to put my vanilla JavaScript, semantic HTML and CSS3 skills like CSS variables to the test.",
    imageSrc: technicalDocumentationImage,
    imageAlt: 'Gif of the technical documentation page with side menu being toggled',
    technology: ['JS', 'CSS3', 'HTML5'],
    links: {
      demo: 'https://codepen.io/lucaspiedrahita/full/mdmVMLB',
    },
  },
  {
    id: '03',
    title: 'My Personal Website',
    description:
      "You're looking at it! The second iteration of my personal website is built with React & Material UI and hosted on Netlify",
    imageSrc: personalWebsiteImage,
    imageAlt: 'Image of the website you are on, my personal website',
    technology: ['React', 'Material UI', 'Netlify'],
    links: {
      github: 'https://github.com/LucasPiedrahita/lucasp.dev',
    },
  },
]

function Projects() {
  const theme = useTheme()
  const styles = getStyles(theme)
  return (
    <Box id='Projects' component='section' sx={styles.container}>
      <SectionHeader title='Projects' />
      <Box sx={styles.gridContainer}>
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            technology={project.technology}
            links={project.links}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
          />
        ))}
      </Box>
    </Box>
  )
}

export default Projects
