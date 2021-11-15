//
function appHeight() {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}

function updateNavLinkColor() {
  const top = window.scrollY
  const rootStyle = document.documentElement.style
  const navLink = document.querySelector('.nav-link')
  const navLinkStyles = window.getComputedStyle(navLink)
  const navLinkHeight = parseFloat(navLinkStyles.getPropertyValue('height'))
  const welcomeSectionHeightOffset =
    document.querySelector('#welcome-section').offsetHeight - navLinkHeight / 2
  const projectSectionHeightOffset =
    welcomeSectionHeightOffset + document.querySelector('#projects').offsetHeight

  if (top < welcomeSectionHeightOffset) {
    rootStyle.setProperty('--color-nav-links', `var(--color-black)`)
    rootStyle.setProperty('--color-nav-links-shadow', `rgba(var(--color-white), 0)`)
  } else if (top < projectSectionHeightOffset) {
    rootStyle.setProperty('--color-nav-links', `var(--color-white)`)
    rootStyle.setProperty('--color-nav-links-shadow', `rgba(var(--color-black), 1)`)
  } else {
    rootStyle.setProperty('--color-nav-links', `var(--color-black)`)
    rootStyle.setProperty('--color-nav-links-shadow', `rgba(var(--color-white), 0)`)
  }
}

window.addEventListener('scroll', updateNavLinkColor)

window.addEventListener('resize', () => {
  appHeight()
  updateNavLinkColor()
})

window.onload = () => {
  appHeight()
  updateNavLinkColor()
}

// fitText function
;(function () {
  var addEvent = function (el, type, fn) {
    if (el.addEventListener) el.addEventListener(type, fn, false)
    else el.attachEvent('on' + type, fn)
  }

  var extend = function (obj, ext) {
    for (var key in ext) if (ext.hasOwnProperty(key)) obj[key] = ext[key]
    return obj
  }

  window.fitText = function (el, kompressor, options) {
    var settings = extend(
      {
        minFontSize: -1 / 0,
        maxFontSize: 1 / 0,
      },
      options
    )

    var fit = function (el) {
      var compressor = kompressor || 1

      var resizer = function () {
        el.style.fontSize =
          Math.min(
            Math.max(
              Math.min(el.clientWidth / (compressor * 10), parseFloat(settings.maxFontSize)),
              parseFloat(settings.minFontSize)
            ),
            20 // max font-size
          ) + 'px'
      }

      // Call once to set.
      resizer()

      // Bind events
      // If you have any js library which support Events, replace this part
      // and remove addEvent function (or use original jQuery version)
      addEvent(window, 'resize', resizer)
      addEvent(window, 'orientationchange', resizer)
    }

    if (el.length) for (var i = 0; i < el.length; i++) fit(el[i])
    else fit(el)

    // return set of elements
    return el
  }
})()

// apply fitText to project titles
fitText(document.querySelectorAll('.project-title'), 1.8)
