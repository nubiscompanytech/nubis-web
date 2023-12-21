import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { createCache, extractStyle, StyleProvider } from "@ant-design/cssinjs";
import type { DocumentContext } from "next/document";

const MyDocument = () => (
  <Html lang="en">
    <Head>
      <link href={`/favicon.png`} rel="shortcut icon" />
      <link rel="icon" type="image/x-icon" href={`/identity/favicon.png`} />
      <meta content="#ed017f" name="theme-color" />
      <meta content="#ed017f" name="msapplication-TileColor" />
      <meta content="#ed017f" name="msapplication-TileColor" />
      <meta content="yes" name="mobile-web-app-capable" />
      <meta content="nubis" name="application-name" />
      <link href="/identity/logo.png" rel="icon" sizes="192x80" />
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta content="#ed017f" name="apple-mobile-web-app-status-bar-style" />
      <meta content="nubis" name="apple-mobile-web-app-title" />
      <link href="/identity/favicon.png" rel="apple-touch-icon" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="@nubis" name="twitter:site" />
      <meta content="website" property="og:type" />
      <meta content="en-US" property="og:locale" />
      <meta content="image/png" property="og:image:type" />
      <meta content="400" property="og:image:height" />
      <meta content="600" property="og:image:width" />
      <meta content="INDEX,FOLLOW" name="robots" />
      <meta
        content="unisex fashion store, men and women fashion, great online shopping sites to buy from, online shopping, buyer protection guaranteed, online shopping in nigeria, online shopping sites with the best prices, online shopping sites, online shopping sites in nigeria, online shopping websites, online fashion shopping , fashion shopping, nubis Fashion Store, online shopping stores in lagos, Nigeria's number one online shopping, first choice fashion store, Everything fashion online shopping, order online, purchase genuine products, top brands, fast shipping, 100% satisfaction, find perfect match, fashion wears, decide what to wear, vintage wears, rugged wears, sneakers, designer"
        name="keywords"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,600&display=swap"
        rel="stylesheet"
      />
      <title>Nubis</title>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  };
};

export default MyDocument;
