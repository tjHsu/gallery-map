import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import Layout from "../components/Layout";

const MyApp: AppType = ({ Component, pageProps }) => {

  return (
    <Layout>
      <script type='text/javascript'>
        window.smartlook||(function(d) {
          var o=smartlook=function(){o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
          var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
          c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
        })(document);
        smartlook('init', 'bcd622dee28566231097b08a614f2ac2a4c1de02', {region: 'eu' });
      </script>
      <Component {...pageProps} />
    </Layout>
  )
};

export default MyApp;
