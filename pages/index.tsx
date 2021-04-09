import { ReactElement, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import fetch from 'node-fetch';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';
import Asteroids from '../components/Asteroids/Asteroids';

type Props = {
  data: Record<string, any>;
  asteroids: Record<string, any>[];
  setAsteroids: (data: Record<string, any>[]) => void;
};

export default function Home({
  data,
  asteroids,
  setAsteroids,
}: Props): ReactElement {
  useEffect(() => {
    setAsteroids(Object.values(data)[0]);
  }, []);

  return (
    <Layout title="Armageddon V">
      <Header />
      <Asteroids asteroids={asteroids} />
      <Footer />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const date = (new Date()).toISOString().split('T')[0];
  const result = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=v3nWcnCDTXls5Q4HvYcDIbCM91ygb5NJphV91sQ8`,
  );
  const data = await result.json();
  return {
    props: {
      data: data.near_earth_objects,
    },
  };
};
