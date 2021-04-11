import { ReactElement, useState, useEffect } from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const [asteroids, setAsteroids] = useState<Record<string, any>[]>([]);
  const [currentAsteroids, setCurrentAsteroids] = useState<
    Record<string, any>[]
  >([]);
  const [count, setCount] = useState(5);

  const raiseCount = () => {
    if (asteroids.length > 0 && count >= asteroids.length) return;
    setCount((count) => count + 3);
  };

  const addAsteroids = (data: Record<string, any>[]) => {
    setAsteroids(prevData => prevData.concat(data));
  }

  useEffect(() => {
    if (asteroids.length > 0) {
      setCurrentAsteroids(asteroids.slice(0, count));
    }
  }, [count, asteroids]);

  return (
    <Component
      {...pageProps}
      asteroids={asteroids}
      currentAsteroids={currentAsteroids}
      addAsteroids={addAsteroids}
      setCurrentAsteroids={setCurrentAsteroids}
      count={count}
      addCards={raiseCount}
    />
  );
}

export default MyApp;
