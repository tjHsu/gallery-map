import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      {/* <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      /> */}
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#5D13E7" />
      {/* <meta name="msapplication-config" content="/favicon/browserconfig.xml" /> */}
      <meta name="theme-color" content="#5D13E7" />
      {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}
      <meta
        name="description"
        content={`A map help you expolore galleries in Taipei.`}
      />
      <title>Taipei Gallery Map</title>
    </Head>
  )
}

export default Meta