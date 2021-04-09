import React, { FC } from 'react';

import styles from './Asteroids.module.css'

const Asteroids: FC = () => (
  <main className={styles.main}>
    <div className={styles.filter}>
      <div>
        <input type="checkbox" name="dangerous"/>
        <label htmlFor="dangerous" className={styles.label}>Показать только опасные</label>
      </div>
      <div className={styles.sort}>
        Расстояние
        <button type="button" className={styles.button}>в километрах,</button>
        <button type="button" className={styles.button}>в дистанциях до луны</button>
      </div>
    </div>

    <ul className={styles.asteroids}>
      <li className={styles.asteroid}>

      </li>
    </ul>
  </main>
);

export default Asteroids;
