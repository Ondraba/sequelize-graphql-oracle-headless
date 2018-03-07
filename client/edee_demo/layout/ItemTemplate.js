import Link from "next/link";
import Head from "next/head";

export default ({ children, title = "Item template" }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>Item template</header>
    {children}
    <footer>Footer</footer>
  </div>
);
