import React, { FC } from 'react';
import AsteroidsToDestroy from '../components/AsteroidsToDestroy/AsteroidsToDestroy';

import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
import { SingleAsteroid } from '../types/asteroids';

type Props = {
  asteroidsToDestroy: Record<string, SingleAsteroid>;
  removeFromDestroy: (id: string) => void;
};

const destroy: FC<Props> = ({
  asteroidsToDestroy,
  removeFromDestroy,
}: Props) => (
  <Layout title="Armageddon V - на уничтожение">
    <Header />
    <AsteroidsToDestroy
      asteroids={asteroidsToDestroy}
      onRemove={removeFromDestroy}
    />
  </Layout>
);

export default destroy;
