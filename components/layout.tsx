import React from "react";
import Header from "@comp/Header";
import Footer from "./Footer";

function Layout(props: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
