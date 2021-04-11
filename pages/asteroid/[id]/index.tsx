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
}

const index: FC<Props> = ({ asteroid }) => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useAsteroid(id as string);

  return (
    <Layout title={`Armageddon V - ${asteroid.name}`}>
      <Header />

      {isLoading ? <Spinner /> : (
        <ChosenAsteroid asteroid={asteroid} data={data} />
      )}

    </Layout>
  );
};

export default index;
