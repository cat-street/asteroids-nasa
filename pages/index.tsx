import { ReactElement } from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';
import Asteroids from '../components/Asteroids/Asteroids';

export default function Home(): ReactElement {
  return (
    <Layout title="Armageddon V">
      <Header />
      <Asteroids />
      <Footer />
    </Layout>
  );
}
