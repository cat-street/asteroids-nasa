import { ReactElement, useEffect, useRef } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';
import Asteroids from '../components/Asteroids/Asteroids';
import useAsteroids from '../hooks/useAsteroids';

type Props = {
  asteroids: Record<string, any>[];
  currentAsteroids: Record<string, any>[];
  setAsteroids: (data: Record<string, any>) => void;
  setCurrentAsteroids: (data: Record<string, any>) => void;
  count: number;
  addCards: () => void;
};

export default function Home({
  asteroids,
  currentAsteroids,
  setAsteroids,
  setCurrentAsteroids,
  count,
  addCards,
}: Props): ReactElement {
  const { data, isLoading, isError } = useAsteroids(new Date());
  const loader = useRef(null);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      addCards();
    }
  }

  useEffect(() => {
    if (data) {
      const initialData = Object.values(data.near_earth_objects);
      let asteroidData = [];
      for (let i = initialData.length - 1; i >= 0; i--) {
        asteroidData = asteroidData.concat(initialData[i]);
      }
      setAsteroids(asteroidData);
    }
  }, [data]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  return (
    <Layout title="Armageddon V">
      <Header />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Asteroids asteroids={currentAsteroids} />
      )}
      <div ref={loader}>TEST</div>
      <Footer />
    </Layout>
  );
}
