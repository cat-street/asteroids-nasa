import { FC } from 'react';
import Asteroid from '../Asteroid/Asteroid';

import styles from './Asteroids.module.css';

type Props = {
  asteroids: Record<string, any>[];
};

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
        {asteroids && asteroids.map((el) => (
          <Asteroid key={el.id} asteroid={el} />
        ))}
      </ul>
    </main>
  );
};

export default Asteroids;
