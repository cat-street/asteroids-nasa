import { FC, useState } from 'react';
import Link from 'next/link';

import styles from './Asteroid.module.css';

type Props = {
  asteroid: Record<string, any>;
  measure: ('km' | 'lunar');
};

const Asteroid: FC<Props> = ({ asteroid, measure }) => {
  const width = (
    (asteroid.estimated_diameter.meters.estimated_diameter_min +
      asteroid.estimated_diameter.meters.estimated_diameter_max) /
    2
  ).toFixed();

  const distance = parseInt(
    asteroid.close_approach_data[0].miss_distance.kilometers,
  ).toLocaleString();

  const displayedDistance = (measure === 'km') ? `${distance} км`
    : `${parseInt(
      asteroid.close_approach_data[0].miss_distance.lunar,
    )} LD`;

  const date = () => {
    return new Date(asteroid.close_approach_data[0].close_approach_date)
      .toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
      .slice(0, -3);
  };

  return (
    <li
      className={`${styles.asteroid} ${
        asteroid.is_potentially_hazardous_asteroid
          ? styles.bg_dangerous
          : styles.bg_normal
      }`}
    >
      <div className={styles.asteroid__space}>
        <div>
          <img
            src="/images/asteroid.svg"
            className={styles.asteroid__rock}
            style={{ width: `${+width * 0.6}px` }}
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
            {asteroid.name.replace(/.*\(([\w ]+)\)/g, '$1')}
          </button>
        </Link>
      </div>

      <div className={styles.asteroid__rating}>
        <p>Оценка:</p>
        <p className={styles['asteroid__rating-type']}>
          {asteroid.is_potentially_hazardous_asteroid ? 'опасен' : 'не опасен'}
        </p>
        <button type="button" className={styles['asteroid__rating-button']}>
          На уничтожение
        </button>
      </div>

      <div className={styles.asteroid__data}>
        <div className={styles['asteroid__data-row']}>
          <p>Дата</p>
          <p className={styles['asteroid__data-dots']}></p>
          <p className={styles['asteroid__data-value']}>{date()}</p>
        </div>
        <div className={styles['asteroid__data-row']}>
          <p>Расстояние</p>
          <p className={styles['asteroid__data-dots']}></p>
          <p className={styles['asteroid__data-value']}>{displayedDistance}</p>
        </div>
        <div className={styles['asteroid__data-row']}>
          <p>Размер</p>
          <p className={styles['asteroid__data-dots']}></p>
          <p className={styles['asteroid__data-value']}>{`${width} м`}</p>
        </div>
      </div>
    </li>
  );
};

export default Asteroid;
