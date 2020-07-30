import SiteBranding from './SiteBranding'
import NavigationMain from './NavigationMain'

export default function Header() {
  return (
    <header className="site-header">
      <SiteBranding />
      <NavigationMain />
    </header>
  );
}
