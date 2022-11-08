import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Roboto&display=swap" rel="stylesheet" />
      </Head>
      <body className="relative bg-neutral-50 font-roboto text-neutral-700 transition-colors duration-500 dark:bg-neutral-900 dark:text-neutral-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
