import type { NextPage } from "next";
import type { Session } from "next-auth";
import type { AppProps } from "next/app";
import { type AppType } from "next/app";
import Head from "next/head";
import type { ReactElement, ReactNode } from "react";
import Layout from "../components/layouts/Layout";
import CustomSessionProvider from "../components/providers/CustomSessionProvider";
import CustomPersistQueryClientProvider from "../components/providers/CustomPersistQueryClientProvider";
import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import "../utils/timeAgoInitialization";

// eslint-disable-next-line @typescript-eslint/ban-types
export type CustomNextPage<P = {}, IP = P> = NextPage<P, IP> & {
  customLayout?: (page: ReactElement) => ReactNode
  title?: string
}

type AppPropsWithLayout = AppProps & {
  Component: CustomNextPage | NextPage
}

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const originalTitle = 'title' in Component && Component.title || undefined;
  const wrapInLayout = 'customLayout' in Component && Component.customLayout
    ? Component.customLayout
    : (page: ReactElement) => <Layout title={originalTitle}>{page}</Layout>
  const title = originalTitle ? `${originalTitle} | Dive Log` : 'Dive Log'

  return (
    <CustomSessionProvider session={session} >
      <CustomPersistQueryClientProvider>
        <Head>
          <title>{title}</title>
          <meta name="description" content="" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" href="/favicon.ico" media="(prefers-color-scheme: light)" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" media="(prefers-color-scheme: light)" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" media="(prefers-color-scheme: light)" />
          <link rel="icon" href="/favicon-light.ico" media="(prefers-color-scheme: dark)" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-light-32x32.png" media="(prefers-color-scheme: dark)" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-light-16x16.png" media="(prefers-color-scheme: dark)" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        {wrapInLayout(<Component {...pageProps} />)}
      </CustomPersistQueryClientProvider>
    </CustomSessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
