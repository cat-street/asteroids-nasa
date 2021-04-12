import { FC } from 'react';
import Link from 'next/link';

import formatDate from '../../utils/formatDate';
import styles from './Asteroid.module.css';
import { SingleAsteroid } from '../../types/asteroids';
import AsteroidRating from '../AsteroidRating/AsteroidRating';

type Props = {
  asteroid: Record<string, any>;
  measure: 'km' | 'lunar';
  setAsteroid: (data: Record<string, any>) => void;
  addToDestroy: (item: SingleAsteroid) => void;
};

const Asteroid: FC<Props> = ({
  asteroid,
  measure,
  setAsteroid,
  addToDestroy,
}) => {
  const name = asteroid.name.replace(/.*\(([\w ]+)\)/g, '$1');

  const distance = parseInt(
    asteroid.close_approach_data[0].miss_distance.kilometers,
  ).toLocaleString();

  const displayedDistance =
    measure === 'km'
      ? `${distance} км`
      : `${parseInt(asteroid.close_approach_data[0].miss_distance.lunar)} LD`;

  const width = (
    (asteroid.estimated_diameter.meters.estimated_diameter_min +
      asteroid.estimated_diameter.meters.estimated_diameter_max) /
    2
  ).toFixed();

  const date = formatDate(asteroid.close_approach_data[0].close_approach_date);

  const handleAsteroidClick = () => {
    setAsteroid({
      id: asteroid.id,
      name,
      date,
      distance,
      width,
      hazardous: asteroid.is_potentially_hazardous_asteroid,
    });
  };

  const handleAddToDestroy = () => {
    addToDestroy({
      id: asteroid.id,
      name,
      date,
      distance,
      width,
      hazardous: asteroid.is_potentially_hazardous_asteroid,
    });
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
            alt="Астероид"
          />
        </div>
        <div>
          <img
            src="/images/dino.svg"
            className={styles.asteroid__dino}
            alt="Динозавр"
          />
        </div>
      </div>

      <div className={styles.asteroid__name}>
        <Link href={`/asteroid/${asteroid.id}`}>
          <button
            type="button"
            className={`${styles.button} ${styles.asteroid__link}`}
            onClick={handleAsteroidClick}
          >
            {name}
          </button>
        </Link>
      </div>

      <AsteroidRating
        addedClass={styles.asteroid__rating_main}
        hazardous={asteroid.is_potentially_hazardous_asteroid}
        addToDestroy={handleAddToDestroy}
      />

      <ul className={styles.asteroid__data}>
        <li className={styles['asteroid__data-row']}>
          <p>Дата</p>
          <p className={styles['asteroid__data-dots']}></p>
          <p className={styles['asteroid__data-value']}>{date}</p>
        </li>
        <li className={styles['asteroid__data-row']}>
          <p>Расстояние</p>
          <p className={styles['asteroid__data-dots']}></p>
          <p className={styles['asteroid__data-value']}>{displayedDistance}</p>
        </li>
        <li className={styles['asteroid__data-row']}>
          <p>Размер</p>
          <p className={styles['asteroid__data-dots']}></p>
          <p className={styles['asteroid__data-value']}>{`${width} м`}</p>
        </li>
      </ul>
    </li>
  );
};

export default Asteroid;
