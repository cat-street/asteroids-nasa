import { FC } from 'react';
import { SingleAsteroid } from '../../types/asteroids';

import formatDate from '../../utils/formatDate';
import AsteroidRating from '../AsteroidRating/AsteroidRating';
import styles from './ChosenAsteroid.module.css';

type Props = {
  asteroid: SingleAsteroid;
  data: Record<string, any>;
  addToDestroy: (item: SingleAsteroid) => void;
};

const planets = {
  Earth: 'Земли',
  Merc: 'Меркурия',
  Venus: 'Венеры',
  Juptr: 'Юпитера',
  Mars: 'Марса',
  Moon: 'Луны',
};

const ChosenAsteroid: FC<Props> = ({ asteroid, data, addToDestroy }) => {
  const dataName = data.name.replace(/.*\(([\w ]+)\)/g, '$1');

  const width = (
    (data.estimated_diameter.meters.estimated_diameter_min +
      data.estimated_diameter.meters.estimated_diameter_max) /
    2
  ).toFixed();

  const handleAddToDestroy = () => {
    addToDestroy({
      id: asteroid?.id || data.id,
      name: asteroid?.name || dataName,
      date: asteroid?.date || '',
      distance: asteroid?.distance || '',
      width,
      hazardous: asteroid?.hazardous || data.is_potentially_hazardous_asteroid,
    });
  };

  return (
    <main
      className={`${styles.asteroid} ${
        data.is_potentially_hazardous_asteroid
          ? styles.bg_dangerous
          : styles.bg_normal
      }`}
    >
      <div className={styles['asteroid__rock-container']}>
        <img
          src="/images/asteroid.svg"
          className={styles.asteroid__rock}
          alt="Астероид"
        />

        <AsteroidRating
          hazardous={data.is_potentially_hazardous_asteroid}
          addToDestroy={handleAddToDestroy}
        />
      </div>

      <div className={styles.asteroid__description}>
        <h2 className={styles.asteroid__name}>{asteroid?.name || dataName}</h2>

        <ul className={styles.asteroid__data}>
          {asteroid && (
            <>
              <li className={styles['asteroid__data-row']}>
                <p>Дата</p>
                <p className={styles['asteroid__data-dots']}></p>
                <p className={styles['asteroid__data-value']}>
                  {asteroid.date}
                </p>
              </li>
              <li className={styles['asteroid__data-row']}>
                <p>Расстояние</p>
                <p className={styles['asteroid__data-dots']}></p>
                <p className={styles['asteroid__data-value']}>
                  {asteroid.distance}
                </p>
              </li>
            </>
          )}
          <li className={styles['asteroid__data-row']}>
            <p>Размер</p>
            <p className={styles['asteroid__data-dots']}></p>
            <p className={styles['asteroid__data-value']}>{`${
              asteroid?.width || width
            } м`}</p>
          </li>
        </ul>

        <h3 className={styles['asteroid__details-title']}>Все сближения:</h3>
        <ul className={styles.asteroid__details}>
          {data.close_approach_data.map((el: Record<string, any>) => (
            <li
              className={styles.asteroid__approach}
              key={el.epoch_date_close_approach}
            >
              <ul className={styles.asteroid__data}>
                <li className={styles['asteroid__data-row']}>
                  <p className={styles['asteroid__data-name']}>
                    Дата сближения
                  </p>
                  <p className={styles['asteroid__data-dots']}></p>
                  <p className={styles['asteroid__data-value']}>
                    {formatDate(el.close_approach_date)}
                  </p>
                </li>
                <li className={styles['asteroid__data-row']}>
                  <p className={styles['asteroid__data-name']}>
                    Время макс. сближения
                  </p>
                  <p className={styles['asteroid__data-dots']}></p>
                  <p className={styles['asteroid__data-value']}>
                    {`${el.close_approach_date_full.split(' ')[1]} GMT`}
                  </p>
                </li>
                <li className={styles['asteroid__data-row']}>
                  <p className={styles['asteroid__data-name']}>
                    Скорость относительно Земли
                  </p>
                  <p className={styles['asteroid__data-dots']}></p>
                  <p className={styles['asteroid__data-value']}>
                    {`${parseInt(
                      el.relative_velocity.kilometers_per_second,
                    )} км/с`}
                  </p>
                </li>
                <li className={styles['asteroid__data-row']}>
                  <p className={styles['asteroid__data-name']}>
                    Расстояние до Земли
                  </p>
                  <p className={styles['asteroid__data-dots']}></p>
                  <p className={styles['asteroid__data-value']}>
                    {`${parseInt(
                      el.miss_distance.kilometers,
                    ).toLocaleString()} км`}
                  </p>
                </li>
                <li className={styles['asteroid__data-row']}>
                  <p className={styles['asteroid__data-name']}>На орбите</p>
                  <p className={styles['asteroid__data-dots']}></p>
                  <p className={styles['asteroid__data-value']}>
                    {`${planets[el.orbiting_body] || el.orbiting_body}`}
                  </p>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ChosenAsteroid;
