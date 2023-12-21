import React from "react";
import Header from "@comp/Header";
import Footer from "./Footer";
import NextNProgress from "nextjs-progressbar";
import { ConfigProvider } from "antd";

function Layout(props: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#601B96",
          colorPrimaryBgHover: "#997a0060",
          colorPrimaryBg: "#601B96",
        },
      }}
    >
      <NextNProgress color="#601B96" />
      <Header />
      <main className="min-h-[calc(100vh-150px)]">{props.children}</main>
      <Footer />
    </ConfigProvider>
  );
}

export default Layout;
