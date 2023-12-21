import type { AppProps } from "next/app";
import React from "react";
import Layout from "@comp/layout";

import "../styles/error.css";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export function reportWebVitals(metric: any) {
  console.log({ metric });
}

export default MyApp;
