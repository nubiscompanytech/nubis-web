import type { AppProps } from "next/app";
import React from "react";
import Layout from "@comp/layout";
import NextNProgress from "nextjs-progressbar";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/effect-coverflow";
// import "swiper/css/thumbs";
// import "swiper/css/free-mode";

import "../styles/error.css";
import "../styles/global.css";
import { ConfigProvider } from "antd";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#997a00",
          colorPrimaryBgHover: "#997a0060",
          colorPrimaryBg: "#997a00",
        },
      }}
    >
      <Layout>
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  );
}

export function reportWebVitals(metric: any) {
  console.log({ metric });
}

export default MyApp;
