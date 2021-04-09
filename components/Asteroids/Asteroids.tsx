import Link from 'next/link';
import { FC } from 'react';

import styles from './Asteroids.module.css';

type Props = {
  asteroids: Record<string, any>,
}

const Asteroids: FC<Props> = ({ asteroids }) => {
  return (
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
            <div>
              <img
                src="/images/asteroid.svg"
                className={styles.asteroid__rock}
              />
            </div>
            <div>
              <img src="/images/dino.svg" className={styles.asteroid__dino} />
            </div>
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

          <div className={styles.asteroid__rating}>
            <p>Оценка:</p>
            <p className={styles['asteroid__rating-type']}>не опасен</p>
            <button type="button" className={styles['asteroid__rating-button']}>
              На уничтожение
            </button>
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
        </li>
      </ul>
    </main>
  );
};

export default Asteroids;
