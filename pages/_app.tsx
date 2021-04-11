import { ReactElement, useState, useEffect } from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const [asteroids, setAsteroids] = useState<Record<string, any>[]>([]);
  const [visibleAsteroids, setVisibleAsteroids] = useState<
    Record<string, any>[]
  >([]);
  const [currentAsteroids, setCurrentAsteroids] = useState<
    Record<string, any>[]
  >([]);
  const [count, setCount] = useState(5);
  const [currentDate, setCurrentDate] = useState(new Date());

  const raiseCount = () => {
    if (asteroids.length > 0 && count >= asteroids.length) return;
    setCount((count) => count + 3);
  };

  const addAsteroids = (data: Record<string, any>[]) => {
    setAsteroids(prevData => prevData.concat(data));
  }

  useEffect(() => {
    if (asteroids.length > 0) {
      setVisibleAsteroids(asteroids.slice(0, count));
    }
  }, [count, asteroids]);

  useEffect(() => {
    if (
      asteroids.length > 0 &&
      count >= asteroids.length - 10 &&
      count <= asteroids.length - 7
    ) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + 7);
      setCurrentDate(date);
    }
  }, [count]);

    return (
    <Component
      {...pageProps}
      asteroids={asteroids}
      visibleAsteroids={visibleAsteroids}
      addAsteroids={addAsteroids}
      setVisibleAsteroids={setVisibleAsteroids}
      count={count}
      addCards={raiseCount}
      date={currentDate}
    />
  );
}

export default MyApp;
