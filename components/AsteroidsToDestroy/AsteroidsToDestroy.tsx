import { FC } from 'react';

import { SingleAsteroid } from '../../types/asteroids';
import styles from './AsteroidsToDestroy.module.css';

type Props = {
  asteroids: Record<string, SingleAsteroid>;
  onRemove: (id: string) => void;
};

const AsteroidsToDestroy: FC<Props> = ({
  asteroids,
  onRemove,
}: Props) => (
  <main className={styles.asteroids}>
    <ul className={styles.asteroids__grid}>
      {asteroids &&
        Object.values(asteroids).map((el) => (
          <li className={styles.asteroids__item}>
            <h2 className={styles.asteroid__name}> {el.name}</h2>

            <ul className={styles.asteroid__data}>
              {el.date && (
                <li className={styles['asteroid__data-row']}>
                  <p>Дата</p>
                  <p className={styles['asteroid__data-dots']}></p>
                  <p className={styles['asteroid__data-value']}>{el.date}</p>
                </li>
              )}
              {el.distance && (
                <li className={styles['asteroid__data-row']}>
                  <p>Расстояние</p>
                  <p className={styles['asteroid__data-dots']}></p>
                  <p className={styles['asteroid__data-value']}>
                    {`${el.distance} км`}
                  </p>
                </li>
              )}
              <li className={styles['asteroid__data-row']}>
                <p>Размер</p>
                <p className={styles['asteroid__data-dots']}></p>
                <p className={styles['asteroid__data-value']}>
                  {`${el.width} м`}
                </p>
              </li>
            </ul>
          </li>
        ))}
    </ul>
  </main>
);

export default AsteroidsToDestroy;
