import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Layout, { sitetitle } from '../components/Layout'
import utilStyle from '../styles/utils.module.css'
import { getPostsData } from '../lib/post'
import Head from 'next/head'


export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{sitetitle}</title>
      </Head>
      <section>
        <p className={utilStyle.headingMd}>Webデザイナー/Webエンジニア です</p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
      <h2>🗒エンジニアのブログ</h2>
      <div className={styles.grid}>
        {allPostsData.map(({id, title, date, thumbnail}) => (
          <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={`${thumbnail}`} className={styles.thumbnailImage}></img>
            </Link>
            <Link href={`/posts/${id}`}>
              <a className={utilStyle.boldText}>{title}</a>
            </Link>
            <br />
            <small className={utilStyle.lightText}>{date}</small>
          </article> 
        ))}
      </div>
      </section>
    </Layout>
  )
}
