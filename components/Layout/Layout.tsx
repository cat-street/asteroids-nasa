import React, { FC, PropsWithChildren } from 'react';
import Head from 'next/head';

import styles from './Layout.module.css';

type Props = PropsWithChildren<{
  title?: string;
}>;

const Layout: FC<Props> = ({ title, children }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="image" property="og:image"
        content="https://asteroids-nasa.vercel.app/images/asteroids_og.png" />
      <meta name="description" property="og:description"
        content="Near Earth asteroids removal program - a test assignment app. Made on Next.js/React/TypeScript/NASA API" />
      <meta name="author" content="Andrey Kudryavtsev <catlogic@ya.ru>" />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.container}>{children}</div>
  </>
);

export default Layout;
