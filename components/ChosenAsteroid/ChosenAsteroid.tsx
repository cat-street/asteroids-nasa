import { FC } from 'react';
import { SingleAsteroid } from '../../types/asteroids';

import formatDate from '../../utils/formatDate';
import styles from './ChosenAsteroid.module.css';

type Props = {
  asteroid: SingleAsteroid;
  data: Record<string, any>;
};

const ChosenAsteroid: FC<Props> = ({ asteroid, data }) => (
  <div className={styles.asteroid}>
    <div className={styles['asteroid__rock-container']}>
      <img
        src="/images/asteroid.svg"
        className={styles.asteroid__rock}
        alt="Астероид"
      />
    </div>
    <div className={styles.asteroid__description}>
      <h2 className={styles.asteroid__name}>{asteroid.name}</h2>
      <ul className={styles.asteroid__data}>
        <li className={styles['asteroid__data-row']}>
          <p>Дата</p>
          <p className={styles['asteroid__data-dots']}></p>
          <p className={styles['asteroid__data-value']}>{asteroid.date}</p>
        </li>
        <li className={styles['asteroid__data-row']}>
          <p>Расстояние</p>
          <p className={styles['asteroid__data-dots']}></p>
          <p className={styles['asteroid__data-value']}>{asteroid.distance}</p>
        </li>
        <li className={styles['asteroid__data-row']}>
          <p>Размер</p>
          <p className={styles['asteroid__data-dots']}></p>
          <p
            className={styles['asteroid__data-value']}
          >{`${asteroid.width} м`}</p>
        </li>
      </ul>

      <ul className={styles.asteroid__details}>
        {data.close_approach_data.map((el: Record<string, any>) => (
          <li
            className={styles.asteroid__approach}
            key={el.epoch_date_close_approach}
          >
            <ul className={styles.asteroid__data}>
              <li className={styles['asteroid__data-row']}>
                <p className={styles['asteroid__data-name']}>Дата сближения</p>
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
                  {`${el.orbiting_body}`}
                </p>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ChosenAsteroid;
