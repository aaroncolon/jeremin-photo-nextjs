import { siteTitle } from './Layout' 

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; { new Date().getFullYear() + ' ' + siteTitle }</p>
    </footer>
  )
}
