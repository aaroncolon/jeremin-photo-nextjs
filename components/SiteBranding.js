import Link from 'next/link'
import { siteTitle, siteDescription } from './Layout'

export default function SiteBranding() {
  return (
    <div className="site-branding">
      <h1 className="site-title">
        <Link href="/">
          <a className="site-title__link">{siteTitle}</a>
        </Link>
      </h1>
      <p className="site-description sr-only">{siteDescription}</p>
    </div>
  )
}
