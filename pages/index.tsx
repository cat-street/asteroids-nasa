import { ReactElement } from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>Armageddon V</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <h1 className={styles.title}>Armageddon V</h1>
          <p>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
          <nav>
            <ul>
              <li>
                <button type="button">Астеродиды</button>
              </li>
              <li>
                <button type="button">Уничтожение</button>
              </li>
            </ul>
          </nav>
        </header>
      </main>

      <footer className={styles.footer}>
        <p>2021 &copy; Все права и планета защищены</p>
      </footer>
    </div>
  );
}
