import React, { FC, useState } from 'react';
import Link from 'next/link';

import { SingleAsteroid } from '../../types/asteroids';
import styles from './AsteroidsToDestroy.module.css';

type Props = {
  asteroids: Record<string, SingleAsteroid>;
  onRemove: (id: string) => void;
  setAsteroid: (data: Record<string, any>) => void;
};

const AsteroidsToDestroy: FC<Props> = ({
  asteroids,
  onRemove,
  setAsteroid,
}: Props) => {
  const [success, setSuccess] = useState(false);

  const handleAsteroidClick = (el: SingleAsteroid) => {
    setAsteroid({
      id: el.id,
      name: el.name,
      date: el?.date || '',
      distance: el?.distance || '',
      width: el.width,
      hazardous: el.hazardous,
    });
  };

  return (
    <main className={styles.asteroids}>
      <ul className={styles.asteroids__grid}>
        {asteroids &&
          Object.values(asteroids).map((el) => (
            <li
              key={el.id}
              className={`${styles.asteroid} ${
                el.hazardous ? styles.bg_dangerous : styles.bg_normal
              }`}
            >
              <img
                src="/images/asteroid.svg"
                className={styles.asteroid__rock}
                alt="Астероид"
              />

              <h2 className={styles.asteroid__name}>
                <Link href={`/asteroid/${el.id}`}>
                  <button
                    type="button"
                    className={`${styles.button} ${styles.asteroid__link}`}
                    onClick={() => handleAsteroidClick(el)}
                  >
                    {el.name}
                  </button>
                </Link>
              </h2>

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

              {success ? (
                <p className={styles.asteroid__message}>Бригада в пути...</p>
              ) : (
                <button
                  type="button"
                  className={`${styles.asteroid__button} ${styles.asteroid__cancel}`}
                  onClick={() => onRemove(el.id)}
                >
                  Не уничтожать
                </button>
              )}
            </li>
          ))}
      </ul>
      {asteroids && Object.keys(asteroids).length > 0 && (
        <button
          type="button"
          className={`${styles.asteroid__button} ${styles.asteroid__confirm}`}
          onClick={() => setSuccess(true)}
        >
          Вызвать бригаду им.Брюса Уиллиса
        </button>
      )}
    </main>
  );
};

export default AsteroidsToDestroy;
