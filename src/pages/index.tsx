import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Counter from '../features/counter/Counter'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Counter />
    </div>
  )
}

export default Home
