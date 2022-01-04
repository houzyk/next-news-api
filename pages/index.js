import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next News Api</title>
      </Head>
      <div
        className="container"
      >
        <div>
          <h1
            className={styles.header}
          >
            News API
          </h1>
          <p
            className={styles.subtitle}
          >
            The Place for all your news
          </p>
        </div>
      </div>
    </>
  )
}
