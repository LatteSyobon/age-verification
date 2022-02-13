import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ComboBoxYears from './combobox_years'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Age Verification 自分の年齢って何歳だっけ？</title>
        <meta name="description" content="You can tell how old you are now by the year you were born! 生まれた年代で自分の今の年齢がわかるよ！" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Age Verification - 自分の年齢って何歳だっけ？
        </h1>

        <p className={styles.description}>
        You can tell how old you are now by the year you were born! - 生まれた年代で自分の今の年齢がわかるよ！
        </p>
        <p>year of birth - 生まれた年</p><ComboBoxYears></ComboBoxYears>
        <div className={styles.grid}>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright © 2022 LatteSyobon
        </a>
      </footer>
    </div>
  )
}

export default Home
