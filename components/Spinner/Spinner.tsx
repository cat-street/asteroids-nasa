import React, { FC } from 'react';

import styles from './Spinner.module.css';

const Spinner: FC = () => (
  <div className={styles.loader}>Loading...</div>
);

export default Spinner;
