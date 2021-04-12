import { FC } from 'react';

import styles from './AsteroidRating.module.css';

type Props = {
  addedClass?: string;
  hazardous: boolean,
  addToDestroy: () => void;
};

const AsteroidRating: FC<Props> = ({ addedClass = '', hazardous, addToDestroy }: Props) => (
  <div className={`${styles.asteroid__rating} ${addedClass}`}>
        <p>Оценка:</p>
        <p className={styles['asteroid__rating-type']}>
          {hazardous ? 'опасен' : 'не опасен'}
        </p>
        <button
          type="button"
          className={styles['asteroid__rating-button']}
          onClick={addToDestroy}
        >
          На уничтожение
        </button>
      </div>
);

export default AsteroidRating;
