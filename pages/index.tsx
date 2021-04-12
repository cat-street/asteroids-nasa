import { ReactElement, useEffect, useRef } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';
import Asteroids from '../components/Asteroids/Asteroids';
import useAsteroids from '../hooks/useAsteroids';

type Props = {
  visibleAsteroids: Record<string, any>[];
  date: Date;
  filter: boolean;
  sameData: boolean;
  addAsteroids: (data: Record<string, any>) => void;
  addCurrentAsteroids: (data: Record<string, any>) => void;
  addVisibleCards: () => void;
  switchFilter: () => void;
  setAsteroid: (data: Record<string, any>) => void;
  setDataFlag: (flag: boolean) => void;
};

export default function Home({
  visibleAsteroids,
  date,
  filter,
  sameData,
  addAsteroids,
  addCurrentAsteroids,
  addVisibleCards,
  switchFilter,
  setAsteroid,
  setDataFlag,
}: Props): ReactElement {
  const { data, isLoading } = useAsteroids(date);
  const loader = useRef<HTMLDivElement>(null);

  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      addVisibleCards();
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
    if (data && !sameData) {
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
      setDataFlag(true);
    }
  }, [data]);

  return (
    <Layout title="Armageddon V">
      <Header />
      <Asteroids
        asteroids={visibleAsteroids}
        filter={filter}
        switchFilter={switchFilter}
        isLoading={isLoading}
        setAsteroid={setAsteroid}
      />
      <div ref={loader}></div>
      <Footer />
    </Layout>
  );
}
