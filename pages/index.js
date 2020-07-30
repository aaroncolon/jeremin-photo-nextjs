import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import RoyalSlider from '../components/RoyalSlider'
import Info from '../components/Info'

import { getPageBySlug } from '../lib/pages'

export async function getStaticProps() {
  const pageHome = await getPageBySlug('home')
  const pageInfo = await getPageBySlug('info')
  return {
    props: {
      pageHome,
      pageInfo
    }
  }
}

export default function Home({ pageHome, pageInfo }) {
  return (
    <Layout>
      <RoyalSlider data={pageHome} />
      <Info data={pageInfo} />
    </Layout>
  )
}
