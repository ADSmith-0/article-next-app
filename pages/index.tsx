import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card';
export default function Home() {
  return (
    <>
      <Head>
        <title>Article Feed app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
            Hello
        </h1>
        <Card 
            image="/images/image1.png"
            title="test"
            domain="www.google.co.uk"
            date="2nd August 2021"
            content="hello"
            tag="Sports"
        />
      </main>
    </>
  )
}
