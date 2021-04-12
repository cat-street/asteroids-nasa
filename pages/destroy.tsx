import React, { FC } from 'react';
import AsteroidsToDestroy from '../components/AsteroidsToDestroy/AsteroidsToDestroy';

import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import { SingleAsteroid } from '../types/asteroids';

type Props = {
  asteroidsToDestroy: Record<string, SingleAsteroid>;
  removeFromDestroy: (id: string) => void;
  setAsteroid: (data: Record<string, any>) => void;
};

const destroy: FC<Props> = ({
  asteroidsToDestroy,
  removeFromDestroy,
  setAsteroid,
}: Props) => (
  <Layout title="Armageddon V - на уничтожение">
    <Header />
    <AsteroidsToDestroy
      asteroids={asteroidsToDestroy}
      onRemove={removeFromDestroy}
      setAsteroid={setAsteroid}
    />
  </Layout>
);

export default destroy;
