import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Layout from "../components/Layout";

const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    <Layout>
      <script data-host="https://microanalytics.io" data-dnt="false" src="https://microanalytics.io/js/script.js" id="ZwSg9rf6GA" async defer></script>
      <Component {...pageProps} />
    </Layout>
  )
};

export default MyApp;
