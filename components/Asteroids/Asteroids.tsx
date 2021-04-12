import React, { FC, useState } from 'react';
import { SingleAsteroid } from '../../types/asteroids';
import Asteroid from '../Asteroid/Asteroid';
import Spinner from '../Spinner/Spinner';

import styles from './Asteroids.module.css';

type Props = {
  asteroids: Record<string, any>[];
  isLoading: boolean;
  filter: boolean;
  switchFilter: () => void;
  setAsteroid: (data: Record<string, any>) => void;
  addToDestroy: (item: SingleAsteroid) => void;
};

const Asteroids: FC<Props> = ({
  asteroids,
  isLoading,
  filter,
  switchFilter,
  setAsteroid,
  addToDestroy,
}: Props) => {
  const [measure, setMeasure] = useState<'km' | 'lunar'>('km');

  return (
    <main className={styles.main}>
      <div className={styles.filter}>
        <div className={styles.filter__check}>
          <input
            type="checkbox"
            name="dangerous"
            id="dangerous"
            onChange={switchFilter}
            checked={filter}
          />
          <label htmlFor="dangerous" className={styles.label}>
            Показать только опасные
          </label>
        </div>
        <div className={styles.filter__sort}>
          Расстояние
          <button
            type="button"
            className={`${styles.button} ${
              measure === 'km' && styles.button_active
            }`}
            onClick={() => setMeasure('km')}
          >
            в километрах,
          </button>
          <button
            type="button"
            className={`${styles.button} ${
              measure === 'lunar' && styles.button_active
            }`}
            onClick={() => setMeasure('lunar')}
          >
            в дистанциях до луны
          </button>
        </div>
      </div>

      <ul className={styles.asteroids}>
        {asteroids &&
          asteroids.map((el) => (
            <Asteroid
              key={el.id}
              asteroid={el}
              measure={measure}
              setAsteroid={setAsteroid}
              addToDestroy={addToDestroy}
            />
          ))}
      </ul>

      {isLoading && <Spinner />}
    </main>
  );
};

export default Asteroids;
