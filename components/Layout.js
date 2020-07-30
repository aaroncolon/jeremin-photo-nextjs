import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

export const siteTitle = 'Jeremin Choenchavalit'
export const siteDescription = 'Jeremin Choenchavalit is a fashion photographer based in Los Angeles, CA. Available for work worldwide.'

export default function Layout({ pageInfo, children }) {
  return (
    <div className="site-container">

      <Head>
        <title>{siteTitle} &middot; Fashion Photographer</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content="photography, fashion, photographer, los angeles" />
        <meta name="robots" content="noodp,noydir" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://jereminphoto.com" />
        <meta property="og:title" content="Jeremin Choenchavalit &middot; Fashion Photographer" />
        <meta property="og:description" content="Jeremin Choenchavalit is a fashion photographer based in Los Angeles, CA. Available for work worldwide." />
        <meta property="og:site_name" content="Jeremin Choenchavalit" />
        <meta property="og:image" content="/og-1200.png" />
        
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap" rel="stylesheet" />

        <script src="/js/vendor/jquery-1.12.4/dist/jquery.min.js" />
        <script src="/js/vendor/jquery.royalslider.min.js" />
        <script src="/js/vendor/jquery.magnific-popup.min.js" />
      </Head>

      <Header />

      <main className="site-content">
        {children}
      </main>

      <Footer />
    </div>
  )
}
