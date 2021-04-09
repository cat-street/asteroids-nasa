import Link from 'next/link';
import React, { FC } from 'react';

import styles from './Asteroids.module.css';

const Asteroids: FC = () => (
  <main className={styles.main}>
    <div className={styles.filter}>
      <div>
        <input type="checkbox" name="dangerous" />
        <label htmlFor="dangerous" className={styles.label}>
          Показать только опасные
        </label>
      </div>
      <div className={styles.sort}>
        Расстояние
        <button type="button" className={styles.button}>
          в километрах,
        </button>
        <button type="button" className={styles.button}>
          в дистанциях до луны
        </button>
      </div>
    </div>

    <ul className={styles.asteroids}>
      <li className={styles.asteroid}>
        <div className={styles.asteroid__space}>
          <img src="/images/dino.svg" className={styles.asteroid__dino} />
        </div>
        <div className={styles.asteroid__name}>
          <Link href="/">
            <button
              type="button"
              className={`${styles.button} ${styles.asteroid__link}`}
            >
              2021 FQ
            </button>
          </Link>
        </div>
        <div className={styles.asteroid__data}>
          <div className={styles['asteroid__data-row']}>
            <p>Дата</p>
            <p className={styles['asteroid__data-dots']}></p>
            <p className={styles['asteroid__data-value']}>12 сентября 2021</p>
          </div>
          <div className={styles['asteroid__data-row']}>
            <p>Расстояние</p>
            <p className={styles['asteroid__data-dots']}></p>
            <p className={styles['asteroid__data-value']}>7 235 024 км</p>
          </div>
          <div className={styles['asteroid__data-row']}>
            <p>Размер</p>
            <p className={styles['asteroid__data-dots']}></p>
            <p className={styles['asteroid__data-value']}>85 м</p>
          </div>
        </div>
        <div className={styles.asteroid__rating}>Оценка</div>
      </li>
    </ul>
  </main>
);

export default Asteroids;
