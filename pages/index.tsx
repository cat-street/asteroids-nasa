import { ReactElement, useEffect, useRef, useState } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';
import Asteroids from '../components/Asteroids/Asteroids';
import useAsteroids from '../hooks/useAsteroids';

type Props = {
  asteroids: Record<string, any>[];
  currentAsteroids: Record<string, any>[];
  addAsteroids: (data: Record<string, any>) => void;
  setCurrentAsteroids: (data: Record<string, any>) => void;
  count: number;
  addCards: () => void;
};

export default function Home({
  asteroids,
  currentAsteroids,
  addAsteroids,
  setCurrentAsteroids,
  count,
  addCards,
}: Props): ReactElement {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { data, isLoading, isError } = useAsteroids(currentDate);
  const loader = useRef<HTMLDivElement>(null);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      addCards();
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  useEffect(() => {
    if (data) {
      const initialData = Object.values(data.near_earth_objects);
      let asteroidData = [];
      for (let i = initialData.length - 1; i >= 0; i--) {
        asteroidData = asteroidData.concat(initialData[i]);
      }
      addAsteroids(asteroidData);
    }
  }, [data]);

  useEffect(() => {
    if (
      asteroids.length > 0 &&
      count >= asteroids.length - 10 &&
      count <= asteroids.length - 7
    ) {
      const date = new Date(currentDate);
      date.setDate(date.getDate() + 8);
      setCurrentDate(date);
    }
  }, [count]);

  return (
    <Layout title="Armageddon V">
      <Header />
      {isLoading && <p>Loading...</p>}
      <Asteroids asteroids={currentAsteroids} />
      <div ref={loader}></div>
      <Footer />
    </Layout>
  );
}
