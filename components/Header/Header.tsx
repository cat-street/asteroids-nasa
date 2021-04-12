import React, { FC } from 'react';
import Link from 'next/link';
import ActiveLink from '../ActiveLink/ActiveLink';

import styles from './Header.module.css';

const Header: FC = () => (
  <header className={styles.header}>
    <div>
      <h1 className={styles.title}>
        <Link href="/">
          Armageddon V
        </Link>
      </h1>
      <p className={styles.subtitle}>
        Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.
      </p>
    </div>
    <nav>
      <ul className={styles.menu}>
        <li>
          <ActiveLink href="/" activeClassName={styles.button_active}>
            <button type="button" className={styles.button}>
              Астероиды
            </button>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/destroy" activeClassName={styles.button_active}>
            <button type="button" className={styles.button}>
              Уничтожение
            </button>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
