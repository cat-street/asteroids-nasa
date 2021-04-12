import { ReactElement, useState, useEffect } from 'react';
import type { AppProps } from 'next/app';

import { SingleAsteroid } from '../types/asteroids';
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
  const [sameData, setSameData] = useState(false);
  const [filter, setFilter] = useState(false);
  const [chosenAsteroid, setChosenAsteroid] = useState<SingleAsteroid>();

  const addVisibleCards = () => {
    setCount((count) => count + 3);
  };

  const addAsteroids = (data: Record<string, any>[]) => {
    setAsteroids((prevData) => prevData.concat(data));
  };

  const addCurrentAsteroids = (data: Record<string, any>[]) => {
    setCurrentAsteroids((prevData) => prevData.concat(data));
  };

  const switchFilter = () => {
    setFilter(!filter);
  };

  const setAsteroid = (data: SingleAsteroid) => {
    setChosenAsteroid(data);
  };

  const setDataFlag = (flag: boolean) => {
    setSameData(flag);
  }

  useEffect(() => {
    if (currentAsteroids.length > 0) {
      setVisibleAsteroids(currentAsteroids.slice(0, count));
    }
  }, [count, currentAsteroids]);

  useEffect(() => {
    if (
      currentAsteroids.length > 0 &&
      count >= currentAsteroids.length &&
      count < currentAsteroids.length + 3
    ) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + 7);
      setCurrentDate(date);
      setSameData(false);
    }
  }, [currentAsteroids, count]);

  useEffect(() => {
    if (filter) {
      const filteredAsteroids = currentAsteroids.filter(
        (el) => el.is_potentially_hazardous_asteroid,
      );
      setCurrentAsteroids(filteredAsteroids);
      setVisibleAsteroids(
        visibleAsteroids.filter((el) => el.is_potentially_hazardous_asteroid),
      );
      setCount(filteredAsteroids.length);
    } else {
      setCurrentAsteroids(asteroids);
      setVisibleAsteroids(asteroids.slice(0, count));
    }
  }, [filter]);

  return (
    <Component
      {...pageProps}
      visibleAsteroids={visibleAsteroids}
      date={currentDate}
      sameData={sameData}
      filter={filter}
      asteroid={chosenAsteroid}
      addAsteroids={addAsteroids}
      addCurrentAsteroids={addCurrentAsteroids}
      addVisibleCards={addVisibleCards}
      switchFilter={switchFilter}
      setAsteroid={setAsteroid}
      setDataFlag={setDataFlag}
    />
  );
}

export default MyApp;
