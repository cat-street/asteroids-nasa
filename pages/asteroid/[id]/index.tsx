import { FC } from 'react';
import { useRouter } from 'next/router';

import useAsteroid from '../../../hooks/useAsteroid';
import Layout from '../../../components/Layout/Layout';
import Header from '../../../components/Header/Header';
import Spinner from '../../../components/Spinner/Spinner';

import { SingleAsteroid } from '../../../types/asteroids';
import ChosenAsteroid from '../../../components/ChosenAsteroid/ChosenAsteroid';

type Props = {
  asteroid: SingleAsteroid;
  addToDestroy: (item: SingleAsteroid) => void;
};

const index: FC<Props> = ({ asteroid, addToDestroy }) => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useAsteroid(id as string);
  const title = data ? `Armageddon V - ${data.name}` : 'Armageddon V';

  return (
    <Layout title={title}>
      <Header />

      {isLoading ? (
        <Spinner />
      ) : (
        <ChosenAsteroid
          asteroid={asteroid}
          data={data}
          addToDestroy={addToDestroy}
        />
      )}
    </Layout>
  );
};

export default index;
