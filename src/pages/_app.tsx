import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Layout from "../components/Layout";
import { Analytics } from '@vercel/analytics/react';

const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
};

export default MyApp;
