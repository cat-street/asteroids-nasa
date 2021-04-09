import { ReactElement, useState } from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  const [asteroids, setAsteroids] = useState({});

  return (
    <Component
      {...pageProps}
      asteroids={asteroids}
      setAsteroids={setAsteroids}
    />
  );
}

export default MyApp;
