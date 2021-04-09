import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';

import styles from './Layout.module.css';

type Props = PropsWithChildren<{
  title?: string;
}>;

const Layout: FC<Props> = ({ title, children }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.container}>{children}</div>
  </>
);

export default Layout;
