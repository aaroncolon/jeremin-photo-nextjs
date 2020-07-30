import he from 'he'
import { siteTitle } from '../components/Layout'

export const generatePageTitle = (pageTitle) => {
  return he.decode(pageTitle) + ' \u00b7 ' + siteTitle
}

export const appendScript = (scriptData) => {
  const script = document.createElement('script')
  script.id = scriptData.id
  script.src = scriptData.src
  script.async = true
  document.head.prepend(script)
}

export const removeScript = (scriptId) => {
  const script = document.getElementById(scriptId)
  if (script) {
    script.parentNode.removeChild(script)  
  }
}
