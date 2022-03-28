import { useState, useEffect } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

function isMobile() {
  return window.matchMedia('(max-width: 767px)').matches
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    // Only resize mobile dimensions if the device orientation changes
    function handleResize() {
      if (!isMobile()) {
        setWindowDimensions(getWindowDimensions())
      }
    }

    function handleOrientationChange() {
      // flip dimensions because getWindowDimensions() gets the dimensions
      // of the screen before the event is fired.
      const { height: width, width: height } = getWindowDimensions()
      setWindowDimensions({ width, height })
    }

    if (window?.screen?.orientation) {
      window.screen.orientation.addEventListener('change', handleOrientationChange)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      window?.screen?.orientation.removeEventListener('change', handleOrientationChange)
    }
  }, [])
  return windowDimensions
}
