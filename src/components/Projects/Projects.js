import { Box, useTheme } from '@mui/material'
import { SectionHeader } from '../'
import Project from './Project'
import pollingPlaceLookupWebm from '../../assets/polling-place-lookup-392.webm'
import pollingPlaceLookupMp4 from '../../assets/polling-place-lookup-392.mp4'
import pollingPlaceLookupWebp from '../../assets/polling-place-lookup-392.webp'
import technicalDocumentationPageWebm from '../../assets/technical-documentation-page-392.webm'
import technicalDocumentationPageMp4 from '../../assets/technical-documentation-page-392.mp4'
import technicalDocumentationPageWebp from '../../assets/technical-documentation-page-392.webp'
import personalWebsiteWebp from '../../assets/personal-website-640.webp'

const getStyles = (theme) => ({
  outerContainer: {
    backgroundImage: theme.overrides.background.projects.mainGradient,
    color: theme.overrides.background.projects.textColor,
  },
  innerContainer: {
    ...theme.overrides.section,
    maxWidth: theme.overrides.maxWidth.large,
  },
  titleContainer: {
    maxWidth: theme.overrides.section.maxWidth,
    '@media (min-width: 1000px)': {
      pl: `calc(((100% - ${theme.overrides.section.maxWidth}px)/2) + ${theme.spacing(3)})`,
    },
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: 'repeat(auto-fit, minmax(350px, 1fr))',
    },
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
    videoSources: {
      webm: pollingPlaceLookupWebm,
      mp4: pollingPlaceLookupMp4,
      webp: pollingPlaceLookupWebp,
    },
    videoAlt: 'Video of the polling place lookup app being used',
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
    videoSources: {
      webm: technicalDocumentationPageWebm,
      mp4: technicalDocumentationPageMp4,
      webp: technicalDocumentationPageWebp,
    },
    videoAlt: 'Video of the technical documentation page with side menu being toggled',
    technology: ['JS', 'CSS3', 'HTML5'],
    links: {
      demo: 'https://codepen.io/lucaspiedrahita/full/mdmVMLB',
      github: null,
    },
  },
  {
    id: '03',
    title: 'My Personal Website',
    description:
      "You're looking at it! The second iteration of my personal website is built with React & Material UI and hosted on Netlify",
    videoSources: {
      webm: 'null.webm',
      mp4: 'null.mp4',
      webp: personalWebsiteWebp,
    },
    videoAlt: 'Image of the website you are on, my personal website',
    technology: ['React', 'Material UI', 'Netlify'],
    links: {
      demo: null,
      github: 'https://github.com/LucasPiedrahita/lucasp.dev',
    },
  },
]

function Projects() {
  const theme = useTheme()
  const styles = getStyles(theme)
  return (
    <Box id='Projects' component='section' sx={styles.outerContainer}>
      <Box sx={styles.innerContainer}>
        <Box sx={styles.titleContainer}>
          <SectionHeader title='Projects' />
        </Box>
        <Box sx={styles.gridContainer}>
          {projects.map((project) => (
            <Project
              key={project.id}
              title={project.title}
              description={project.description}
              technology={project.technology}
              links={project.links}
              videoSources={project.videoSources}
              videoAlt={project.videoAlt}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Projects
