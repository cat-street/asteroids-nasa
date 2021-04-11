import { ReactElement, useEffect, useRef, useState } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';
import Asteroids from '../components/Asteroids/Asteroids';
import useAsteroids from '../hooks/useAsteroids';

type Props = {
  asteroids: Record<string, any>[];
  visibleAsteroids: Record<string, any>[];
  addAsteroids: (data: Record<string, any>) => void;
  setVisibleAsteroids: (data: Record<string, any>) => void;
  count: number;
  addCards: () => void;
  date: Date;
};

export default function Home({
  asteroids,
  visibleAsteroids,
  addAsteroids,
  setVisibleAsteroids,
  count,
  addCards,
  date,
}: Props): ReactElement {
  const { data, isLoading, isError } = useAsteroids(date);
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
      const initialData = Object.keys(data.near_earth_objects).sort();
      let asteroidData = [];
      initialData.map((el) => {
        asteroidData = asteroidData.concat(data.near_earth_objects[el]);
      })
      addAsteroids(asteroidData);
    }
  }, [data]);

  return (
    <Layout title="Armageddon V">
      <Header />
      {isLoading && <p>Loading...</p>}
      <Asteroids asteroids={visibleAsteroids} />
      <div ref={loader}></div>
      <Footer />
    </Layout>
  );
}
