import React, { FC } from 'react';

import styles from './Footer.module.css';

const Footer: FC = () => (
  <footer className={styles.footer}>
    <p className={styles.copyright}>2021 &copy; Все права и планета защищены</p>
  </footer>
);

export default Footer;
