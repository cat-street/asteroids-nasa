import { ReactElement, useEffect, useRef, useState } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';
import Asteroids from '../components/Asteroids/Asteroids';
import useAsteroids from '../hooks/useAsteroids';

type Props = {
  visibleAsteroids: Record<string, any>[];
  date: Date;
  filter: boolean;
  addAsteroids: (data: Record<string, any>) => void;
  addCurrentAsteroids: (data: Record<string, any>) => void;
  addCards: () => void;
  switchFilter: () => void;
};

export default function Home({
  visibleAsteroids,
  date,
  filter,
  addAsteroids,
  addCurrentAsteroids,
  addCards,
  switchFilter,
}: Props): ReactElement {
  const { data, isLoading } = useAsteroids(date);
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
      });
      addAsteroids(asteroidData);
      if (filter) {
        const filteredData = asteroidData.filter(
          (el) => el.is_potentially_hazardous_asteroid,
        );
        addCurrentAsteroids(filteredData);
      } else {
        addCurrentAsteroids(asteroidData);
      }
    }
  }, [data]);

  return (
    <Layout title="Armageddon V">
      <Header />
      <Asteroids
        asteroids={visibleAsteroids}
        switchFilter={switchFilter}
        isLoading={isLoading}
      />
      <div ref={loader}></div>
      <Footer />
    </Layout>
  );
}
