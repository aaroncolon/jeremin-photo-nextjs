import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import RoyalSlider from '../components/RoyalSlider'
import Info from '../components/Info'

import { generatePageTitle } from '../utils/utils'

import { getAllPageIdsCatchAll, getPageBySlug } from '../lib/pages'

export async function getStaticPaths() {
  const paths = getAllPageIdsCatchAll()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const pageData = await getPageBySlug(params.slug[params.slug.length - 1])
  const pageInfo = await getPageBySlug('info')
  return {
    props: {
      pageData,
      pageInfo
    }
  }
}

export default function Page({ pageData, pageInfo }) {
  return (
    <Layout>
      <Head>
        <title>{generatePageTitle(pageData.title.rendered)}</title>
      </Head>

      <RoyalSlider data={pageData} />
      <Info data={pageInfo} />
    </Layout>
  )
}
