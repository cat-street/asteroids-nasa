import { ReactElement } from 'react';
import Head from 'next/head';

import Header from '../components/Header/Header';
import styles from '../styles/Home.module.css';
import Footer from '../components/Footer/Footer';

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>Armageddon V</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
      </main>

      <Footer />
    </div>
  );
}
